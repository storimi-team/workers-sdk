/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
import * as capnp from "capnp-ts";
import { Struct as __S } from "capnp-ts";
export declare const _capnpFileId = "e6afd26682091c01";
export declare class Config extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	static _Services: capnp.ListCtor<Service>;
	static _Sockets: capnp.ListCtor<Socket>;
	static _Extensions: capnp.ListCtor<Extension>;
	adoptServices(value: capnp.Orphan<capnp.List<Service>>): void;
	disownServices(): capnp.Orphan<capnp.List<Service>>;
	getServices(): capnp.List<Service>;
	hasServices(): boolean;
	initServices(length: number): capnp.List<Service>;
	setServices(value: capnp.List<Service>): void;
	adoptSockets(value: capnp.Orphan<capnp.List<Socket>>): void;
	disownSockets(): capnp.Orphan<capnp.List<Socket>>;
	getSockets(): capnp.List<Socket>;
	hasSockets(): boolean;
	initSockets(length: number): capnp.List<Socket>;
	setSockets(value: capnp.List<Socket>): void;
	adoptV8Flags(value: capnp.Orphan<capnp.List<string>>): void;
	disownV8Flags(): capnp.Orphan<capnp.List<string>>;
	getV8Flags(): capnp.List<string>;
	hasV8Flags(): boolean;
	initV8Flags(length: number): capnp.List<string>;
	setV8Flags(value: capnp.List<string>): void;
	adoptExtensions(value: capnp.Orphan<capnp.List<Extension>>): void;
	disownExtensions(): capnp.Orphan<capnp.List<Extension>>;
	getExtensions(): capnp.List<Extension>;
	hasExtensions(): boolean;
	initExtensions(length: number): capnp.List<Extension>;
	setExtensions(value: capnp.List<Extension>): void;
	toString(): string;
}
export declare class Socket_Https extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	adoptOptions(value: capnp.Orphan<HttpOptions>): void;
	disownOptions(): capnp.Orphan<HttpOptions>;
	getOptions(): HttpOptions;
	hasOptions(): boolean;
	initOptions(): HttpOptions;
	setOptions(value: HttpOptions): void;
	adoptTlsOptions(value: capnp.Orphan<TlsOptions>): void;
	disownTlsOptions(): capnp.Orphan<TlsOptions>;
	getTlsOptions(): TlsOptions;
	hasTlsOptions(): boolean;
	initTlsOptions(): TlsOptions;
	setTlsOptions(value: TlsOptions): void;
	toString(): string;
}
export declare enum Socket_Which {
	HTTP = 0,
	HTTPS = 1,
}
export declare class Socket extends __S {
	static readonly HTTP = Socket_Which.HTTP;
	static readonly HTTPS = Socket_Which.HTTPS;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	getAddress(): string;
	setAddress(value: string): void;
	adoptHttp(value: capnp.Orphan<HttpOptions>): void;
	disownHttp(): capnp.Orphan<HttpOptions>;
	getHttp(): HttpOptions;
	hasHttp(): boolean;
	initHttp(): HttpOptions;
	isHttp(): boolean;
	setHttp(value: HttpOptions): void;
	getHttps(): Socket_Https;
	initHttps(): Socket_Https;
	isHttps(): boolean;
	setHttps(): void;
	adoptService(value: capnp.Orphan<ServiceDesignator>): void;
	disownService(): capnp.Orphan<ServiceDesignator>;
	getService(): ServiceDesignator;
	hasService(): boolean;
	initService(): ServiceDesignator;
	setService(value: ServiceDesignator): void;
	toString(): string;
	which(): Socket_Which;
}
export declare enum Service_Which {
	UNSPECIFIED = 0,
	WORKER = 1,
	NETWORK = 2,
	EXTERNAL = 3,
	DISK = 4,
}
export declare class Service extends __S {
	static readonly UNSPECIFIED = Service_Which.UNSPECIFIED;
	static readonly WORKER = Service_Which.WORKER;
	static readonly NETWORK = Service_Which.NETWORK;
	static readonly EXTERNAL = Service_Which.EXTERNAL;
	static readonly DISK = Service_Which.DISK;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	isUnspecified(): boolean;
	setUnspecified(): void;
	adoptWorker(value: capnp.Orphan<Worker>): void;
	disownWorker(): capnp.Orphan<Worker>;
	getWorker(): Worker;
	hasWorker(): boolean;
	initWorker(): Worker;
	isWorker(): boolean;
	setWorker(value: Worker): void;
	adoptNetwork(value: capnp.Orphan<Network>): void;
	disownNetwork(): capnp.Orphan<Network>;
	getNetwork(): Network;
	hasNetwork(): boolean;
	initNetwork(): Network;
	isNetwork(): boolean;
	setNetwork(value: Network): void;
	adoptExternal(value: capnp.Orphan<ExternalServer>): void;
	disownExternal(): capnp.Orphan<ExternalServer>;
	getExternal(): ExternalServer;
	hasExternal(): boolean;
	initExternal(): ExternalServer;
	isExternal(): boolean;
	setExternal(value: ExternalServer): void;
	adoptDisk(value: capnp.Orphan<DiskDirectory>): void;
	disownDisk(): capnp.Orphan<DiskDirectory>;
	getDisk(): DiskDirectory;
	hasDisk(): boolean;
	initDisk(): DiskDirectory;
	isDisk(): boolean;
	setDisk(value: DiskDirectory): void;
	toString(): string;
	which(): Service_Which;
}
export declare class ServiceDesignator extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	getEntrypoint(): string;
	setEntrypoint(value: string): void;
	toString(): string;
}
export declare enum Worker_Module_Which {
	ES_MODULE = 0,
	COMMON_JS_MODULE = 1,
	TEXT = 2,
	DATA = 3,
	WASM = 4,
	JSON = 5,
	NODE_JS_COMPAT_MODULE = 6,
}
export declare class Worker_Module extends __S {
	static readonly ES_MODULE = Worker_Module_Which.ES_MODULE;
	static readonly COMMON_JS_MODULE = Worker_Module_Which.COMMON_JS_MODULE;
	static readonly TEXT = Worker_Module_Which.TEXT;
	static readonly DATA = Worker_Module_Which.DATA;
	static readonly WASM = Worker_Module_Which.WASM;
	static readonly JSON = Worker_Module_Which.JSON;
	static readonly NODE_JS_COMPAT_MODULE =
		Worker_Module_Which.NODE_JS_COMPAT_MODULE;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	getEsModule(): string;
	isEsModule(): boolean;
	setEsModule(value: string): void;
	getCommonJsModule(): string;
	isCommonJsModule(): boolean;
	setCommonJsModule(value: string): void;
	getText(): string;
	isText(): boolean;
	setText(value: string): void;
	adoptData(value: capnp.Orphan<capnp.Data>): void;
	disownData(): capnp.Orphan<capnp.Data>;
	getData(): capnp.Data;
	hasData(): boolean;
	initData(length: number): capnp.Data;
	isData(): boolean;
	setData(value: capnp.Data): void;
	adoptWasm(value: capnp.Orphan<capnp.Data>): void;
	disownWasm(): capnp.Orphan<capnp.Data>;
	getWasm(): capnp.Data;
	hasWasm(): boolean;
	initWasm(length: number): capnp.Data;
	isWasm(): boolean;
	setWasm(value: capnp.Data): void;
	getJson(): string;
	isJson(): boolean;
	setJson(value: string): void;
	getNodeJsCompatModule(): string;
	isNodeJsCompatModule(): boolean;
	setNodeJsCompatModule(value: string): void;
	toString(): string;
	which(): Worker_Module_Which;
}
export declare enum Worker_Binding_Type_Which {
	UNSPECIFIED = 0,
	TEXT = 1,
	DATA = 2,
	JSON = 3,
	WASM = 4,
	CRYPTO_KEY = 5,
	SERVICE = 6,
	DURABLE_OBJECT_NAMESPACE = 7,
	KV_NAMESPACE = 8,
	R2BUCKET = 9,
	R2ADMIN = 10,
	QUEUE = 11,
	ANALYTICS_ENGINE = 12,
	HYPERDRIVE = 13,
}
export declare class Worker_Binding_Type extends __S {
	static readonly UNSPECIFIED = Worker_Binding_Type_Which.UNSPECIFIED;
	static readonly TEXT = Worker_Binding_Type_Which.TEXT;
	static readonly DATA = Worker_Binding_Type_Which.DATA;
	static readonly JSON = Worker_Binding_Type_Which.JSON;
	static readonly WASM = Worker_Binding_Type_Which.WASM;
	static readonly CRYPTO_KEY = Worker_Binding_Type_Which.CRYPTO_KEY;
	static readonly SERVICE = Worker_Binding_Type_Which.SERVICE;
	static readonly DURABLE_OBJECT_NAMESPACE =
		Worker_Binding_Type_Which.DURABLE_OBJECT_NAMESPACE;
	static readonly KV_NAMESPACE = Worker_Binding_Type_Which.KV_NAMESPACE;
	static readonly R2BUCKET = Worker_Binding_Type_Which.R2BUCKET;
	static readonly R2ADMIN = Worker_Binding_Type_Which.R2ADMIN;
	static readonly QUEUE = Worker_Binding_Type_Which.QUEUE;
	static readonly ANALYTICS_ENGINE = Worker_Binding_Type_Which.ANALYTICS_ENGINE;
	static readonly HYPERDRIVE = Worker_Binding_Type_Which.HYPERDRIVE;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	isUnspecified(): boolean;
	setUnspecified(): void;
	isText(): boolean;
	setText(): void;
	isData(): boolean;
	setData(): void;
	isJson(): boolean;
	setJson(): void;
	isWasm(): boolean;
	setWasm(): void;
	adoptCryptoKey(
		value: capnp.Orphan<capnp.List<Worker_Binding_CryptoKey_Usage>>
	): void;
	disownCryptoKey(): capnp.Orphan<capnp.List<Worker_Binding_CryptoKey_Usage>>;
	getCryptoKey(): capnp.List<Worker_Binding_CryptoKey_Usage>;
	hasCryptoKey(): boolean;
	initCryptoKey(length: number): capnp.List<Worker_Binding_CryptoKey_Usage>;
	isCryptoKey(): boolean;
	setCryptoKey(value: capnp.List<Worker_Binding_CryptoKey_Usage>): void;
	isService(): boolean;
	setService(): void;
	isDurableObjectNamespace(): boolean;
	setDurableObjectNamespace(): void;
	isKvNamespace(): boolean;
	setKvNamespace(): void;
	isR2Bucket(): boolean;
	setR2Bucket(): void;
	isR2Admin(): boolean;
	setR2Admin(): void;
	isQueue(): boolean;
	setQueue(): void;
	isAnalyticsEngine(): boolean;
	setAnalyticsEngine(): void;
	isHyperdrive(): boolean;
	setHyperdrive(): void;
	toString(): string;
	which(): Worker_Binding_Type_Which;
}
export declare class Worker_Binding_DurableObjectNamespaceDesignator extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getClassName(): string;
	setClassName(value: string): void;
	getServiceName(): string;
	setServiceName(value: string): void;
	toString(): string;
}
export declare enum Worker_Binding_CryptoKey_Usage {
	ENCRYPT = 0,
	DECRYPT = 1,
	SIGN = 2,
	VERIFY = 3,
	DERIVE_KEY = 4,
	DERIVE_BITS = 5,
	WRAP_KEY = 6,
	UNWRAP_KEY = 7,
}
export declare enum Worker_Binding_CryptoKey_Algorithm_Which {
	NAME = 0,
	JSON = 1,
}
export declare class Worker_Binding_CryptoKey_Algorithm extends __S {
	static readonly NAME = Worker_Binding_CryptoKey_Algorithm_Which.NAME;
	static readonly JSON = Worker_Binding_CryptoKey_Algorithm_Which.JSON;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	isName(): boolean;
	setName(value: string): void;
	getJson(): string;
	isJson(): boolean;
	setJson(value: string): void;
	toString(): string;
	which(): Worker_Binding_CryptoKey_Algorithm_Which;
}
export declare enum Worker_Binding_CryptoKey_Which {
	RAW = 0,
	HEX = 1,
	BASE64 = 2,
	PKCS8 = 3,
	SPKI = 4,
	JWK = 5,
}
export declare class Worker_Binding_CryptoKey extends __S {
	static readonly RAW = Worker_Binding_CryptoKey_Which.RAW;
	static readonly HEX = Worker_Binding_CryptoKey_Which.HEX;
	static readonly BASE64 = Worker_Binding_CryptoKey_Which.BASE64;
	static readonly PKCS8 = Worker_Binding_CryptoKey_Which.PKCS8;
	static readonly SPKI = Worker_Binding_CryptoKey_Which.SPKI;
	static readonly JWK = Worker_Binding_CryptoKey_Which.JWK;
	static readonly Usage: typeof Worker_Binding_CryptoKey_Usage;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultExtractable: DataView;
	};
	adoptRaw(value: capnp.Orphan<capnp.Data>): void;
	disownRaw(): capnp.Orphan<capnp.Data>;
	getRaw(): capnp.Data;
	hasRaw(): boolean;
	initRaw(length: number): capnp.Data;
	isRaw(): boolean;
	setRaw(value: capnp.Data): void;
	getHex(): string;
	isHex(): boolean;
	setHex(value: string): void;
	getBase64(): string;
	isBase64(): boolean;
	setBase64(value: string): void;
	getPkcs8(): string;
	isPkcs8(): boolean;
	setPkcs8(value: string): void;
	getSpki(): string;
	isSpki(): boolean;
	setSpki(value: string): void;
	getJwk(): string;
	isJwk(): boolean;
	setJwk(value: string): void;
	getAlgorithm(): Worker_Binding_CryptoKey_Algorithm;
	initAlgorithm(): Worker_Binding_CryptoKey_Algorithm;
	getExtractable(): boolean;
	setExtractable(value: boolean): void;
	adoptUsages(
		value: capnp.Orphan<capnp.List<Worker_Binding_CryptoKey_Usage>>
	): void;
	disownUsages(): capnp.Orphan<capnp.List<Worker_Binding_CryptoKey_Usage>>;
	getUsages(): capnp.List<Worker_Binding_CryptoKey_Usage>;
	hasUsages(): boolean;
	initUsages(length: number): capnp.List<Worker_Binding_CryptoKey_Usage>;
	setUsages(value: capnp.List<Worker_Binding_CryptoKey_Usage>): void;
	toString(): string;
	which(): Worker_Binding_CryptoKey_Which;
}
export declare class Worker_Binding_WrappedBinding extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultEntrypoint: string;
	};
	static _InnerBindings: capnp.ListCtor<Worker_Binding>;
	getModuleName(): string;
	setModuleName(value: string): void;
	getEntrypoint(): string;
	setEntrypoint(value: string): void;
	adoptInnerBindings(value: capnp.Orphan<capnp.List<Worker_Binding>>): void;
	disownInnerBindings(): capnp.Orphan<capnp.List<Worker_Binding>>;
	getInnerBindings(): capnp.List<Worker_Binding>;
	hasInnerBindings(): boolean;
	initInnerBindings(length: number): capnp.List<Worker_Binding>;
	setInnerBindings(value: capnp.List<Worker_Binding>): void;
	toString(): string;
}
export declare class Worker_Binding_Parameter extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	adoptType(value: capnp.Orphan<Worker_Binding_Type>): void;
	disownType(): capnp.Orphan<Worker_Binding_Type>;
	getType(): Worker_Binding_Type;
	hasType(): boolean;
	initType(): Worker_Binding_Type;
	setType(value: Worker_Binding_Type): void;
	getOptional(): boolean;
	setOptional(value: boolean): void;
	toString(): string;
}
export declare class Worker_Binding_Hyperdrive extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	adoptDesignator(value: capnp.Orphan<ServiceDesignator>): void;
	disownDesignator(): capnp.Orphan<ServiceDesignator>;
	getDesignator(): ServiceDesignator;
	hasDesignator(): boolean;
	initDesignator(): ServiceDesignator;
	setDesignator(value: ServiceDesignator): void;
	getDatabase(): string;
	setDatabase(value: string): void;
	getUser(): string;
	setUser(value: string): void;
	getPassword(): string;
	setPassword(value: string): void;
	getScheme(): string;
	setScheme(value: string): void;
	toString(): string;
}
export declare enum Worker_Binding_Which {
	UNSPECIFIED = 0,
	PARAMETER = 1,
	TEXT = 2,
	DATA = 3,
	JSON = 4,
	WASM_MODULE = 5,
	CRYPTO_KEY = 6,
	SERVICE = 7,
	DURABLE_OBJECT_NAMESPACE = 8,
	KV_NAMESPACE = 9,
	R2BUCKET = 10,
	R2ADMIN = 11,
	WRAPPED = 12,
	QUEUE = 13,
	FROM_ENVIRONMENT = 14,
	ANALYTICS_ENGINE = 15,
	HYPERDRIVE = 16,
}
export declare class Worker_Binding extends __S {
	static readonly UNSPECIFIED = Worker_Binding_Which.UNSPECIFIED;
	static readonly PARAMETER = Worker_Binding_Which.PARAMETER;
	static readonly TEXT = Worker_Binding_Which.TEXT;
	static readonly DATA = Worker_Binding_Which.DATA;
	static readonly JSON = Worker_Binding_Which.JSON;
	static readonly WASM_MODULE = Worker_Binding_Which.WASM_MODULE;
	static readonly CRYPTO_KEY = Worker_Binding_Which.CRYPTO_KEY;
	static readonly SERVICE = Worker_Binding_Which.SERVICE;
	static readonly DURABLE_OBJECT_NAMESPACE =
		Worker_Binding_Which.DURABLE_OBJECT_NAMESPACE;
	static readonly KV_NAMESPACE = Worker_Binding_Which.KV_NAMESPACE;
	static readonly R2BUCKET = Worker_Binding_Which.R2BUCKET;
	static readonly R2ADMIN = Worker_Binding_Which.R2ADMIN;
	static readonly WRAPPED = Worker_Binding_Which.WRAPPED;
	static readonly QUEUE = Worker_Binding_Which.QUEUE;
	static readonly FROM_ENVIRONMENT = Worker_Binding_Which.FROM_ENVIRONMENT;
	static readonly ANALYTICS_ENGINE = Worker_Binding_Which.ANALYTICS_ENGINE;
	static readonly HYPERDRIVE = Worker_Binding_Which.HYPERDRIVE;
	static readonly Type: typeof Worker_Binding_Type;
	static readonly DurableObjectNamespaceDesignator: typeof Worker_Binding_DurableObjectNamespaceDesignator;
	static readonly CryptoKey: typeof Worker_Binding_CryptoKey;
	static readonly WrappedBinding: typeof Worker_Binding_WrappedBinding;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	isUnspecified(): boolean;
	setUnspecified(): void;
	getParameter(): Worker_Binding_Parameter;
	initParameter(): Worker_Binding_Parameter;
	isParameter(): boolean;
	setParameter(): void;
	getText(): string;
	isText(): boolean;
	setText(value: string): void;
	adoptData(value: capnp.Orphan<capnp.Data>): void;
	disownData(): capnp.Orphan<capnp.Data>;
	getData(): capnp.Data;
	hasData(): boolean;
	initData(length: number): capnp.Data;
	isData(): boolean;
	setData(value: capnp.Data): void;
	getJson(): string;
	isJson(): boolean;
	setJson(value: string): void;
	adoptWasmModule(value: capnp.Orphan<capnp.Data>): void;
	disownWasmModule(): capnp.Orphan<capnp.Data>;
	getWasmModule(): capnp.Data;
	hasWasmModule(): boolean;
	initWasmModule(length: number): capnp.Data;
	isWasmModule(): boolean;
	setWasmModule(value: capnp.Data): void;
	adoptCryptoKey(value: capnp.Orphan<Worker_Binding_CryptoKey>): void;
	disownCryptoKey(): capnp.Orphan<Worker_Binding_CryptoKey>;
	getCryptoKey(): Worker_Binding_CryptoKey;
	hasCryptoKey(): boolean;
	initCryptoKey(): Worker_Binding_CryptoKey;
	isCryptoKey(): boolean;
	setCryptoKey(value: Worker_Binding_CryptoKey): void;
	adoptService(value: capnp.Orphan<ServiceDesignator>): void;
	disownService(): capnp.Orphan<ServiceDesignator>;
	getService(): ServiceDesignator;
	hasService(): boolean;
	initService(): ServiceDesignator;
	isService(): boolean;
	setService(value: ServiceDesignator): void;
	adoptDurableObjectNamespace(
		value: capnp.Orphan<Worker_Binding_DurableObjectNamespaceDesignator>
	): void;
	disownDurableObjectNamespace(): capnp.Orphan<Worker_Binding_DurableObjectNamespaceDesignator>;
	getDurableObjectNamespace(): Worker_Binding_DurableObjectNamespaceDesignator;
	hasDurableObjectNamespace(): boolean;
	initDurableObjectNamespace(): Worker_Binding_DurableObjectNamespaceDesignator;
	isDurableObjectNamespace(): boolean;
	setDurableObjectNamespace(
		value: Worker_Binding_DurableObjectNamespaceDesignator
	): void;
	adoptKvNamespace(value: capnp.Orphan<ServiceDesignator>): void;
	disownKvNamespace(): capnp.Orphan<ServiceDesignator>;
	getKvNamespace(): ServiceDesignator;
	hasKvNamespace(): boolean;
	initKvNamespace(): ServiceDesignator;
	isKvNamespace(): boolean;
	setKvNamespace(value: ServiceDesignator): void;
	adoptR2Bucket(value: capnp.Orphan<ServiceDesignator>): void;
	disownR2Bucket(): capnp.Orphan<ServiceDesignator>;
	getR2Bucket(): ServiceDesignator;
	hasR2Bucket(): boolean;
	initR2Bucket(): ServiceDesignator;
	isR2Bucket(): boolean;
	setR2Bucket(value: ServiceDesignator): void;
	adoptR2Admin(value: capnp.Orphan<ServiceDesignator>): void;
	disownR2Admin(): capnp.Orphan<ServiceDesignator>;
	getR2Admin(): ServiceDesignator;
	hasR2Admin(): boolean;
	initR2Admin(): ServiceDesignator;
	isR2Admin(): boolean;
	setR2Admin(value: ServiceDesignator): void;
	adoptWrapped(value: capnp.Orphan<Worker_Binding_WrappedBinding>): void;
	disownWrapped(): capnp.Orphan<Worker_Binding_WrappedBinding>;
	getWrapped(): Worker_Binding_WrappedBinding;
	hasWrapped(): boolean;
	initWrapped(): Worker_Binding_WrappedBinding;
	isWrapped(): boolean;
	setWrapped(value: Worker_Binding_WrappedBinding): void;
	adoptQueue(value: capnp.Orphan<ServiceDesignator>): void;
	disownQueue(): capnp.Orphan<ServiceDesignator>;
	getQueue(): ServiceDesignator;
	hasQueue(): boolean;
	initQueue(): ServiceDesignator;
	isQueue(): boolean;
	setQueue(value: ServiceDesignator): void;
	getFromEnvironment(): string;
	isFromEnvironment(): boolean;
	setFromEnvironment(value: string): void;
	adoptAnalyticsEngine(value: capnp.Orphan<ServiceDesignator>): void;
	disownAnalyticsEngine(): capnp.Orphan<ServiceDesignator>;
	getAnalyticsEngine(): ServiceDesignator;
	hasAnalyticsEngine(): boolean;
	initAnalyticsEngine(): ServiceDesignator;
	isAnalyticsEngine(): boolean;
	setAnalyticsEngine(value: ServiceDesignator): void;
	getHyperdrive(): Worker_Binding_Hyperdrive;
	initHyperdrive(): Worker_Binding_Hyperdrive;
	isHyperdrive(): boolean;
	setHyperdrive(): void;
	toString(): string;
	which(): Worker_Binding_Which;
}
export declare enum Worker_DurableObjectNamespace_Which {
	UNIQUE_KEY = 0,
	EPHEMERAL_LOCAL = 1,
}
export declare class Worker_DurableObjectNamespace extends __S {
	static readonly UNIQUE_KEY = Worker_DurableObjectNamespace_Which.UNIQUE_KEY;
	static readonly EPHEMERAL_LOCAL =
		Worker_DurableObjectNamespace_Which.EPHEMERAL_LOCAL;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getClassName(): string;
	setClassName(value: string): void;
	getUniqueKey(): string;
	isUniqueKey(): boolean;
	setUniqueKey(value: string): void;
	isEphemeralLocal(): boolean;
	setEphemeralLocal(): void;
	getPreventEviction(): boolean;
	setPreventEviction(value: boolean): void;
	toString(): string;
	which(): Worker_DurableObjectNamespace_Which;
}
export declare enum Worker_DurableObjectStorage_Which {
	NONE = 0,
	IN_MEMORY = 1,
	LOCAL_DISK = 2,
}
export declare class Worker_DurableObjectStorage extends __S {
	static readonly NONE = Worker_DurableObjectStorage_Which.NONE;
	static readonly IN_MEMORY = Worker_DurableObjectStorage_Which.IN_MEMORY;
	static readonly LOCAL_DISK = Worker_DurableObjectStorage_Which.LOCAL_DISK;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	isNone(): boolean;
	setNone(): void;
	isInMemory(): boolean;
	setInMemory(): void;
	getLocalDisk(): string;
	isLocalDisk(): boolean;
	setLocalDisk(value: string): void;
	toString(): string;
	which(): Worker_DurableObjectStorage_Which;
}
export declare enum Worker_Which {
	MODULES = 0,
	SERVICE_WORKER_SCRIPT = 1,
	INHERIT = 2,
}
export declare class Worker extends __S {
	static readonly MODULES = Worker_Which.MODULES;
	static readonly SERVICE_WORKER_SCRIPT = Worker_Which.SERVICE_WORKER_SCRIPT;
	static readonly INHERIT = Worker_Which.INHERIT;
	static readonly Module: typeof Worker_Module;
	static readonly Binding: typeof Worker_Binding;
	static readonly DurableObjectNamespace: typeof Worker_DurableObjectNamespace;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultGlobalOutbound: capnp.Pointer;
	};
	static _Modules: capnp.ListCtor<Worker_Module>;
	static _Bindings: capnp.ListCtor<Worker_Binding>;
	static _DurableObjectNamespaces: capnp.ListCtor<Worker_DurableObjectNamespace>;
	adoptModules(value: capnp.Orphan<capnp.List<Worker_Module>>): void;
	disownModules(): capnp.Orphan<capnp.List<Worker_Module>>;
	getModules(): capnp.List<Worker_Module>;
	hasModules(): boolean;
	initModules(length: number): capnp.List<Worker_Module>;
	isModules(): boolean;
	setModules(value: capnp.List<Worker_Module>): void;
	getServiceWorkerScript(): string;
	isServiceWorkerScript(): boolean;
	setServiceWorkerScript(value: string): void;
	getInherit(): string;
	isInherit(): boolean;
	setInherit(value: string): void;
	getCompatibilityDate(): string;
	setCompatibilityDate(value: string): void;
	adoptCompatibilityFlags(value: capnp.Orphan<capnp.List<string>>): void;
	disownCompatibilityFlags(): capnp.Orphan<capnp.List<string>>;
	getCompatibilityFlags(): capnp.List<string>;
	hasCompatibilityFlags(): boolean;
	initCompatibilityFlags(length: number): capnp.List<string>;
	setCompatibilityFlags(value: capnp.List<string>): void;
	adoptBindings(value: capnp.Orphan<capnp.List<Worker_Binding>>): void;
	disownBindings(): capnp.Orphan<capnp.List<Worker_Binding>>;
	getBindings(): capnp.List<Worker_Binding>;
	hasBindings(): boolean;
	initBindings(length: number): capnp.List<Worker_Binding>;
	setBindings(value: capnp.List<Worker_Binding>): void;
	adoptGlobalOutbound(value: capnp.Orphan<ServiceDesignator>): void;
	disownGlobalOutbound(): capnp.Orphan<ServiceDesignator>;
	getGlobalOutbound(): ServiceDesignator;
	hasGlobalOutbound(): boolean;
	initGlobalOutbound(): ServiceDesignator;
	setGlobalOutbound(value: ServiceDesignator): void;
	adoptCacheApiOutbound(value: capnp.Orphan<ServiceDesignator>): void;
	disownCacheApiOutbound(): capnp.Orphan<ServiceDesignator>;
	getCacheApiOutbound(): ServiceDesignator;
	hasCacheApiOutbound(): boolean;
	initCacheApiOutbound(): ServiceDesignator;
	setCacheApiOutbound(value: ServiceDesignator): void;
	adoptDurableObjectNamespaces(
		value: capnp.Orphan<capnp.List<Worker_DurableObjectNamespace>>
	): void;
	disownDurableObjectNamespaces(): capnp.Orphan<
		capnp.List<Worker_DurableObjectNamespace>
	>;
	getDurableObjectNamespaces(): capnp.List<Worker_DurableObjectNamespace>;
	hasDurableObjectNamespaces(): boolean;
	initDurableObjectNamespaces(
		length: number
	): capnp.List<Worker_DurableObjectNamespace>;
	setDurableObjectNamespaces(
		value: capnp.List<Worker_DurableObjectNamespace>
	): void;
	getDurableObjectUniqueKeyModifier(): string;
	setDurableObjectUniqueKeyModifier(value: string): void;
	getDurableObjectStorage(): Worker_DurableObjectStorage;
	initDurableObjectStorage(): Worker_DurableObjectStorage;
	toString(): string;
	which(): Worker_Which;
}
export declare class ExternalServer_Https extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	adoptOptions(value: capnp.Orphan<HttpOptions>): void;
	disownOptions(): capnp.Orphan<HttpOptions>;
	getOptions(): HttpOptions;
	hasOptions(): boolean;
	initOptions(): HttpOptions;
	setOptions(value: HttpOptions): void;
	adoptTlsOptions(value: capnp.Orphan<TlsOptions>): void;
	disownTlsOptions(): capnp.Orphan<TlsOptions>;
	getTlsOptions(): TlsOptions;
	hasTlsOptions(): boolean;
	initTlsOptions(): TlsOptions;
	setTlsOptions(value: TlsOptions): void;
	getCertificateHost(): string;
	setCertificateHost(value: string): void;
	toString(): string;
}
export declare class ExternalServer_Tcp extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	adoptTlsOptions(value: capnp.Orphan<TlsOptions>): void;
	disownTlsOptions(): capnp.Orphan<TlsOptions>;
	getTlsOptions(): TlsOptions;
	hasTlsOptions(): boolean;
	initTlsOptions(): TlsOptions;
	setTlsOptions(value: TlsOptions): void;
	getCertificateHost(): string;
	setCertificateHost(value: string): void;
	toString(): string;
}
export declare enum ExternalServer_Which {
	HTTP = 0,
	HTTPS = 1,
	TCP = 2,
}
export declare class ExternalServer extends __S {
	static readonly HTTP = ExternalServer_Which.HTTP;
	static readonly HTTPS = ExternalServer_Which.HTTPS;
	static readonly TCP = ExternalServer_Which.TCP;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getAddress(): string;
	setAddress(value: string): void;
	adoptHttp(value: capnp.Orphan<HttpOptions>): void;
	disownHttp(): capnp.Orphan<HttpOptions>;
	getHttp(): HttpOptions;
	hasHttp(): boolean;
	initHttp(): HttpOptions;
	isHttp(): boolean;
	setHttp(value: HttpOptions): void;
	getHttps(): ExternalServer_Https;
	initHttps(): ExternalServer_Https;
	isHttps(): boolean;
	setHttps(): void;
	getTcp(): ExternalServer_Tcp;
	initTcp(): ExternalServer_Tcp;
	isTcp(): boolean;
	setTcp(): void;
	toString(): string;
	which(): ExternalServer_Which;
}
export declare class Network extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultAllow: capnp.Pointer;
	};
	adoptAllow(value: capnp.Orphan<capnp.List<string>>): void;
	disownAllow(): capnp.Orphan<capnp.List<string>>;
	getAllow(): capnp.List<string>;
	hasAllow(): boolean;
	initAllow(length: number): capnp.List<string>;
	setAllow(value: capnp.List<string>): void;
	adoptDeny(value: capnp.Orphan<capnp.List<string>>): void;
	disownDeny(): capnp.Orphan<capnp.List<string>>;
	getDeny(): capnp.List<string>;
	hasDeny(): boolean;
	initDeny(length: number): capnp.List<string>;
	setDeny(value: capnp.List<string>): void;
	adoptTlsOptions(value: capnp.Orphan<TlsOptions>): void;
	disownTlsOptions(): capnp.Orphan<TlsOptions>;
	getTlsOptions(): TlsOptions;
	hasTlsOptions(): boolean;
	initTlsOptions(): TlsOptions;
	setTlsOptions(value: TlsOptions): void;
	toString(): string;
}
export declare class DiskDirectory extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultWritable: DataView;
		defaultAllowDotfiles: DataView;
	};
	getPath(): string;
	setPath(value: string): void;
	getWritable(): boolean;
	setWritable(value: boolean): void;
	getAllowDotfiles(): boolean;
	setAllowDotfiles(value: boolean): void;
	toString(): string;
}
export declare enum HttpOptions_Style {
	HOST = 0,
	PROXY = 1,
}
export declare class HttpOptions_Header extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getName(): string;
	setName(value: string): void;
	getValue(): string;
	setValue(value: string): void;
	toString(): string;
}
export declare class HttpOptions extends __S {
	static readonly Style: typeof HttpOptions_Style;
	static readonly Header: typeof HttpOptions_Header;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultStyle: DataView;
	};
	static _InjectRequestHeaders: capnp.ListCtor<HttpOptions_Header>;
	static _InjectResponseHeaders: capnp.ListCtor<HttpOptions_Header>;
	getStyle(): HttpOptions_Style;
	setStyle(value: HttpOptions_Style): void;
	getForwardedProtoHeader(): string;
	setForwardedProtoHeader(value: string): void;
	getCfBlobHeader(): string;
	setCfBlobHeader(value: string): void;
	adoptInjectRequestHeaders(
		value: capnp.Orphan<capnp.List<HttpOptions_Header>>
	): void;
	disownInjectRequestHeaders(): capnp.Orphan<capnp.List<HttpOptions_Header>>;
	getInjectRequestHeaders(): capnp.List<HttpOptions_Header>;
	hasInjectRequestHeaders(): boolean;
	initInjectRequestHeaders(length: number): capnp.List<HttpOptions_Header>;
	setInjectRequestHeaders(value: capnp.List<HttpOptions_Header>): void;
	adoptInjectResponseHeaders(
		value: capnp.Orphan<capnp.List<HttpOptions_Header>>
	): void;
	disownInjectResponseHeaders(): capnp.Orphan<capnp.List<HttpOptions_Header>>;
	getInjectResponseHeaders(): capnp.List<HttpOptions_Header>;
	hasInjectResponseHeaders(): boolean;
	initInjectResponseHeaders(length: number): capnp.List<HttpOptions_Header>;
	setInjectResponseHeaders(value: capnp.List<HttpOptions_Header>): void;
	toString(): string;
}
export declare class TlsOptions_Keypair extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	getPrivateKey(): string;
	setPrivateKey(value: string): void;
	getCertificateChain(): string;
	setCertificateChain(value: string): void;
	toString(): string;
}
export declare enum TlsOptions_Version {
	GOOD_DEFAULT = 0,
	SSL3 = 1,
	TLS1DOT0 = 2,
	TLS1DOT1 = 3,
	TLS1DOT2 = 4,
	TLS1DOT3 = 5,
}
export declare class TlsOptions extends __S {
	static readonly Keypair: typeof TlsOptions_Keypair;
	static readonly Version: typeof TlsOptions_Version;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultRequireClientCerts: DataView;
		defaultTrustBrowserCas: DataView;
		defaultMinVersion: DataView;
	};
	adoptKeypair(value: capnp.Orphan<TlsOptions_Keypair>): void;
	disownKeypair(): capnp.Orphan<TlsOptions_Keypair>;
	getKeypair(): TlsOptions_Keypair;
	hasKeypair(): boolean;
	initKeypair(): TlsOptions_Keypair;
	setKeypair(value: TlsOptions_Keypair): void;
	getRequireClientCerts(): boolean;
	setRequireClientCerts(value: boolean): void;
	getTrustBrowserCas(): boolean;
	setTrustBrowserCas(value: boolean): void;
	adoptTrustedCertificates(value: capnp.Orphan<capnp.List<string>>): void;
	disownTrustedCertificates(): capnp.Orphan<capnp.List<string>>;
	getTrustedCertificates(): capnp.List<string>;
	hasTrustedCertificates(): boolean;
	initTrustedCertificates(length: number): capnp.List<string>;
	setTrustedCertificates(value: capnp.List<string>): void;
	getMinVersion(): TlsOptions_Version;
	setMinVersion(value: TlsOptions_Version): void;
	getCipherList(): string;
	setCipherList(value: string): void;
	toString(): string;
}
export declare class Extension_Module extends __S {
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
		defaultInternal: DataView;
	};
	getName(): string;
	setName(value: string): void;
	getInternal(): boolean;
	setInternal(value: boolean): void;
	getEsModule(): string;
	setEsModule(value: string): void;
	toString(): string;
}
export declare class Extension extends __S {
	static readonly Module: typeof Extension_Module;
	static readonly _capnp: {
		displayName: string;
		id: string;
		size: capnp.ObjectSize;
	};
	static _Modules: capnp.ListCtor<Extension_Module>;
	adoptModules(value: capnp.Orphan<capnp.List<Extension_Module>>): void;
	disownModules(): capnp.Orphan<capnp.List<Extension_Module>>;
	getModules(): capnp.List<Extension_Module>;
	hasModules(): boolean;
	initModules(length: number): capnp.List<Extension_Module>;
	setModules(value: capnp.List<Extension_Module>): void;
	toString(): string;
}
