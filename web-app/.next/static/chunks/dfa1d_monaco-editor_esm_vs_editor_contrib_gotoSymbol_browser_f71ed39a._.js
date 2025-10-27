(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ClickLinkGesture",
    ()=>ClickLinkGesture,
    "ClickLinkKeyboardEvent",
    ()=>ClickLinkKeyboardEvent,
    "ClickLinkMouseEvent",
    ()=>ClickLinkMouseEvent,
    "ClickLinkOptions",
    ()=>ClickLinkOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
function hasModifier(e, modifier) {
    return !!e[modifier];
}
class ClickLinkMouseEvent {
    constructor(source, opts){
        this.target = source.target;
        this.isLeftClick = source.event.leftButton;
        this.isMiddleClick = source.event.middleButton;
        this.isRightClick = source.event.rightButton;
        this.mouseMiddleClickAction = opts.mouseMiddleClickAction;
        this.hasTriggerModifier = hasModifier(source.event, opts.triggerModifier);
        if (this.isMiddleClick && opts.mouseMiddleClickAction === 'ctrlLeftClick') {
            // Redirect middle click to left click with modifier
            this.isMiddleClick = false;
            this.isLeftClick = true;
            this.hasTriggerModifier = true;
        }
        this.hasSideBySideModifier = hasModifier(source.event, opts.triggerSideBySideModifier);
        this.isNoneOrSingleMouseDown = source.event.detail <= 1;
    }
}
class ClickLinkKeyboardEvent {
    constructor(source, opts){
        this.keyCodeIsTriggerKey = source.keyCode === opts.triggerKey;
        this.keyCodeIsSideBySideKey = source.keyCode === opts.triggerSideBySideKey;
        this.hasTriggerModifier = hasModifier(source, opts.triggerModifier);
    }
}
class ClickLinkOptions {
    equals(other) {
        return this.triggerKey === other.triggerKey && this.triggerModifier === other.triggerModifier && this.triggerSideBySideKey === other.triggerSideBySideKey && this.triggerSideBySideModifier === other.triggerSideBySideModifier && this.mouseMiddleClickAction === other.mouseMiddleClickAction;
    }
    constructor(triggerKey, triggerModifier, triggerSideBySideKey, triggerSideBySideModifier, mouseMiddleClickAction){
        this.mouseMiddleClickAction = mouseMiddleClickAction;
        this.triggerKey = triggerKey;
        this.triggerModifier = triggerModifier;
        this.triggerSideBySideKey = triggerSideBySideKey;
        this.triggerSideBySideModifier = triggerSideBySideModifier;
    }
}
function createOptions(multiCursorModifier, mouseMiddleClickAction) {
    if (multiCursorModifier === 'altKey') {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
            return new ClickLinkOptions(57 /* KeyCode.Meta */ , 'metaKey', 6 /* KeyCode.Alt */ , 'altKey', mouseMiddleClickAction);
        }
        return new ClickLinkOptions(5 /* KeyCode.Ctrl */ , 'ctrlKey', 6 /* KeyCode.Alt */ , 'altKey', mouseMiddleClickAction);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
        return new ClickLinkOptions(6 /* KeyCode.Alt */ , 'altKey', 57 /* KeyCode.Meta */ , 'metaKey', mouseMiddleClickAction);
    }
    return new ClickLinkOptions(6 /* KeyCode.Alt */ , 'altKey', 5 /* KeyCode.Ctrl */ , 'ctrlKey', mouseMiddleClickAction);
}
class ClickLinkGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    _onDidChangeCursorSelection(e) {
        if (e.selection && e.selection.startColumn !== e.selection.endColumn) {
            this._resetHandler(); // immediately stop this feature if the user starts to select (https://github.com/microsoft/vscode/issues/7827)
        }
    }
    _onEditorMouseMove(mouseEvent) {
        this._lastMouseMoveEvent = mouseEvent;
        this._onMouseMoveOrRelevantKeyDown.fire([
            mouseEvent,
            null
        ]);
    }
    _onEditorMouseDown(mouseEvent) {
        // We need to record if we had the trigger key on mouse down because someone might select something in the editor
        // holding the mouse down and then while mouse is down start to press Ctrl/Cmd to start a copy operation and then
        // release the mouse button without wanting to do the navigation.
        // With this flag we prevent goto definition if the mouse was down before the trigger key was pressed.
        this._hasTriggerKeyOnMouseDown = mouseEvent.hasTriggerModifier;
        this._lineNumberOnMouseDown = this._extractLineNumberFromMouseEvent(mouseEvent);
    }
    _onEditorMouseUp(mouseEvent) {
        const currentLineNumber = this._extractLineNumberFromMouseEvent(mouseEvent);
        const lineNumbersCorrect = !!this._lineNumberOnMouseDown && this._lineNumberOnMouseDown === currentLineNumber;
        if (lineNumbersCorrect && (this._hasTriggerKeyOnMouseDown || mouseEvent.isMiddleClick && mouseEvent.mouseMiddleClickAction === 'openLink')) {
            this._onExecute.fire(mouseEvent);
        }
    }
    _onEditorKeyDown(e) {
        if (this._lastMouseMoveEvent && (e.keyCodeIsTriggerKey // User just pressed Ctrl/Cmd (normal goto definition)
         || e.keyCodeIsSideBySideKey && e.hasTriggerModifier // User pressed Ctrl/Cmd+Alt (goto definition to the side)
        )) {
            this._onMouseMoveOrRelevantKeyDown.fire([
                this._lastMouseMoveEvent,
                e
            ]);
        } else if (e.hasTriggerModifier) {
            this._onCancel.fire(); // remove decorations if user holds another key with ctrl/cmd to prevent accident goto declaration
        }
    }
    _onEditorKeyUp(e) {
        if (e.keyCodeIsTriggerKey) {
            this._onCancel.fire();
        }
    }
    _resetHandler() {
        this._lastMouseMoveEvent = null;
        this._hasTriggerKeyOnMouseDown = false;
        this._onCancel.fire();
    }
    constructor(editor, opts){
        super();
        this._onMouseMoveOrRelevantKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onMouseMoveOrRelevantKeyDown = this._onMouseMoveOrRelevantKeyDown.event;
        this._onExecute = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onExecute = this._onExecute.event;
        this._onCancel = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onCancel = this._onCancel.event;
        this._editor = editor;
        var _opts_extractLineNumberFromMouseEvent;
        this._extractLineNumberFromMouseEvent = (_opts_extractLineNumberFromMouseEvent = opts === null || opts === void 0 ? void 0 : opts.extractLineNumberFromMouseEvent) !== null && _opts_extractLineNumberFromMouseEvent !== void 0 ? _opts_extractLineNumberFromMouseEvent : (e)=>e.target.position ? e.target.position.lineNumber : 0;
        this._opts = createOptions(this._editor.getOption(86 /* EditorOption.multiCursorModifier */ ), this._editor.getOption(87 /* EditorOption.mouseMiddleClickAction */ ));
        this._lastMouseMoveEvent = null;
        this._hasTriggerKeyOnMouseDown = false;
        this._lineNumberOnMouseDown = 0;
        this._register(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(86 /* EditorOption.multiCursorModifier */ ) || e.hasChanged(87 /* EditorOption.mouseMiddleClickAction */ )) {
                const newOpts = createOptions(this._editor.getOption(86 /* EditorOption.multiCursorModifier */ ), this._editor.getOption(87 /* EditorOption.mouseMiddleClickAction */ ));
                if (this._opts.equals(newOpts)) {
                    return;
                }
                this._opts = newOpts;
                this._lastMouseMoveEvent = null;
                this._hasTriggerKeyOnMouseDown = false;
                this._lineNumberOnMouseDown = 0;
                this._onCancel.fire();
            }
        }));
        this._register(this._editor.onMouseMove((e)=>this._onEditorMouseMove(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onMouseDown((e)=>this._onEditorMouseDown(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onMouseUp((e)=>this._onEditorMouseUp(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onKeyDown((e)=>this._onEditorKeyDown(new ClickLinkKeyboardEvent(e, this._opts))));
        this._register(this._editor.onKeyUp((e)=>this._onEditorKeyUp(new ClickLinkKeyboardEvent(e, this._opts))));
        this._register(this._editor.onMouseDrag(()=>this._resetHandler()));
        this._register(this._editor.onDidChangeCursorSelection((e)=>this._onDidChangeCursorSelection(e)));
        this._register(this._editor.onDidChangeModel((e)=>this._resetHandler()));
        this._register(this._editor.onDidChangeModelContent(()=>this._resetHandler()));
        this._register(this._editor.onDidScrollChange((e)=>{
            if (e.scrollTopChanged || e.scrollLeftChanged) {
                this._resetHandler();
            }
        }));
    }
} //# sourceMappingURL=clickLinkGesture.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "FilePreview",
    ()=>FilePreview,
    "FileReferences",
    ()=>FileReferences,
    "OneReference",
    ()=>OneReference,
    "ReferencesModel",
    ()=>ReferencesModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$idGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/idGenerator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
class OneReference {
    get uri() {
        return this.link.uri;
    }
    get range() {
        var _this__range, _ref;
        return (_ref = (_this__range = this._range) !== null && _this__range !== void 0 ? _this__range : this.link.targetSelectionRange) !== null && _ref !== void 0 ? _ref : this.link.range;
    }
    set range(value) {
        this._range = value;
        this._rangeCallback(this);
    }
    get ariaMessage() {
        var _this_parent_getPreview;
        const preview = (_this_parent_getPreview = this.parent.getPreview(this)) === null || _this_parent_getPreview === void 0 ? void 0 : _this_parent_getPreview.preview(this.range);
        if (!preview) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1082, "in {0} on line {1} at column {2}", (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(this.uri), this.range.startLineNumber, this.range.startColumn);
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1083, "{0} in {1} on line {2} at column {3}", preview.value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(this.uri), this.range.startLineNumber, this.range.startColumn);
        }
    }
    constructor(isProviderFirst, parent, link, _rangeCallback){
        this.isProviderFirst = isProviderFirst;
        this.parent = parent;
        this.link = link;
        this._rangeCallback = _rangeCallback;
        this.id = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$idGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGenerator"].nextId();
    }
}
class FilePreview {
    dispose() {
        this._modelReference.dispose();
    }
    preview(range) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8;
        const model = this._modelReference.object.textEditorModel;
        if (!model) {
            return undefined;
        }
        const { startLineNumber, startColumn, endLineNumber, endColumn } = range;
        const word = model.getWordUntilPosition({
            lineNumber: startLineNumber,
            column: startColumn - n
        });
        const beforeRange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](startLineNumber, word.startColumn, startLineNumber, startColumn);
        const afterRange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](endLineNumber, endColumn, endLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */ );
        const before = model.getValueInRange(beforeRange).replace(/^\s+/, '');
        const inside = model.getValueInRange(range);
        const after = model.getValueInRange(afterRange).replace(/\s+$/, '');
        return {
            value: before + inside + after,
            highlight: {
                start: before.length,
                end: before.length + inside.length
            }
        };
    }
    constructor(_modelReference){
        this._modelReference = _modelReference;
    }
}
class FileReferences {
    dispose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._previews.values());
        this._previews.clear();
    }
    getPreview(child) {
        return this._previews.get(child.uri);
    }
    get ariaMessage() {
        const len = this.children.length;
        if (len === 1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1084, "1 symbol in {0}, full path {1}", (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(this.uri), this.uri.fsPath);
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1085, "{0} symbols in {1}, full path {2}", len, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(this.uri), this.uri.fsPath);
        }
    }
    async resolve(textModelResolverService) {
        if (this._previews.size !== 0) {
            return this;
        }
        for (const child of this.children){
            if (this._previews.has(child.uri)) {
                continue;
            }
            try {
                const ref = await textModelResolverService.createModelReference(child.uri);
                this._previews.set(child.uri, new FilePreview(ref));
            } catch (err) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
            }
        }
        return this;
    }
    constructor(parent, uri){
        this.parent = parent;
        this.uri = uri;
        this.children = [];
        this._previews = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]();
    }
}
class ReferencesModel {
    dispose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.groups);
        this._onDidChangeReferenceRange.dispose();
        this.groups.length = 0;
    }
    clone() {
        return new ReferencesModel(this._links, this._title);
    }
    get title() {
        return this._title;
    }
    get isEmpty() {
        return this.groups.length === 0;
    }
    get ariaMessage() {
        if (this.isEmpty) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1086, "No results found");
        } else if (this.references.length === 1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1087, "Found 1 symbol in {0}", this.references[0].uri.fsPath);
        } else if (this.groups.length === 1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1088, "Found {0} symbols in {1}", this.references.length, this.groups[0].uri.fsPath);
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1089, "Found {0} symbols in {1} files", this.references.length, this.groups.length);
        }
    }
    nextOrPreviousReference(reference, next) {
        const { parent } = reference;
        let idx = parent.children.indexOf(reference);
        const childCount = parent.children.length;
        const groupCount = parent.parent.groups.length;
        if (groupCount === 1 || next && idx + 1 < childCount || !next && idx > 0) {
            // cycling within one file
            if (next) {
                idx = (idx + 1) % childCount;
            } else {
                idx = (idx + childCount - 1) % childCount;
            }
            return parent.children[idx];
        }
        idx = parent.parent.groups.indexOf(parent);
        if (next) {
            idx = (idx + 1) % groupCount;
            return parent.parent.groups[idx].children[0];
        } else {
            idx = (idx + groupCount - 1) % groupCount;
            return parent.parent.groups[idx].children[parent.parent.groups[idx].children.length - 1];
        }
    }
    nearestReference(resource, position) {
        const nearest = this.references.map((ref, idx)=>{
            return {
                idx,
                prefixLen: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonPrefixLength"](ref.uri.toString(), resource.toString()),
                offsetDist: Math.abs(ref.range.startLineNumber - position.lineNumber) * 100 + Math.abs(ref.range.startColumn - position.column)
            };
        }).sort((a, b)=>{
            if (a.prefixLen > b.prefixLen) {
                return -1;
            } else if (a.prefixLen < b.prefixLen) {
                return 1;
            } else if (a.offsetDist < b.offsetDist) {
                return -1;
            } else if (a.offsetDist > b.offsetDist) {
                return 1;
            } else {
                return 0;
            }
        })[0];
        if (nearest) {
            return this.references[nearest.idx];
        }
        return undefined;
    }
    referenceAt(resource, position) {
        for (const ref of this.references){
            if (ref.uri.toString() === resource.toString()) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].containsPosition(ref.range, position)) {
                    return ref;
                }
            }
        }
        return undefined;
    }
    firstReference() {
        for (const ref of this.references){
            if (ref.isProviderFirst) {
                return ref;
            }
        }
        return this.references[0];
    }
    static _compareReferences(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extUri"].compare(a.uri, b.uri) || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts(a.range, b.range);
    }
    constructor(links, title){
        this.groups = [];
        this.references = [];
        this._onDidChangeReferenceRange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidChangeReferenceRange = this._onDidChangeReferenceRange.event;
        this._links = links;
        this._title = title;
        // grouping and sorting
        const [providersFirst] = links;
        links.sort(ReferencesModel._compareReferences);
        let current;
        for (const link of links){
            if (!current || !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extUri"].isEqual(current.uri, link.uri, true)) {
                // new group
                current = new FileReferences(this, link.uri);
                this.groups.push(current);
            }
            // append, check for equality first!
            if (current.children.length === 0 || ReferencesModel._compareReferences(link, current.children[current.children.length - 1]) !== 0) {
                const oneRef = new OneReference(providersFirst === link, current, link, (ref)=>this._onDidChangeReferenceRange.fire(ref));
                this.references.push(oneRef);
                current.children.push(oneRef);
            }
        }
    }
} //# sourceMappingURL=referencesModel.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "AccessibilityProvider",
    ()=>AccessibilityProvider,
    "DataSource",
    ()=>DataSource,
    "Delegate",
    ()=>Delegate,
    "FileReferencesRenderer",
    ()=>FileReferencesRenderer,
    "IdentityProvider",
    ()=>IdentityProvider,
    "OneReferenceRenderer",
    ()=>OneReferenceRenderer,
    "StringRepresentationProvider",
    ()=>StringRepresentationProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$countBadge$2f$countBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/filters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$label$2f$common$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/label/common/label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)");
var _FileReferencesRenderer;
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
var FileReferencesRenderer_1;
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
let DataSource = class DataSource {
    hasChildren(element) {
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"]) {
            return true;
        }
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferences"]) {
            return true;
        }
        return false;
    }
    getChildren(element) {
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"]) {
            return element.groups;
        }
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferences"]) {
            return element.resolve(this._resolverService).then((val)=>{
                // if (element.failure) {
                // 	// refresh the element on failure so that
                // 	// we can update its rendering
                // 	return tree.refresh(element).then(() => val.children);
                // }
                return val.children;
            });
        }
        throw new Error('bad tree');
    }
    constructor(_resolverService){
        this._resolverService = _resolverService;
    }
};
DataSource = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITextModelService"])
], DataSource);
;
class Delegate {
    getHeight() {
        return 23;
    }
    getTemplateId(element) {
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferences"]) {
            return FileReferencesRenderer.id;
        } else {
            return OneReferenceRenderer.id;
        }
    }
}
let StringRepresentationProvider = class StringRepresentationProvider {
    getKeyboardNavigationLabel(element) {
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
            var _element_parent_getPreview;
            const parts = (_element_parent_getPreview = element.parent.getPreview(element)) === null || _element_parent_getPreview === void 0 ? void 0 : _element_parent_getPreview.preview(element.range);
            if (parts) {
                return parts.value;
            }
        }
        // FileReferences or unresolved OneReference
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(element.uri);
    }
    constructor(_keybindingService){
        this._keybindingService = _keybindingService;
    }
};
StringRepresentationProvider = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], StringRepresentationProvider);
;
class IdentityProvider {
    getId(element) {
        return element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"] ? element.id : element.uri;
    }
}
//#region render: File
let FileReferencesTemplate = class FileReferencesTemplate extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    set(element, matches) {
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dirname"])(element.uri);
        this.file.setLabel(this._labelService.getUriBasenameLabel(element.uri), this._labelService.getUriLabel(parent, {
            relative: true
        }), {
            title: this._labelService.getUriLabel(element.uri),
            matches
        });
        const len = element.children.length;
        this.badge.setCount(len);
        if (len > 1) {
            this.badge.setTitleFormat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1076, "{0} references", len));
        } else {
            this.badge.setTitleFormat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1077, "{0} reference", len));
        }
    }
    constructor(container, _labelService){
        super();
        this._labelService = _labelService;
        const parent = document.createElement('div');
        parent.classList.add('reference-file');
        this.file = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLabel"](parent, {
            supportHighlights: true
        }));
        this.badge = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$countBadge$2f$countBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountBadge"](__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.count')), {}, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCountBadgeStyles"]));
        container.appendChild(parent);
    }
};
FileReferencesTemplate = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$label$2f$common$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILabelService"])
], FileReferencesTemplate);
let FileReferencesRenderer = (_FileReferencesRenderer = class FileReferencesRenderer {
    renderTemplate(container) {
        return this._instantiationService.createInstance(FileReferencesTemplate, container);
    }
    renderElement(node, index, template) {
        template.set(node.element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMatches"])(node.filterData));
    }
    disposeTemplate(templateData) {
        templateData.dispose();
    }
    constructor(_instantiationService){
        this._instantiationService = _instantiationService;
        this.templateId = FileReferencesRenderer_1.id;
    }
}, FileReferencesRenderer_1 = _FileReferencesRenderer, _FileReferencesRenderer.id = 'FileReferencesRenderer', _FileReferencesRenderer);
FileReferencesRenderer = FileReferencesRenderer_1 = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], FileReferencesRenderer);
;
//#endregion
//#region render: Reference
class OneReferenceTemplate extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    set(element, score) {
        var _element_parent_getPreview;
        const preview = (_element_parent_getPreview = element.parent.getPreview(element)) === null || _element_parent_getPreview === void 0 ? void 0 : _element_parent_getPreview.preview(element.range);
        if (!preview || !preview.value) {
            // this means we FAILED to resolve the document or the value is the empty string
            this.label.set("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(element.uri), ":").concat(element.range.startLineNumber + 1, ":").concat(element.range.startColumn + 1));
        } else {
            // render search match as highlight unless
            // we have score, then render the score
            const { value, highlight } = preview;
            if (score && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FuzzyScore"].isDefault(score)) {
                this.label.element.classList.toggle('referenceMatch', false);
                this.label.set(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMatches"])(score));
            } else {
                this.label.element.classList.toggle('referenceMatch', true);
                this.label.set(value, [
                    highlight
                ]);
            }
        }
    }
    constructor(container){
        super();
        this.label = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"](container));
    }
}
class OneReferenceRenderer {
    renderTemplate(container) {
        return new OneReferenceTemplate(container);
    }
    renderElement(node, index, templateData) {
        templateData.set(node.element, node.filterData);
    }
    disposeTemplate(templateData) {
        templateData.dispose();
    }
    constructor(){
        this.templateId = OneReferenceRenderer.id;
    }
}
OneReferenceRenderer.id = 'OneReferenceRenderer';
class AccessibilityProvider {
    getWidgetAriaLabel() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1078, "References");
    }
    getAriaLabel(element) {
        return element.ariaMessage;
    }
} //# sourceMappingURL=referencesTree.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "LayoutData",
    ()=>LayoutData,
    "ReferenceWidget",
    ()=>ReferenceWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$modesRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$label$2f$common$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/label/common/label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/list/browser/listService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dnd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
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
;
;
;
;
class DecorationsManager {
    dispose() {
        this._callOnModelChange.dispose();
        this._callOnDispose.dispose();
        this.removeDecorations();
    }
    _onModelChanged() {
        this._callOnModelChange.clear();
        const model = this._editor.getModel();
        if (!model) {
            return;
        }
        for (const ref of this._model.references){
            if (ref.uri.toString() === model.uri.toString()) {
                this._addDecorations(ref.parent);
                return;
            }
        }
    }
    _addDecorations(reference) {
        if (!this._editor.hasModel()) {
            return;
        }
        this._callOnModelChange.add(this._editor.getModel().onDidChangeDecorations(()=>this._onDecorationChanged()));
        const newDecorations = [];
        const newDecorationsActualIndex = [];
        for(let i = 0, len = reference.children.length; i < len; i++){
            const oneReference = reference.children[i];
            if (this._decorationIgnoreSet.has(oneReference.id)) {
                continue;
            }
            if (oneReference.uri.toString() !== this._editor.getModel().uri.toString()) {
                continue;
            }
            newDecorations.push({
                range: oneReference.range,
                options: DecorationsManager.DecorationOptions
            });
            newDecorationsActualIndex.push(i);
        }
        this._editor.changeDecorations((changeAccessor)=>{
            const decorations = changeAccessor.deltaDecorations([], newDecorations);
            for(let i = 0; i < decorations.length; i++){
                this._decorations.set(decorations[i], reference.children[newDecorationsActualIndex[i]]);
            }
        });
    }
    _onDecorationChanged() {
        const toRemove = [];
        const model = this._editor.getModel();
        if (!model) {
            return;
        }
        for (const [decorationId, reference] of this._decorations){
            const newRange = model.getDecorationRange(decorationId);
            if (!newRange) {
                continue;
            }
            let ignore = false;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].equalsRange(newRange, reference.range)) {
                continue;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].spansMultipleLines(newRange)) {
                ignore = true;
            } else {
                const lineLength = reference.range.endColumn - reference.range.startColumn;
                const newLineLength = newRange.endColumn - newRange.startColumn;
                if (lineLength !== newLineLength) {
                    ignore = true;
                }
            }
            if (ignore) {
                this._decorationIgnoreSet.add(reference.id);
                toRemove.push(decorationId);
            } else {
                reference.range = newRange;
            }
        }
        for(let i = 0, len = toRemove.length; i < len; i++){
            this._decorations.delete(toRemove[i]);
        }
        this._editor.removeDecorations(toRemove);
    }
    removeDecorations() {
        this._editor.removeDecorations([
            ...this._decorations.keys()
        ]);
        this._decorations.clear();
    }
    constructor(_editor, _model){
        this._editor = _editor;
        this._model = _model;
        this._decorations = new Map();
        this._decorationIgnoreSet = new Set();
        this._callOnDispose = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._callOnModelChange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._callOnDispose.add(this._editor.onDidChangeModel(()=>this._onModelChanged()));
        this._onModelChanged();
    }
}
DecorationsManager.DecorationOptions = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelDecorationOptions"].register({
    description: 'reference-decoration',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */ ,
    className: 'reference-decoration'
});
class LayoutData {
    static fromJSON(raw) {
        let ratio;
        let heightInLines;
        try {
            const data = JSON.parse(raw);
            ratio = data.ratio;
            heightInLines = data.heightInLines;
        } catch (e) {
        //
        }
        return {
            ratio: ratio || 0.7,
            heightInLines: heightInLines || 18
        };
    }
    constructor(){
        this.ratio = 0.7;
        this.heightInLines = 18;
    }
}
class ReferencesTree extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchAsyncDataTree"] {
}
let ReferencesDragAndDrop = class ReferencesDragAndDrop {
    getDragURI(element) {
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferences"]) {
            return element.uri.toString();
        } else if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withSelection"])(element.uri, element.range).toString();
        }
        return null;
    }
    getDragLabel(elements) {
        if (elements.length === 0) {
            return undefined;
        }
        const labels = elements.map((e)=>this.labelService.getUriBasenameLabel(e.uri));
        return labels.join(', ');
    }
    onDragStart(data, originalEvent) {
        if (!originalEvent.dataTransfer) {
            return;
        }
        const elements = data.elements;
        const resources = elements.map((e)=>this.getDragURI(e)).filter(Boolean);
        if (resources.length) {
            // Apply resources as resource-list
            originalEvent.dataTransfer.setData(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTransfers"].RESOURCES, JSON.stringify(resources));
            // Also add as plain text for outside consumers
            originalEvent.dataTransfer.setData(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTransfers"].TEXT, resources.join('\n'));
        }
    }
    onDragOver() {
        return false;
    }
    drop() {}
    dispose() {
        this.disposables.dispose();
    }
    constructor(labelService){
        this.labelService = labelService;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    }
};
ReferencesDragAndDrop = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$label$2f$common$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILabelService"])
], ReferencesDragAndDrop);
/**
 * ZoneWidget that is shown inside the editor
 */ let ReferenceWidget = class ReferenceWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekViewWidget"] {
    get isClosing() {
        return this._isClosing;
    }
    dispose() {
        this._isClosing = true;
        this.setModel(undefined);
        this._callOnDispose.dispose();
        this._disposeOnNewModel.dispose();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._preview);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._previewNotAvailableMessage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._tree);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._previewModelReference);
        this._splitView.dispose();
        super.dispose();
    }
    _applyTheme(theme) {
        const borderColor = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekViewBorder"]) || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].transparent;
        this.style({
            arrowColor: borderColor,
            frameColor: borderColor,
            headerBackgroundColor: theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekViewTitleBackground"]) || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].transparent,
            primaryHeadingColor: theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekViewTitleForeground"]),
            secondaryHeadingColor: theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekViewTitleInfoForeground"])
        });
    }
    show(where) {
        super.show(where, this.layoutData.heightInLines || 18);
    }
    focusOnReferenceTree() {
        this._tree.domFocus();
    }
    focusOnPreviewEditor() {
        this._preview.focus();
    }
    isPreviewEditorFocused() {
        return this._preview.hasTextFocus();
    }
    _onTitleClick(e) {
        if (this._preview && this._preview.getModel()) {
            this._onDidSelectReference.fire({
                element: this._getFocusedReference(),
                kind: e.ctrlKey || e.metaKey || e.altKey ? 'side' : 'open',
                source: 'title'
            });
        }
    }
    _fillBody(containerElement) {
        this.setCssClass('reference-zone-widget');
        // message pane
        this._messageContainer = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](containerElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('div.messages'));
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this._messageContainer);
        this._splitView = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitView"](containerElement, {
            orientation: 1 /* Orientation.HORIZONTAL */ 
        });
        // editor
        this._previewContainer = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](containerElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('div.preview.inline'));
        const options = {
            scrollBeyondLastLine: false,
            scrollbar: {
                verticalScrollbarSize: 14,
                horizontal: 'auto',
                useShadows: true,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                alwaysConsumeMouseWheel: true
            },
            overviewRulerLanes: 2,
            fixedOverflowWidgets: true,
            minimap: {
                enabled: false
            }
        };
        this._preview = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmbeddedCodeEditorWidget"], this._previewContainer, options, {}, this.editor);
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this._previewContainer);
        this._previewNotAvailableMessage = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextModel"], __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1079, "no preview available"), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$modesRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAINTEXT_LANGUAGE_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextModel"].DEFAULT_CREATION_OPTIONS, null);
        // tree
        this._treeContainer = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](containerElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('div.ref-tree.inline'));
        const treeOptions = {
            keyboardSupport: this._defaultTreeKeyboardSupport,
            accessibilityProvider: new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessibilityProvider"](),
            keyboardNavigationLabelProvider: this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringRepresentationProvider"]),
            identityProvider: new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentityProvider"](),
            openOnSingleClick: true,
            selectionNavigation: true,
            overrideStyles: {
                listBackground: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekViewResultsBackground"]
            },
            dnd: this._instantiationService.createInstance(ReferencesDragAndDrop)
        };
        if (this._defaultTreeKeyboardSupport) {
            // the tree will consume `Escape` and prevent the widget from closing
            this._callOnDispose.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this._treeContainer, 'keydown', (e)=>{
                if (e.equals(9 /* KeyCode.Escape */ )) {
                    this._keybindingService.dispatchEvent(e, e.target);
                    e.stopPropagation();
                }
            }, true));
        }
        this._tree = this._instantiationService.createInstance(ReferencesTree, 'ReferencesWidget', this._treeContainer, new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delegate"](), [
            this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferencesRenderer"]),
            this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReferenceRenderer"])
        ], this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataSource"]), treeOptions);
        // split stuff
        this._splitView.addView({
            onDidChange: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].None,
            element: this._previewContainer,
            minimumSize: 200,
            maximumSize: Number.MAX_VALUE,
            layout: (width)=>{
                this._preview.layout({
                    height: this._dim.height,
                    width
                });
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sizing"].Distribute);
        this._splitView.addView({
            onDidChange: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].None,
            element: this._treeContainer,
            minimumSize: 100,
            maximumSize: Number.MAX_VALUE,
            layout: (width)=>{
                this._treeContainer.style.height = "".concat(this._dim.height, "px");
                this._treeContainer.style.width = "".concat(width, "px");
                this._tree.layout(this._dim.height, width);
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sizing"].Distribute);
        this._disposables.add(this._splitView.onDidSashChange(()=>{
            if (this._dim.width) {
                this.layoutData.ratio = this._splitView.getViewSize(0) / this._dim.width;
            }
        }, undefined));
        // listen on selection and focus
        const onEvent = (element, kind)=>{
            if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
                if (kind === 'show') {
                    this._revealReference(element, false);
                }
                this._onDidSelectReference.fire({
                    element,
                    kind,
                    source: 'tree'
                });
            }
        };
        this._disposables.add(this._tree.onDidOpen((e)=>{
            if (e.sideBySide) {
                onEvent(e.element, 'side');
            } else if (e.editorOptions.pinned) {
                onEvent(e.element, 'goto');
            } else {
                onEvent(e.element, 'show');
            }
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this._treeContainer);
    }
    _onWidth(width) {
        if (this._dim) {
            this._doLayoutBody(this._dim.height, width);
        }
    }
    _doLayoutBody(heightInPixel, widthInPixel) {
        super._doLayoutBody(heightInPixel, widthInPixel);
        this._dim = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](widthInPixel, heightInPixel);
        this.layoutData.heightInLines = this._viewZone ? this._viewZone.heightInLines : this.layoutData.heightInLines;
        this._splitView.layout(widthInPixel);
        this._splitView.resizeView(0, widthInPixel * this.layoutData.ratio);
    }
    setSelection(selection) {
        return this._revealReference(selection, true).then(()=>{
            if (!this._model) {
                // disposed
                return;
            }
            // show in tree
            this._tree.setSelection([
                selection
            ]);
            this._tree.setFocus([
                selection
            ]);
        });
    }
    setModel(newModel) {
        // clean up
        this._disposeOnNewModel.clear();
        this._model = newModel;
        if (this._model) {
            return this._onNewModel();
        }
        return Promise.resolve();
    }
    _onNewModel() {
        if (!this._model) {
            return Promise.resolve(undefined);
        }
        if (this._model.isEmpty) {
            this.setTitle('');
            this._messageContainer.innerText = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1080, "No results");
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"](this._messageContainer);
            return Promise.resolve(undefined);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this._messageContainer);
        this._decorationsManager = new DecorationsManager(this._preview, this._model);
        this._disposeOnNewModel.add(this._decorationsManager);
        // listen on model changes
        this._disposeOnNewModel.add(this._model.onDidChangeReferenceRange((reference)=>this._tree.rerender(reference)));
        // listen on editor
        this._disposeOnNewModel.add(this._preview.onMouseDown((e)=>{
            const { event, target } = e;
            if (event.detail !== 2) {
                return;
            }
            const element = this._getFocusedReference();
            if (!element) {
                return;
            }
            this._onDidSelectReference.fire({
                element: {
                    uri: element.uri,
                    range: target.range
                },
                kind: event.ctrlKey || event.metaKey || event.altKey ? 'side' : 'open',
                source: 'editor'
            });
        }));
        // make sure things are rendered
        this.container.classList.add('results-loaded');
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"](this._treeContainer);
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"](this._previewContainer);
        this._splitView.layout(this._dim.width);
        this.focusOnReferenceTree();
        // pick input and a reference to begin with
        return this._tree.setInput(this._model.groups.length === 1 ? this._model.groups[0] : this._model);
    }
    _getFocusedReference() {
        const [element] = this._tree.getFocus();
        if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
            return element;
        } else if (element instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileReferences"]) {
            if (element.children.length > 0) {
                return element.children[0];
            }
        }
        return undefined;
    }
    async revealReference(reference) {
        await this._revealReference(reference, false);
        this._onDidSelectReference.fire({
            element: reference,
            kind: 'goto',
            source: 'tree'
        });
    }
    async _revealReference(reference, revealParent) {
        // check if there is anything to do...
        if (this._revealedReference === reference) {
            return;
        }
        this._revealedReference = reference;
        // Update widget header
        if (reference.uri.scheme !== __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].inMemory) {
            this.setTitle((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basenameOrAuthority"])(reference.uri), this._uriLabel.getUriLabel((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dirname"])(reference.uri)));
        } else {
            this.setTitle(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1081, "References"));
        }
        const promise = this._textModelResolverService.createModelReference(reference.uri);
        if (this._tree.getInput() === reference.parent) {
            this._tree.reveal(reference);
        } else {
            if (revealParent) {
                this._tree.reveal(reference.parent);
            }
            await this._tree.expand(reference.parent);
            this._tree.reveal(reference);
        }
        const ref = await promise;
        if (!this._model) {
            // disposed
            ref.dispose();
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._previewModelReference);
        // show in editor
        const model = ref.object;
        if (model) {
            const scrollType = this._preview.getModel() === model.textEditorModel ? 0 /* ScrollType.Smooth */  : 1 /* ScrollType.Immediate */ ;
            const sel = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].lift(reference.range).collapseToStart();
            this._previewModelReference = ref;
            this._preview.setModel(model.textEditorModel);
            this._preview.setSelection(sel);
            this._preview.revealRangeInCenter(sel, scrollType);
        } else {
            this._preview.setModel(this._previewNotAvailableMessage);
            ref.dispose();
        }
    }
    constructor(editor, _defaultTreeKeyboardSupport, layoutData, themeService, _textModelResolverService, _instantiationService, _peekViewService, _uriLabel, _keybindingService){
        super(editor, {
            showFrame: false,
            showArrow: true,
            isResizeable: true,
            isAccessible: true,
            supportOnTitleClick: true
        }, _instantiationService);
        this._defaultTreeKeyboardSupport = _defaultTreeKeyboardSupport;
        this.layoutData = layoutData;
        this._textModelResolverService = _textModelResolverService;
        this._instantiationService = _instantiationService;
        this._peekViewService = _peekViewService;
        this._uriLabel = _uriLabel;
        this._keybindingService = _keybindingService;
        this._disposeOnNewModel = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._callOnDispose = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onDidSelectReference = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidSelectReference = this._onDidSelectReference.event;
        this._dim = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](0, 0);
        this._isClosing = false; // whether or not a dispose is already in progress
        this._applyTheme(themeService.getColorTheme());
        this._callOnDispose.add(themeService.onDidColorThemeChange(this._applyTheme.bind(this)));
        this._peekViewService.addExclusiveWidget(editor, this);
        this.create();
    }
};
ReferenceWidget = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IThemeService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITextModelService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IPeekViewService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$label$2f$common$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILabelService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], ReferenceWidget);
;
 //# sourceMappingURL=referencesWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ReferencesController",
    ()=>ReferencesController,
    "ctxReferenceSearchVisible",
    ()=>ctxReferenceSearchVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/list/browser/listService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkeys.js [app-client] (ecmascript)");
var _ReferencesController;
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
var ReferencesController_1;
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
const ctxReferenceSearchVisible = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('referenceSearchVisible', false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1073, "Whether reference peek is visible, like 'Peek References' or 'Peek Definition'"));
let ReferencesController = (_ReferencesController = class ReferencesController {
    static get(editor) {
        return editor.getContribution(ReferencesController_1.ID);
    }
    dispose() {
        var _this__widget, _this__model;
        this._referenceSearchVisible.reset();
        this._disposables.dispose();
        (_this__widget = this._widget) === null || _this__widget === void 0 ? void 0 : _this__widget.dispose();
        (_this__model = this._model) === null || _this__model === void 0 ? void 0 : _this__model.dispose();
        this._widget = undefined;
        this._model = undefined;
    }
    toggleWidget(range, modelPromise, peekMode) {
        // close current widget and return early is position didn't change
        let widgetPosition;
        if (this._widget) {
            widgetPosition = this._widget.position;
        }
        this.closeWidget();
        if (!!widgetPosition && range.containsPosition(widgetPosition)) {
            return;
        }
        this._peekMode = peekMode;
        this._referenceSearchVisible.set(true);
        // close the widget on model/mode changes
        this._disposables.add(this._editor.onDidChangeModelLanguage(()=>{
            this.closeWidget();
        }));
        this._disposables.add(this._editor.onDidChangeModel(()=>{
            if (!this._ignoreModelChangeEvent) {
                this.closeWidget();
            }
        }));
        const storageKey = 'peekViewLayout';
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutData"].fromJSON(this._storageService.get(storageKey, 0 /* StorageScope.PROFILE */ , '{}'));
        this._widget = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceWidget"], this._editor, this._defaultTreeKeyboardSupport, data);
        this._widget.setTitle(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1074, "Loading..."));
        this._widget.show(range);
        this._disposables.add(this._widget.onDidClose(()=>{
            modelPromise.cancel();
            if (this._widget) {
                this._storageService.store(storageKey, JSON.stringify(this._widget.layoutData), 0 /* StorageScope.PROFILE */ , 1 /* StorageTarget.MACHINE */ );
                if (!this._widget.isClosing) {
                    // to prevent calling this too many times, check whether it was already closing.
                    this.closeWidget();
                }
                this._widget = undefined;
            } else {
                this.closeWidget();
            }
        }));
        this._disposables.add(this._widget.onDidSelectReference((event)=>{
            const { element, kind } = event;
            if (!element) {
                return;
            }
            switch(kind){
                case 'open':
                    if (event.source !== 'editor' || !this._configurationService.getValue('editor.stablePeek')) {
                        // when stable peek is configured we don't close
                        // the peek window on selecting the editor
                        this.openReference(element, false, false);
                    }
                    break;
                case 'side':
                    this.openReference(element, true, false);
                    break;
                case 'goto':
                    if (peekMode) {
                        this._gotoReference(element, true);
                    } else {
                        this.openReference(element, false, true);
                    }
                    break;
            }
        }));
        const requestId = ++this._requestIdPool;
        modelPromise.then((model)=>{
            var _this__model;
            // still current request? widget still open?
            if (requestId !== this._requestIdPool || !this._widget) {
                model.dispose();
                return undefined;
            }
            (_this__model = this._model) === null || _this__model === void 0 ? void 0 : _this__model.dispose();
            this._model = model;
            // show widget
            return this._widget.setModel(this._model).then(()=>{
                if (this._widget && this._model && this._editor.hasModel()) {
                    // set title
                    if (!this._model.isEmpty) {
                        this._widget.setMetaTitle(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1075, "{0} ({1})", this._model.title, this._model.references.length));
                    } else {
                        this._widget.setMetaTitle('');
                    }
                    // set 'best' selection
                    const uri = this._editor.getModel().uri;
                    const pos = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](range.startLineNumber, range.startColumn);
                    const selection = this._model.nearestReference(uri, pos);
                    if (selection) {
                        return this._widget.setSelection(selection).then(()=>{
                            if (this._widget && this._editor.getOption(99 /* EditorOption.peekWidgetDefaultFocus */ ) === 'editor') {
                                this._widget.focusOnPreviewEditor();
                            }
                        });
                    }
                }
                return undefined;
            });
        }, (error)=>{
            this._notificationService.error(error);
        });
    }
    changeFocusBetweenPreviewAndReferences() {
        if (!this._widget) {
            // can be called while still resolving...
            return;
        }
        if (this._widget.isPreviewEditorFocused()) {
            this._widget.focusOnReferenceTree();
        } else {
            this._widget.focusOnPreviewEditor();
        }
    }
    async goToNextOrPreviousReference(fwd) {
        if (!this._editor.hasModel() || !this._model || !this._widget) {
            // can be called while still resolving...
            return;
        }
        const currentPosition = this._widget.position;
        if (!currentPosition) {
            return;
        }
        const source = this._model.nearestReference(this._editor.getModel().uri, currentPosition);
        if (!source) {
            return;
        }
        const target = this._model.nextOrPreviousReference(source, fwd);
        const editorFocus = this._editor.hasTextFocus();
        const previewEditorFocus = this._widget.isPreviewEditorFocused();
        await this._widget.setSelection(target);
        await this._gotoReference(target, false);
        if (editorFocus) {
            this._editor.focus();
        } else if (this._widget && previewEditorFocus) {
            this._widget.focusOnPreviewEditor();
        }
    }
    async revealReference(reference) {
        if (!this._editor.hasModel() || !this._model || !this._widget) {
            // can be called while still resolving...
            return;
        }
        await this._widget.revealReference(reference);
    }
    closeWidget() {
        let focusEditor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        var _this__widget, _this__model;
        (_this__widget = this._widget) === null || _this__widget === void 0 ? void 0 : _this__widget.dispose();
        (_this__model = this._model) === null || _this__model === void 0 ? void 0 : _this__model.dispose();
        this._referenceSearchVisible.reset();
        this._disposables.clear();
        this._widget = undefined;
        this._model = undefined;
        if (focusEditor) {
            this._editor.focus();
        }
        this._requestIdPool += 1; // Cancel pending requests
    }
    _gotoReference(ref, pinned) {
        var _this__widget;
        (_this__widget = this._widget) === null || _this__widget === void 0 ? void 0 : _this__widget.hide();
        this._ignoreModelChangeEvent = true;
        const range = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].lift(ref.range).collapseToStart();
        return this._editorService.openCodeEditor({
            resource: ref.uri,
            options: {
                selection: range,
                selectionSource: "code.jump" /* TextEditorSelectionSource.JUMP */ ,
                pinned
            }
        }, this._editor).then((openedEditor)=>{
            this._ignoreModelChangeEvent = false;
            if (!openedEditor || !this._widget) {
                // something went wrong...
                this.closeWidget();
                return;
            }
            if (this._editor === openedEditor) {
                //
                this._widget.show(range);
                this._widget.focusOnReferenceTree();
            } else {
                // we opened a different editor instance which means a different controller instance.
                // therefore we stop with this controller and continue with the other
                const other = ReferencesController_1.get(openedEditor);
                const model = this._model.clone();
                this.closeWidget();
                openedEditor.focus();
                var _this__peekMode;
                other === null || other === void 0 ? void 0 : other.toggleWidget(range, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelablePromise"])((_)=>Promise.resolve(model)), (_this__peekMode = this._peekMode) !== null && _this__peekMode !== void 0 ? _this__peekMode : false);
            }
        }, (err)=>{
            this._ignoreModelChangeEvent = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
        });
    }
    openReference(ref, sideBySide, pinned) {
        // clear stage
        if (!sideBySide) {
            this.closeWidget();
        }
        const { uri, range } = ref;
        this._editorService.openCodeEditor({
            resource: uri,
            options: {
                selection: range,
                selectionSource: "code.jump" /* TextEditorSelectionSource.JUMP */ ,
                pinned
            }
        }, this._editor, sideBySide);
    }
    constructor(_defaultTreeKeyboardSupport, _editor, contextKeyService, _editorService, _notificationService, _instantiationService, _storageService, _configurationService){
        this._defaultTreeKeyboardSupport = _defaultTreeKeyboardSupport;
        this._editor = _editor;
        this._editorService = _editorService;
        this._notificationService = _notificationService;
        this._instantiationService = _instantiationService;
        this._storageService = _storageService;
        this._configurationService = _configurationService;
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._requestIdPool = 0;
        this._ignoreModelChangeEvent = false;
        this._referenceSearchVisible = ctxReferenceSearchVisible.bindTo(contextKeyService);
    }
}, ReferencesController_1 = _ReferencesController, _ReferencesController.ID = 'editor.contrib.referencesController', _ReferencesController);
ReferencesController = ReferencesController_1 = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStorageService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], ReferencesController);
;
function withController(accessor, fn) {
    const outerEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOuterEditor"])(accessor);
    if (!outerEditor) {
        return;
    }
    const controller = ReferencesController.get(outerEditor);
    if (controller) {
        fn(controller);
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'togglePeekWidgetFocus',
    weight: 100 /* KeybindingWeight.EditorContrib */ ,
    primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 60 /* KeyCode.F2 */ ),
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor),
    handler (accessor) {
        withController(accessor, (controller)=>{
            controller.changeFocusBetweenPreviewAndReferences();
        });
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'goToNextReference',
    weight: 100 /* KeybindingWeight.EditorContrib */  - 10,
    primary: 62 /* KeyCode.F4 */ ,
    secondary: [
        70 /* KeyCode.F12 */ 
    ],
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor),
    handler (accessor) {
        withController(accessor, (controller)=>{
            controller.goToNextOrPreviousReference(true);
        });
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'goToPreviousReference',
    weight: 100 /* KeybindingWeight.EditorContrib */  - 10,
    primary: 1024 /* KeyMod.Shift */  | 62 /* KeyCode.F4 */ ,
    secondary: [
        1024 /* KeyMod.Shift */  | 70 /* KeyCode.F12 */ 
    ],
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor),
    handler (accessor) {
        withController(accessor, (controller)=>{
            controller.goToNextOrPreviousReference(false);
        });
    }
});
// commands that aren't needed anymore because there is now ContextKeyExpr.OR
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('goToNextReferenceFromEmbeddedEditor', 'goToNextReference');
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('goToPreviousReferenceFromEmbeddedEditor', 'goToPreviousReference');
// close
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('closeReferenceSearchEditor', 'closeReferenceSearch');
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand('closeReferenceSearch', (accessor)=>withController(accessor, (controller)=>controller.closeWidget()));
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerKeybindingRule({
    id: 'closeReferenceSearch',
    weight: 100 /* KeybindingWeight.EditorContrib */  - 101,
    primary: 9 /* KeyCode.Escape */ ,
    secondary: [
        1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
    ],
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('config.editor.stablePeek'))
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerKeybindingRule({
    id: 'closeReferenceSearch',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */  + 50,
    primary: 9 /* KeyCode.Escape */ ,
    secondary: [
        1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
    ],
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('config.editor.stablePeek'), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].or(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputFocusedContext"].negate()))
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'revealReference',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */ ,
    primary: 3 /* KeyCode.Enter */ ,
    mac: {
        primary: 3 /* KeyCode.Enter */ ,
        secondary: [
            2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ 
        ]
    },
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchListFocusContextKey"], __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchTreeElementCanCollapse"].negate(), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchTreeElementCanExpand"].negate()),
    handler (accessor) {
        var _listService_lastFocusedList;
        const listService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IListService"]);
        const focus = (_listService_lastFocusedList = listService.lastFocusedList) === null || _listService_lastFocusedList === void 0 ? void 0 : _listService_lastFocusedList.getFocus();
        if (Array.isArray(focus) && focus[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
            withController(accessor, (controller)=>controller.revealReference(focus[0]));
        }
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'openReferenceToSide',
    weight: 100 /* KeybindingWeight.EditorContrib */ ,
    primary: 2048 /* KeyMod.CtrlCmd */  | 3 /* KeyCode.Enter */ ,
    mac: {
        primary: 256 /* KeyMod.WinCtrl */  | 3 /* KeyCode.Enter */ 
    },
    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(ctxReferenceSearchVisible, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchListFocusContextKey"], __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchTreeElementCanCollapse"].negate(), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchTreeElementCanExpand"].negate()),
    handler (accessor) {
        var _listService_lastFocusedList;
        const listService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IListService"]);
        const focus = (_listService_lastFocusedList = listService.lastFocusedList) === null || _listService_lastFocusedList === void 0 ? void 0 : _listService_lastFocusedList.getFocus();
        if (Array.isArray(focus) && focus[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
            withController(accessor, (controller)=>controller.openReference(focus[0], true, true));
        }
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand('openReference', (accessor)=>{
    var _listService_lastFocusedList;
    const listService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$list$2f$browser$2f$listService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IListService"]);
    const focus = (_listService_lastFocusedList = listService.lastFocusedList) === null || _listService_lastFocusedList === void 0 ? void 0 : _listService_lastFocusedList.getFocus();
    if (Array.isArray(focus) && focus[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneReference"]) {
        withController(accessor, (controller)=>controller.openReference(focus[0], false, true));
    }
}); //# sourceMappingURL=referencesController.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/symbolNavigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ISymbolNavigationService",
    ()=>ISymbolNavigationService,
    "ctxHasSymbols",
    ()=>ctxHasSymbols
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
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
const ctxHasSymbols = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('hasSymbols', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1090, "Whether there are symbol locations that can be navigated via keyboard-only."));
const ISymbolNavigationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('ISymbolNavigationService');
let SymbolNavigationService = class SymbolNavigationService {
    reset() {
        var _this__currentState, _this__currentMessage;
        this._ctxHasSymbols.reset();
        (_this__currentState = this._currentState) === null || _this__currentState === void 0 ? void 0 : _this__currentState.dispose();
        (_this__currentMessage = this._currentMessage) === null || _this__currentMessage === void 0 ? void 0 : _this__currentMessage.close();
        this._currentModel = undefined;
        this._currentIdx = -1;
    }
    put(anchor) {
        const refModel = anchor.parent.parent;
        if (refModel.references.length <= 1) {
            this.reset();
            return;
        }
        this._currentModel = refModel;
        this._currentIdx = refModel.references.indexOf(anchor);
        this._ctxHasSymbols.set(true);
        this._showMessage();
        const editorState = new EditorState(this._editorService);
        const listener = editorState.onDidChange((_)=>{
            if (this._ignoreEditorChange) {
                return;
            }
            const editor = this._editorService.getActiveCodeEditor();
            if (!editor) {
                return;
            }
            const model = editor.getModel();
            const position = editor.getPosition();
            if (!model || !position) {
                return;
            }
            let seenUri = false;
            let seenPosition = false;
            for (const reference of refModel.references){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(reference.uri, model.uri)) {
                    seenUri = true;
                    seenPosition = seenPosition || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].containsPosition(reference.range, position);
                } else if (seenUri) {
                    break;
                }
            }
            if (!seenUri || !seenPosition) {
                this.reset();
            }
        });
        this._currentState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(editorState, listener);
    }
    revealNext(source) {
        if (!this._currentModel) {
            return Promise.resolve();
        }
        // get next result and advance
        this._currentIdx += 1;
        this._currentIdx %= this._currentModel.references.length;
        const reference = this._currentModel.references[this._currentIdx];
        // status
        this._showMessage();
        // open editor, ignore events while that happens
        this._ignoreEditorChange = true;
        return this._editorService.openCodeEditor({
            resource: reference.uri,
            options: {
                selection: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].collapseToStart(reference.range),
                selectionRevealType: 3 /* TextEditorSelectionRevealType.NearTopIfOutsideViewport */ 
            }
        }, source).finally(()=>{
            this._ignoreEditorChange = false;
        });
    }
    _showMessage() {
        var _this__currentMessage;
        (_this__currentMessage = this._currentMessage) === null || _this__currentMessage === void 0 ? void 0 : _this__currentMessage.close();
        const kb = this._keybindingService.lookupKeybinding('editor.gotoNextSymbolFromResult');
        const message = kb ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1091, "Symbol {0} of {1}, {2} for next", this._currentIdx + 1, this._currentModel.references.length, kb.getLabel()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1092, "Symbol {0} of {1}", this._currentIdx + 1, this._currentModel.references.length);
        this._currentMessage = this._notificationService.status(message);
    }
    constructor(contextKeyService, _editorService, _notificationService, _keybindingService){
        this._editorService = _editorService;
        this._notificationService = _notificationService;
        this._keybindingService = _keybindingService;
        this._currentModel = undefined;
        this._currentIdx = -1;
        this._ignoreEditorChange = false;
        this._ctxHasSymbols = ctxHasSymbols.bindTo(contextKeyService);
    }
};
SymbolNavigationService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], SymbolNavigationService);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(ISymbolNavigationService, SymbolNavigationService, 1 /* InstantiationType.Delayed */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorCommand"] {
    runEditorCommand(accessor, editor) {
        return accessor.get(ISymbolNavigationService).revealNext(editor);
    }
    constructor(){
        super({
            id: 'editor.gotoNextSymbolFromResult',
            precondition: ctxHasSymbols,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */ ,
                primary: 70 /* KeyCode.F12 */ 
            }
        });
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
    id: 'editor.gotoNextSymbolFromResult.cancel',
    weight: 100 /* KeybindingWeight.EditorContrib */ ,
    when: ctxHasSymbols,
    primary: 9 /* KeyCode.Escape */ ,
    handler (accessor) {
        accessor.get(ISymbolNavigationService).reset();
    }
});
//
let EditorState = class EditorState {
    dispose() {
        this._disposables.dispose();
        this._onDidChange.dispose();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._listener.values());
    }
    _onDidAddEditor(editor) {
        this._listener.set(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(editor.onDidChangeCursorPosition((_)=>this._onDidChange.fire({
                editor
            })), editor.onDidChangeModelContent((_)=>this._onDidChange.fire({
                editor
            }))));
    }
    _onDidRemoveEditor(editor) {
        var _this__listener_get;
        (_this__listener_get = this._listener.get(editor)) === null || _this__listener_get === void 0 ? void 0 : _this__listener_get.dispose();
        this._listener.delete(editor);
    }
    constructor(editorService){
        this._listener = new Map();
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onDidChange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidChange = this._onDidChange.event;
        this._disposables.add(editorService.onCodeEditorRemove(this._onDidRemoveEditor, this));
        this._disposables.add(editorService.onCodeEditorAdd(this._onDidAddEditor, this));
        editorService.listCodeEditors().forEach(this._onDidAddEditor, this);
    }
};
EditorState = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"])
], EditorState); //# sourceMappingURL=symbolNavigation.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "getDeclarationsAtPosition",
    ()=>getDeclarationsAtPosition,
    "getDefinitionsAtPosition",
    ()=>getDefinitionsAtPosition,
    "getImplementationsAtPosition",
    ()=>getImplementationsAtPosition,
    "getReferencesAtPosition",
    ()=>getReferencesAtPosition,
    "getTypeDefinitionsAtPosition",
    ()=>getTypeDefinitionsAtPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function shouldIncludeLocationLink(sourceModel, loc) {
    // Always allow the location if the request comes from a document with the same scheme.
    if (loc.uri.scheme === sourceModel.uri.scheme) {
        return true;
    }
    // Otherwise filter out locations from internal schemes
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesSomeScheme"])(loc.uri, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].walkThroughSnippet, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeChatCodeBlock, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeChatCodeCompareBlock)) {
        return false;
    }
    return true;
}
async function getLocationLinks(model, position, registry, recursive, provide) {
    const provider = registry.ordered(model, recursive);
    // get results
    const promises = provider.map((provider)=>{
        return Promise.resolve(provide(provider, model, position)).then(undefined, (err)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(err);
            return undefined;
        });
    });
    const values = await Promise.all(promises);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coalesce"])(values.flat()).filter((loc)=>shouldIncludeLocationLink(model, loc));
}
function getDefinitionsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position)=>{
        return provider.provideDefinition(model, position, token);
    });
}
function getDeclarationsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position)=>{
        return provider.provideDeclaration(model, position, token);
    });
}
function getImplementationsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position)=>{
        return provider.provideImplementation(model, position, token);
    });
}
function getTypeDefinitionsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position)=>{
        return provider.provideTypeDefinition(model, position, token);
    });
}
function getReferencesAtPosition(registry, model, position, compact, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, async (provider, model, position)=>{
        var _this, _this1;
        const result = (_this = await provider.provideReferences(model, position, {
            includeDeclaration: true
        }, token)) === null || _this === void 0 ? void 0 : _this.filter((ref)=>shouldIncludeLocationLink(model, ref));
        if (!compact || !result || result.length !== 2) {
            return result;
        }
        const resultWithoutDeclaration = (_this1 = await provider.provideReferences(model, position, {
            includeDeclaration: false
        }, token)) === null || _this1 === void 0 ? void 0 : _this1.filter((ref)=>shouldIncludeLocationLink(model, ref));
        if (resultWithoutDeclaration && resultWithoutDeclaration.length === 1) {
            return resultWithoutDeclaration;
        }
        return result;
    });
}
// -- API commands ----
async function _sortedAndDeduped(callback) {
    const rawLinks = await callback();
    const model = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](rawLinks, '');
    const modelLinks = model.references.map((ref)=>ref.link);
    model.dispose();
    return modelLinks;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeDefinitionProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getDefinitionsAtPosition(languageFeaturesService.definitionProvider, model, position, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeDefinitionProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getDefinitionsAtPosition(languageFeaturesService.definitionProvider, model, position, true, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeTypeDefinitionProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getTypeDefinitionsAtPosition(languageFeaturesService.typeDefinitionProvider, model, position, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeTypeDefinitionProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getTypeDefinitionsAtPosition(languageFeaturesService.typeDefinitionProvider, model, position, true, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeDeclarationProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getDeclarationsAtPosition(languageFeaturesService.declarationProvider, model, position, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeDeclarationProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getDeclarationsAtPosition(languageFeaturesService.declarationProvider, model, position, true, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeReferenceProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeReferenceProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, false, true, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeImplementationProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getImplementationsAtPosition(languageFeaturesService.implementationProvider, model, position, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeImplementationProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const promise = getImplementationsAtPosition(languageFeaturesService.implementationProvider, model, position, true, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    return _sortedAndDeduped(()=>promise);
}); //# sourceMappingURL=goToSymbol.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DefinitionAction",
    ()=>DefinitionAction,
    "SymbolNavigationAction",
    ()=>SymbolNavigationAction,
    "SymbolNavigationAnchor",
    ()=>SymbolNavigationAnchor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/peek/referencesController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/referencesModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$symbolNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/symbolNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$message$2f$browser$2f$messageController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkeys.js [app-client] (ecmascript)");
var _GoToDefinitionAction, _OpenDefinitionToSideAction, _PeekDefinitionAction, _GoToDeclarationAction, _GoToTypeDefinitionAction, _PeekTypeDefinitionAction, _GoToImplementationAction, _PeekImplementationAction;
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
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuRegistry"].appendMenuItem(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext, {
    submenu: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1033, "Peek"),
    group: 'navigation',
    order: 100
});
class SymbolNavigationAnchor {
    static is(thing) {
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        if (thing instanceof SymbolNavigationAnchor) {
            return true;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition(thing.position) && thing.model) {
            return true;
        }
        return false;
    }
    constructor(model, position){
        this.model = model;
        this.position = position;
    }
}
class SymbolNavigationAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction2"] {
    static all() {
        return SymbolNavigationAction._allSymbolNavigationCommands.values();
    }
    static _patchConfig(opts) {
        const result = {
            ...opts,
            f1: true
        };
        // patch context menu when clause
        if (result.menu) {
            for (const item of __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].wrap(result.menu)){
                if (item.id === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext || item.id === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek) {
                    item.when = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(opts.precondition, item.when);
                }
            }
        }
        return result;
    }
    runEditorCommand(accessor, editor, arg, range) {
        if (!editor.hasModel()) {
            return Promise.resolve(undefined);
        }
        const notificationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]);
        const editorService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]);
        const progressService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEditorProgressService"]);
        const symbolNavService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$symbolNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISymbolNavigationService"]);
        const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
        const instaService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]);
        const model = editor.getModel();
        const position = editor.getPosition();
        const anchor = SymbolNavigationAnchor.is(arg) ? arg : new SymbolNavigationAnchor(model, position);
        const cts = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorStateCancellationTokenSource"](editor, 1 /* CodeEditorStateFlag.Value */  | 4 /* CodeEditorStateFlag.Position */ );
        const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raceCancellation"])(this._getLocationModel(languageFeaturesService, anchor.model, anchor.position, cts.token), cts.token).then(async (references)=>{
            if (!references || cts.token.isCancellationRequested) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alert"])(references.ariaMessage);
            let altAction;
            if (references.referenceAt(model.uri, position)) {
                const altActionId = this._getAlternativeCommand(editor);
                if (altActionId !== undefined && !SymbolNavigationAction._activeAlternativeCommands.has(altActionId) && SymbolNavigationAction._allSymbolNavigationCommands.has(altActionId)) {
                    altAction = SymbolNavigationAction._allSymbolNavigationCommands.get(altActionId);
                }
            }
            const referenceCount = references.references.length;
            if (referenceCount === 0) {
                // no result -> show message
                if (!this.configuration.muteMessage) {
                    var _MessageController_get;
                    const info = model.getWordAtPosition(position);
                    (_MessageController_get = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$message$2f$browser$2f$messageController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageController"].get(editor)) === null || _MessageController_get === void 0 ? void 0 : _MessageController_get.showMessage(this._getNoResultFoundMessage(info), position);
                }
            } else if (referenceCount === 1 && altAction) {
                // already at the only result, run alternative
                SymbolNavigationAction._activeAlternativeCommands.add(this.desc.id);
                instaService.invokeFunction((accessor)=>altAction.runEditorCommand(accessor, editor, arg, range).finally(()=>{
                        SymbolNavigationAction._activeAlternativeCommands.delete(this.desc.id);
                    }));
            } else {
                // normal results handling
                return this._onResult(editorService, symbolNavService, editor, references, range);
            }
        }, (err)=>{
            // report an error
            notificationService.error(err);
        }).finally(()=>{
            cts.dispose();
        });
        progressService.showWhile(promise, 250);
        return promise;
    }
    async _onResult(editorService, symbolNavService, editor, model, range) {
        const gotoLocation = this._getGoToPreference(editor);
        if (!(editor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmbeddedCodeEditorWidget"]) && (this.configuration.openInPeek || gotoLocation === 'peek' && model.references.length > 1)) {
            this._openInPeek(editor, model, range);
        } else {
            const next = model.firstReference();
            const peek = model.references.length > 1 && gotoLocation === 'gotoAndPeek';
            const targetEditor = await this._openReference(editor, editorService, next, this.configuration.openToSide, !peek);
            if (peek && targetEditor) {
                this._openInPeek(targetEditor, model, range);
            } else {
                model.dispose();
            }
            // keep remaining locations around when using
            // 'goto'-mode
            if (gotoLocation === 'goto') {
                symbolNavService.put(next);
            }
        }
    }
    async _openReference(editor, editorService, reference, sideBySide, highlight) {
        // range is the target-selection-range when we have one
        // and the fallback is the 'full' range
        let range = undefined;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocationLink"])(reference)) {
            range = reference.targetSelectionRange;
        }
        if (!range) {
            range = reference.range;
        }
        if (!range) {
            return undefined;
        }
        const targetEditor = await editorService.openCodeEditor({
            resource: reference.uri,
            options: {
                selection: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].collapseToStart(range),
                selectionRevealType: 3 /* TextEditorSelectionRevealType.NearTopIfOutsideViewport */ ,
                selectionSource: "code.jump" /* TextEditorSelectionSource.JUMP */ 
            }
        }, editor, sideBySide);
        if (!targetEditor) {
            return undefined;
        }
        if (highlight) {
            const modelNow = targetEditor.getModel();
            const decorations = targetEditor.createDecorationsCollection([
                {
                    range,
                    options: {
                        description: 'symbol-navigate-action-highlight',
                        className: 'symbolHighlight'
                    }
                }
            ]);
            setTimeout(()=>{
                if (targetEditor.getModel() === modelNow) {
                    decorations.clear();
                }
            }, 350);
        }
        return targetEditor;
    }
    _openInPeek(target, model, range) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesController"].get(target);
        if (controller && target.hasModel()) {
            controller.toggleWidget(range !== null && range !== void 0 ? range : target.getSelection(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelablePromise"])((_)=>Promise.resolve(model)), this.configuration.openInPeek);
        } else {
            model.dispose();
        }
    }
    constructor(configuration, opts){
        super(SymbolNavigationAction._patchConfig(opts));
        this.configuration = configuration;
        SymbolNavigationAction._allSymbolNavigationCommands.set(opts.id, this);
    }
}
SymbolNavigationAction._allSymbolNavigationCommands = new Map();
SymbolNavigationAction._activeAlternativeCommands = new Set();
class DefinitionAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefinitionsAtPosition"])(languageFeaturesService.definitionProvider, model, position, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1034, 'Definitions'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1035, "No definition found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1036, "No definition found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).alternativeDefinitionCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleDefinitions;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_GoToDefinitionAction = class GoToDefinitionAction extends DefinitionAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToDefinitionAction.id,
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1060, "Go to Definition"),
                mnemonicTitle: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1037, "Go to &&Definition")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasDefinitionProvider,
            keybinding: [
                {
                    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                    primary: 70 /* KeyCode.F12 */ ,
                    weight: 100 /* KeybindingWeight.EditorContrib */ 
                },
                {
                    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsWebContext"]),
                    primary: 2048 /* KeyMod.CtrlCmd */  | 70 /* KeyCode.F12 */ ,
                    weight: 100 /* KeybindingWeight.EditorContrib */ 
                }
            ],
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext,
                    group: 'navigation',
                    order: 1.1
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 2
                }
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('editor.action.goToDeclaration', GoToDefinitionAction.id);
    }
}, _GoToDefinitionAction.id = 'editor.action.revealDefinition', _GoToDefinitionAction));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_OpenDefinitionToSideAction = class OpenDefinitionToSideAction extends DefinitionAction {
    constructor(){
        super({
            openToSide: true,
            openInPeek: false,
            muteMessage: false
        }, {
            id: OpenDefinitionToSideAction.id,
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1061, "Open Definition to the Side"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasDefinitionProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            keybinding: [
                {
                    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                    primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 70 /* KeyCode.F12 */ ),
                    weight: 100 /* KeybindingWeight.EditorContrib */ 
                },
                {
                    when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsWebContext"]),
                    primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 2048 /* KeyMod.CtrlCmd */  | 70 /* KeyCode.F12 */ ),
                    weight: 100 /* KeybindingWeight.EditorContrib */ 
                }
            ]
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('editor.action.openDeclarationToTheSide', OpenDefinitionToSideAction.id);
    }
}, _OpenDefinitionToSideAction.id = 'editor.action.revealDefinitionAside', _OpenDefinitionToSideAction));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_PeekDefinitionAction = class PeekDefinitionAction extends DefinitionAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekDefinitionAction.id,
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1062, "Peek Definition"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasDefinitionProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 512 /* KeyMod.Alt */  | 70 /* KeyCode.F12 */ ,
                linux: {
                    primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 68 /* KeyCode.F10 */ 
                },
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menu: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
                group: 'peek',
                order: 2
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('editor.action.previewDeclaration', PeekDefinitionAction.id);
    }
}, _PeekDefinitionAction.id = 'editor.action.peekDefinition', _PeekDefinitionAction));
//#endregion
//#region --- DECLARATION
class DeclarationAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeclarationsAtPosition"])(languageFeaturesService.declarationProvider, model, position, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1038, 'Declarations'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1039, "No declaration found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1040, "No declaration found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).alternativeDeclarationCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleDeclarations;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_GoToDeclarationAction = class GoToDeclarationAction extends DeclarationAction {
    _getNoResultFoundMessage(info) {
        return info && info.word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1042, "No declaration found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1043, "No declaration found");
    }
    constructor(){
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToDeclarationAction.id,
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1063, "Go to Declaration"),
                mnemonicTitle: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1041, "Go to &&Declaration")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasDeclarationProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext,
                    group: 'navigation',
                    order: 1.3
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 3
                }
            ]
        });
    }
}, _GoToDeclarationAction.id = 'editor.action.revealDeclaration', _GoToDeclarationAction));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class PeekDeclarationAction extends DeclarationAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: 'editor.action.peekDeclaration',
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1064, "Peek Declaration"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasDeclarationProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            menu: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
                group: 'peek',
                order: 3
            }
        });
    }
});
//#endregion
//#region --- TYPE DEFINITION
class TypeDefinitionAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeDefinitionsAtPosition"])(languageFeaturesService.typeDefinitionProvider, model, position, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1044, 'Type Definitions'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1045, "No type definition found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1046, "No type definition found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).alternativeTypeDefinitionCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleTypeDefinitions;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_GoToTypeDefinitionAction = class GoToTypeDefinitionAction extends TypeDefinitionAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToTypeDefinitionAction.ID,
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1065, "Go to Type Definition"),
                mnemonicTitle: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1047, "Go to &&Type Definition")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasTypeDefinitionProvider,
            keybinding: {
                when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext,
                    group: 'navigation',
                    order: 1.4
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 3
                }
            ]
        });
    }
}, _GoToTypeDefinitionAction.ID = 'editor.action.goToTypeDefinition', _GoToTypeDefinitionAction));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_PeekTypeDefinitionAction = class PeekTypeDefinitionAction extends TypeDefinitionAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekTypeDefinitionAction.ID,
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1066, "Peek Type Definition"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasTypeDefinitionProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            menu: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
                group: 'peek',
                order: 4
            }
        });
    }
}, _PeekTypeDefinitionAction.ID = 'editor.action.peekTypeDefinition', _PeekTypeDefinitionAction));
//#endregion
//#region --- IMPLEMENTATION
class ImplementationAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImplementationsAtPosition"])(languageFeaturesService.implementationProvider, model, position, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1048, 'Implementations'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1049, "No implementation found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1050, "No implementation found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).alternativeImplementationCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleImplementations;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_GoToImplementationAction = class GoToImplementationAction extends ImplementationAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToImplementationAction.ID,
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1067, "Go to Implementations"),
                mnemonicTitle: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1051, "Go to &&Implementations")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasImplementationProvider,
            keybinding: {
                when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 70 /* KeyCode.F12 */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext,
                    group: 'navigation',
                    order: 1.45
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 4
                }
            ]
        });
    }
}, _GoToImplementationAction.ID = 'editor.action.goToImplementation', _GoToImplementationAction));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])((_PeekImplementationAction = class PeekImplementationAction extends ImplementationAction {
    constructor(){
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekImplementationAction.ID,
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1068, "Peek Implementations"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasImplementationProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 70 /* KeyCode.F12 */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menu: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
                group: 'peek',
                order: 5
            }
        });
    }
}, _PeekImplementationAction.ID = 'editor.action.peekImplementation', _PeekImplementationAction));
//#endregion
//#region --- REFERENCES
class ReferencesAction extends SymbolNavigationAction {
    _getNoResultFoundMessage(info) {
        return info ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1052, "No references found for '{0}'", info.word) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1053, "No references found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).alternativeReferenceCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleReferences;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class GoToReferencesAction extends ReferencesAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReferencesAtPosition"])(languageFeaturesService.referenceProvider, model, position, true, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1055, 'References'));
    }
    constructor(){
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: 'editor.action.goToReferences',
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1069, "Go to References"),
                mnemonicTitle: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1054, "Go to &&References")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasReferenceProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 1024 /* KeyMod.Shift */  | 70 /* KeyCode.F12 */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            menu: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContext,
                    group: 'navigation',
                    order: 1.45
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 5
                }
            ]
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class PeekReferencesAction extends ReferencesAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReferencesAtPosition"])(languageFeaturesService.referenceProvider, model, position, false, false, token), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1056, 'References'));
    }
    constructor(){
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: 'editor.action.referenceSearch.trigger',
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1070, "Peek References"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasReferenceProvider, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated()),
            menu: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"].EditorContextPeek,
                group: 'peek',
                order: 6
            }
        });
    }
});
//#endregion
//#region --- GENERIC goto symbols command
class GenericGoToLocationAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, _model, _position, _token) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](this._references, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1057, 'Locations'));
    }
    _getNoResultFoundMessage(info) {
        return info && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1058, "No results for '{0}'", info.word) || '';
    }
    _getGoToPreference(editor) {
        var _this__gotoMultipleBehaviour;
        return (_this__gotoMultipleBehaviour = this._gotoMultipleBehaviour) !== null && _this__gotoMultipleBehaviour !== void 0 ? _this__gotoMultipleBehaviour : editor.getOption(67 /* EditorOption.gotoLocation */ ).multipleReferences;
    }
    _getAlternativeCommand() {
        return undefined;
    }
    constructor(config, _references, _gotoMultipleBehaviour){
        super(config, {
            id: 'editor.action.goToLocation',
            title: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1071, "Go to Any Symbol"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].notInPeekEditor, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].isInEmbeddedEditor.toNegated())
        });
        this._references = _references;
        this._gotoMultipleBehaviour = _gotoMultipleBehaviour;
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand({
    id: 'editor.action.goToLocations',
    metadata: {
        description: 'Go to locations from a position in a file',
        args: [
            {
                name: 'uri',
                description: 'The text document in which to start',
                constraint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"]
            },
            {
                name: 'position',
                description: 'The position at which to start',
                constraint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition
            },
            {
                name: 'locations',
                description: 'An array of locations.',
                constraint: Array
            },
            {
                name: 'multiple',
                description: 'Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`'
            },
            {
                name: 'noResultsMessage',
                description: 'Human readable message that shows when locations is empty.'
            }
        ]
    },
    handler: async (accessor, resource, position, references, multiple, noResultsMessage, openInPeek)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(resource));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition(position));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(Array.isArray(references));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(typeof multiple === 'undefined' || typeof multiple === 'string');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(typeof openInPeek === 'undefined' || typeof openInPeek === 'boolean');
        const editorService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]);
        const editor = await editorService.openCodeEditor({
            resource
        }, editorService.getFocusedCodeEditor());
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCodeEditor"])(editor)) {
            editor.setPosition(position);
            editor.revealPositionInCenterIfOutsideViewport(position, 0 /* ScrollType.Smooth */ );
            return editor.invokeWithinContext((accessor)=>{
                const command = new class extends GenericGoToLocationAction {
                    _getNoResultFoundMessage(info) {
                        return noResultsMessage || super._getNoResultFoundMessage(info);
                    }
                }({
                    muteMessage: !Boolean(noResultsMessage),
                    openInPeek: Boolean(openInPeek),
                    openToSide: false
                }, references, multiple);
                accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]).invokeFunction(command.run.bind(command), editor);
            });
        }
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand({
    id: 'editor.action.peekLocations',
    metadata: {
        description: 'Peek locations from a position in a file',
        args: [
            {
                name: 'uri',
                description: 'The text document in which to start',
                constraint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"]
            },
            {
                name: 'position',
                description: 'The position at which to start',
                constraint: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition
            },
            {
                name: 'locations',
                description: 'An array of locations.',
                constraint: Array
            },
            {
                name: 'multiple',
                description: 'Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`'
            }
        ]
    },
    handler: async (accessor, resource, position, references, multiple)=>{
        accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]).executeCommand('editor.action.goToLocations', resource, position, references, multiple, undefined, true);
    }
});
//#endregion
//#region --- REFERENCE search special commands
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand({
    id: 'editor.action.findReferences',
    handler: (accessor, resource, position)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(resource));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition(position));
        const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
        const codeEditorService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]);
        return codeEditorService.openCodeEditor({
            resource
        }, codeEditorService.getFocusedCodeEditor()).then((control)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCodeEditor"])(control) || !control.hasModel()) {
                return undefined;
            }
            const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$peek$2f$referencesController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesController"].get(control);
            if (!controller) {
                return undefined;
            }
            const references = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelablePromise"])((token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReferencesAtPosition"])(languageFeaturesService.referenceProvider, control.getModel(), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].lift(position), false, false, token).then((references)=>new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$referencesModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferencesModel"](references, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1059, 'References'))));
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, position.column, position.lineNumber, position.column);
            return Promise.resolve(controller.toggleWidget(range, references, false));
        });
    }
});
// use NEW command
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommandAlias('editor.action.showReferences', 'editor.action.peekLocations'); //#endregion
 //# sourceMappingURL=goToCommands.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "GotoDefinitionAtPositionEditorContribution",
    ()=>GotoDefinitionAtPositionEditorContribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$clickLinkGesture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-client] (ecmascript)");
var _GotoDefinitionAtPositionEditorContribution;
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
var GotoDefinitionAtPositionEditorContribution_1;
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
let GotoDefinitionAtPositionEditorContribution = (_GotoDefinitionAtPositionEditorContribution = class GotoDefinitionAtPositionEditorContribution {
    static get(editor) {
        return editor.getContribution(GotoDefinitionAtPositionEditorContribution_1.ID);
    }
    async startFindDefinitionFromCursor(position) {
        // For issue: https://github.com/microsoft/vscode/issues/46257
        // equivalent to mouse move with meta/ctrl key
        // First find the definition and add decorations
        // to the editor to be shown with the content hover widget
        await this.startFindDefinition(position);
        // Add listeners for editor cursor move and key down events
        // Dismiss the "extended" editor decorations when the user hides
        // the hover widget. There is no event for the widget itself so these
        // serve as a best effort. After removing the link decorations, the hover
        // widget is clean and will only show declarations per next request.
        this.toUnhookForKeyboard.add(this.editor.onDidChangeCursorPosition(()=>{
            this.currentWordAtPosition = null;
            this.removeLinkDecorations();
            this.toUnhookForKeyboard.clear();
        }));
        this.toUnhookForKeyboard.add(this.editor.onKeyDown((e)=>{
            if (e) {
                this.currentWordAtPosition = null;
                this.removeLinkDecorations();
                this.toUnhookForKeyboard.clear();
            }
        }));
    }
    startFindDefinitionFromMouse(mouseEvent, withKey) {
        // check if we are active and on a content widget
        if (mouseEvent.target.type === 9 /* MouseTargetType.CONTENT_WIDGET */  && this.linkDecorations.length > 0) {
            return;
        }
        if (!this.editor.hasModel() || !this.isEnabled(mouseEvent, withKey)) {
            this.currentWordAtPosition = null;
            this.removeLinkDecorations();
            return;
        }
        const position = mouseEvent.target.position;
        this.startFindDefinition(position);
    }
    async startFindDefinition(position) {
        var _this_editor_getModel;
        // Dispose listeners for updating decorations when using keyboard to show definition hover
        this.toUnhookForKeyboard.clear();
        // Find word at mouse position
        const word = position ? (_this_editor_getModel = this.editor.getModel()) === null || _this_editor_getModel === void 0 ? void 0 : _this_editor_getModel.getWordAtPosition(position) : null;
        if (!word) {
            this.currentWordAtPosition = null;
            this.removeLinkDecorations();
            return;
        }
        // Return early if word at position is still the same
        if (this.currentWordAtPosition && this.currentWordAtPosition.startColumn === word.startColumn && this.currentWordAtPosition.endColumn === word.endColumn && this.currentWordAtPosition.word === word.word) {
            return;
        }
        this.currentWordAtPosition = word;
        // Find definition and decorate word if found
        const state = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"](this.editor, 4 /* CodeEditorStateFlag.Position */  | 1 /* CodeEditorStateFlag.Value */  | 2 /* CodeEditorStateFlag.Selection */  | 8 /* CodeEditorStateFlag.Scroll */ );
        if (this.previousPromise) {
            this.previousPromise.cancel();
            this.previousPromise = null;
        }
        this.previousPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelablePromise"])((token)=>this.findDefinition(position, token));
        let results;
        try {
            results = await this.previousPromise;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(error);
            return;
        }
        if (!results || !results.length || !state.validate(this.editor)) {
            this.removeLinkDecorations();
            return;
        }
        const linkRange = results[0].originSelectionRange ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].lift(results[0].originSelectionRange) : new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
        // Multiple results
        if (results.length > 1) {
            let combinedRange = linkRange;
            for (const { originSelectionRange } of results){
                if (originSelectionRange) {
                    combinedRange = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].plusRange(combinedRange, originSelectionRange);
                }
            }
            this.addDecoration(combinedRange, new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1072, "Click to show {0} definitions.", results.length)));
        } else {
            // Single result
            const result = results[0];
            if (!result.uri) {
                return;
            }
            return this.textModelResolverService.createModelReference(result.uri).then((ref)=>{
                if (!ref.object || !ref.object.textEditorModel) {
                    ref.dispose();
                    return;
                }
                const { object: { textEditorModel } } = ref;
                const { startLineNumber } = result.range;
                if (startLineNumber < 1 || startLineNumber > textEditorModel.getLineCount()) {
                    // invalid range
                    ref.dispose();
                    return;
                }
                const previewValue = this.getPreviewValue(textEditorModel, startLineNumber, result);
                const languageId = this.languageService.guessLanguageIdByFilepathOrFirstLine(textEditorModel.uri);
                this.addDecoration(linkRange, previewValue ? new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownString"]().appendCodeblock(languageId ? languageId : '', previewValue) : undefined);
                ref.dispose();
            });
        }
    }
    getPreviewValue(textEditorModel, startLineNumber, result) {
        let rangeToUse = result.range;
        const numberOfLinesInRange = rangeToUse.endLineNumber - rangeToUse.startLineNumber;
        if (numberOfLinesInRange >= GotoDefinitionAtPositionEditorContribution_1.MAX_SOURCE_PREVIEW_LINES) {
            rangeToUse = this.getPreviewRangeBasedOnIndentation(textEditorModel, startLineNumber);
        }
        rangeToUse = textEditorModel.validateRange(rangeToUse);
        const previewValue = this.stripIndentationFromPreviewRange(textEditorModel, startLineNumber, rangeToUse);
        return previewValue;
    }
    stripIndentationFromPreviewRange(textEditorModel, startLineNumber, previewRange) {
        const startIndent = textEditorModel.getLineFirstNonWhitespaceColumn(startLineNumber);
        let minIndent = startIndent;
        for(let endLineNumber = startLineNumber + 1; endLineNumber < previewRange.endLineNumber; endLineNumber++){
            const endIndent = textEditorModel.getLineFirstNonWhitespaceColumn(endLineNumber);
            minIndent = Math.min(minIndent, endIndent);
        }
        const previewValue = textEditorModel.getValueInRange(previewRange).replace(new RegExp("^\\s{".concat(minIndent - 1, "}"), 'gm'), '').trim();
        return previewValue;
    }
    getPreviewRangeBasedOnIndentation(textEditorModel, startLineNumber) {
        const startIndent = textEditorModel.getLineFirstNonWhitespaceColumn(startLineNumber);
        const maxLineNumber = Math.min(textEditorModel.getLineCount(), startLineNumber + GotoDefinitionAtPositionEditorContribution_1.MAX_SOURCE_PREVIEW_LINES);
        let endLineNumber = startLineNumber + 1;
        for(; endLineNumber < maxLineNumber; endLineNumber++){
            const endIndent = textEditorModel.getLineFirstNonWhitespaceColumn(endLineNumber);
            if (startIndent === endIndent) {
                break;
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](startLineNumber, 1, endLineNumber + 1, 1);
    }
    addDecoration(range, hoverMessage) {
        const newDecorations = {
            range: range,
            options: {
                description: 'goto-definition-link',
                inlineClassName: 'goto-definition-link',
                hoverMessage
            }
        };
        this.linkDecorations.set([
            newDecorations
        ]);
    }
    removeLinkDecorations() {
        this.linkDecorations.clear();
    }
    isEnabled(mouseEvent, withKey) {
        var _mouseEvent_target_detail_injectedText;
        return this.editor.hasModel() && mouseEvent.isLeftClick && mouseEvent.isNoneOrSingleMouseDown && mouseEvent.target.type === 6 /* MouseTargetType.CONTENT_TEXT */  && !(((_mouseEvent_target_detail_injectedText = mouseEvent.target.detail.injectedText) === null || _mouseEvent_target_detail_injectedText === void 0 ? void 0 : _mouseEvent_target_detail_injectedText.options) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelDecorationInjectedTextOptions"]) && (mouseEvent.hasTriggerModifier || (withKey ? withKey.keyCodeIsTriggerKey : false)) && this.languageFeaturesService.definitionProvider.has(this.editor.getModel());
    }
    findDefinition(position, token) {
        const model = this.editor.getModel();
        if (!model) {
            return Promise.resolve(null);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefinitionsAtPosition"])(this.languageFeaturesService.definitionProvider, model, position, false, token);
    }
    gotoDefinition(position, openToSide) {
        this.editor.setPosition(position);
        return this.editor.invokeWithinContext((accessor)=>{
            const canPeek = !openToSide && this.editor.getOption(101 /* EditorOption.definitionLinkOpensInPeek */ ) && !this.isInPeekEditor(accessor);
            const action = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefinitionAction"]({
                openToSide,
                openInPeek: canPeek,
                muteMessage: true
            }, {
                title: {
                    value: '',
                    original: ''
                },
                id: '',
                precondition: undefined
            });
            return action.run(accessor);
        });
    }
    isInPeekEditor(accessor) {
        const contextKeyService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor.getValue(contextKeyService);
    }
    dispose() {
        this.toUnhook.dispose();
        this.toUnhookForKeyboard.dispose();
    }
    constructor(editor, textModelResolverService, languageService, languageFeaturesService){
        this.textModelResolverService = textModelResolverService;
        this.languageService = languageService;
        this.languageFeaturesService = languageFeaturesService;
        this.toUnhook = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.toUnhookForKeyboard = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.currentWordAtPosition = null;
        this.previousPromise = null;
        this.editor = editor;
        this.linkDecorations = this.editor.createDecorationsCollection();
        const linkGesture = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$clickLinkGesture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClickLinkGesture"](editor);
        this.toUnhook.add(linkGesture);
        this.toUnhook.add(linkGesture.onMouseMoveOrRelevantKeyDown((param)=>{
            let [mouseEvent, keyboardEvent] = param;
            this.startFindDefinitionFromMouse(mouseEvent, keyboardEvent !== null && keyboardEvent !== void 0 ? keyboardEvent : undefined);
        }));
        this.toUnhook.add(linkGesture.onExecute((mouseEvent)=>{
            if (this.isEnabled(mouseEvent)) {
                this.gotoDefinition(mouseEvent.target.position, mouseEvent.hasSideBySideModifier).catch((error)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(error);
                }).finally(()=>{
                    this.removeLinkDecorations();
                });
            }
        }));
        this.toUnhook.add(linkGesture.onCancel(()=>{
            this.removeLinkDecorations();
            this.currentWordAtPosition = null;
        }));
    }
}, GotoDefinitionAtPositionEditorContribution_1 = _GotoDefinitionAtPositionEditorContribution, _GotoDefinitionAtPositionEditorContribution.ID = 'editor.contrib.gotodefinitionatposition', _GotoDefinitionAtPositionEditorContribution.MAX_SOURCE_PREVIEW_LINES = 8, _GotoDefinitionAtPositionEditorContribution);
GotoDefinitionAtPositionEditorContribution = GotoDefinitionAtPositionEditorContribution_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITextModelService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"])
], GotoDefinitionAtPositionEditorContribution);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorContribution"])(GotoDefinitionAtPositionEditorContribution.ID, GotoDefinitionAtPositionEditorContribution, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */ ); //# sourceMappingURL=goToDefinitionAtPosition.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_editor_contrib_gotoSymbol_browser_f71ed39a._.js.map