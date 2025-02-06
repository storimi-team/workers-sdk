import fs from "fs/promises";
import SCRIPT_QUEUE_BROKER_OBJECT from "worker:queues/broker";
import { z } from "zod";
import {
	Service,
	Worker_Binding,
	Worker_Binding_DurableObjectNamespaceDesignator,
} from "../../runtime";
import {
	QueueBindings,
	QueueConsumerOptionsSchema,
	QueueProducerOptionsSchema,
	SharedBindings,
} from "../../workers";
import { getUserServiceName } from "../core";
import {
	getMiniflareObjectBindings,
	getPersistPath,
	objectEntryWorker,
	PersistenceSchema,
	Plugin,
	ProxyNodeBinding,
	SERVICE_LOOPBACK,
} from "../shared";
import {
	QUEUE_BROKER_OBJECT_CLASS_NAME,
	QUEUES_PLUGIN_NAME,
	QUEUES_STORAGE_SERVICE_NAME,
	SERVICE_QUEUE_PREFIX,
} from "./constants";
import { QueuesError } from "./errors";

export const QueuesOptionsSchema = z.object({
	queueProducers: z
		.union([
			z.record(QueueProducerOptionsSchema),
			z.string().array(),
			z.record(z.string()),
		])
		.optional(),
	queueConsumers: z
		.union([z.record(QueueConsumerOptionsSchema), z.string().array()])
		.optional(),
});

export const QueuesSharedOptionsSchema = z.object({
	queuesPersist: PersistenceSchema,
});

export const QueueProducerSchema = z.object({
	workerName: z.string(),
	queueName: z.string(),
	batchSize: z.number().int().positive().optional(),
	maxWaitMs: z.number().int().nonnegative().optional(),
	maxRetries: z.number().int().nonnegative().optional(),
	deadLetterQueue: z.string().optional(),
});

export const QueueConsumerSchema = z.object({
	workerName: z.string(),
	batchSize: z.number().int().positive().optional(),
	maxWaitMs: z.number().int().nonnegative().optional(),
	maxRetries: z.number().int().nonnegative().optional(),
	deadLetterQueue: z.string().optional(),
});

export type QueueProducers = Map<string, z.infer<typeof QueueProducerSchema>>;
export type QueueConsumers = Map<string, z.infer<typeof QueueConsumerSchema>>;

const QUEUE_BROKER_OBJECT: Worker_Binding_DurableObjectNamespaceDesignator = {
	serviceName: SERVICE_QUEUE_PREFIX,
	className: QUEUE_BROKER_OBJECT_CLASS_NAME,
};

function validateQueueConsumers(
	options: z.infer<typeof QueuesOptionsSchema>
): QueueConsumers {
	const queueConsumers: QueueConsumers = new Map();
	let workerConsumers = options.queueConsumers;

	if (workerConsumers !== undefined) {
		if (Array.isArray(workerConsumers)) {
			workerConsumers = Object.fromEntries(
				workerConsumers.map((queueName) => [queueName, {} as const])
			);
		}

		for (const [queueName, opts] of Object.entries(workerConsumers)) {
			// Only validate that a queue isn't its own DLQ
			// (other validations will move to DO)
			if (opts.deadLetterQueue === queueName) {
				throw new QueuesError(
					"ERR_DEAD_LETTER_QUEUE_CYCLE",
					`Dead letter queue for queue "${queueName}" cannot be itself`
				);
			}
			queueConsumers.set(queueName, opts);
		}
	}

	return queueConsumers;
}

export const QUEUES_PLUGIN: Plugin<
	typeof QueuesOptionsSchema,
	typeof QueuesSharedOptionsSchema
> = {
	options: QueuesOptionsSchema,
	sharedOptions: QueuesSharedOptionsSchema,
	getBindings(options) {
		const queues = bindingEntries(options.queueProducers);
		return queues.map<Worker_Binding>(([name, id]) => ({
			name,
			queue: { name: `${SERVICE_QUEUE_PREFIX}:${id}` },
		}));
	},
	getNodeBindings(options) {
		const queues = bindingKeys(options.queueProducers);
		return Object.fromEntries(
			queues.map((name) => [name, new ProxyNodeBinding()])
		);
	},

	async getServices({ options, sharedOptions, unsafeStickyBlobs, tmpPath }) {
		const persist = sharedOptions.queuesPersist;
		const queues = bindingEntries(options.queueProducers);
		if (queues.length === 0) return [];

		// Only validate consumers for DLQ cycles
		const queueConsumers = validateQueueConsumers(options);

		const services = queues.map<Service>(([_, id]) => ({
			name: `${SERVICE_QUEUE_PREFIX}:${id}`,
			worker: objectEntryWorker(QUEUE_BROKER_OBJECT, id),
		}));

		const uniqueKey = `miniflare-${QUEUE_BROKER_OBJECT_CLASS_NAME}`;
		const persistPath = getPersistPath(QUEUES_PLUGIN_NAME, tmpPath, persist);
		await fs.mkdir(persistPath, { recursive: true });
		const storageService: Service = {
			name: QUEUES_STORAGE_SERVICE_NAME,
			disk: { path: persistPath, writable: true },
		};

		const objectService: Service = {
			name: SERVICE_QUEUE_PREFIX,
			worker: {
				compatibilityDate: "2023-07-24",
				compatibilityFlags: [
					"nodejs_compat",
					"experimental",
					"service_binding_extra_handlers",
				],
				modules: [
					{
						name: "broker.worker.js",
						esModule: SCRIPT_QUEUE_BROKER_OBJECT(),
					},
				],
				durableObjectNamespaces: [
					{
						className: QUEUE_BROKER_OBJECT_CLASS_NAME,
						uniqueKey,
						preventEviction: true,
					},
				],
				durableObjectStorage: { localDisk: QUEUES_STORAGE_SERVICE_NAME },
				bindings: [
					{
						name: SharedBindings.MAYBE_SERVICE_LOOPBACK,
						service: { name: SERVICE_LOOPBACK },
					},
					...getMiniflareObjectBindings(unsafeStickyBlobs),
					{
						name: SharedBindings.DURABLE_OBJECT_NAMESPACE_OBJECT,
						durableObjectNamespace: {
							className: QUEUE_BROKER_OBJECT_CLASS_NAME,
						},
					},
					{
						name: QueueBindings.MAYBE_JSON_QUEUE_PRODUCERS,
						json: JSON.stringify(Object.fromEntries(options.queueProducers)),
					},
					{
						name: QueueBindings.MAYBE_JSON_QUEUE_CONSUMERS,
						json: JSON.stringify(Object.fromEntries(queueConsumers)),
					},
				],
			},
		};
		services.push(objectService, storageService);

		return services;
	},
};

function bindingEntries(
	namespaces?:
		| Record<string, { queueName: string; deliveryDelay?: number }>
		| string[]
		| Record<string, string>
): [bindingName: string, id: string][] {
	if (Array.isArray(namespaces)) {
		return namespaces.map((bindingName) => [bindingName, bindingName]);
	} else if (namespaces !== undefined) {
		return Object.entries(namespaces).map(([name, opts]) => [
			name,
			typeof opts === "string" ? opts : opts.queueName,
		]);
	} else {
		return [];
	}
}

function bindingKeys(
	namespaces?:
		| Record<string, { queueName: string; deliveryDelay?: number }>
		| string[]
		| Record<string, string>
): string[] {
	if (Array.isArray(namespaces)) {
		return namespaces;
	} else if (namespaces !== undefined) {
		return Object.keys(namespaces);
	} else {
		return [];
	}
}

export * from "./errors";
export { QUEUES_PLUGIN_NAME } from "./constants";
