(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DebugNameData",
    ()=>DebugNameData,
    "getClassName",
    ()=>getClassName,
    "getDebugName",
    ()=>getDebugName,
    "getFunctionName",
    ()=>getFunctionName
]);
class DebugNameData {
    getDebugName(target) {
        return getDebugName(target, this);
    }
    constructor(owner, debugNameSource, referenceFn){
        this.owner = owner;
        this.debugNameSource = debugNameSource;
        this.referenceFn = referenceFn;
    }
}
const countPerName = new Map();
const cachedDebugName = new WeakMap();
function getDebugName(target, data) {
    const cached = cachedDebugName.get(target);
    if (cached) {
        return cached;
    }
    const dbgName = computeDebugName(target, data);
    if (dbgName) {
        var _countPerName_get;
        let count = (_countPerName_get = countPerName.get(dbgName)) !== null && _countPerName_get !== void 0 ? _countPerName_get : 0;
        count++;
        countPerName.set(dbgName, count);
        const result = count === 1 ? dbgName : "".concat(dbgName, "#").concat(count);
        cachedDebugName.set(target, result);
        return result;
    }
    return undefined;
}
function computeDebugName(self, data) {
    const cached = cachedDebugName.get(self);
    if (cached) {
        return cached;
    }
    const ownerStr = data.owner ? formatOwner(data.owner) + "." : '';
    let result;
    const debugNameSource = data.debugNameSource;
    if (debugNameSource !== undefined) {
        if (typeof debugNameSource === 'function') {
            result = debugNameSource();
            if (result !== undefined) {
                return ownerStr + result;
            }
        } else {
            return ownerStr + debugNameSource;
        }
    }
    const referenceFn = data.referenceFn;
    if (referenceFn !== undefined) {
        result = getFunctionName(referenceFn);
        if (result !== undefined) {
            return ownerStr + result;
        }
    }
    if (data.owner !== undefined) {
        const key = findKey(data.owner, self);
        if (key !== undefined) {
            return ownerStr + key;
        }
    }
    return undefined;
}
function findKey(obj, value) {
    for(const key in obj){
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}
const countPerClassName = new Map();
const ownerId = new WeakMap();
function formatOwner(owner) {
    const id = ownerId.get(owner);
    if (id) {
        return id;
    }
    var _getClassName;
    const className = (_getClassName = getClassName(owner)) !== null && _getClassName !== void 0 ? _getClassName : 'Object';
    var _countPerClassName_get;
    let count = (_countPerClassName_get = countPerClassName.get(className)) !== null && _countPerClassName_get !== void 0 ? _countPerClassName_get : 0;
    count++;
    countPerClassName.set(className, count);
    const result = count === 1 ? className : "".concat(className, "#").concat(count);
    ownerId.set(owner, result);
    return result;
}
function getClassName(obj) {
    const ctor = obj.constructor;
    if (ctor) {
        if (ctor.name === 'Object') {
            return undefined;
        }
        return ctor.name;
    }
    return undefined;
}
function getFunctionName(fn) {
    const fnSrc = fn.toString();
    // Pattern: /** @description ... */
    const regexp = /\/\*\*\s*@description\s*([^*]*)\*\//;
    const match = regexp.exec(fnSrc);
    const result = match ? match[1] : undefined;
    return result === null || result === void 0 ? void 0 : result.trim();
} //# sourceMappingURL=debugName.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)"); //# sourceMappingURL=deps.js.map
;
;
;
;
;
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "handleBugIndicatingErrorRecovery",
    ()=>handleBugIndicatingErrorRecovery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
;
function handleBugIndicatingErrorRecovery(message) {
    const err = new Error('BugIndicatingErrorRecovery: ' + message);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
    console.error('recovered from an error that indicates a bug', err);
} //# sourceMappingURL=base.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "addLogger",
    ()=>addLogger,
    "getLogger",
    ()=>getLogger,
    "setLogObservableFn",
    ()=>setLogObservableFn
]);
let globalObservableLogger;
function addLogger(logger) {
    if (!globalObservableLogger) {
        globalObservableLogger = logger;
    } else if (globalObservableLogger instanceof ComposedLogger) {
        globalObservableLogger.loggers.push(logger);
    } else {
        globalObservableLogger = new ComposedLogger([
            globalObservableLogger,
            logger
        ]);
    }
}
function getLogger() {
    return globalObservableLogger;
}
let globalObservableLoggerFn = undefined;
function setLogObservableFn(fn) {
    globalObservableLoggerFn = fn;
}
class ComposedLogger {
    handleObservableCreated(observable, location) {
        for (const logger of this.loggers){
            logger.handleObservableCreated(observable, location);
        }
    }
    handleOnListenerCountChanged(observable, newCount) {
        for (const logger of this.loggers){
            logger.handleOnListenerCountChanged(observable, newCount);
        }
    }
    handleObservableUpdated(observable, info) {
        for (const logger of this.loggers){
            logger.handleObservableUpdated(observable, info);
        }
    }
    handleAutorunCreated(autorun, location) {
        for (const logger of this.loggers){
            logger.handleAutorunCreated(autorun, location);
        }
    }
    handleAutorunDisposed(autorun) {
        for (const logger of this.loggers){
            logger.handleAutorunDisposed(autorun);
        }
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        for (const logger of this.loggers){
            logger.handleAutorunDependencyChanged(autorun, observable, change);
        }
    }
    handleAutorunStarted(autorun) {
        for (const logger of this.loggers){
            logger.handleAutorunStarted(autorun);
        }
    }
    handleAutorunFinished(autorun) {
        for (const logger of this.loggers){
            logger.handleAutorunFinished(autorun);
        }
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        for (const logger of this.loggers){
            logger.handleDerivedDependencyChanged(derived, observable, change);
        }
    }
    handleDerivedCleared(observable) {
        for (const logger of this.loggers){
            logger.handleDerivedCleared(observable);
        }
    }
    handleBeginTransaction(transaction) {
        for (const logger of this.loggers){
            logger.handleBeginTransaction(transaction);
        }
    }
    handleEndTransaction(transaction) {
        for (const logger of this.loggers){
            logger.handleEndTransaction(transaction);
        }
    }
    constructor(loggers){
        this.loggers = loggers;
    }
} //# sourceMappingURL=logging.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "TransactionImpl",
    ()=>TransactionImpl,
    "asyncTransaction",
    ()=>asyncTransaction,
    "globalTransaction",
    ()=>globalTransaction,
    "subtransaction",
    ()=>subtransaction,
    "transaction",
    ()=>transaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
;
;
;
function transaction(fn, getDebugName) {
    const tx = new TransactionImpl(fn, getDebugName);
    try {
        fn(tx);
    } finally{
        tx.finish();
    }
}
let _globalTransaction = undefined;
function globalTransaction(fn) {
    if (_globalTransaction) {
        fn(_globalTransaction);
    } else {
        const tx = new TransactionImpl(fn, undefined);
        _globalTransaction = tx;
        try {
            fn(tx);
        } finally{
            tx.finish(); // During finish, more actions might be added to the transaction.
            // Which is why we only clear the global transaction after finish.
            _globalTransaction = undefined;
        }
    }
}
async function asyncTransaction(fn, getDebugName) {
    const tx = new TransactionImpl(fn, getDebugName);
    try {
        await fn(tx);
    } finally{
        tx.finish();
    }
}
function subtransaction(tx, fn, getDebugName) {
    if (!tx) {
        transaction(fn, getDebugName);
    } else {
        fn(tx);
    }
}
class TransactionImpl {
    getDebugName() {
        if (this._getDebugName) {
            return this._getDebugName();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(this._fn);
    }
    updateObserver(observer, observable) {
        if (!this._updatingObservers) {
            // This happens when a transaction is used in a callback or async function.
            // If an async transaction is used, make sure the promise awaits all users of the transaction (e.g. no race).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBugIndicatingErrorRecovery"])('Transaction already finished!');
            // Error recovery
            transaction((tx)=>{
                tx.updateObserver(observer, observable);
            });
            return;
        }
        // When this gets called while finish is active, they will still get considered
        this._updatingObservers.push({
            observer,
            observable
        });
        observer.beginUpdate(observable);
    }
    finish() {
        var _getLogger;
        const updatingObservers = this._updatingObservers;
        if (!updatingObservers) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleBugIndicatingErrorRecovery"])('transaction.finish() has already been called!');
            return;
        }
        for(let i = 0; i < updatingObservers.length; i++){
            const { observer, observable } = updatingObservers[i];
            observer.endUpdate(observable);
        }
        // Prevent anyone from updating observers from now on.
        this._updatingObservers = null;
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleEndTransaction(this);
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers;
    }
    constructor(_fn, _getDebugName){
        var _getLogger;
        this._fn = _fn;
        this._getDebugName = _getDebugName;
        this._updatingObservers = [];
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleBeginTransaction(this);
    }
} //# sourceMappingURL=transaction.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DebugLocation",
    ()=>DebugLocation
]);
var DebugLocation;
(function(DebugLocation) {
    let enabled = false;
    function enable() {
        enabled = true;
    }
    DebugLocation.enable = enable;
    function ofCaller() {
        if (!enabled) {
            return undefined;
        }
        const Err = Error; // For the monaco editor checks, which don't have the nodejs types.
        const l = Err.stackTraceLimit;
        Err.stackTraceLimit = 3;
        const stack = new Error().stack;
        Err.stackTraceLimit = l;
        return DebugLocationImpl.fromStack(stack, 2);
    }
    DebugLocation.ofCaller = ofCaller;
})(DebugLocation || (DebugLocation = {}));
class DebugLocationImpl {
    static fromStack(stack, parentIdx) {
        const lines = stack.split('\n');
        const location = parseLine(lines[parentIdx + 1]);
        if (location) {
            return new DebugLocationImpl(location.fileName, location.line, location.column, location.id);
        } else {
            return undefined;
        }
    }
    constructor(fileName, line, column, id){
        this.fileName = fileName;
        this.line = line;
        this.column = column;
        this.id = id;
    }
}
function parseLine(stackLine) {
    const match = stackLine.match(/\((.*):(\d+):(\d+)\)/);
    if (match) {
        return {
            fileName: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            id: stackLine
        };
    }
    const match2 = stackLine.match(/at ([^\(\)]*):(\d+):(\d+)/);
    if (match2) {
        return {
            fileName: match2[1],
            line: parseInt(match2[2]),
            column: parseInt(match2[3]),
            id: stackLine
        };
    }
    return undefined;
} //# sourceMappingURL=debugLocation.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "BaseObservable",
    ()=>BaseObservable,
    "ConvenientObservable",
    ()=>ConvenientObservable,
    "_setDebugGetDependencyGraph",
    ()=>_setDebugGetDependencyGraph,
    "_setDerivedOpts",
    ()=>_setDerivedOpts,
    "_setKeepObserved",
    ()=>_setKeepObserved,
    "_setRecomputeInitiallyAndOnChange",
    ()=>_setRecomputeInitiallyAndOnChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
;
;
;
let _derived;
function _setDerivedOpts(derived) {
    _derived = derived;
}
let _recomputeInitiallyAndOnChange;
function _setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange) {
    _recomputeInitiallyAndOnChange = recomputeInitiallyAndOnChange;
}
let _keepObserved;
function _setKeepObserved(keepObserved) {
    _keepObserved = keepObserved;
}
let _debugGetDependencyGraph;
function _setDebugGetDependencyGraph(debugGetDependencyGraph) {
    _debugGetDependencyGraph = debugGetDependencyGraph;
}
class ConvenientObservable {
    get TChange() {
        return null;
    }
    reportChanges() {
        this.get();
    }
    /** @sealed */ read(reader) {
        if (reader) {
            return reader.readObservable(this);
        } else {
            return this.get();
        }
    }
    map(fnOrOwner, fnOrUndefined) {
        let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
        const owner = fnOrUndefined === undefined ? undefined : fnOrOwner;
        const fn = fnOrUndefined === undefined ? fnOrOwner : fnOrUndefined;
        return _derived({
            owner,
            debugName: ()=>{
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(fn);
                if (name !== undefined) {
                    return name;
                }
                // regexp to match `x => x.y` or `x => x?.y` where x and y can be arbitrary identifiers (uses backref):
                const regexp = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/;
                const match = regexp.exec(fn.toString());
                if (match) {
                    return "".concat(this.debugName, ".").concat(match[2]);
                }
                if (!owner) {
                    return "".concat(this.debugName, " (mapped)");
                }
                return undefined;
            },
            debugReferenceFn: fn
        }, (reader)=>fn(this.read(reader), reader), debugLocation);
    }
    /**
     * @sealed
     * Converts an observable of an observable value into a direct observable of the value.
    */ flatten() {
        return _derived({
            owner: undefined,
            debugName: ()=>"".concat(this.debugName, " (flattened)")
        }, (reader)=>this.read(reader).read(reader));
    }
    recomputeInitiallyAndOnChange(store, handleValue) {
        store.add(_recomputeInitiallyAndOnChange(this, handleValue));
        return this;
    }
}
class BaseObservable extends ConvenientObservable {
    addObserver(observer) {
        const len = this._observers.size;
        this._observers.add(observer);
        if (len === 0) {
            this.onFirstObserverAdded();
        }
        if (len !== this._observers.size) {
            var _getLogger;
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    removeObserver(observer) {
        const deleted = this._observers.delete(observer);
        if (deleted && this._observers.size === 0) {
            this.onLastObserverRemoved();
        }
        if (deleted) {
            var _getLogger;
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    onFirstObserverAdded() {}
    onLastObserverRemoved() {}
    debugGetObservers() {
        return this._observers;
    }
    constructor(debugLocation){
        var _getLogger;
        super();
        this._observers = new Set();
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableCreated(this, debugLocation);
    }
} //# sourceMappingURL=baseObservable.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DisposableObservableValue",
    ()=>DisposableObservableValue,
    "ObservableValue",
    ()=>ObservableValue,
    "disposableObservableValue",
    ()=>disposableObservableValue,
    "observableValue",
    ()=>observableValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
;
;
function observableValue(nameOrOwner, initialValue) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    let debugNameData;
    if (typeof nameOrOwner === 'string') {
        debugNameData = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](undefined, nameOrOwner, undefined);
    } else {
        debugNameData = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](nameOrOwner, undefined, undefined);
    }
    return new ObservableValue(debugNameData, initialValue, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
class ObservableValue extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    get debugName() {
        var _this__debugNameData_getDebugName;
        return (_this__debugNameData_getDebugName = this._debugNameData.getDebugName(this)) !== null && _this__debugNameData_getDebugName !== void 0 ? _this__debugNameData_getDebugName : 'ObservableValue';
    }
    get() {
        return this._value;
    }
    set(value, tx, change) {
        if (change === undefined && this._equalityComparator(this._value, value)) {
            return;
        }
        let _tx;
        if (!tx) {
            tx = _tx = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionImpl"](()=>{}, ()=>"Setting ".concat(this.debugName));
        }
        try {
            var _getLogger;
            const oldValue = this._value;
            this._setValue(value);
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
                oldValue,
                newValue: value,
                change,
                didChange: true,
                hadValue: true
            });
            for (const observer of this._observers){
                tx.updateObserver(observer, this);
                observer.handleChange(this, change);
            }
        } finally{
            if (_tx) {
                _tx.finish();
            }
        }
    }
    toString() {
        return "".concat(this.debugName, ": ").concat(this._value);
    }
    _setValue(newValue) {
        this._value = newValue;
    }
    debugGetState() {
        return {
            value: this._value
        };
    }
    debugSetValue(value) {
        this._value = value;
    }
    constructor(_debugNameData, initialValue, _equalityComparator, debugLocation){
        var _getLogger;
        super(debugLocation);
        this._debugNameData = _debugNameData;
        this._equalityComparator = _equalityComparator;
        this._value = initialValue;
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
            hadValue: false,
            newValue: initialValue,
            change: undefined,
            didChange: true,
            oldValue: undefined
        });
    }
}
function disposableObservableValue(nameOrOwner, initialValue) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    let debugNameData;
    if (typeof nameOrOwner === 'string') {
        debugNameData = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](undefined, nameOrOwner, undefined);
    } else {
        debugNameData = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](nameOrOwner, undefined, undefined);
    }
    return new DisposableObservableValue(debugNameData, initialValue, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
class DisposableObservableValue extends ObservableValue {
    _setValue(newValue) {
        if (this._value === newValue) {
            return;
        }
        if (this._value) {
            this._value.dispose();
        }
        this._value = newValue;
    }
    dispose() {
        var _this__value;
        (_this__value = this._value) === null || _this__value === void 0 ? void 0 : _this__value.dispose();
    }
} //# sourceMappingURL=observableValue.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/lazyObservableValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "LazyObservableValue",
    ()=>LazyObservableValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
;
;
;
class LazyObservableValue extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    get debugName() {
        var _this__debugNameData_getDebugName;
        return (_this__debugNameData_getDebugName = this._debugNameData.getDebugName(this)) !== null && _this__debugNameData_getDebugName !== void 0 ? _this__debugNameData_getDebugName : 'LazyObservableValue';
    }
    get() {
        this._update();
        return this._value;
    }
    _update() {
        if (this._isUpToDate) {
            return;
        }
        this._isUpToDate = true;
        if (this._deltas.length > 0) {
            for (const change of this._deltas){
                var _getLogger;
                (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
                    change,
                    didChange: true,
                    oldValue: '(unknown)',
                    newValue: this._value,
                    hadValue: true
                });
                for (const observer of this._observers){
                    observer.handleChange(this, change);
                }
            }
            this._deltas.length = 0;
        } else {
            var _getLogger1;
            (_getLogger1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger1 === void 0 ? void 0 : _getLogger1.handleObservableUpdated(this, {
                change: undefined,
                didChange: true,
                oldValue: '(unknown)',
                newValue: this._value,
                hadValue: true
            });
            for (const observer of this._observers){
                observer.handleChange(this, undefined);
            }
        }
    }
    _beginUpdate() {
        this._updateCounter++;
        if (this._updateCounter === 1) {
            for (const observer of this._observers){
                observer.beginUpdate(this);
            }
        }
    }
    _endUpdate() {
        this._updateCounter--;
        if (this._updateCounter === 0) {
            this._update();
            // End update could change the observer list.
            const observers = [
                ...this._observers
            ];
            for (const r of observers){
                r.endUpdate(this);
            }
        }
    }
    addObserver(observer) {
        const shouldCallBeginUpdate = !this._observers.has(observer) && this._updateCounter > 0;
        super.addObserver(observer);
        if (shouldCallBeginUpdate) {
            observer.beginUpdate(this);
        }
    }
    removeObserver(observer) {
        const shouldCallEndUpdate = this._observers.has(observer) && this._updateCounter > 0;
        super.removeObserver(observer);
        if (shouldCallEndUpdate) {
            // Calling end update after removing the observer makes sure endUpdate cannot be called twice here.
            observer.endUpdate(this);
        }
    }
    set(value, tx, change) {
        if (change === undefined && this._equalityComparator(this._value, value)) {
            return;
        }
        let _tx;
        if (!tx) {
            tx = _tx = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionImpl"](()=>{}, ()=>"Setting ".concat(this.debugName));
        }
        try {
            this._isUpToDate = false;
            this._setValue(value);
            if (change !== undefined) {
                this._deltas.push(change);
            }
            tx.updateObserver({
                beginUpdate: ()=>this._beginUpdate(),
                endUpdate: ()=>this._endUpdate(),
                handleChange: (observable, change)=>{},
                handlePossibleChange: (observable)=>{}
            }, this);
            if (this._updateCounter > 1) {
                // We already started begin/end update, so we need to manually call handlePossibleChange
                for (const observer of this._observers){
                    observer.handlePossibleChange(this);
                }
            }
        } finally{
            if (_tx) {
                _tx.finish();
            }
        }
    }
    toString() {
        return "".concat(this.debugName, ": ").concat(this._value);
    }
    _setValue(newValue) {
        this._value = newValue;
    }
    constructor(_debugNameData, initialValue, _equalityComparator, debugLocation){
        super(debugLocation);
        this._debugNameData = _debugNameData;
        this._equalityComparator = _equalityComparator;
        this._isUpToDate = true;
        this._deltas = [];
        this._updateCounter = 0;
        this._value = initialValue;
    }
} //# sourceMappingURL=lazyObservableValue.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValueOpts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "observableValueOpts",
    ()=>observableValueOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$lazyObservableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/lazyObservableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
;
function observableValueOpts(options, initialValue) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    if (options.lazy) {
        var _options_equalsFn;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$lazyObservableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyObservableValue"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, undefined), initialValue, (_options_equalsFn = options.equalsFn) !== null && _options_equalsFn !== void 0 ? _options_equalsFn : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
    }
    var _options_equalsFn1;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableValue"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, undefined), initialValue, (_options_equalsFn1 = options.equalsFn) !== null && _options_equalsFn1 !== void 0 ? _options_equalsFn1 : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
} //# sourceMappingURL=observableValueOpts.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorunImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AutorunObserver",
    ()=>AutorunObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
;
;
function autorunStateToString(state) {
    switch(state){
        case 1 /* AutorunState.dependenciesMightHaveChanged */ :
            return 'dependenciesMightHaveChanged';
        case 2 /* AutorunState.stale */ :
            return 'stale';
        case 3 /* AutorunState.upToDate */ :
            return 'upToDate';
        default:
            return '<unknown>';
    }
}
class AutorunObserver {
    get debugName() {
        var _this__debugNameData_getDebugName;
        return (_this__debugNameData_getDebugName = this._debugNameData.getDebugName(this)) !== null && _this__debugNameData_getDebugName !== void 0 ? _this__debugNameData_getDebugName : '(anonymous)';
    }
    dispose() {
        var _getLogger;
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        for (const o of this._dependencies){
            o.removeObserver(this); // Warning: external call!
        }
        this._dependencies.clear();
        if (this._store !== undefined) {
            this._store.dispose();
        }
        if (this._delayedStore !== undefined) {
            this._delayedStore.dispose();
        }
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleAutorunDisposed(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsDisposed"])(this);
    }
    _run() {
        const emptySet = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies;
        this._dependencies = emptySet;
        this._state = 3 /* AutorunState.upToDate */ ;
        try {
            if (!this._disposed) {
                var _getLogger;
                (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleAutorunStarted(this);
                const changeSummary = this._changeSummary;
                const delayedStore = this._delayedStore;
                if (delayedStore !== undefined) {
                    this._delayedStore = undefined;
                }
                try {
                    this._isRunning = true;
                    if (this._changeTracker) {
                        var _this__changeTracker_beforeUpdate, _this__changeTracker;
                        (_this__changeTracker_beforeUpdate = (_this__changeTracker = this._changeTracker).beforeUpdate) === null || _this__changeTracker_beforeUpdate === void 0 ? void 0 : _this__changeTracker_beforeUpdate.call(_this__changeTracker, this, changeSummary);
                        this._changeSummary = this._changeTracker.createChangeSummary(changeSummary); // Warning: external call!
                    }
                    if (this._store !== undefined) {
                        this._store.dispose();
                        this._store = undefined;
                    }
                    this._runFn(this, changeSummary); // Warning: external call!
                } catch (e) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBugIndicatingError"])(e);
                } finally{
                    this._isRunning = false;
                    if (delayedStore !== undefined) {
                        delayedStore.dispose();
                    }
                }
            }
        } finally{
            if (!this._disposed) {
                var _getLogger1;
                (_getLogger1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger1 === void 0 ? void 0 : _getLogger1.handleAutorunFinished(this);
            }
            // We don't want our observed observables to think that they are (not even temporarily) not being observed.
            // Thus, we only unsubscribe from observables that are definitely not read anymore.
            for (const o of this._dependenciesToBeRemoved){
                o.removeObserver(this); // Warning: external call!
            }
            this._dependenciesToBeRemoved.clear();
        }
    }
    toString() {
        return "Autorun<".concat(this.debugName, ">");
    }
    // IObserver implementation
    beginUpdate(_observable) {
        if (this._state === 3 /* AutorunState.upToDate */ ) {
            this._state = 1 /* AutorunState.dependenciesMightHaveChanged */ ;
        }
        this._updateCount++;
    }
    endUpdate(_observable) {
        try {
            if (this._updateCount === 1) {
                do {
                    if (this._state === 1 /* AutorunState.dependenciesMightHaveChanged */ ) {
                        this._state = 3 /* AutorunState.upToDate */ ;
                        for (const d of this._dependencies){
                            d.reportChanges(); // Warning: external call!
                            if (this._state === 2 /* AutorunState.stale */ ) {
                                break;
                            }
                        }
                    }
                    if (this._state !== 3 /* AutorunState.upToDate */ ) {
                        this._run(); // Warning: indirect external call!
                    }
                }while (this._state !== 3 /* AutorunState.upToDate */ )
            }
        } finally{
            this._updateCount--;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFn"])(()=>this._updateCount >= 0);
    }
    handlePossibleChange(observable) {
        if (this._state === 3 /* AutorunState.upToDate */  && this._isDependency(observable)) {
            this._state = 1 /* AutorunState.dependenciesMightHaveChanged */ ;
        }
    }
    handleChange(observable, change) {
        if (this._isDependency(observable)) {
            var _getLogger;
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleAutorunDependencyChanged(this, observable, change);
            try {
                // Warning: external call!
                const shouldReact = this._changeTracker ? this._changeTracker.handleChange({
                    changedObservable: observable,
                    change,
                    didChange: (o)=>o === observable
                }, this._changeSummary) : true;
                if (shouldReact) {
                    this._state = 2 /* AutorunState.stale */ ;
                }
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBugIndicatingError"])(e);
            }
        }
    }
    _isDependency(observable) {
        return this._dependencies.has(observable) && !this._dependenciesToBeRemoved.has(observable);
    }
    // IReader implementation
    _ensureNoRunning() {
        if (!this._isRunning) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('The reader object cannot be used outside its compute function!');
        }
    }
    readObservable(observable) {
        this._ensureNoRunning();
        // In case the run action disposes the autorun
        if (this._disposed) {
            return observable.get(); // warning: external call!
        }
        observable.addObserver(this); // warning: external call!
        const value = observable.get(); // warning: external call!
        this._dependencies.add(observable);
        this._dependenciesToBeRemoved.delete(observable);
        return value;
    }
    get store() {
        this._ensureNoRunning();
        if (this._disposed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Cannot access store after dispose');
        }
        if (this._store === undefined) {
            this._store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        }
        return this._store;
    }
    debugGetState() {
        return {
            isRunning: this._isRunning,
            updateCount: this._updateCount,
            dependencies: this._dependencies,
            state: this._state,
            stateStr: autorunStateToString(this._state)
        };
    }
    debugRerun() {
        if (!this._isRunning) {
            this._run();
        } else {
            this._state = 2 /* AutorunState.stale */ ;
        }
    }
    constructor(_debugNameData, _runFn, _changeTracker, debugLocation){
        var _this__changeTracker, _getLogger;
        this._debugNameData = _debugNameData;
        this._runFn = _runFn;
        this._changeTracker = _changeTracker;
        this._state = 2 /* AutorunState.stale */ ;
        this._updateCount = 0;
        this._disposed = false;
        this._dependencies = new Set();
        this._dependenciesToBeRemoved = new Set();
        this._isRunning = false;
        this._store = undefined;
        this._delayedStore = undefined;
        this._changeSummary = (_this__changeTracker = this._changeTracker) === null || _this__changeTracker === void 0 ? void 0 : _this__changeTracker.createChangeSummary(undefined);
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleAutorunCreated(this, debugLocation);
        this._run();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDisposable"])(this);
    }
} //# sourceMappingURL=autorunImpl.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "autorun",
    ()=>autorun,
    "autorunDelta",
    ()=>autorunDelta,
    "autorunHandleChanges",
    ()=>autorunHandleChanges,
    "autorunOpts",
    ()=>autorunOpts,
    "autorunWithStore",
    ()=>autorunWithStore,
    "autorunWithStoreHandleChanges",
    ()=>autorunWithStoreHandleChanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorunImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
function autorun(fn) {
    let debugLocation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](undefined, undefined, fn), fn, undefined, debugLocation);
}
function autorunOpts(options, fn) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    var _options_debugReferenceFn;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, (_options_debugReferenceFn = options.debugReferenceFn) !== null && _options_debugReferenceFn !== void 0 ? _options_debugReferenceFn : fn), fn, undefined, debugLocation);
}
function autorunHandleChanges(options, fn) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    var _options_debugReferenceFn;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, (_options_debugReferenceFn = options.debugReferenceFn) !== null && _options_debugReferenceFn !== void 0 ? _options_debugReferenceFn : fn), fn, options.changeTracker, debugLocation);
}
function autorunWithStoreHandleChanges(options, fn) {
    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    var _options_debugReferenceFn;
    const disposable = autorunHandleChanges({
        owner: options.owner,
        debugName: options.debugName,
        debugReferenceFn: (_options_debugReferenceFn = options.debugReferenceFn) !== null && _options_debugReferenceFn !== void 0 ? _options_debugReferenceFn : fn,
        changeTracker: options.changeTracker
    }, (reader, changeSummary)=>{
        store.clear();
        fn(reader, changeSummary, store);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
        disposable.dispose();
        store.dispose();
    });
}
function autorunWithStore(fn) {
    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const disposable = autorunOpts({
        owner: undefined,
        debugName: undefined,
        debugReferenceFn: fn
    }, (reader)=>{
        store.clear();
        fn(reader, store);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
        disposable.dispose();
        store.dispose();
    });
}
function autorunDelta(observable, handler) {
    let _lastValue;
    return autorunOpts({
        debugReferenceFn: handler
    }, (reader)=>{
        const newValue = observable.read(reader);
        const lastValue = _lastValue;
        _lastValue = newValue;
        handler({
            lastValue,
            newValue
        });
    });
} //# sourceMappingURL=autorun.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Derived",
    ()=>Derived,
    "DerivedWithSetter",
    ()=>DerivedWithSetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
;
;
;
function derivedStateToString(state) {
    switch(state){
        case 0 /* DerivedState.initial */ :
            return 'initial';
        case 1 /* DerivedState.dependenciesMightHaveChanged */ :
            return 'dependenciesMightHaveChanged';
        case 2 /* DerivedState.stale */ :
            return 'stale';
        case 3 /* DerivedState.upToDate */ :
            return 'upToDate';
        default:
            return '<unknown>';
    }
}
class Derived extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    get debugName() {
        var _this__debugNameData_getDebugName;
        return (_this__debugNameData_getDebugName = this._debugNameData.getDebugName(this)) !== null && _this__debugNameData_getDebugName !== void 0 ? _this__debugNameData_getDebugName : '(anonymous)';
    }
    onLastObserverRemoved() {
        var _getLogger, _this__handleLastObserverRemoved, _this;
        /**
         * We are not tracking changes anymore, thus we have to assume
         * that our cache is invalid.
         */ this._state = 0 /* DerivedState.initial */ ;
        this._value = undefined;
        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleDerivedCleared(this);
        for (const d of this._dependencies){
            d.removeObserver(this);
        }
        this._dependencies.clear();
        if (this._store !== undefined) {
            this._store.dispose();
            this._store = undefined;
        }
        if (this._delayedStore !== undefined) {
            this._delayedStore.dispose();
            this._delayedStore = undefined;
        }
        (_this__handleLastObserverRemoved = (_this = this)._handleLastObserverRemoved) === null || _this__handleLastObserverRemoved === void 0 ? void 0 : _this__handleLastObserverRemoved.call(_this);
    }
    get() {
        const checkEnabled = false; // TODO set to true
        if (this._isComputing && checkEnabled) //TURBOPACK unreachable
        ;
        if (this._observers.size === 0) {
            let result;
            // Without observers, we don't know when to clean up stuff.
            // Thus, we don't cache anything to prevent memory leaks.
            try {
                this._isReaderValid = true;
                let changeSummary = undefined;
                if (this._changeTracker) {
                    var _this__changeTracker_beforeUpdate, _this__changeTracker;
                    changeSummary = this._changeTracker.createChangeSummary(undefined);
                    (_this__changeTracker_beforeUpdate = (_this__changeTracker = this._changeTracker).beforeUpdate) === null || _this__changeTracker_beforeUpdate === void 0 ? void 0 : _this__changeTracker_beforeUpdate.call(_this__changeTracker, this, changeSummary);
                }
                result = this._computeFn(this, changeSummary);
            } finally{
                this._isReaderValid = false;
            }
            // Clear new dependencies
            this.onLastObserverRemoved();
            return result;
        } else {
            do {
                // We might not get a notification for a dependency that changed while it is updating,
                // thus we also have to ask all our depedencies if they changed in this case.
                if (this._state === 1 /* DerivedState.dependenciesMightHaveChanged */ ) {
                    for (const d of this._dependencies){
                        /** might call {@link handleChange} indirectly, which could make us stale */ d.reportChanges();
                        if (this._state === 2 /* DerivedState.stale */ ) {
                            break;
                        }
                    }
                }
                // We called report changes of all dependencies.
                // If we are still not stale, we can assume to be up to date again.
                if (this._state === 1 /* DerivedState.dependenciesMightHaveChanged */ ) {
                    this._state = 3 /* DerivedState.upToDate */ ;
                }
                if (this._state !== 3 /* DerivedState.upToDate */ ) {
                    this._recompute();
                }
            // In case recomputation changed one of our dependencies, we need to recompute again.
            }while (this._state !== 3 /* DerivedState.upToDate */ )
            return this._value;
        }
    }
    _recompute() {
        let didChange = false;
        this._isComputing = true;
        this._didReportChange = false;
        const emptySet = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies;
        this._dependencies = emptySet;
        try {
            var _getLogger;
            const changeSummary = this._changeSummary;
            this._isReaderValid = true;
            if (this._changeTracker) {
                var _this__changeTracker_beforeUpdate, _this__changeTracker, _this__changeTracker1;
                this._isInBeforeUpdate = true;
                (_this__changeTracker_beforeUpdate = (_this__changeTracker = this._changeTracker).beforeUpdate) === null || _this__changeTracker_beforeUpdate === void 0 ? void 0 : _this__changeTracker_beforeUpdate.call(_this__changeTracker, this, changeSummary);
                this._isInBeforeUpdate = false;
                this._changeSummary = (_this__changeTracker1 = this._changeTracker) === null || _this__changeTracker1 === void 0 ? void 0 : _this__changeTracker1.createChangeSummary(changeSummary);
            }
            const hadValue = this._state !== 0 /* DerivedState.initial */ ;
            const oldValue = this._value;
            this._state = 3 /* DerivedState.upToDate */ ;
            const delayedStore = this._delayedStore;
            if (delayedStore !== undefined) {
                this._delayedStore = undefined;
            }
            try {
                if (this._store !== undefined) {
                    this._store.dispose();
                    this._store = undefined;
                }
                /** might call {@link handleChange} indirectly, which could invalidate us */ this._value = this._computeFn(this, changeSummary);
            } finally{
                this._isReaderValid = false;
                // We don't want our observed observables to think that they are (not even temporarily) not being observed.
                // Thus, we only unsubscribe from observables that are definitely not read anymore.
                for (const o of this._dependenciesToBeRemoved){
                    o.removeObserver(this);
                }
                this._dependenciesToBeRemoved.clear();
                if (delayedStore !== undefined) {
                    delayedStore.dispose();
                }
            }
            didChange = this._didReportChange || hadValue && !this._equalityComparator(oldValue, this._value);
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
                oldValue,
                newValue: this._value,
                change: undefined,
                didChange,
                hadValue
            });
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBugIndicatingError"])(e);
        }
        this._isComputing = false;
        if (!this._didReportChange && didChange) {
            for (const r of this._observers){
                r.handleChange(this, undefined);
            }
        } else {
            this._didReportChange = false;
        }
    }
    toString() {
        return "LazyDerived<".concat(this.debugName, ">");
    }
    // IObserver Implementation
    beginUpdate(_observable) {
        if (this._isUpdating) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Cyclic deriveds are not supported yet!');
        }
        this._updateCount++;
        this._isUpdating = true;
        try {
            const propagateBeginUpdate = this._updateCount === 1;
            if (this._state === 3 /* DerivedState.upToDate */ ) {
                this._state = 1 /* DerivedState.dependenciesMightHaveChanged */ ;
                // If we propagate begin update, that will already signal a possible change.
                if (!propagateBeginUpdate) {
                    for (const r of this._observers){
                        r.handlePossibleChange(this);
                    }
                }
            }
            if (propagateBeginUpdate) {
                for (const r of this._observers){
                    r.beginUpdate(this); // This signals a possible change
                }
            }
        } finally{
            this._isUpdating = false;
        }
    }
    endUpdate(_observable) {
        this._updateCount--;
        if (this._updateCount === 0) {
            // End update could change the observer list.
            const observers = [
                ...this._observers
            ];
            for (const r of observers){
                r.endUpdate(this);
            }
            if (this._removedObserverToCallEndUpdateOn) {
                const observers = [
                    ...this._removedObserverToCallEndUpdateOn
                ];
                this._removedObserverToCallEndUpdateOn = null;
                for (const r of observers){
                    r.endUpdate(this);
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertFn"])(()=>this._updateCount >= 0);
    }
    handlePossibleChange(observable) {
        // In all other states, observers already know that we might have changed.
        if (this._state === 3 /* DerivedState.upToDate */  && this._dependencies.has(observable) && !this._dependenciesToBeRemoved.has(observable)) {
            this._state = 1 /* DerivedState.dependenciesMightHaveChanged */ ;
            for (const r of this._observers){
                r.handlePossibleChange(this);
            }
        }
    }
    handleChange(observable, change) {
        if (this._dependencies.has(observable) && !this._dependenciesToBeRemoved.has(observable) || this._isInBeforeUpdate) {
            var _getLogger;
            (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleDerivedDependencyChanged(this, observable, change);
            let shouldReact = false;
            try {
                shouldReact = this._changeTracker ? this._changeTracker.handleChange({
                    changedObservable: observable,
                    change,
                    didChange: (o)=>o === observable
                }, this._changeSummary) : true;
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBugIndicatingError"])(e);
            }
            const wasUpToDate = this._state === 3 /* DerivedState.upToDate */ ;
            if (shouldReact && (this._state === 1 /* DerivedState.dependenciesMightHaveChanged */  || wasUpToDate)) {
                this._state = 2 /* DerivedState.stale */ ;
                if (wasUpToDate) {
                    for (const r of this._observers){
                        r.handlePossibleChange(this);
                    }
                }
            }
        }
    }
    // IReader Implementation
    _ensureReaderValid() {
        if (!this._isReaderValid) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('The reader object cannot be used outside its compute function!');
        }
    }
    readObservable(observable) {
        this._ensureReaderValid();
        // Subscribe before getting the value to enable caching
        observable.addObserver(this);
        /** This might call {@link handleChange} indirectly, which could invalidate us */ const value = observable.get();
        // Which is why we only add the observable to the dependencies now.
        this._dependencies.add(observable);
        this._dependenciesToBeRemoved.delete(observable);
        return value;
    }
    get store() {
        this._ensureReaderValid();
        if (this._store === undefined) {
            this._store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        }
        return this._store;
    }
    addObserver(observer) {
        const shouldCallBeginUpdate = !this._observers.has(observer) && this._updateCount > 0;
        super.addObserver(observer);
        if (shouldCallBeginUpdate) {
            if (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(observer)) {
                this._removedObserverToCallEndUpdateOn.delete(observer);
            } else {
                observer.beginUpdate(this);
            }
        }
    }
    removeObserver(observer) {
        if (this._observers.has(observer) && this._updateCount > 0) {
            if (!this._removedObserverToCallEndUpdateOn) {
                this._removedObserverToCallEndUpdateOn = new Set();
            }
            this._removedObserverToCallEndUpdateOn.add(observer);
        }
        super.removeObserver(observer);
    }
    debugGetState() {
        return {
            state: this._state,
            stateStr: derivedStateToString(this._state),
            updateCount: this._updateCount,
            isComputing: this._isComputing,
            dependencies: this._dependencies,
            value: this._value
        };
    }
    debugSetValue(newValue) {
        this._value = newValue;
    }
    debugRecompute() {
        if (!this._isComputing) {
            this._recompute();
        } else {
            this._state = 2 /* DerivedState.stale */ ;
        }
    }
    setValue(newValue, tx, change) {
        this._value = newValue;
        const observers = this._observers;
        tx.updateObserver(this, this);
        for (const d of observers){
            d.handleChange(this, change);
        }
    }
    constructor(_debugNameData, _computeFn, _changeTracker, _handleLastObserverRemoved = undefined, _equalityComparator, debugLocation){
        var _this__changeTracker;
        super(debugLocation);
        this._debugNameData = _debugNameData;
        this._computeFn = _computeFn;
        this._changeTracker = _changeTracker;
        this._handleLastObserverRemoved = _handleLastObserverRemoved;
        this._equalityComparator = _equalityComparator;
        this._state = 0 /* DerivedState.initial */ ;
        this._value = undefined;
        this._updateCount = 0;
        this._dependencies = new Set();
        this._dependenciesToBeRemoved = new Set();
        this._changeSummary = undefined;
        this._isUpdating = false;
        this._isComputing = false;
        this._didReportChange = false;
        this._isInBeforeUpdate = false;
        this._isReaderValid = false;
        this._store = undefined;
        this._delayedStore = undefined;
        this._removedObserverToCallEndUpdateOn = null;
        this._changeSummary = (_this__changeTracker = this._changeTracker) === null || _this__changeTracker === void 0 ? void 0 : _this__changeTracker.createChangeSummary(undefined);
    }
}
class DerivedWithSetter extends Derived {
    constructor(debugNameData, computeFn, changeTracker, handleLastObserverRemoved = undefined, equalityComparator, set, debugLocation){
        super(debugNameData, computeFn, changeTracker, handleLastObserverRemoved, equalityComparator, debugLocation);
        this.set = set;
    }
} //# sourceMappingURL=derivedImpl.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derived.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "derived",
    ()=>derived,
    "derivedDisposable",
    ()=>derivedDisposable,
    "derivedHandleChanges",
    ()=>derivedHandleChanges,
    "derivedOpts",
    ()=>derivedOpts,
    "derivedWithSetter",
    ()=>derivedWithSetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)");
;
;
;
;
;
function derived(computeFnOrOwner, computeFn) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    if (computeFn !== undefined) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](computeFnOrOwner, undefined, computeFn), computeFn, undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](undefined, undefined, computeFnOrOwner), computeFnOrOwner, undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
function derivedWithSetter(owner, computeFn, setter) {
    let debugLocation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DerivedWithSetter"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](owner, undefined, computeFn), computeFn, undefined, undefined, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], setter, debugLocation);
}
function derivedOpts(options, computeFn) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    var _options_equalsFn;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, options.debugReferenceFn), computeFn, undefined, options.onLastObserverRemoved, (_options_equalsFn = options.equalsFn) !== null && _options_equalsFn !== void 0 ? _options_equalsFn : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setDerivedOpts"])(derivedOpts);
function derivedHandleChanges(options, computeFn) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    var _options_equalityComparer;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, undefined), computeFn, options.changeTracker, undefined, (_options_equalityComparer = options.equalityComparer) !== null && _options_equalityComparer !== void 0 ? _options_equalityComparer : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
function derivedDisposable(computeFnOrOwner, computeFnOrUndefined) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    let computeFn;
    let owner;
    if (computeFnOrUndefined === undefined) {
        computeFn = computeFnOrOwner;
        owner = undefined;
    } else {
        owner = computeFnOrOwner;
        computeFn = computeFnOrUndefined;
    }
    let store = undefined;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](owner, undefined, computeFn), (r)=>{
        if (!store) {
            store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        } else {
            store.clear();
        }
        const result = computeFn(r);
        if (result) {
            store.add(result);
        }
        return result;
    }, undefined, ()=>{
        if (store) {
            store.dispose();
            store = undefined;
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
} //# sourceMappingURL=derived.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/promise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObservablePromise",
    ()=>ObservablePromise,
    "PromiseResult",
    ()=>PromiseResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
;
;
class ObservablePromise {
    constructor(promise){
        this._value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableValue"])(this, undefined);
        /**
         * The current state of the promise.
         * Is `undefined` if the promise didn't resolve yet.
         */ this.promiseResult = this._value;
        this.promise = promise.then((value)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                /** @description onPromiseResolved */ this._value.set(new PromiseResult(value, undefined), tx);
            });
            return value;
        }, (error)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                /** @description onPromiseRejected */ this._value.set(new PromiseResult(undefined, error), tx);
            });
            throw error;
        });
    }
}
class PromiseResult {
    /**
     * Returns the value if the promise resolved, otherwise throws the error.
     */ getDataOrThrow() {
        if (this.error) {
            throw this.error;
        }
        return this.data;
    }
    constructor(/**
     * The value of the resolved promise.
     * Undefined if the promise rejected.
     */ data, /**
     * The error in case of a rejected promise.
     * Undefined if the promise resolved.
     */ error){
        this.data = data;
        this.error = error;
    }
} //# sourceMappingURL=promise.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/cancellation.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)"); //# sourceMappingURL=cancellation.js.map
;
;
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utilsCancellation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "waitForState",
    ()=>waitForState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/cancellation.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)");
;
;
function waitForState(observable, predicate, isError, cancellationToken) {
    if (!predicate) {
        predicate = (state)=>state !== null && state !== undefined;
    }
    return new Promise((resolve, reject)=>{
        let isImmediateRun = true;
        let shouldDispose = false;
        const stateObs = observable.map((state)=>{
            /** @description waitForState.state */ return {
                isFinished: predicate(state),
                error: isError ? isError(state) : false,
                state
            };
        });
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description waitForState */ const { isFinished, error, state } = stateObs.read(reader);
            if (isFinished || error) {
                if (isImmediateRun) {
                    // The variable `d` is not initialized yet
                    shouldDispose = true;
                } else {
                    d.dispose();
                }
                if (error) {
                    reject(error === true ? state : error);
                } else {
                    resolve(state);
                }
            }
        });
        if (cancellationToken) {
            const dc = cancellationToken.onCancellationRequested(()=>{
                d.dispose();
                dc.dispose();
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationError"]());
            });
            if (cancellationToken.isCancellationRequested) {
                d.dispose();
                dc.dispose();
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationError"]());
                return;
            }
        }
        isImmediateRun = false;
        if (shouldDispose) {
            d.dispose();
        }
    });
} //# sourceMappingURL=utilsCancellation.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "FromEventObservable",
    ()=>FromEventObservable,
    "observableFromEvent",
    ()=>observableFromEvent,
    "observableFromEventOpts",
    ()=>observableFromEventOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
;
;
function observableFromEvent() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let owner;
    let event;
    let getValue;
    let debugLocation;
    if (args.length === 2) {
        [event, getValue] = args;
    } else {
        [owner, event, getValue, debugLocation] = args;
    }
    return new FromEventObservable(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](owner, undefined, getValue), event, getValue, ()=>FromEventObservable.globalTransaction, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation !== null && debugLocation !== void 0 ? debugLocation : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller());
}
function observableFromEventOpts(options, event, getValue) {
    let debugLocation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    var _options_debugReferenceFn, _options_equalsFn;
    return new FromEventObservable(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](options.owner, options.debugName, (_options_debugReferenceFn = options.debugReferenceFn) !== null && _options_debugReferenceFn !== void 0 ? _options_debugReferenceFn : getValue), event, getValue, ()=>FromEventObservable.globalTransaction, (_options_equalsFn = options.equalsFn) !== null && _options_equalsFn !== void 0 ? _options_equalsFn : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], debugLocation);
}
class FromEventObservable extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    getDebugName() {
        return this._debugNameData.getDebugName(this);
    }
    get debugName() {
        const name = this.getDebugName();
        return 'From Event' + (name ? ": ".concat(name) : '');
    }
    onFirstObserverAdded() {
        this._subscription = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this._subscription.dispose();
        this._subscription = undefined;
        this._hasValue = false;
        this._value = undefined;
    }
    get() {
        if (this._subscription) {
            if (!this._hasValue) {
                this.handleEvent(undefined);
            }
            return this._value;
        } else {
            // no cache, as there are no subscribers to keep it updated
            const value = this._getValue(undefined);
            return value;
        }
    }
    debugSetValue(value) {
        this._value = value;
    }
    debugGetState() {
        return {
            value: this._value,
            hasValue: this._hasValue
        };
    }
    constructor(_debugNameData, event, _getValue, _getTransaction, _equalityComparator, debugLocation){
        super(debugLocation);
        this._debugNameData = _debugNameData;
        this.event = event;
        this._getValue = _getValue;
        this._getTransaction = _getTransaction;
        this._equalityComparator = _equalityComparator;
        this._hasValue = false;
        this.handleEvent = (args)=>{
            const newValue = this._getValue(args);
            const oldValue = this._value;
            const didChange = !this._hasValue || !this._equalityComparator(oldValue, newValue);
            let didRunTransaction = false;
            if (didChange) {
                this._value = newValue;
                if (this._hasValue) {
                    didRunTransaction = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtransaction"])(this._getTransaction(), (tx)=>{
                        var _getLogger;
                        (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
                            oldValue,
                            newValue,
                            change: undefined,
                            didChange,
                            hadValue: this._hasValue
                        });
                        for (const o of this._observers){
                            tx.updateObserver(o, this);
                            o.handleChange(this, undefined);
                        }
                    }, ()=>{
                        const name = this.getDebugName();
                        return 'Event fired' + (name ? ": ".concat(name) : '');
                    });
                }
                this._hasValue = true;
            }
            if (!didRunTransaction) {
                var _getLogger;
                (_getLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])()) === null || _getLogger === void 0 ? void 0 : _getLogger.handleObservableUpdated(this, {
                    oldValue,
                    newValue,
                    change: undefined,
                    didChange,
                    hadValue: this._hasValue
                });
            }
        };
    }
}
(function(observableFromEvent) {
    observableFromEvent.Observer = FromEventObservable;
    function batchEventsGlobally(tx, fn) {
        let didSet = false;
        if (FromEventObservable.globalTransaction === undefined) {
            FromEventObservable.globalTransaction = tx;
            didSet = true;
        }
        try {
            fn();
        } finally{
            if (didSet) {
                FromEventObservable.globalTransaction = undefined;
            }
        }
    }
    observableFromEvent.batchEventsGlobally = batchEventsGlobally;
})(observableFromEvent || (observableFromEvent = {})); //# sourceMappingURL=observableFromEvent.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "observableSignal",
    ()=>observableSignal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
function observableSignal(debugNameOrOwner) {
    let debugLocation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    if (typeof debugNameOrOwner === 'string') {
        return new ObservableSignal(debugNameOrOwner, undefined, debugLocation);
    } else {
        return new ObservableSignal(undefined, debugNameOrOwner, debugLocation);
    }
}
class ObservableSignal extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    get debugName() {
        var _getDebugName;
        return (_getDebugName = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](this._owner, this._debugName, undefined).getDebugName(this)) !== null && _getDebugName !== void 0 ? _getDebugName : 'Observable Signal';
    }
    toString() {
        return this.debugName;
    }
    trigger(tx, change) {
        if (!tx) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                this.trigger(tx, change);
            }, ()=>"Trigger signal ".concat(this.debugName));
            return;
        }
        for (const o of this._observers){
            tx.updateObserver(o, this);
            o.handleChange(this, change);
        }
    }
    get() {
    // NO OP
    }
    constructor(_debugName, _owner, debugLocation){
        super(debugLocation);
        this._debugName = _debugName;
        this._owner = _owner;
    }
} //# sourceMappingURL=observableSignal.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "KeepAliveObserver",
    ()=>KeepAliveObserver,
    "debouncedObservable",
    ()=>debouncedObservable,
    "derivedObservableWithCache",
    ()=>derivedObservableWithCache,
    "derivedObservableWithWritableCache",
    ()=>derivedObservableWithWritableCache,
    "keepObserved",
    ()=>keepObserved,
    "mapObservableArrayCached",
    ()=>mapObservableArrayCached,
    "recomputeInitiallyAndOnChange",
    ()=>recomputeInitiallyAndOnChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derived.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
;
;
;
;
;
;
function debouncedObservable(observable, debounceMs) {
    let hasValue = false;
    let lastValue;
    let timeout = undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromEvent"])((cb)=>{
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            const value = observable.read(reader);
            if (!hasValue) {
                hasValue = true;
                lastValue = value;
            } else {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(()=>{
                    lastValue = value;
                    cb();
                }, debounceMs);
            }
        });
        return {
            dispose () {
                d.dispose();
                hasValue = false;
                lastValue = undefined;
            }
        };
    }, ()=>{
        if (hasValue) {
            return lastValue;
        } else {
            return observable.get();
        }
    });
}
function keepObserved(observable) {
    const o = new KeepAliveObserver(false, undefined);
    observable.addObserver(o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
        observable.removeObserver(o);
    });
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setKeepObserved"])(keepObserved);
function recomputeInitiallyAndOnChange(observable, handleValue) {
    const o = new KeepAliveObserver(true, handleValue);
    observable.addObserver(o);
    try {
        o.beginUpdate(observable);
    } finally{
        o.endUpdate(observable);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
        observable.removeObserver(o);
    });
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setRecomputeInitiallyAndOnChange"])(recomputeInitiallyAndOnChange);
class KeepAliveObserver {
    beginUpdate(observable) {
        this._counter++;
    }
    endUpdate(observable) {
        if (this._counter === 1 && this._forceRecompute) {
            if (this._handleValue) {
                this._handleValue(observable.get());
            } else {
                observable.reportChanges();
            }
        }
        this._counter--;
    }
    handlePossibleChange(observable) {
    // NO OP
    }
    handleChange(observable, change) {
    // NO OP
    }
    constructor(_forceRecompute, _handleValue){
        this._forceRecompute = _forceRecompute;
        this._handleValue = _handleValue;
        this._counter = 0;
    }
}
function derivedObservableWithCache(owner, computeFn) {
    let lastValue = undefined;
    const observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"])({
        owner,
        debugReferenceFn: computeFn
    }, (reader)=>{
        lastValue = computeFn(reader, lastValue);
        return lastValue;
    });
    return observable;
}
function derivedObservableWithWritableCache(owner, computeFn) {
    let lastValue = undefined;
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableSignal"])('derivedObservableWithWritableCache');
    const observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])(owner, (reader)=>{
        onChange.read(reader);
        lastValue = computeFn(reader, lastValue);
        return lastValue;
    });
    return Object.assign(observable, {
        clearCache: (tx)=>{
            lastValue = undefined;
            onChange.trigger(tx);
        },
        setCache: (newValue, tx)=>{
            lastValue = newValue;
            onChange.trigger(tx);
        }
    });
}
function mapObservableArrayCached(owner, items, map, keySelector) {
    let m = new ArrayMap(map, keySelector);
    const self = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"])({
        debugReferenceFn: map,
        owner,
        onLastObserverRemoved: ()=>{
            m.dispose();
            m = new ArrayMap(map);
        }
    }, (reader)=>{
        m.setItems(items.read(reader));
        return m.getItems();
    });
    return self;
}
class ArrayMap {
    dispose() {
        this._cache.forEach((entry)=>entry.store.dispose());
        this._cache.clear();
    }
    setItems(items) {
        const newItems = [];
        const itemsToRemove = new Set(this._cache.keys());
        for (const item of items){
            const key = this._keySelector ? this._keySelector(item) : item;
            let entry = this._cache.get(key);
            if (!entry) {
                const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
                const out = this._map(item, store);
                entry = {
                    out,
                    store
                };
                this._cache.set(key, entry);
            } else {
                itemsToRemove.delete(key);
            }
            newItems.push(entry.out);
        }
        for (const item of itemsToRemove){
            const entry = this._cache.get(item);
            entry.store.dispose();
            this._cache.delete(item);
        }
        this._items = newItems;
    }
    getItems() {
        return this._items;
    }
    constructor(_map, _keySelector){
        this._map = _map;
        this._keySelector = _keySelector;
        this._cache = new Map();
        this._items = [];
    }
} //# sourceMappingURL=utils.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/changeTracker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "recordChanges",
    ()=>recordChanges,
    "recordChangesLazy",
    ()=>recordChangesLazy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
;
function recordChanges(obs) {
    return {
        createChangeSummary: (_previousChangeSummary)=>{
            return {
                changes: []
            };
        },
        handleChange (ctx, changeSummary) {
            for(const key in obs){
                if (ctx.didChange(obs[key])) {
                    changeSummary.changes.push({
                        key,
                        change: ctx.change
                    });
                }
            }
            return true;
        },
        beforeUpdate (reader, changeSummary) {
            for(const key in obs){
                if (key === 'changes') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('property name "changes" is reserved for change tracking');
                }
                changeSummary[key] = obs[key].read(reader);
            }
        }
    };
}
function recordChangesLazy(getObs) {
    let obs = undefined;
    return {
        createChangeSummary: (_previousChangeSummary)=>{
            return {
                changes: []
            };
        },
        handleChange (ctx, changeSummary) {
            if (!obs) {
                obs = getObs();
            }
            for(const key in obs){
                if (ctx.didChange(obs[key])) {
                    changeSummary.changes.push({
                        key,
                        change: ctx.change
                    });
                }
            }
            return true;
        },
        beforeUpdate (reader, changeSummary) {
            if (!obs) {
                obs = getObs();
            }
            for(const key in obs){
                if (key === 'changes') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('property name "changes" is reserved for change tracking');
                }
                changeSummary[key] = obs[key].read(reader);
            }
        }
    };
} //# sourceMappingURL=changeTracker.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/constObservable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "constObservable",
    ()=>constObservable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
;
function constObservable(value) {
    return new ConstObservable(value);
}
class ConstObservable extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvenientObservable"] {
    get debugName() {
        return this.toString();
    }
    get() {
        return this.value;
    }
    addObserver(observer) {
    // NO OP
    }
    removeObserver(observer) {
    // NO OP
    }
    toString() {
        return "Const: ".concat(this.value);
    }
    constructor(value){
        super();
        this.value = value;
    }
} //# sourceMappingURL=constObservable.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignalFromEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "observableSignalFromEvent",
    ()=>observableSignalFromEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
function observableSignalFromEvent(owner, event) {
    let debugLocation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller();
    return new FromEventObservableSignal(typeof owner === 'string' ? owner : new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](owner, undefined, undefined), event, debugLocation);
}
class FromEventObservableSignal extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseObservable"] {
    onFirstObserverAdded() {
        this.subscription = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this.subscription.dispose();
        this.subscription = undefined;
    }
    get() {
    // NO OP
    }
    constructor(debugNameDataOrName, event, debugLocation){
        super(debugLocation);
        this.event = event;
        this.handleEvent = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
                for (const o of this._observers){
                    tx.updateObserver(o, this);
                    o.handleChange(this, undefined);
                }
            }, ()=>this.debugName);
        };
        var _debugNameDataOrName_getDebugName;
        this.debugName = typeof debugNameDataOrName === 'string' ? debugNameDataOrName : (_debugNameDataOrName_getDebugName = debugNameDataOrName.getDebugName(this)) !== null && _debugNameDataOrName_getDebugName !== void 0 ? _debugNameDataOrName_getDebugName : 'Observable Signal From Event';
    }
} //# sourceMappingURL=observableSignalFromEvent.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/valueWithChangeEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ValueWithChangeEventFromObservable",
    ()=>ValueWithChangeEventFromObservable,
    "observableFromValueWithChangeEvent",
    ()=>observableFromValueWithChangeEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
;
;
class ValueWithChangeEventFromObservable {
    get onDidChange() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].fromObservableLight(this.observable);
    }
    get value() {
        return this.observable.get();
    }
    constructor(observable){
        this.observable = observable;
    }
}
function observableFromValueWithChangeEvent(owner, value) {
    if (value instanceof ValueWithChangeEventFromObservable) {
        return value.observable;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromEvent"])(owner, value.onDidChange, ()=>value.value);
} //# sourceMappingURL=valueWithChangeEvent.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/runOnChange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "runOnChange",
    ()=>runOnChange,
    "runOnChangeWithCancellationToken",
    ()=>runOnChangeWithCancellationToken,
    "runOnChangeWithStore",
    ()=>runOnChangeWithStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/cancellation.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)");
;
;
;
function runOnChange(observable, cb) {
    let _previousValue;
    let _firstRun = true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunWithStoreHandleChanges"])({
        changeTracker: {
            createChangeSummary: ()=>({
                    deltas: [],
                    didChange: false
                }),
            handleChange: (context, changeSummary)=>{
                if (context.didChange(observable)) {
                    const e = context.change;
                    if (e !== undefined) {
                        changeSummary.deltas.push(e);
                    }
                    changeSummary.didChange = true;
                }
                return true;
            }
        }
    }, (reader, changeSummary)=>{
        const value = observable.read(reader);
        const previousValue = _previousValue;
        if (changeSummary.didChange) {
            _previousValue = value;
            // didChange can never be true on the first autorun, so we know previousValue is defined
            cb(value, previousValue, changeSummary.deltas);
        }
        if (_firstRun) {
            _firstRun = false;
            _previousValue = value;
        }
    });
}
function runOnChangeWithStore(observable, cb) {
    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const disposable = runOnChange(observable, (value, previousValue, deltas)=>{
        store.clear();
        cb(value, previousValue, deltas, store);
    });
    return {
        dispose () {
            disposable.dispose();
            store.dispose();
        }
    };
}
function runOnChangeWithCancellationToken(observable, cb) {
    return runOnChangeWithStore(observable, (value, previousValue, deltas, store)=>{
        cb(value, previousValue, deltas, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelOnDispose"])(store));
    });
} //# sourceMappingURL=runOnChange.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/experimental/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "derivedConstOnceDefined",
    ()=>derivedConstOnceDefined
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utils.js [app-client] (ecmascript)");
;
function derivedConstOnceDefined(owner, fn) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedObservableWithCache"])(owner, (reader, lastValue)=>lastValue !== null && lastValue !== void 0 ? lastValue : fn(reader));
} //# sourceMappingURL=utils.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/consoleObservableLogger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ConsoleObservableLogger",
    ()=>ConsoleObservableLogger,
    "formatValue",
    ()=>formatValue,
    "logObservableToConsole",
    ()=>logObservableToConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)");
;
;
;
let consoleObservableLogger;
function logObservableToConsole(obs) {
    if (!consoleObservableLogger) {
        consoleObservableLogger = new ConsoleObservableLogger();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLogger"])(consoleObservableLogger);
    }
    consoleObservableLogger.addFilteredObj(obs);
}
class ConsoleObservableLogger {
    addFilteredObj(obj) {
        if (!this._filteredObjects) {
            this._filteredObjects = new Set();
        }
        this._filteredObjects.add(obj);
    }
    _isIncluded(obj) {
        var _this__filteredObjects;
        var _this__filteredObjects_has;
        return (_this__filteredObjects_has = (_this__filteredObjects = this._filteredObjects) === null || _this__filteredObjects === void 0 ? void 0 : _this__filteredObjects.has(obj)) !== null && _this__filteredObjects_has !== void 0 ? _this__filteredObjects_has : true;
    }
    textToConsoleArgs(text) {
        return consoleTextToArgs([
            normalText(repeat('|  ', this.indentation)),
            text
        ]);
    }
    formatInfo(info) {
        if (!info.hadValue) {
            return [
                normalText(" "),
                styled(formatValue(info.newValue, 60), {
                    color: 'green'
                }),
                normalText(" (initial)")
            ];
        }
        return info.didChange ? [
            normalText(" "),
            styled(formatValue(info.oldValue, 70), {
                color: 'red',
                strikeThrough: true
            }),
            normalText(" "),
            styled(formatValue(info.newValue, 60), {
                color: 'green'
            })
        ] : [
            normalText(" (unchanged)")
        ];
    }
    handleObservableCreated(observable) {
        if (observable instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            const derived = observable;
            this.changedObservablesSets.set(derived, new Set());
            const debugTrackUpdating = false;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }
    handleOnListenerCountChanged(observable, newCount) {}
    handleObservableUpdated(observable, info) {
        if (!this._isIncluded(observable)) {
            return;
        }
        if (observable instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            this._handleDerivedRecomputed(observable, info);
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('observable value changed'),
            styled(observable.debugName, {
                color: 'BlueViolet'
            }),
            ...this.formatInfo(info)
        ]));
    }
    formatChanges(changes) {
        if (changes.size === 0) {
            return undefined;
        }
        return styled(' (changed deps: ' + [
            ...changes
        ].map((o)=>o.debugName).join(', ') + ')', {
            color: 'gray'
        });
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        var _this_changedObservablesSets_get;
        if (!this._isIncluded(derived)) {
            return;
        }
        (_this_changedObservablesSets_get = this.changedObservablesSets.get(derived)) === null || _this_changedObservablesSets_get === void 0 ? void 0 : _this_changedObservablesSets_get.add(observable);
    }
    _handleDerivedRecomputed(derived, info) {
        if (!this._isIncluded(derived)) {
            return;
        }
        const changedObservables = this.changedObservablesSets.get(derived);
        if (!changedObservables) {
            return;
        }
        var _derived__debugNameData_referenceFn;
        console.log(...this.textToConsoleArgs([
            formatKind('derived recomputed'),
            styled(derived.debugName, {
                color: 'BlueViolet'
            }),
            ...this.formatInfo(info),
            this.formatChanges(changedObservables),
            {
                data: [
                    {
                        fn: (_derived__debugNameData_referenceFn = derived._debugNameData.referenceFn) !== null && _derived__debugNameData_referenceFn !== void 0 ? _derived__debugNameData_referenceFn : derived._computeFn
                    }
                ]
            }
        ]));
        changedObservables.clear();
    }
    handleDerivedCleared(derived) {
        if (!this._isIncluded(derived)) {
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('derived cleared'),
            styled(derived.debugName, {
                color: 'BlueViolet'
            })
        ]));
    }
    handleAutorunCreated(autorun) {
        if (!this._isIncluded(autorun)) {
            return;
        }
        this.changedObservablesSets.set(autorun, new Set());
    }
    handleAutorunDisposed(autorun) {}
    handleAutorunDependencyChanged(autorun, observable, change) {
        if (!this._isIncluded(autorun)) {
            return;
        }
        this.changedObservablesSets.get(autorun).add(observable);
    }
    handleAutorunStarted(autorun) {
        const changedObservables = this.changedObservablesSets.get(autorun);
        if (!changedObservables) {
            return;
        }
        if (this._isIncluded(autorun)) {
            var _autorun__debugNameData_referenceFn;
            console.log(...this.textToConsoleArgs([
                formatKind('autorun'),
                styled(autorun.debugName, {
                    color: 'BlueViolet'
                }),
                this.formatChanges(changedObservables),
                {
                    data: [
                        {
                            fn: (_autorun__debugNameData_referenceFn = autorun._debugNameData.referenceFn) !== null && _autorun__debugNameData_referenceFn !== void 0 ? _autorun__debugNameData_referenceFn : autorun._runFn
                        }
                    ]
                }
            ]));
        }
        changedObservables.clear();
        this.indentation++;
    }
    handleAutorunFinished(autorun) {
        this.indentation--;
    }
    handleBeginTransaction(transaction) {
        let transactionName = transaction.getDebugName();
        if (transactionName === undefined) {
            transactionName = '';
        }
        if (this._isIncluded(transaction)) {
            console.log(...this.textToConsoleArgs([
                formatKind('transaction'),
                styled(transactionName, {
                    color: 'BlueViolet'
                }),
                {
                    data: [
                        {
                            fn: transaction._fn
                        }
                    ]
                }
            ]));
        }
        this.indentation++;
    }
    handleEndTransaction() {
        this.indentation--;
    }
    constructor(){
        this.indentation = 0;
        this.changedObservablesSets = new WeakMap();
    }
}
function consoleTextToArgs(text) {
    const styles = new Array();
    const data = [];
    let firstArg = '';
    function process(t) {
        if ('length' in t) {
            for (const item of t){
                if (item) {
                    process(item);
                }
            }
        } else if ('text' in t) {
            firstArg += "%c".concat(t.text);
            styles.push(t.style);
            if (t.data) {
                data.push(...t.data);
            }
        } else if ('data' in t) {
            data.push(...t.data);
        }
    }
    process(text);
    const result = [
        firstArg,
        ...styles
    ];
    result.push(...data);
    return result;
}
function normalText(text) {
    return styled(text, {
        color: 'black'
    });
}
function formatKind(kind) {
    return styled(padStr("".concat(kind, ": "), 10), {
        color: 'black',
        bold: true
    });
}
function styled(text) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        color: 'black'
    };
    function objToCss(styleObj) {
        return Object.entries(styleObj).reduce((styleString, param)=>{
            let [propName, propValue] = param;
            return "".concat(styleString).concat(propName, ":").concat(propValue, ";");
        }, '');
    }
    const style = {
        color: options.color
    };
    if (options.strikeThrough) {
        style['text-decoration'] = 'line-through';
    }
    if (options.bold) {
        style['font-weight'] = 'bold';
    }
    return {
        text,
        style: objToCss(style)
    };
}
function formatValue(value, availableLen) {
    switch(typeof value){
        case 'number':
            return '' + value;
        case 'string':
            if (value.length + 2 <= availableLen) {
                return '"'.concat(value, '"');
            }
            return '"'.concat(value.substr(0, availableLen - 7), '"+...');
        case 'boolean':
            return value ? 'true' : 'false';
        case 'undefined':
            return 'undefined';
        case 'object':
            if (value === null) {
                return 'null';
            }
            if (Array.isArray(value)) {
                return formatArray(value, availableLen);
            }
            return formatObject(value, availableLen);
        case 'symbol':
            return value.toString();
        case 'function':
            return "[[Function".concat(value.name ? ' ' + value.name : '', "]]");
        default:
            return '' + value;
    }
}
function formatArray(value, availableLen) {
    let result = '[ ';
    let first = true;
    for (const val of value){
        if (!first) {
            result += ', ';
        }
        if (result.length - 5 > availableLen) {
            result += '...';
            break;
        }
        first = false;
        result += "".concat(formatValue(val, availableLen - result.length));
    }
    result += ' ]';
    return result;
}
function formatObject(value, availableLen) {
    if (typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
        const val = value.toString();
        if (val.length <= availableLen) {
            return val;
        }
        return val.substring(0, availableLen - 3) + '...';
    }
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClassName"])(value);
    let result = className ? className + '(' : '{ ';
    let first = true;
    for (const [key, val] of Object.entries(value)){
        if (!first) {
            result += ', ';
        }
        if (result.length - 5 > availableLen) {
            result += '...';
            break;
        }
        first = false;
        result += "".concat(key, ": ").concat(formatValue(val, availableLen - result.length));
    }
    result += className ? ')' : ' }';
    return result;
}
function repeat(str, count) {
    let result = '';
    for(let i = 1; i <= count; i++){
        result += str;
    }
    return result;
}
function padStr(str, length) {
    while(str.length < length){
        str += ' ';
    }
    return str;
} //# sourceMappingURL=consoleObservableLogger.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/rpc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "SimpleTypedRpcConnection",
    ()=>SimpleTypedRpcConnection
]);
class SimpleTypedRpcConnection {
    static createClient(channelFactory, getHandler) {
        return new SimpleTypedRpcConnection(channelFactory, getHandler);
    }
    constructor(_channelFactory, _getHandler){
        this._channelFactory = _channelFactory;
        this._getHandler = _getHandler;
        this._channel = this._channelFactory({
            handleNotification: (notificationData)=>{
                const m = notificationData;
                const fn = this._getHandler().notifications[m[0]];
                if (!fn) {
                    throw new Error('Unknown notification "'.concat(m[0], '"!'));
                }
                fn(...m[1]);
            },
            handleRequest: (requestData)=>{
                const m = requestData;
                try {
                    const result = this._getHandler().requests[m[0]](...m[1]);
                    return {
                        type: 'result',
                        value: result
                    };
                } catch (e) {
                    return {
                        type: 'error',
                        value: e
                    };
                }
            }
        });
        const requests = new Proxy({}, {
            get: (target, key)=>{
                var _this = this;
                return async function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    const result = await _this._channel.sendRequest([
                        key,
                        args
                    ]);
                    if (result.type === 'error') {
                        throw result.value;
                    } else {
                        return result.value;
                    }
                };
            }
        });
        const notifications = new Proxy({}, {
            get: (target, key)=>{
                var _this = this;
                return function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    _this._channel.sendNotification([
                        key,
                        args
                    ]);
                };
            }
        });
        this.api = {
            notifications: notifications,
            requests: requests
        };
    }
} //# sourceMappingURL=rpc.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/debuggerRpc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "registerDebugChannel",
    ()=>registerDebugChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/rpc.js [app-client] (ecmascript)");
;
function registerDebugChannel(channelId, createClient) {
    const g = globalThis;
    let queuedNotifications = [];
    let curHost = undefined;
    const { channel, handler } = createChannelFactoryFromDebugChannel({
        sendNotification: (data)=>{
            if (curHost) {
                curHost.sendNotification(data);
            } else {
                queuedNotifications.push(data);
            }
        }
    });
    let curClient = undefined;
    var _g_$$debugValueEditor_debugChannels;
    ((_g_$$debugValueEditor_debugChannels = g.$$debugValueEditor_debugChannels) !== null && _g_$$debugValueEditor_debugChannels !== void 0 ? _g_$$debugValueEditor_debugChannels : g.$$debugValueEditor_debugChannels = {})[channelId] = (host)=>{
        curClient = createClient();
        curHost = host;
        for (const n of queuedNotifications){
            host.sendNotification(n);
        }
        queuedNotifications = [];
        return handler;
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleTypedRpcConnection"].createClient(channel, ()=>{
        if (!curClient) {
            throw new Error('Not supported');
        }
        return curClient;
    });
}
function createChannelFactoryFromDebugChannel(host) {
    let h;
    const channel = (handler)=>{
        h = handler;
        return {
            sendNotification: (data)=>{
                host.sendNotification(data);
            },
            sendRequest: (data)=>{
                throw new Error('not supported');
            }
        };
    };
    return {
        channel: channel,
        handler: {
            handleRequest: (data)=>{
                if (data.type === 'notification') {
                    return h === null || h === void 0 ? void 0 : h.handleNotification(data.data);
                } else {
                    return h === null || h === void 0 ? void 0 : h.handleRequest(data.data);
                }
            }
        }
    };
} //# sourceMappingURL=debuggerRpc.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Throttler",
    ()=>Throttler,
    "deepAssign",
    ()=>deepAssign,
    "deepAssignDeleteNulls",
    ()=>deepAssignDeleteNulls
]);
class Throttler {
    throttle(fn, timeoutMs) {
        if (this._timeout === undefined) {
            this._timeout = setTimeout(()=>{
                this._timeout = undefined;
                fn();
            }, timeoutMs);
        }
    }
    dispose() {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
        }
    }
    constructor(){
        this._timeout = undefined;
    }
}
function deepAssign(target, source) {
    for(const key in source){
        if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssign(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}
function deepAssignDeleteNulls(target, source) {
    for(const key in source){
        if (source[key] === null) {
            delete target[key];
        } else if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssignDeleteNulls(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
} //# sourceMappingURL=utils.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/devToolsLogger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DevToolsLogger",
    ()=>DevToolsLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorunImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/consoleObservableLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$debuggerRpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/debuggerRpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
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
class DevToolsLogger {
    static getInstance() {
        if (DevToolsLogger._instance === undefined) {
            DevToolsLogger._instance = new DevToolsLogger();
        }
        return DevToolsLogger._instance;
    }
    getTransactionState() {
        const affected = [];
        const txs = [
            ...this._activeTransactions
        ];
        if (txs.length === 0) {
            return undefined;
        }
        const observerQueue = txs.flatMap((t)=>{
            var _t_debugGetUpdatingObservers;
            return (_t_debugGetUpdatingObservers = t.debugGetUpdatingObservers()) !== null && _t_debugGetUpdatingObservers !== void 0 ? _t_debugGetUpdatingObservers : [];
        }).map((o)=>o.observer);
        const processedObservers = new Set();
        while(observerQueue.length > 0){
            const observer = observerQueue.shift();
            if (processedObservers.has(observer)) {
                continue;
            }
            processedObservers.add(observer);
            const state = this._getInfo(observer, (d)=>{
                if (!processedObservers.has(d)) {
                    observerQueue.push(d);
                }
            });
            if (state) {
                affected.push(state);
            }
        }
        return {
            names: txs.map((t)=>{
                var _t_getDebugName;
                return (_t_getDebugName = t.getDebugName()) !== null && _t_getDebugName !== void 0 ? _t_getDebugName : 'tx';
            }),
            affected
        };
    }
    _getObservableInfo(observable) {
        const info = this._instanceInfos.get(observable);
        if (!info) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('No info found'));
            return undefined;
        }
        return info;
    }
    _getAutorunInfo(autorun) {
        const info = this._instanceInfos.get(autorun);
        if (!info) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('No info found'));
            return undefined;
        }
        return info;
    }
    _getInfo(observer, queue) {
        if (observer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            const observersToUpdate = [
                ...observer.debugGetObservers()
            ];
            for (const o of observersToUpdate){
                queue(o);
            }
            const info = this._getObservableInfo(observer);
            if (!info) {
                return;
            }
            const observerState = observer.debugGetState();
            const base = {
                name: observer.debugName,
                instanceId: info.instanceId,
                updateCount: observerState.updateCount
            };
            const changedDependencies = [
                ...info.changedObservables
            ].map((o)=>{
                var _this__instanceInfos_get;
                return (_this__instanceInfos_get = this._instanceInfos.get(o)) === null || _this__instanceInfos_get === void 0 ? void 0 : _this__instanceInfos_get.instanceId;
            }).filter(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"]);
            if (observerState.isComputing) {
                return {
                    ...base,
                    type: 'observable/derived',
                    state: 'updating',
                    changedDependencies,
                    initialComputation: false
                };
            }
            switch(observerState.state){
                case 0 /* DerivedState.initial */ :
                    return {
                        ...base,
                        type: 'observable/derived',
                        state: 'noValue'
                    };
                case 3 /* DerivedState.upToDate */ :
                    return {
                        ...base,
                        type: 'observable/derived',
                        state: 'upToDate'
                    };
                case 2 /* DerivedState.stale */ :
                    return {
                        ...base,
                        type: 'observable/derived',
                        state: 'stale',
                        changedDependencies
                    };
                case 1 /* DerivedState.dependenciesMightHaveChanged */ :
                    return {
                        ...base,
                        type: 'observable/derived',
                        state: 'possiblyStale'
                    };
            }
        } else if (observer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"]) {
            const info = this._getAutorunInfo(observer);
            if (!info) {
                return undefined;
            }
            const base = {
                name: observer.debugName,
                instanceId: info.instanceId,
                updateCount: info.updateCount
            };
            const changedDependencies = [
                ...info.changedObservables
            ].map((o)=>this._instanceInfos.get(o).instanceId);
            if (observer.debugGetState().isRunning) {
                return {
                    ...base,
                    type: 'autorun',
                    state: 'updating',
                    changedDependencies
                };
            }
            switch(observer.debugGetState().state){
                case 3 /* AutorunState.upToDate */ :
                    return {
                        ...base,
                        type: 'autorun',
                        state: 'upToDate'
                    };
                case 2 /* AutorunState.stale */ :
                    return {
                        ...base,
                        type: 'autorun',
                        state: 'stale',
                        changedDependencies
                    };
                case 1 /* AutorunState.dependenciesMightHaveChanged */ :
                    return {
                        ...base,
                        type: 'autorun',
                        state: 'possiblyStale'
                    };
            }
        }
        return undefined;
    }
    _formatObservable(obs) {
        const info = this._getObservableInfo(obs);
        if (!info) {
            return undefined;
        }
        return {
            name: obs.debugName,
            instanceId: info.instanceId
        };
    }
    _formatObserver(obs) {
        if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            var _this__getObservableInfo;
            return {
                name: obs.toString(),
                instanceId: (_this__getObservableInfo = this._getObservableInfo(obs)) === null || _this__getObservableInfo === void 0 ? void 0 : _this__getObservableInfo.instanceId
            };
        }
        const autorunInfo = this._getAutorunInfo(obs);
        if (autorunInfo) {
            return {
                name: obs.toString(),
                instanceId: autorunInfo.instanceId
            };
        }
        return undefined;
    }
    _handleChange(update) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepAssignDeleteNulls"])(this._fullState, update);
        if (this._pendingChanges === null) {
            this._pendingChanges = update;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepAssign"])(this._pendingChanges, update);
        }
        this._changeThrottler.throttle(this._flushUpdates, 10);
    }
    _getDeclarationId(type, location) {
        if (!location) {
            return -1;
        }
        let decInfo = this._declarations.get(location.id);
        if (decInfo === undefined) {
            decInfo = {
                id: this._declarationId++,
                type,
                url: location.fileName,
                line: location.line,
                column: location.column
            };
            this._declarations.set(location.id, decInfo);
            this._handleChange({
                decls: {
                    [decInfo.id]: decInfo
                }
            });
        }
        return decInfo.id;
    }
    handleObservableCreated(observable, location) {
        const declarationId = this._getDeclarationId('observable/value', location);
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: undefined,
            updateCount: 0,
            changedObservables: new Set()
        };
        this._instanceInfos.set(observable, info);
    }
    handleOnListenerCountChanged(observable, newCount) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        if (info.listenerCount === 0 && newCount > 0) {
            const type = observable instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"] ? 'observable/derived' : 'observable/value';
            this._aliveInstances.set(info.instanceId, observable);
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        formattedValue: info.lastValue,
                        type,
                        name: observable.debugName
                    }
                }
            });
        } else if (info.listenerCount > 0 && newCount === 0) {
            this._handleChange({
                instances: {
                    [info.instanceId]: null
                }
            });
            this._aliveInstances.delete(info.instanceId);
        }
        info.listenerCount = newCount;
    }
    handleObservableUpdated(observable, changeInfo) {
        if (observable instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            this._handleDerivedRecomputed(observable, changeInfo);
            return;
        }
        const info = this._getObservableInfo(observable);
        if (info) {
            if (changeInfo.didChange) {
                info.lastValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatValue"])(changeInfo.newValue, 30);
                if (info.listenerCount > 0) {
                    this._handleChange({
                        instances: {
                            [info.instanceId]: {
                                formattedValue: info.lastValue
                            }
                        }
                    });
                }
            }
        }
    }
    handleAutorunCreated(autorun, location) {
        const declarationId = this._getDeclarationId('autorun', location);
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set()
        };
        this._instanceInfos.set(autorun, info);
        this._aliveInstances.set(info.instanceId, autorun);
        if ("TURBOPACK compile-time truthy", 1) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        runCount: 0,
                        type: 'autorun',
                        name: autorun.debugName
                    }
                }
            });
        }
    }
    handleAutorunDisposed(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        this._handleChange({
            instances: {
                [info.instanceId]: null
            }
        });
        this._instanceInfos.delete(autorun);
        this._aliveInstances.delete(info.instanceId);
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.add(observable);
    }
    handleAutorunStarted(autorun) {}
    handleAutorunFinished(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.clear();
        info.updateCount++;
        this._handleChange({
            instances: {
                [info.instanceId]: {
                    runCount: info.updateCount
                }
            }
        });
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        const info = this._getObservableInfo(derived);
        if (info) {
            info.changedObservables.add(observable);
        }
    }
    _handleDerivedRecomputed(observable, changeInfo) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        const formattedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatValue"])(changeInfo.newValue, 30);
        info.updateCount++;
        info.changedObservables.clear();
        info.lastValue = formattedValue;
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        formattedValue: formattedValue,
                        recomputationCount: info.updateCount
                    }
                }
            });
        }
    }
    handleDerivedCleared(observable) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        info.lastValue = undefined;
        info.changedObservables.clear();
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        formattedValue: undefined
                    }
                }
            });
        }
    }
    handleBeginTransaction(transaction) {
        this._activeTransactions.add(transaction);
    }
    handleEndTransaction(transaction) {
        this._activeTransactions.delete(transaction);
    }
    constructor(){
        this._declarationId = 0;
        this._instanceId = 0;
        this._declarations = new Map();
        this._instanceInfos = new WeakMap();
        this._aliveInstances = new Map();
        this._activeTransactions = new Set();
        this._channel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$debuggerRpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerDebugChannel"])('observableDevTools', ()=>{
            return {
                notifications: {
                    setDeclarationIdFilter: (declarationIds)=>{},
                    logObservableValue: (observableId)=>{
                        console.log('logObservableValue', observableId);
                    },
                    flushUpdates: ()=>{
                        this._flushUpdates();
                    },
                    resetUpdates: ()=>{
                        this._pendingChanges = null;
                        this._channel.api.notifications.handleChange(this._fullState, true);
                    }
                },
                requests: {
                    getDeclarations: ()=>{
                        const result = {};
                        for (const decl of this._declarations.values()){
                            result[decl.id] = decl;
                        }
                        return {
                            decls: result
                        };
                    },
                    getSummarizedInstances: ()=>{
                        return null;
                    },
                    getObservableValueInfo: (instanceId)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            observers: [
                                ...obs.debugGetObservers()
                            ].map((d)=>this._formatObserver(d)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"])
                        };
                    },
                    getDerivedInfo: (instanceId)=>{
                        const d = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: [
                                ...d.debugGetState().dependencies
                            ].map((d)=>this._formatObservable(d)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"]),
                            observers: [
                                ...d.debugGetObservers()
                            ].map((d)=>this._formatObserver(d)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"])
                        };
                    },
                    getAutorunInfo: (instanceId)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: [
                                ...obs.debugGetState().dependencies
                            ].map((d)=>this._formatObservable(d)).filter(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"])
                        };
                    },
                    getTransactionState: ()=>{
                        return this.getTransactionState();
                    },
                    setValue: (instanceId, jsonValue)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
                            obs.debugSetValue(jsonValue);
                        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableValue"]) {
                            obs.debugSetValue(jsonValue);
                        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FromEventObservable"]) {
                            obs.debugSetValue(jsonValue);
                        } else {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Observable is not supported');
                        }
                        const observers = [
                            ...obs.debugGetObservers()
                        ];
                        for (const d of observers){
                            d.beginUpdate(obs);
                        }
                        for (const d of observers){
                            d.handleChange(obs, undefined);
                        }
                        for (const d of observers){
                            d.endUpdate(obs);
                        }
                    },
                    getValue: (instanceId)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatValue"])(obs.debugGetState().value, 200);
                        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableValue"]) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatValue"])(obs.debugGetState().value, 200);
                        }
                        return undefined;
                    },
                    logValue: (instanceId)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs && 'get' in obs) {
                            console.log('Logged Value:', obs.get());
                        } else {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Observable is not supported');
                        }
                    },
                    rerun: (instanceId)=>{
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
                            obs.debugRecompute();
                        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"]) {
                            obs.debugRerun();
                        } else {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Observable is not supported');
                        }
                    }
                }
            };
        });
        this._pendingChanges = null;
        this._changeThrottler = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Throttler"]();
        this._fullState = {};
        this._flushUpdates = ()=>{
            if (this._pendingChanges !== null) {
                this._channel.api.notifications.handleChange(this._pendingChanges, false);
                this._pendingChanges = null;
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].enable();
    }
} //# sourceMappingURL=devToolsLogger.js.map
DevToolsLogger._instance = undefined;
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugGetDependencyGraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "debugGetDependencyGraph",
    ()=>debugGetDependencyGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorunImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/consoleObservableLogger.js [app-client] (ecmascript)");
;
;
;
;
;
function debugGetDependencyGraph(obs, options) {
    var _options_debugNamePostProcessor;
    const debugNamePostProcessor = (_options_debugNamePostProcessor = options === null || options === void 0 ? void 0 : options.debugNamePostProcessor) !== null && _options_debugNamePostProcessor !== void 0 ? _options_debugNamePostProcessor : (str)=>str;
    const info = Info.from(obs, debugNamePostProcessor);
    if (!info) {
        return '';
    }
    const alreadyListed = new Set();
    return formatObservableInfo(info, 0, alreadyListed).trim();
}
function formatObservableInfo(info, indentLevel, alreadyListed) {
    const indent = '\t\t'.repeat(indentLevel);
    const lines = [];
    const isAlreadyListed = alreadyListed.has(info.sourceObj);
    if (isAlreadyListed) {
        lines.push("".concat(indent, "* ").concat(info.type, " ").concat(info.name, " (already listed)"));
        return lines.join('\n');
    }
    alreadyListed.add(info.sourceObj);
    lines.push("".concat(indent, "* ").concat(info.type, " ").concat(info.name, ":"));
    lines.push("".concat(indent, "  value: ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatValue"])(info.value, 50)));
    lines.push("".concat(indent, "  state: ").concat(info.state));
    if (info.dependencies.length > 0) {
        lines.push("".concat(indent, "  dependencies:"));
        for (const dep of info.dependencies){
            lines.push(formatObservableInfo(dep, indentLevel + 1, alreadyListed));
        }
    }
    return lines.join('\n');
}
class Info {
    static from(obs, debugNamePostProcessor) {
        if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorunImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutorunObserver"]) {
            const state = obs.debugGetState();
            return new Info(obs, debugNamePostProcessor(obs.debugName), 'autorun', undefined, state.stateStr, Array.from(state.dependencies).map((dep)=>Info.from(dep, debugNamePostProcessor) || Info.unknown(dep)));
        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Derived"]) {
            const state = obs.debugGetState();
            return new Info(obs, debugNamePostProcessor(obs.debugName), 'derived', state.value, state.stateStr, Array.from(state.dependencies).map((dep)=>Info.from(dep, debugNamePostProcessor) || Info.unknown(dep)));
        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableValue"]) {
            const state = obs.debugGetState();
            return new Info(obs, debugNamePostProcessor(obs.debugName), 'observableValue', state.value, 'upToDate', []);
        } else if (obs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FromEventObservable"]) {
            const state = obs.debugGetState();
            return new Info(obs, debugNamePostProcessor(obs.debugName), 'fromEvent', state.value, state.hasValue ? 'upToDate' : 'initial', []);
        }
        return undefined;
    }
    static unknown(obs) {
        return new Info(obs, '(unknown)', 'unknown', undefined, 'unknown', []);
    }
    constructor(sourceObj, name, type, value, state, dependencies){
        this.sourceObj = sourceObj;
        this.name = name;
        this.type = type;
        this.value = value;
        this.state = state;
        this.dependencies = dependencies;
    }
} //# sourceMappingURL=debugGetDependencyGraph.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ // This is a facade for the observable implementation. Only import from here!
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValueOpts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValueOpts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derived.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utilsCancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utilsCancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$changeTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/changeTracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$constObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/constObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignalFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignalFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$valueWithChangeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/valueWithChangeEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$runOnChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/runOnChange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$experimental$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/experimental/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/logging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/consoleObservableLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$devToolsLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugger/devToolsLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/baseObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugGetDependencyGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/logging/debugGetDependencyGraph.js [app-client] (ecmascript)");
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
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$baseObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setDebugGetDependencyGraph"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugGetDependencyGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debugGetDependencyGraph"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogObservableFn"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$consoleObservableLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logObservableToConsole"]);
// Remove "//" in the next line to enable logging
const enableLogging = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"] && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"]['VSCODE_DEV_DEBUG_OBSERVABLES']) {
    // To debug observables you also need the extension "ms-vscode.debug-value-editor"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$logging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLogger"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$logging$2f$debugger$2f$devToolsLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevToolsLogger"].getInstance());
} //# sourceMappingURL=index.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DebugLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"],
    "ObservablePromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservablePromise"],
    "PromiseResult",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromiseResult"],
    "TransactionImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionImpl"],
    "ValueWithChangeEventFromObservable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$valueWithChangeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithChangeEventFromObservable"],
    "asyncTransaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncTransaction"],
    "autorun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorun"],
    "autorunDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunDelta"],
    "autorunHandleChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunHandleChanges"],
    "autorunOpts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunOpts"],
    "autorunWithStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunWithStore"],
    "autorunWithStoreHandleChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorunWithStoreHandleChanges"],
    "constObservable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$constObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constObservable"],
    "debouncedObservable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debouncedObservable"],
    "derived",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"],
    "derivedConstOnceDefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$experimental$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedConstOnceDefined"],
    "derivedDisposable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedDisposable"],
    "derivedHandleChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedHandleChanges"],
    "derivedObservableWithCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedObservableWithCache"],
    "derivedObservableWithWritableCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedObservableWithWritableCache"],
    "derivedOpts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"],
    "derivedWithSetter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedWithSetter"],
    "disposableObservableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposableObservableValue"],
    "globalTransaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalTransaction"],
    "keepObserved",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepObserved"],
    "mapObservableArrayCached",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapObservableArrayCached"],
    "observableFromEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromEvent"],
    "observableFromEventOpts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromEventOpts"],
    "observableFromValueWithChangeEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$valueWithChangeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableFromValueWithChangeEvent"],
    "observableSignal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableSignal"],
    "observableSignalFromEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignalFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableSignalFromEvent"],
    "observableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableValue"],
    "observableValueOpts",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValueOpts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableValueOpts"],
    "recomputeInitiallyAndOnChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recomputeInitiallyAndOnChange"],
    "recordChanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$changeTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordChanges"],
    "recordChangesLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$changeTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordChangesLazy"],
    "runOnChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$runOnChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnChange"],
    "runOnChangeWithCancellationToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$runOnChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnChangeWithCancellationToken"],
    "runOnChangeWithStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$runOnChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runOnChangeWithStore"],
    "subtransaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtransaction"],
    "transaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transaction"],
    "waitForState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utilsCancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForState"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValueOpts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValueOpts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$reactions$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/reactions/autorun.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derived$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derived.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utilsCancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utilsCancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$changeTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/changeTracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$constObservable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/constObservable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$observableSignalFromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/observableSignalFromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$valueWithChangeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/valueWithChangeEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2f$runOnChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils/runOnChange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$experimental$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/experimental/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/experimental/reducer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "observableReducerSettable",
    ()=>observableReducerSettable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$commonFacade$2f$deps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/commonFacade/deps.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/observables/derivedImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/debugLocation.js [app-client] (ecmascript)");
;
;
;
;
;
function observableReducerSettable(owner, options) {
    let prevValue = undefined;
    let hasValue = false;
    var _options_equalityComparer;
    const d = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$observables$2f$derivedImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DerivedWithSetter"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugNameData"](owner, undefined, options.update), (reader, changeSummary)=>{
        if (!hasValue) {
            prevValue = options.initial instanceof Function ? options.initial() : options.initial;
            hasValue = true;
        }
        const newValue = options.update(reader, prevValue, changeSummary);
        prevValue = newValue;
        return newValue;
    }, options.changeTracker, ()=>{
        if (hasValue) {
            var _options_disposeFinal;
            (_options_disposeFinal = options.disposeFinal) === null || _options_disposeFinal === void 0 ? void 0 : _options_disposeFinal.call(options, prevValue);
            hasValue = false;
        }
    }, (_options_equalityComparer = options.equalityComparer) !== null && _options_equalityComparer !== void 0 ? _options_equalityComparer : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strictEquals"], (value, tx, change)=>{
        if (!hasValue) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Can only set when there is a listener! This is to prevent leaks.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subtransaction"])(tx, (tx)=>{
            prevValue = value;
            d.setValue(value, tx, change);
        });
    }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$debugLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebugLocation"].ofCaller());
    return d;
} //# sourceMappingURL=reducer.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_base_common_observableInternal_6b64153d._.js.map