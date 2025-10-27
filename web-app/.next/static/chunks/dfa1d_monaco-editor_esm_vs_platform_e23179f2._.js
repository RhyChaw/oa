(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ // ------ internal util
__turbopack_context__.s([
    "IInstantiationService",
    ()=>IInstantiationService,
    "_util",
    ()=>_util,
    "createDecorator",
    ()=>createDecorator
]);
var _util;
(function(_util) {
    _util.serviceIds = new Map();
    _util.DI_TARGET = '$di$target';
    _util.DI_DEPENDENCIES = '$di$dependencies';
    function getServiceDependencies(ctor) {
        return ctor[_util.DI_DEPENDENCIES] || [];
    }
    _util.getServiceDependencies = getServiceDependencies;
})(_util || (_util = {}));
const IInstantiationService = createDecorator('instantiationService');
function storeServiceDependency(id, target, index) {
    if (target[_util.DI_TARGET] === target) {
        target[_util.DI_DEPENDENCIES].push({
            id,
            index
        });
    } else {
        target[_util.DI_DEPENDENCIES] = [
            {
                id,
                index
            }
        ];
        target[_util.DI_TARGET] = target;
    }
}
function createDecorator(serviceId) {
    if (_util.serviceIds.has(serviceId)) {
        return _util.serviceIds.get(serviceId);
    }
    const id = function(target, key, index) {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
        storeServiceDependency(id, target, index);
    };
    id.toString = ()=>serviceId;
    _util.serviceIds.set(serviceId, id);
    return id;
} //# sourceMappingURL=instantiation.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "SyncDescriptor",
    ()=>SyncDescriptor
]);
class SyncDescriptor {
    constructor(ctor, staticArguments = [], supportsDelayedInstantiation = false){
        this.ctor = ctor;
        this.staticArguments = staticArguments;
        this.supportsDelayedInstantiation = supportsDelayedInstantiation;
    }
} //# sourceMappingURL=descriptors.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "getSingletonServiceDescriptors",
    ()=>getSingletonServiceDescriptors,
    "registerSingleton",
    ()=>registerSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors.js [app-client] (ecmascript)");
;
const _registry = [];
function registerSingleton(id, ctorOrDescriptor, supportsDelayedInstantiation) {
    if (!(ctorOrDescriptor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"])) {
        ctorOrDescriptor = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"](ctorOrDescriptor, [], Boolean(supportsDelayedInstantiation));
    }
    _registry.push([
        id,
        ctorOrDescriptor
    ]);
}
function getSingletonServiceDescriptors() {
    return _registry;
} //# sourceMappingURL=extensions.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ServiceCollection",
    ()=>ServiceCollection
]);
class ServiceCollection {
    set(id, instanceOrDescriptor) {
        const result = this._entries.get(id);
        this._entries.set(id, instanceOrDescriptor);
        return result;
    }
    get(id) {
        return this._entries.get(id);
    }
    constructor(...entries){
        this._entries = new Map();
        for (const [id, service] of entries){
            this.set(id, service);
        }
    }
} //# sourceMappingURL=serviceCollection.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/graph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Graph",
    ()=>Graph,
    "Node",
    ()=>Node
]);
class Node {
    constructor(key, data){
        this.key = key;
        this.data = data;
        this.incoming = new Map();
        this.outgoing = new Map();
    }
}
class Graph {
    roots() {
        const ret = [];
        for (const node of this._nodes.values()){
            if (node.outgoing.size === 0) {
                ret.push(node);
            }
        }
        return ret;
    }
    insertEdge(from, to) {
        const fromNode = this.lookupOrInsertNode(from);
        const toNode = this.lookupOrInsertNode(to);
        fromNode.outgoing.set(toNode.key, toNode);
        toNode.incoming.set(fromNode.key, fromNode);
    }
    removeNode(data) {
        const key = this._hashFn(data);
        this._nodes.delete(key);
        for (const node of this._nodes.values()){
            node.outgoing.delete(key);
            node.incoming.delete(key);
        }
    }
    lookupOrInsertNode(data) {
        const key = this._hashFn(data);
        let node = this._nodes.get(key);
        if (!node) {
            node = new Node(key, data);
            this._nodes.set(key, node);
        }
        return node;
    }
    isEmpty() {
        return this._nodes.size === 0;
    }
    toString() {
        const data = [];
        for (const [key, value] of this._nodes){
            data.push("".concat(key, "\n	(-> incoming)[").concat([
                ...value.incoming.keys()
            ].join(', '), "]\n	(outgoing ->)[").concat([
                ...value.outgoing.keys()
            ].join(','), "]\n"));
        }
        return data.join('\n');
    }
    /**
     * This is brute force and slow and **only** be used
     * to trouble shoot.
     */ findCycleSlow() {
        for (const [id, node] of this._nodes){
            const seen = new Set([
                id
            ]);
            const res = this._findCycle(node, seen);
            if (res) {
                return res;
            }
        }
        return undefined;
    }
    _findCycle(node, seen) {
        for (const [id, outgoing] of node.outgoing){
            if (seen.has(id)) {
                return [
                    ...seen,
                    id
                ].join(' -> ');
            }
            seen.add(id);
            const value = this._findCycle(outgoing, seen);
            if (value) {
                return value;
            }
            seen.delete(id);
        }
        return undefined;
    }
    constructor(_hashFn){
        this._hashFn = _hashFn;
        this._nodes = new Map();
    // empty
    }
} //# sourceMappingURL=graph.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiationService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "InstantiationService",
    ()=>InstantiationService,
    "Trace",
    ()=>Trace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/descriptors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/graph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$serviceCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// TRACING
const _enableAllTracing = false;
class CyclicDependencyError extends Error {
    constructor(graph){
        super('cyclic dependency between services');
        var _graph_findCycleSlow;
        this.message = (_graph_findCycleSlow = graph.findCycleSlow()) !== null && _graph_findCycleSlow !== void 0 ? _graph_findCycleSlow : "UNABLE to detect cycle, dumping graph: \n".concat(graph.toString());
    }
}
class InstantiationService {
    dispose() {
        if (!this._isDisposed) {
            this._isDisposed = true;
            // dispose all child services
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._children);
            this._children.clear();
            // dispose all services created by this service
            for (const candidate of this._servicesToMaybeDispose){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisposable"])(candidate)) {
                    candidate.dispose();
                }
            }
            this._servicesToMaybeDispose.clear();
        }
    }
    _throwIfDisposed() {
        if (this._isDisposed) {
            throw new Error('InstantiationService has been disposed');
        }
    }
    createChild(services, store) {
        this._throwIfDisposed();
        const that = this;
        const result = new class extends InstantiationService {
            dispose() {
                that._children.delete(result);
                super.dispose();
            }
        }(services, this._strict, this, this._enableTracing);
        this._children.add(result);
        store === null || store === void 0 ? void 0 : store.add(result);
        return result;
    }
    invokeFunction(fn) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this._throwIfDisposed();
        const _trace = Trace.traceInvocation(this._enableTracing, fn);
        let _done = false;
        try {
            const accessor = {
                get: (id)=>{
                    if (_done) {
                        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["illegalState"])('service accessor is only valid during the invocation of its target method');
                    }
                    const result = this._getOrCreateServiceInstance(id, _trace);
                    if (!result) {
                        throw new Error("[invokeFunction] unknown service '".concat(id, "'"));
                    }
                    return result;
                },
                getIfExists: (id)=>{
                    if (_done) {
                        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["illegalState"])('service accessor is only valid during the invocation of its target method');
                    }
                    const result = this._getOrCreateServiceInstance(id, _trace);
                    return result;
                }
            };
            return fn(accessor, ...args);
        } finally{
            _done = true;
            _trace.stop();
        }
    }
    createInstance(ctorOrDescriptor) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        this._throwIfDisposed();
        let _trace;
        let result;
        if (ctorOrDescriptor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
            _trace = Trace.traceCreation(this._enableTracing, ctorOrDescriptor.ctor);
            result = this._createInstance(ctorOrDescriptor.ctor, ctorOrDescriptor.staticArguments.concat(rest), _trace);
        } else {
            _trace = Trace.traceCreation(this._enableTracing, ctorOrDescriptor);
            result = this._createInstance(ctorOrDescriptor, rest, _trace);
        }
        _trace.stop();
        return result;
    }
    _createInstance(ctor) {
        let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], _trace = arguments.length > 2 ? arguments[2] : void 0;
        // arguments defined by service decorators
        const serviceDependencies = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_util"].getServiceDependencies(ctor).sort((a, b)=>a.index - b.index);
        const serviceArgs = [];
        for (const dependency of serviceDependencies){
            const service = this._getOrCreateServiceInstance(dependency.id, _trace);
            if (!service) {
                this._throwIfStrict("[createInstance] ".concat(ctor.name, " depends on UNKNOWN service ").concat(dependency.id, "."), false);
            }
            serviceArgs.push(service);
        }
        const firstServiceArgPos = serviceDependencies.length > 0 ? serviceDependencies[0].index : args.length;
        // check for argument mismatches, adjust static args if needed
        if (args.length !== firstServiceArgPos) {
            console.trace("[createInstance] First service dependency of ".concat(ctor.name, " at position ").concat(firstServiceArgPos + 1, " conflicts with ").concat(args.length, " static arguments"));
            const delta = firstServiceArgPos - args.length;
            if (delta > 0) {
                args = args.concat(new Array(delta));
            } else {
                args = args.slice(0, firstServiceArgPos);
            }
        }
        // now create the instance
        return Reflect.construct(ctor, args.concat(serviceArgs));
    }
    _setCreatedServiceInstance(id, instance) {
        if (this._services.get(id) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
            this._services.set(id, instance);
        } else if (this._parent) {
            this._parent._setCreatedServiceInstance(id, instance);
        } else {
            throw new Error('illegalState - setting UNKNOWN service instance');
        }
    }
    _getServiceInstanceOrDescriptor(id) {
        const instanceOrDesc = this._services.get(id);
        if (!instanceOrDesc && this._parent) {
            return this._parent._getServiceInstanceOrDescriptor(id);
        } else {
            return instanceOrDesc;
        }
    }
    _getOrCreateServiceInstance(id, _trace) {
        if (this._globalGraph && this._globalGraphImplicitDependency) {
            this._globalGraph.insertEdge(this._globalGraphImplicitDependency, String(id));
        }
        const thing = this._getServiceInstanceOrDescriptor(id);
        if (thing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
            return this._safeCreateAndCacheServiceInstance(id, thing, _trace.branch(id, true));
        } else {
            _trace.branch(id, false);
            return thing;
        }
    }
    _safeCreateAndCacheServiceInstance(id, desc, _trace) {
        if (this._activeInstantiations.has(id)) {
            throw new Error("illegal state - RECURSIVELY instantiating service '".concat(id, "'"));
        }
        this._activeInstantiations.add(id);
        try {
            return this._createAndCacheServiceInstance(id, desc, _trace);
        } finally{
            this._activeInstantiations.delete(id);
        }
    }
    _createAndCacheServiceInstance(id, desc, _trace) {
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Graph"]((data)=>data.id.toString());
        let cycleCount = 0;
        const stack = [
            {
                id,
                desc,
                _trace
            }
        ];
        const seen = new Set();
        while(stack.length){
            const item = stack.pop();
            if (seen.has(String(item.id))) {
                continue;
            }
            seen.add(String(item.id));
            graph.lookupOrInsertNode(item);
            // a weak but working heuristic for cycle checks
            if (cycleCount++ > 1000) {
                throw new CyclicDependencyError(graph);
            }
            // check all dependencies for existence and if they need to be created first
            for (const dependency of __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_util"].getServiceDependencies(item.desc.ctor)){
                var // take note of all service dependencies
                _this__globalGraph;
                const instanceOrDesc = this._getServiceInstanceOrDescriptor(dependency.id);
                if (!instanceOrDesc) {
                    this._throwIfStrict("[createInstance] ".concat(id, " depends on ").concat(dependency.id, " which is NOT registered."), true);
                }
                (_this__globalGraph = this._globalGraph) === null || _this__globalGraph === void 0 ? void 0 : _this__globalGraph.insertEdge(String(item.id), String(dependency.id));
                if (instanceOrDesc instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
                    const d = {
                        id: dependency.id,
                        desc: instanceOrDesc,
                        _trace: item._trace.branch(dependency.id, true)
                    };
                    graph.insertEdge(item, d);
                    stack.push(d);
                }
            }
        }
        while(true){
            const roots = graph.roots();
            // if there is no more roots but still
            // nodes in the graph we have a cycle
            if (roots.length === 0) {
                if (!graph.isEmpty()) {
                    throw new CyclicDependencyError(graph);
                }
                break;
            }
            for (const { data } of roots){
                // Repeat the check for this still being a service sync descriptor. That's because
                // instantiating a dependency might have side-effect and recursively trigger instantiation
                // so that some dependencies are now fullfilled already.
                const instanceOrDesc = this._getServiceInstanceOrDescriptor(data.id);
                if (instanceOrDesc instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
                    // create instance and overwrite the service collections
                    const instance = this._createServiceInstanceWithOwner(data.id, data.desc.ctor, data.desc.staticArguments, data.desc.supportsDelayedInstantiation, data._trace);
                    this._setCreatedServiceInstance(data.id, instance);
                }
                graph.removeNode(data);
            }
        }
        return this._getServiceInstanceOrDescriptor(id);
    }
    _createServiceInstanceWithOwner(id, ctor) {
        let args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], supportsDelayedInstantiation = arguments.length > 3 ? arguments[3] : void 0, _trace = arguments.length > 4 ? arguments[4] : void 0;
        if (this._services.get(id) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$descriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncDescriptor"]) {
            return this._createServiceInstance(id, ctor, args, supportsDelayedInstantiation, _trace, this._servicesToMaybeDispose);
        } else if (this._parent) {
            return this._parent._createServiceInstanceWithOwner(id, ctor, args, supportsDelayedInstantiation, _trace);
        } else {
            throw new Error("illegalState - creating UNKNOWN service instance ".concat(ctor.name));
        }
    }
    _createServiceInstance(id, ctor) {
        let args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], supportsDelayedInstantiation = arguments.length > 3 ? arguments[3] : void 0, _trace = arguments.length > 4 ? arguments[4] : void 0, disposeBucket = arguments.length > 5 ? arguments[5] : void 0;
        if (!supportsDelayedInstantiation) {
            // eager instantiation
            const result = this._createInstance(ctor, args, _trace);
            disposeBucket.add(result);
            return result;
        } else {
            const child = new InstantiationService(undefined, this._strict, this, this._enableTracing);
            child._globalGraphImplicitDependency = String(id);
            // Return a proxy object that's backed by an idle value. That
            // strategy is to instantiate services in our idle time or when actually
            // needed but not when injected into a consumer
            // return "empty events" when the service isn't instantiated yet
            const earlyListeners = new Map();
            const idle = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalIdleValue"](()=>{
                const result = child._createInstance(ctor, args, _trace);
                // early listeners that we kept are now being subscribed to
                // the real service
                for (const [key, values] of earlyListeners){
                    const candidate = result[key];
                    if (typeof candidate === 'function') {
                        for (const value of values){
                            value.disposable = candidate.apply(result, value.listener);
                        }
                    }
                }
                earlyListeners.clear();
                disposeBucket.add(result);
                return result;
            });
            return new Proxy(Object.create(null), {
                get (target, key) {
                    if (!idle.isInitialized) {
                        // looks like an event
                        if (typeof key === 'string' && (key.startsWith('onDid') || key.startsWith('onWill'))) {
                            let list = earlyListeners.get(key);
                            if (!list) {
                                list = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
                                earlyListeners.set(key, list);
                            }
                            const event = (callback, thisArg, disposables)=>{
                                if (idle.isInitialized) {
                                    return idle.value[key](callback, thisArg, disposables);
                                } else {
                                    const entry = {
                                        listener: [
                                            callback,
                                            thisArg,
                                            disposables
                                        ],
                                        disposable: undefined
                                    };
                                    const rm = list.push(entry);
                                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                                        var _entry_disposable;
                                        rm();
                                        (_entry_disposable = entry.disposable) === null || _entry_disposable === void 0 ? void 0 : _entry_disposable.dispose();
                                    });
                                    return result;
                                }
                            };
                            return event;
                        }
                    }
                    // value already exists
                    if (key in target) {
                        return target[key];
                    }
                    // create value
                    const obj = idle.value;
                    let prop = obj[key];
                    if (typeof prop !== 'function') {
                        return prop;
                    }
                    prop = prop.bind(obj);
                    target[key] = prop;
                    return prop;
                },
                set (_target, p, value) {
                    idle.value[p] = value;
                    return true;
                },
                getPrototypeOf (_target) {
                    return ctor.prototype;
                }
            });
        }
    }
    _throwIfStrict(msg, printWarning) {
        if (printWarning) {
            console.warn(msg);
        }
        if (this._strict) {
            throw new Error(msg);
        }
    }
    constructor(_services = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$serviceCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceCollection"](), _strict = false, _parent, _enableTracing = _enableAllTracing){
        this._services = _services;
        this._strict = _strict;
        this._parent = _parent;
        this._enableTracing = _enableTracing;
        this._isDisposed = false;
        this._servicesToMaybeDispose = new Set();
        this._children = new Set();
        this._activeInstantiations = new Set();
        this._services.set(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"], this);
        var _parent__globalGraph;
        this._globalGraph = _enableTracing ? (_parent__globalGraph = _parent === null || _parent === void 0 ? void 0 : _parent._globalGraph) !== null && _parent__globalGraph !== void 0 ? _parent__globalGraph : new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$graph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Graph"]((e)=>e) : undefined;
    }
}
class Trace {
    static traceInvocation(_enableTracing, ctor) {
        return !_enableTracing ? Trace._None : new Trace(2 /* TraceType.Invocation */ , ctor.name || new Error().stack.split('\n').slice(3, 4).join('\n'));
    }
    static traceCreation(_enableTracing, ctor) {
        return !_enableTracing ? Trace._None : new Trace(1 /* TraceType.Creation */ , ctor.name);
    }
    branch(id, first) {
        const child = new Trace(3 /* TraceType.Branch */ , id.toString());
        this._dep.push([
            id,
            first,
            child
        ]);
        return child;
    }
    stop() {
        const dur = Date.now() - this._start;
        Trace._totals += dur;
        let causedCreation = false;
        function printChild(n, trace) {
            const res = [];
            const prefix = new Array(n + 1).join('\t');
            for (const [id, first, child] of trace._dep){
                if (first && child) {
                    causedCreation = true;
                    res.push("".concat(prefix, "CREATES -> ").concat(id));
                    const nested = printChild(n + 1, child);
                    if (nested) {
                        res.push(nested);
                    }
                } else {
                    res.push("".concat(prefix, "uses -> ").concat(id));
                }
            }
            return res.join('\n');
        }
        const lines = [
            "".concat(this.type === 1 /* TraceType.Creation */  ? 'CREATE' : 'CALL', " ").concat(this.name),
            "".concat(printChild(1, this)),
            "DONE, took ".concat(dur.toFixed(2), "ms (grand total ").concat(Trace._totals.toFixed(2), "ms)")
        ];
        if (dur > 2 || causedCreation) {
            Trace.all.add(lines.join('\n'));
        }
    }
    constructor(type, name){
        this.type = type;
        this.name = name;
        this._start = Date.now();
        this._dep = [];
    }
} //#endregion
 //# sourceMappingURL=instantiationService.js.map
Trace.all = new Set();
Trace._None = new class extends Trace {
    stop() {}
    branch() {
        return this;
    }
    constructor(){
        super(0 /* TraceType.None */ , null);
    }
};
Trace._totals = 0;
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "CommandsRegistry",
    ()=>CommandsRegistry,
    "ICommandService",
    ()=>ICommandService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ICommandService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('commandService');
const CommandsRegistry = new class {
    registerCommand(idOrCommand, handler) {
        if (!idOrCommand) {
            throw new Error("invalid command");
        }
        if (typeof idOrCommand === 'string') {
            if (!handler) {
                throw new Error("invalid command");
            }
            return this.registerCommand({
                id: idOrCommand,
                handler
            });
        }
        // add argument validation if rich command metadata is provided
        if (idOrCommand.metadata && Array.isArray(idOrCommand.metadata.args)) {
            const constraints = [];
            for (const arg of idOrCommand.metadata.args){
                constraints.push(arg.constraint);
            }
            const actualHandler = idOrCommand.handler;
            idOrCommand.handler = function(accessor) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateConstraints"])(args, constraints);
                return actualHandler(accessor, ...args);
            };
        }
        // find a place to store the command
        const { id } = idOrCommand;
        let commands = this._commands.get(id);
        if (!commands) {
            commands = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
            this._commands.set(id, commands);
        }
        const removeFn = commands.unshift(idOrCommand);
        const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            removeFn();
            const command = this._commands.get(id);
            if (command === null || command === void 0 ? void 0 : command.isEmpty()) {
                this._commands.delete(id);
            }
        });
        // tell the world about this command
        this._onDidRegisterCommand.fire(id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])(ret);
    }
    registerCommandAlias(oldId, newId) {
        return CommandsRegistry.registerCommand(oldId, function(accessor) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            return accessor.get(ICommandService).executeCommand(newId, ...args);
        });
    }
    getCommand(id) {
        const list = this._commands.get(id);
        if (!list || list.isEmpty()) {
            return undefined;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].first(list);
    }
    getCommands() {
        const result = new Map();
        for (const key of this._commands.keys()){
            const command = this.getCommand(key);
            if (command) {
                result.set(key, command);
            }
        }
        return result;
    }
    constructor(){
        this._commands = new Map();
        this._onDidRegisterCommand = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
};
CommandsRegistry.registerCommand('noop', ()=>{}); //# sourceMappingURL=commands.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/scanner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Scanner",
    ()=>Scanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
function hintDidYouMean() {
    for(var _len = arguments.length, meant = new Array(_len), _key = 0; _key < _len; _key++){
        meant[_key] = arguments[_key];
    }
    switch(meant.length){
        case 1:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1678, "Did you mean {0}?", meant[0]);
        case 2:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1679, "Did you mean {0} or {1}?", meant[0], meant[1]);
        case 3:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1680, "Did you mean {0}, {1} or {2}?", meant[0], meant[1], meant[2]);
        default:
            return undefined;
    }
}
const hintDidYouForgetToOpenOrCloseQuote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1681, "Did you forget to open or close the quote?");
const hintDidYouForgetToEscapeSlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1682, "Did you forget to escape the '/' (slash) character? Put two backslashes before it to escape, e.g., '\\\\/\'.");
class Scanner {
    static getLexeme(token) {
        switch(token.type){
            case 0 /* TokenType.LParen */ :
                return '(';
            case 1 /* TokenType.RParen */ :
                return ')';
            case 2 /* TokenType.Neg */ :
                return '!';
            case 3 /* TokenType.Eq */ :
                return token.isTripleEq ? '===' : '==';
            case 4 /* TokenType.NotEq */ :
                return token.isTripleEq ? '!==' : '!=';
            case 5 /* TokenType.Lt */ :
                return '<';
            case 6 /* TokenType.LtEq */ :
                return '<=';
            case 7 /* TokenType.Gt */ :
                return '>=';
            case 8 /* TokenType.GtEq */ :
                return '>=';
            case 9 /* TokenType.RegexOp */ :
                return '=~';
            case 10 /* TokenType.RegexStr */ :
                return token.lexeme;
            case 11 /* TokenType.True */ :
                return 'true';
            case 12 /* TokenType.False */ :
                return 'false';
            case 13 /* TokenType.In */ :
                return 'in';
            case 14 /* TokenType.Not */ :
                return 'not';
            case 15 /* TokenType.And */ :
                return '&&';
            case 16 /* TokenType.Or */ :
                return '||';
            case 17 /* TokenType.Str */ :
                return token.lexeme;
            case 18 /* TokenType.QuotedStr */ :
                return token.lexeme;
            case 19 /* TokenType.Error */ :
                return token.lexeme;
            case 20 /* TokenType.EOF */ :
                return 'EOF';
            default:
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["illegalState"])("unhandled token type: ".concat(JSON.stringify(token), "; have you forgotten to add a case?"));
        }
    }
    reset(value) {
        this._input = value;
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        return this;
    }
    scan() {
        while(!this._isAtEnd()){
            this._start = this._current;
            const ch = this._advance();
            switch(ch){
                case 40 /* CharCode.OpenParen */ :
                    this._addToken(0 /* TokenType.LParen */ );
                    break;
                case 41 /* CharCode.CloseParen */ :
                    this._addToken(1 /* TokenType.RParen */ );
                    break;
                case 33 /* CharCode.ExclamationMark */ :
                    if (this._match(61 /* CharCode.Equals */ )) {
                        const isTripleEq = this._match(61 /* CharCode.Equals */ ); // eat last `=` if `!==`
                        this._tokens.push({
                            type: 4 /* TokenType.NotEq */ ,
                            offset: this._start,
                            isTripleEq
                        });
                    } else {
                        this._addToken(2 /* TokenType.Neg */ );
                    }
                    break;
                case 39 /* CharCode.SingleQuote */ :
                    this._quotedString();
                    break;
                case 47 /* CharCode.Slash */ :
                    this._regex();
                    break;
                case 61 /* CharCode.Equals */ :
                    if (this._match(61 /* CharCode.Equals */ )) {
                        const isTripleEq = this._match(61 /* CharCode.Equals */ ); // eat last `=` if `===`
                        this._tokens.push({
                            type: 3 /* TokenType.Eq */ ,
                            offset: this._start,
                            isTripleEq
                        });
                    } else if (this._match(126 /* CharCode.Tilde */ )) {
                        this._addToken(9 /* TokenType.RegexOp */ );
                    } else {
                        this._error(hintDidYouMean('==', '=~'));
                    }
                    break;
                case 60 /* CharCode.LessThan */ :
                    this._addToken(this._match(61 /* CharCode.Equals */ ) ? 6 /* TokenType.LtEq */  : 5 /* TokenType.Lt */ );
                    break;
                case 62 /* CharCode.GreaterThan */ :
                    this._addToken(this._match(61 /* CharCode.Equals */ ) ? 8 /* TokenType.GtEq */  : 7 /* TokenType.Gt */ );
                    break;
                case 38 /* CharCode.Ampersand */ :
                    if (this._match(38 /* CharCode.Ampersand */ )) {
                        this._addToken(15 /* TokenType.And */ );
                    } else {
                        this._error(hintDidYouMean('&&'));
                    }
                    break;
                case 124 /* CharCode.Pipe */ :
                    if (this._match(124 /* CharCode.Pipe */ )) {
                        this._addToken(16 /* TokenType.Or */ );
                    } else {
                        this._error(hintDidYouMean('||'));
                    }
                    break;
                // TODO@ulugbekna: 1) rewrite using a regex 2) reconsider what characters are considered whitespace, including unicode, nbsp, etc.
                case 32 /* CharCode.Space */ :
                case 13 /* CharCode.CarriageReturn */ :
                case 9 /* CharCode.Tab */ :
                case 10 /* CharCode.LineFeed */ :
                case 160 /* CharCode.NoBreakSpace */ :
                    break;
                default:
                    this._string();
            }
        }
        this._start = this._current;
        this._addToken(20 /* TokenType.EOF */ );
        return Array.from(this._tokens);
    }
    _match(expected) {
        if (this._isAtEnd()) {
            return false;
        }
        if (this._input.charCodeAt(this._current) !== expected) {
            return false;
        }
        this._current++;
        return true;
    }
    _advance() {
        return this._input.charCodeAt(this._current++);
    }
    _peek() {
        return this._isAtEnd() ? 0 /* CharCode.Null */  : this._input.charCodeAt(this._current);
    }
    _addToken(type) {
        this._tokens.push({
            type,
            offset: this._start
        });
    }
    _error(additional) {
        const offset = this._start;
        const lexeme = this._input.substring(this._start, this._current);
        const errToken = {
            type: 19 /* TokenType.Error */ ,
            offset: this._start,
            lexeme
        };
        this._errors.push({
            offset,
            lexeme,
            additionalInfo: additional
        });
        this._tokens.push(errToken);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const match = this.stringRe.exec(this._input);
        if (match) {
            this._current = this._start + match[0].length;
            const lexeme = this._input.substring(this._start, this._current);
            const keyword = Scanner._keywords.get(lexeme);
            if (keyword) {
                this._addToken(keyword);
            } else {
                this._tokens.push({
                    type: 17 /* TokenType.Str */ ,
                    lexeme,
                    offset: this._start
                });
            }
        }
    }
    // captures the lexeme without the leading and trailing '
    _quotedString() {
        while(this._peek() !== 39 /* CharCode.SingleQuote */  && !this._isAtEnd()){
            this._advance();
        }
        if (this._isAtEnd()) {
            this._error(hintDidYouForgetToOpenOrCloseQuote);
            return;
        }
        // consume the closing '
        this._advance();
        this._tokens.push({
            type: 18 /* TokenType.QuotedStr */ ,
            lexeme: this._input.substring(this._start + 1, this._current - 1),
            offset: this._start + 1
        });
    }
    /*
     * Lexing a regex expression: /.../[igsmyu]*
     * Based on https://github.com/microsoft/TypeScript/blob/9247ef115e617805983740ba795d7a8164babf89/src/compiler/scanner.ts#L2129-L2181
     *
     * Note that we want slashes within a regex to be escaped, e.g., /file:\\/\\/\\// should match `file:///`
     */ _regex() {
        let p = this._current;
        let inEscape = false;
        let inCharacterClass = false;
        while(true){
            if (p >= this._input.length) {
                this._current = p;
                this._error(hintDidYouForgetToEscapeSlash);
                return;
            }
            const ch = this._input.charCodeAt(p);
            if (inEscape) {
                inEscape = false;
            } else if (ch === 47 /* CharCode.Slash */  && !inCharacterClass) {
                p++;
                break;
            } else if (ch === 91 /* CharCode.OpenSquareBracket */ ) {
                inCharacterClass = true;
            } else if (ch === 92 /* CharCode.Backslash */ ) {
                inEscape = true;
            } else if (ch === 93 /* CharCode.CloseSquareBracket */ ) {
                inCharacterClass = false;
            }
            p++;
        }
        // Consume flags // TODO@ulugbekna: use regex instead
        while(p < this._input.length && Scanner._regexFlags.has(this._input.charCodeAt(p))){
            p++;
        }
        this._current = p;
        const lexeme = this._input.substring(this._start, this._current);
        this._tokens.push({
            type: 10 /* TokenType.RegexStr */ ,
            lexeme,
            offset: this._start
        });
    }
    _isAtEnd() {
        return this._current >= this._input.length;
    }
    constructor(){
        this._input = '';
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        // u - unicode, y - sticky // TODO@ulugbekna: we accept double quotes as part of the string rather than as a delimiter (to preserve old parser's behavior)
        this.stringRe = RegExp('[a-zA-Z0-9_<>\\-\\./\\\\:\\*\\?\\+\\[\\]\\^,#@;"%\\$\\p{L}-]+', "uy");
    }
} //# sourceMappingURL=scanner.js.map
Scanner._regexFlags = new Set([
    'i',
    'g',
    's',
    'm',
    'y',
    'u'
].map((ch)=>ch.charCodeAt(0)));
Scanner._keywords = new Map([
    [
        'not',
        14 /* TokenType.Not */ 
    ],
    [
        'in',
        13 /* TokenType.In */ 
    ],
    [
        'false',
        12 /* TokenType.False */ 
    ],
    [
        'true',
        11 /* TokenType.True */ 
    ]
]);
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContextKeyAndExpr",
    ()=>ContextKeyAndExpr,
    "ContextKeyDefinedExpr",
    ()=>ContextKeyDefinedExpr,
    "ContextKeyEqualsExpr",
    ()=>ContextKeyEqualsExpr,
    "ContextKeyExpr",
    ()=>ContextKeyExpr,
    "ContextKeyFalseExpr",
    ()=>ContextKeyFalseExpr,
    "ContextKeyGreaterEqualsExpr",
    ()=>ContextKeyGreaterEqualsExpr,
    "ContextKeyGreaterExpr",
    ()=>ContextKeyGreaterExpr,
    "ContextKeyInExpr",
    ()=>ContextKeyInExpr,
    "ContextKeyNotEqualsExpr",
    ()=>ContextKeyNotEqualsExpr,
    "ContextKeyNotExpr",
    ()=>ContextKeyNotExpr,
    "ContextKeyNotInExpr",
    ()=>ContextKeyNotInExpr,
    "ContextKeyNotRegexExpr",
    ()=>ContextKeyNotRegexExpr,
    "ContextKeyOrExpr",
    ()=>ContextKeyOrExpr,
    "ContextKeyRegexExpr",
    ()=>ContextKeyRegexExpr,
    "ContextKeySmallerEqualsExpr",
    ()=>ContextKeySmallerEqualsExpr,
    "ContextKeySmallerExpr",
    ()=>ContextKeySmallerExpr,
    "ContextKeyTrueExpr",
    ()=>ContextKeyTrueExpr,
    "IContextKeyService",
    ()=>IContextKeyService,
    "Parser",
    ()=>Parser,
    "RawContextKey",
    ()=>RawContextKey,
    "expressionsAreEqualWithConstantSubstitution",
    ()=>expressionsAreEqualWithConstantSubstitution,
    "implies",
    ()=>implies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/scanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
const CONSTANT_VALUES = new Map();
CONSTANT_VALUES.set('false', false);
CONSTANT_VALUES.set('true', true);
CONSTANT_VALUES.set('isMac', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]);
CONSTANT_VALUES.set('isLinux', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"]);
CONSTANT_VALUES.set('isWindows', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"]);
CONSTANT_VALUES.set('isWeb', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"]);
CONSTANT_VALUES.set('isMacNative', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"]);
CONSTANT_VALUES.set('isEdge', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEdge"]);
CONSTANT_VALUES.set('isFirefox', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]);
CONSTANT_VALUES.set('isChrome', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChrome"]);
CONSTANT_VALUES.set('isSafari', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"]);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const defaultConfig = {
    regexParsingWithErrorRecovery: true
};
const errorEmptyString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1660, "Empty context key expression");
const hintEmptyString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1661, "Did you forget to write an expression? You can also put 'false' or 'true' to always evaluate to false or true, respectively.");
const errorNoInAfterNot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1662, "'in' after 'not'.");
const errorClosingParenthesis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1663, "closing parenthesis ')'");
const errorUnexpectedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1664, "Unexpected token");
const hintUnexpectedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1665, "Did you forget to put && or || before the token?");
const errorUnexpectedEOF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1666, "Unexpected end of expression");
const hintUnexpectedEOF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1667, "Did you forget to put a context key?");
class Parser {
    /**
     * Parse a context key expression.
     *
     * @param input the expression to parse
     * @returns the parsed expression or `undefined` if there's an error - call `lexingErrors` and `parsingErrors` to see the errors
     */ parse(input) {
        if (input === '') {
            this._parsingErrors.push({
                message: errorEmptyString,
                offset: 0,
                lexeme: '',
                additionalInfo: hintEmptyString
            });
            return undefined;
        }
        this._tokens = this._scanner.reset(input).scan();
        // @ulugbekna: we do not stop parsing if there are lexing errors to be able to reconstruct regexes with unescaped slashes; TODO@ulugbekna: make this respect config option for recovery
        this._current = 0;
        this._parsingErrors = [];
        try {
            const expr = this._expr();
            if (!this._isAtEnd()) {
                const peek = this._peek();
                const additionalInfo = peek.type === 17 /* TokenType.Str */  ? hintUnexpectedToken : undefined;
                this._parsingErrors.push({
                    message: errorUnexpectedToken,
                    offset: peek.offset,
                    lexeme: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scanner"].getLexeme(peek),
                    additionalInfo
                });
                throw Parser._parseError;
            }
            return expr;
        } catch (e) {
            if (!(e === Parser._parseError)) {
                throw e;
            }
            return undefined;
        }
    }
    _expr() {
        return this._or();
    }
    _or() {
        const expr = [
            this._and()
        ];
        while(this._matchOne(16 /* TokenType.Or */ )){
            const right = this._and();
            expr.push(right);
        }
        return expr.length === 1 ? expr[0] : ContextKeyExpr.or(...expr);
    }
    _and() {
        const expr = [
            this._term()
        ];
        while(this._matchOne(15 /* TokenType.And */ )){
            const right = this._term();
            expr.push(right);
        }
        return expr.length === 1 ? expr[0] : ContextKeyExpr.and(...expr);
    }
    _term() {
        if (this._matchOne(2 /* TokenType.Neg */ )) {
            const peek = this._peek();
            switch(peek.type){
                case 11 /* TokenType.True */ :
                    this._advance();
                    return ContextKeyFalseExpr.INSTANCE;
                case 12 /* TokenType.False */ :
                    this._advance();
                    return ContextKeyTrueExpr.INSTANCE;
                case 0 /* TokenType.LParen */ :
                    {
                        this._advance();
                        const expr = this._expr();
                        this._consume(1 /* TokenType.RParen */ , errorClosingParenthesis);
                        return expr === null || expr === void 0 ? void 0 : expr.negate();
                    }
                case 17 /* TokenType.Str */ :
                    this._advance();
                    return ContextKeyNotExpr.create(peek.lexeme);
                default:
                    throw this._errExpectedButGot("KEY | true | false | '(' expression ')'", peek);
            }
        }
        return this._primary();
    }
    _primary() {
        const peek = this._peek();
        switch(peek.type){
            case 11 /* TokenType.True */ :
                this._advance();
                return ContextKeyExpr.true();
            case 12 /* TokenType.False */ :
                this._advance();
                return ContextKeyExpr.false();
            case 0 /* TokenType.LParen */ :
                {
                    this._advance();
                    const expr = this._expr();
                    this._consume(1 /* TokenType.RParen */ , errorClosingParenthesis);
                    return expr;
                }
            case 17 /* TokenType.Str */ :
                {
                    // KEY
                    const key = peek.lexeme;
                    this._advance();
                    // =~ regex
                    if (this._matchOne(9 /* TokenType.RegexOp */ )) {
                        // @ulugbekna: we need to reconstruct the regex from the tokens because some extensions use unescaped slashes in regexes
                        const expr = this._peek();
                        if (!this._config.regexParsingWithErrorRecovery) {
                            this._advance();
                            if (expr.type !== 10 /* TokenType.RegexStr */ ) {
                                throw this._errExpectedButGot("REGEX", expr);
                            }
                            const regexLexeme = expr.lexeme;
                            const closingSlashIndex = regexLexeme.lastIndexOf('/');
                            const flags = closingSlashIndex === regexLexeme.length - 1 ? undefined : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
                            let regexp;
                            try {
                                regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
                            } catch (e) {
                                throw this._errExpectedButGot("REGEX", expr);
                            }
                            return ContextKeyRegexExpr.create(key, regexp);
                        }
                        switch(expr.type){
                            case 10 /* TokenType.RegexStr */ :
                            case 19 /* TokenType.Error */ :
                                {
                                    const lexemeReconstruction = [
                                        expr.lexeme
                                    ]; // /REGEX/ or /REGEX/FLAGS
                                    this._advance();
                                    let followingToken = this._peek();
                                    let parenBalance = 0;
                                    for(let i = 0; i < expr.lexeme.length; i++){
                                        if (expr.lexeme.charCodeAt(i) === 40 /* CharCode.OpenParen */ ) {
                                            parenBalance++;
                                        } else if (expr.lexeme.charCodeAt(i) === 41 /* CharCode.CloseParen */ ) {
                                            parenBalance--;
                                        }
                                    }
                                    while(!this._isAtEnd() && followingToken.type !== 15 /* TokenType.And */  && followingToken.type !== 16 /* TokenType.Or */ ){
                                        switch(followingToken.type){
                                            case 0 /* TokenType.LParen */ :
                                                parenBalance++;
                                                break;
                                            case 1 /* TokenType.RParen */ :
                                                parenBalance--;
                                                break;
                                            case 10 /* TokenType.RegexStr */ :
                                            case 18 /* TokenType.QuotedStr */ :
                                                for(let i = 0; i < followingToken.lexeme.length; i++){
                                                    if (followingToken.lexeme.charCodeAt(i) === 40 /* CharCode.OpenParen */ ) {
                                                        parenBalance++;
                                                    } else if (expr.lexeme.charCodeAt(i) === 41 /* CharCode.CloseParen */ ) {
                                                        parenBalance--;
                                                    }
                                                }
                                        }
                                        if (parenBalance < 0) {
                                            break;
                                        }
                                        lexemeReconstruction.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scanner"].getLexeme(followingToken));
                                        this._advance();
                                        followingToken = this._peek();
                                    }
                                    const regexLexeme = lexemeReconstruction.join('');
                                    const closingSlashIndex = regexLexeme.lastIndexOf('/');
                                    const flags = closingSlashIndex === regexLexeme.length - 1 ? undefined : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
                                    let regexp;
                                    try {
                                        regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
                                    } catch (e) {
                                        throw this._errExpectedButGot("REGEX", expr);
                                    }
                                    return ContextKeyExpr.regex(key, regexp);
                                }
                            case 18 /* TokenType.QuotedStr */ :
                                {
                                    const serializedValue = expr.lexeme;
                                    this._advance();
                                    // replicate old regex parsing behavior
                                    let regex = null;
                                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFalsyOrWhitespace"])(serializedValue)) {
                                        const start = serializedValue.indexOf('/');
                                        const end = serializedValue.lastIndexOf('/');
                                        if (start !== end && start >= 0) {
                                            const value = serializedValue.slice(start + 1, end);
                                            const caseIgnoreFlag = serializedValue[end + 1] === 'i' ? 'i' : '';
                                            try {
                                                regex = new RegExp(value, caseIgnoreFlag);
                                            } catch (_e) {
                                                throw this._errExpectedButGot("REGEX", expr);
                                            }
                                        }
                                    }
                                    if (regex === null) {
                                        throw this._errExpectedButGot('REGEX', expr);
                                    }
                                    return ContextKeyRegexExpr.create(key, regex);
                                }
                            default:
                                throw this._errExpectedButGot('REGEX', this._peek());
                        }
                    }
                    // [ 'not' 'in' value ]
                    if (this._matchOne(14 /* TokenType.Not */ )) {
                        this._consume(13 /* TokenType.In */ , errorNoInAfterNot);
                        const right = this._value();
                        return ContextKeyExpr.notIn(key, right);
                    }
                    // [ ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in') value ]
                    const maybeOp = this._peek().type;
                    switch(maybeOp){
                        case 3 /* TokenType.Eq */ :
                            {
                                this._advance();
                                const right = this._value();
                                if (this._previous().type === 18 /* TokenType.QuotedStr */ ) {
                                    return ContextKeyExpr.equals(key, right);
                                }
                                switch(right){
                                    case 'true':
                                        return ContextKeyExpr.has(key);
                                    case 'false':
                                        return ContextKeyExpr.not(key);
                                    default:
                                        return ContextKeyExpr.equals(key, right);
                                }
                            }
                        case 4 /* TokenType.NotEq */ :
                            {
                                this._advance();
                                const right = this._value();
                                if (this._previous().type === 18 /* TokenType.QuotedStr */ ) {
                                    return ContextKeyExpr.notEquals(key, right);
                                }
                                switch(right){
                                    case 'true':
                                        return ContextKeyExpr.not(key);
                                    case 'false':
                                        return ContextKeyExpr.has(key);
                                    default:
                                        return ContextKeyExpr.notEquals(key, right);
                                }
                            }
                        // TODO: ContextKeyExpr.smaller(key, right) accepts only `number` as `right` AND during eval of this node, we just eval to `false` if `right` is not a number
                        // consequently, package.json linter should _warn_ the user if they're passing undesired things to ops
                        case 5 /* TokenType.Lt */ :
                            this._advance();
                            return ContextKeySmallerExpr.create(key, this._value());
                        case 6 /* TokenType.LtEq */ :
                            this._advance();
                            return ContextKeySmallerEqualsExpr.create(key, this._value());
                        case 7 /* TokenType.Gt */ :
                            this._advance();
                            return ContextKeyGreaterExpr.create(key, this._value());
                        case 8 /* TokenType.GtEq */ :
                            this._advance();
                            return ContextKeyGreaterEqualsExpr.create(key, this._value());
                        case 13 /* TokenType.In */ :
                            this._advance();
                            return ContextKeyExpr.in(key, this._value());
                        default:
                            return ContextKeyExpr.has(key);
                    }
                }
            case 20 /* TokenType.EOF */ :
                this._parsingErrors.push({
                    message: errorUnexpectedEOF,
                    offset: peek.offset,
                    lexeme: '',
                    additionalInfo: hintUnexpectedEOF
                });
                throw Parser._parseError;
            default:
                throw this._errExpectedButGot("true | false | KEY \n	| KEY '=~' REGEX \n	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value", this._peek());
        }
    }
    _value() {
        const token = this._peek();
        switch(token.type){
            case 17 /* TokenType.Str */ :
            case 18 /* TokenType.QuotedStr */ :
                this._advance();
                return token.lexeme;
            case 11 /* TokenType.True */ :
                this._advance();
                return 'true';
            case 12 /* TokenType.False */ :
                this._advance();
                return 'false';
            case 13 /* TokenType.In */ :
                this._advance();
                return 'in';
            default:
                // this allows "when": "foo == " which's used by existing extensions
                // we do not call `_advance` on purpose - we don't want to eat unintended tokens
                return '';
        }
    }
    _removeFlagsGY(flags) {
        return flags.replaceAll(this._flagsGYRe, '');
    }
    // careful: this can throw if current token is the initial one (ie index = 0)
    _previous() {
        return this._tokens[this._current - 1];
    }
    _matchOne(token) {
        if (this._check(token)) {
            this._advance();
            return true;
        }
        return false;
    }
    _advance() {
        if (!this._isAtEnd()) {
            this._current++;
        }
        return this._previous();
    }
    _consume(type, message) {
        if (this._check(type)) {
            return this._advance();
        }
        throw this._errExpectedButGot(message, this._peek());
    }
    _errExpectedButGot(expected, got, additionalInfo) {
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1668, "Expected: {0}\nReceived: '{1}'.", expected, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scanner"].getLexeme(got));
        const offset = got.offset;
        const lexeme = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scanner"].getLexeme(got);
        this._parsingErrors.push({
            message,
            offset,
            lexeme,
            additionalInfo
        });
        return Parser._parseError;
    }
    _check(type) {
        return this._peek().type === type;
    }
    _peek() {
        return this._tokens[this._current];
    }
    _isAtEnd() {
        return this._peek().type === 20 /* TokenType.EOF */ ;
    }
    constructor(_config = defaultConfig){
        this._config = _config;
        // lifetime note: `_scanner` lives as long as the parser does, i.e., is not reset between calls to `parse`
        this._scanner = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scanner"]();
        // lifetime note: `_tokens`, `_current`, and `_parsingErrors` must be reset between calls to `parse`
        this._tokens = [];
        this._current = 0; // invariant: 0 <= this._current < this._tokens.length ; any incrementation of this value must first call `_isAtEnd`
        this._parsingErrors = [];
        this._flagsGYRe = /g|y/g;
    }
}
Parser._parseError = new Error();
class ContextKeyExpr {
    static false() {
        return ContextKeyFalseExpr.INSTANCE;
    }
    static true() {
        return ContextKeyTrueExpr.INSTANCE;
    }
    static has(key) {
        return ContextKeyDefinedExpr.create(key);
    }
    static equals(key, value) {
        return ContextKeyEqualsExpr.create(key, value);
    }
    static notEquals(key, value) {
        return ContextKeyNotEqualsExpr.create(key, value);
    }
    static regex(key, value) {
        return ContextKeyRegexExpr.create(key, value);
    }
    static in(key, value) {
        return ContextKeyInExpr.create(key, value);
    }
    static notIn(key, value) {
        return ContextKeyNotInExpr.create(key, value);
    }
    static not(key) {
        return ContextKeyNotExpr.create(key);
    }
    static and() {
        for(var _len = arguments.length, expr = new Array(_len), _key = 0; _key < _len; _key++){
            expr[_key] = arguments[_key];
        }
        return ContextKeyAndExpr.create(expr, null, true);
    }
    static or() {
        for(var _len = arguments.length, expr = new Array(_len), _key = 0; _key < _len; _key++){
            expr[_key] = arguments[_key];
        }
        return ContextKeyOrExpr.create(expr, null, true);
    }
    static deserialize(serialized) {
        if (serialized === undefined || serialized === null) {
            return undefined;
        }
        const expr = this._parser.parse(serialized);
        return expr;
    }
}
ContextKeyExpr._parser = new Parser({
    regexParsingWithErrorRecovery: false
});
function expressionsAreEqualWithConstantSubstitution(a, b) {
    const aExpr = a ? a.substituteConstants() : undefined;
    const bExpr = b ? b.substituteConstants() : undefined;
    if (!aExpr && !bExpr) {
        return true;
    }
    if (!aExpr || !bExpr) {
        return false;
    }
    return aExpr.equals(bExpr);
}
function cmp(a, b) {
    return a.cmp(b);
}
class ContextKeyFalseExpr {
    cmp(other) {
        return this.type - other.type;
    }
    equals(other) {
        return other.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return false;
    }
    serialize() {
        return 'false';
    }
    keys() {
        return [];
    }
    negate() {
        return ContextKeyTrueExpr.INSTANCE;
    }
    constructor(){
        this.type = 0 /* ContextKeyExprType.False */ ;
    }
}
ContextKeyFalseExpr.INSTANCE = new ContextKeyFalseExpr();
class ContextKeyTrueExpr {
    cmp(other) {
        return this.type - other.type;
    }
    equals(other) {
        return other.type === this.type;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return true;
    }
    serialize() {
        return 'true';
    }
    keys() {
        return [];
    }
    negate() {
        return ContextKeyFalseExpr.INSTANCE;
    }
    constructor(){
        this.type = 1 /* ContextKeyExprType.True */ ;
    }
}
ContextKeyTrueExpr.INSTANCE = new ContextKeyTrueExpr();
class ContextKeyDefinedExpr {
    static create(key) {
        let negated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return new ContextKeyDefinedExpr(key, negated);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp1(this.key, other.key);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key;
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return this;
    }
    evaluate(context) {
        return !!context.getValue(this.key);
    }
    serialize() {
        return this.key;
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotExpr.create(this.key, this);
        }
        return this.negated;
    }
    constructor(key, negated){
        this.key = key;
        this.negated = negated;
        this.type = 2 /* ContextKeyExprType.Defined */ ;
    }
}
class ContextKeyEqualsExpr {
    static create(key, value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (typeof value === 'boolean') {
            return value ? ContextKeyDefinedExpr.create(key, negated) : ContextKeyNotExpr.create(key, negated);
        }
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            const trueValue = constantValue ? 'true' : 'false';
            return value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return new ContextKeyEqualsExpr(key, value, negated);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            const trueValue = constantValue ? 'true' : 'false';
            return this.value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return this;
    }
    evaluate(context) {
        // Intentional ==
        // eslint-disable-next-line eqeqeq
        return context.getValue(this.key) == this.value;
    }
    serialize() {
        return "".concat(this.key, " == '").concat(this.value, "'");
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 4 /* ContextKeyExprType.Equals */ ;
    }
}
class ContextKeyInExpr {
    static create(key, valueKey) {
        return new ContextKeyInExpr(key, valueKey);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.valueKey, other.key, other.valueKey);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.valueKey === other.valueKey;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        const source = context.getValue(this.valueKey);
        const item = context.getValue(this.key);
        if (Array.isArray(source)) {
            return source.includes(item);
        }
        if (typeof item === 'string' && typeof source === 'object' && source !== null) {
            return hasOwnProperty.call(source, item);
        }
        return false;
    }
    serialize() {
        return "".concat(this.key, " in '").concat(this.valueKey, "'");
    }
    keys() {
        return [
            this.key,
            this.valueKey
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotInExpr.create(this.key, this.valueKey);
        }
        return this.negated;
    }
    constructor(key, valueKey){
        this.key = key;
        this.valueKey = valueKey;
        this.type = 10 /* ContextKeyExprType.In */ ;
        this.negated = null;
    }
}
class ContextKeyNotInExpr {
    static create(key, valueKey) {
        return new ContextKeyNotInExpr(key, valueKey);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return this._negated.cmp(other._negated);
    }
    equals(other) {
        if (other.type === this.type) {
            return this._negated.equals(other._negated);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return !this._negated.evaluate(context);
    }
    serialize() {
        return "".concat(this.key, " not in '").concat(this.valueKey, "'");
    }
    keys() {
        return this._negated.keys();
    }
    negate() {
        return this._negated;
    }
    constructor(key, valueKey){
        this.key = key;
        this.valueKey = valueKey;
        this.type = 11 /* ContextKeyExprType.NotIn */ ;
        this._negated = ContextKeyInExpr.create(key, valueKey);
    }
}
class ContextKeyNotEqualsExpr {
    static create(key, value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (typeof value === 'boolean') {
            if (value) {
                return ContextKeyNotExpr.create(key, negated);
            }
            return ContextKeyDefinedExpr.create(key, negated);
        }
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            const falseValue = constantValue ? 'true' : 'false';
            return value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
        }
        return new ContextKeyNotEqualsExpr(key, value, negated);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            const falseValue = constantValue ? 'true' : 'false';
            return this.value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
        }
        return this;
    }
    evaluate(context) {
        // Intentional !=
        // eslint-disable-next-line eqeqeq
        return context.getValue(this.key) != this.value;
    }
    serialize() {
        return "".concat(this.key, " != '").concat(this.value, "'");
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 5 /* ContextKeyExprType.NotEquals */ ;
    }
}
class ContextKeyNotExpr {
    static create(key) {
        let negated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
        }
        return new ContextKeyNotExpr(key, negated);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp1(this.key, other.key);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key;
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
        }
        return this;
    }
    evaluate(context) {
        return !context.getValue(this.key);
    }
    serialize() {
        return "!".concat(this.key);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyDefinedExpr.create(this.key, this);
        }
        return this.negated;
    }
    constructor(key, negated){
        this.key = key;
        this.negated = negated;
        this.type = 3 /* ContextKeyExprType.Not */ ;
    }
}
function withFloatOrStr(value, callback) {
    if (typeof value === 'string') {
        const n = parseFloat(value);
        if (!isNaN(n)) {
            value = n;
        }
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return callback(value);
    }
    return ContextKeyFalseExpr.INSTANCE;
}
class ContextKeyGreaterExpr {
    static create(key, _value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return withFloatOrStr(_value, (value)=>new ContextKeyGreaterExpr(key, value, negated));
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return parseFloat(context.getValue(this.key)) > this.value;
    }
    serialize() {
        return "".concat(this.key, " > ").concat(this.value);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeySmallerEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 12 /* ContextKeyExprType.Greater */ ;
    }
}
class ContextKeyGreaterEqualsExpr {
    static create(key, _value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return withFloatOrStr(_value, (value)=>new ContextKeyGreaterEqualsExpr(key, value, negated));
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return parseFloat(context.getValue(this.key)) >= this.value;
    }
    serialize() {
        return "".concat(this.key, " >= ").concat(this.value);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeySmallerExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 13 /* ContextKeyExprType.GreaterEquals */ ;
    }
}
class ContextKeySmallerExpr {
    static create(key, _value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return withFloatOrStr(_value, (value)=>new ContextKeySmallerExpr(key, value, negated));
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return parseFloat(context.getValue(this.key)) < this.value;
    }
    serialize() {
        return "".concat(this.key, " < ").concat(this.value);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyGreaterEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 14 /* ContextKeyExprType.Smaller */ ;
    }
}
class ContextKeySmallerEqualsExpr {
    static create(key, _value) {
        let negated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return withFloatOrStr(_value, (value)=>new ContextKeySmallerEqualsExpr(key, value, negated));
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return this.key === other.key && this.value === other.value;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return parseFloat(context.getValue(this.key)) <= this.value;
    }
    serialize() {
        return "".concat(this.key, " <= ").concat(this.value);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyGreaterExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
    constructor(key, value, negated){
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 15 /* ContextKeyExprType.SmallerEquals */ ;
    }
}
class ContextKeyRegexExpr {
    static create(key, regexp) {
        return new ContextKeyRegexExpr(key, regexp);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        const thisSource = this.regexp ? this.regexp.source : '';
        const otherSource = other.regexp ? other.regexp.source : '';
        if (thisSource < otherSource) {
            return -1;
        }
        if (thisSource > otherSource) {
            return 1;
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            const thisSource = this.regexp ? this.regexp.source : '';
            const otherSource = other.regexp ? other.regexp.source : '';
            return this.key === other.key && thisSource === otherSource;
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        const value = context.getValue(this.key);
        return this.regexp ? this.regexp.test(value) : false;
    }
    serialize() {
        const value = this.regexp ? "/".concat(this.regexp.source, "/").concat(this.regexp.flags) : '/invalid/';
        return "".concat(this.key, " =~ ").concat(value);
    }
    keys() {
        return [
            this.key
        ];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotRegexExpr.create(this);
        }
        return this.negated;
    }
    constructor(key, regexp){
        this.key = key;
        this.regexp = regexp;
        this.type = 7 /* ContextKeyExprType.Regex */ ;
        this.negated = null;
    //
    }
}
class ContextKeyNotRegexExpr {
    static create(actual) {
        return new ContextKeyNotRegexExpr(actual);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return this._actual.cmp(other._actual);
    }
    equals(other) {
        if (other.type === this.type) {
            return this._actual.equals(other._actual);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return !this._actual.evaluate(context);
    }
    serialize() {
        return "!(".concat(this._actual.serialize(), ")");
    }
    keys() {
        return this._actual.keys();
    }
    negate() {
        return this._actual;
    }
    constructor(_actual){
        this._actual = _actual;
        this.type = 8 /* ContextKeyExprType.NotRegex */ ;
    //
    }
}
/**
 * @returns the same instance if nothing changed.
 */ function eliminateConstantsInArray(arr) {
    // Allocate array only if there is a difference
    let newArr = null;
    for(let i = 0, len = arr.length; i < len; i++){
        const newExpr = arr[i].substituteConstants();
        if (arr[i] !== newExpr) {
            // something has changed!
            // allocate array on first difference
            if (newArr === null) {
                newArr = [];
                for(let j = 0; j < i; j++){
                    newArr[j] = arr[j];
                }
            }
        }
        if (newArr !== null) {
            newArr[i] = newExpr;
        }
    }
    if (newArr === null) {
        return arr;
    }
    return newArr;
}
class ContextKeyAndExpr {
    static create(_expr, negated, extraRedundantCheck) {
        return ContextKeyAndExpr._normalizeArr(_expr, negated, extraRedundantCheck);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.expr.length < other.expr.length) {
            return -1;
        }
        if (this.expr.length > other.expr.length) {
            return 1;
        }
        for(let i = 0, len = this.expr.length; i < len; i++){
            const r = cmp(this.expr[i], other.expr[i]);
            if (r !== 0) {
                return r;
            }
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            if (this.expr.length !== other.expr.length) {
                return false;
            }
            for(let i = 0, len = this.expr.length; i < len; i++){
                if (!this.expr[i].equals(other.expr[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    substituteConstants() {
        const exprArr = eliminateConstantsInArray(this.expr);
        if (exprArr === this.expr) {
            // no change
            return this;
        }
        return ContextKeyAndExpr.create(exprArr, this.negated, false);
    }
    evaluate(context) {
        for(let i = 0, len = this.expr.length; i < len; i++){
            if (!this.expr[i].evaluate(context)) {
                return false;
            }
        }
        return true;
    }
    static _normalizeArr(arr, negated, extraRedundantCheck) {
        const expr = [];
        let hasTrue = false;
        for (const e of arr){
            if (!e) {
                continue;
            }
            if (e.type === 1 /* ContextKeyExprType.True */ ) {
                // anything && true ==> anything
                hasTrue = true;
                continue;
            }
            if (e.type === 0 /* ContextKeyExprType.False */ ) {
                // anything && false ==> false
                return ContextKeyFalseExpr.INSTANCE;
            }
            if (e.type === 6 /* ContextKeyExprType.And */ ) {
                expr.push(...e.expr);
                continue;
            }
            expr.push(e);
        }
        if (expr.length === 0 && hasTrue) {
            return ContextKeyTrueExpr.INSTANCE;
        }
        if (expr.length === 0) {
            return undefined;
        }
        if (expr.length === 1) {
            return expr[0];
        }
        expr.sort(cmp);
        // eliminate duplicate terms
        for(let i = 1; i < expr.length; i++){
            if (expr[i - 1].equals(expr[i])) {
                expr.splice(i, 1);
                i--;
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // We must distribute any OR expression because we don't support parens
        // OR extensions will be at the end (due to sorting rules)
        while(expr.length > 1){
            const lastElement = expr[expr.length - 1];
            if (lastElement.type !== 9 /* ContextKeyExprType.Or */ ) {
                break;
            }
            // pop the last element
            expr.pop();
            // pop the second to last element
            const secondToLastElement = expr.pop();
            const isFinished = expr.length === 0;
            // distribute `lastElement` over `secondToLastElement`
            const resultElement = ContextKeyOrExpr.create(lastElement.expr.map((el)=>ContextKeyAndExpr.create([
                    el,
                    secondToLastElement
                ], null, extraRedundantCheck)), null, isFinished);
            if (resultElement) {
                expr.push(resultElement);
                expr.sort(cmp);
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // resolve false AND expressions
        if (extraRedundantCheck) {
            for(let i = 0; i < expr.length; i++){
                for(let j = i + 1; j < expr.length; j++){
                    if (expr[i].negate().equals(expr[j])) {
                        // A && !A case
                        return ContextKeyFalseExpr.INSTANCE;
                    }
                }
            }
            if (expr.length === 1) {
                return expr[0];
            }
        }
        return new ContextKeyAndExpr(expr, negated);
    }
    serialize() {
        return this.expr.map((e)=>e.serialize()).join(' && ');
    }
    keys() {
        const result = [];
        for (const expr of this.expr){
            result.push(...expr.keys());
        }
        return result;
    }
    negate() {
        if (!this.negated) {
            const result = [];
            for (const expr of this.expr){
                result.push(expr.negate());
            }
            this.negated = ContextKeyOrExpr.create(result, this, true);
        }
        return this.negated;
    }
    constructor(expr, negated){
        this.expr = expr;
        this.negated = negated;
        this.type = 6 /* ContextKeyExprType.And */ ;
    }
}
class ContextKeyOrExpr {
    static create(_expr, negated, extraRedundantCheck) {
        return ContextKeyOrExpr._normalizeArr(_expr, negated, extraRedundantCheck);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.expr.length < other.expr.length) {
            return -1;
        }
        if (this.expr.length > other.expr.length) {
            return 1;
        }
        for(let i = 0, len = this.expr.length; i < len; i++){
            const r = cmp(this.expr[i], other.expr[i]);
            if (r !== 0) {
                return r;
            }
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            if (this.expr.length !== other.expr.length) {
                return false;
            }
            for(let i = 0, len = this.expr.length; i < len; i++){
                if (!this.expr[i].equals(other.expr[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    substituteConstants() {
        const exprArr = eliminateConstantsInArray(this.expr);
        if (exprArr === this.expr) {
            // no change
            return this;
        }
        return ContextKeyOrExpr.create(exprArr, this.negated, false);
    }
    evaluate(context) {
        for(let i = 0, len = this.expr.length; i < len; i++){
            if (this.expr[i].evaluate(context)) {
                return true;
            }
        }
        return false;
    }
    static _normalizeArr(arr, negated, extraRedundantCheck) {
        let expr = [];
        let hasFalse = false;
        if (arr) {
            for(let i = 0, len = arr.length; i < len; i++){
                const e = arr[i];
                if (!e) {
                    continue;
                }
                if (e.type === 0 /* ContextKeyExprType.False */ ) {
                    // anything || false ==> anything
                    hasFalse = true;
                    continue;
                }
                if (e.type === 1 /* ContextKeyExprType.True */ ) {
                    // anything || true ==> true
                    return ContextKeyTrueExpr.INSTANCE;
                }
                if (e.type === 9 /* ContextKeyExprType.Or */ ) {
                    expr = expr.concat(e.expr);
                    continue;
                }
                expr.push(e);
            }
            if (expr.length === 0 && hasFalse) {
                return ContextKeyFalseExpr.INSTANCE;
            }
            expr.sort(cmp);
        }
        if (expr.length === 0) {
            return undefined;
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // eliminate duplicate terms
        for(let i = 1; i < expr.length; i++){
            if (expr[i - 1].equals(expr[i])) {
                expr.splice(i, 1);
                i--;
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // resolve true OR expressions
        if (extraRedundantCheck) {
            for(let i = 0; i < expr.length; i++){
                for(let j = i + 1; j < expr.length; j++){
                    if (expr[i].negate().equals(expr[j])) {
                        // A || !A case
                        return ContextKeyTrueExpr.INSTANCE;
                    }
                }
            }
            if (expr.length === 1) {
                return expr[0];
            }
        }
        return new ContextKeyOrExpr(expr, negated);
    }
    serialize() {
        return this.expr.map((e)=>e.serialize()).join(' || ');
    }
    keys() {
        const result = [];
        for (const expr of this.expr){
            result.push(...expr.keys());
        }
        return result;
    }
    negate() {
        if (!this.negated) {
            const result = [];
            for (const expr of this.expr){
                result.push(expr.negate());
            }
            // We don't support parens, so here we distribute the AND over the OR terminals
            // We always take the first 2 AND pairs and distribute them
            while(result.length > 1){
                const LEFT = result.shift();
                const RIGHT = result.shift();
                const all = [];
                for (const left of getTerminals(LEFT)){
                    for (const right of getTerminals(RIGHT)){
                        all.push(ContextKeyAndExpr.create([
                            left,
                            right
                        ], null, false));
                    }
                }
                result.unshift(ContextKeyOrExpr.create(all, null, false));
            }
            this.negated = ContextKeyOrExpr.create(result, this, true);
        }
        return this.negated;
    }
    constructor(expr, negated){
        this.expr = expr;
        this.negated = negated;
        this.type = 9 /* ContextKeyExprType.Or */ ;
    }
}
class RawContextKey extends ContextKeyDefinedExpr {
    static all() {
        return RawContextKey._info.values();
    }
    bindTo(target) {
        return target.createKey(this.key, this._defaultValue);
    }
    getValue(target) {
        return target.getContextKeyValue(this.key);
    }
    toNegated() {
        return this.negate();
    }
    isEqualTo(value) {
        return ContextKeyEqualsExpr.create(this.key, value);
    }
    constructor(key, defaultValue, metaOrHide){
        super(key, null);
        this._defaultValue = defaultValue;
        // collect all context keys into a central place
        if (typeof metaOrHide === 'object') {
            RawContextKey._info.push({
                ...metaOrHide,
                key
            });
        } else if (metaOrHide !== true) {
            RawContextKey._info.push({
                key,
                description: metaOrHide,
                type: defaultValue !== null && defaultValue !== undefined ? typeof defaultValue : undefined
            });
        }
    }
}
RawContextKey._info = [];
const IContextKeyService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('contextKeyService');
function cmp1(key1, key2) {
    if (key1 < key2) {
        return -1;
    }
    if (key1 > key2) {
        return 1;
    }
    return 0;
}
function cmp2(key1, value1, key2, value2) {
    if (key1 < key2) {
        return -1;
    }
    if (key1 > key2) {
        return 1;
    }
    if (value1 < value2) {
        return -1;
    }
    if (value1 > value2) {
        return 1;
    }
    return 0;
}
function implies(p, q) {
    if (p.type === 0 /* ContextKeyExprType.False */  || q.type === 1 /* ContextKeyExprType.True */ ) {
        // false implies anything
        // anything implies true
        return true;
    }
    if (p.type === 9 /* ContextKeyExprType.Or */ ) {
        if (q.type === 9 /* ContextKeyExprType.Or */ ) {
            // `a || b || c` can only imply something like `a || b || c || d`
            return allElementsIncluded(p.expr, q.expr);
        }
        return false;
    }
    if (q.type === 9 /* ContextKeyExprType.Or */ ) {
        for (const element of q.expr){
            if (implies(p, element)) {
                return true;
            }
        }
        return false;
    }
    if (p.type === 6 /* ContextKeyExprType.And */ ) {
        if (q.type === 6 /* ContextKeyExprType.And */ ) {
            // `a && b && c` implies `a && c`
            return allElementsIncluded(q.expr, p.expr);
        }
        for (const element of p.expr){
            if (implies(element, q)) {
                return true;
            }
        }
        return false;
    }
    return p.equals(q);
}
/**
 * Returns true if all elements in `p` are also present in `q`.
 * The two arrays are assumed to be sorted
 */ function allElementsIncluded(p, q) {
    let pIndex = 0;
    let qIndex = 0;
    while(pIndex < p.length && qIndex < q.length){
        const cmp = p[pIndex].cmp(q[qIndex]);
        if (cmp < 0) {
            // an element from `p` is missing from `q`
            return false;
        } else if (cmp === 0) {
            pIndex++;
            qIndex++;
        } else {
            qIndex++;
        }
    }
    return pIndex === p.length;
}
function getTerminals(node) {
    if (node.type === 9 /* ContextKeyExprType.Or */ ) {
        return node.expr;
    }
    return [
        node
    ];
} //# sourceMappingURL=contextkey.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "InputFocusedContext",
    ()=>InputFocusedContext,
    "InputFocusedContextKey",
    ()=>InputFocusedContextKey,
    "IsDevelopmentContext",
    ()=>IsDevelopmentContext,
    "IsIOSContext",
    ()=>IsIOSContext,
    "IsLinuxContext",
    ()=>IsLinuxContext,
    "IsMacContext",
    ()=>IsMacContext,
    "IsMacNativeContext",
    ()=>IsMacNativeContext,
    "IsMobileContext",
    ()=>IsMobileContext,
    "IsWebContext",
    ()=>IsWebContext,
    "IsWindowsContext",
    ()=>IsWindowsContext,
    "ProductQualityContext",
    ()=>ProductQualityContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
;
;
;
const IsMacContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isMac', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1669, "Whether the operating system is macOS"));
const IsLinuxContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isLinux', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1670, "Whether the operating system is Linux"));
const IsWindowsContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isWindows', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1671, "Whether the operating system is Windows"));
const IsWebContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isWeb', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1672, "Whether the platform is a web browser"));
const IsMacNativeContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isMacNative', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1673, "Whether the operating system is macOS on a non-browser platform"));
const IsIOSContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isIOS', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1674, "Whether the operating system is iOS"));
const IsMobileContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isMobile', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1675, "Whether the platform is a mobile web browser"));
const IsDevelopmentContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('isDevelopment', false, true);
const ProductQualityContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('productQualityType', '', (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1676, "Quality type of VS Code"));
const InputFocusedContextKey = 'inputFocus';
const InputFocusedContext = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"](InputFocusedContextKey, false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1677, "Whether keyboard focus is inside an input box")); //# sourceMappingURL=contextkeys.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/browser/contextKeyService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AbstractContextKeyService",
    ()=>AbstractContextKeyService,
    "Context",
    ()=>Context,
    "ContextKeyService",
    ()=>ContextKeyService,
    "setContext",
    ()=>setContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ternarySearchTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/ternarySearchTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
;
const KEYBINDING_CONTEXT_ATTR = 'data-keybinding-context';
class Context {
    get value() {
        return {
            ...this._value
        };
    }
    setValue(key, value) {
        // console.log('SET ' + key + ' = ' + value + ' ON ' + this._id);
        if (this._value[key] !== value) {
            this._value[key] = value;
            return true;
        }
        return false;
    }
    removeValue(key) {
        // console.log('REMOVE ' + key + ' FROM ' + this._id);
        if (key in this._value) {
            delete this._value[key];
            return true;
        }
        return false;
    }
    getValue(key) {
        const ret = this._value[key];
        if (typeof ret === 'undefined' && this._parent) {
            return this._parent.getValue(key);
        }
        return ret;
    }
    constructor(id, parent){
        this._id = id;
        this._parent = parent;
        this._value = Object.create(null);
        this._value['_contextId'] = id;
    }
}
class NullContext extends Context {
    setValue(key, value) {
        return false;
    }
    removeValue(key) {
        return false;
    }
    getValue(key) {
        return undefined;
    }
    constructor(){
        super(-1, null);
    }
}
NullContext.INSTANCE = new NullContext();
class ConfigAwareContextValuesContainer extends Context {
    dispose() {
        this._listener.dispose();
    }
    getValue(key) {
        if (key.indexOf(ConfigAwareContextValuesContainer._keyPrefix) !== 0) {
            return super.getValue(key);
        }
        if (this._values.has(key)) {
            return this._values.get(key);
        }
        const configKey = key.substr(ConfigAwareContextValuesContainer._keyPrefix.length);
        const configValue = this._configurationService.getValue(configKey);
        let value = undefined;
        switch(typeof configValue){
            case 'number':
            case 'boolean':
            case 'string':
                value = configValue;
                break;
            default:
                if (Array.isArray(configValue)) {
                    value = JSON.stringify(configValue);
                } else {
                    value = configValue;
                }
        }
        this._values.set(key, value);
        return value;
    }
    setValue(key, value) {
        return super.setValue(key, value);
    }
    removeValue(key) {
        return super.removeValue(key);
    }
    constructor(id, _configurationService, emitter){
        super(id, null);
        this._configurationService = _configurationService;
        this._values = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ternarySearchTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TernarySearchTree"].forConfigKeys();
        this._listener = this._configurationService.onDidChangeConfiguration((event)=>{
            if (event.source === 7 /* ConfigurationTarget.DEFAULT */ ) {
                // new setting, reset everything
                const allKeys = Array.from(this._values, (param)=>{
                    let [k] = param;
                    return k;
                });
                this._values.clear();
                emitter.fire(new ArrayContextKeyChangeEvent(allKeys));
            } else {
                const changedKeys = [];
                for (const configKey of event.affectedKeys){
                    const contextKey = "config.".concat(configKey);
                    const cachedItems = this._values.findSuperstr(contextKey);
                    if (cachedItems !== undefined) {
                        changedKeys.push(...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].map(cachedItems, (param)=>{
                            let [key] = param;
                            return key;
                        }));
                        this._values.deleteSuperstr(contextKey);
                    }
                    if (this._values.has(contextKey)) {
                        changedKeys.push(contextKey);
                        this._values.delete(contextKey);
                    }
                }
                emitter.fire(new ArrayContextKeyChangeEvent(changedKeys));
            }
        });
    }
}
ConfigAwareContextValuesContainer._keyPrefix = 'config.';
class ContextKey {
    set(value) {
        this._service.setContext(this._key, value);
    }
    reset() {
        if (typeof this._defaultValue === 'undefined') {
            this._service.removeContext(this._key);
        } else {
            this._service.setContext(this._key, this._defaultValue);
        }
    }
    get() {
        return this._service.getContextKeyValue(this._key);
    }
    constructor(service, key, defaultValue){
        this._service = service;
        this._key = key;
        this._defaultValue = defaultValue;
        this.reset();
    }
}
class SimpleContextKeyChangeEvent {
    affectsSome(keys) {
        return keys.has(this.key);
    }
    allKeysContainedIn(keys) {
        return this.affectsSome(keys);
    }
    constructor(key){
        this.key = key;
    }
}
class ArrayContextKeyChangeEvent {
    affectsSome(keys) {
        for (const key of this.keys){
            if (keys.has(key)) {
                return true;
            }
        }
        return false;
    }
    allKeysContainedIn(keys) {
        return this.keys.every((key)=>keys.has(key));
    }
    constructor(keys){
        this.keys = keys;
    }
}
class CompositeContextKeyChangeEvent {
    affectsSome(keys) {
        for (const e of this.events){
            if (e.affectsSome(keys)) {
                return true;
            }
        }
        return false;
    }
    allKeysContainedIn(keys) {
        return this.events.every((evt)=>evt.allKeysContainedIn(keys));
    }
    constructor(events){
        this.events = events;
    }
}
function allEventKeysInContext(event, context) {
    return event.allKeysContainedIn(new Set(Object.keys(context)));
}
class AbstractContextKeyService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidChangeContext() {
        return this._onDidChangeContext.event;
    }
    createKey(key, defaultValue) {
        if (this._isDisposed) {
            throw new Error("AbstractContextKeyService has been disposed");
        }
        return new ContextKey(this, key, defaultValue);
    }
    bufferChangeEvents(callback) {
        this._onDidChangeContext.pause();
        try {
            callback();
        } finally{
            this._onDidChangeContext.resume();
        }
    }
    createScoped(domNode) {
        if (this._isDisposed) {
            throw new Error("AbstractContextKeyService has been disposed");
        }
        return new ScopedContextKeyService(this, domNode);
    }
    contextMatchesRules(rules) {
        if (this._isDisposed) {
            throw new Error("AbstractContextKeyService has been disposed");
        }
        const context = this.getContextValuesContainer(this._myContextId);
        const result = rules ? rules.evaluate(context) : true;
        // console.group(rules.serialize() + ' -> ' + result);
        // rules.keys().forEach(key => { console.log(key, ctx[key]); });
        // console.groupEnd();
        return result;
    }
    getContextKeyValue(key) {
        if (this._isDisposed) {
            return undefined;
        }
        return this.getContextValuesContainer(this._myContextId).getValue(key);
    }
    setContext(key, value) {
        if (this._isDisposed) {
            return;
        }
        const myContext = this.getContextValuesContainer(this._myContextId);
        if (!myContext) {
            return;
        }
        if (myContext.setValue(key, value)) {
            this._onDidChangeContext.fire(new SimpleContextKeyChangeEvent(key));
        }
    }
    removeContext(key) {
        if (this._isDisposed) {
            return;
        }
        if (this.getContextValuesContainer(this._myContextId).removeValue(key)) {
            this._onDidChangeContext.fire(new SimpleContextKeyChangeEvent(key));
        }
    }
    getContext(target) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this.getContextValuesContainer(findContextAttr(target));
    }
    dispose() {
        super.dispose();
        this._isDisposed = true;
    }
    constructor(myContextId){
        super();
        this._onDidChangeContext = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseableEmitter"]({
            merge: (input)=>new CompositeContextKeyChangeEvent(input)
        }));
        this._isDisposed = false;
        this._myContextId = myContextId;
    }
}
let ContextKeyService = class ContextKeyService extends AbstractContextKeyService {
    updateInputContextKeys(ownerDocument, disposables) {
        function activeElementIsInput() {
            return !!ownerDocument.activeElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEditableElement"])(ownerDocument.activeElement);
        }
        const isInputFocused = activeElementIsInput();
        this.inputFocusedContext.set(isInputFocused);
        if (isInputFocused) {
            const tracker = disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFocus"])(ownerDocument.activeElement));
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].once(tracker.onDidBlur)(()=>{
                // Ensure we are only updating the context key if we are
                // still in the same document that we are tracking. This
                // fixes a race condition in multi-window setups where
                // the blur event arrives in the inactive window overwriting
                // the context key of the active window. This is because
                // blur events from the focus tracker are emitted with a
                // timeout of 0.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"])().document === ownerDocument) {
                    this.inputFocusedContext.set(activeElementIsInput());
                }
                tracker.dispose();
            }, undefined, disposables);
        }
    }
    getContextValuesContainer(contextId) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this._contexts.get(contextId) || NullContext.INSTANCE;
    }
    createChildContext() {
        let parentContextId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._myContextId;
        if (this._isDisposed) {
            throw new Error("ContextKeyService has been disposed");
        }
        const id = ++this._lastContextId;
        this._contexts.set(id, new Context(id, this.getContextValuesContainer(parentContextId)));
        return id;
    }
    disposeContext(contextId) {
        if (!this._isDisposed) {
            this._contexts.delete(contextId);
        }
    }
    constructor(configurationService){
        super(0);
        this._contexts = new Map();
        this._lastContextId = 0;
        this.inputFocusedContext = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputFocusedContext"].bindTo(this);
        const myContext = this._register(new ConfigAwareContextValuesContainer(this._myContextId, configurationService, this._onDidChangeContext));
        this._contexts.set(this._myContextId, myContext);
        // Uncomment this to see the contexts continuously logged
        // let lastLoggedValue: string | null = null;
        // setInterval(() => {
        // 	let values = Object.keys(this._contexts).map((key) => this._contexts[key]);
        // 	let logValue = values.map(v => JSON.stringify(v._value, null, '\t')).join('\n');
        // 	if (lastLoggedValue !== logValue) {
        // 		lastLoggedValue = logValue;
        // 		console.log(lastLoggedValue);
        // 	}
        // }, 2000);
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].runAndSubscribe(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDidRegisterWindow"], (param)=>{
            let { window, disposables } = param;
            const onFocusDisposables = disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(window, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS_IN, ()=>{
                onFocusDisposables.value = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
                this.updateInputContextKeys(window.document, onFocusDisposables.value);
            }, true));
        }, {
            window: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"],
            disposables: this._store
        }));
    }
};
ContextKeyService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], ContextKeyService);
;
class ScopedContextKeyService extends AbstractContextKeyService {
    _updateParentChangeListener() {
        // Forward parent events to this listener. Parent will change.
        this._parentChangeListener.value = this._parent.onDidChangeContext((e)=>{
            const thisContainer = this._parent.getContextValuesContainer(this._myContextId);
            const thisContextValues = thisContainer.value;
            if (!allEventKeysInContext(e, thisContextValues)) {
                this._onDidChangeContext.fire(e);
            }
        });
    }
    dispose() {
        if (this._isDisposed) {
            return;
        }
        this._parent.disposeContext(this._myContextId);
        this._domNode.removeAttribute(KEYBINDING_CONTEXT_ATTR);
        super.dispose();
    }
    getContextValuesContainer(contextId) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this._parent.getContextValuesContainer(contextId);
    }
    createChildContext() {
        let parentContextId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._myContextId;
        if (this._isDisposed) {
            throw new Error("ScopedContextKeyService has been disposed");
        }
        return this._parent.createChildContext(parentContextId);
    }
    disposeContext(contextId) {
        if (this._isDisposed) {
            return;
        }
        this._parent.disposeContext(contextId);
    }
    constructor(parent, domNode){
        super(parent.createChildContext());
        this._parentChangeListener = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this._parent = parent;
        this._updateParentChangeListener();
        this._domNode = domNode;
        if (this._domNode.hasAttribute(KEYBINDING_CONTEXT_ATTR)) {
            let extraInfo = '';
            if (this._domNode.classList) {
                extraInfo = Array.from(this._domNode.classList.values()).join(', ');
            }
            console.error("Element already has context attribute".concat(extraInfo ? ': ' + extraInfo : ''));
        }
        this._domNode.setAttribute(KEYBINDING_CONTEXT_ATTR, String(this._myContextId));
    }
}
function findContextAttr(domNode) {
    while(domNode){
        if (domNode.hasAttribute(KEYBINDING_CONTEXT_ATTR)) {
            const attr = domNode.getAttribute(KEYBINDING_CONTEXT_ATTR);
            if (attr) {
                return parseInt(attr, 10);
            }
            return NaN;
        }
        domNode = domNode.parentElement;
    }
    return 0;
}
function setContext(accessor, contextKey, contextValue) {
    const contextKeyService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]);
    contextKeyService.createKey(String(contextKey), stringifyURIs(contextValue));
}
function stringifyURIs(contextValue) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneAndChange"])(contextValue, (obj)=>{
        if (typeof obj === 'object' && obj.$mid === 1 /* MarshalledId.Uri */ ) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].revive(obj).toString();
        }
        if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"]) {
            return obj.toString();
        }
        return undefined;
    });
}
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand('_setContext', setContext);
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand({
    id: 'getContextKeyInfo',
    handler () {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"].all()
        ].sort((a, b)=>a.key.localeCompare(b.key));
    },
    metadata: {
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1659, "A command that returns information about context keys"),
        args: []
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand('_generateContextKeyInfo', function() {
    const result = [];
    const seen = new Set();
    for (const info of __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"].all()){
        if (!seen.has(info.key)) {
            seen.add(info.key);
            result.push(info);
        }
    }
    result.sort((a, b)=>a.key.localeCompare(b.key));
    console.log(JSON.stringify(result, undefined, 2));
}); //# sourceMappingURL=contextKeyService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Registry",
    ()=>Registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
;
;
class RegistryImpl {
    add(id, data) {
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"](__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](id));
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"](__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](data));
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ok"](!this.data.has(id), 'There is already an extension with this id');
        this.data.set(id, data);
    }
    as(id) {
        return this.data.get(id) || null;
    }
    dispose() {
        this.data.forEach((value)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](value.dispose)) {
                value.dispose();
            }
        });
        this.data.clear();
    }
    constructor(){
        this.data = new Map();
    }
}
const Registry = new RegistryImpl(); //# sourceMappingURL=platform.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Extensions",
    ()=>Extensions,
    "KeybindingsRegistry",
    ()=>KeybindingsRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Stores all built-in and extension-provided keybindings (but not ones that user defines themselves)
 */ class KeybindingsRegistryImpl {
    /**
     * Take current platform into account and reduce to primary & secondary.
     */ static bindToCurrentPlatform(kb) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"] === 1 /* OperatingSystem.Windows */ ) {
            if (kb && kb.win) {
                return kb.win;
            }
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"] === 2 /* OperatingSystem.Macintosh */ ) {
            if (kb && kb.mac) {
                return kb.mac;
            }
        } else {
            if (kb && kb.linux) {
                return kb.linux;
            }
        }
        return kb;
    }
    registerKeybindingRule(rule) {
        const actualKb = KeybindingsRegistryImpl.bindToCurrentPlatform(rule);
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        if (actualKb && actualKb.primary) {
            const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeKeybinding"])(actualKb.primary, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"]);
            if (kk) {
                result.add(this._registerDefaultKeybinding(kk, rule.id, rule.args, rule.weight, 0, rule.when));
            }
        }
        if (actualKb && Array.isArray(actualKb.secondary)) {
            for(let i = 0, len = actualKb.secondary.length; i < len; i++){
                const k = actualKb.secondary[i];
                const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeKeybinding"])(k, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"]);
                if (kk) {
                    result.add(this._registerDefaultKeybinding(kk, rule.id, rule.args, rule.weight, -i - 1, rule.when));
                }
            }
        }
        return result;
    }
    registerCommandAndKeybindingRule(desc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(this.registerKeybindingRule(desc), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand(desc));
    }
    _registerDefaultKeybinding(keybinding, commandId, commandArgs, weight1, weight2, when) {
        const remove = this._coreKeybindings.push({
            keybinding: keybinding,
            command: commandId,
            commandArgs: commandArgs,
            when: when,
            weight1: weight1,
            weight2: weight2,
            extensionId: null,
            isBuiltinExtension: false
        });
        this._cachedMergedKeybindings = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            remove();
            this._cachedMergedKeybindings = null;
        });
    }
    getDefaultKeybindings() {
        if (!this._cachedMergedKeybindings) {
            this._cachedMergedKeybindings = Array.from(this._coreKeybindings).concat(this._extensionKeybindings);
            this._cachedMergedKeybindings.sort(sorter);
        }
        return this._cachedMergedKeybindings.slice(0);
    }
    constructor(){
        this._coreKeybindings = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this._extensionKeybindings = [];
        this._cachedMergedKeybindings = null;
    }
}
const KeybindingsRegistry = new KeybindingsRegistryImpl();
const Extensions = {
    EditorModes: 'platform.keybindingsRegistry'
};
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].add(Extensions.EditorModes, KeybindingsRegistry);
function sorter(a, b) {
    if (a.weight1 !== b.weight1) {
        return a.weight1 - b.weight1;
    }
    if (a.command && b.command) {
        if (a.command < b.command) {
            return -1;
        }
        if (a.command > b.command) {
            return 1;
        }
    }
    return a.weight2 - b.weight2;
} //# sourceMappingURL=keybindingsRegistry.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IKeybindingService",
    ()=>IKeybindingService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IKeybindingService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('keybindingService'); //# sourceMappingURL=keybinding.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "KeybindingResolver",
    ()=>KeybindingResolver,
    "NoMatchingKb",
    ()=>NoMatchingKb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
;
const NoMatchingKb = {
    kind: 0 /* ResultKind.NoMatchingKb */ 
};
const MoreChordsNeeded = {
    kind: 1 /* ResultKind.MoreChordsNeeded */ 
};
function KbFound(commandId, commandArgs, isBubble) {
    return {
        kind: 2 /* ResultKind.KbFound */ ,
        commandId,
        commandArgs,
        isBubble
    };
}
class KeybindingResolver {
    static _isTargetedForRemoval(defaultKb, keypress, when) {
        if (keypress) {
            for(let i = 0; i < keypress.length; i++){
                if (keypress[i] !== defaultKb.chords[i]) {
                    return false;
                }
            }
        }
        // `true` means always, as does `undefined`
        // so we will treat `true` === `undefined`
        if (when && when.type !== 1 /* ContextKeyExprType.True */ ) {
            if (!defaultKb.when) {
                return false;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expressionsAreEqualWithConstantSubstitution"])(when, defaultKb.when)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Looks for rules containing "-commandId" and removes them.
     */ static handleRemovals(rules) {
        // Do a first pass and construct a hash-map for removals
        const removals = new Map();
        for(let i = 0, len = rules.length; i < len; i++){
            const rule = rules[i];
            if (rule.command && rule.command.charAt(0) === '-') {
                const command = rule.command.substring(1);
                if (!removals.has(command)) {
                    removals.set(command, [
                        rule
                    ]);
                } else {
                    removals.get(command).push(rule);
                }
            }
        }
        if (removals.size === 0) {
            // There are no removals
            return rules;
        }
        // Do a second pass and keep only non-removed keybindings
        const result = [];
        for(let i = 0, len = rules.length; i < len; i++){
            const rule = rules[i];
            if (!rule.command || rule.command.length === 0) {
                result.push(rule);
                continue;
            }
            if (rule.command.charAt(0) === '-') {
                continue;
            }
            const commandRemovals = removals.get(rule.command);
            if (!commandRemovals || !rule.isDefault) {
                result.push(rule);
                continue;
            }
            let isRemoved = false;
            for (const commandRemoval of commandRemovals){
                const when = commandRemoval.when;
                if (this._isTargetedForRemoval(rule, commandRemoval.chords, when)) {
                    isRemoved = true;
                    break;
                }
            }
            if (!isRemoved) {
                result.push(rule);
                continue;
            }
        }
        return result;
    }
    _addKeyPress(keypress, item) {
        const conflicts = this._map.get(keypress);
        if (typeof conflicts === 'undefined') {
            // There is no conflict so far
            this._map.set(keypress, [
                item
            ]);
            this._addToLookupMap(item);
            return;
        }
        for(let i = conflicts.length - 1; i >= 0; i--){
            const conflict = conflicts[i];
            if (conflict.command === item.command) {
                continue;
            }
            // Test if the shorter keybinding is a prefix of the longer one.
            // If the shorter keybinding is a prefix, it effectively will shadow the longer one and is considered a conflict.
            let isShorterKbPrefix = true;
            for(let i = 1; i < conflict.chords.length && i < item.chords.length; i++){
                if (conflict.chords[i] !== item.chords[i]) {
                    // The ith step does not conflict
                    isShorterKbPrefix = false;
                    break;
                }
            }
            if (!isShorterKbPrefix) {
                continue;
            }
            if (KeybindingResolver.whenIsEntirelyIncluded(conflict.when, item.when)) {
                // `item` completely overwrites `conflict`
                // Remove conflict from the lookupMap
                this._removeFromLookupMap(conflict);
            }
        }
        conflicts.push(item);
        this._addToLookupMap(item);
    }
    _addToLookupMap(item) {
        if (!item.command) {
            return;
        }
        let arr = this._lookupMap.get(item.command);
        if (typeof arr === 'undefined') {
            arr = [
                item
            ];
            this._lookupMap.set(item.command, arr);
        } else {
            arr.push(item);
        }
    }
    _removeFromLookupMap(item) {
        if (!item.command) {
            return;
        }
        const arr = this._lookupMap.get(item.command);
        if (typeof arr === 'undefined') {
            return;
        }
        for(let i = 0, len = arr.length; i < len; i++){
            if (arr[i] === item) {
                arr.splice(i, 1);
                return;
            }
        }
    }
    /**
     * Returns true if it is provable `a` implies `b`.
     */ static whenIsEntirelyIncluded(a, b) {
        if (!b || b.type === 1 /* ContextKeyExprType.True */ ) {
            return true;
        }
        if (!a || a.type === 1 /* ContextKeyExprType.True */ ) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["implies"])(a, b);
    }
    getKeybindings() {
        return this._keybindings;
    }
    lookupPrimaryKeybinding(commandId, context) {
        let enforceContextCheck = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const items = this._lookupMap.get(commandId);
        if (typeof items === 'undefined' || items.length === 0) {
            return null;
        }
        if (items.length === 1 && !enforceContextCheck) {
            return items[0];
        }
        for(let i = items.length - 1; i >= 0; i--){
            const item = items[i];
            if (context.contextMatchesRules(item.when)) {
                return item;
            }
        }
        if (enforceContextCheck) {
            return null;
        }
        return items[items.length - 1];
    }
    /**
     * Looks up a keybinding trigged as a result of pressing a sequence of chords - `[...currentChords, keypress]`
     *
     * Example: resolving 3 chords pressed sequentially - `cmd+k cmd+p cmd+i`:
     * 	`currentChords = [ 'cmd+k' , 'cmd+p' ]` and `keypress = `cmd+i` - last pressed chord
     */ resolve(context, currentChords, keypress) {
        const pressedChords = [
            ...currentChords,
            keypress
        ];
        this._log("| Resolving ".concat(pressedChords));
        const kbCandidates = this._map.get(pressedChords[0]);
        if (kbCandidates === undefined) {
            // No bindings with such 0-th chord
            this._log("\\ No keybinding entries.");
            return NoMatchingKb;
        }
        let lookupMap = null;
        if (pressedChords.length < 2) {
            lookupMap = kbCandidates;
        } else {
            // Fetch all chord bindings for `currentChords`
            lookupMap = [];
            for(let i = 0, len = kbCandidates.length; i < len; i++){
                const candidate = kbCandidates[i];
                if (pressedChords.length > candidate.chords.length) {
                    continue;
                }
                let prefixMatches = true;
                for(let i = 1; i < pressedChords.length; i++){
                    if (candidate.chords[i] !== pressedChords[i]) {
                        prefixMatches = false;
                        break;
                    }
                }
                if (prefixMatches) {
                    lookupMap.push(candidate);
                }
            }
        }
        // check there's a keybinding with a matching when clause
        const result = this._findCommand(context, lookupMap);
        if (!result) {
            this._log("\\ From ".concat(lookupMap.length, " keybinding entries, no when clauses matched the context."));
            return NoMatchingKb;
        }
        // check we got all chords necessary to be sure a particular keybinding needs to be invoked
        if (pressedChords.length < result.chords.length) {
            // The chord sequence is not complete
            this._log("\\ From ".concat(lookupMap.length, " keybinding entries, awaiting ").concat(result.chords.length - pressedChords.length, " more chord(s), when: ").concat(printWhenExplanation(result.when), ", source: ").concat(printSourceExplanation(result), "."));
            return MoreChordsNeeded;
        }
        this._log("\\ From ".concat(lookupMap.length, " keybinding entries, matched ").concat(result.command, ", when: ").concat(printWhenExplanation(result.when), ", source: ").concat(printSourceExplanation(result), "."));
        return KbFound(result.command, result.commandArgs, result.bubble);
    }
    _findCommand(context, matches) {
        for(let i = matches.length - 1; i >= 0; i--){
            const k = matches[i];
            if (!KeybindingResolver._contextMatchesRules(context, k.when)) {
                continue;
            }
            return k;
        }
        return null;
    }
    static _contextMatchesRules(context, rules) {
        if (!rules) {
            return true;
        }
        return rules.evaluate(context);
    }
    constructor(/** built-in and extension-provided keybindings */ defaultKeybindings, /** user's keybindings */ overrides, log){
        this._log = log;
        this._defaultKeybindings = defaultKeybindings;
        this._defaultBoundCommands = new Map();
        for (const defaultKeybinding of defaultKeybindings){
            const command = defaultKeybinding.command;
            if (command && command.charAt(0) !== '-') {
                this._defaultBoundCommands.set(command, true);
            }
        }
        this._map = new Map();
        this._lookupMap = new Map();
        this._keybindings = KeybindingResolver.handleRemovals([].concat(defaultKeybindings).concat(overrides));
        for(let i = 0, len = this._keybindings.length; i < len; i++){
            var _k_when;
            const k = this._keybindings[i];
            if (k.chords.length === 0) {
                continue;
            }
            // substitute with constants that are registered after startup - https://github.com/microsoft/vscode/issues/174218#issuecomment-1437972127
            const when = (_k_when = k.when) === null || _k_when === void 0 ? void 0 : _k_when.substituteConstants();
            if (when && when.type === 0 /* ContextKeyExprType.False */ ) {
                continue;
            }
            this._addKeyPress(k.chords[0], k);
        }
    }
}
function printWhenExplanation(when) {
    if (!when) {
        return "no when condition";
    }
    return "".concat(when.serialize());
}
function printSourceExplanation(kb) {
    return kb.extensionId ? kb.isBuiltinExtension ? "built-in extension ".concat(kb.extensionId) : "user extension ".concat(kb.extensionId) : kb.isDefault ? "built-in" : "user";
} //# sourceMappingURL=keybindingResolver.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/abstractKeybindingService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AbstractKeybindingService",
    ()=>AbstractKeybindingService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/ime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingResolver.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const HIGH_FREQ_COMMANDS = /^(cursor|delete|undo|redo|tab|editor\.action\.clipboard)/;
class AbstractKeybindingService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidUpdateKeybindings() {
        return this._onDidUpdateKeybindings ? this._onDidUpdateKeybindings.event : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].None; // Sinon stubbing walks properties on prototype
    }
    get inChordMode() {
        return this._currentChords.length > 0;
    }
    dispose() {
        super.dispose();
    }
    _log(str) {
        if (this._logging) {
            this._logService.info("[KeybindingService]: ".concat(str));
        }
    }
    getKeybindings() {
        return this._getResolver().getKeybindings();
    }
    lookupKeybinding(commandId, context) {
        let enforceContextCheck = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const result = this._getResolver().lookupPrimaryKeybinding(commandId, context || this._contextKeyService, enforceContextCheck);
        if (!result) {
            return undefined;
        }
        return result.resolvedKeybinding;
    }
    dispatchEvent(e, target) {
        return this._dispatch(e, target);
    }
    // TODO@ulugbekna: update namings to align with `_doDispatch`
    // TODO@ulugbekna: this fn doesn't seem to take into account single-modifier keybindings, eg `shift shift`
    softDispatch(e, target) {
        this._log("/ Soft dispatching keyboard event");
        const keybinding = this.resolveKeyboardEvent(e);
        if (keybinding.hasMultipleChords()) {
            console.warn('keyboard event should not be mapped to multiple chords');
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoMatchingKb"];
        }
        const [firstChord] = keybinding.getDispatchChords();
        if (firstChord === null) {
            // cannot be dispatched, probably only modifier keys
            this._log("\\ Keyboard event cannot be dispatched");
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoMatchingKb"];
        }
        const contextValue = this._contextKeyService.getContext(target);
        const currentChords = this._currentChords.map((param)=>{
            let { keypress } = param;
            return keypress;
        });
        return this._getResolver().resolve(contextValue, currentChords, firstChord);
    }
    _scheduleLeaveChordMode() {
        const chordLastInteractedTime = Date.now();
        this._currentChordChecker.cancelAndSet(()=>{
            if (!this._documentHasFocus()) {
                // Focus has been lost => leave chord mode
                this._leaveChordMode();
                return;
            }
            if (Date.now() - chordLastInteractedTime > 5000) {
                // 5 seconds elapsed => leave chord mode
                this._leaveChordMode();
            }
        }, 500);
    }
    _expectAnotherChord(firstChord, keypressLabel) {
        this._currentChords.push({
            keypress: firstChord,
            label: keypressLabel
        });
        switch(this._currentChords.length){
            case 0:
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["illegalState"])('impossible');
            case 1:
                // TODO@ulugbekna: revise this message and the one below (at least, fix terminology)
                this._currentChordStatusMessage = this._notificationService.status(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1684, "({0}) was pressed. Waiting for second key of chord...", keypressLabel));
                break;
            default:
                {
                    const fullKeypressLabel = this._currentChords.map((param)=>{
                        let { label } = param;
                        return label;
                    }).join(', ');
                    this._currentChordStatusMessage = this._notificationService.status(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1685, "({0}) was pressed. Waiting for next key of chord...", fullKeypressLabel));
                }
        }
        this._scheduleLeaveChordMode();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IME"].enabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IME"].disable();
        }
    }
    _leaveChordMode() {
        if (this._currentChordStatusMessage) {
            this._currentChordStatusMessage.close();
            this._currentChordStatusMessage = null;
        }
        this._currentChordChecker.cancel();
        this._currentChords = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IME"].enable();
    }
    _dispatch(e, target) {
        return this._doDispatch(this.resolveKeyboardEvent(e), target, /*isSingleModiferChord*/ false);
    }
    _singleModifierDispatch(e, target) {
        const keybinding = this.resolveKeyboardEvent(e);
        const [singleModifier] = keybinding.getSingleModifierDispatchChords();
        if (singleModifier) {
            if (this._ignoreSingleModifiers.has(singleModifier)) {
                this._log("+ Ignoring single modifier ".concat(singleModifier, " due to it being pressed together with other keys."));
                this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
                this._currentSingleModifierClearTimeout.cancel();
                this._currentSingleModifier = null;
                return false;
            }
            this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
            if (this._currentSingleModifier === null) {
                // we have a valid `singleModifier`, store it for the next keyup, but clear it in 300ms
                this._log("+ Storing single modifier for possible chord ".concat(singleModifier, "."));
                this._currentSingleModifier = singleModifier;
                this._currentSingleModifierClearTimeout.cancelAndSet(()=>{
                    this._log("+ Clearing single modifier due to 300ms elapsed.");
                    this._currentSingleModifier = null;
                }, 300);
                return false;
            }
            if (singleModifier === this._currentSingleModifier) {
                // bingo!
                this._log("/ Dispatching single modifier chord ".concat(singleModifier, " ").concat(singleModifier));
                this._currentSingleModifierClearTimeout.cancel();
                this._currentSingleModifier = null;
                return this._doDispatch(keybinding, target, /*isSingleModiferChord*/ true);
            }
            this._log("+ Clearing single modifier due to modifier mismatch: ".concat(this._currentSingleModifier, " ").concat(singleModifier));
            this._currentSingleModifierClearTimeout.cancel();
            this._currentSingleModifier = null;
            return false;
        }
        // When pressing a modifier and holding it pressed with any other modifier or key combination,
        // the pressed modifiers should no longer be considered for single modifier dispatch.
        const [firstChord] = keybinding.getChords();
        this._ignoreSingleModifiers = new KeybindingModifierSet(firstChord);
        if (this._currentSingleModifier !== null) {
            this._log("+ Clearing single modifier due to other key up.");
        }
        this._currentSingleModifierClearTimeout.cancel();
        this._currentSingleModifier = null;
        return false;
    }
    _doDispatch(userKeypress, target) {
        let isSingleModiferChord = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        let shouldPreventDefault = false;
        if (userKeypress.hasMultipleChords()) {
            console.warn('Unexpected keyboard event mapped to multiple chords');
            return false;
        }
        let userPressedChord = null;
        let currentChords = null;
        if (isSingleModiferChord) {
            // The keybinding is the second keypress of a single modifier chord, e.g. "shift shift".
            // A single modifier can only occur when the same modifier is pressed in short sequence,
            // hence we disregard `_currentChord` and use the same modifier instead.
            const [dispatchKeyname] = userKeypress.getSingleModifierDispatchChords();
            userPressedChord = dispatchKeyname;
            currentChords = dispatchKeyname ? [
                dispatchKeyname
            ] : []; // TODO@ulugbekna: in the `else` case we assign an empty array - make sure `resolve` can handle an empty array well
        } else {
            [userPressedChord] = userKeypress.getDispatchChords();
            currentChords = this._currentChords.map((param)=>{
                let { keypress } = param;
                return keypress;
            });
        }
        if (userPressedChord === null) {
            this._log("\\ Keyboard event cannot be dispatched in keydown phase.");
            // cannot be dispatched, probably only modifier keys
            return shouldPreventDefault;
        }
        const contextValue = this._contextKeyService.getContext(target);
        const keypressLabel = userKeypress.getLabel();
        const resolveResult = this._getResolver().resolve(contextValue, currentChords, userPressedChord);
        switch(resolveResult.kind){
            case 0 /* ResultKind.NoMatchingKb */ :
                {
                    this._logService.trace('KeybindingService#dispatch', keypressLabel, "[ No matching keybinding ]");
                    if (this.inChordMode) {
                        const currentChordsLabel = this._currentChords.map((param)=>{
                            let { label } = param;
                            return label;
                        }).join(', ');
                        this._log('+ Leaving multi-chord mode: Nothing bound to "'.concat(currentChordsLabel, ", ").concat(keypressLabel, '".'));
                        this._notificationService.status(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1686, "The key combination ({0}, {1}) is not a command.", currentChordsLabel, keypressLabel), {
                            hideAfter: 10 * 1000 /* 10s */ 
                        });
                        this._leaveChordMode();
                        shouldPreventDefault = true;
                    }
                    return shouldPreventDefault;
                }
            case 1 /* ResultKind.MoreChordsNeeded */ :
                {
                    this._logService.trace('KeybindingService#dispatch', keypressLabel, "[ Several keybindings match - more chords needed ]");
                    shouldPreventDefault = true;
                    this._expectAnotherChord(userPressedChord, keypressLabel);
                    this._log(this._currentChords.length === 1 ? "+ Entering multi-chord mode..." : "+ Continuing multi-chord mode...");
                    return shouldPreventDefault;
                }
            case 2 /* ResultKind.KbFound */ :
                {
                    this._logService.trace('KeybindingService#dispatch', keypressLabel, "[ Will dispatch command ".concat(resolveResult.commandId, " ]"));
                    if (resolveResult.commandId === null || resolveResult.commandId === '') {
                        if (this.inChordMode) {
                            const currentChordsLabel = this._currentChords.map((param)=>{
                                let { label } = param;
                                return label;
                            }).join(', ');
                            this._log('+ Leaving chord mode: Nothing bound to "'.concat(currentChordsLabel, ", ").concat(keypressLabel, '".'));
                            this._notificationService.status(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1687, "The key combination ({0}, {1}) is not a command.", currentChordsLabel, keypressLabel), {
                                hideAfter: 10 * 1000 /* 10s */ 
                            });
                            this._leaveChordMode();
                            shouldPreventDefault = true;
                        }
                    } else {
                        if (this.inChordMode) {
                            this._leaveChordMode();
                        }
                        if (!resolveResult.isBubble) {
                            shouldPreventDefault = true;
                        }
                        this._log("+ Invoking command ".concat(resolveResult.commandId, "."));
                        this._currentlyDispatchingCommandId = resolveResult.commandId;
                        try {
                            if (typeof resolveResult.commandArgs === 'undefined') {
                                this._commandService.executeCommand(resolveResult.commandId).then(undefined, (err)=>this._notificationService.warn(err));
                            } else {
                                this._commandService.executeCommand(resolveResult.commandId, resolveResult.commandArgs).then(undefined, (err)=>this._notificationService.warn(err));
                            }
                        } finally{
                            this._currentlyDispatchingCommandId = null;
                        }
                        if (!HIGH_FREQ_COMMANDS.test(resolveResult.commandId)) {
                            var _userKeypress_getUserSettingsLabel;
                            this._telemetryService.publicLog2('workbenchActionExecuted', {
                                id: resolveResult.commandId,
                                from: 'keybinding',
                                detail: (_userKeypress_getUserSettingsLabel = userKeypress.getUserSettingsLabel()) !== null && _userKeypress_getUserSettingsLabel !== void 0 ? _userKeypress_getUserSettingsLabel : undefined
                            });
                        }
                    }
                    return shouldPreventDefault;
                }
        }
    }
    mightProducePrintableCharacter(event) {
        if (event.ctrlKey || event.metaKey) {
            // ignore ctrl/cmd-combination but not shift/alt-combinatios
            return false;
        }
        // weak check for certain ranges. this is properly implemented in a subclass
        // with access to the KeyboardMapperFactory.
        if (event.keyCode >= 31 /* KeyCode.KeyA */  && event.keyCode <= 56 /* KeyCode.KeyZ */  || event.keyCode >= 21 /* KeyCode.Digit0 */  && event.keyCode <= 30 /* KeyCode.Digit9 */ ) {
            return true;
        }
        return false;
    }
    constructor(_contextKeyService, _commandService, _telemetryService, _notificationService, _logService){
        super();
        this._contextKeyService = _contextKeyService;
        this._commandService = _commandService;
        this._telemetryService = _telemetryService;
        this._notificationService = _notificationService;
        this._logService = _logService;
        this._onDidUpdateKeybindings = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._currentChords = [];
        this._currentChordChecker = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntervalTimer"]();
        this._currentChordStatusMessage = null;
        this._ignoreSingleModifiers = KeybindingModifierSet.EMPTY;
        this._currentSingleModifier = null;
        this._currentSingleModifierClearTimeout = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"]();
        this._currentlyDispatchingCommandId = null;
        this._logging = false;
    }
}
class KeybindingModifierSet {
    has(modifier) {
        switch(modifier){
            case 'ctrl':
                return this._ctrlKey;
            case 'shift':
                return this._shiftKey;
            case 'alt':
                return this._altKey;
            case 'meta':
                return this._metaKey;
        }
    }
    constructor(source){
        this._ctrlKey = source ? source.ctrlKey : false;
        this._shiftKey = source ? source.shiftKey : false;
        this._altKey = source ? source.altKey : false;
        this._metaKey = source ? source.metaKey : false;
    }
} //# sourceMappingURL=abstractKeybindingService.js.map
KeybindingModifierSet.EMPTY = new KeybindingModifierSet(null);
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ResolvedKeybindingItem",
    ()=>ResolvedKeybindingItem,
    "toEmptyArrayIfContainsNull",
    ()=>toEmptyArrayIfContainsNull
]);
class ResolvedKeybindingItem {
    constructor(resolvedKeybinding, command, commandArgs, when, isDefault, extensionId, isBuiltinExtension){
        this._resolvedKeybindingItemBrand = undefined;
        this.resolvedKeybinding = resolvedKeybinding;
        this.chords = resolvedKeybinding ? toEmptyArrayIfContainsNull(resolvedKeybinding.getDispatchChords()) : [];
        if (resolvedKeybinding && this.chords.length === 0) {
            // handle possible single modifier chord keybindings
            this.chords = toEmptyArrayIfContainsNull(resolvedKeybinding.getSingleModifierDispatchChords());
        }
        this.bubble = command ? command.charCodeAt(0) === 94 /* CharCode.Caret */  : false;
        this.command = this.bubble ? command.substr(1) : command;
        this.commandArgs = commandArgs;
        this.when = when;
        this.isDefault = isDefault;
        this.extensionId = extensionId;
        this.isBuiltinExtension = isBuiltinExtension;
    }
}
function toEmptyArrayIfContainsNull(arr) {
    const result = [];
    for(let i = 0, len = arr.length; i < len; i++){
        const element = arr[i];
        if (!element) {
            return [];
        }
        result.push(element);
    }
    return result;
} //# sourceMappingURL=resolvedKeybindingItem.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/baseResolvedKeybinding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "BaseResolvedKeybinding",
    ()=>BaseResolvedKeybinding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindingLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindings.js [app-client] (ecmascript)");
;
;
;
class BaseResolvedKeybinding extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResolvedKeybinding"] {
    getLabel() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UILabelProvider"].toLabel(this._os, this._chords, (keybinding)=>this._getLabel(keybinding));
    }
    getAriaLabel() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AriaLabelProvider"].toLabel(this._os, this._chords, (keybinding)=>this._getAriaLabel(keybinding));
    }
    getElectronAccelerator() {
        if (this._chords.length > 1) {
            // [Electron Accelerators] Electron cannot handle chords
            return null;
        }
        if (this._chords[0].isDuplicateModifierCase()) {
            // [Electron Accelerators] Electron cannot handle modifier only keybindings
            // e.g. "shift shift"
            return null;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElectronAcceleratorLabelProvider"].toLabel(this._os, this._chords, (keybinding)=>this._getElectronAccelerator(keybinding));
    }
    getUserSettingsLabel() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSettingsLabelProvider"].toLabel(this._os, this._chords, (keybinding)=>this._getUserSettingsLabel(keybinding));
    }
    hasMultipleChords() {
        return this._chords.length > 1;
    }
    getChords() {
        return this._chords.map((keybinding)=>this._getChord(keybinding));
    }
    _getChord(keybinding) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResolvedChord"](keybinding.ctrlKey, keybinding.shiftKey, keybinding.altKey, keybinding.metaKey, this._getLabel(keybinding), this._getAriaLabel(keybinding));
    }
    getDispatchChords() {
        return this._chords.map((keybinding)=>this._getChordDispatch(keybinding));
    }
    getSingleModifierDispatchChords() {
        return this._chords.map((keybinding)=>this._getSingleModifierChordDispatch(keybinding));
    }
    constructor(os, chords){
        super();
        if (chords.length === 0) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["illegalArgument"])("chords");
        }
        this._os = os;
        this._chords = chords;
    }
} //# sourceMappingURL=baseResolvedKeybinding.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/usLayoutResolvedKeybinding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "USLayoutResolvedKeybinding",
    ()=>USLayoutResolvedKeybinding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$baseResolvedKeybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/baseResolvedKeybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$resolvedKeybindingItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/resolvedKeybindingItem.js [app-client] (ecmascript)");
;
;
;
;
class USLayoutResolvedKeybinding extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$baseResolvedKeybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseResolvedKeybinding"] {
    _keyCodeToUILabel(keyCode) {
        if (this._os === 2 /* OperatingSystem.Macintosh */ ) {
            switch(keyCode){
                case 15 /* KeyCode.LeftArrow */ :
                    return '←';
                case 16 /* KeyCode.UpArrow */ :
                    return '↑';
                case 17 /* KeyCode.RightArrow */ :
                    return '→';
                case 18 /* KeyCode.DownArrow */ :
                    return '↓';
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toString(keyCode);
    }
    _getLabel(chord) {
        if (chord.isDuplicateModifierCase()) {
            return '';
        }
        return this._keyCodeToUILabel(chord.keyCode);
    }
    _getAriaLabel(chord) {
        if (chord.isDuplicateModifierCase()) {
            return '';
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toString(chord.keyCode);
    }
    _getElectronAccelerator(chord) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toElectronAccelerator(chord.keyCode);
    }
    _getUserSettingsLabel(chord) {
        if (chord.isDuplicateModifierCase()) {
            return '';
        }
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toUserSettingsUS(chord.keyCode);
        return result ? result.toLowerCase() : result;
    }
    _getChordDispatch(chord) {
        return USLayoutResolvedKeybinding.getDispatchStr(chord);
    }
    static getDispatchStr(chord) {
        if (chord.isModifierKey()) {
            return null;
        }
        let result = '';
        if (chord.ctrlKey) {
            result += 'ctrl+';
        }
        if (chord.shiftKey) {
            result += 'shift+';
        }
        if (chord.altKey) {
            result += 'alt+';
        }
        if (chord.metaKey) {
            result += 'meta+';
        }
        result += __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toString(chord.keyCode);
        return result;
    }
    _getSingleModifierChordDispatch(keybinding) {
        if (keybinding.keyCode === 5 /* KeyCode.Ctrl */  && !keybinding.shiftKey && !keybinding.altKey && !keybinding.metaKey) {
            return 'ctrl';
        }
        if (keybinding.keyCode === 4 /* KeyCode.Shift */  && !keybinding.ctrlKey && !keybinding.altKey && !keybinding.metaKey) {
            return 'shift';
        }
        if (keybinding.keyCode === 6 /* KeyCode.Alt */  && !keybinding.ctrlKey && !keybinding.shiftKey && !keybinding.metaKey) {
            return 'alt';
        }
        if (keybinding.keyCode === 57 /* KeyCode.Meta */  && !keybinding.ctrlKey && !keybinding.shiftKey && !keybinding.altKey) {
            return 'meta';
        }
        return null;
    }
    /**
     * *NOTE*: Check return value for `KeyCode.Unknown`.
     */ static _scanCodeToKeyCode(scanCode) {
        const immutableKeyCode = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMMUTABLE_CODE_TO_KEY_CODE"][scanCode];
        if (immutableKeyCode !== -1 /* KeyCode.DependsOnKbLayout */ ) {
            return immutableKeyCode;
        }
        switch(scanCode){
            case 10 /* ScanCode.KeyA */ :
                return 31 /* KeyCode.KeyA */ ;
            case 11 /* ScanCode.KeyB */ :
                return 32 /* KeyCode.KeyB */ ;
            case 12 /* ScanCode.KeyC */ :
                return 33 /* KeyCode.KeyC */ ;
            case 13 /* ScanCode.KeyD */ :
                return 34 /* KeyCode.KeyD */ ;
            case 14 /* ScanCode.KeyE */ :
                return 35 /* KeyCode.KeyE */ ;
            case 15 /* ScanCode.KeyF */ :
                return 36 /* KeyCode.KeyF */ ;
            case 16 /* ScanCode.KeyG */ :
                return 37 /* KeyCode.KeyG */ ;
            case 17 /* ScanCode.KeyH */ :
                return 38 /* KeyCode.KeyH */ ;
            case 18 /* ScanCode.KeyI */ :
                return 39 /* KeyCode.KeyI */ ;
            case 19 /* ScanCode.KeyJ */ :
                return 40 /* KeyCode.KeyJ */ ;
            case 20 /* ScanCode.KeyK */ :
                return 41 /* KeyCode.KeyK */ ;
            case 21 /* ScanCode.KeyL */ :
                return 42 /* KeyCode.KeyL */ ;
            case 22 /* ScanCode.KeyM */ :
                return 43 /* KeyCode.KeyM */ ;
            case 23 /* ScanCode.KeyN */ :
                return 44 /* KeyCode.KeyN */ ;
            case 24 /* ScanCode.KeyO */ :
                return 45 /* KeyCode.KeyO */ ;
            case 25 /* ScanCode.KeyP */ :
                return 46 /* KeyCode.KeyP */ ;
            case 26 /* ScanCode.KeyQ */ :
                return 47 /* KeyCode.KeyQ */ ;
            case 27 /* ScanCode.KeyR */ :
                return 48 /* KeyCode.KeyR */ ;
            case 28 /* ScanCode.KeyS */ :
                return 49 /* KeyCode.KeyS */ ;
            case 29 /* ScanCode.KeyT */ :
                return 50 /* KeyCode.KeyT */ ;
            case 30 /* ScanCode.KeyU */ :
                return 51 /* KeyCode.KeyU */ ;
            case 31 /* ScanCode.KeyV */ :
                return 52 /* KeyCode.KeyV */ ;
            case 32 /* ScanCode.KeyW */ :
                return 53 /* KeyCode.KeyW */ ;
            case 33 /* ScanCode.KeyX */ :
                return 54 /* KeyCode.KeyX */ ;
            case 34 /* ScanCode.KeyY */ :
                return 55 /* KeyCode.KeyY */ ;
            case 35 /* ScanCode.KeyZ */ :
                return 56 /* KeyCode.KeyZ */ ;
            case 36 /* ScanCode.Digit1 */ :
                return 22 /* KeyCode.Digit1 */ ;
            case 37 /* ScanCode.Digit2 */ :
                return 23 /* KeyCode.Digit2 */ ;
            case 38 /* ScanCode.Digit3 */ :
                return 24 /* KeyCode.Digit3 */ ;
            case 39 /* ScanCode.Digit4 */ :
                return 25 /* KeyCode.Digit4 */ ;
            case 40 /* ScanCode.Digit5 */ :
                return 26 /* KeyCode.Digit5 */ ;
            case 41 /* ScanCode.Digit6 */ :
                return 27 /* KeyCode.Digit6 */ ;
            case 42 /* ScanCode.Digit7 */ :
                return 28 /* KeyCode.Digit7 */ ;
            case 43 /* ScanCode.Digit8 */ :
                return 29 /* KeyCode.Digit8 */ ;
            case 44 /* ScanCode.Digit9 */ :
                return 30 /* KeyCode.Digit9 */ ;
            case 45 /* ScanCode.Digit0 */ :
                return 21 /* KeyCode.Digit0 */ ;
            case 51 /* ScanCode.Minus */ :
                return 88 /* KeyCode.Minus */ ;
            case 52 /* ScanCode.Equal */ :
                return 86 /* KeyCode.Equal */ ;
            case 53 /* ScanCode.BracketLeft */ :
                return 92 /* KeyCode.BracketLeft */ ;
            case 54 /* ScanCode.BracketRight */ :
                return 94 /* KeyCode.BracketRight */ ;
            case 55 /* ScanCode.Backslash */ :
                return 93 /* KeyCode.Backslash */ ;
            case 56 /* ScanCode.IntlHash */ :
                return 0 /* KeyCode.Unknown */ ; // missing
            case 57 /* ScanCode.Semicolon */ :
                return 85 /* KeyCode.Semicolon */ ;
            case 58 /* ScanCode.Quote */ :
                return 95 /* KeyCode.Quote */ ;
            case 59 /* ScanCode.Backquote */ :
                return 91 /* KeyCode.Backquote */ ;
            case 60 /* ScanCode.Comma */ :
                return 87 /* KeyCode.Comma */ ;
            case 61 /* ScanCode.Period */ :
                return 89 /* KeyCode.Period */ ;
            case 62 /* ScanCode.Slash */ :
                return 90 /* KeyCode.Slash */ ;
            case 106 /* ScanCode.IntlBackslash */ :
                return 97 /* KeyCode.IntlBackslash */ ;
        }
        return 0 /* KeyCode.Unknown */ ;
    }
    static _toKeyCodeChord(chord) {
        if (!chord) {
            return null;
        }
        if (chord instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeChord"]) {
            return chord;
        }
        const keyCode = this._scanCodeToKeyCode(chord.scanCode);
        if (keyCode === 0 /* KeyCode.Unknown */ ) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeChord"](chord.ctrlKey, chord.shiftKey, chord.altKey, chord.metaKey, keyCode);
    }
    static resolveKeybinding(keybinding, os) {
        const chords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$resolvedKeybindingItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toEmptyArrayIfContainsNull"])(keybinding.chords.map((chord)=>this._toKeyCodeChord(chord)));
        if (chords.length > 0) {
            return [
                new USLayoutResolvedKeybinding(chords, os)
            ];
        }
        return [];
    }
    constructor(chords, os){
        super(os, chords);
    }
} //# sourceMappingURL=usLayoutResolvedKeybinding.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ITelemetryService",
    ()=>ITelemetryService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const ITelemetryService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('telemetryService'); //# sourceMappingURL=telemetry.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractLogger",
    ()=>AbstractLogger,
    "AbstractLoggerService",
    ()=>AbstractLoggerService,
    "CONTEXT_LOG_LEVEL",
    ()=>CONTEXT_LOG_LEVEL,
    "ConsoleLogger",
    ()=>ConsoleLogger,
    "DEFAULT_LOG_LEVEL",
    ()=>DEFAULT_LOG_LEVEL,
    "ILogService",
    ()=>ILogService,
    "ILoggerService",
    ()=>ILoggerService,
    "LogLevel",
    ()=>LogLevel,
    "LogLevelToString",
    ()=>LogLevelToString,
    "MultiplexLogger",
    ()=>MultiplexLogger,
    "NullLogger",
    ()=>NullLogger,
    "NullLoggerService",
    ()=>NullLoggerService,
    "canLog",
    ()=>canLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const ILogService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('logService');
const ILoggerService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('loggerService');
var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Trace"] = 1] = "Trace";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 5] = "Error";
})(LogLevel || (LogLevel = {}));
const DEFAULT_LOG_LEVEL = LogLevel.Info;
function canLog(loggerLevel, messageLevel) {
    return loggerLevel !== LogLevel.Off && loggerLevel <= messageLevel;
}
class AbstractLogger extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidChangeLogLevel() {
        return this._onDidChangeLogLevel.event;
    }
    setLevel(level) {
        if (this.level !== level) {
            this.level = level;
            this._onDidChangeLogLevel.fire(this.level);
        }
    }
    getLevel() {
        return this.level;
    }
    checkLogLevel(level) {
        return canLog(this.level, level);
    }
    canLog(level) {
        if (this._store.isDisposed) {
            return false;
        }
        return this.checkLogLevel(level);
    }
    constructor(){
        super(...arguments);
        this.level = DEFAULT_LOG_LEVEL;
        this._onDidChangeLogLevel = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
    }
}
class ConsoleLogger extends AbstractLogger {
    trace(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.canLog(LogLevel.Trace)) {
            if (this.useColors) {
                console.log('%cTRACE', 'color: #888', message, ...args);
            } else {
                console.log(message, ...args);
            }
        }
    }
    debug(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.canLog(LogLevel.Debug)) {
            if (this.useColors) {
                console.log('%cDEBUG', 'background: #eee; color: #888', message, ...args);
            } else {
                console.log(message, ...args);
            }
        }
    }
    info(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.canLog(LogLevel.Info)) {
            if (this.useColors) {
                console.log('%c INFO', 'color: #33f', message, ...args);
            } else {
                console.log(message, ...args);
            }
        }
    }
    warn(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.canLog(LogLevel.Warning)) {
            if (this.useColors) {
                console.warn('%c WARN', 'color: #993', message, ...args);
            } else {
                console.log(message, ...args);
            }
        }
    }
    error(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (this.canLog(LogLevel.Error)) {
            if (this.useColors) {
                console.error('%c  ERR', 'color: #f33', message, ...args);
            } else {
                console.error(message, ...args);
            }
        }
    }
    constructor(logLevel = DEFAULT_LOG_LEVEL, useColors = true){
        super();
        this.useColors = useColors;
        this.setLevel(logLevel);
    }
}
class MultiplexLogger extends AbstractLogger {
    setLevel(level) {
        for (const logger of this.loggers){
            logger.setLevel(level);
        }
        super.setLevel(level);
    }
    trace(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        for (const logger of this.loggers){
            logger.trace(message, ...args);
        }
    }
    debug(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        for (const logger of this.loggers){
            logger.debug(message, ...args);
        }
    }
    info(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        for (const logger of this.loggers){
            logger.info(message, ...args);
        }
    }
    warn(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        for (const logger of this.loggers){
            logger.warn(message, ...args);
        }
    }
    error(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        for (const logger of this.loggers){
            logger.error(message, ...args);
        }
    }
    dispose() {
        for (const logger of this.loggers){
            logger.dispose();
        }
        super.dispose();
    }
    constructor(loggers){
        super();
        this.loggers = loggers;
        if (loggers.length) {
            this.setLevel(loggers[0].getLevel());
        }
    }
}
class AbstractLoggerService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    getLoggerEntry(resourceOrId) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(resourceOrId)) {
            return [
                ...this._loggers.values()
            ].find((logger)=>logger.info.id === resourceOrId);
        }
        return this._loggers.get(resourceOrId);
    }
    createLogger(idOrResource, options) {
        var _this__loggers_get;
        const resource = this.toResource(idOrResource);
        var _options_id;
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(idOrResource) ? idOrResource : (_options_id = options === null || options === void 0 ? void 0 : options.id) !== null && _options_id !== void 0 ? _options_id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])(resource.toString()).toString(16);
        let logger = (_this__loggers_get = this._loggers.get(resource)) === null || _this__loggers_get === void 0 ? void 0 : _this__loggers_get.logger;
        const logLevel = (options === null || options === void 0 ? void 0 : options.logLevel) === 'always' ? LogLevel.Trace : options === null || options === void 0 ? void 0 : options.logLevel;
        if (!logger) {
            var _ref;
            logger = this.doCreateLogger(resource, (_ref = logLevel !== null && logLevel !== void 0 ? logLevel : this.getLogLevel(resource)) !== null && _ref !== void 0 ? _ref : this.logLevel, {
                ...options,
                id
            });
        }
        const loggerEntry = {
            logger,
            info: {
                resource,
                id,
                logLevel,
                name: options === null || options === void 0 ? void 0 : options.name,
                hidden: options === null || options === void 0 ? void 0 : options.hidden,
                group: options === null || options === void 0 ? void 0 : options.group,
                extensionId: options === null || options === void 0 ? void 0 : options.extensionId,
                when: options === null || options === void 0 ? void 0 : options.when
            }
        };
        this.registerLogger(loggerEntry.info);
        // TODO: @sandy081 Remove this once registerLogger can take ILogger
        this._loggers.set(resource, loggerEntry);
        return logger;
    }
    toResource(idOrResource) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(idOrResource) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinPath"])(this.logsHome, "".concat(idOrResource, ".log")) : idOrResource;
    }
    setVisibility(resourceOrId, visibility) {
        const logger = this.getLoggerEntry(resourceOrId);
        if (logger && visibility !== !logger.info.hidden) {
            logger.info.hidden = !visibility;
            this._loggers.set(logger.info.resource, logger);
            this._onDidChangeVisibility.fire([
                logger.info.resource,
                visibility
            ]);
        }
    }
    getLogLevel(resource) {
        let logLevel;
        if (resource) {
            var _this__loggers_get;
            logLevel = (_this__loggers_get = this._loggers.get(resource)) === null || _this__loggers_get === void 0 ? void 0 : _this__loggers_get.info.logLevel;
        }
        return logLevel !== null && logLevel !== void 0 ? logLevel : this.logLevel;
    }
    registerLogger(resource) {
        const existing = this._loggers.get(resource.resource);
        if (existing) {
            if (existing.info.hidden !== resource.hidden) {
                this.setVisibility(resource.resource, !resource.hidden);
            }
        } else {
            this._loggers.set(resource.resource, {
                info: resource,
                logger: undefined
            });
            this._onDidChangeLoggers.fire({
                added: [
                    resource
                ],
                removed: []
            });
        }
    }
    dispose() {
        this._loggers.forEach((logger)=>{
            var _logger_logger;
            return (_logger_logger = logger.logger) === null || _logger_logger === void 0 ? void 0 : _logger_logger.dispose();
        });
        this._loggers.clear();
        super.dispose();
    }
    constructor(logLevel, logsHome, loggerResources){
        super();
        this.logLevel = logLevel;
        this.logsHome = logsHome;
        this._loggers = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
        this._onDidChangeLoggers = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]);
        this._onDidChangeVisibility = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]);
        if (loggerResources) {
            for (const loggerResource of loggerResources){
                this._loggers.set(loggerResource.resource, {
                    logger: undefined,
                    info: loggerResource
                });
            }
        }
    }
}
class NullLogger {
    setLevel(level) {}
    getLevel() {
        return LogLevel.Info;
    }
    trace(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
    }
    debug(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
    }
    info(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
    }
    warn(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
    }
    error(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
    }
    dispose() {}
    constructor(){
        this.onDidChangeLogLevel = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]().event;
    }
}
class NullLoggerService extends AbstractLoggerService {
    doCreateLogger(resource, logLevel, options) {
        return new NullLogger();
    }
    constructor(){
        super(LogLevel.Off, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse('log:///log'));
    }
}
function LogLevelToString(logLevel) {
    switch(logLevel){
        case LogLevel.Trace:
            return 'trace';
        case LogLevel.Debug:
            return 'debug';
        case LogLevel.Info:
            return 'info';
        case LogLevel.Warning:
            return 'warn';
        case LogLevel.Error:
            return 'error';
        case LogLevel.Off:
            return 'off';
    }
}
const CONTEXT_LOG_LEVEL = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('logLevel', LogLevelToString(LogLevel.Info)); //# sourceMappingURL=log.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/log/common/logService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "LogService",
    ()=>LogService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)");
;
;
class LogService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidChangeLogLevel() {
        return this.logger.onDidChangeLogLevel;
    }
    setLevel(level) {
        this.logger.setLevel(level);
    }
    getLevel() {
        return this.logger.getLevel();
    }
    trace(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this.logger.trace(message, ...args);
    }
    debug(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this.logger.debug(message, ...args);
    }
    info(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this.logger.info(message, ...args);
    }
    warn(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this.logger.warn(message, ...args);
    }
    error(message) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        this.logger.error(message, ...args);
    }
    constructor(primaryLogger, otherLoggers = []){
        super();
        this.logger = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplexLogger"]([
            primaryLogger,
            ...otherLoggers
        ]);
        this._register(primaryLogger.onDidChangeLogLevel((level)=>this.setLevel(level)));
    }
} //# sourceMappingURL=logService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IConfigurationService",
    ()=>IConfigurationService,
    "addToValueTree",
    ()=>addToValueTree,
    "getConfigurationValue",
    ()=>getConfigurationValue,
    "getLanguageTagSettingPlainKey",
    ()=>getLanguageTagSettingPlainKey,
    "removeFromValueTree",
    ()=>removeFromValueTree,
    "toValuesTree",
    ()=>toValuesTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IConfigurationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('configurationService');
function toValuesTree(properties, conflictReporter) {
    const root = Object.create(null);
    for(const key in properties){
        addToValueTree(root, key, properties[key], conflictReporter);
    }
    return root;
}
function addToValueTree(settingsTreeRoot, key, value, conflictReporter) {
    const segments = key.split('.');
    const last = segments.pop();
    let curr = settingsTreeRoot;
    for(let i = 0; i < segments.length; i++){
        const s = segments[i];
        let obj = curr[s];
        switch(typeof obj){
            case 'undefined':
                obj = curr[s] = Object.create(null);
                break;
            case 'object':
                if (obj === null) {
                    conflictReporter("Ignoring ".concat(key, " as ").concat(segments.slice(0, i + 1).join('.'), " is null"));
                    return;
                }
                break;
            default:
                conflictReporter("Ignoring ".concat(key, " as ").concat(segments.slice(0, i + 1).join('.'), " is ").concat(JSON.stringify(obj)));
                return;
        }
        curr = obj;
    }
    if (typeof curr === 'object' && curr !== null) {
        try {
            curr[last] = value; // workaround https://github.com/microsoft/vscode/issues/13606
        } catch (e) {
            conflictReporter("Ignoring ".concat(key, " as ").concat(segments.join('.'), " is ").concat(JSON.stringify(curr)));
        }
    } else {
        conflictReporter("Ignoring ".concat(key, " as ").concat(segments.join('.'), " is ").concat(JSON.stringify(curr)));
    }
}
function removeFromValueTree(valueTree, key) {
    const segments = key.split('.');
    doRemoveFromValueTree(valueTree, segments);
}
function doRemoveFromValueTree(valueTree, segments) {
    if (!valueTree) {
        return;
    }
    const first = segments.shift();
    if (segments.length === 0) {
        // Reached last segment
        delete valueTree[first];
        return;
    }
    if (Object.keys(valueTree).indexOf(first) !== -1) {
        const value = valueTree[first];
        if (typeof value === 'object' && !Array.isArray(value)) {
            doRemoveFromValueTree(value, segments);
            if (Object.keys(value).length === 0) {
                delete valueTree[first];
            }
        }
    }
}
function getConfigurationValue(config, settingPath, defaultValue) {
    function accessSetting(config, path) {
        let current = config;
        for (const component of path){
            if (typeof current !== 'object' || current === null) {
                return undefined;
            }
            current = current[component];
        }
        return current;
    }
    const path = settingPath.split('.');
    const result = accessSetting(config, path);
    return typeof result === 'undefined' ? defaultValue : result;
}
function getLanguageTagSettingPlainKey(settingKey) {
    return settingKey.replace(/^\[/, '').replace(/]$/g, '').replace(/\]\[/g, ', ');
} //# sourceMappingURL=configuration.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Extensions",
    ()=>Extensions,
    "OVERRIDE_PROPERTY_PATTERN",
    ()=>OVERRIDE_PROPERTY_PATTERN,
    "OVERRIDE_PROPERTY_REGEX",
    ()=>OVERRIDE_PROPERTY_REGEX,
    "allSettings",
    ()=>allSettings,
    "applicationMachineSettings",
    ()=>applicationMachineSettings,
    "applicationSettings",
    ()=>applicationSettings,
    "getDefaultValue",
    ()=>getDefaultValue,
    "machineOverridableSettings",
    ()=>machineOverridableSettings,
    "machineSettings",
    ()=>machineSettings,
    "overrideIdentifiersFromKey",
    ()=>overrideIdentifiersFromKey,
    "resourceLanguageSettingsSchemaId",
    ()=>resourceLanguageSettingsSchemaId,
    "resourceSettings",
    ()=>resourceSettings,
    "validateProperty",
    ()=>validateProperty,
    "windowSettings",
    ()=>windowSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$jsonschemas$2f$common$2f$jsonContributionRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const Extensions = {
    Configuration: 'base.contributions.configuration'
};
const allSettings = {
    properties: {},
    patternProperties: {}
};
const applicationSettings = {
    properties: {},
    patternProperties: {}
};
const applicationMachineSettings = {
    properties: {},
    patternProperties: {}
};
const machineSettings = {
    properties: {},
    patternProperties: {}
};
const machineOverridableSettings = {
    properties: {},
    patternProperties: {}
};
const windowSettings = {
    properties: {},
    patternProperties: {}
};
const resourceSettings = {
    properties: {},
    patternProperties: {}
};
const resourceLanguageSettingsSchemaId = 'vscode://schemas/settings/resourceLanguage';
const contributionRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].as(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$jsonschemas$2f$common$2f$jsonContributionRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extensions"].JSONContribution);
class ConfigurationRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    registerConfiguration(configuration) {
        let validate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        this.registerConfigurations([
            configuration
        ], validate);
        return configuration;
    }
    registerConfigurations(configurations) {
        let validate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const properties = new Set();
        this.doRegisterConfigurations(configurations, validate, properties);
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({
            properties
        });
    }
    registerDefaultConfigurations(configurationDefaults) {
        const properties = new Set();
        this.doRegisterDefaultConfigurations(configurationDefaults, properties);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({
            properties,
            defaultsOverrides: true
        });
    }
    doRegisterDefaultConfigurations(configurationDefaults, bucket) {
        this.registeredConfigurationDefaults.push(...configurationDefaults);
        const overrideIdentifiers = [];
        for (const { overrides, source } of configurationDefaults){
            for(const key in overrides){
                bucket.add(key);
                var _this_configurationDefaultsOverrides_get;
                const configurationDefaultOverridesForKey = (_this_configurationDefaultsOverrides_get = this.configurationDefaultsOverrides.get(key)) !== null && _this_configurationDefaultsOverrides_get !== void 0 ? _this_configurationDefaultsOverrides_get : this.configurationDefaultsOverrides.set(key, {
                    configurationDefaultOverrides: []
                }).get(key);
                const value = overrides[key];
                configurationDefaultOverridesForKey.configurationDefaultOverrides.push({
                    value,
                    source
                });
                // Configuration defaults for Override Identifiers
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    const newDefaultOverride = this.mergeDefaultConfigurationsForOverrideIdentifier(key, value, source, configurationDefaultOverridesForKey.configurationDefaultOverrideValue);
                    if (!newDefaultOverride) {
                        continue;
                    }
                    configurationDefaultOverridesForKey.configurationDefaultOverrideValue = newDefaultOverride;
                    this.updateDefaultOverrideProperty(key, newDefaultOverride, source);
                    overrideIdentifiers.push(...overrideIdentifiersFromKey(key));
                } else {
                    const newDefaultOverride = this.mergeDefaultConfigurationsForConfigurationProperty(key, value, source, configurationDefaultOverridesForKey.configurationDefaultOverrideValue);
                    if (!newDefaultOverride) {
                        continue;
                    }
                    configurationDefaultOverridesForKey.configurationDefaultOverrideValue = newDefaultOverride;
                    const property = this.configurationProperties[key];
                    if (property) {
                        this.updatePropertyDefaultValue(key, property);
                        this.updateSchema(key, property);
                    }
                }
            }
        }
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
    }
    updateDefaultOverrideProperty(key, newDefaultOverride, source) {
        const property = {
            type: 'object',
            default: newDefaultOverride.value,
            description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1650, "Configure settings to be overridden for {0}.", (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanguageTagSettingPlainKey"])(key)),
            $ref: resourceLanguageSettingsSchemaId,
            defaultDefaultValue: newDefaultOverride.value,
            source,
            defaultValueSource: source
        };
        this.configurationProperties[key] = property;
        this.defaultLanguageConfigurationOverridesNode.properties[key] = property;
    }
    mergeDefaultConfigurationsForOverrideIdentifier(overrideIdentifier, configurationValueObject, valueSource, existingDefaultOverride) {
        const defaultValue = (existingDefaultOverride === null || existingDefaultOverride === void 0 ? void 0 : existingDefaultOverride.value) || {};
        var _existingDefaultOverride_source;
        const source = (_existingDefaultOverride_source = existingDefaultOverride === null || existingDefaultOverride === void 0 ? void 0 : existingDefaultOverride.source) !== null && _existingDefaultOverride_source !== void 0 ? _existingDefaultOverride_source : new Map();
        // This should not happen
        if (!(source instanceof Map)) {
            console.error('objectConfigurationSources is not a Map');
            return undefined;
        }
        for (const propertyKey of Object.keys(configurationValueObject)){
            const propertyDefaultValue = configurationValueObject[propertyKey];
            const isObjectSetting = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](propertyDefaultValue) && (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](defaultValue[propertyKey]) || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](defaultValue[propertyKey]));
            // If the default value is an object, merge the objects and store the source of each keys
            if (isObjectSetting) {
                var _defaultValue_propertyKey;
                defaultValue[propertyKey] = {
                    ...(_defaultValue_propertyKey = defaultValue[propertyKey]) !== null && _defaultValue_propertyKey !== void 0 ? _defaultValue_propertyKey : {},
                    ...propertyDefaultValue
                };
                // Track the source of each value in the object
                if (valueSource) {
                    for(const objectKey in propertyDefaultValue){
                        source.set("".concat(propertyKey, ".").concat(objectKey), valueSource);
                    }
                }
            } else {
                defaultValue[propertyKey] = propertyDefaultValue;
                if (valueSource) {
                    source.set(propertyKey, valueSource);
                } else {
                    source.delete(propertyKey);
                }
            }
        }
        return {
            value: defaultValue,
            source
        };
    }
    mergeDefaultConfigurationsForConfigurationProperty(propertyKey, value, valuesSource, existingDefaultOverride) {
        const property = this.configurationProperties[propertyKey];
        var _existingDefaultOverride_value;
        const existingDefaultValue = (_existingDefaultOverride_value = existingDefaultOverride === null || existingDefaultOverride === void 0 ? void 0 : existingDefaultOverride.value) !== null && _existingDefaultOverride_value !== void 0 ? _existingDefaultOverride_value : property === null || property === void 0 ? void 0 : property.defaultDefaultValue;
        let source = valuesSource;
        const isObjectSetting = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](value) && (property !== undefined && property.type === 'object' || property === undefined && (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](existingDefaultValue) || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](existingDefaultValue)));
        // If the default value is an object, merge the objects and store the source of each keys
        if (isObjectSetting) {
            var _existingDefaultOverride_source;
            source = (_existingDefaultOverride_source = existingDefaultOverride === null || existingDefaultOverride === void 0 ? void 0 : existingDefaultOverride.source) !== null && _existingDefaultOverride_source !== void 0 ? _existingDefaultOverride_source : new Map();
            // This should not happen
            if (!(source instanceof Map)) {
                console.error('defaultValueSource is not a Map');
                return undefined;
            }
            for(const objectKey in value){
                if (valuesSource) {
                    source.set("".concat(propertyKey, ".").concat(objectKey), valuesSource);
                }
            }
            value = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](existingDefaultValue) ? existingDefaultValue : {},
                ...value
            };
        }
        return {
            value,
            source
        };
    }
    registerOverrideIdentifiers(overrideIdentifiers) {
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
        this._onDidSchemaChange.fire();
    }
    doRegisterOverrideIdentifiers(overrideIdentifiers) {
        for (const overrideIdentifier of overrideIdentifiers){
            this.overrideIdentifiers.add(overrideIdentifier);
        }
        this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(configurations, validate, bucket) {
        configurations.forEach((configuration)=>{
            this.validateAndRegisterProperties(configuration, validate, configuration.extensionInfo, configuration.restrictedProperties, undefined, bucket);
            this.configurationContributors.push(configuration);
            this.registerJSONConfiguration(configuration);
        });
    }
    validateAndRegisterProperties(configuration) {
        let validate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, extensionInfo = arguments.length > 2 ? arguments[2] : void 0, restrictedProperties = arguments.length > 3 ? arguments[3] : void 0, scope = arguments.length > 4 && arguments[4] !== void 0 /* ConfigurationScope.WINDOW */  ? arguments[4] : 4, bucket = arguments.length > 5 ? arguments[5] : void 0;
        scope = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefinedOrNull"](configuration.scope) ? scope : configuration.scope;
        const properties = configuration.properties;
        if (properties) {
            for(const key in properties){
                var _property_tags, _properties_key_policy;
                const property = properties[key];
                if (validate && validateProperty(key, property)) {
                    delete properties[key];
                    continue;
                }
                property.source = extensionInfo;
                // update default value
                property.defaultDefaultValue = properties[key].default;
                this.updatePropertyDefaultValue(key, property);
                // update scope
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    property.scope = undefined; // No scope for overridable properties `[${identifier}]`
                } else {
                    property.scope = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefinedOrNull"](property.scope) ? scope : property.scope;
                    property.restricted = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefinedOrNull"](property.restricted) ? !!(restrictedProperties === null || restrictedProperties === void 0 ? void 0 : restrictedProperties.includes(key)) : property.restricted;
                }
                if (property.experiment) {
                    var _property_tags1;
                    if (!((_property_tags1 = property.tags) === null || _property_tags1 === void 0 ? void 0 : _property_tags1.some((tag)=>tag.toLowerCase() === 'onexp'))) {
                        var _property_tags2;
                        property.tags = (_property_tags2 = property.tags) !== null && _property_tags2 !== void 0 ? _property_tags2 : [];
                        property.tags.push('onExP');
                    }
                } else if ((_property_tags = property.tags) === null || _property_tags === void 0 ? void 0 : _property_tags.some((tag)=>tag.toLowerCase() === 'onexp')) {
                    console.error("Invalid tag 'onExP' found for property '".concat(key, "'. Please use 'experiment' property instead."));
                    property.experiment = {
                        mode: 'startup'
                    };
                }
                const excluded = properties[key].hasOwnProperty('included') && !properties[key].included;
                const policyName = (_properties_key_policy = properties[key].policy) === null || _properties_key_policy === void 0 ? void 0 : _properties_key_policy.name;
                if (excluded) {
                    this.excludedConfigurationProperties[key] = properties[key];
                    if (policyName) {
                        this.policyConfigurations.set(policyName, key);
                        bucket.add(key);
                    }
                    delete properties[key];
                } else {
                    bucket.add(key);
                    if (policyName) {
                        this.policyConfigurations.set(policyName, key);
                    }
                    this.configurationProperties[key] = properties[key];
                    if (!properties[key].deprecationMessage && properties[key].markdownDeprecationMessage) {
                        // If not set, default deprecationMessage to the markdown source
                        properties[key].deprecationMessage = properties[key].markdownDeprecationMessage;
                    }
                }
            }
        }
        const subNodes = configuration.allOf;
        if (subNodes) {
            for (const node of subNodes){
                this.validateAndRegisterProperties(node, validate, extensionInfo, restrictedProperties, scope, bucket);
            }
        }
    }
    getConfigurationProperties() {
        return this.configurationProperties;
    }
    getPolicyConfigurations() {
        return this.policyConfigurations;
    }
    getExcludedConfigurationProperties() {
        return this.excludedConfigurationProperties;
    }
    registerJSONConfiguration(configuration) {
        const register = (configuration)=>{
            const properties = configuration.properties;
            if (properties) {
                for(const key in properties){
                    this.updateSchema(key, properties[key]);
                }
            }
            const subNodes = configuration.allOf;
            subNodes === null || subNodes === void 0 ? void 0 : subNodes.forEach(register);
        };
        register(configuration);
    }
    updateSchema(key, property) {
        allSettings.properties[key] = property;
        switch(property.scope){
            case 1 /* ConfigurationScope.APPLICATION */ :
                applicationSettings.properties[key] = property;
                break;
            case 2 /* ConfigurationScope.MACHINE */ :
                machineSettings.properties[key] = property;
                break;
            case 3 /* ConfigurationScope.APPLICATION_MACHINE */ :
                applicationMachineSettings.properties[key] = property;
                break;
            case 7 /* ConfigurationScope.MACHINE_OVERRIDABLE */ :
                machineOverridableSettings.properties[key] = property;
                break;
            case 4 /* ConfigurationScope.WINDOW */ :
                windowSettings.properties[key] = property;
                break;
            case 5 /* ConfigurationScope.RESOURCE */ :
                resourceSettings.properties[key] = property;
                break;
            case 6 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */ :
                resourceSettings.properties[key] = property;
                this.resourceLanguageSettingsSchema.properties[key] = property;
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const overrideIdentifier of this.overrideIdentifiers.values()){
            const overrideIdentifierProperty = "[".concat(overrideIdentifier, "]");
            const resourceLanguagePropertiesSchema = {
                type: 'object',
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1651, "Configure editor settings to be overridden for a language."),
                errorMessage: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1652, "This setting does not support per-language configuration."),
                $ref: resourceLanguageSettingsSchemaId
            };
            this.updatePropertyDefaultValue(overrideIdentifierProperty, resourceLanguagePropertiesSchema);
            allSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            applicationSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            applicationMachineSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            machineSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            machineOverridableSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            windowSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            resourceSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
        }
    }
    registerOverridePropertyPatternKey() {
        const resourceLanguagePropertiesSchema = {
            type: 'object',
            description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1653, "Configure editor settings to be overridden for a language."),
            errorMessage: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1654, "This setting does not support per-language configuration."),
            $ref: resourceLanguageSettingsSchemaId
        };
        allSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        applicationSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        applicationMachineSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        machineSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        machineOverridableSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        windowSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        resourceSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(key, property) {
        var _this_configurationDefaultsOverrides_get;
        const configurationdefaultOverride = (_this_configurationDefaultsOverrides_get = this.configurationDefaultsOverrides.get(key)) === null || _this_configurationDefaultsOverrides_get === void 0 ? void 0 : _this_configurationDefaultsOverrides_get.configurationDefaultOverrideValue;
        let defaultValue = undefined;
        let defaultSource = undefined;
        if (configurationdefaultOverride && (!property.disallowConfigurationDefault || !configurationdefaultOverride.source) // Prevent overriding the default value if the property is disallowed to be overridden by configuration defaults from extensions
        ) {
            defaultValue = configurationdefaultOverride.value;
            defaultSource = configurationdefaultOverride.source;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](defaultValue)) {
            defaultValue = property.defaultDefaultValue;
            defaultSource = undefined;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](defaultValue)) {
            defaultValue = getDefaultValue(property.type);
        }
        property.default = defaultValue;
        property.defaultValueSource = defaultSource;
    }
    constructor(){
        super();
        this.registeredConfigurationDefaults = [];
        this.overrideIdentifiers = new Set();
        this._onDidSchemaChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidUpdateConfiguration = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.configurationDefaultsOverrides = new Map();
        this.defaultLanguageConfigurationOverridesNode = {
            id: 'defaultOverrides',
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1649, "Default Language Configuration Overrides"),
            properties: {}
        };
        this.configurationContributors = [
            this.defaultLanguageConfigurationOverridesNode
        ];
        this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: true,
            allowTrailingCommas: true,
            allowComments: true
        };
        this.configurationProperties = {};
        this.policyConfigurations = new Map();
        this.excludedConfigurationProperties = {};
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this.registerOverridePropertyPatternKey();
    }
}
const OVERRIDE_IDENTIFIER_PATTERN = "\\[([^\\]]+)\\]";
const OVERRIDE_IDENTIFIER_REGEX = new RegExp(OVERRIDE_IDENTIFIER_PATTERN, 'g');
const OVERRIDE_PROPERTY_PATTERN = "^(".concat(OVERRIDE_IDENTIFIER_PATTERN, ")+$");
const OVERRIDE_PROPERTY_REGEX = new RegExp(OVERRIDE_PROPERTY_PATTERN);
function overrideIdentifiersFromKey(key) {
    const identifiers = [];
    if (OVERRIDE_PROPERTY_REGEX.test(key)) {
        let matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        while(matches === null || matches === void 0 ? void 0 : matches.length){
            const identifier = matches[1].trim();
            if (identifier) {
                identifiers.push(identifier);
            }
            matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distinct"])(identifiers);
}
function getDefaultValue(type) {
    const t = Array.isArray(type) ? type[0] : type;
    switch(t){
        case 'boolean':
            return false;
        case 'integer':
        case 'number':
            return 0;
        case 'string':
            return '';
        case 'array':
            return [];
        case 'object':
            return {};
        default:
            return null;
    }
}
const configurationRegistry = new ConfigurationRegistry();
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].add(Extensions.Configuration, configurationRegistry);
function validateProperty(property, schema) {
    var _schema_policy, _schema_policy1;
    if (!property.trim()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1655, "Cannot register an empty property");
    }
    if (OVERRIDE_PROPERTY_REGEX.test(property)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1656, "Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.", property);
    }
    if (configurationRegistry.getConfigurationProperties()[property] !== undefined) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1657, "Cannot register '{0}'. This property is already registered.", property);
    }
    if (((_schema_policy = schema.policy) === null || _schema_policy === void 0 ? void 0 : _schema_policy.name) && configurationRegistry.getPolicyConfigurations().get((_schema_policy1 = schema.policy) === null || _schema_policy1 === void 0 ? void 0 : _schema_policy1.name) !== undefined) {
        var _schema_policy2, _schema_policy3;
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1658, "Cannot register '{0}'. The associated policy {1} is already registered with {2}.", property, (_schema_policy2 = schema.policy) === null || _schema_policy2 === void 0 ? void 0 : _schema_policy2.name, configurationRegistry.getPolicyConfigurations().get((_schema_policy3 = schema.policy) === null || _schema_policy3 === void 0 ? void 0 : _schema_policy3.name));
    }
    return null;
} //# sourceMappingURL=configurationRegistry.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationModels.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Configuration",
    ()=>Configuration,
    "ConfigurationChangeEvent",
    ()=>ConfigurationChangeEvent,
    "ConfigurationModel",
    ()=>ConfigurationModel,
    "ConfigurationModelParser",
    ()=>ConfigurationModelParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function freeze(data) {
    return Object.isFrozen(data) ? data : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"](data);
}
class ConfigurationModel {
    static createEmptyModel(logService) {
        return new ConfigurationModel({}, [], [], undefined, logService);
    }
    get rawConfiguration() {
        if (!this._rawConfiguration) {
            if (this.raw) {
                const rawConfigurationModels = (Array.isArray(this.raw) ? this.raw : [
                    this.raw
                ]).map((raw)=>{
                    if (raw instanceof ConfigurationModel) {
                        return raw;
                    }
                    const parser = new ConfigurationModelParser('', this.logService);
                    parser.parseRaw(raw);
                    return parser.configurationModel;
                });
                this._rawConfiguration = rawConfigurationModels.reduce((previous, current)=>current === previous ? current : previous.merge(current), rawConfigurationModels[0]);
            } else {
                // raw is same as current
                this._rawConfiguration = this;
            }
        }
        return this._rawConfiguration;
    }
    get contents() {
        return this._contents;
    }
    get overrides() {
        return this._overrides;
    }
    get keys() {
        return this._keys;
    }
    isEmpty() {
        return this._keys.length === 0 && Object.keys(this._contents).length === 0 && this._overrides.length === 0;
    }
    getValue(section) {
        return section ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigurationValue"])(this.contents, section) : this.contents;
    }
    inspect(section, overrideIdentifier) {
        const that = this;
        return {
            get value () {
                return freeze(that.rawConfiguration.getValue(section));
            },
            get override () {
                return overrideIdentifier ? freeze(that.rawConfiguration.getOverrideValue(section, overrideIdentifier)) : undefined;
            },
            get merged () {
                return freeze(overrideIdentifier ? that.rawConfiguration.override(overrideIdentifier).getValue(section) : that.rawConfiguration.getValue(section));
            },
            get overrides () {
                const overrides = [];
                for (const { contents, identifiers, keys } of that.rawConfiguration.overrides){
                    const value = new ConfigurationModel(contents, keys, [], undefined, that.logService).getValue(section);
                    if (value !== undefined) {
                        overrides.push({
                            identifiers,
                            value
                        });
                    }
                }
                return overrides.length ? freeze(overrides) : undefined;
            }
        };
    }
    getOverrideValue(section, overrideIdentifier) {
        const overrideContents = this.getContentsForOverrideIdentifer(overrideIdentifier);
        return overrideContents ? section ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigurationValue"])(overrideContents, section) : overrideContents : undefined;
    }
    override(identifier) {
        let overrideConfigurationModel = this.overrideConfigurations.get(identifier);
        if (!overrideConfigurationModel) {
            overrideConfigurationModel = this.createOverrideConfigurationModel(identifier);
            this.overrideConfigurations.set(identifier, overrideConfigurationModel);
        }
        return overrideConfigurationModel;
    }
    merge() {
        for(var _len = arguments.length, others = new Array(_len), _key = 0; _key < _len; _key++){
            others[_key] = arguments[_key];
        }
        const contents = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](this.contents);
        const overrides = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](this.overrides);
        const keys = [
            ...this.keys
        ];
        const raws = this.raw ? Array.isArray(this.raw) ? [
            ...this.raw
        ] : [
            this.raw
        ] : [
            this
        ];
        for (const other of others){
            raws.push(...other.raw ? Array.isArray(other.raw) ? other.raw : [
                other.raw
            ] : [
                other
            ]);
            if (other.isEmpty()) {
                continue;
            }
            this.mergeContents(contents, other.contents);
            for (const otherOverride of other.overrides){
                const [override] = overrides.filter((o)=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](o.identifiers, otherOverride.identifiers));
                if (override) {
                    this.mergeContents(override.contents, otherOverride.contents);
                    override.keys.push(...otherOverride.keys);
                    override.keys = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distinct"](override.keys);
                } else {
                    overrides.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](otherOverride));
                }
            }
            for (const key of other.keys){
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                }
            }
        }
        return new ConfigurationModel(contents, keys, overrides, !raws.length || raws.every((raw)=>raw instanceof ConfigurationModel) ? undefined : raws, this.logService);
    }
    createOverrideConfigurationModel(identifier) {
        const overrideContents = this.getContentsForOverrideIdentifer(identifier);
        if (!overrideContents || typeof overrideContents !== 'object' || !Object.keys(overrideContents).length) {
            // If there are no valid overrides, return self
            return this;
        }
        const contents = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distinct"]([
            ...Object.keys(this.contents),
            ...Object.keys(overrideContents)
        ])){
            let contentsForKey = this.contents[key];
            const overrideContentsForKey = overrideContents[key];
            // If there are override contents for the key, clone and merge otherwise use base contents
            if (overrideContentsForKey) {
                // Clone and merge only if base contents and override contents are of type object otherwise just override
                if (typeof contentsForKey === 'object' && typeof overrideContentsForKey === 'object') {
                    contentsForKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](contentsForKey);
                    this.mergeContents(contentsForKey, overrideContentsForKey);
                } else {
                    contentsForKey = overrideContentsForKey;
                }
            }
            contents[key] = contentsForKey;
        }
        return new ConfigurationModel(contents, this.keys, this.overrides, undefined, this.logService);
    }
    mergeContents(source, target) {
        for (const key of Object.keys(target)){
            if (key in source) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](source[key]) && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](target[key])) {
                    this.mergeContents(source[key], target[key]);
                    continue;
                }
            }
            source[key] = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](target[key]);
        }
    }
    getContentsForOverrideIdentifer(identifier) {
        let contentsForIdentifierOnly = null;
        let contents = null;
        const mergeContents = (contentsToMerge)=>{
            if (contentsToMerge) {
                if (contents) {
                    this.mergeContents(contents, contentsToMerge);
                } else {
                    contents = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"](contentsToMerge);
                }
            }
        };
        for (const override of this.overrides){
            if (override.identifiers.length === 1 && override.identifiers[0] === identifier) {
                contentsForIdentifierOnly = override.contents;
            } else if (override.identifiers.includes(identifier)) {
                mergeContents(override.contents);
            }
        }
        // Merge contents of the identifier only at the end to take precedence.
        mergeContents(contentsForIdentifierOnly);
        return contents;
    }
    toJSON() {
        return {
            contents: this.contents,
            overrides: this.overrides,
            keys: this.keys
        };
    }
    setValue(key, value) {
        this.updateValue(key, value, false);
    }
    removeValue(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return;
        }
        this.keys.splice(index, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromValueTree"])(this.contents, key);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERRIDE_PROPERTY_REGEX"].test(key)) {
            this.overrides.splice(this.overrides.findIndex((o)=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](o.identifiers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overrideIdentifiersFromKey"])(key))), 1);
        }
    }
    updateValue(key, value, add) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToValueTree"])(this.contents, key, value, (e)=>this.logService.error(e));
        add = add || this.keys.indexOf(key) === -1;
        if (add) {
            this.keys.push(key);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERRIDE_PROPERTY_REGEX"].test(key)) {
            const identifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overrideIdentifiersFromKey"])(key);
            const override = {
                identifiers,
                keys: Object.keys(this.contents[key]),
                contents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValuesTree"])(this.contents[key], (message)=>this.logService.error(message))
            };
            const index = this.overrides.findIndex((o)=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](o.identifiers, identifiers));
            if (index !== -1) {
                this.overrides[index] = override;
            } else {
                this.overrides.push(override);
            }
        }
    }
    constructor(_contents, _keys, _overrides, raw, logService){
        this._contents = _contents;
        this._keys = _keys;
        this._overrides = _overrides;
        this.raw = raw;
        this.logService = logService;
        this.overrideConfigurations = new Map();
    }
}
class ConfigurationModelParser {
    get configurationModel() {
        return this._configurationModel || ConfigurationModel.createEmptyModel(this.logService);
    }
    parseRaw(raw, options) {
        this._raw = raw;
        const { contents, keys, overrides, restricted, hasExcludedProperties } = this.doParseRaw(raw, options);
        this._configurationModel = new ConfigurationModel(contents, keys, overrides, hasExcludedProperties ? [
            raw
        ] : undefined /* raw has not changed */ , this.logService);
        this._restrictedConfigurations = restricted || [];
    }
    doParseRaw(raw, options) {
        const registry = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].as(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extensions"].Configuration);
        const configurationProperties = registry.getConfigurationProperties();
        const excludedConfigurationProperties = registry.getExcludedConfigurationProperties();
        const filtered = this.filter(raw, configurationProperties, excludedConfigurationProperties, true, options);
        raw = filtered.raw;
        const contents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValuesTree"])(raw, (message)=>this.logService.error("Conflict in settings file ".concat(this._name, ": ").concat(message)));
        const keys = Object.keys(raw);
        const overrides = this.toOverrides(raw, (message)=>this.logService.error("Conflict in settings file ".concat(this._name, ": ").concat(message)));
        return {
            contents,
            keys,
            overrides,
            restricted: filtered.restricted,
            hasExcludedProperties: filtered.hasExcludedProperties
        };
    }
    filter(properties, configurationProperties, excludedConfigurationProperties, filterOverriddenProperties, options) {
        var _options_exclude;
        let hasExcludedProperties = false;
        if (!(options === null || options === void 0 ? void 0 : options.scopes) && !(options === null || options === void 0 ? void 0 : options.skipRestricted) && !(options === null || options === void 0 ? void 0 : options.skipUnregistered) && !(options === null || options === void 0 ? void 0 : (_options_exclude = options.exclude) === null || _options_exclude === void 0 ? void 0 : _options_exclude.length)) {
            return {
                raw: properties,
                restricted: [],
                hasExcludedProperties
            };
        }
        const raw = {};
        const restricted = [];
        for(const key in properties){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERRIDE_PROPERTY_REGEX"].test(key) && filterOverriddenProperties) {
                const result = this.filter(properties[key], configurationProperties, excludedConfigurationProperties, false, options);
                raw[key] = result.raw;
                hasExcludedProperties = hasExcludedProperties || result.hasExcludedProperties;
                restricted.push(...result.restricted);
            } else {
                const propertySchema = configurationProperties[key];
                if (propertySchema === null || propertySchema === void 0 ? void 0 : propertySchema.restricted) {
                    restricted.push(key);
                }
                if (this.shouldInclude(key, propertySchema, excludedConfigurationProperties, options)) {
                    raw[key] = properties[key];
                } else {
                    hasExcludedProperties = true;
                }
            }
        }
        return {
            raw,
            restricted,
            hasExcludedProperties
        };
    }
    shouldInclude(key, propertySchema, excludedConfigurationProperties, options) {
        var _options_exclude, _options_include;
        if ((_options_exclude = options.exclude) === null || _options_exclude === void 0 ? void 0 : _options_exclude.includes(key)) {
            return false;
        }
        if ((_options_include = options.include) === null || _options_include === void 0 ? void 0 : _options_include.includes(key)) {
            return true;
        }
        if (options.skipRestricted && (propertySchema === null || propertySchema === void 0 ? void 0 : propertySchema.restricted)) {
            return false;
        }
        if (options.skipUnregistered && !propertySchema) {
            return false;
        }
        const schema = propertySchema !== null && propertySchema !== void 0 ? propertySchema : excludedConfigurationProperties[key];
        const scope = schema ? typeof schema.scope !== 'undefined' ? schema.scope : 4 /* ConfigurationScope.WINDOW */  : undefined;
        if (scope === undefined || options.scopes === undefined) {
            return true;
        }
        return options.scopes.includes(scope);
    }
    toOverrides(raw, conflictReporter) {
        const overrides = [];
        for (const key of Object.keys(raw)){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERRIDE_PROPERTY_REGEX"].test(key)) {
                const overrideRaw = {};
                for(const keyInOverrideRaw in raw[key]){
                    overrideRaw[keyInOverrideRaw] = raw[key][keyInOverrideRaw];
                }
                overrides.push({
                    identifiers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overrideIdentifiersFromKey"])(key),
                    keys: Object.keys(overrideRaw),
                    contents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValuesTree"])(overrideRaw, conflictReporter)
                });
            }
        }
        return overrides;
    }
    constructor(_name, logService){
        this._name = _name;
        this.logService = logService;
        this._raw = null;
        this._configurationModel = null;
        this._restrictedConfigurations = [];
    }
}
class ConfigurationInspectValue {
    toInspectValue(inspectValue) {
        return (inspectValue === null || inspectValue === void 0 ? void 0 : inspectValue.value) !== undefined || (inspectValue === null || inspectValue === void 0 ? void 0 : inspectValue.override) !== undefined || (inspectValue === null || inspectValue === void 0 ? void 0 : inspectValue.overrides) !== undefined ? inspectValue : undefined;
    }
    get userInspectValue() {
        if (!this._userInspectValue) {
            this._userInspectValue = this.userConfiguration.inspect(this.key, this.overrides.overrideIdentifier);
        }
        return this._userInspectValue;
    }
    get user() {
        return this.toInspectValue(this.userInspectValue);
    }
    constructor(key, overrides, _value, overrideIdentifiers, defaultConfiguration, policyConfiguration, applicationConfiguration, userConfiguration, localUserConfiguration, remoteUserConfiguration, workspaceConfiguration, folderConfigurationModel, memoryConfigurationModel){
        this.key = key;
        this.overrides = overrides;
        this._value = _value;
        this.overrideIdentifiers = overrideIdentifiers;
        this.defaultConfiguration = defaultConfiguration;
        this.policyConfiguration = policyConfiguration;
        this.applicationConfiguration = applicationConfiguration;
        this.userConfiguration = userConfiguration;
        this.localUserConfiguration = localUserConfiguration;
        this.remoteUserConfiguration = remoteUserConfiguration;
        this.workspaceConfiguration = workspaceConfiguration;
        this.folderConfigurationModel = folderConfigurationModel;
        this.memoryConfigurationModel = memoryConfigurationModel;
    }
}
class Configuration {
    getValue(section, overrides, workspace) {
        const consolidateConfigurationModel = this.getConsolidatedConfigurationModel(section, overrides, workspace);
        return consolidateConfigurationModel.getValue(section);
    }
    updateValue(key, value) {
        let overrides = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        let memoryConfiguration;
        if (overrides.resource) {
            memoryConfiguration = this._memoryConfigurationByResource.get(overrides.resource);
            if (!memoryConfiguration) {
                memoryConfiguration = ConfigurationModel.createEmptyModel(this.logService);
                this._memoryConfigurationByResource.set(overrides.resource, memoryConfiguration);
            }
        } else {
            memoryConfiguration = this._memoryConfiguration;
        }
        if (value === undefined) {
            memoryConfiguration.removeValue(key);
        } else {
            memoryConfiguration.setValue(key, value);
        }
        if (!overrides.resource) {
            this._workspaceConsolidatedConfiguration = null;
        }
    }
    inspect(key, overrides, workspace) {
        const consolidateConfigurationModel = this.getConsolidatedConfigurationModel(key, overrides, workspace);
        const folderConfigurationModel = this.getFolderConfigurationModelForResource(overrides.resource, workspace);
        const memoryConfigurationModel = overrides.resource ? this._memoryConfigurationByResource.get(overrides.resource) || this._memoryConfiguration : this._memoryConfiguration;
        const overrideIdentifiers = new Set();
        for (const override of consolidateConfigurationModel.overrides){
            for (const overrideIdentifier of override.identifiers){
                if (consolidateConfigurationModel.getOverrideValue(key, overrideIdentifier) !== undefined) {
                    overrideIdentifiers.add(overrideIdentifier);
                }
            }
        }
        return new ConfigurationInspectValue(key, overrides, consolidateConfigurationModel.getValue(key), overrideIdentifiers.size ? [
            ...overrideIdentifiers
        ] : undefined, this._defaultConfiguration, this._policyConfiguration.isEmpty() ? undefined : this._policyConfiguration, this.applicationConfiguration.isEmpty() ? undefined : this.applicationConfiguration, this.userConfiguration, this.localUserConfiguration, this.remoteUserConfiguration, workspace ? this._workspaceConfiguration : undefined, folderConfigurationModel ? folderConfigurationModel : undefined, memoryConfigurationModel);
    }
    get applicationConfiguration() {
        return this._applicationConfiguration;
    }
    get userConfiguration() {
        if (!this._userConfiguration) {
            if (this._remoteUserConfiguration.isEmpty()) {
                this._userConfiguration = this._localUserConfiguration;
            } else {
                const merged = this._localUserConfiguration.merge(this._remoteUserConfiguration);
                this._userConfiguration = new ConfigurationModel(merged.contents, merged.keys, merged.overrides, undefined, this.logService);
            }
        }
        return this._userConfiguration;
    }
    get localUserConfiguration() {
        return this._localUserConfiguration;
    }
    get remoteUserConfiguration() {
        return this._remoteUserConfiguration;
    }
    getConsolidatedConfigurationModel(section, overrides, workspace) {
        let configurationModel = this.getConsolidatedConfigurationModelForResource(overrides, workspace);
        if (overrides.overrideIdentifier) {
            configurationModel = configurationModel.override(overrides.overrideIdentifier);
        }
        if (!this._policyConfiguration.isEmpty() && this._policyConfiguration.getValue(section) !== undefined) {
            // clone by merging
            configurationModel = configurationModel.merge();
            for (const key of this._policyConfiguration.keys){
                configurationModel.setValue(key, this._policyConfiguration.getValue(key));
            }
        }
        return configurationModel;
    }
    getConsolidatedConfigurationModelForResource(param, workspace) {
        let { resource } = param;
        let consolidateConfiguration = this.getWorkspaceConsolidatedConfiguration();
        if (workspace && resource) {
            const root = workspace.getFolder(resource);
            if (root) {
                consolidateConfiguration = this.getFolderConsolidatedConfiguration(root.uri) || consolidateConfiguration;
            }
            const memoryConfigurationForResource = this._memoryConfigurationByResource.get(resource);
            if (memoryConfigurationForResource) {
                consolidateConfiguration = consolidateConfiguration.merge(memoryConfigurationForResource);
            }
        }
        return consolidateConfiguration;
    }
    getWorkspaceConsolidatedConfiguration() {
        if (!this._workspaceConsolidatedConfiguration) {
            this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this.applicationConfiguration, this.userConfiguration, this._workspaceConfiguration, this._memoryConfiguration);
        }
        return this._workspaceConsolidatedConfiguration;
    }
    getFolderConsolidatedConfiguration(folder) {
        let folderConsolidatedConfiguration = this._foldersConsolidatedConfigurations.get(folder);
        if (!folderConsolidatedConfiguration) {
            const workspaceConsolidateConfiguration = this.getWorkspaceConsolidatedConfiguration();
            const folderConfiguration = this._folderConfigurations.get(folder);
            if (folderConfiguration) {
                folderConsolidatedConfiguration = workspaceConsolidateConfiguration.merge(folderConfiguration);
                this._foldersConsolidatedConfigurations.set(folder, folderConsolidatedConfiguration);
            } else {
                folderConsolidatedConfiguration = workspaceConsolidateConfiguration;
            }
        }
        return folderConsolidatedConfiguration;
    }
    getFolderConfigurationModelForResource(resource, workspace) {
        if (workspace && resource) {
            const root = workspace.getFolder(resource);
            if (root) {
                return this._folderConfigurations.get(root.uri);
            }
        }
        return undefined;
    }
    toData() {
        return {
            defaults: {
                contents: this._defaultConfiguration.contents,
                overrides: this._defaultConfiguration.overrides,
                keys: this._defaultConfiguration.keys
            },
            policy: {
                contents: this._policyConfiguration.contents,
                overrides: this._policyConfiguration.overrides,
                keys: this._policyConfiguration.keys
            },
            application: {
                contents: this.applicationConfiguration.contents,
                overrides: this.applicationConfiguration.overrides,
                keys: this.applicationConfiguration.keys,
                raw: Array.isArray(this.applicationConfiguration.raw) ? undefined : this.applicationConfiguration.raw
            },
            userLocal: {
                contents: this.localUserConfiguration.contents,
                overrides: this.localUserConfiguration.overrides,
                keys: this.localUserConfiguration.keys,
                raw: Array.isArray(this.localUserConfiguration.raw) ? undefined : this.localUserConfiguration.raw
            },
            userRemote: {
                contents: this.remoteUserConfiguration.contents,
                overrides: this.remoteUserConfiguration.overrides,
                keys: this.remoteUserConfiguration.keys,
                raw: Array.isArray(this.remoteUserConfiguration.raw) ? undefined : this.remoteUserConfiguration.raw
            },
            workspace: {
                contents: this._workspaceConfiguration.contents,
                overrides: this._workspaceConfiguration.overrides,
                keys: this._workspaceConfiguration.keys
            },
            folders: [
                ...this._folderConfigurations.keys()
            ].reduce((result, folder)=>{
                const { contents, overrides, keys } = this._folderConfigurations.get(folder);
                result.push([
                    folder,
                    {
                        contents,
                        overrides,
                        keys
                    }
                ]);
                return result;
            }, [])
        };
    }
    static parse(data, logService) {
        const defaultConfiguration = this.parseConfigurationModel(data.defaults, logService);
        const policyConfiguration = this.parseConfigurationModel(data.policy, logService);
        const applicationConfiguration = this.parseConfigurationModel(data.application, logService);
        const userLocalConfiguration = this.parseConfigurationModel(data.userLocal, logService);
        const userRemoteConfiguration = this.parseConfigurationModel(data.userRemote, logService);
        const workspaceConfiguration = this.parseConfigurationModel(data.workspace, logService);
        const folders = data.folders.reduce((result, value)=>{
            result.set(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].revive(value[0]), this.parseConfigurationModel(value[1], logService));
            return result;
        }, new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]());
        return new Configuration(defaultConfiguration, policyConfiguration, applicationConfiguration, userLocalConfiguration, userRemoteConfiguration, workspaceConfiguration, folders, ConfigurationModel.createEmptyModel(logService), new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"](), logService);
    }
    static parseConfigurationModel(model, logService) {
        return new ConfigurationModel(model.contents, model.keys, model.overrides, model.raw, logService);
    }
    constructor(_defaultConfiguration, _policyConfiguration, _applicationConfiguration, _localUserConfiguration, _remoteUserConfiguration, _workspaceConfiguration, _folderConfigurations, _memoryConfiguration, _memoryConfigurationByResource, logService){
        this._defaultConfiguration = _defaultConfiguration;
        this._policyConfiguration = _policyConfiguration;
        this._applicationConfiguration = _applicationConfiguration;
        this._localUserConfiguration = _localUserConfiguration;
        this._remoteUserConfiguration = _remoteUserConfiguration;
        this._workspaceConfiguration = _workspaceConfiguration;
        this._folderConfigurations = _folderConfigurations;
        this._memoryConfiguration = _memoryConfiguration;
        this._memoryConfigurationByResource = _memoryConfigurationByResource;
        this.logService = logService;
        this._workspaceConsolidatedConfiguration = null;
        this._foldersConsolidatedConfigurations = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
        this._userConfiguration = null;
    }
}
class ConfigurationChangeEvent {
    get previousConfiguration() {
        if (!this._previousConfiguration && this.previous) {
            this._previousConfiguration = Configuration.parse(this.previous.data, this.logService);
        }
        return this._previousConfiguration;
    }
    affectsConfiguration(section, overrides) {
        // we have one large string with all keys that have changed. we pad (marker) the section
        // and check that either find it padded or before a segment character
        const needle = this._marker + section;
        const idx = this._affectsConfigStr.indexOf(needle);
        if (idx < 0) {
            // NOT: (marker + section)
            return false;
        }
        const pos = idx + needle.length;
        if (pos >= this._affectsConfigStr.length) {
            return false;
        }
        const code = this._affectsConfigStr.charCodeAt(pos);
        if (code !== this._markerCode1 && code !== this._markerCode2) {
            // NOT: section + (marker | segment)
            return false;
        }
        if (overrides) {
            var _this_previous;
            const value1 = this.previousConfiguration ? this.previousConfiguration.getValue(section, overrides, (_this_previous = this.previous) === null || _this_previous === void 0 ? void 0 : _this_previous.workspace) : undefined;
            const value2 = this.currentConfiguraiton.getValue(section, overrides, this.currentWorkspace);
            return !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](value1, value2);
        }
        return true;
    }
    constructor(change, previous, currentConfiguraiton, currentWorkspace, logService){
        this.change = change;
        this.previous = previous;
        this.currentConfiguraiton = currentConfiguraiton;
        this.currentWorkspace = currentWorkspace;
        this.logService = logService;
        this._marker = '\n';
        this._markerCode1 = this._marker.charCodeAt(0);
        this._markerCode2 = '.'.charCodeAt(0);
        this.affectedKeys = new Set();
        this._previousConfiguration = undefined;
        for (const key of change.keys){
            this.affectedKeys.add(key);
        }
        for (const [, keys] of change.overrides){
            for (const key of keys){
                this.affectedKeys.add(key);
            }
        }
        // Example: '\nfoo.bar\nabc.def\n'
        this._affectsConfigStr = this._marker;
        for (const key of this.affectedKeys){
            this._affectsConfigStr += key + this._marker;
        }
    }
} //# sourceMappingURL=configurationModels.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultConfiguration",
    ()=>DefaultConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationModels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationModels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
;
;
;
;
;
class DefaultConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get configurationModel() {
        return this._configurationModel;
    }
    reload() {
        this.resetConfigurationModel();
        return this.configurationModel;
    }
    getConfigurationDefaultOverrides() {
        return {};
    }
    resetConfigurationModel() {
        this._configurationModel = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationModels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurationModel"].createEmptyModel(this.logService);
        const properties = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].as(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extensions"].Configuration).getConfigurationProperties();
        this.updateConfigurationModel(Object.keys(properties), properties);
    }
    updateConfigurationModel(properties, configurationProperties) {
        const configurationDefaultsOverrides = this.getConfigurationDefaultOverrides();
        for (const key of properties){
            const defaultOverrideValue = configurationDefaultsOverrides[key];
            const propertySchema = configurationProperties[key];
            if (defaultOverrideValue !== undefined) {
                this._configurationModel.setValue(key, defaultOverrideValue);
            } else if (propertySchema) {
                this._configurationModel.setValue(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"])(propertySchema.default));
            } else {
                this._configurationModel.removeValue(key);
            }
        }
    }
    constructor(logService){
        super();
        this.logService = logService;
        this._configurationModel = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationModels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurationModel"].createEmptyModel(logService);
    }
} //# sourceMappingURL=configurations.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/jsonschemas/common/jsonContributionRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Extensions",
    ()=>Extensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
;
;
;
const Extensions = {
    JSONContribution: 'base.contributions.json'
};
function normalizeId(id) {
    if (id.length > 0 && id.charAt(id.length - 1) === '#') {
        return id.substring(0, id.length - 1);
    }
    return id;
}
class JSONContributionRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    registerSchema(uri, unresolvedSchemaContent, store) {
        const normalizedUri = normalizeId(uri);
        this.schemasById[normalizedUri] = unresolvedSchemaContent;
        this._onDidChangeSchema.fire(uri);
        if (store) {
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                delete this.schemasById[normalizedUri];
                this._onDidChangeSchema.fire(uri);
            }));
        }
    }
    notifySchemaChanged(uri) {
        this._onDidChangeSchema.fire(uri);
    }
    constructor(){
        super(...arguments);
        this.schemasById = {};
        this._onDidChangeSchema = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
    }
}
const jsonContributionRegistry = new JSONContributionRegistry();
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].add(Extensions.JSONContribution, jsonContributionRegistry); //# sourceMappingURL=jsonContributionRegistry.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "CONTEXT_ACCESSIBILITY_MODE_ENABLED",
    ()=>CONTEXT_ACCESSIBILITY_MODE_ENABLED,
    "IAccessibilityService",
    ()=>IAccessibilityService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
const IAccessibilityService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('accessibilityService');
const CONTEXT_ACCESSIBILITY_MODE_ENABLED = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('accessibilityModeEnabled', false); //# sourceMappingURL=accessibility.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/browser/accessibleViewRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AccessibleViewRegistry",
    ()=>AccessibleViewRegistry
]);
const AccessibleViewRegistry = new class AccessibleViewRegistry {
    register(implementation) {
        this._implementations.push(implementation);
        return {
            dispose: ()=>{
                const idx = this._implementations.indexOf(implementation);
                if (idx !== -1) {
                    this._implementations.splice(idx, 1);
                }
            }
        };
    }
    getImplementations() {
        return this._implementations;
    }
    constructor(){
        this._implementations = [];
    }
}; //# sourceMappingURL=accessibleViewRegistry.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/browser/accessibilityService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AccessibilityService",
    ()=>AccessibilityService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
let AccessibilityService = class AccessibilityService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    initReducedMotionListeners(reduceMotionMatcher) {
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(reduceMotionMatcher, 'change', ()=>{
            this._systemMotionReduced = reduceMotionMatcher.matches;
            if (this._configMotionReduced === 'auto') {
                this._onDidChangeReducedMotion.fire();
            }
        }));
        const updateRootClasses = ()=>{
            const reduce = this.isMotionReduced();
            this._layoutService.mainContainer.classList.toggle('reduce-motion', reduce);
            this._layoutService.mainContainer.classList.toggle('enable-motion', !reduce);
        };
        updateRootClasses();
        this._register(this.onDidChangeReducedMotion(()=>updateRootClasses()));
    }
    initLinkUnderlineListeners() {
        this._register(this._configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration('accessibility.underlineLinks')) {
                const linkUnderlinesEnabled = this._configurationService.getValue('accessibility.underlineLinks');
                this._linkUnderlinesEnabled = linkUnderlinesEnabled;
                this._onDidChangeLinkUnderline.fire();
            }
        }));
        const updateLinkUnderlineClasses = ()=>{
            const underlineLinks = this._linkUnderlinesEnabled;
            this._layoutService.mainContainer.classList.toggle('underline-links', underlineLinks);
        };
        updateLinkUnderlineClasses();
        this._register(this.onDidChangeLinkUnderlines(()=>updateLinkUnderlineClasses()));
    }
    onDidChangeLinkUnderlines(listener) {
        return this._onDidChangeLinkUnderline.event(listener);
    }
    get onDidChangeScreenReaderOptimized() {
        return this._onDidChangeScreenReaderOptimized.event;
    }
    isScreenReaderOptimized() {
        const config = this._configurationService.getValue('editor.accessibilitySupport');
        return config === 'on' || config === 'auto' && this._accessibilitySupport === 2 /* AccessibilitySupport.Enabled */ ;
    }
    get onDidChangeReducedMotion() {
        return this._onDidChangeReducedMotion.event;
    }
    isMotionReduced() {
        const config = this._configMotionReduced;
        return config === 'on' || config === 'auto' && this._systemMotionReduced;
    }
    getAccessibilitySupport() {
        return this._accessibilitySupport;
    }
    constructor(_contextKeyService, _layoutService, _configurationService){
        super();
        this._contextKeyService = _contextKeyService;
        this._layoutService = _layoutService;
        this._configurationService = _configurationService;
        this._accessibilitySupport = 0 /* AccessibilitySupport.Unknown */ ;
        this._onDidChangeScreenReaderOptimized = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this._onDidChangeReducedMotion = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this._onDidChangeLinkUnderline = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this._accessibilityModeEnabledContext = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_ACCESSIBILITY_MODE_ENABLED"].bindTo(this._contextKeyService);
        const updateContextKey = ()=>this._accessibilityModeEnabledContext.set(this.isScreenReaderOptimized());
        this._register(this._configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration('editor.accessibilitySupport')) {
                updateContextKey();
                this._onDidChangeScreenReaderOptimized.fire();
            }
            if (e.affectsConfiguration('workbench.reduceMotion')) {
                this._configMotionReduced = this._configurationService.getValue('workbench.reduceMotion');
                this._onDidChangeReducedMotion.fire();
            }
        }));
        updateContextKey();
        this._register(this.onDidChangeScreenReaderOptimized(()=>updateContextKey()));
        const reduceMotionMatcher = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].matchMedia("(prefers-reduced-motion: reduce)");
        this._systemMotionReduced = reduceMotionMatcher.matches;
        this._configMotionReduced = this._configurationService.getValue('workbench.reduceMotion');
        this._linkUnderlinesEnabled = this._configurationService.getValue('accessibility.underlineLinks');
        this.initReducedMotionListeners(reduceMotionMatcher);
        this.initLinkUnderlineListeners();
    }
};
AccessibilityService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILayoutService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], AccessibilityService);
;
 //# sourceMappingURL=accessibilityService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INotificationService",
    ()=>INotificationService,
    "NoOpNotification",
    ()=>NoOpNotification,
    "Severity",
    ()=>Severity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/severity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
var Severity = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const INotificationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('notificationService');
class NoOpNotification {
} //# sourceMappingURL=notification.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/undoRedo/common/undoRedo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IUndoRedoService",
    ()=>IUndoRedoService,
    "ResourceEditStackSnapshot",
    ()=>ResourceEditStackSnapshot,
    "UndoRedoGroup",
    ()=>UndoRedoGroup,
    "UndoRedoSource",
    ()=>UndoRedoSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IUndoRedoService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('undoRedoService');
class ResourceEditStackSnapshot {
    constructor(resource, elements){
        this.resource = resource;
        this.elements = elements;
    }
}
class UndoRedoGroup {
    nextOrder() {
        if (this.id === 0) {
            return 0;
        }
        return this.order++;
    }
    constructor(){
        this.id = UndoRedoGroup._ID++;
        this.order = 1;
    }
}
UndoRedoGroup._ID = 0;
UndoRedoGroup.None = new UndoRedoGroup();
class UndoRedoSource {
    nextOrder() {
        if (this.id === 0) {
            return 0;
        }
        return this.order++;
    }
    constructor(){
        this.id = UndoRedoSource._ID++;
        this.order = 1;
    }
} //# sourceMappingURL=undoRedo.js.map
UndoRedoSource._ID = 0;
UndoRedoSource.None = new UndoRedoSource();
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/undoRedo/common/undoRedoService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "UndoRedoService",
    ()=>UndoRedoService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/severity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$dialogs$2f$common$2f$dialogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/undoRedo/common/undoRedo.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
const DEBUG = false;
function getResourceLabel(resource) {
    return resource.scheme === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].file ? resource.fsPath : resource.path;
}
let stackElementCounter = 0;
class ResourceStackElement {
    setValid(isValid) {
        this.isValid = isValid;
    }
    toString() {
        return "[id:".concat(this.id, "] [group:").concat(this.groupId, "] [").concat(this.isValid ? '  VALID' : 'INVALID', "] ").concat(this.actual.constructor.name, " - ").concat(this.actual);
    }
    constructor(actual, resourceLabel, strResource, groupId, groupOrder, sourceId, sourceOrder){
        this.id = ++stackElementCounter;
        this.type = 0 /* UndoRedoElementType.Resource */ ;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this.resourceLabels = [
            this.resourceLabel
        ];
        this.strResources = [
            this.strResource
        ];
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.isValid = true;
    }
}
class ResourceReasonPair {
    constructor(resourceLabel, reason){
        this.resourceLabel = resourceLabel;
        this.reason = reason;
    }
}
class RemovedResources {
    createMessage() {
        const externalRemoval = [];
        const noParallelUniverses = [];
        for (const [, element] of this.elements){
            const dest = element.reason === 0 /* RemovedResourceReason.ExternalRemoval */  ? externalRemoval : noParallelUniverses;
            dest.push(element.resourceLabel);
        }
        const messages = [];
        if (externalRemoval.length > 0) {
            messages.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2012, "The following files have been closed and modified on disk: {0}.", externalRemoval.join(', ')));
        }
        if (noParallelUniverses.length > 0) {
            messages.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2013, "The following files have been modified in an incompatible way: {0}.", noParallelUniverses.join(', ')));
        }
        return messages.join('\n');
    }
    get size() {
        return this.elements.size;
    }
    has(strResource) {
        return this.elements.has(strResource);
    }
    set(strResource, value) {
        this.elements.set(strResource, value);
    }
    delete(strResource) {
        return this.elements.delete(strResource);
    }
    constructor(){
        this.elements = new Map();
    }
}
class WorkspaceStackElement {
    canSplit() {
        return typeof this.actual.split === 'function';
    }
    removeResource(resourceLabel, strResource, reason) {
        if (!this.removedResources) {
            this.removedResources = new RemovedResources();
        }
        if (!this.removedResources.has(strResource)) {
            this.removedResources.set(strResource, new ResourceReasonPair(resourceLabel, reason));
        }
    }
    setValid(resourceLabel, strResource, isValid) {
        if (isValid) {
            if (this.invalidatedResources) {
                this.invalidatedResources.delete(strResource);
                if (this.invalidatedResources.size === 0) {
                    this.invalidatedResources = null;
                }
            }
        } else {
            if (!this.invalidatedResources) {
                this.invalidatedResources = new RemovedResources();
            }
            if (!this.invalidatedResources.has(strResource)) {
                this.invalidatedResources.set(strResource, new ResourceReasonPair(resourceLabel, 0 /* RemovedResourceReason.ExternalRemoval */ ));
            }
        }
    }
    toString() {
        return "[id:".concat(this.id, "] [group:").concat(this.groupId, "] [").concat(this.invalidatedResources ? 'INVALID' : '  VALID', "] ").concat(this.actual.constructor.name, " - ").concat(this.actual);
    }
    constructor(actual, resourceLabels, strResources, groupId, groupOrder, sourceId, sourceOrder){
        this.id = ++stackElementCounter;
        this.type = 1 /* UndoRedoElementType.Workspace */ ;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabels = resourceLabels;
        this.strResources = strResources;
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.removedResources = null;
        this.invalidatedResources = null;
    }
}
class ResourceEditStack {
    dispose() {
        for (const element of this._past){
            if (element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */ );
            }
        }
        for (const element of this._future){
            if (element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */ );
            }
        }
        this.versionId++;
    }
    toString() {
        const result = [];
        result.push("* ".concat(this.strResource, ":"));
        for(let i = 0; i < this._past.length; i++){
            result.push("   * [UNDO] ".concat(this._past[i]));
        }
        for(let i = this._future.length - 1; i >= 0; i--){
            result.push("   * [REDO] ".concat(this._future[i]));
        }
        return result.join('\n');
    }
    flushAllElements() {
        this._past = [];
        this._future = [];
        this.versionId++;
    }
    _setElementValidFlag(element, isValid) {
        if (element.type === 1 /* UndoRedoElementType.Workspace */ ) {
            element.setValid(this.resourceLabel, this.strResource, isValid);
        } else {
            element.setValid(isValid);
        }
    }
    setElementsValidFlag(isValid, filter) {
        for (const element of this._past){
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
        for (const element of this._future){
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
    }
    pushElement(element) {
        // remove the future
        for (const futureElement of this._future){
            if (futureElement.type === 1 /* UndoRedoElementType.Workspace */ ) {
                futureElement.removeResource(this.resourceLabel, this.strResource, 1 /* RemovedResourceReason.NoParallelUniverses */ );
            }
        }
        this._future = [];
        this._past.push(element);
        this.versionId++;
    }
    createSnapshot(resource) {
        const elements = [];
        for(let i = 0, len = this._past.length; i < len; i++){
            elements.push(this._past[i].id);
        }
        for(let i = this._future.length - 1; i >= 0; i--){
            elements.push(this._future[i].id);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceEditStackSnapshot"](resource, elements);
    }
    restoreSnapshot(snapshot) {
        const snapshotLength = snapshot.elements.length;
        let isOK = true;
        let snapshotIndex = 0;
        let removePastAfter = -1;
        for(let i = 0, len = this._past.length; i < len; i++, snapshotIndex++){
            const element = this._past[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removePastAfter = 0;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */ );
            }
        }
        let removeFutureBefore = -1;
        for(let i = this._future.length - 1; i >= 0; i--, snapshotIndex++){
            const element = this._future[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removeFutureBefore = i;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */ );
            }
        }
        if (removePastAfter !== -1) {
            this._past = this._past.slice(0, removePastAfter);
        }
        if (removeFutureBefore !== -1) {
            this._future = this._future.slice(removeFutureBefore + 1);
        }
        this.versionId++;
    }
    getElements() {
        const past = [];
        const future = [];
        for (const element of this._past){
            past.push(element.actual);
        }
        for (const element of this._future){
            future.push(element.actual);
        }
        return {
            past,
            future
        };
    }
    getClosestPastElement() {
        if (this._past.length === 0) {
            return null;
        }
        return this._past[this._past.length - 1];
    }
    getSecondClosestPastElement() {
        if (this._past.length < 2) {
            return null;
        }
        return this._past[this._past.length - 2];
    }
    getClosestFutureElement() {
        if (this._future.length === 0) {
            return null;
        }
        return this._future[this._future.length - 1];
    }
    hasPastElements() {
        return this._past.length > 0;
    }
    hasFutureElements() {
        return this._future.length > 0;
    }
    splitPastWorkspaceElement(toRemove, individualMap) {
        for(let j = this._past.length - 1; j >= 0; j--){
            if (this._past[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._past[j] = individualMap.get(this.strResource);
                } else {
                    // gets deleted
                    this._past.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    splitFutureWorkspaceElement(toRemove, individualMap) {
        for(let j = this._future.length - 1; j >= 0; j--){
            if (this._future[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._future[j] = individualMap.get(this.strResource);
                } else {
                    // gets deleted
                    this._future.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    moveBackward(element) {
        this._past.pop();
        this._future.push(element);
        this.versionId++;
    }
    moveForward(element) {
        this._future.pop();
        this._past.push(element);
        this.versionId++;
    }
    constructor(resourceLabel, strResource){
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this._past = [];
        this._future = [];
        this.locked = false;
        this.versionId = 1;
    }
}
class EditStackSnapshot {
    isValid() {
        for(let i = 0, len = this.editStacks.length; i < len; i++){
            if (this._versionIds[i] !== this.editStacks[i].versionId) {
                return false;
            }
        }
        return true;
    }
    constructor(editStacks){
        this.editStacks = editStacks;
        this._versionIds = [];
        for(let i = 0, len = this.editStacks.length; i < len; i++){
            this._versionIds[i] = this.editStacks[i].versionId;
        }
    }
}
const missingEditStack = new ResourceEditStack('', '');
missingEditStack.locked = true;
let UndoRedoService = class UndoRedoService {
    getUriComparisonKey(resource) {
        for (const uriComparisonKeyComputer of this._uriComparisonKeyComputers){
            if (uriComparisonKeyComputer[0] === resource.scheme) {
                return uriComparisonKeyComputer[1].getComparisonKey(resource);
            }
        }
        return resource.toString();
    }
    _print(label) {
        console.log("------------------------------------");
        console.log("AFTER ".concat(label, ": "));
        const str = [];
        for (const element of this._editStacks){
            str.push(element[1].toString());
        }
        console.log(str.join('\n'));
    }
    pushElement(element) {
        let group = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoGroup"].None, source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoSource"].None;
        if (element.type === 0 /* UndoRedoElementType.Resource */ ) {
            const resourceLabel = getResourceLabel(element.resource);
            const strResource = this.getUriComparisonKey(element.resource);
            this._pushElement(new ResourceStackElement(element, resourceLabel, strResource, group.id, group.nextOrder(), source.id, source.nextOrder()));
        } else {
            const seen = new Set();
            const resourceLabels = [];
            const strResources = [];
            for (const resource of element.resources){
                const resourceLabel = getResourceLabel(resource);
                const strResource = this.getUriComparisonKey(resource);
                if (seen.has(strResource)) {
                    continue;
                }
                seen.add(strResource);
                resourceLabels.push(resourceLabel);
                strResources.push(strResource);
            }
            if (resourceLabels.length === 1) {
                this._pushElement(new ResourceStackElement(element, resourceLabels[0], strResources[0], group.id, group.nextOrder(), source.id, source.nextOrder()));
            } else {
                this._pushElement(new WorkspaceStackElement(element, resourceLabels, strResources, group.id, group.nextOrder(), source.id, source.nextOrder()));
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    _pushElement(element) {
        for(let i = 0, len = element.strResources.length; i < len; i++){
            const resourceLabel = element.resourceLabels[i];
            const strResource = element.strResources[i];
            let editStack;
            if (this._editStacks.has(strResource)) {
                editStack = this._editStacks.get(strResource);
            } else {
                editStack = new ResourceEditStack(resourceLabel, strResource);
                this._editStacks.set(strResource, editStack);
            }
            editStack.pushElement(element);
        }
    }
    getLastElement(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            if (editStack.hasFutureElements()) {
                return null;
            }
            const closestPastElement = editStack.getClosestPastElement();
            return closestPastElement ? closestPastElement.actual : null;
        }
        return null;
    }
    _splitPastWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr){
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources){
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitPastWorkspaceElement(toRemove, individualMap);
        }
    }
    _splitFutureWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr){
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources){
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitFutureWorkspaceElement(toRemove, individualMap);
        }
    }
    removeElements(resource) {
        const strResource = typeof resource === 'string' ? resource : this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.dispose();
            this._editStacks.delete(strResource);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    setElementsValidFlag(resource, isValid, filter) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.setElementsValidFlag(isValid, filter);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    createSnapshot(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.createSnapshot(resource);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceEditStackSnapshot"](resource, []);
    }
    restoreSnapshot(snapshot) {
        const strResource = this.getUriComparisonKey(snapshot.resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.restoreSnapshot(snapshot);
            if (!editStack.hasPastElements() && !editStack.hasFutureElements()) {
                // the edit stack is now empty, just remove it entirely
                editStack.dispose();
                this._editStacks.delete(strResource);
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    getElements(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.getElements();
        }
        return {
            past: [],
            future: []
        };
    }
    _findClosestUndoElementWithSource(sourceId) {
        if (!sourceId) {
            return [
                null,
                null
            ];
        }
        // find an element with the sourceId and with the highest sourceOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks){
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder > matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [
            matchedElement,
            matchedStrResource
        ];
    }
    canUndo(resourceOrSource) {
        if (resourceOrSource instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoSource"]) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasPastElements();
        }
        return false;
    }
    _onError(err, element) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
        // An error occurred while undoing or redoing => drop the undo/redo stack for all affected resources
        for (const strResource of element.strResources){
            this.removeElements(strResource);
        }
        this._notificationService.error(err);
    }
    _acquireLocks(editStackSnapshot) {
        // first, check if all locks can be acquired
        for (const editStack of editStackSnapshot.editStacks){
            if (editStack.locked) {
                throw new Error('Cannot acquire edit stack lock');
            }
        }
        // can acquire all locks
        for (const editStack of editStackSnapshot.editStacks){
            editStack.locked = true;
        }
        return ()=>{
            // release all locks
            for (const editStack of editStackSnapshot.editStacks){
                editStack.locked = false;
            }
        };
    }
    _safeInvokeWithLocks(element, invoke, editStackSnapshot, cleanup, continuation) {
        const releaseLocks = this._acquireLocks(editStackSnapshot);
        let result;
        try {
            result = invoke();
        } catch (err) {
            releaseLocks();
            cleanup.dispose();
            return this._onError(err, element);
        }
        if (result) {
            // result is Promise<void>
            return result.then(()=>{
                releaseLocks();
                cleanup.dispose();
                return continuation();
            }, (err)=>{
                releaseLocks();
                cleanup.dispose();
                return this._onError(err, element);
            });
        } else {
            // result is void
            releaseLocks();
            cleanup.dispose();
            return continuation();
        }
    }
    async _invokeWorkspacePrepare(element) {
        if (typeof element.actual.prepareUndoRedo === 'undefined') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        }
        const result = element.actual.prepareUndoRedo();
        if (typeof result === 'undefined') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        }
        return result;
    }
    _invokeResourcePrepare(element, callback) {
        if (element.actual.type !== 1 /* UndoRedoElementType.Workspace */  || typeof element.actual.prepareUndoRedo === 'undefined') {
            // no preparation needed
            return callback(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None);
        }
        const r = element.actual.prepareUndoRedo();
        if (!r) {
            // nothing to clean up
            return callback(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisposable"])(r)) {
            return callback(r);
        }
        return r.then((disposable)=>{
            return callback(disposable);
        });
    }
    _getAffectedEditStacks(element) {
        const affectedEditStacks = [];
        for (const strResource of element.strResources){
            affectedEditStacks.push(this._editStacks.get(strResource) || missingEditStack);
        }
        return new EditStackSnapshot(affectedEditStacks);
    }
    _tryToSplitAndUndo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitPastWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._undo(strResource, 0, true));
        } else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources){
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceUndo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.removedResources, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2014, "Could not undo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.invalidatedResources, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2015, "Could not undo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last past element in all the impacted resources!
        const cannotUndoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks){
            if (editStack.getClosestPastElement() !== element) {
                cannotUndoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotUndoDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2016, "Could not undo '{0}' across all files because changes were made to {1}", element.label, cannotUndoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks){
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2017, "Could not undo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndUndo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2018, "Could not undo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceUndo(strResource, element, undoConfirmed) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceUndo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._confirmAndExecuteWorkspaceUndo(strResource, element, affectedEditStacks, undoConfirmed);
    }
    _isPartOfUndoGroup(element) {
        if (!element.groupId) {
            return false;
        }
        // check that there is at least another element with the same groupId ready to be undone
        for (const [, editStack] of this._editStacks){
            const pastElement = editStack.getClosestPastElement();
            if (!pastElement) {
                continue;
            }
            if (pastElement === element) {
                const secondPastElement = editStack.getSecondClosestPastElement();
                if (secondPastElement && secondPastElement.groupId === element.groupId) {
                    // there is another element with the same group id in the same stack!
                    return true;
                }
            }
            if (pastElement.groupId === element.groupId) {
                // there is another element with the same group id in another stack!
                return true;
            }
        }
        return false;
    }
    async _confirmAndExecuteWorkspaceUndo(strResource, element, editStackSnapshot, undoConfirmed) {
        if (element.canSplit() && !this._isPartOfUndoGroup(element)) {
            // this element can be split
            let UndoChoice;
            (function(UndoChoice) {
                UndoChoice[UndoChoice["All"] = 0] = "All";
                UndoChoice[UndoChoice["This"] = 1] = "This";
                UndoChoice[UndoChoice["Cancel"] = 2] = "Cancel";
            })(UndoChoice || (UndoChoice = {}));
            const { result } = await this._dialogService.prompt({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Info,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2019, "Would you like to undo '{0}' across all files?", element.label),
                buttons: [
                    {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2020, "&&Undo in {0} Files", editStackSnapshot.editStacks.length),
                        run: ()=>UndoChoice.All
                    },
                    {
                        label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2021, "Undo this &&File"),
                        run: ()=>UndoChoice.This
                    }
                ],
                cancelButton: {
                    run: ()=>UndoChoice.Cancel
                }
            });
            if (result === UndoChoice.Cancel) {
                // choice: cancel
                return;
            }
            if (result === UndoChoice.This) {
                // choice: undo this file
                this._splitPastWorkspaceElement(element, null);
                return this._undo(strResource, 0, true);
            }
            // choice: undo in all files
            // At this point, it is possible that the element has been made invalid in the meantime (due to the confirmation await)
            const verificationError1 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*invalidated resources will be checked after the prepare call*/ false);
            if (verificationError1) {
                return verificationError1.returnValue;
            }
            undoConfirmed = true;
        }
        // prepare
        let cleanup;
        try {
            cleanup = await this._invokeWorkspacePrepare(element);
        } catch (err) {
            return this._onError(err, element);
        }
        // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
        const verificationError2 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
        if (verificationError2) {
            cleanup.dispose();
            return verificationError2.returnValue;
        }
        for (const editStack of editStackSnapshot.editStacks){
            editStack.moveBackward(element);
        }
        return this._safeInvokeWithLocks(element, ()=>element.actual.undo(), editStackSnapshot, cleanup, ()=>this._continueUndoInGroup(element.groupId, undoConfirmed));
    }
    _resourceUndo(editStack, element, undoConfirmed) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2022, "Could not undo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup)=>{
            editStack.moveBackward(element);
            return this._safeInvokeWithLocks(element, ()=>element.actual.undo(), new EditStackSnapshot([
                editStack
            ]), cleanup, ()=>this._continueUndoInGroup(element.groupId, undoConfirmed));
        });
    }
    _findClosestUndoElementInGroup(groupId) {
        if (!groupId) {
            return [
                null,
                null
            ];
        }
        // find another element with the same groupId and with the highest groupOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks){
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder > matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [
            matchedElement,
            matchedStrResource
        ];
    }
    _continueUndoInGroup(groupId, undoConfirmed) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestUndoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._undo(matchedStrResource, 0, undoConfirmed);
        }
    }
    undo(resourceOrSource) {
        if (resourceOrSource instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoSource"]) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._undo(matchedStrResource, resourceOrSource.id, false) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._undo(resourceOrSource, 0, false);
        }
        return this._undo(this.getUriComparisonKey(resourceOrSource), 0, false);
    }
    _undo(strResource) {
        let sourceId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, undoConfirmed = arguments.length > 2 ? arguments[2] : void 0;
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestPastElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure undoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestUndoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be undone before this one
                return this._undo(matchedStrResource, sourceId, undoConfirmed);
            }
        }
        const shouldPromptForConfirmation = element.sourceId !== sourceId || element.confirmBeforeUndo;
        if (shouldPromptForConfirmation && !undoConfirmed) {
            // Hit a different source or the element asks for prompt before undo, prompt for confirmation
            return this._confirmAndContinueUndo(strResource, sourceId, element);
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                return this._workspaceUndo(strResource, element, undoConfirmed);
            } else {
                return this._resourceUndo(editStack, element, undoConfirmed);
            }
        } finally{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }
    async _confirmAndContinueUndo(strResource, sourceId, element) {
        const result = await this._dialogService.confirm({
            message: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2023, "Would you like to undo '{0}'?", element.label),
            primaryButton: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2024, "&&Yes"),
            cancelButton: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2025, "No")
        });
        if (!result.confirmed) {
            return;
        }
        return this._undo(strResource, sourceId, true);
    }
    _findClosestRedoElementWithSource(sourceId) {
        if (!sourceId) {
            return [
                null,
                null
            ];
        }
        // find an element with sourceId and with the lowest sourceOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks){
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder < matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [
            matchedElement,
            matchedStrResource
        ];
    }
    canRedo(resourceOrSource) {
        if (resourceOrSource instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoSource"]) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasFutureElements();
        }
        return false;
    }
    _tryToSplitAndRedo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitFutureWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._redo(strResource));
        } else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources){
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceRedo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.removedResources, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2026, "Could not redo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.invalidatedResources, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2027, "Could not redo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last future element in all the impacted resources!
        const cannotRedoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks){
            if (editStack.getClosestFutureElement() !== element) {
                cannotRedoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotRedoDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2028, "Could not redo '{0}' across all files because changes were made to {1}", element.label, cannotRedoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks){
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2029, "Could not redo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndRedo(strResource, element, null, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2030, "Could not redo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceRedo(strResource, element) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceRedo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._executeWorkspaceRedo(strResource, element, affectedEditStacks);
    }
    async _executeWorkspaceRedo(strResource, element, editStackSnapshot) {
        // prepare
        let cleanup;
        try {
            cleanup = await this._invokeWorkspacePrepare(element);
        } catch (err) {
            return this._onError(err, element);
        }
        // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
        const verificationError = this._checkWorkspaceRedo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
        if (verificationError) {
            cleanup.dispose();
            return verificationError.returnValue;
        }
        for (const editStack of editStackSnapshot.editStacks){
            editStack.moveForward(element);
        }
        return this._safeInvokeWithLocks(element, ()=>element.actual.redo(), editStackSnapshot, cleanup, ()=>this._continueRedoInGroup(element.groupId));
    }
    _resourceRedo(editStack, element) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](2031, "Could not redo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup)=>{
            editStack.moveForward(element);
            return this._safeInvokeWithLocks(element, ()=>element.actual.redo(), new EditStackSnapshot([
                editStack
            ]), cleanup, ()=>this._continueRedoInGroup(element.groupId));
        });
    }
    _findClosestRedoElementInGroup(groupId) {
        if (!groupId) {
            return [
                null,
                null
            ];
        }
        // find another element with the same groupId and with the lowest groupOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks){
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder < matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [
            matchedElement,
            matchedStrResource
        ];
    }
    _continueRedoInGroup(groupId) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestRedoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._redo(matchedStrResource);
        }
    }
    redo(resourceOrSource) {
        if (resourceOrSource instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedoSource"]) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._redo(matchedStrResource) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._redo(resourceOrSource);
        }
        return this._redo(this.getUriComparisonKey(resourceOrSource));
    }
    _redo(strResource) {
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestFutureElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure redoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestRedoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be redone before this one
                return this._redo(matchedStrResource);
            }
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */ ) {
                return this._workspaceRedo(strResource, element);
            } else {
                return this._resourceRedo(editStack, element);
            }
        } finally{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }
    constructor(_dialogService, _notificationService){
        this._dialogService = _dialogService;
        this._notificationService = _notificationService;
        this._editStacks = new Map();
        this._uriComparisonKeyComputers = [];
    }
};
UndoRedoService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$dialogs$2f$common$2f$dialogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IDialogService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"])
], UndoRedoService);
;
class WorkspaceVerificationError {
    constructor(returnValue){
        this.returnValue = returnValue;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$undoRedo$2f$common$2f$undoRedo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IUndoRedoService"], UndoRedoService, 1 /* InstantiationType.Delayed */ ); //# sourceMappingURL=undoRedoService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibilitySignal/browser/accessibilitySignalService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessibilitySignal",
    ()=>AccessibilitySignal,
    "AcknowledgeDocCommentsToken",
    ()=>AcknowledgeDocCommentsToken,
    "IAccessibilitySignalService",
    ()=>IAccessibilitySignalService,
    "Sound",
    ()=>Sound,
    "SoundSource",
    ()=>SoundSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
const IAccessibilitySignalService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('accessibilitySignalService');
const AcknowledgeDocCommentsToken = Symbol('AcknowledgeDocCommentsToken');
class Sound {
    static register(options) {
        const sound = new Sound(options.fileName);
        return sound;
    }
    constructor(fileName){
        this.fileName = fileName;
    }
}
Sound.error = Sound.register({
    fileName: 'error.mp3'
});
Sound.warning = Sound.register({
    fileName: 'warning.mp3'
});
Sound.success = Sound.register({
    fileName: 'success.mp3'
});
Sound.foldedArea = Sound.register({
    fileName: 'foldedAreas.mp3'
});
Sound.break = Sound.register({
    fileName: 'break.mp3'
});
Sound.quickFixes = Sound.register({
    fileName: 'quickFixes.mp3'
});
Sound.taskCompleted = Sound.register({
    fileName: 'taskCompleted.mp3'
});
Sound.taskFailed = Sound.register({
    fileName: 'taskFailed.mp3'
});
Sound.terminalBell = Sound.register({
    fileName: 'terminalBell.mp3'
});
Sound.diffLineInserted = Sound.register({
    fileName: 'diffLineInserted.mp3'
});
Sound.diffLineDeleted = Sound.register({
    fileName: 'diffLineDeleted.mp3'
});
Sound.diffLineModified = Sound.register({
    fileName: 'diffLineModified.mp3'
});
Sound.requestSent = Sound.register({
    fileName: 'requestSent.mp3'
});
Sound.responseReceived1 = Sound.register({
    fileName: 'responseReceived1.mp3'
});
Sound.responseReceived2 = Sound.register({
    fileName: 'responseReceived2.mp3'
});
Sound.responseReceived3 = Sound.register({
    fileName: 'responseReceived3.mp3'
});
Sound.responseReceived4 = Sound.register({
    fileName: 'responseReceived4.mp3'
});
Sound.clear = Sound.register({
    fileName: 'clear.mp3'
});
Sound.save = Sound.register({
    fileName: 'save.mp3'
});
Sound.format = Sound.register({
    fileName: 'format.mp3'
});
Sound.voiceRecordingStarted = Sound.register({
    fileName: 'voiceRecordingStarted.mp3'
});
Sound.voiceRecordingStopped = Sound.register({
    fileName: 'voiceRecordingStopped.mp3'
});
Sound.progress = Sound.register({
    fileName: 'progress.mp3'
});
Sound.chatEditModifiedFile = Sound.register({
    fileName: 'chatEditModifiedFile.mp3'
});
Sound.editsKept = Sound.register({
    fileName: 'editsKept.mp3'
});
Sound.editsUndone = Sound.register({
    fileName: 'editsUndone.mp3'
});
Sound.nextEditSuggestion = Sound.register({
    fileName: 'nextEditSuggestion.mp3'
});
Sound.terminalCommandSucceeded = Sound.register({
    fileName: 'terminalCommandSucceeded.mp3'
});
Sound.chatUserActionRequired = Sound.register({
    fileName: 'chatUserActionRequired.mp3'
});
Sound.codeActionTriggered = Sound.register({
    fileName: 'codeActionTriggered.mp3'
});
Sound.codeActionApplied = Sound.register({
    fileName: 'codeActionApplied.mp3'
});
class SoundSource {
    constructor(randomOneOf){
        this.randomOneOf = randomOneOf;
    }
}
class AccessibilitySignal {
    static register(options) {
        const soundSource = new SoundSource('randomOneOf' in options.sound ? options.sound.randomOneOf : [
            options.sound
        ]);
        const signal = new AccessibilitySignal(soundSource, options.name, options.legacySoundSettingsKey, options.settingsKey, options.legacyAnnouncementSettingsKey, options.announcementMessage, options.managesOwnEnablement);
        AccessibilitySignal._signals.add(signal);
        return signal;
    }
    constructor(sound, name, legacySoundSettingsKey, settingsKey, legacyAnnouncementSettingsKey, announcementMessage, managesOwnEnablement = false){
        this.sound = sound;
        this.name = name;
        this.legacySoundSettingsKey = legacySoundSettingsKey;
        this.settingsKey = settingsKey;
        this.legacyAnnouncementSettingsKey = legacyAnnouncementSettingsKey;
        this.announcementMessage = announcementMessage;
        this.managesOwnEnablement = managesOwnEnablement;
    }
} //# sourceMappingURL=accessibilitySignalService.js.map
AccessibilitySignal._signals = new Set();
AccessibilitySignal.errorAtPosition = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1561, 'Error at Position'),
    sound: Sound.error,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1562, 'Error'),
    settingsKey: 'accessibility.signals.positionHasError',
    delaySettingsKey: 'accessibility.signalOptions.delays.errorAtPosition'
});
AccessibilitySignal.warningAtPosition = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1563, 'Warning at Position'),
    sound: Sound.warning,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1564, 'Warning'),
    settingsKey: 'accessibility.signals.positionHasWarning',
    delaySettingsKey: 'accessibility.signalOptions.delays.warningAtPosition'
});
AccessibilitySignal.errorOnLine = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1565, 'Error on Line'),
    sound: Sound.error,
    legacySoundSettingsKey: 'audioCues.lineHasError',
    legacyAnnouncementSettingsKey: 'accessibility.alert.error',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1566, 'Error on Line'),
    settingsKey: 'accessibility.signals.lineHasError'
});
AccessibilitySignal.warningOnLine = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1567, 'Warning on Line'),
    sound: Sound.warning,
    legacySoundSettingsKey: 'audioCues.lineHasWarning',
    legacyAnnouncementSettingsKey: 'accessibility.alert.warning',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1568, 'Warning on Line'),
    settingsKey: 'accessibility.signals.lineHasWarning'
});
AccessibilitySignal.foldedArea = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1569, 'Folded Area on Line'),
    sound: Sound.foldedArea,
    legacySoundSettingsKey: 'audioCues.lineHasFoldedArea',
    legacyAnnouncementSettingsKey: 'accessibility.alert.foldedArea',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1570, 'Folded'),
    settingsKey: 'accessibility.signals.lineHasFoldedArea'
});
AccessibilitySignal.break = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1571, 'Breakpoint on Line'),
    sound: Sound.break,
    legacySoundSettingsKey: 'audioCues.lineHasBreakpoint',
    legacyAnnouncementSettingsKey: 'accessibility.alert.breakpoint',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1572, 'Breakpoint'),
    settingsKey: 'accessibility.signals.lineHasBreakpoint'
});
AccessibilitySignal.inlineSuggestion = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1573, 'Inline Suggestion on Line'),
    sound: Sound.quickFixes,
    legacySoundSettingsKey: 'audioCues.lineHasInlineSuggestion',
    settingsKey: 'accessibility.signals.lineHasInlineSuggestion'
});
AccessibilitySignal.nextEditSuggestion = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1574, 'Next Edit Suggestion on Line'),
    sound: Sound.nextEditSuggestion,
    legacySoundSettingsKey: 'audioCues.nextEditSuggestion',
    settingsKey: 'accessibility.signals.nextEditSuggestion',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1575, 'Next Edit Suggestion')
});
AccessibilitySignal.terminalQuickFix = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1576, 'Terminal Quick Fix'),
    sound: Sound.quickFixes,
    legacySoundSettingsKey: 'audioCues.terminalQuickFix',
    legacyAnnouncementSettingsKey: 'accessibility.alert.terminalQuickFix',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1577, 'Quick Fix'),
    settingsKey: 'accessibility.signals.terminalQuickFix'
});
AccessibilitySignal.onDebugBreak = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1578, 'Debugger Stopped on Breakpoint'),
    sound: Sound.break,
    legacySoundSettingsKey: 'audioCues.onDebugBreak',
    legacyAnnouncementSettingsKey: 'accessibility.alert.onDebugBreak',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1579, 'Breakpoint'),
    settingsKey: 'accessibility.signals.onDebugBreak'
});
AccessibilitySignal.noInlayHints = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1580, 'No Inlay Hints on Line'),
    sound: Sound.error,
    legacySoundSettingsKey: 'audioCues.noInlayHints',
    legacyAnnouncementSettingsKey: 'accessibility.alert.noInlayHints',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1581, 'No Inlay Hints'),
    settingsKey: 'accessibility.signals.noInlayHints'
});
AccessibilitySignal.taskCompleted = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1582, 'Task Completed'),
    sound: Sound.taskCompleted,
    legacySoundSettingsKey: 'audioCues.taskCompleted',
    legacyAnnouncementSettingsKey: 'accessibility.alert.taskCompleted',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1583, 'Task Completed'),
    settingsKey: 'accessibility.signals.taskCompleted'
});
AccessibilitySignal.taskFailed = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1584, 'Task Failed'),
    sound: Sound.taskFailed,
    legacySoundSettingsKey: 'audioCues.taskFailed',
    legacyAnnouncementSettingsKey: 'accessibility.alert.taskFailed',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1585, 'Task Failed'),
    settingsKey: 'accessibility.signals.taskFailed'
});
AccessibilitySignal.terminalCommandFailed = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1586, 'Terminal Command Failed'),
    sound: Sound.error,
    legacySoundSettingsKey: 'audioCues.terminalCommandFailed',
    legacyAnnouncementSettingsKey: 'accessibility.alert.terminalCommandFailed',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1587, 'Command Failed'),
    settingsKey: 'accessibility.signals.terminalCommandFailed'
});
AccessibilitySignal.terminalCommandSucceeded = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1588, 'Terminal Command Succeeded'),
    sound: Sound.terminalCommandSucceeded,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1589, 'Command Succeeded'),
    settingsKey: 'accessibility.signals.terminalCommandSucceeded'
});
AccessibilitySignal.terminalBell = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1590, 'Terminal Bell'),
    sound: Sound.terminalBell,
    legacySoundSettingsKey: 'audioCues.terminalBell',
    legacyAnnouncementSettingsKey: 'accessibility.alert.terminalBell',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1591, 'Terminal Bell'),
    settingsKey: 'accessibility.signals.terminalBell'
});
AccessibilitySignal.notebookCellCompleted = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1592, 'Notebook Cell Completed'),
    sound: Sound.taskCompleted,
    legacySoundSettingsKey: 'audioCues.notebookCellCompleted',
    legacyAnnouncementSettingsKey: 'accessibility.alert.notebookCellCompleted',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1593, 'Notebook Cell Completed'),
    settingsKey: 'accessibility.signals.notebookCellCompleted'
});
AccessibilitySignal.notebookCellFailed = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1594, 'Notebook Cell Failed'),
    sound: Sound.taskFailed,
    legacySoundSettingsKey: 'audioCues.notebookCellFailed',
    legacyAnnouncementSettingsKey: 'accessibility.alert.notebookCellFailed',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1595, 'Notebook Cell Failed'),
    settingsKey: 'accessibility.signals.notebookCellFailed'
});
AccessibilitySignal.diffLineInserted = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1596, 'Diff Line Inserted'),
    sound: Sound.diffLineInserted,
    legacySoundSettingsKey: 'audioCues.diffLineInserted',
    settingsKey: 'accessibility.signals.diffLineInserted'
});
AccessibilitySignal.diffLineDeleted = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1597, 'Diff Line Deleted'),
    sound: Sound.diffLineDeleted,
    legacySoundSettingsKey: 'audioCues.diffLineDeleted',
    settingsKey: 'accessibility.signals.diffLineDeleted'
});
AccessibilitySignal.diffLineModified = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1598, 'Diff Line Modified'),
    sound: Sound.diffLineModified,
    legacySoundSettingsKey: 'audioCues.diffLineModified',
    settingsKey: 'accessibility.signals.diffLineModified'
});
AccessibilitySignal.chatEditModifiedFile = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1599, 'Chat Edit Modified File'),
    sound: Sound.chatEditModifiedFile,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1600, 'File Modified from Chat Edits'),
    settingsKey: 'accessibility.signals.chatEditModifiedFile'
});
AccessibilitySignal.chatRequestSent = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1601, 'Chat Request Sent'),
    sound: Sound.requestSent,
    legacySoundSettingsKey: 'audioCues.chatRequestSent',
    legacyAnnouncementSettingsKey: 'accessibility.alert.chatRequestSent',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1602, 'Chat Request Sent'),
    settingsKey: 'accessibility.signals.chatRequestSent'
});
AccessibilitySignal.chatResponseReceived = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1603, 'Chat Response Received'),
    legacySoundSettingsKey: 'audioCues.chatResponseReceived',
    sound: {
        randomOneOf: [
            Sound.responseReceived1,
            Sound.responseReceived2,
            Sound.responseReceived3,
            Sound.responseReceived4
        ]
    },
    settingsKey: 'accessibility.signals.chatResponseReceived'
});
AccessibilitySignal.codeActionTriggered = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1604, 'Code Action Request Triggered'),
    sound: Sound.codeActionTriggered,
    legacySoundSettingsKey: 'audioCues.codeActionRequestTriggered',
    legacyAnnouncementSettingsKey: 'accessibility.alert.codeActionRequestTriggered',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1605, 'Code Action Request Triggered'),
    settingsKey: 'accessibility.signals.codeActionTriggered'
});
AccessibilitySignal.codeActionApplied = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1606, 'Code Action Applied'),
    legacySoundSettingsKey: 'audioCues.codeActionApplied',
    sound: Sound.codeActionApplied,
    settingsKey: 'accessibility.signals.codeActionApplied'
});
AccessibilitySignal.progress = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1607, 'Progress'),
    sound: Sound.progress,
    legacySoundSettingsKey: 'audioCues.chatResponsePending',
    legacyAnnouncementSettingsKey: 'accessibility.alert.progress',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1608, 'Progress'),
    settingsKey: 'accessibility.signals.progress'
});
AccessibilitySignal.clear = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1609, 'Clear'),
    sound: Sound.clear,
    legacySoundSettingsKey: 'audioCues.clear',
    legacyAnnouncementSettingsKey: 'accessibility.alert.clear',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1610, 'Clear'),
    settingsKey: 'accessibility.signals.clear'
});
AccessibilitySignal.save = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1611, 'Save'),
    sound: Sound.save,
    legacySoundSettingsKey: 'audioCues.save',
    legacyAnnouncementSettingsKey: 'accessibility.alert.save',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1612, 'Save'),
    settingsKey: 'accessibility.signals.save'
});
AccessibilitySignal.format = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1613, 'Format'),
    sound: Sound.format,
    legacySoundSettingsKey: 'audioCues.format',
    legacyAnnouncementSettingsKey: 'accessibility.alert.format',
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1614, 'Format'),
    settingsKey: 'accessibility.signals.format'
});
AccessibilitySignal.voiceRecordingStarted = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1615, 'Voice Recording Started'),
    sound: Sound.voiceRecordingStarted,
    legacySoundSettingsKey: 'audioCues.voiceRecordingStarted',
    settingsKey: 'accessibility.signals.voiceRecordingStarted'
});
AccessibilitySignal.voiceRecordingStopped = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1616, 'Voice Recording Stopped'),
    sound: Sound.voiceRecordingStopped,
    legacySoundSettingsKey: 'audioCues.voiceRecordingStopped',
    settingsKey: 'accessibility.signals.voiceRecordingStopped'
});
AccessibilitySignal.editsKept = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1617, 'Edits Kept'),
    sound: Sound.editsKept,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1618, 'Edits Kept'),
    settingsKey: 'accessibility.signals.editsKept'
});
AccessibilitySignal.editsUndone = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1619, 'Undo Edits'),
    sound: Sound.editsUndone,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1620, 'Edits Undone'),
    settingsKey: 'accessibility.signals.editsUndone'
});
AccessibilitySignal.chatUserActionRequired = AccessibilitySignal.register({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1621, 'Chat User Action Required'),
    sound: Sound.chatUserActionRequired,
    announcementMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1622, 'Chat User Action Required'),
    settingsKey: 'accessibility.signals.chatUserActionRequired',
    managesOwnEnablement: true
});
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/observable/common/platformObservableUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "bindContextKey",
    ()=>bindContextKey,
    "observableConfigValue",
    ()=>observableConfigValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)");
;
;
function observableConfigValue(key, defaultValue, configurationService) {
    let debugLocation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromEventOpts"])({
        debugName: ()=>'Configuration Key "'.concat(key, '"')
    }, (handleChange)=>configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(key)) {
                handleChange(e);
            }
        }), ()=>{
        var _configurationService_getValue;
        return (_configurationService_getValue = configurationService.getValue(key)) !== null && _configurationService_getValue !== void 0 ? _configurationService_getValue : defaultValue;
    }, debugLocation);
}
function bindContextKey(key, service, computeValue) {
    let debugLocation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    const boundKey = key.bindTo(service);
    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"])({
        debugName: ()=>'Set Context Key "'.concat(key.key, '"')
    }, (reader)=>{
        const value = computeValue(reader);
        boundKey.set(value);
        return value;
    }, debugLocation).recomputeInitiallyAndOnChange(store);
    return store;
} //# sourceMappingURL=platformObservableUtils.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/observable/common/wrapInHotClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hotClassGetOriginalInstance",
    ()=>hotClassGetOriginalInstance,
    "wrapInHotClass1",
    ()=>wrapInHotClass1
]);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hotReload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
function hotClassGetOriginalInstance(value) {
    if (value instanceof BaseClass) {
        return value._instance;
    }
    return value;
}
class BaseClass {
    init() {
        for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
            params[_key] = arguments[_key];
        }
    }
    constructor(instantiationService){
        this.instantiationService = instantiationService;
    }
}
function createWrapper(clazz, B) {
    return class ReloadableWrapper extends B {
        init() {
            for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                params[_key] = arguments[_key];
            }
            this._autorun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunWithStore"])((reader, store)=>{
                const clazz_ = clazz.read(reader);
                this._instance = store.add(this.instantiationService.createInstance(clazz_, ...params));
            });
        }
        dispose() {
            var _this__autorun;
            (_this__autorun = this._autorun) === null || _this__autorun === void 0 ? void 0 : _this__autorun.dispose();
        }
        constructor(){
            super(...arguments);
            this._autorun = undefined;
        }
    };
}
function wrapInHotClass1(clazz) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHotReloadEnabled"])() ? clazz.get() : createWrapper(clazz, BaseClass1);
}
let BaseClass1 = class BaseClass1 extends BaseClass {
    constructor(param1, i){
        super(i);
        this.init(param1);
    }
};
BaseClass1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], BaseClass1); //# sourceMappingURL=wrapInHotClass.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/observable/common/wrapInReloadableClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapInReloadableClass1",
    ()=>wrapInReloadableClass1
]);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hotReload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReloadHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hotReloadHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
class BaseClass {
    init() {
        for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
            params[_key] = arguments[_key];
        }
    }
    constructor(instantiationService){
        this.instantiationService = instantiationService;
    }
}
function createWrapper(getClass, B) {
    return class ReloadableWrapper extends B {
        init() {
            for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                params[_key] = arguments[_key];
            }
            this._autorun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunWithStore"])((reader, store)=>{
                const clazz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReloadHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readHotReloadableExport"])(getClass(), reader);
                store.add(this.instantiationService.createInstance(clazz, ...params));
            });
        }
        dispose() {
            var _this__autorun;
            (_this__autorun = this._autorun) === null || _this__autorun === void 0 ? void 0 : _this__autorun.dispose();
        }
        constructor(){
            super(...arguments);
            this._autorun = undefined;
        }
    };
}
function wrapInReloadableClass1(getClass) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hotReload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHotReloadEnabled"])() ? getClass() : createWrapper(getClass, BaseClass1);
}
let BaseClass1 = class BaseClass1 extends BaseClass {
    constructor(param1, i){
        super(i);
        this.init(param1);
    }
};
BaseClass1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], BaseClass1); //# sourceMappingURL=wrapInReloadableClass.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IEditorProgressService",
    ()=>IEditorProgressService,
    "IProgressService",
    ()=>IProgressService,
    "Progress",
    ()=>Progress,
    "emptyProgressRunner",
    ()=>emptyProgressRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IProgressService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('progressService');
const emptyProgressRunner = Object.freeze({
    total () {},
    worked () {},
    done () {}
});
class Progress {
    report(item) {
        this._value = item;
        this.callback(this._value);
    }
    constructor(callback){
        this.callback = callback;
    }
}
Progress.None = Object.freeze({
    report () {}
});
const IEditorProgressService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('editorProgressService'); //# sourceMappingURL=progress.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IClipboardService",
    ()=>IClipboardService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IClipboardService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('clipboardService'); //# sourceMappingURL=clipboardService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/clipboard/browser/clipboardService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "BrowserClipboardService",
    ()=>BrowserClipboardService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)");
var _BrowserClipboardService;
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
var BrowserClipboardService_1;
;
;
;
;
;
;
;
;
;
;
/**
 * Custom mime type used for storing a list of uris in the clipboard.
 *
 * Requires support for custom web clipboards https://github.com/w3c/clipboard-apis/pull/175
 */ const vscodeResourcesMime = 'application/vnd.code.resources';
let BrowserClipboardService = (_BrowserClipboardService = class BrowserClipboardService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    triggerPaste() {
        this.logService.trace('BrowserClipboardService#triggerPaste');
        return undefined;
    }
    // In Safari, it has the following note:
    //
    // "The request to write to the clipboard must be triggered during a user gesture.
    // A call to clipboard.write or clipboard.writeText outside the scope of a user
    // gesture(such as "click" or "touch" event handlers) will result in the immediate
    // rejection of the promise returned by the API call."
    // From: https://webkit.org/blog/10855/async-clipboard-api/
    //
    // Since extensions run in a web worker, and handle gestures in an asynchronous way,
    // they are not classified by Safari as "in response to a user gesture" and will reject.
    //
    // This function sets up some handlers to work around that behavior.
    installWebKitWriteTextWorkaround() {
        const handler = ()=>{
            const currentWritePromise = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeferredPromise"]();
            // Cancel the previous promise since we just created a new one in response to this new event
            if (this.webKitPendingClipboardWritePromise && !this.webKitPendingClipboardWritePromise.isSettled) {
                this.webKitPendingClipboardWritePromise.cancel();
            }
            this.webKitPendingClipboardWritePromise = currentWritePromise;
            // The ctor of ClipboardItem allows you to pass in a promise that will resolve to a string.
            // This allows us to pass in a Promise that will either be cancelled by another event or
            // resolved with the contents of the first call to this.writeText.
            // see https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/ClipboardItem#parameters
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"])().navigator.clipboard.write([
                new ClipboardItem({
                    'text/plain': currentWritePromise.p
                })
            ]).catch(async (err)=>{
                if (!(err instanceof Error) || err.name !== 'NotAllowedError' || !currentWritePromise.isRejected) {
                    this.logService.error(err);
                }
            });
        };
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].runAndSubscribe(this.layoutService.onDidAddContainer, (param)=>{
            let { container, disposables } = param;
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(container, 'click', handler));
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(container, 'keydown', handler));
        }, {
            container: this.layoutService.mainContainer,
            disposables: this._store
        }));
    }
    async writeText(text, type) {
        this.logService.trace('BrowserClipboardService#writeText called with type:', type, ' text.length:', text.length);
        // Clear resources given we are writing text
        this.clearResourcesState();
        // With type: only in-memory is supported
        if (type) {
            this.mapTextToType.set(type, text);
            this.logService.trace('BrowserClipboardService#writeText');
            return;
        }
        if (this.webKitPendingClipboardWritePromise) {
            // For Safari, we complete this Promise which allows the call to `navigator.clipboard.write()`
            // above to resolve and successfully copy to the clipboard. If we let this continue, Safari
            // would throw an error because this call stack doesn't appear to originate from a user gesture.
            return this.webKitPendingClipboardWritePromise.complete(text);
        }
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            this.logService.trace('before navigator.clipboard.writeText');
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"])().navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error);
        }
        // Fallback to textarea and execCommand solution
        this.fallbackWriteText(text);
    }
    fallbackWriteText(text) {
        this.logService.trace('BrowserClipboardService#fallbackWriteText');
        const activeDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveDocument"])();
        const activeElement = activeDocument.activeElement;
        const textArea = activeDocument.body.appendChild((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('textarea', {
            'aria-hidden': true
        }));
        textArea.style.height = '1px';
        textArea.style.width = '1px';
        textArea.style.position = 'absolute';
        textArea.value = text;
        textArea.focus();
        textArea.select();
        activeDocument.execCommand('copy');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(activeElement)) {
            activeElement.focus();
        }
        textArea.remove();
    }
    async readText(type) {
        this.logService.trace('BrowserClipboardService#readText called with type:', type);
        // With type: only in-memory is supported
        if (type) {
            const readText = this.mapTextToType.get(type) || '';
            this.logService.trace('BrowserClipboardService#readText text.length:', readText.length);
            return readText;
        }
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            const readText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"])().navigator.clipboard.readText();
            this.logService.trace('BrowserClipboardService#readText text.length:', readText.length);
            return readText;
        } catch (error) {
            console.error(error);
        }
        return '';
    }
    async readFindText() {
        return this.findText;
    }
    async writeFindText(text) {
        this.findText = text;
    }
    async readResources() {
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"])().navigator.clipboard.read();
            for (const item of items){
                if (item.types.includes("web ".concat(vscodeResourcesMime))) {
                    const blob = await item.getType("web ".concat(vscodeResourcesMime));
                    const resources = JSON.parse(await blob.text()).map((x)=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].from(x));
                    return resources;
                }
            }
        } catch (error) {
        // Noop
        }
        const resourcesStateHash = await this.computeResourcesStateHash();
        if (this.resourcesStateHash !== resourcesStateHash) {
            this.clearResourcesState(); // state mismatch, resources no longer valid
        }
        return this.resources;
    }
    async computeResourcesStateHash() {
        if (this.resources.length === 0) {
            return undefined; // no resources, no hash needed
        }
        // Resources clipboard is managed in-memory only and thus
        // fails to invalidate when clipboard data is changing.
        // As such, we compute the hash of the current clipboard
        // and use that to later validate the resources clipboard.
        const clipboardText = await this.readText();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])(clipboardText.substring(0, BrowserClipboardService_1.MAX_RESOURCE_STATE_SOURCE_LENGTH));
    }
    clearInternalState() {
        this.clearResourcesState();
    }
    clearResourcesState() {
        this.resources = [];
        this.resourcesStateHash = undefined;
    }
    constructor(layoutService, logService){
        super();
        this.layoutService = layoutService;
        this.logService = logService;
        this.mapTextToType = new Map(); // unsupported in web (only in-memory)
        this.findText = ''; // unsupported in web (only in-memory)
        this.resources = []; // unsupported in web (only in-memory)
        this.resourcesStateHash = undefined;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"] || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebkitWebView"]) {
            this.installWebKitWriteTextWorkaround();
        }
        // Keep track of copy operations to reset our set of
        // copied resources: since we keep resources in memory
        // and not in the clipboard, we have to invalidate
        // that state when the user copies other data.
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].runAndSubscribe(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDidRegisterWindow"], (param)=>{
            let { window, disposables } = param;
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(window.document, 'copy', ()=>this.clearResourcesState()));
        }, {
            window: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"],
            disposables: this._store
        }));
    }
}, BrowserClipboardService_1 = _BrowserClipboardService, _BrowserClipboardService.MAX_RESOURCE_STATE_SOURCE_LENGTH = 1000, _BrowserClipboardService);
BrowserClipboardService = BrowserClipboardService_1 = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILayoutService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILogService"])
], BrowserClipboardService);
;
 //# sourceMappingURL=clipboardService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IContextMenuService",
    ()=>IContextMenuService,
    "IContextViewService",
    ()=>IContextViewService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IContextViewService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('contextViewService');
const IContextMenuService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('contextMenuService'); //# sourceMappingURL=contextView.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContextViewHandler",
    ()=>ContextViewHandler,
    "ContextViewService",
    ()=>ContextViewService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$contextview$2f$contextview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
let ContextViewHandler = class ContextViewHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    // ContextView
    showContextView(delegate, container, shadowRoot) {
        let domPosition;
        if (container) {
            if (container === this.layoutService.getContainer((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(container))) {
                domPosition = 1 /* ContextViewDOMPosition.ABSOLUTE */ ;
            } else if (shadowRoot) {
                domPosition = 3 /* ContextViewDOMPosition.FIXED_SHADOW */ ;
            } else {
                domPosition = 2 /* ContextViewDOMPosition.FIXED */ ;
            }
        } else {
            domPosition = 1 /* ContextViewDOMPosition.ABSOLUTE */ ;
        }
        this.contextView.setContainer(container !== null && container !== void 0 ? container : this.layoutService.activeContainer, domPosition);
        this.contextView.show(delegate);
        const openContextView = {
            close: ()=>{
                if (this.openContextView === openContextView) {
                    this.hideContextView();
                }
            }
        };
        this.openContextView = openContextView;
        return openContextView;
    }
    layout() {
        this.contextView.layout();
    }
    hideContextView(data) {
        this.contextView.hide(data);
        this.openContextView = undefined;
    }
    constructor(layoutService){
        super();
        this.layoutService = layoutService;
        this.contextView = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$contextview$2f$contextview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextView"](this.layoutService.mainContainer, 1 /* ContextViewDOMPosition.ABSOLUTE */ ));
        this.layout();
        this._register(layoutService.onDidLayoutContainer(()=>this.layout()));
    }
};
ContextViewHandler = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILayoutService"])
], ContextViewHandler);
;
class ContextViewService extends ContextViewHandler {
    getContextViewElement() {
        return this.contextView.getViewElement();
    }
} //# sourceMappingURL=contextViewService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContextMenuHandler",
    ()=>ContextMenuHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class ContextMenuHandler {
    configure(options) {
        this.options = options;
    }
    showContextMenu(delegate) {
        const actions = delegate.getActions();
        if (!actions.length) {
            return; // Don't render an empty context menu
        }
        this.focusToReturn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
        let menu;
        const shadowRootElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(delegate.domForShadowRoot) ? delegate.domForShadowRoot : undefined;
        this.contextViewService.showContextView({
            getAnchor: ()=>delegate.getAnchor(),
            canRelayout: false,
            anchorAlignment: delegate.anchorAlignment,
            anchorAxisAlignment: delegate.anchorAxisAlignment,
            layer: delegate.layer,
            render: (container)=>{
                this.lastContainer = container;
                const className = delegate.getMenuClassName ? delegate.getMenuClassName() : '';
                if (className) {
                    container.className += ' ' + className;
                }
                // Render invisible div to block mouse interaction in the rest of the UI
                if (this.options.blockMouse) {
                    var _this_blockDisposable;
                    this.block = container.appendChild((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.context-view-block'));
                    this.block.style.position = 'fixed';
                    this.block.style.cursor = 'initial';
                    this.block.style.left = '0';
                    this.block.style.top = '0';
                    this.block.style.width = '100%';
                    this.block.style.height = '100%';
                    this.block.style.zIndex = '-1';
                    (_this_blockDisposable = this.blockDisposable) === null || _this_blockDisposable === void 0 ? void 0 : _this_blockDisposable.dispose();
                    this.blockDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.block, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>e.stopPropagation());
                }
                const menuDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
                const actionRunner = delegate.actionRunner || menuDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"]());
                actionRunner.onWillRun((evt)=>this.onActionRun(evt, !delegate.skipTelemetry), this, menuDisposables);
                actionRunner.onDidRun(this.onDidActionRun, this, menuDisposables);
                menu = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"](container, actions, {
                    actionViewItemProvider: delegate.getActionViewItem,
                    context: delegate.getActionsContext ? delegate.getActionsContext() : null,
                    actionRunner,
                    getKeyBinding: delegate.getKeyBinding ? delegate.getKeyBinding : (action)=>this.keybindingService.lookupKeybinding(action.id)
                }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuStyles"]);
                menu.onDidCancel(()=>this.contextViewService.hideContextView(true), null, menuDisposables);
                menu.onDidBlur(()=>this.contextViewService.hideContextView(true), null, menuDisposables);
                const targetWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(container);
                menuDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetWindow, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].BLUR, ()=>this.contextViewService.hideContextView(true)));
                menuDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetWindow, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>{
                    if (e.defaultPrevented) {
                        return;
                    }
                    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](targetWindow, e);
                    let element = event.target;
                    // Don't do anything as we are likely creating a context menu
                    if (event.rightButton) {
                        return;
                    }
                    while(element){
                        if (element === container) {
                            return;
                        }
                        element = element.parentElement;
                    }
                    this.contextViewService.hideContextView(true);
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(menuDisposables, menu);
            },
            focus: ()=>{
                menu === null || menu === void 0 ? void 0 : menu.focus(!!delegate.autoSelectFirstItem);
            },
            onHide: (didCancel)=>{
                var _delegate_onHide, _this_blockDisposable;
                (_delegate_onHide = delegate.onHide) === null || _delegate_onHide === void 0 ? void 0 : _delegate_onHide.call(delegate, !!didCancel);
                if (this.block) {
                    this.block.remove();
                    this.block = null;
                }
                (_this_blockDisposable = this.blockDisposable) === null || _this_blockDisposable === void 0 ? void 0 : _this_blockDisposable.dispose();
                this.blockDisposable = null;
                if (!!this.lastContainer && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])() === this.lastContainer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])(), this.lastContainer))) {
                    var _this_focusToReturn;
                    (_this_focusToReturn = this.focusToReturn) === null || _this_focusToReturn === void 0 ? void 0 : _this_focusToReturn.focus();
                }
                this.lastContainer = null;
            }
        }, shadowRootElement, !!shadowRootElement);
    }
    onActionRun(e, logTelemetry) {
        if (logTelemetry) {
            this.telemetryService.publicLog2('workbenchActionExecuted', {
                id: e.action.id,
                from: 'contextMenu'
            });
        }
        this.contextViewService.hideContextView(false);
    }
    onDidActionRun(e) {
        if (e.error && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCancellationError"])(e.error)) {
            this.notificationService.error(e.error);
        }
    }
    constructor(contextViewService, telemetryService, notificationService, keybindingService){
        this.contextViewService = contextViewService;
        this.telemetryService = telemetryService;
        this.notificationService = notificationService;
        this.keybindingService = keybindingService;
        this.focusToReturn = null;
        this.lastContainer = null;
        this.block = null;
        this.blockDisposable = null;
        this.options = {
            blockMouse: true
        };
    }
} //# sourceMappingURL=contextMenuHandler.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContextMenuMenuDelegate",
    ()=>ContextMenuMenuDelegate,
    "ContextMenuService",
    ()=>ContextMenuService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextMenuHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
let ContextMenuService = class ContextMenuService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get contextMenuHandler() {
        if (!this._contextMenuHandler) {
            this._contextMenuHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextMenuHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextMenuHandler"](this.contextViewService, this.telemetryService, this.notificationService, this.keybindingService);
        }
        return this._contextMenuHandler;
    }
    configure(options) {
        this.contextMenuHandler.configure(options);
    }
    // ContextMenu
    showContextMenu(delegate) {
        delegate = ContextMenuMenuDelegate.transform(delegate, this.menuService, this.contextKeyService);
        this.contextMenuHandler.showContextMenu({
            ...delegate,
            onHide: (didCancel)=>{
                var _delegate_onHide;
                (_delegate_onHide = delegate.onHide) === null || _delegate_onHide === void 0 ? void 0 : _delegate_onHide.call(delegate, didCancel);
                this._onDidHideContextMenu.fire();
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModifierKeyEmitter"].getInstance().resetKeyStatus();
        this._onDidShowContextMenu.fire();
    }
    constructor(telemetryService, notificationService, contextViewService, keybindingService, menuService, contextKeyService){
        super();
        this.telemetryService = telemetryService;
        this.notificationService = notificationService;
        this.contextViewService = contextViewService;
        this.keybindingService = keybindingService;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this._contextMenuHandler = undefined;
        this._onDidShowContextMenu = this._store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidShowContextMenu = this._onDidShowContextMenu.event;
        this._onDidHideContextMenu = this._store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidHideContextMenu = this._onDidHideContextMenu.event;
    }
};
ContextMenuService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextViewService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"])
], ContextMenuService);
;
var ContextMenuMenuDelegate;
(function(ContextMenuMenuDelegate) {
    function is(thing) {
        return thing && thing.menuId instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"];
    }
    function transform(delegate, menuService, globalContextKeyService) {
        if (!is(delegate)) {
            return delegate;
        }
        const { menuId, menuActionOptions, contextKeyService } = delegate;
        return {
            ...delegate,
            getActions: ()=>{
                let target = [];
                if (menuId) {
                    const menu = menuService.getMenuActions(menuId, contextKeyService !== null && contextKeyService !== void 0 ? contextKeyService : globalContextKeyService, menuActionOptions);
                    target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFlatContextMenuActions"])(menu);
                }
                if (!delegate.getActions) {
                    return target;
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].join(delegate.getActions(), target);
                }
            }
        };
    }
    ContextMenuMenuDelegate.transform = transform;
})(ContextMenuMenuDelegate || (ContextMenuMenuDelegate = {})); //# sourceMappingURL=contextMenuService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/action/common/action.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "isICommandActionToggleInfo",
    ()=>isICommandActionToggleInfo,
    "isLocalizedString",
    ()=>isLocalizedString
]);
function isLocalizedString(thing) {
    return thing && typeof thing === 'object' && typeof thing.original === 'string' && typeof thing.value === 'string';
}
function isICommandActionToggleInfo(thing) {
    return thing ? thing.condition !== undefined : false;
} //# sourceMappingURL=action.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/action/common/actionCommonCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Categories",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
const Categories = Object.freeze({
    View: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1623, 'View'),
    Help: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1624, 'Help'),
    Test: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1625, 'Test'),
    File: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1626, 'File'),
    Preferences: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1627, 'Preferences'),
    Developer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1628, "Developer")
}); //# sourceMappingURL=actionCommonCategories.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AbstractStorageService",
    ()=>AbstractStorageService,
    "IStorageService",
    ()=>IStorageService,
    "InMemoryStorageService",
    ()=>InMemoryStorageService,
    "TARGET_KEY",
    ()=>TARGET_KEY,
    "WillSaveStateReason",
    ()=>WillSaveStateReason,
    "loadKeyTargets",
    ()=>loadKeyTargets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/parts/storage/common/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
;
;
;
;
const TARGET_KEY = '__$__targetStorageMarker';
const IStorageService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('storageService');
var WillSaveStateReason;
(function(WillSaveStateReason) {
    /**
     * No specific reason to save state.
     */ WillSaveStateReason[WillSaveStateReason["NONE"] = 0] = "NONE";
    /**
     * A hint that the workbench is about to shutdown.
     */ WillSaveStateReason[WillSaveStateReason["SHUTDOWN"] = 1] = "SHUTDOWN";
})(WillSaveStateReason || (WillSaveStateReason = {}));
function loadKeyTargets(storage) {
    const keysRaw = storage.get(TARGET_KEY);
    if (keysRaw) {
        try {
            return JSON.parse(keysRaw);
        } catch (error) {
        // Fail gracefully
        }
    }
    return Object.create(null);
}
class AbstractStorageService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    onDidChangeValue(scope, key, disposable) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].filter(this._onDidChangeValue.event, (e)=>e.scope === scope && (key === undefined || e.key === key), disposable);
    }
    doFlushWhenIdle() {
        this.runFlushWhenIdle.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runWhenGlobalIdle"])(()=>{
            if (this.shouldFlushWhenIdle()) {
                this.flush();
            }
            // repeat
            this.flushWhenIdleScheduler.schedule();
        });
    }
    shouldFlushWhenIdle() {
        return true;
    }
    emitDidChangeValue(scope, event) {
        const { key, external } = event;
        // Specially handle `TARGET_KEY`
        if (key === TARGET_KEY) {
            // Clear our cached version which is now out of date
            switch(scope){
                case -1 /* StorageScope.APPLICATION */ :
                    this._applicationKeyTargets = undefined;
                    break;
                case 0 /* StorageScope.PROFILE */ :
                    this._profileKeyTargets = undefined;
                    break;
                case 1 /* StorageScope.WORKSPACE */ :
                    this._workspaceKeyTargets = undefined;
                    break;
            }
            // Emit as `didChangeTarget` event
            this._onDidChangeTarget.fire({
                scope
            });
        } else {
            this._onDidChangeValue.fire({
                scope,
                key,
                target: this.getKeyTargets(scope)[key],
                external
            });
        }
    }
    get(key, scope, fallbackValue) {
        var _this_getStorage;
        return (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.get(key, fallbackValue);
    }
    getBoolean(key, scope, fallbackValue) {
        var _this_getStorage;
        return (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.getBoolean(key, fallbackValue);
    }
    getNumber(key, scope, fallbackValue) {
        var _this_getStorage;
        return (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.getNumber(key, fallbackValue);
    }
    store(key, value, scope, target) {
        let external = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        // We remove the key for undefined/null values
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefinedOrNull"])(value)) {
            this.remove(key, scope, external);
            return;
        }
        // Update our datastructures but send events only after
        this.withPausedEmitters(()=>{
            var // Store actual value
            _this_getStorage;
            // Update key-target map
            this.updateKeyTarget(key, scope, target);
            (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.set(key, value, external);
        });
    }
    remove(key, scope) {
        let external = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        // Update our datastructures but send events only after
        this.withPausedEmitters(()=>{
            var // Remove actual key
            _this_getStorage;
            // Update key-target map
            this.updateKeyTarget(key, scope, undefined);
            (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.delete(key, external);
        });
    }
    withPausedEmitters(fn) {
        // Pause emitters
        this._onDidChangeValue.pause();
        this._onDidChangeTarget.pause();
        try {
            fn();
        } finally{
            // Resume emitters
            this._onDidChangeValue.resume();
            this._onDidChangeTarget.resume();
        }
    }
    updateKeyTarget(key, scope, target) {
        let external = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        // Add
        const keyTargets = this.getKeyTargets(scope);
        if (typeof target === 'number') {
            if (keyTargets[key] !== target) {
                var _this_getStorage;
                keyTargets[key] = target;
                (_this_getStorage = this.getStorage(scope)) === null || _this_getStorage === void 0 ? void 0 : _this_getStorage.set(TARGET_KEY, JSON.stringify(keyTargets), external);
            }
        } else {
            if (typeof keyTargets[key] === 'number') {
                var _this_getStorage1;
                delete keyTargets[key];
                (_this_getStorage1 = this.getStorage(scope)) === null || _this_getStorage1 === void 0 ? void 0 : _this_getStorage1.set(TARGET_KEY, JSON.stringify(keyTargets), external);
            }
        }
    }
    get workspaceKeyTargets() {
        if (!this._workspaceKeyTargets) {
            this._workspaceKeyTargets = this.loadKeyTargets(1 /* StorageScope.WORKSPACE */ );
        }
        return this._workspaceKeyTargets;
    }
    get profileKeyTargets() {
        if (!this._profileKeyTargets) {
            this._profileKeyTargets = this.loadKeyTargets(0 /* StorageScope.PROFILE */ );
        }
        return this._profileKeyTargets;
    }
    get applicationKeyTargets() {
        if (!this._applicationKeyTargets) {
            this._applicationKeyTargets = this.loadKeyTargets(-1 /* StorageScope.APPLICATION */ );
        }
        return this._applicationKeyTargets;
    }
    getKeyTargets(scope) {
        switch(scope){
            case -1 /* StorageScope.APPLICATION */ :
                return this.applicationKeyTargets;
            case 0 /* StorageScope.PROFILE */ :
                return this.profileKeyTargets;
            default:
                return this.workspaceKeyTargets;
        }
    }
    loadKeyTargets(scope) {
        const storage = this.getStorage(scope);
        return storage ? loadKeyTargets(storage) : Object.create(null);
    }
    async flush() {
        let reason = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : WillSaveStateReason.NONE;
        // Signal event to collect changes
        this._onWillSaveState.fire({
            reason
        });
        const applicationStorage = this.getStorage(-1 /* StorageScope.APPLICATION */ );
        const profileStorage = this.getStorage(0 /* StorageScope.PROFILE */ );
        const workspaceStorage = this.getStorage(1 /* StorageScope.WORKSPACE */ );
        switch(reason){
            // Unspecific reason: just wait when data is flushed
            case WillSaveStateReason.NONE:
                var _applicationStorage_whenFlushed, _profileStorage_whenFlushed, _workspaceStorage_whenFlushed;
                await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Promises"].settled([
                    (_applicationStorage_whenFlushed = applicationStorage === null || applicationStorage === void 0 ? void 0 : applicationStorage.whenFlushed()) !== null && _applicationStorage_whenFlushed !== void 0 ? _applicationStorage_whenFlushed : Promise.resolve(),
                    (_profileStorage_whenFlushed = profileStorage === null || profileStorage === void 0 ? void 0 : profileStorage.whenFlushed()) !== null && _profileStorage_whenFlushed !== void 0 ? _profileStorage_whenFlushed : Promise.resolve(),
                    (_workspaceStorage_whenFlushed = workspaceStorage === null || workspaceStorage === void 0 ? void 0 : workspaceStorage.whenFlushed()) !== null && _workspaceStorage_whenFlushed !== void 0 ? _workspaceStorage_whenFlushed : Promise.resolve()
                ]);
                break;
            // Shutdown: we want to flush as soon as possible
            // and not hit any delays that might be there
            case WillSaveStateReason.SHUTDOWN:
                var _applicationStorage_flush, _profileStorage_flush, _workspaceStorage_flush;
                await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Promises"].settled([
                    (_applicationStorage_flush = applicationStorage === null || applicationStorage === void 0 ? void 0 : applicationStorage.flush(0)) !== null && _applicationStorage_flush !== void 0 ? _applicationStorage_flush : Promise.resolve(),
                    (_profileStorage_flush = profileStorage === null || profileStorage === void 0 ? void 0 : profileStorage.flush(0)) !== null && _profileStorage_flush !== void 0 ? _profileStorage_flush : Promise.resolve(),
                    (_workspaceStorage_flush = workspaceStorage === null || workspaceStorage === void 0 ? void 0 : workspaceStorage.flush(0)) !== null && _workspaceStorage_flush !== void 0 ? _workspaceStorage_flush : Promise.resolve()
                ]);
                break;
        }
    }
    constructor(options = {
        flushInterval: AbstractStorageService.DEFAULT_FLUSH_INTERVAL
    }){
        super();
        this._onDidChangeValue = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseableEmitter"]());
        this._onDidChangeTarget = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseableEmitter"]());
        this._onWillSaveState = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onWillSaveState = this._onWillSaveState.event;
        this.runFlushWhenIdle = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this._workspaceKeyTargets = undefined;
        this._profileKeyTargets = undefined;
        this._applicationKeyTargets = undefined;
        this.flushWhenIdleScheduler = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>this.doFlushWhenIdle(), options.flushInterval));
    }
}
AbstractStorageService.DEFAULT_FLUSH_INTERVAL = 60 * 1000;
class InMemoryStorageService extends AbstractStorageService {
    getStorage(scope) {
        switch(scope){
            case -1 /* StorageScope.APPLICATION */ :
                return this.applicationStorage;
            case 0 /* StorageScope.PROFILE */ :
                return this.profileStorage;
            default:
                return this.workspaceStorage;
        }
    }
    shouldFlushWhenIdle() {
        return false;
    }
    constructor(){
        super();
        this.applicationStorage = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorageDatabase"](), {
            hint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageHint"].STORAGE_IN_MEMORY
        }));
        this.profileStorage = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorageDatabase"](), {
            hint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageHint"].STORAGE_IN_MEMORY
        }));
        this.workspaceStorage = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorageDatabase"](), {
            hint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$parts$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageHint"].STORAGE_IN_MEMORY
        }));
        this._register(this.workspaceStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(1 /* StorageScope.WORKSPACE */ , e)));
        this._register(this.profileStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(0 /* StorageScope.PROFILE */ , e)));
        this._register(this.applicationStorage.onDidChangeStorage((e)=>this.emitDidChangeValue(-1 /* StorageScope.APPLICATION */ , e)));
    }
} //# sourceMappingURL=storage.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/window/common/window.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTitleBarStyle",
    ()=>getTitleBarStyle,
    "getWindowControlsStyle",
    ()=>getWindowControlsStyle,
    "hasNativeContextMenu",
    ()=>hasNativeContextMenu,
    "hasNativeTitlebar",
    ()=>hasNativeTitlebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
function hasNativeContextMenu(configurationService, titleBarStyle) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"]) {
        return false;
    }
    const nativeTitle = hasNativeTitlebar(configurationService, titleBarStyle);
    const windowConfigurations = configurationService.getValue('window');
    if ((windowConfigurations === null || windowConfigurations === void 0 ? void 0 : windowConfigurations.menuStyle) === "native" /* MenuStyleConfiguration.NATIVE */ ) {
        // Do not support native menu with custom title bar
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && !nativeTitle) {
            return false;
        }
        return true;
    }
    if ((windowConfigurations === null || windowConfigurations === void 0 ? void 0 : windowConfigurations.menuStyle) === "custom" /* MenuStyleConfiguration.CUSTOM */ ) {
        return false;
    }
    return nativeTitle; // Default to inherit from title bar style
}
function hasNativeTitlebar(configurationService, titleBarStyle) {
    if (!titleBarStyle) {
        titleBarStyle = getTitleBarStyle(configurationService);
    }
    return titleBarStyle === "native" /* TitlebarStyle.NATIVE */ ;
}
function getTitleBarStyle(configurationService) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"]) {
        return "custom" /* TitlebarStyle.CUSTOM */ ;
    }
    const configuration = configurationService.getValue('window');
    if (configuration) {
        const useNativeTabs = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && configuration.nativeTabs === true;
        if (useNativeTabs) {
            return "native" /* TitlebarStyle.NATIVE */ ; // native tabs on sierra do not work with custom title style
        }
        const useSimpleFullScreen = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && configuration.nativeFullScreen === false;
        if (useSimpleFullScreen) {
            return "native" /* TitlebarStyle.NATIVE */ ; // simple fullscreen does not work well with custom title style (https://github.com/microsoft/vscode/issues/63291)
        }
        const style = configuration.titleBarStyle;
        if (style === "native" /* TitlebarStyle.NATIVE */  || style === "custom" /* TitlebarStyle.CUSTOM */ ) {
            return style;
        }
    }
    return "custom" /* TitlebarStyle.CUSTOM */ ; // default to custom on all OS
}
function getWindowControlsStyle(configurationService) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWeb"] || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] || getTitleBarStyle(configurationService) === "native" /* TitlebarStyle.NATIVE */ ) {
        return "native" /* WindowControlsStyle.NATIVE */ ; // only supported on Windows/Linux desktop with custom titlebar
    }
    const configuration = configurationService.getValue('window');
    const style = configuration === null || configuration === void 0 ? void 0 : configuration.controlsStyle;
    if (style === "custom" /* WindowControlsStyle.CUSTOM */  || style === "hidden" /* WindowControlsStyle.HIDDEN */ ) {
        return style;
    }
    return "native" /* WindowControlsStyle.NATIVE */ ; // default to native on all OS
} //# sourceMappingURL=window.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IHoverService",
    ()=>IHoverService,
    "WorkbenchHoverDelegate",
    ()=>WorkbenchHoverDelegate,
    "nativeHoverDelegate",
    ()=>nativeHoverDelegate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
const IHoverService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('hoverService');
let WorkbenchHoverDelegate = class WorkbenchHoverDelegate extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get delay() {
        var _this_hoverOptions;
        if (this.isInstantlyHovering()) {
            return 0; // show instantly when a hover was recently shown
        }
        if ((_this_hoverOptions = this.hoverOptions) === null || _this_hoverOptions === void 0 ? void 0 : _this_hoverOptions.dynamicDelay) {
            return (content)=>{
                var _this_hoverOptions_dynamicDelay, _this_hoverOptions;
                var _this_hoverOptions_dynamicDelay1;
                return (_this_hoverOptions_dynamicDelay1 = (_this_hoverOptions = this.hoverOptions) === null || _this_hoverOptions === void 0 ? void 0 : (_this_hoverOptions_dynamicDelay = _this_hoverOptions.dynamicDelay) === null || _this_hoverOptions_dynamicDelay === void 0 ? void 0 : _this_hoverOptions_dynamicDelay.call(_this_hoverOptions, content)) !== null && _this_hoverOptions_dynamicDelay1 !== void 0 ? _this_hoverOptions_dynamicDelay1 : this._delay;
            };
        }
        return this._delay;
    }
    showHover(options, focus) {
        const overrideOptions = typeof this.overrideOptions === 'function' ? this.overrideOptions(options, focus) : this.overrideOptions;
        // close hover on escape
        this.hoverDisposables.clear();
        const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(options.target) ? [
            options.target
        ] : options.target.targetElements;
        for (const target of targets){
            this.hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"])(target, 'keydown', (e)=>{
                if (e.equals(9 /* KeyCode.Escape */ )) {
                    this.hoverService.hideHover();
                }
            }));
        }
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(options.content) ? undefined : typeof options.content === 'string' ? options.content.toString() : options.content.value;
        return this.hoverService.showInstantHover({
            ...options,
            ...overrideOptions,
            persistence: {
                hideOnKeyDown: true,
                ...overrideOptions.persistence
            },
            id,
            appearance: {
                ...options.appearance,
                compact: true,
                skipFadeInAnimation: this.isInstantlyHovering(),
                ...overrideOptions.appearance
            }
        }, focus);
    }
    isInstantlyHovering() {
        var _this_hoverOptions;
        return !!((_this_hoverOptions = this.hoverOptions) === null || _this_hoverOptions === void 0 ? void 0 : _this_hoverOptions.instantHover) && Date.now() - this.lastHoverHideTime < this.timeLimit;
    }
    onDidHideHover() {
        var _this_hoverOptions;
        this.hoverDisposables.clear();
        if ((_this_hoverOptions = this.hoverOptions) === null || _this_hoverOptions === void 0 ? void 0 : _this_hoverOptions.instantHover) {
            this.lastHoverHideTime = Date.now();
        }
    }
    constructor(placement, hoverOptions, overrideOptions = {}, configurationService, hoverService){
        super();
        this.placement = placement;
        this.hoverOptions = hoverOptions;
        this.overrideOptions = overrideOptions;
        this.configurationService = configurationService;
        this.hoverService = hoverService;
        this.lastHoverHideTime = 0;
        this.timeLimit = 200;
        this.hoverDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this._delay = this.configurationService.getValue('workbench.hover.delay');
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration('workbench.hover.delay')) {
                this._delay = this.configurationService.getValue('workbench.hover.delay');
            }
        }));
    }
};
WorkbenchHoverDelegate = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(4, IHoverService)
], WorkbenchHoverDelegate);
;
const nativeHoverDelegate = {
    showHover: function() {
        throw new Error('Native hover function not implemented.');
    },
    delay: 0,
    showNativeHover: true
}; //# sourceMappingURL=hover.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/product/common/productService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IProductService",
    ()=>IProductService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IProductService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('productService'); //# sourceMappingURL=productService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/dnd/browser/dnd.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeDataTransfers",
    ()=>CodeDataTransfers,
    "Extensions",
    ()=>Extensions,
    "LocalSelectionTransfer",
    ()=>LocalSelectionTransfer,
    "getPathForFile",
    ()=>getPathForFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
;
;
const CodeDataTransfers = {
    EDITORS: 'CodeEditors',
    FILES: 'CodeFiles',
    SYMBOLS: 'application/vnd.code.symbols',
    MARKERS: 'application/vnd.code.diagnostics',
    NOTEBOOK_CELL_OUTPUT: 'notebook-cell-output',
    SCM_HISTORY_ITEM: 'scm-history-item'
};
class DragAndDropContributionRegistry {
}
const Extensions = {
    DragAndDropContribution: 'workbench.contributions.dragAndDrop'
};
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].add(Extensions.DragAndDropContribution, new DragAndDropContributionRegistry());
class LocalSelectionTransfer {
    static getInstance() {
        return LocalSelectionTransfer.INSTANCE;
    }
    hasData(proto) {
        return proto && proto === this.proto;
    }
    getData(proto) {
        if (this.hasData(proto)) {
            return this.data;
        }
        return undefined;
    }
    constructor(){
    // protect against external instantiation
    }
}
LocalSelectionTransfer.INSTANCE = new LocalSelectionTransfer();
function getPathForFile(file) {
    var _globalThis_vscode_webUtils, _globalThis_vscode;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNative"] && typeof ((_globalThis_vscode = globalThis.vscode) === null || _globalThis_vscode === void 0 ? void 0 : (_globalThis_vscode_webUtils = _globalThis_vscode.webUtils) === null || _globalThis_vscode_webUtils === void 0 ? void 0 : _globalThis_vscode_webUtils.getPathForFile) === 'function') {
        return globalThis.vscode.webUtils.getPathForFile(file);
    }
    return undefined;
} //#endregion
 //# sourceMappingURL=dnd.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IOpenerService",
    ()=>IOpenerService,
    "extractSelection",
    ()=>extractSelection,
    "withSelection",
    ()=>withSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IOpenerService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('openerService');
function withSelection(uri, selection) {
    return uri.with({
        fragment: "".concat(selection.startLineNumber, ",").concat(selection.startColumn).concat(selection.endLineNumber ? "-".concat(selection.endLineNumber).concat(selection.endColumn ? ",".concat(selection.endColumn) : '') : '')
    });
}
function extractSelection(uri) {
    let selection = undefined;
    const match = /^L?(\d+)(?:,(\d+))?(-L?(\d+)(?:,(\d+))?)?/.exec(uri.fragment);
    if (match) {
        selection = {
            startLineNumber: parseInt(match[1]),
            startColumn: match[2] ? parseInt(match[2]) : 1,
            endLineNumber: match[4] ? parseInt(match[4]) : undefined,
            endColumn: match[4] ? match[5] ? parseInt(match[5]) : 1 : undefined
        };
        uri = uri.with({
            fragment: ''
        });
    }
    return {
        selection,
        uri
    };
} //# sourceMappingURL=opener.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/browser/link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
let Link = class Link extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get enabled() {
        return this._enabled;
    }
    set enabled(enabled) {
        if (enabled) {
            this.el.setAttribute('aria-disabled', 'false');
            this.el.tabIndex = 0;
            this.el.style.pointerEvents = 'auto';
            this.el.style.opacity = '1';
            this.el.style.cursor = 'pointer';
            this._enabled = false;
        } else {
            this.el.setAttribute('aria-disabled', 'true');
            this.el.tabIndex = -1;
            this.el.style.pointerEvents = 'none';
            this.el.style.opacity = '0.4';
            this.el.style.cursor = 'default';
            this._enabled = true;
        }
        this._enabled = enabled;
    }
    setTooltip(title) {
        if (!this.hover && title) {
            this.hover = this._register(this._hoverService.setupManagedHover(this.hoverDelegate, this.el, title));
        } else if (this.hover) {
            this.hover.update(title);
        }
    }
    constructor(container, _link, options = {}, _hoverService, openerService){
        super();
        this._link = _link;
        this._hoverService = _hoverService;
        this._enabled = true;
        var _link_tabIndex;
        this.el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('a.monaco-link', {
            tabIndex: (_link_tabIndex = _link.tabIndex) !== null && _link_tabIndex !== void 0 ? _link_tabIndex : 0,
            href: _link.href
        }, _link.label));
        var _options_hoverDelegate;
        this.hoverDelegate = (_options_hoverDelegate = options.hoverDelegate) !== null && _options_hoverDelegate !== void 0 ? _options_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse');
        this.setTooltip(_link.title);
        this.el.setAttribute('role', 'button');
        const onClickEmitter = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'click'));
        const onKeyPress = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'keypress'));
        const onEnterPress = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onKeyPress.event, ($)=>$.map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)).filter((e)=>e.keyCode === 3 /* KeyCode.Enter */ ));
        const onTap = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap)).event;
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this.el));
        const onOpen = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(onClickEmitter.event, onEnterPress, onTap);
        this._register(onOpen((e)=>{
            if (!this.enabled) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            if (options === null || options === void 0 ? void 0 : options.opener) {
                options.opener(this._link.href);
            } else {
                openerService.open(this._link.href, {
                    allowCommands: true
                });
            }
        }));
        this.enabled = true;
    }
};
Link = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOpenerService"])
], Link);
;
 //# sourceMappingURL=link.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE",
    ()=>EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE,
    "IWorkspaceContextService",
    ()=>IWorkspaceContextService,
    "STANDALONE_EDITOR_WORKSPACE_ID",
    ()=>STANDALONE_EDITOR_WORKSPACE_ID,
    "UNKNOWN_EMPTY_WINDOW_WORKSPACE",
    ()=>UNKNOWN_EMPTY_WINDOW_WORKSPACE,
    "WORKSPACE_EXTENSION",
    ()=>WORKSPACE_EXTENSION,
    "WORKSPACE_FILTER",
    ()=>WORKSPACE_FILTER,
    "Workspace",
    ()=>Workspace,
    "WorkspaceFolder",
    ()=>WorkspaceFolder,
    "isEmptyWorkspaceIdentifier",
    ()=>isEmptyWorkspaceIdentifier,
    "isSingleFolderWorkspaceIdentifier",
    ()=>isSingleFolderWorkspaceIdentifier,
    "isStandaloneEditorWorkspace",
    ()=>isStandaloneEditorWorkspace,
    "isWorkspaceIdentifier",
    ()=>isWorkspaceIdentifier,
    "toWorkspaceIdentifier",
    ()=>toWorkspaceIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ternarySearchTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/ternarySearchTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
;
;
;
const IWorkspaceContextService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('contextService');
function isSingleFolderWorkspaceIdentifier(obj) {
    const singleFolderIdentifier = obj;
    return typeof (singleFolderIdentifier === null || singleFolderIdentifier === void 0 ? void 0 : singleFolderIdentifier.id) === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(singleFolderIdentifier.uri);
}
function isEmptyWorkspaceIdentifier(obj) {
    const emptyWorkspaceIdentifier = obj;
    return typeof (emptyWorkspaceIdentifier === null || emptyWorkspaceIdentifier === void 0 ? void 0 : emptyWorkspaceIdentifier.id) === 'string' && !isSingleFolderWorkspaceIdentifier(obj) && !isWorkspaceIdentifier(obj);
}
const EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE = {
    id: 'ext-dev'
};
const UNKNOWN_EMPTY_WINDOW_WORKSPACE = {
    id: 'empty-window'
};
function toWorkspaceIdentifier(arg0, isExtensionDevelopment) {
    // Empty workspace
    if (typeof arg0 === 'string' || typeof arg0 === 'undefined') {
        // With a backupPath, the basename is the empty workspace identifier
        if (typeof arg0 === 'string') {
            return {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(arg0)
            };
        }
        // Extension development empty windows have backups disabled
        // so we return a constant workspace identifier for extension
        // authors to allow to restore their workspace state even then.
        if (isExtensionDevelopment) {
            return EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE;
        }
        return UNKNOWN_EMPTY_WINDOW_WORKSPACE;
    }
    // Multi root
    const workspace = arg0;
    if (workspace.configuration) {
        return {
            id: workspace.id,
            configPath: workspace.configuration
        };
    }
    // Single folder
    if (workspace.folders.length === 1) {
        return {
            id: workspace.id,
            uri: workspace.folders[0].uri
        };
    }
    // Empty window
    return {
        id: workspace.id
    };
}
function isWorkspaceIdentifier(obj) {
    const workspaceIdentifier = obj;
    return typeof (workspaceIdentifier === null || workspaceIdentifier === void 0 ? void 0 : workspaceIdentifier.id) === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(workspaceIdentifier.configPath);
}
class Workspace {
    get folders() {
        return this._folders;
    }
    set folders(folders) {
        this._folders = folders;
        this.updateFoldersMap();
    }
    get id() {
        return this._id;
    }
    get transient() {
        return this._transient;
    }
    get configuration() {
        return this._configuration;
    }
    set configuration(configuration) {
        this._configuration = configuration;
    }
    getFolder(resource) {
        if (!resource) {
            return null;
        }
        return this.foldersMap.findSubstr(resource) || null;
    }
    updateFoldersMap() {
        this.foldersMap = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ternarySearchTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TernarySearchTree"].forUris(this.ignorePathCasing, ()=>true);
        for (const folder of this.folders){
            this.foldersMap.set(folder.uri, folder);
        }
    }
    toJSON() {
        return {
            id: this.id,
            folders: this.folders,
            transient: this.transient,
            configuration: this.configuration
        };
    }
    constructor(_id, folders, _transient, _configuration, ignorePathCasing){
        this._id = _id;
        this._transient = _transient;
        this._configuration = _configuration;
        this.ignorePathCasing = ignorePathCasing;
        this.foldersMap = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$ternarySearchTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TernarySearchTree"].forUris(this.ignorePathCasing, ()=>true);
        this.folders = folders;
    }
}
class WorkspaceFolder {
    toJSON() {
        return {
            uri: this.uri,
            name: this.name,
            index: this.index
        };
    }
    constructor(data, /**
     * Provides access to the original metadata for this workspace
     * folder. This can be different from the metadata provided in
     * this class:
     * - raw paths can be relative
     * - raw paths are not normalized
     */ raw){
        this.raw = raw;
        this.uri = data.uri;
        this.index = data.index;
        this.name = data.name;
    }
}
const WORKSPACE_EXTENSION = 'code-workspace';
const WORKSPACE_FILTER = [
    {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(2032, "Code Workspace"),
        extensions: [
            WORKSPACE_EXTENSION
        ]
    }
];
const STANDALONE_EDITOR_WORKSPACE_ID = '4064f6ec-cb38-4ad0-af64-ee6467e63c82';
function isStandaloneEditorWorkspace(workspace) {
    return workspace.id === STANDALONE_EDITOR_WORKSPACE_ID;
} //# sourceMappingURL=workspace.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/workspace/common/workspaceTrust.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IWorkspaceTrustManagementService",
    ()=>IWorkspaceTrustManagementService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IWorkspaceTrustManagementService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('workspaceTrustManagementService'); //# sourceMappingURL=workspaceTrust.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ILayoutService",
    ()=>ILayoutService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const ILayoutService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('layoutService'); //# sourceMappingURL=layoutService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actionWidget/browser/actionList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionList",
    ()=>ActionList,
    "acceptSelectedActionCommand",
    ()=>acceptSelectedActionCommand,
    "previewSelectedActionCommand",
    ()=>previewSelectedActionCommand
]);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const acceptSelectedActionCommand = 'acceptSelectedCodeAction';
const previewSelectedActionCommand = 'previewSelectedCodeAction';
class HeaderRenderer {
    get templateId() {
        return "header" /* ActionListItemKind.Header */ ;
    }
    renderTemplate(container) {
        container.classList.add('group-header');
        const text = document.createElement('span');
        container.append(text);
        return {
            container,
            text
        };
    }
    renderElement(element, _index, templateData) {
        var _element_group;
        var _element_group_title, _ref;
        templateData.text.textContent = (_ref = (_element_group_title = (_element_group = element.group) === null || _element_group === void 0 ? void 0 : _element_group.title) !== null && _element_group_title !== void 0 ? _element_group_title : element.label) !== null && _ref !== void 0 ? _ref : '';
    }
    disposeTemplate(_templateData) {
    // noop
    }
}
class SeparatorRenderer {
    get templateId() {
        return "separator" /* ActionListItemKind.Separator */ ;
    }
    renderTemplate(container) {
        container.classList.add('separator');
        const text = document.createElement('span');
        container.append(text);
        return {
            container,
            text
        };
    }
    renderElement(element, _index, templateData) {
        var _element_label;
        templateData.text.textContent = (_element_label = element.label) !== null && _element_label !== void 0 ? _element_label : '';
    }
    disposeTemplate(_templateData) {
    // noop
    }
}
let ActionItemRenderer = class ActionItemRenderer {
    get templateId() {
        return "action" /* ActionListItemKind.Action */ ;
    }
    renderTemplate(container) {
        container.classList.add(this.templateId);
        const icon = document.createElement('div');
        icon.className = 'icon';
        container.append(icon);
        const text = document.createElement('span');
        text.className = 'title';
        container.append(text);
        const description = document.createElement('span');
        description.className = 'description';
        container.append(description);
        const keybinding = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingLabel"](container, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"]);
        return {
            container,
            icon,
            text,
            description,
            keybinding
        };
    }
    renderElement(element, _index, data) {
        var _element_group, _this__keybindingService_lookupKeybinding, _this__keybindingService_lookupKeybinding1;
        if ((_element_group = element.group) === null || _element_group === void 0 ? void 0 : _element_group.icon) {
            data.icon.className = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(element.group.icon);
            if (element.group.icon.color) {
                data.icon.style.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssVariable"])(element.group.icon.color.id);
            }
        } else {
            data.icon.className = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].lightBulb);
            data.icon.style.color = 'var(--vscode-editorLightBulb-foreground)';
        }
        if (!element.item || !element.label) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVisibility"](!element.hideIcon, data.icon);
        data.text.textContent = stripNewlines(element.label);
        // if there is a keybinding, prioritize over description for now
        if (element.keybinding) {
            data.description.textContent = element.keybinding.getLabel();
            data.description.style.display = 'inline';
            data.description.style.letterSpacing = '0.5px';
        } else if (element.description) {
            data.description.textContent = stripNewlines(element.description);
            data.description.style.display = 'inline';
        } else {
            data.description.textContent = '';
            data.description.style.display = 'none';
        }
        const actionTitle = (_this__keybindingService_lookupKeybinding = this._keybindingService.lookupKeybinding(acceptSelectedActionCommand)) === null || _this__keybindingService_lookupKeybinding === void 0 ? void 0 : _this__keybindingService_lookupKeybinding.getLabel();
        const previewTitle = (_this__keybindingService_lookupKeybinding1 = this._keybindingService.lookupKeybinding(previewSelectedActionCommand)) === null || _this__keybindingService_lookupKeybinding1 === void 0 ? void 0 : _this__keybindingService_lookupKeybinding1.getLabel();
        data.container.classList.toggle('option-disabled', element.disabled);
        if (element.tooltip) {
            data.container.title = element.tooltip;
        } else if (element.disabled) {
            data.container.title = element.label;
        } else if (actionTitle && previewTitle) {
            if (this._supportsPreview && element.canPreview) {
                data.container.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1638, "{0} to Apply, {1} to Preview", actionTitle, previewTitle);
            } else {
                data.container.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1639, "{0} to Apply", actionTitle);
            }
        } else {
            data.container.title = '';
        }
    }
    disposeTemplate(templateData) {
        templateData.keybinding.dispose();
    }
    constructor(_supportsPreview, _keybindingService){
        this._supportsPreview = _supportsPreview;
        this._keybindingService = _keybindingService;
    }
};
ActionItemRenderer = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], ActionItemRenderer);
class AcceptSelectedEvent extends UIEvent {
    constructor(){
        super('acceptSelectedAction');
    }
}
class PreviewSelectedEvent extends UIEvent {
    constructor(){
        super('previewSelectedAction');
    }
}
function getKeyboardNavigationLabel(item) {
    // Filter out header vs. action vs. separator
    if (item.kind === 'action') {
        return item.label;
    }
    return undefined;
}
let ActionList = class ActionList extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    focusCondition(element) {
        return !element.disabled && element.kind === "action" /* ActionListItemKind.Action */ ;
    }
    hide(didCancel) {
        this._delegate.onHide(didCancel);
        this.cts.cancel();
        this._contextViewService.hideContextView();
    }
    layout(minWidth) {
        // Updating list height, depending on how many separators and headers there are.
        const numHeaders = this._allMenuItems.filter((item)=>item.kind === 'header').length;
        const numSeparators = this._allMenuItems.filter((item)=>item.kind === 'separator').length;
        const itemsHeight = this._allMenuItems.length * this._actionLineHeight;
        const heightWithHeaders = itemsHeight + numHeaders * this._headerLineHeight - numHeaders * this._actionLineHeight;
        const heightWithSeparators = heightWithHeaders + numSeparators * this._separatorLineHeight - numSeparators * this._actionLineHeight;
        this._list.layout(heightWithSeparators);
        let maxWidth = minWidth;
        if (this._allMenuItems.length >= 50) {
            maxWidth = 380;
        } else {
            // For finding width dynamically (not using resize observer)
            const itemWidths = this._allMenuItems.map((_, index)=>{
                const element = this.domNode.ownerDocument.getElementById(this._list.getElementID(index));
                if (element) {
                    element.style.width = 'auto';
                    const width = element.getBoundingClientRect().width;
                    element.style.width = '';
                    return width;
                }
                return 0;
            });
            // resize observer - can be used in the future since list widget supports dynamic height but not width
            maxWidth = Math.max(...itemWidths, minWidth);
        }
        const maxVhPrecentage = 0.7;
        const height = Math.min(heightWithSeparators, this._layoutService.getContainer(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](this.domNode)).clientHeight * maxVhPrecentage);
        this._list.layout(height, maxWidth);
        this.domNode.style.height = "".concat(height, "px");
        this._list.domFocus();
        return maxWidth;
    }
    focusPrevious() {
        this._list.focusPrevious(1, true, undefined, this.focusCondition);
    }
    focusNext() {
        this._list.focusNext(1, true, undefined, this.focusCondition);
    }
    acceptSelected(preview) {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const focusIndex = focused[0];
        const element = this._list.element(focusIndex);
        if (!this.focusCondition(element)) {
            return;
        }
        const event = preview ? new PreviewSelectedEvent() : new AcceptSelectedEvent();
        this._list.setSelection([
            focusIndex
        ], event);
    }
    onListSelection(e) {
        if (!e.elements.length) {
            return;
        }
        const element = e.elements[0];
        if (element.item && this.focusCondition(element)) {
            this._delegate.onSelect(element.item, e.browserEvent instanceof PreviewSelectedEvent);
        } else {
            this._list.setSelection([]);
        }
    }
    onFocus() {
        var _this__delegate_onFocus, _this__delegate;
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const focusIndex = focused[0];
        const element = this._list.element(focusIndex);
        (_this__delegate_onFocus = (_this__delegate = this._delegate).onFocus) === null || _this__delegate_onFocus === void 0 ? void 0 : _this__delegate_onFocus.call(_this__delegate, element.item);
    }
    async onListHover(e) {
        const element = e.element;
        if (element && element.item && this.focusCondition(element)) {
            if (this._delegate.onHover && !element.disabled && element.kind === "action" /* ActionListItemKind.Action */ ) {
                const result = await this._delegate.onHover(element.item, this.cts.token);
                element.canPreview = result ? result.canPreview : undefined;
            }
            if (e.index) {
                this._list.splice(e.index, 1, [
                    element
                ]);
            }
        }
        this._list.setFocus(typeof e.index === 'number' ? [
            e.index
        ] : []);
    }
    onListClick(e) {
        if (e.element && this.focusCondition(e.element)) {
            this._list.setFocus([]);
        }
    }
    constructor(user, preview, items, _delegate, accessibilityProvider, _contextViewService, _keybindingService, _layoutService){
        super();
        this._delegate = _delegate;
        this._contextViewService = _contextViewService;
        this._keybindingService = _keybindingService;
        this._layoutService = _layoutService;
        this._actionLineHeight = 28;
        this._headerLineHeight = 28;
        this._separatorLineHeight = 8;
        this.cts = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]());
        this.domNode = document.createElement('div');
        this.domNode.classList.add('actionList');
        const virtualDelegate = {
            getHeight: (element)=>{
                switch(element.kind){
                    case "header" /* ActionListItemKind.Header */ :
                        return this._headerLineHeight;
                    case "separator" /* ActionListItemKind.Separator */ :
                        return this._separatorLineHeight;
                    default:
                        return this._actionLineHeight;
                }
            },
            getTemplateId: (element)=>element.kind
        };
        this._list = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"](user, this.domNode, virtualDelegate, [
            new ActionItemRenderer(preview, this._keybindingService),
            new HeaderRenderer(),
            new SeparatorRenderer()
        ], {
            keyboardSupport: false,
            typeNavigationEnabled: true,
            keyboardNavigationLabelProvider: {
                getKeyboardNavigationLabel
            },
            accessibilityProvider: {
                getAriaLabel: (element)=>{
                    if (element.kind === "action" /* ActionListItemKind.Action */ ) {
                        let label = element.label ? stripNewlines(element === null || element === void 0 ? void 0 : element.label) : '';
                        if (element.description) {
                            label = label + ', ' + stripNewlines(element.description);
                        }
                        if (element.disabled) {
                            label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1640, "{0}, Disabled Reason: {1}", label, element.disabled);
                        }
                        return label;
                    }
                    return null;
                },
                getWidgetAriaLabel: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1641, "Action Widget"),
                getRole: (e)=>{
                    switch(e.kind){
                        case "action" /* ActionListItemKind.Action */ :
                            return 'option';
                        case "separator" /* ActionListItemKind.Separator */ :
                            return 'separator';
                        default:
                            return 'separator';
                    }
                },
                getWidgetRole: ()=>'listbox',
                ...accessibilityProvider
            }
        }));
        this._list.style(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultListStyles"]);
        this._register(this._list.onMouseClick((e)=>this.onListClick(e)));
        this._register(this._list.onMouseOver((e)=>this.onListHover(e)));
        this._register(this._list.onDidChangeFocus(()=>this.onFocus()));
        this._register(this._list.onDidChangeSelection((e)=>this.onListSelection(e)));
        this._allMenuItems = items;
        this._list.splice(0, this._list.length, this._allMenuItems);
        if (this._list.length) {
            this.focusNext();
        }
    }
};
ActionList = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextViewService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILayoutService"])
], ActionList);
;
function stripNewlines(str) {
    return str.replace(/\r\n|\r|\n/g, ' ');
} //# sourceMappingURL=actionList.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actionWidget/browser/actionWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IActionWidgetService",
    ()=>IActionWidgetService
]);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actionWidget$2f$browser$2f$actionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actionWidget/browser/actionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/inputColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorUtils.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerColor"])('actionBar.toggledBackground', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputActiveOptionBackground"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1642, 'Background color for toggled action items in action bar.'));
const ActionWidgetContextKeys = {
    Visible: new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('codeActionMenuVisible', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1643, "Whether the action widget list is visible"))
};
const IActionWidgetService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('actionWidgetService');
let ActionWidgetService = class ActionWidgetService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get isVisible() {
        return ActionWidgetContextKeys.Visible.getValue(this._contextKeyService) || false;
    }
    show(user, supportsPreview, items, delegate, anchor, container, actionBarActions, accessibilityProvider) {
        const visibleContext = ActionWidgetContextKeys.Visible.bindTo(this._contextKeyService);
        const list = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actionWidget$2f$browser$2f$actionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionList"], user, supportsPreview, items, delegate, accessibilityProvider);
        this._contextViewService.showContextView({
            getAnchor: ()=>anchor,
            render: (container)=>{
                visibleContext.set(true);
                return this._renderWidget(container, list, actionBarActions !== null && actionBarActions !== void 0 ? actionBarActions : []);
            },
            onHide: (didCancel)=>{
                visibleContext.reset();
                this._onWidgetClosed(didCancel);
            }
        }, container, false);
    }
    acceptSelected(preview) {
        var _this__list_value;
        (_this__list_value = this._list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.acceptSelected(preview);
    }
    focusPrevious() {
        var _this__list_value, _this__list;
        (_this__list = this._list) === null || _this__list === void 0 ? void 0 : (_this__list_value = _this__list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.focusPrevious();
    }
    focusNext() {
        var _this__list_value, _this__list;
        (_this__list = this._list) === null || _this__list === void 0 ? void 0 : (_this__list_value = _this__list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.focusNext();
    }
    hide(didCancel) {
        var _this__list_value;
        (_this__list_value = this._list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.hide(didCancel);
        this._list.clear();
    }
    _renderWidget(element, list, actionBarActions) {
        var _this__list_value;
        const widget = document.createElement('div');
        widget.classList.add('action-widget');
        element.appendChild(widget);
        this._list.value = list;
        if (this._list.value) {
            widget.appendChild(this._list.value.domNode);
        } else {
            throw new Error('List has no value');
        }
        const renderDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        // Invisible div to block mouse interaction in the rest of the UI
        const menuBlock = document.createElement('div');
        const block = element.appendChild(menuBlock);
        block.classList.add('context-view-block');
        renderDisposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](block, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>e.stopPropagation()));
        // Invisible div to block mouse interaction with the menu
        const pointerBlockDiv = document.createElement('div');
        const pointerBlock = element.appendChild(pointerBlockDiv);
        pointerBlock.classList.add('context-view-pointerBlock');
        // Removes block on click INSIDE widget or ANY mouse movement
        renderDisposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](pointerBlock, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_MOVE, ()=>pointerBlock.remove()));
        renderDisposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](pointerBlock, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, ()=>pointerBlock.remove()));
        // Action bar
        let actionBarWidth = 0;
        if (actionBarActions.length) {
            const actionBar = this._createActionBar('.action-widget-action-bar', actionBarActions);
            if (actionBar) {
                widget.appendChild(actionBar.getContainer().parentElement);
                renderDisposables.add(actionBar);
                actionBarWidth = actionBar.getContainer().offsetWidth;
            }
        }
        const width = (_this__list_value = this._list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.layout(actionBarWidth);
        widget.style.width = "".concat(width, "px");
        const focusTracker = renderDisposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFocus"](element));
        renderDisposables.add(focusTracker.onDidBlur(()=>this.hide(true)));
        return renderDisposables;
    }
    _createActionBar(className, actions) {
        if (!actions.length) {
            return undefined;
        }
        const container = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"](className);
        const actionBar = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionBar"](container);
        actionBar.push(actions, {
            icon: false,
            label: true
        });
        return actionBar;
    }
    _onWidgetClosed(didCancel) {
        var _this__list_value;
        (_this__list_value = this._list.value) === null || _this__list_value === void 0 ? void 0 : _this__list_value.hide(didCancel);
    }
    constructor(_contextViewService, _contextKeyService, _instantiationService){
        super();
        this._contextViewService = _contextViewService;
        this._contextKeyService = _contextKeyService;
        this._instantiationService = _instantiationService;
        this._list = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
    }
};
ActionWidgetService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextViewService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], ActionWidgetService);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(IActionWidgetService, ActionWidgetService, 1 /* InstantiationType.Delayed */ );
const weight = 100 /* KeybindingWeight.EditorContrib */  + 1000;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        accessor.get(IActionWidgetService).hide(true);
    }
    constructor(){
        super({
            id: 'hideCodeActionWidget',
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1644, "Hide action widget"),
            precondition: ActionWidgetContextKeys.Visible,
            keybinding: {
                weight,
                primary: 9 /* KeyCode.Escape */ ,
                secondary: [
                    1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
                ]
            }
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const widgetService = accessor.get(IActionWidgetService);
        if (widgetService instanceof ActionWidgetService) {
            widgetService.focusPrevious();
        }
    }
    constructor(){
        super({
            id: 'selectPrevCodeAction',
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1645, "Select previous action"),
            precondition: ActionWidgetContextKeys.Visible,
            keybinding: {
                weight,
                primary: 16 /* KeyCode.UpArrow */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 16 /* KeyCode.UpArrow */ 
                ],
                mac: {
                    primary: 16 /* KeyCode.UpArrow */ ,
                    secondary: [
                        2048 /* KeyMod.CtrlCmd */  | 16 /* KeyCode.UpArrow */ ,
                        256 /* KeyMod.WinCtrl */  | 46 /* KeyCode.KeyP */ 
                    ]
                }
            }
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const widgetService = accessor.get(IActionWidgetService);
        if (widgetService instanceof ActionWidgetService) {
            widgetService.focusNext();
        }
    }
    constructor(){
        super({
            id: 'selectNextCodeAction',
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1646, "Select next action"),
            precondition: ActionWidgetContextKeys.Visible,
            keybinding: {
                weight,
                primary: 18 /* KeyCode.DownArrow */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ 
                ],
                mac: {
                    primary: 18 /* KeyCode.DownArrow */ ,
                    secondary: [
                        2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ ,
                        256 /* KeyMod.WinCtrl */  | 44 /* KeyCode.KeyN */ 
                    ]
                }
            }
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const widgetService = accessor.get(IActionWidgetService);
        if (widgetService instanceof ActionWidgetService) {
            widgetService.acceptSelected();
        }
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actionWidget$2f$browser$2f$actionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceptSelectedActionCommand"],
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1647, "Accept selected action"),
            precondition: ActionWidgetContextKeys.Visible,
            keybinding: {
                weight,
                primary: 3 /* KeyCode.Enter */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 89 /* KeyCode.Period */ 
                ]
            }
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const widgetService = accessor.get(IActionWidgetService);
        if (widgetService instanceof ActionWidgetService) {
            widgetService.acceptSelected(true);
        }
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actionWidget$2f$browser$2f$actionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewSelectedActionCommand"],
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(1648, "Preview selected action"),
            precondition: ActionWidgetContextKeys.Visible,
            keybinding: {
                weight,
                primary: 2048 /* KeyMod.CtrlCmd */  | 3 /* KeyCode.Enter */ 
            }
        });
    }
}); //# sourceMappingURL=actionWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IMarkerData",
    ()=>IMarkerData,
    "IMarkerService",
    ()=>IMarkerService,
    "MarkerSeverity",
    ()=>MarkerSeverity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/severity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
;
;
var MarkerSeverity;
(function(MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
(function(MarkerSeverity) {
    function compare(a, b) {
        return b - a;
    }
    MarkerSeverity.compare = compare;
    const _displayStrings = Object.create(null);
    _displayStrings[MarkerSeverity.Error] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1715, "Error");
    _displayStrings[MarkerSeverity.Warning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1716, "Warning");
    _displayStrings[MarkerSeverity.Info] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1717, "Info");
    function toString(a) {
        return _displayStrings[a] || '';
    }
    MarkerSeverity.toString = toString;
    const _displayStringsPlural = Object.create(null);
    _displayStringsPlural[MarkerSeverity.Error] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1718, "Errors");
    _displayStringsPlural[MarkerSeverity.Warning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1719, "Warnings");
    _displayStringsPlural[MarkerSeverity.Info] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1720, "Infos");
    function toStringPlural(a) {
        return _displayStringsPlural[a] || '';
    }
    MarkerSeverity.toStringPlural = toStringPlural;
    function fromSeverity(severity) {
        switch(severity){
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Error:
                return MarkerSeverity.Error;
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Warning:
                return MarkerSeverity.Warning;
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Info:
                return MarkerSeverity.Info;
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Ignore:
                return MarkerSeverity.Hint;
        }
    }
    MarkerSeverity.fromSeverity = fromSeverity;
    function toSeverity(severity) {
        switch(severity){
            case MarkerSeverity.Error:
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Error;
            case MarkerSeverity.Warning:
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Warning;
            case MarkerSeverity.Info:
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Info;
            case MarkerSeverity.Hint:
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Ignore;
        }
    }
    MarkerSeverity.toSeverity = toSeverity;
})(MarkerSeverity || (MarkerSeverity = {}));
var IMarkerData;
(function(IMarkerData) {
    const emptyString = '';
    function makeKey(markerData) {
        return makeKeyOptionalMessage(markerData, true);
    }
    IMarkerData.makeKey = makeKey;
    function makeKeyOptionalMessage(markerData, useMessage) {
        const result = [
            emptyString
        ];
        if (markerData.source) {
            result.push(markerData.source.replace('¦', '\\¦'));
        } else {
            result.push(emptyString);
        }
        if (markerData.code) {
            if (typeof markerData.code === 'string') {
                result.push(markerData.code.replace('¦', '\\¦'));
            } else {
                result.push(markerData.code.value.replace('¦', '\\¦'));
            }
        } else {
            result.push(emptyString);
        }
        if (markerData.severity !== undefined && markerData.severity !== null) {
            result.push(MarkerSeverity.toString(markerData.severity));
        } else {
            result.push(emptyString);
        }
        // Modifed to not include the message as part of the marker key to work around
        // https://github.com/microsoft/vscode/issues/77475
        if (markerData.message && useMessage) {
            result.push(markerData.message.replace('¦', '\\¦'));
        } else {
            result.push(emptyString);
        }
        if (markerData.startLineNumber !== undefined && markerData.startLineNumber !== null) {
            result.push(markerData.startLineNumber.toString());
        } else {
            result.push(emptyString);
        }
        if (markerData.startColumn !== undefined && markerData.startColumn !== null) {
            result.push(markerData.startColumn.toString());
        } else {
            result.push(emptyString);
        }
        if (markerData.endLineNumber !== undefined && markerData.endLineNumber !== null) {
            result.push(markerData.endLineNumber.toString());
        } else {
            result.push(emptyString);
        }
        if (markerData.endColumn !== undefined && markerData.endColumn !== null) {
            result.push(markerData.endColumn.toString());
        } else {
            result.push(emptyString);
        }
        result.push(emptyString);
        return result.join('¦');
    }
    IMarkerData.makeKeyOptionalMessage = makeKeyOptionalMessage;
})(IMarkerData || (IMarkerData = {}));
const IMarkerService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('markerService'); //# sourceMappingURL=markers.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/markers/common/markerService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MarkerService",
    ()=>MarkerService,
    "unsupportedSchemas",
    ()=>unsupportedSchemas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const unsupportedSchemas = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].inMemory,
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeSourceControl,
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].walkThrough,
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].walkThroughSnippet,
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeChatCodeBlock,
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeTerminal
]);
class DoubleResourceMap {
    set(resource, owner, value) {
        let ownerMap = this._byResource.get(resource);
        if (!ownerMap) {
            ownerMap = new Map();
            this._byResource.set(resource, ownerMap);
        }
        ownerMap.set(owner, value);
        let resourceMap = this._byOwner.get(owner);
        if (!resourceMap) {
            resourceMap = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
            this._byOwner.set(owner, resourceMap);
        }
        resourceMap.set(resource, value);
    }
    get(resource, owner) {
        const ownerMap = this._byResource.get(resource);
        return ownerMap === null || ownerMap === void 0 ? void 0 : ownerMap.get(owner);
    }
    delete(resource, owner) {
        let removedA = false;
        let removedB = false;
        const ownerMap = this._byResource.get(resource);
        if (ownerMap) {
            removedA = ownerMap.delete(owner);
        }
        const resourceMap = this._byOwner.get(owner);
        if (resourceMap) {
            removedB = resourceMap.delete(resource);
        }
        if (removedA !== removedB) {
            throw new Error('illegal state');
        }
        return removedA && removedB;
    }
    values(key) {
        if (typeof key === 'string') {
            var _this__byOwner_get;
            var _this__byOwner_get_values;
            return (_this__byOwner_get_values = (_this__byOwner_get = this._byOwner.get(key)) === null || _this__byOwner_get === void 0 ? void 0 : _this__byOwner_get.values()) !== null && _this__byOwner_get_values !== void 0 ? _this__byOwner_get_values : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].empty();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(key)) {
            var _this__byResource_get;
            var _this__byResource_get_values;
            return (_this__byResource_get_values = (_this__byResource_get = this._byResource.get(key)) === null || _this__byResource_get === void 0 ? void 0 : _this__byResource_get.values()) !== null && _this__byResource_get_values !== void 0 ? _this__byResource_get_values : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].empty();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].map(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].concat(...this._byOwner.values()), (map)=>map[1]);
    }
    constructor(){
        this._byResource = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
        this._byOwner = new Map();
    }
}
class MarkerStats {
    dispose() {
        this._subscription.dispose();
    }
    _update(resources) {
        for (const resource of resources){
            const oldStats = this._data.get(resource);
            if (oldStats) {
                this._substract(oldStats);
            }
            const newStats = this._resourceStats(resource);
            this._add(newStats);
            this._data.set(resource, newStats);
        }
    }
    _resourceStats(resource) {
        const result = {
            errors: 0,
            warnings: 0,
            infos: 0,
            unknowns: 0
        };
        // TODO this is a hack
        if (unsupportedSchemas.has(resource.scheme)) {
            return result;
        }
        for (const { severity } of this._service.read({
            resource
        })){
            if (severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Error) {
                result.errors += 1;
            } else if (severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Warning) {
                result.warnings += 1;
            } else if (severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Info) {
                result.infos += 1;
            } else {
                result.unknowns += 1;
            }
        }
        return result;
    }
    _substract(op) {
        this.errors -= op.errors;
        this.warnings -= op.warnings;
        this.infos -= op.infos;
        this.unknowns -= op.unknowns;
    }
    _add(op) {
        this.errors += op.errors;
        this.warnings += op.warnings;
        this.infos += op.infos;
        this.unknowns += op.unknowns;
    }
    constructor(service){
        this.errors = 0;
        this.infos = 0;
        this.warnings = 0;
        this.unknowns = 0;
        this._data = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
        this._service = service;
        this._subscription = service.onMarkerChanged(this._update, this);
    }
}
class MarkerService {
    dispose() {
        this._stats.dispose();
        this._onMarkerChanged.dispose();
    }
    remove(owner, resources) {
        for (const resource of resources || []){
            this.changeOne(owner, resource, []);
        }
    }
    changeOne(owner, resource, markerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFalsyOrEmpty"])(markerData)) {
            // remove marker for this (owner,resource)-tuple
            const removed = this._data.delete(resource, owner);
            if (removed) {
                this._onMarkerChanged.fire([
                    resource
                ]);
            }
        } else {
            // insert marker for this (owner,resource)-tuple
            const markers = [];
            for (const data of markerData){
                const marker = MarkerService._toMarker(owner, resource, data);
                if (marker) {
                    markers.push(marker);
                }
            }
            this._data.set(resource, owner, markers);
            this._onMarkerChanged.fire([
                resource
            ]);
        }
    }
    static _toMarker(owner, resource, data) {
        let { code, severity, message, source, startLineNumber, startColumn, endLineNumber, endColumn, relatedInformation, tags, origin } = data;
        if (!message) {
            return undefined;
        }
        // santize data
        startLineNumber = startLineNumber > 0 ? startLineNumber : 1;
        startColumn = startColumn > 0 ? startColumn : 1;
        endLineNumber = endLineNumber >= startLineNumber ? endLineNumber : startLineNumber;
        endColumn = endColumn > 0 ? endColumn : startColumn;
        return {
            resource,
            owner,
            code,
            severity,
            message,
            source,
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn,
            relatedInformation,
            tags,
            origin
        };
    }
    changeAll(owner, data) {
        const changes = [];
        // remove old marker
        const existing = this._data.values(owner);
        if (existing) {
            for (const data of existing){
                const first = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].first(data);
                if (first) {
                    changes.push(first.resource);
                    this._data.delete(first.resource, owner);
                }
            }
        }
        // add new markers
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(data)) {
            // group by resource
            const groups = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
            for (const { resource, marker: markerData } of data){
                const marker = MarkerService._toMarker(owner, resource, markerData);
                if (!marker) {
                    continue;
                }
                const array = groups.get(resource);
                if (!array) {
                    groups.set(resource, [
                        marker
                    ]);
                    changes.push(resource);
                } else {
                    array.push(marker);
                }
            }
            // insert all
            for (const [resource, value] of groups){
                this._data.set(resource, owner, value);
            }
        }
        if (changes.length > 0) {
            this._onMarkerChanged.fire(changes);
        }
    }
    /**
     * Creates an information marker for filtered resources
     */ _createFilteredMarker(resource, reasons) {
        const message = reasons.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1721, "Problems are paused because: \"{0}\"", reasons[0]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1722, "Problems are paused because: \"{0}\" and {1} more", reasons[0], reasons.length - 1);
        return {
            owner: 'markersFilter',
            resource,
            severity: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Info,
            message,
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: 1,
            endColumn: 1
        };
    }
    read() {
        let filter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Object.create(null);
        let { owner, resource, severities, take } = filter;
        if (!take || take < 0) {
            take = -1;
        }
        if (owner && resource) {
            // exactly one owner AND resource
            const reasons = !filter.ignoreResourceFilters ? this._filteredResources.get(resource) : undefined;
            if (reasons === null || reasons === void 0 ? void 0 : reasons.length) {
                const infoMarker = this._createFilteredMarker(resource, reasons);
                return [
                    infoMarker
                ];
            }
            const data = this._data.get(resource, owner);
            if (!data) {
                return [];
            }
            const result = [];
            for (const marker of data){
                if (take > 0 && result.length === take) {
                    break;
                }
                const reasons = !filter.ignoreResourceFilters ? this._filteredResources.get(resource) : undefined;
                if (reasons === null || reasons === void 0 ? void 0 : reasons.length) {
                    result.push(this._createFilteredMarker(resource, reasons));
                } else if (MarkerService._accept(marker, severities)) {
                    result.push(marker);
                }
            }
            return result;
        } else {
            // of one resource OR owner
            const iterable = !owner && !resource ? this._data.values() : this._data.values(resource !== null && resource !== void 0 ? resource : owner);
            const result = [];
            const filtered = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceSet"]();
            for (const markers of iterable){
                for (const data of markers){
                    if (filtered.has(data.resource)) {
                        continue;
                    }
                    if (take > 0 && result.length === take) {
                        break;
                    }
                    const reasons = !filter.ignoreResourceFilters ? this._filteredResources.get(data.resource) : undefined;
                    if (reasons === null || reasons === void 0 ? void 0 : reasons.length) {
                        result.push(this._createFilteredMarker(data.resource, reasons));
                        filtered.add(data.resource);
                    } else if (MarkerService._accept(data, severities)) {
                        result.push(data);
                    }
                }
            }
            return result;
        }
    }
    static _accept(marker, severities) {
        return severities === undefined || (severities & marker.severity) === marker.severity;
    }
    // --- event debounce logic
    static _merge(all) {
        const set = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
        for (const array of all){
            for (const item of array){
                set.set(item, true);
            }
        }
        return Array.from(set.keys());
    }
    constructor(){
        this._onMarkerChanged = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebounceEmitter"]({
            delay: 0,
            merge: MarkerService._merge
        });
        this.onMarkerChanged = this._onMarkerChanged.event;
        this._data = new DoubleResourceMap();
        this._stats = new MarkerStats(this);
        this._filteredResources = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
    }
} //# sourceMappingURL=markerService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/environment/common/environment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IEnvironmentService",
    ()=>IEnvironmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IEnvironmentService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('environmentService'); //# sourceMappingURL=environment.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/list/browser/listService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IListService",
    ()=>IListService,
    "ListService",
    ()=>ListService,
    "RawWorkbenchListFocusContextKey",
    ()=>RawWorkbenchListFocusContextKey,
    "RawWorkbenchListScrollAtBoundaryContextKey",
    ()=>RawWorkbenchListScrollAtBoundaryContextKey,
    "WorkbenchAsyncDataTree",
    ()=>WorkbenchAsyncDataTree,
    "WorkbenchCompressibleAsyncDataTree",
    ()=>WorkbenchCompressibleAsyncDataTree,
    "WorkbenchCompressibleObjectTree",
    ()=>WorkbenchCompressibleObjectTree,
    "WorkbenchDataTree",
    ()=>WorkbenchDataTree,
    "WorkbenchList",
    ()=>WorkbenchList,
    "WorkbenchListDoubleSelection",
    ()=>WorkbenchListDoubleSelection,
    "WorkbenchListFocusContextKey",
    ()=>WorkbenchListFocusContextKey,
    "WorkbenchListHasSelectionOrFocus",
    ()=>WorkbenchListHasSelectionOrFocus,
    "WorkbenchListMultiSelection",
    ()=>WorkbenchListMultiSelection,
    "WorkbenchListScrollAtBottomContextKey",
    ()=>WorkbenchListScrollAtBottomContextKey,
    "WorkbenchListScrollAtTopContextKey",
    ()=>WorkbenchListScrollAtTopContextKey,
    "WorkbenchListSelectionNavigation",
    ()=>WorkbenchListSelectionNavigation,
    "WorkbenchListSupportsFind",
    ()=>WorkbenchListSupportsFind,
    "WorkbenchListSupportsMultiSelectContextKey",
    ()=>WorkbenchListSupportsMultiSelectContextKey,
    "WorkbenchObjectTree",
    ()=>WorkbenchObjectTree,
    "WorkbenchPagedList",
    ()=>WorkbenchPagedList,
    "WorkbenchTable",
    ()=>WorkbenchTable,
    "WorkbenchTreeElementCanCollapse",
    ()=>WorkbenchTreeElementCanCollapse,
    "WorkbenchTreeElementCanExpand",
    ()=>WorkbenchTreeElementCanExpand,
    "WorkbenchTreeElementHasChild",
    ()=>WorkbenchTreeElementHasChild,
    "WorkbenchTreeElementHasParent",
    ()=>WorkbenchTreeElementHasParent,
    "WorkbenchTreeFindOpen",
    ()=>WorkbenchTreeFindOpen,
    "WorkbenchTreeStickyScrollFocused",
    ()=>WorkbenchTreeStickyScrollFocused
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listPaging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listPaging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$table$2f$tableWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/table/tableWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$asyncDataTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/asyncDataTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$dataTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/dataTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$objectTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const IListService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('listService');
class ListService {
    get lastFocusedList() {
        return this._lastFocusedWidget;
    }
    setLastFocusedList(widget) {
        var _this__lastFocusedWidget, _this__lastFocusedWidget1;
        if (widget === this._lastFocusedWidget) {
            return;
        }
        (_this__lastFocusedWidget = this._lastFocusedWidget) === null || _this__lastFocusedWidget === void 0 ? void 0 : _this__lastFocusedWidget.getHTMLElement().classList.remove('last-focused');
        this._lastFocusedWidget = widget;
        (_this__lastFocusedWidget1 = this._lastFocusedWidget) === null || _this__lastFocusedWidget1 === void 0 ? void 0 : _this__lastFocusedWidget1.getHTMLElement().classList.add('last-focused');
    }
    register(widget, extraContextKeys) {
        if (this.lists.some((l)=>l.widget === widget)) {
            throw new Error('Cannot register the same widget multiple times');
        }
        // Keep in our lists list
        const registeredList = {
            widget,
            extraContextKeys
        };
        this.lists.push(registeredList);
        // Check for currently being focused
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveElement"])(widget.getHTMLElement())) {
            this.setLastFocusedList(widget);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(widget.onDidFocus(()=>this.setLastFocusedList(widget)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this.lists.splice(this.lists.indexOf(registeredList), 1)), widget.onDidDispose(()=>{
            this.lists = this.lists.filter((l)=>l !== registeredList);
            if (this._lastFocusedWidget === widget) {
                this.setLastFocusedList(undefined);
            }
        }));
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(){
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.lists = [];
        this._lastFocusedWidget = undefined;
    }
}
const RawWorkbenchListScrollAtBoundaryContextKey = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listScrollAtBoundary', 'none');
const WorkbenchListScrollAtTopContextKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('top'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
const WorkbenchListScrollAtBottomContextKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('bottom'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
const RawWorkbenchListFocusContextKey = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listFocus', true);
const WorkbenchTreeStickyScrollFocused = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treestickyScrollFocused', false);
const WorkbenchListSupportsMultiSelectContextKey = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listSupportsMultiselect', true);
const WorkbenchListFocusContextKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(RawWorkbenchListFocusContextKey, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputFocusedContextKey"]), WorkbenchTreeStickyScrollFocused.negate());
const WorkbenchListHasSelectionOrFocus = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listHasSelectionOrFocus', false);
const WorkbenchListDoubleSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listDoubleSelection', false);
const WorkbenchListMultiSelection = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listMultiSelection', false);
const WorkbenchListSelectionNavigation = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listSelectionNavigation', false);
const WorkbenchListSupportsFind = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('listSupportsFind', true);
const WorkbenchTreeElementCanCollapse = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treeElementCanCollapse', false);
const WorkbenchTreeElementHasParent = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treeElementHasParent', false);
const WorkbenchTreeElementCanExpand = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treeElementCanExpand', false);
const WorkbenchTreeElementHasChild = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treeElementHasChild', false);
const WorkbenchTreeFindOpen = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('treeFindOpen', false);
const WorkbenchListTypeNavigationModeKey = 'listTypeNavigationMode';
/**
 * @deprecated in favor of WorkbenchListTypeNavigationModeKey
 */ const WorkbenchListAutomaticKeyboardNavigationLegacyKey = 'listAutomaticKeyboardNavigation';
function createScopedContextKeyService(contextKeyService, widget) {
    const result = contextKeyService.createScoped(widget.getHTMLElement());
    RawWorkbenchListFocusContextKey.bindTo(result);
    return result;
}
function createScrollObserver(contextKeyService, widget) {
    const listScrollAt = RawWorkbenchListScrollAtBoundaryContextKey.bindTo(contextKeyService);
    const update = ()=>{
        const atTop = widget.scrollTop === 0;
        // We need a threshold `1` since scrollHeight is rounded.
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
        const atBottom = widget.scrollHeight - widget.renderHeight - widget.scrollTop < 1;
        if (atTop && atBottom) {
            listScrollAt.set('both');
        } else if (atTop) {
            listScrollAt.set('top');
        } else if (atBottom) {
            listScrollAt.set('bottom');
        } else {
            listScrollAt.set('none');
        }
    };
    update();
    return widget.onDidScroll(update);
}
const multiSelectModifierSettingKey = 'workbench.list.multiSelectModifier';
const openModeSettingKey = 'workbench.list.openMode';
const horizontalScrollingKey = 'workbench.list.horizontalScrolling';
const defaultFindModeSettingKey = 'workbench.list.defaultFindMode';
const typeNavigationModeSettingKey = 'workbench.list.typeNavigationMode';
/** @deprecated in favor of `workbench.list.defaultFindMode` and `workbench.list.typeNavigationMode` */ const keyboardNavigationSettingKey = 'workbench.list.keyboardNavigation';
const scrollByPageKey = 'workbench.list.scrollByPage';
const defaultFindMatchTypeSettingKey = 'workbench.list.defaultFindMatchType';
const treeIndentKey = 'workbench.tree.indent';
const treeRenderIndentGuidesKey = 'workbench.tree.renderIndentGuides';
const listSmoothScrolling = 'workbench.list.smoothScrolling';
const mouseWheelScrollSensitivityKey = 'workbench.list.mouseWheelScrollSensitivity';
const fastScrollSensitivityKey = 'workbench.list.fastScrollSensitivity';
const treeExpandMode = 'workbench.tree.expandMode';
const treeStickyScroll = 'workbench.tree.enableStickyScroll';
const treeStickyScrollMaxElements = 'workbench.tree.stickyScrollMaxItemCount';
function useAltAsMultipleSelectionModifier(configurationService) {
    return configurationService.getValue(multiSelectModifierSettingKey) === 'alt';
}
class MultipleSelectionController extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(this.configurationService);
            }
        }));
    }
    isSelectionSingleChangeEvent(event) {
        if (this.useAltAsMultipleSelectionModifier) {
            return event.browserEvent.altKey;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionSingleChangeEvent"])(event);
    }
    isSelectionRangeChangeEvent(event) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionRangeChangeEvent"])(event);
    }
    constructor(configurationService){
        super();
        this.configurationService = configurationService;
        this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.registerListeners();
    }
}
function toWorkbenchListOptions(accessor, options) {
    const configurationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]);
    const keybindingService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]);
    const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    var _options_multipleSelectionController;
    const result = {
        ...options,
        keyboardNavigationDelegate: {
            mightProducePrintableCharacter (e) {
                return keybindingService.mightProducePrintableCharacter(e);
            }
        },
        smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)),
        mouseWheelScrollSensitivity: configurationService.getValue(mouseWheelScrollSensitivityKey),
        fastScrollSensitivity: configurationService.getValue(fastScrollSensitivityKey),
        multipleSelectionController: (_options_multipleSelectionController = options.multipleSelectionController) !== null && _options_multipleSelectionController !== void 0 ? _options_multipleSelectionController : disposables.add(new MultipleSelectionController(configurationService)),
        keyboardNavigationEventFilter: createKeyboardNavigationEventFilter(keybindingService),
        scrollByPage: Boolean(configurationService.getValue(scrollByPageKey))
    };
    return [
        result,
        disposables
    ];
}
let WorkbenchList = class WorkbenchList extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"] {
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListStyles"])(styles) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultListStyles"]);
    }
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService){
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling
        });
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(()=>{
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(()=>{
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = {
                    ...options,
                    horizontalScrolling
                };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = {
                    ...options,
                    scrollByPage
                };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = {
                    ...options,
                    smoothScrolling
                };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = {
                    ...options,
                    mouseWheelScrollSensitivity
                };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = {
                    ...options,
                    fastScrollSensitivity
                };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, {
            configurationService,
            ...options
        });
        this.disposables.add(this.navigator);
    }
};
WorkbenchList = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(6, IListService),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], WorkbenchList);
;
let WorkbenchPagedList = class WorkbenchPagedList extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listPaging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PagedList"] {
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListStyles"])(styles) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultListStyles"]);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService){
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling
        });
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this.widget));
        this.horizontalScrolling = options.horizontalScrolling;
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = {
                    ...options,
                    horizontalScrolling
                };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = {
                    ...options,
                    scrollByPage
                };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = {
                    ...options,
                    smoothScrolling
                };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = {
                    ...options,
                    mouseWheelScrollSensitivity
                };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = {
                    ...options,
                    fastScrollSensitivity
                };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, {
            configurationService,
            ...options
        });
        this.disposables.add(this.navigator);
    }
};
WorkbenchPagedList = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(6, IListService),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], WorkbenchPagedList);
;
let WorkbenchTable = class WorkbenchTable extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$table$2f$tableWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"] {
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListStyles"])(styles) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultListStyles"]);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
    constructor(user, container, delegate, columns, renderers, options, contextKeyService, listService, configurationService, instantiationService){
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, columns, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling
        });
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(()=>{
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(()=>{
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration((e)=>{
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = {
                    ...options,
                    horizontalScrolling
                };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = {
                    ...options,
                    scrollByPage
                };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = {
                    ...options,
                    smoothScrolling
                };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = {
                    ...options,
                    mouseWheelScrollSensitivity
                };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = {
                    ...options,
                    fastScrollSensitivity
                };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new TableResourceNavigator(this, {
            configurationService,
            ...options
        });
        this.disposables.add(this.navigator);
    }
};
WorkbenchTable = __decorate([
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(7, IListService),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], WorkbenchTable);
;
class ResourceNavigator extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    onSelectionFromKeyboard(event) {
        if (event.elements.length !== 1) {
            return;
        }
        const selectionKeyboardEvent = event.browserEvent;
        const preserveFocus = typeof selectionKeyboardEvent.preserveFocus === 'boolean' ? selectionKeyboardEvent.preserveFocus : true;
        const pinned = typeof selectionKeyboardEvent.pinned === 'boolean' ? selectionKeyboardEvent.pinned : !preserveFocus;
        const sideBySide = false;
        this._open(this.getSelectedElement(), preserveFocus, pinned, sideBySide, event.browserEvent);
    }
    onPointer(element, browserEvent) {
        if (!this.openOnSingleClick) {
            return;
        }
        const isDoubleClick = browserEvent.detail === 2;
        if (isDoubleClick) {
            return;
        }
        const isMiddleClick = browserEvent.button === 1;
        const preserveFocus = true;
        const pinned = isMiddleClick;
        const sideBySide = browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey;
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    onMouseDblClick(element, browserEvent) {
        if (!browserEvent) {
            return;
        }
        // copied from AbstractTree
        const target = browserEvent.target;
        const onTwistie = target.classList.contains('monaco-tl-twistie') || target.classList.contains('monaco-icon-label') && target.classList.contains('folder-icon') && browserEvent.offsetX < 16;
        if (onTwistie) {
            return;
        }
        const preserveFocus = false;
        const pinned = true;
        const sideBySide = browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey;
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    _open(element, preserveFocus, pinned, sideBySide, browserEvent) {
        if (!element) {
            return;
        }
        this._onDidOpen.fire({
            editorOptions: {
                preserveFocus,
                pinned,
                revealIfVisible: true
            },
            sideBySide,
            element,
            browserEvent
        });
    }
    constructor(widget, options){
        super();
        this.widget = widget;
        this._onDidOpen = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidOpen = this._onDidOpen.event;
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].filter(this.widget.onDidChangeSelection, (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyboardEvent"])(e.browserEvent))((e)=>this.onSelectionFromKeyboard(e)));
        this._register(this.widget.onPointer((e)=>this.onPointer(e.element, e.browserEvent)));
        this._register(this.widget.onMouseDblClick((e)=>this.onMouseDblClick(e.element, e.browserEvent)));
        if (typeof (options === null || options === void 0 ? void 0 : options.openOnSingleClick) !== 'boolean' && (options === null || options === void 0 ? void 0 : options.configurationService)) {
            this.openOnSingleClick = (options === null || options === void 0 ? void 0 : options.configurationService.getValue(openModeSettingKey)) !== 'doubleClick';
            this._register(options === null || options === void 0 ? void 0 : options.configurationService.onDidChangeConfiguration((e)=>{
                if (e.affectsConfiguration(openModeSettingKey)) {
                    this.openOnSingleClick = (options === null || options === void 0 ? void 0 : options.configurationService.getValue(openModeSettingKey)) !== 'doubleClick';
                }
            }));
        } else {
            var _options_openOnSingleClick;
            this.openOnSingleClick = (_options_openOnSingleClick = options === null || options === void 0 ? void 0 : options.openOnSingleClick) !== null && _options_openOnSingleClick !== void 0 ? _options_openOnSingleClick : true;
        }
    }
}
class ListResourceNavigator extends ResourceNavigator {
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
    constructor(widget, options){
        super(widget, options);
        this.widget = widget;
    }
}
class TableResourceNavigator extends ResourceNavigator {
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
    constructor(widget, options){
        super(widget, options);
    }
}
class TreeResourceNavigator extends ResourceNavigator {
    getSelectedElement() {
        var _this_widget_getSelection_;
        return (_this_widget_getSelection_ = this.widget.getSelection()[0]) !== null && _this_widget_getSelection_ !== void 0 ? _this_widget_getSelection_ : undefined;
    }
    constructor(widget, options){
        super(widget, options);
    }
}
function createKeyboardNavigationEventFilter(keybindingService) {
    let inMultiChord = false;
    return (event)=>{
        if (event.toKeyCodeChord().isModifierKey()) {
            return false;
        }
        if (inMultiChord) {
            inMultiChord = false;
            return false;
        }
        const result = keybindingService.softDispatch(event, event.target);
        if (result.kind === 1 /* ResultKind.MoreChordsNeeded */ ) {
            inMultiChord = true;
            return false;
        }
        inMultiChord = false;
        return result.kind === 0 /* ResultKind.NoMatchingKb */ ;
    };
}
let WorkbenchObjectTree = class WorkbenchObjectTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$objectTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectTree"] {
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService){
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
};
WorkbenchObjectTree = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(7, IListService),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchObjectTree);
;
let WorkbenchCompressibleObjectTree = class WorkbenchCompressibleObjectTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$objectTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressibleObjectTree"] {
    updateOptions() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService){
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
};
WorkbenchCompressibleObjectTree = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(7, IListService),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchCompressibleObjectTree);
;
let WorkbenchDataTree = class WorkbenchDataTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$dataTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTree"] {
    updateOptions() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService){
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
};
WorkbenchDataTree = __decorate([
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(8, IListService),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchDataTree);
;
let WorkbenchAsyncDataTree = class WorkbenchAsyncDataTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$asyncDataTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncDataTree"] {
    get onDidOpen() {
        return this.internals.onDidOpen;
    }
    updateOptions() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService){
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
};
WorkbenchAsyncDataTree = __decorate([
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(8, IListService),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchAsyncDataTree);
;
let WorkbenchCompressibleAsyncDataTree = class WorkbenchCompressibleAsyncDataTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$asyncDataTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressibleAsyncDataTree"] {
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
    constructor(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService){
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
};
WorkbenchCompressibleAsyncDataTree = __decorate([
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(9, IListService),
    __param(10, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchCompressibleAsyncDataTree);
;
function getDefaultTreeFindMode(configurationService) {
    const value = configurationService.getValue(defaultFindModeSettingKey);
    if (value === 'highlight') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMode"].Highlight;
    } else if (value === 'filter') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMode"].Filter;
    }
    const deprecatedValue = configurationService.getValue(keyboardNavigationSettingKey);
    if (deprecatedValue === 'simple' || deprecatedValue === 'highlight') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMode"].Highlight;
    } else if (deprecatedValue === 'filter') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMode"].Filter;
    }
    return undefined;
}
function getDefaultTreeFindMatchType(configurationService) {
    const value = configurationService.getValue(defaultFindMatchTypeSettingKey);
    if (value === 'fuzzy') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMatchType"].Fuzzy;
    } else if (value === 'contiguous') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$tree$2f$abstractTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeFindMatchType"].Contiguous;
    }
    return undefined;
}
function workbenchTreeDataPreamble(accessor, options) {
    const configurationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]);
    const contextViewService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextViewService"]);
    const contextKeyService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]);
    const instantiationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]);
    const getTypeNavigationMode = ()=>{
        // give priority to the context key value to specify a value
        const modeString = contextKeyService.getContextKeyValue(WorkbenchListTypeNavigationModeKey);
        if (modeString === 'automatic') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeNavigationMode"].Automatic;
        } else if (modeString === 'trigger') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeNavigationMode"].Trigger;
        }
        // also check the deprecated context key to set the mode to 'trigger'
        const modeBoolean = contextKeyService.getContextKeyValue(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        if (modeBoolean === false) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeNavigationMode"].Trigger;
        }
        // finally, check the setting
        const configString = configurationService.getValue(typeNavigationModeSettingKey);
        if (configString === 'automatic') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeNavigationMode"].Automatic;
        } else if (configString === 'trigger') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeNavigationMode"].Trigger;
        }
        return undefined;
    };
    const horizontalScrolling = options.horizontalScrolling !== undefined ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
    const [workbenchListOptions, disposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
    const paddingBottom = options.paddingBottom;
    const renderIndentGuides = options.renderIndentGuides !== undefined ? options.renderIndentGuides : configurationService.getValue(treeRenderIndentGuidesKey);
    var _options_expandOnlyOnTwistieClick;
    return {
        getTypeNavigationMode,
        disposable,
        // eslint-disable-next-line local/code-no-dangerous-type-assertions
        options: {
            // ...options, // TODO@Joao why is this not splatted here?
            keyboardSupport: false,
            ...workbenchListOptions,
            indent: typeof configurationService.getValue(treeIndentKey) === 'number' ? configurationService.getValue(treeIndentKey) : undefined,
            renderIndentGuides,
            smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)),
            defaultFindMode: getDefaultTreeFindMode(configurationService),
            defaultFindMatchType: getDefaultTreeFindMatchType(configurationService),
            horizontalScrolling,
            scrollByPage: Boolean(configurationService.getValue(scrollByPageKey)),
            paddingBottom: paddingBottom,
            hideTwistiesOfChildlessElements: options.hideTwistiesOfChildlessElements,
            expandOnlyOnTwistieClick: (_options_expandOnlyOnTwistieClick = options.expandOnlyOnTwistieClick) !== null && _options_expandOnlyOnTwistieClick !== void 0 ? _options_expandOnlyOnTwistieClick : configurationService.getValue(treeExpandMode) === 'doubleClick',
            contextViewProvider: contextViewService,
            findWidgetStyles: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFindWidgetStyles"],
            enableStickyScroll: Boolean(configurationService.getValue(treeStickyScroll)),
            stickyScrollMaxItemCount: Number(configurationService.getValue(treeStickyScrollMaxElements))
        }
    };
}
let WorkbenchTreeInternals = class WorkbenchTreeInternals {
    get onDidOpen() {
        return this.navigator.onDidOpen;
    }
    updateOptions(options) {
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyleOverrides(overrideStyles) {
        this.tree.style(overrideStyles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListStyles"])(overrideStyles) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultListStyles"]);
    }
    dispose() {
        this.disposables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.disposables);
    }
    constructor(tree, options, getTypeNavigationMode, overrideStyles, contextKeyService, listService, configurationService){
        this.tree = tree;
        this.disposables = [];
        this.contextKeyService = createScopedContextKeyService(contextKeyService, tree);
        this.disposables.push(createScrollObserver(this.contextKeyService, tree));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listSupportFindWidget = WorkbenchListSupportsFind.bindTo(this.contextKeyService);
        var _options_findWidgetEnabled;
        this.listSupportFindWidget.set((_options_findWidgetEnabled = options.findWidgetEnabled) !== null && _options_findWidgetEnabled !== void 0 ? _options_findWidgetEnabled : true);
        this.hasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.hasDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.hasMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.treeElementCanCollapse = WorkbenchTreeElementCanCollapse.bindTo(this.contextKeyService);
        this.treeElementHasParent = WorkbenchTreeElementHasParent.bindTo(this.contextKeyService);
        this.treeElementCanExpand = WorkbenchTreeElementCanExpand.bindTo(this.contextKeyService);
        this.treeElementHasChild = WorkbenchTreeElementHasChild.bindTo(this.contextKeyService);
        this.treeFindOpen = WorkbenchTreeFindOpen.bindTo(this.contextKeyService);
        this.treeStickyScrollFocused = WorkbenchTreeStickyScrollFocused.bindTo(this.contextKeyService);
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.updateStyleOverrides(overrideStyles);
        const updateCollapseContextKeys = ()=>{
            const focus = tree.getFocus()[0];
            if (!focus) {
                return;
            }
            const node = tree.getNode(focus);
            this.treeElementCanCollapse.set(node.collapsible && !node.collapsed);
            this.treeElementHasParent.set(!!tree.getParentElement(focus));
            this.treeElementCanExpand.set(node.collapsible && node.collapsed);
            this.treeElementHasChild.set(!!tree.getFirstElementChild(focus));
        };
        const interestingContextKeys = new Set();
        interestingContextKeys.add(WorkbenchListTypeNavigationModeKey);
        interestingContextKeys.add(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        this.disposables.push(this.contextKeyService, listService.register(tree), tree.onDidChangeSelection(()=>{
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.contextKeyService.bufferChangeEvents(()=>{
                this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.hasMultiSelection.set(selection.length > 1);
                this.hasDoubleSelection.set(selection.length === 2);
            });
        }), tree.onDidChangeFocus(()=>{
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
            updateCollapseContextKeys();
        }), tree.onDidChangeCollapseState(updateCollapseContextKeys), tree.onDidChangeModel(updateCollapseContextKeys), tree.onDidChangeFindOpenState((enabled)=>this.treeFindOpen.set(enabled)), tree.onDidChangeStickyScrollFocused((focused)=>this.treeStickyScrollFocused.set(focused)), configurationService.onDidChangeConfiguration((e)=>{
            let newOptions = {};
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            if (e.affectsConfiguration(treeIndentKey)) {
                const indent = configurationService.getValue(treeIndentKey);
                newOptions = {
                    ...newOptions,
                    indent
                };
            }
            if (e.affectsConfiguration(treeRenderIndentGuidesKey) && options.renderIndentGuides === undefined) {
                const renderIndentGuides = configurationService.getValue(treeRenderIndentGuidesKey);
                newOptions = {
                    ...newOptions,
                    renderIndentGuides
                };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                newOptions = {
                    ...newOptions,
                    smoothScrolling
                };
            }
            if (e.affectsConfiguration(defaultFindModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const defaultFindMode = getDefaultTreeFindMode(configurationService);
                newOptions = {
                    ...newOptions,
                    defaultFindMode
                };
            }
            if (e.affectsConfiguration(typeNavigationModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const typeNavigationMode = getTypeNavigationMode();
                newOptions = {
                    ...newOptions,
                    typeNavigationMode
                };
            }
            if (e.affectsConfiguration(defaultFindMatchTypeSettingKey)) {
                const defaultFindMatchType = getDefaultTreeFindMatchType(configurationService);
                newOptions = {
                    ...newOptions,
                    defaultFindMatchType
                };
            }
            if (e.affectsConfiguration(horizontalScrollingKey) && options.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                newOptions = {
                    ...newOptions,
                    horizontalScrolling
                };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                newOptions = {
                    ...newOptions,
                    scrollByPage
                };
            }
            if (e.affectsConfiguration(treeExpandMode) && options.expandOnlyOnTwistieClick === undefined) {
                newOptions = {
                    ...newOptions,
                    expandOnlyOnTwistieClick: configurationService.getValue(treeExpandMode) === 'doubleClick'
                };
            }
            if (e.affectsConfiguration(treeStickyScroll)) {
                const enableStickyScroll = configurationService.getValue(treeStickyScroll);
                newOptions = {
                    ...newOptions,
                    enableStickyScroll
                };
            }
            if (e.affectsConfiguration(treeStickyScrollMaxElements)) {
                const stickyScrollMaxItemCount = Math.max(1, configurationService.getValue(treeStickyScrollMaxElements));
                newOptions = {
                    ...newOptions,
                    stickyScrollMaxItemCount
                };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                newOptions = {
                    ...newOptions,
                    mouseWheelScrollSensitivity
                };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                newOptions = {
                    ...newOptions,
                    fastScrollSensitivity
                };
            }
            if (Object.keys(newOptions).length > 0) {
                tree.updateOptions(newOptions);
            }
        }), this.contextKeyService.onDidChangeContext((e)=>{
            if (e.affectsSome(interestingContextKeys)) {
                tree.updateOptions({
                    typeNavigationMode: getTypeNavigationMode()
                });
            }
        }));
        this.navigator = new TreeResourceNavigator(tree, {
            configurationService,
            ...options
        });
        this.disposables.push(this.navigator);
    }
};
WorkbenchTreeInternals = __decorate([
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, IListService),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], WorkbenchTreeInternals);
const configurationRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].as(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extensions"].Configuration);
configurationRegistry.registerConfiguration({
    id: 'workbench',
    order: 7,
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1688, "Workbench"),
    type: 'object',
    properties: {
        [multiSelectModifierSettingKey]: {
            type: 'string',
            enum: [
                'ctrlCmd',
                'alt'
            ],
            markdownEnumDescriptions: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1689, "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1690, "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
            ],
            default: 'ctrlCmd',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1691, "The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.")
        },
        [openModeSettingKey]: {
            type: 'string',
            enum: [
                'singleClick',
                'doubleClick'
            ],
            default: 'singleClick',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1692, "Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.")
        },
        [horizontalScrollingKey]: {
            type: 'boolean',
            default: false,
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1693, "Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.")
        },
        [scrollByPageKey]: {
            type: 'boolean',
            default: false,
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1694, "Controls whether clicks in the scrollbar scroll page by page.")
        },
        [treeIndentKey]: {
            type: 'number',
            default: 8,
            minimum: 4,
            maximum: 40,
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1695, "Controls tree indentation in pixels.")
        },
        [treeRenderIndentGuidesKey]: {
            type: 'string',
            enum: [
                'none',
                'onHover',
                'always'
            ],
            default: 'onHover',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1696, "Controls whether the tree should render indent guides.")
        },
        [listSmoothScrolling]: {
            type: 'boolean',
            default: false,
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1697, "Controls whether lists and trees have smooth scrolling.")
        },
        [mouseWheelScrollSensitivityKey]: {
            type: 'number',
            default: 1,
            markdownDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1698, "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.")
        },
        [fastScrollSensitivityKey]: {
            type: 'number',
            default: 5,
            markdownDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1699, "Scrolling speed multiplier when pressing `Alt`.")
        },
        [defaultFindModeSettingKey]: {
            type: 'string',
            enum: [
                'highlight',
                'filter'
            ],
            enumDescriptions: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1700, "Highlight elements when searching. Further up and down navigation will traverse only the highlighted elements."),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1701, "Filter elements when searching.")
            ],
            default: 'highlight',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1702, "Controls the default find mode for lists and trees in the workbench.")
        },
        [keyboardNavigationSettingKey]: {
            type: 'string',
            enum: [
                'simple',
                'highlight',
                'filter'
            ],
            enumDescriptions: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1703, "Simple keyboard navigation focuses elements which match the keyboard input. Matching is done only on prefixes."),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1704, "Highlight keyboard navigation highlights elements which match the keyboard input. Further up and down navigation will traverse only the highlighted elements."),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1705, "Filter keyboard navigation will filter out and hide all the elements which do not match the keyboard input.")
            ],
            default: 'highlight',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1706, "Controls the keyboard navigation style for lists and trees in the workbench. Can be simple, highlight and filter."),
            deprecated: true,
            deprecationMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1707, "Please use 'workbench.list.defaultFindMode' and	'workbench.list.typeNavigationMode' instead.")
        },
        [defaultFindMatchTypeSettingKey]: {
            type: 'string',
            enum: [
                'fuzzy',
                'contiguous'
            ],
            enumDescriptions: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1708, "Use fuzzy matching when searching."),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1709, "Use contiguous matching when searching.")
            ],
            default: 'fuzzy',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1710, "Controls the type of matching used when searching lists and trees in the workbench.")
        },
        [treeExpandMode]: {
            type: 'string',
            enum: [
                'singleClick',
                'doubleClick'
            ],
            default: 'singleClick',
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1711, "Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable.")
        },
        [treeStickyScroll]: {
            type: 'boolean',
            default: true,
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1712, "Controls whether sticky scrolling is enabled in trees.")
        },
        [treeStickyScrollMaxElements]: {
            type: 'number',
            minimum: 1,
            default: 7,
            markdownDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1713, "Controls the number of sticky elements displayed in the tree when {0} is enabled.", '`#workbench.tree.enableStickyScroll#`')
        },
        [typeNavigationModeSettingKey]: {
            type: 'string',
            enum: [
                'automatic',
                'trigger'
            ],
            default: 'automatic',
            markdownDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1714, "Controls how type navigation works in lists and trees in the workbench. When set to `trigger`, type navigation begins once the `list.triggerTypeNavigation` command is run.")
        }
    }
}); //# sourceMappingURL=listService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/label/common/label.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ILabelService",
    ()=>ILabelService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const ILabelService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('labelService'); //# sourceMappingURL=label.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/history/browser/contextScopedHistoryWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContextScopedFindInput",
    ()=>ContextScopedFindInput,
    "ContextScopedReplaceInput",
    ()=>ContextScopedReplaceInput,
    "historyNavigationVisible",
    ()=>historyNavigationVisible,
    "registerAndCreateHistoryNavigationContext",
    ()=>registerAndCreateHistoryNavigationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$replaceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/replaceInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
const historyNavigationVisible = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('suggestWidgetVisible', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1683, "Whether suggestion are visible"));
const HistoryNavigationWidgetFocusContext = 'historyNavigationWidgetFocus';
const HistoryNavigationForwardsEnablementContext = 'historyNavigationForwardsEnabled';
const HistoryNavigationBackwardsEnablementContext = 'historyNavigationBackwardsEnabled';
let lastFocusedWidget = undefined;
const widgets = [];
function registerAndCreateHistoryNavigationContext(scopedContextKeyService, widget) {
    if (widgets.includes(widget)) {
        throw new Error('Cannot register the same widget multiple times');
    }
    widgets.push(widget);
    const disposableStore = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const historyNavigationWidgetFocus = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"](HistoryNavigationWidgetFocusContext, false).bindTo(scopedContextKeyService);
    const historyNavigationForwardsEnablement = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"](HistoryNavigationForwardsEnablementContext, true).bindTo(scopedContextKeyService);
    const historyNavigationBackwardsEnablement = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"](HistoryNavigationBackwardsEnablementContext, true).bindTo(scopedContextKeyService);
    const onDidFocus = ()=>{
        historyNavigationWidgetFocus.set(true);
        lastFocusedWidget = widget;
    };
    const onDidBlur = ()=>{
        historyNavigationWidgetFocus.set(false);
        if (lastFocusedWidget === widget) {
            lastFocusedWidget = undefined;
        }
    };
    // Check for currently being focused
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveElement"])(widget.element)) {
        onDidFocus();
    }
    disposableStore.add(widget.onDidFocus(()=>onDidFocus()));
    disposableStore.add(widget.onDidBlur(()=>onDidBlur()));
    disposableStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
        widgets.splice(widgets.indexOf(widget), 1);
        onDidBlur();
    }));
    return {
        historyNavigationForwardsEnablement,
        historyNavigationBackwardsEnablement,
        dispose () {
            disposableStore.dispose();
        }
    };
}
let ContextScopedFindInput = class ContextScopedFindInput extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FindInput"] {
    constructor(container, contextViewProvider, options, contextKeyService){
        super(container, contextViewProvider, options);
        const scopedContextKeyService = this._register(contextKeyService.createScoped(this.inputBox.element));
        this._register(registerAndCreateHistoryNavigationContext(scopedContextKeyService, this.inputBox));
    }
};
ContextScopedFindInput = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"])
], ContextScopedFindInput);
;
let ContextScopedReplaceInput = class ContextScopedReplaceInput extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$replaceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceInput"] {
    constructor(container, contextViewProvider, options, contextKeyService, showReplaceOptions = false){
        super(container, contextViewProvider, showReplaceOptions, options);
        const scopedContextKeyService = this._register(contextKeyService.createScoped(this.inputBox.element));
        this._register(registerAndCreateHistoryNavigationContext(scopedContextKeyService, this.inputBox));
    }
};
ContextScopedReplaceInput = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"])
], ContextScopedReplaceInput);
;
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'history.showPrevious',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */ ,
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].has(HistoryNavigationWidgetFocusContext), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].equals(HistoryNavigationBackwardsEnablementContext, true), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('isComposing'), historyNavigationVisible.isEqualTo(false)),
    primary: 16 /* KeyCode.UpArrow */ ,
    secondary: [
        512 /* KeyMod.Alt */  | 16 /* KeyCode.UpArrow */ 
    ],
    handler: (accessor)=>{
        lastFocusedWidget === null || lastFocusedWidget === void 0 ? void 0 : lastFocusedWidget.showPreviousValue();
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'history.showNext',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */ ,
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].has(HistoryNavigationWidgetFocusContext), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].equals(HistoryNavigationForwardsEnablementContext, true), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('isComposing'), historyNavigationVisible.isEqualTo(false)),
    primary: 18 /* KeyCode.DownArrow */ ,
    secondary: [
        512 /* KeyMod.Alt */  | 18 /* KeyCode.DownArrow */ 
    ],
    handler: (accessor)=>{
        lastFocusedWidget === null || lastFocusedWidget === void 0 ? void 0 : lastFocusedWidget.showNextValue();
    }
}); //# sourceMappingURL=contextScopedHistoryWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/history/browser/historyWidgetKeybindingHint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "showHistoryKeybindingHint",
    ()=>showHistoryKeybindingHint
]);
function showHistoryKeybindingHint(keybindingService) {
    var _keybindingService_lookupKeybinding, _keybindingService_lookupKeybinding1;
    return ((_keybindingService_lookupKeybinding = keybindingService.lookupKeybinding('history.showPrevious')) === null || _keybindingService_lookupKeybinding === void 0 ? void 0 : _keybindingService_lookupKeybinding.getElectronAccelerator()) === 'Up' && ((_keybindingService_lookupKeybinding1 = keybindingService.lookupKeybinding('history.showNext')) === null || _keybindingService_lookupKeybinding1 === void 0 ? void 0 : _keybindingService_lookupKeybinding1.getElectronAccelerator()) === 'Down';
} //# sourceMappingURL=historyWidgetKeybindingHint.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/extensions/common/extensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * **!Do not construct directly!**
 *
 * **!Only static methods because it gets serialized!**
 *
 * This represents the "canonical" version for an extension identifier. Extension ids
 * have to be case-insensitive (due to the marketplace), but we must ensure case
 * preservation because the extension API is already public at this time.
 *
 * For example, given an extension with the publisher `"Hello"` and the name `"World"`,
 * its canonical extension identifier is `"Hello.World"`. This extension could be
 * referenced in some other extension's dependencies using the string `"hello.world"`.
 *
 * To make matters more complicated, an extension can optionally have an UUID. When two
 * extensions have the same UUID, they are considered equal even if their identifier is different.
 */ __turbopack_context__.s([
    "ExtensionIdentifier",
    ()=>ExtensionIdentifier,
    "ExtensionIdentifierSet",
    ()=>ExtensionIdentifierSet
]);
class ExtensionIdentifier {
    /**
     * Gives the value by which to index (for equality).
     */ static toKey(id) {
        if (typeof id === 'string') {
            return id.toLowerCase();
        }
        return id._lower;
    }
    constructor(value){
        this.value = value;
        this._lower = value.toLowerCase();
    }
}
class ExtensionIdentifierSet {
    add(id) {
        this._set.add(ExtensionIdentifier.toKey(id));
    }
    has(id) {
        return this._set.has(ExtensionIdentifier.toKey(id));
    }
    constructor(iterable){
        this._set = new Set();
        if (iterable) {
            for (const value of iterable){
                this.add(value);
            }
        }
    }
} //# sourceMappingURL=extensions.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/dataChannel/common/dataChannel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDataChannelService",
    ()=>IDataChannelService,
    "NullDataChannelService",
    ()=>NullDataChannelService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IDataChannelService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('dataChannelService');
class NullDataChannelService {
    getDataChannel(_channelId) {
        return {
            sendData: ()=>{}
        };
    }
} //# sourceMappingURL=dataChannel.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/dataChannel/browser/forwardingTelemetryService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DataChannelForwardingTelemetryService",
    ()=>DataChannelForwardingTelemetryService,
    "InterceptingTelemetryService",
    ()=>InterceptingTelemetryService,
    "forwardToChannelIf",
    ()=>forwardToChannelIf,
    "isCopilotLikeExtension",
    ()=>isCopilotLikeExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$dataChannel$2f$common$2f$dataChannel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/dataChannel/common/dataChannel.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
class InterceptingTelemetryService {
    publicLog2(eventName, data) {
        this._intercept(eventName, data);
        this._baseService.publicLog2(eventName, data);
    }
    constructor(_baseService, _intercept){
        this._baseService = _baseService;
        this._intercept = _intercept;
    }
}
let DataChannelForwardingTelemetryService = class DataChannelForwardingTelemetryService extends InterceptingTelemetryService {
    constructor(telemetryService, dataChannelService){
        super(telemetryService, (eventName, data)=>{
            // filter for extension
            let forward = true;
            if (data && shouldForwardToChannel in data) {
                forward = Boolean(data[shouldForwardToChannel]);
            }
            if (forward) {
                dataChannelService.getDataChannel('editTelemetry').sendData({
                    eventName,
                    data: data
                });
            }
        });
    }
};
DataChannelForwardingTelemetryService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$dataChannel$2f$common$2f$dataChannel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IDataChannelService"])
], DataChannelForwardingTelemetryService);
;
const shouldForwardToChannel = Symbol('shouldForwardToChannel');
function forwardToChannelIf(value) {
    return {
        // This will not be sent via telemetry, it is just a marker
        [shouldForwardToChannel]: value
    };
}
function isCopilotLikeExtension(extensionId) {
    if (!extensionId) {
        return false;
    }
    const extIdLowerCase = extensionId.toLowerCase();
    return extIdLowerCase === 'github.copilot' || extIdLowerCase === 'github.copilot-chat';
} //# sourceMappingURL=forwardingTelemetryService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/files/common/files.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "FileKind",
    ()=>FileKind,
    "IFileService",
    ()=>IFileService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IFileService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('fileService');
var FileKind;
(function(FileKind) {
    FileKind[FileKind["FILE"] = 0] = "FILE";
    FileKind[FileKind["FOLDER"] = 1] = "FOLDER";
    FileKind[FileKind["ROOT_FOLDER"] = 2] = "ROOT_FOLDER";
})(FileKind || (FileKind = {})); //#endregion
 //# sourceMappingURL=files.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDialogService",
    ()=>IDialogService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const IDialogService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('dialogService'); //# sourceMappingURL=dialogs.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/editor/common/editor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorOpenSource",
    ()=>EditorOpenSource
]);
var EditorOpenSource;
(function(EditorOpenSource) {
    /**
     * Default: the editor is opening via a programmatic call
     * to the editor service API.
     */ EditorOpenSource[EditorOpenSource["API"] = 0] = "API";
    /**
     * Indicates that a user action triggered the opening, e.g.
     * via mouse or keyboard use.
     */ EditorOpenSource[EditorOpenSource["USER"] = 1] = "USER";
})(EditorOpenSource || (EditorOpenSource = {})); //# sourceMappingURL=editor.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_platform_e23179f2._.js.map