(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "HoverForeignElementAnchor",
    ()=>HoverForeignElementAnchor,
    "HoverParticipantRegistry",
    ()=>HoverParticipantRegistry,
    "HoverRangeAnchor",
    ()=>HoverRangeAnchor,
    "RenderedHoverParts",
    ()=>RenderedHoverParts
]);
class HoverRangeAnchor {
    equals(other) {
        return other.type === 1 /* HoverAnchorType.Range */  && this.range.equalsRange(other.range);
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return lastAnchor.type === 1 /* HoverAnchorType.Range */  && showAtPosition.lineNumber === this.range.startLineNumber;
    }
    constructor(priority, range, initialMousePosX, initialMousePosY){
        this.priority = priority;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.type = 1 /* HoverAnchorType.Range */ ;
    }
}
class HoverForeignElementAnchor {
    equals(other) {
        return other.type === 2 /* HoverAnchorType.ForeignElement */  && this.owner === other.owner;
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return lastAnchor.type === 2 /* HoverAnchorType.ForeignElement */  && this.owner === lastAnchor.owner;
    }
    constructor(priority, owner, range, initialMousePosX, initialMousePosY, supportsMarkerHover){
        this.priority = priority;
        this.owner = owner;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.supportsMarkerHover = supportsMarkerHover;
        this.type = 2 /* HoverAnchorType.ForeignElement */ ;
    }
}
class RenderedHoverParts {
    dispose() {
        var _this_disposables;
        for (const part of this.renderedHoverParts){
            part.dispose();
        }
        (_this_disposables = this.disposables) === null || _this_disposables === void 0 ? void 0 : _this_disposables.dispose();
    }
    constructor(renderedHoverParts, disposables){
        this.renderedHoverParts = renderedHoverParts;
        this.disposables = disposables;
    }
}
const HoverParticipantRegistry = new class HoverParticipantRegistry {
    register(ctor) {
        this._participants.push(ctor);
    }
    getAll() {
        return this._participants;
    }
    constructor(){
        this._participants = [];
    }
}(); //# sourceMappingURL=hoverTypes.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActionIds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DECREASE_HOVER_VERBOSITY_ACTION_ID",
    ()=>DECREASE_HOVER_VERBOSITY_ACTION_ID,
    "DECREASE_HOVER_VERBOSITY_ACTION_LABEL",
    ()=>DECREASE_HOVER_VERBOSITY_ACTION_LABEL,
    "GO_TO_BOTTOM_HOVER_ACTION_ID",
    ()=>GO_TO_BOTTOM_HOVER_ACTION_ID,
    "GO_TO_TOP_HOVER_ACTION_ID",
    ()=>GO_TO_TOP_HOVER_ACTION_ID,
    "HIDE_HOVER_ACTION_ID",
    ()=>HIDE_HOVER_ACTION_ID,
    "INCREASE_HOVER_VERBOSITY_ACTION_ID",
    ()=>INCREASE_HOVER_VERBOSITY_ACTION_ID,
    "INCREASE_HOVER_VERBOSITY_ACTION_LABEL",
    ()=>INCREASE_HOVER_VERBOSITY_ACTION_LABEL,
    "PAGE_DOWN_HOVER_ACTION_ID",
    ()=>PAGE_DOWN_HOVER_ACTION_ID,
    "PAGE_UP_HOVER_ACTION_ID",
    ()=>PAGE_UP_HOVER_ACTION_ID,
    "SCROLL_DOWN_HOVER_ACTION_ID",
    ()=>SCROLL_DOWN_HOVER_ACTION_ID,
    "SCROLL_LEFT_HOVER_ACTION_ID",
    ()=>SCROLL_LEFT_HOVER_ACTION_ID,
    "SCROLL_RIGHT_HOVER_ACTION_ID",
    ()=>SCROLL_RIGHT_HOVER_ACTION_ID,
    "SCROLL_UP_HOVER_ACTION_ID",
    ()=>SCROLL_UP_HOVER_ACTION_ID,
    "SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID",
    ()=>SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID,
    "SHOW_OR_FOCUS_HOVER_ACTION_ID",
    ()=>SHOW_OR_FOCUS_HOVER_ACTION_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
const SHOW_OR_FOCUS_HOVER_ACTION_ID = 'editor.action.showHover';
const SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID = 'editor.action.showDefinitionPreviewHover';
const HIDE_HOVER_ACTION_ID = 'editor.action.hideHover';
const SCROLL_UP_HOVER_ACTION_ID = 'editor.action.scrollUpHover';
const SCROLL_DOWN_HOVER_ACTION_ID = 'editor.action.scrollDownHover';
const SCROLL_LEFT_HOVER_ACTION_ID = 'editor.action.scrollLeftHover';
const SCROLL_RIGHT_HOVER_ACTION_ID = 'editor.action.scrollRightHover';
const PAGE_UP_HOVER_ACTION_ID = 'editor.action.pageUpHover';
const PAGE_DOWN_HOVER_ACTION_ID = 'editor.action.pageDownHover';
const GO_TO_TOP_HOVER_ACTION_ID = 'editor.action.goToTopHover';
const GO_TO_BOTTOM_HOVER_ACTION_ID = 'editor.action.goToBottomHover';
const INCREASE_HOVER_VERBOSITY_ACTION_ID = 'editor.action.increaseHoverVerbosityLevel';
const INCREASE_HOVER_VERBOSITY_ACTION_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1097, "Increase Hover Verbosity Level");
const DECREASE_HOVER_VERBOSITY_ACTION_ID = 'editor.action.decreaseHoverVerbosityLevel';
const DECREASE_HOVER_VERBOSITY_ACTION_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1098, "Decrease Hover Verbosity Level"); //# sourceMappingURL=hoverActionIds.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "isMousePositionWithinElement",
    ()=>isMousePositionWithinElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
function isMousePositionWithinElement(element, posx, posy) {
    const elementRect = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](element);
    if (posx < elementRect.left || posx > elementRect.left + elementRect.width || posy < elementRect.top || posy > elementRect.top + elementRect.height) {
        return false;
    }
    return true;
} //# sourceMappingURL=hoverUtils.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverOperation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "HoverOperation",
    ()=>HoverOperation,
    "HoverResult",
    ()=>HoverResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
class HoverResult {
    constructor(value, isComplete, hasLoadingMessage, options){
        this.value = value;
        this.isComplete = isComplete;
        this.hasLoadingMessage = hasLoadingMessage;
        this.options = options;
    }
}
class HoverOperation extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    dispose() {
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        this._options = undefined;
        super.dispose();
    }
    get _hoverTime() {
        return this._editor.getOption(69 /* EditorOption.hover */ ).delay;
    }
    get _firstWaitTime() {
        return this._hoverTime / 2;
    }
    get _secondWaitTime() {
        return this._hoverTime - this._firstWaitTime;
    }
    get _loadingMessageTime() {
        return 3 * this._hoverTime;
    }
    _setState(state, options) {
        this._options = options;
        this._state = state;
        this._fireResult(options);
    }
    _triggerAsyncComputation(options) {
        this._setState(2 /* HoverOperationState.SecondWait */ , options);
        this._syncComputationScheduler.schedule(options, this._secondWaitTime);
        if (this._computer.computeAsync) {
            this._asyncIterableDone = false;
            this._asyncIterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelableAsyncIterableProducer"])((token)=>this._computer.computeAsync(options, token));
            (async ()=>{
                try {
                    for await (const item of this._asyncIterable){
                        if (item) {
                            this._result.push(item);
                            this._fireResult(options);
                        }
                    }
                    this._asyncIterableDone = true;
                    if (this._state === 3 /* HoverOperationState.WaitingForAsync */  || this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */ ) {
                        this._setState(0 /* HoverOperationState.Idle */ , options);
                    }
                } catch (e) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(e);
                }
            })();
        } else {
            this._asyncIterableDone = true;
        }
    }
    _triggerSyncComputation(options) {
        if (this._computer.computeSync) {
            this._result = this._result.concat(this._computer.computeSync(options));
        }
        this._setState(this._asyncIterableDone ? 0 /* HoverOperationState.Idle */  : 3 /* HoverOperationState.WaitingForAsync */ , options);
    }
    _triggerLoadingMessage(options) {
        if (this._state === 3 /* HoverOperationState.WaitingForAsync */ ) {
            this._setState(4 /* HoverOperationState.WaitingForAsyncShowingLoading */ , options);
        }
    }
    _fireResult(options) {
        if (this._state === 1 /* HoverOperationState.FirstWait */  || this._state === 2 /* HoverOperationState.SecondWait */ ) {
            // Do not send out results before the hover time
            return;
        }
        const isComplete = this._state === 0 /* HoverOperationState.Idle */ ;
        const hasLoadingMessage = this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */ ;
        this._onResult.fire(new HoverResult(this._result.slice(0), isComplete, hasLoadingMessage, options));
    }
    start(mode, options) {
        if (mode === 0 /* HoverStartMode.Delayed */ ) {
            if (this._state === 0 /* HoverOperationState.Idle */ ) {
                this._setState(1 /* HoverOperationState.FirstWait */ , options);
                this._asyncComputationScheduler.schedule(options, this._firstWaitTime);
                this._loadingMessageScheduler.schedule(options, this._loadingMessageTime);
            }
        } else {
            switch(this._state){
                case 0 /* HoverOperationState.Idle */ :
                    this._triggerAsyncComputation(options);
                    this._syncComputationScheduler.cancel();
                    this._triggerSyncComputation(options);
                    break;
                case 2 /* HoverOperationState.SecondWait */ :
                    this._syncComputationScheduler.cancel();
                    this._triggerSyncComputation(options);
                    break;
            }
        }
    }
    cancel() {
        this._asyncComputationScheduler.cancel();
        this._syncComputationScheduler.cancel();
        this._loadingMessageScheduler.cancel();
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        this._result = [];
        this._options = undefined;
        this._state = 0 /* HoverOperationState.Idle */ ;
    }
    get options() {
        return this._options;
    }
    constructor(_editor, _computer){
        super();
        this._editor = _editor;
        this._computer = _computer;
        this._onResult = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onResult = this._onResult.event;
        this._asyncComputationScheduler = this._register(new Debouncer((options)=>this._triggerAsyncComputation(options), 0));
        this._syncComputationScheduler = this._register(new Debouncer((options)=>this._triggerSyncComputation(options), 0));
        this._loadingMessageScheduler = this._register(new Debouncer((options)=>this._triggerLoadingMessage(options), 0));
        this._state = 0 /* HoverOperationState.Idle */ ;
        this._asyncIterable = null;
        this._asyncIterableDone = false;
        this._result = [];
    }
}
class Debouncer extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    schedule(options, debounceTimeMs) {
        this._options = options;
        this._scheduler.schedule(debounceTimeMs);
    }
    cancel() {
        this._scheduler.cancel();
    }
    constructor(runner, debounceTimeMs){
        super();
        this._scheduler = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>runner(this._options), debounceTimeMs));
    }
} //# sourceMappingURL=hoverOperation.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/resizableContentWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ResizableContentWidget",
    ()=>ResizableContentWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$resizable$2f$resizable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/resizable/resizable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
;
;
;
const TOP_HEIGHT = 30;
const BOTTOM_HEIGHT = 24;
class ResizableContentWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get isResizing() {
        return this._isResizing;
    }
    getDomNode() {
        return this._resizableNode.domNode;
    }
    getPosition() {
        return this._contentPosition;
    }
    get position() {
        var _this__contentPosition;
        return ((_this__contentPosition = this._contentPosition) === null || _this__contentPosition === void 0 ? void 0 : _this__contentPosition.position) ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].lift(this._contentPosition.position) : undefined;
    }
    _availableVerticalSpaceAbove(position) {
        const editorDomNode = this._editor.getDomNode();
        const mouseBox = this._editor.getScrolledVisiblePosition(position);
        if (!editorDomNode || !mouseBox) {
            return;
        }
        const editorBox = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](editorDomNode);
        return editorBox.top + mouseBox.top - TOP_HEIGHT;
    }
    _availableVerticalSpaceBelow(position) {
        const editorDomNode = this._editor.getDomNode();
        const mouseBox = this._editor.getScrolledVisiblePosition(position);
        if (!editorDomNode || !mouseBox) {
            return;
        }
        const editorBox = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](editorDomNode);
        const bodyBox = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArea"](editorDomNode.ownerDocument.body);
        const mouseBottom = editorBox.top + mouseBox.top + mouseBox.height;
        return bodyBox.height - mouseBottom - BOTTOM_HEIGHT;
    }
    _findPositionPreference(widgetHeight, showAtPosition) {
        var _this__availableVerticalSpaceBelow;
        const maxHeightBelow = Math.min((_this__availableVerticalSpaceBelow = this._availableVerticalSpaceBelow(showAtPosition)) !== null && _this__availableVerticalSpaceBelow !== void 0 ? _this__availableVerticalSpaceBelow : Infinity, widgetHeight);
        var _this__availableVerticalSpaceAbove;
        const maxHeightAbove = Math.min((_this__availableVerticalSpaceAbove = this._availableVerticalSpaceAbove(showAtPosition)) !== null && _this__availableVerticalSpaceAbove !== void 0 ? _this__availableVerticalSpaceAbove : Infinity, widgetHeight);
        const maxHeight = Math.min(Math.max(maxHeightAbove, maxHeightBelow), widgetHeight);
        const height = Math.min(widgetHeight, maxHeight);
        let renderingAbove;
        if (this._editor.getOption(69 /* EditorOption.hover */ ).above) {
            renderingAbove = height <= maxHeightAbove ? 1 /* ContentWidgetPositionPreference.ABOVE */  : 2 /* ContentWidgetPositionPreference.BELOW */ ;
        } else {
            renderingAbove = height <= maxHeightBelow ? 2 /* ContentWidgetPositionPreference.BELOW */  : 1 /* ContentWidgetPositionPreference.ABOVE */ ;
        }
        if (renderingAbove === 1 /* ContentWidgetPositionPreference.ABOVE */ ) {
            this._resizableNode.enableSashes(true, true, false, false);
        } else {
            this._resizableNode.enableSashes(false, true, true, false);
        }
        return renderingAbove;
    }
    _resize(dimension) {
        this._resizableNode.layout(dimension.height, dimension.width);
    }
    constructor(_editor, minimumSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](10, 10)){
        super();
        this._editor = _editor;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this._resizableNode = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$resizable$2f$resizable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHTMLElement"]());
        this._contentPosition = null;
        this._isResizing = false;
        this._resizableNode.domNode.style.position = 'absolute';
        this._resizableNode.minSize = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"].lift(minimumSize);
        this._resizableNode.layout(minimumSize.height, minimumSize.width);
        this._resizableNode.enableSashes(true, true, true, true);
        this._register(this._resizableNode.onDidResize((e)=>{
            this._resize(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](e.dimension.width, e.dimension.height));
            if (e.done) {
                this._isResizing = false;
            }
        }));
        this._register(this._resizableNode.onDidWillResize(()=>{
            this._isResizing = true;
        }));
    }
} //# sourceMappingURL=resizableContentWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContentHoverWidget",
    ()=>ContentHoverWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$resizableContentWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/resizableContentWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var _ContentHoverWidget;
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
var ContentHoverWidget_1;
;
;
;
;
;
;
;
;
;
const HORIZONTAL_SCROLLING_BY = 30;
let ContentHoverWidget = (_ContentHoverWidget = class ContentHoverWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$resizableContentWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableContentWidget"] {
    get isVisibleFromKeyboard() {
        var _this__renderedHover;
        return ((_this__renderedHover = this._renderedHover) === null || _this__renderedHover === void 0 ? void 0 : _this__renderedHover.source) === 2 /* HoverStartSource.Keyboard */ ;
    }
    get isVisible() {
        var _this__hoverVisibleKey_get;
        return (_this__hoverVisibleKey_get = this._hoverVisibleKey.get()) !== null && _this__hoverVisibleKey_get !== void 0 ? _this__hoverVisibleKey_get : false;
    }
    get isFocused() {
        var _this__hoverFocusedKey_get;
        return (_this__hoverFocusedKey_get = this._hoverFocusedKey.get()) !== null && _this__hoverFocusedKey_get !== void 0 ? _this__hoverFocusedKey_get : false;
    }
    dispose() {
        var _this__renderedHover;
        super.dispose();
        (_this__renderedHover = this._renderedHover) === null || _this__renderedHover === void 0 ? void 0 : _this__renderedHover.dispose();
        this._editor.removeContentWidget(this);
    }
    getId() {
        return ContentHoverWidget_1.ID;
    }
    static _applyDimensions(container, width, height) {
        const transformedWidth = typeof width === 'number' ? "".concat(width, "px") : width;
        const transformedHeight = typeof height === 'number' ? "".concat(height, "px") : height;
        container.style.width = transformedWidth;
        container.style.height = transformedHeight;
    }
    _setContentsDomNodeDimensions(width, height) {
        const contentsDomNode = this._hover.contentsDomNode;
        return ContentHoverWidget_1._applyDimensions(contentsDomNode, width, height);
    }
    _setContainerDomNodeDimensions(width, height) {
        const containerDomNode = this._hover.containerDomNode;
        return ContentHoverWidget_1._applyDimensions(containerDomNode, width, height);
    }
    _setScrollableElementDimensions(width, height) {
        const scrollbarDomElement = this._hover.scrollbar.getDomNode();
        return ContentHoverWidget_1._applyDimensions(scrollbarDomElement, width, height);
    }
    _setHoverWidgetDimensions(width, height) {
        this._setContainerDomNodeDimensions(width, height);
        this._setScrollableElementDimensions(width, height);
        this._setContentsDomNodeDimensions(width, height);
        this._layoutContentWidget();
    }
    static _applyMaxDimensions(container, width, height) {
        const transformedWidth = typeof width === 'number' ? "".concat(width, "px") : width;
        const transformedHeight = typeof height === 'number' ? "".concat(height, "px") : height;
        container.style.maxWidth = transformedWidth;
        container.style.maxHeight = transformedHeight;
    }
    _setHoverWidgetMaxDimensions(width, height) {
        ContentHoverWidget_1._applyMaxDimensions(this._hover.contentsDomNode, width, height);
        ContentHoverWidget_1._applyMaxDimensions(this._hover.scrollbar.getDomNode(), width, height);
        ContentHoverWidget_1._applyMaxDimensions(this._hover.containerDomNode, width, height);
        this._hover.containerDomNode.style.setProperty('--vscode-hover-maxWidth', typeof width === 'number' ? "".concat(width, "px") : width);
        this._layoutContentWidget();
    }
    _setAdjustedHoverWidgetDimensions(size) {
        this._setHoverWidgetMaxDimensions('none', 'none');
        this._setHoverWidgetDimensions(size.width, size.height);
    }
    _updateResizableNodeMaxDimensions() {
        var _this__findMaximumRenderingWidth;
        const maxRenderingWidth = (_this__findMaximumRenderingWidth = this._findMaximumRenderingWidth()) !== null && _this__findMaximumRenderingWidth !== void 0 ? _this__findMaximumRenderingWidth : Infinity;
        var _this__findMaximumRenderingHeight;
        const maxRenderingHeight = (_this__findMaximumRenderingHeight = this._findMaximumRenderingHeight()) !== null && _this__findMaximumRenderingHeight !== void 0 ? _this__findMaximumRenderingHeight : Infinity;
        this._resizableNode.maxSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](maxRenderingWidth, maxRenderingHeight);
        this._setHoverWidgetMaxDimensions(maxRenderingWidth, maxRenderingHeight);
    }
    _resize(size) {
        ContentHoverWidget_1._lastDimensions = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](size.width, size.height);
        this._setAdjustedHoverWidgetDimensions(size);
        this._resizableNode.layout(size.height, size.width);
        this._updateResizableNodeMaxDimensions();
        this._hover.scrollbar.scanDomNode();
        this._editor.layoutContentWidget(this);
        this._onDidResize.fire();
    }
    _findAvailableSpaceVertically() {
        var _this__renderedHover;
        const position = (_this__renderedHover = this._renderedHover) === null || _this__renderedHover === void 0 ? void 0 : _this__renderedHover.showAtPosition;
        if (!position) {
            return;
        }
        return this._positionPreference === 1 /* ContentWidgetPositionPreference.ABOVE */  ? this._availableVerticalSpaceAbove(position) : this._availableVerticalSpaceBelow(position);
    }
    _findMaximumRenderingHeight() {
        const availableSpace = this._findAvailableSpaceVertically();
        if (!availableSpace) {
            return;
        }
        const children = this._hover.contentsDomNode.children;
        let maximumHeight = children.length - 1;
        Array.from(this._hover.contentsDomNode.children).forEach((hoverPart)=>{
            maximumHeight += hoverPart.clientHeight;
        });
        return Math.min(availableSpace, maximumHeight);
    }
    _isHoverTextOverflowing() {
        // To find out if the text is overflowing, we will disable wrapping, check the widths, and then re-enable wrapping
        this._hover.containerDomNode.style.setProperty('--vscode-hover-whiteSpace', 'nowrap');
        this._hover.containerDomNode.style.setProperty('--vscode-hover-sourceWhiteSpace', 'nowrap');
        const overflowing = Array.from(this._hover.contentsDomNode.children).some((hoverElement)=>{
            return hoverElement.scrollWidth > hoverElement.clientWidth;
        });
        this._hover.containerDomNode.style.removeProperty('--vscode-hover-whiteSpace');
        this._hover.containerDomNode.style.removeProperty('--vscode-hover-sourceWhiteSpace');
        return overflowing;
    }
    _findMaximumRenderingWidth() {
        if (!this._editor || !this._editor.hasModel()) {
            return;
        }
        const overflowing = this._isHoverTextOverflowing();
        const initialWidth = typeof this._contentWidth === 'undefined' ? 0 : this._contentWidth;
        if (overflowing || this._hover.containerDomNode.clientWidth < initialWidth) {
            const bodyBoxWidth = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArea"](this._hover.containerDomNode.ownerDocument.body).width;
            const horizontalPadding = 14;
            return bodyBoxWidth - horizontalPadding;
        } else {
            return this._hover.containerDomNode.clientWidth;
        }
    }
    isMouseGettingCloser(posx, posy) {
        if (!this._renderedHover) {
            return false;
        }
        if (this._renderedHover.initialMousePosX === undefined || this._renderedHover.initialMousePosY === undefined) {
            this._renderedHover.initialMousePosX = posx;
            this._renderedHover.initialMousePosY = posy;
            return false;
        }
        const widgetRect = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.getDomNode());
        if (this._renderedHover.closestMouseDistance === undefined) {
            this._renderedHover.closestMouseDistance = computeDistanceFromPointToRectangle(this._renderedHover.initialMousePosX, this._renderedHover.initialMousePosY, widgetRect.left, widgetRect.top, widgetRect.width, widgetRect.height);
        }
        const distance = computeDistanceFromPointToRectangle(posx, posy, widgetRect.left, widgetRect.top, widgetRect.width, widgetRect.height);
        if (distance > this._renderedHover.closestMouseDistance + 4 /* tolerance of 4 pixels */ ) {
            // The mouse is getting farther away
            return false;
        }
        this._renderedHover.closestMouseDistance = Math.min(this._renderedHover.closestMouseDistance, distance);
        return true;
    }
    _setRenderedHover(renderedHover) {
        var _this__renderedHover;
        (_this__renderedHover = this._renderedHover) === null || _this__renderedHover === void 0 ? void 0 : _this__renderedHover.dispose();
        this._renderedHover = renderedHover;
        this._hoverVisibleKey.set(!!renderedHover);
        this._hover.containerDomNode.classList.toggle('hidden', !renderedHover);
    }
    _updateFont() {
        const { fontSize, lineHeight } = this._editor.getOption(59 /* EditorOption.fontInfo */ );
        const contentsDomNode = this._hover.contentsDomNode;
        contentsDomNode.style.fontSize = "".concat(fontSize, "px");
        contentsDomNode.style.lineHeight = "".concat(lineHeight / fontSize);
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach((node)=>this._editor.applyFontInfo(node));
    }
    _updateContent(node) {
        const contentsDomNode = this._hover.contentsDomNode;
        contentsDomNode.style.paddingBottom = '';
        contentsDomNode.textContent = '';
        contentsDomNode.appendChild(node);
    }
    _layoutContentWidget() {
        this._editor.layoutContentWidget(this);
        this._hover.onContentsChanged();
    }
    _updateMaxDimensions() {
        const height = Math.max(this._editor.getLayoutInfo().height / 4, 250, ContentHoverWidget_1._lastDimensions.height);
        const width = Math.max(this._editor.getLayoutInfo().width * 0.66, 750, ContentHoverWidget_1._lastDimensions.width);
        this._resizableNode.maxSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](width, height);
        this._setHoverWidgetMaxDimensions(width, height);
    }
    _render(renderedHover) {
        this._setRenderedHover(renderedHover);
        this._updateFont();
        this._updateContent(renderedHover.domNode);
        this.handleContentsChanged();
        // Simply force a synchronous render on the editor
        // such that the widget does not really render with left = '0px'
        this._editor.render();
    }
    getPosition() {
        if (!this._renderedHover) {
            return null;
        }
        var _this__positionPreference;
        return {
            position: this._renderedHover.showAtPosition,
            secondaryPosition: this._renderedHover.showAtSecondaryPosition,
            positionAffinity: this._renderedHover.shouldAppearBeforeContent ? 3 /* PositionAffinity.LeftOfInjectedText */  : undefined,
            preference: [
                (_this__positionPreference = this._positionPreference) !== null && _this__positionPreference !== void 0 ? _this__positionPreference : 1 /* ContentWidgetPositionPreference.ABOVE */ 
            ]
        };
    }
    show(renderedHover) {
        var _this__keybindingService_lookupKeybinding;
        if (!this._editor || !this._editor.hasModel()) {
            return;
        }
        this._render(renderedHover);
        const widgetHeight = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this._hover.containerDomNode);
        const widgetPosition = renderedHover.showAtPosition;
        var _this__findPositionPreference;
        this._positionPreference = (_this__findPositionPreference = this._findPositionPreference(widgetHeight, widgetPosition)) !== null && _this__findPositionPreference !== void 0 ? _this__findPositionPreference : 1 /* ContentWidgetPositionPreference.ABOVE */ ;
        // See https://github.com/microsoft/vscode/issues/140339
        // TODO: Doing a second layout of the hover after force rendering the editor
        this.handleContentsChanged();
        if (renderedHover.shouldFocus) {
            this._hover.containerDomNode.focus();
        }
        this._onDidResize.fire();
        // The aria label overrides the label, so if we add to it, add the contents of the hover
        const hoverFocused = this._hover.containerDomNode.ownerDocument.activeElement === this._hover.containerDomNode;
        var _this__keybindingService_lookupKeybinding_getAriaLabel;
        const accessibleViewHint = hoverFocused && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoverAccessibleViewHint"])(this._configurationService.getValue('accessibility.verbosity.hover') === true && this._accessibilityService.isScreenReaderOptimized(), (_this__keybindingService_lookupKeybinding_getAriaLabel = (_this__keybindingService_lookupKeybinding = this._keybindingService.lookupKeybinding('editor.action.accessibleView')) === null || _this__keybindingService_lookupKeybinding === void 0 ? void 0 : _this__keybindingService_lookupKeybinding.getAriaLabel()) !== null && _this__keybindingService_lookupKeybinding_getAriaLabel !== void 0 ? _this__keybindingService_lookupKeybinding_getAriaLabel : '');
        if (accessibleViewHint) {
            this._hover.contentsDomNode.ariaLabel = this._hover.contentsDomNode.textContent + ', ' + accessibleViewHint;
        }
    }
    hide() {
        if (!this._renderedHover) {
            return;
        }
        const hoverStoleFocus = this._renderedHover.shouldFocus || this._hoverFocusedKey.get();
        this._setRenderedHover(undefined);
        this._resizableNode.maxSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](Infinity, Infinity);
        this._resizableNode.clearSashHoverState();
        this._hoverFocusedKey.set(false);
        this._editor.layoutContentWidget(this);
        if (hoverStoleFocus) {
            this._editor.focus();
        }
    }
    _removeConstraintsRenderNormally() {
        // Added because otherwise the initial size of the hover content is smaller than should be
        const layoutInfo = this._editor.getLayoutInfo();
        this._resizableNode.layout(layoutInfo.height, layoutInfo.width);
        this._setHoverWidgetDimensions('auto', 'auto');
        this._updateMaxDimensions();
    }
    setMinimumDimensions(dimensions) {
        // We combine the new minimum dimensions with the previous ones
        this._minimumSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](Math.max(this._minimumSize.width, dimensions.width), Math.max(this._minimumSize.height, dimensions.height));
        this._updateMinimumWidth();
    }
    _updateMinimumWidth() {
        const width = typeof this._contentWidth === 'undefined' ? this._minimumSize.width : Math.min(this._contentWidth, this._minimumSize.width);
        // We want to avoid that the hover is artificially large, so we use the content width as minimum width
        this._resizableNode.minSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](width, this._minimumSize.height);
    }
    handleContentsChanged() {
        var _this__renderedHover;
        this._removeConstraintsRenderNormally();
        const contentsDomNode = this._hover.contentsDomNode;
        let height = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](contentsDomNode);
        let width = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](contentsDomNode) + 2;
        this._resizableNode.layout(height, width);
        this._setHoverWidgetDimensions(width, height);
        height = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](contentsDomNode);
        width = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](contentsDomNode);
        this._contentWidth = width;
        this._updateMinimumWidth();
        this._resizableNode.layout(height, width);
        if ((_this__renderedHover = this._renderedHover) === null || _this__renderedHover === void 0 ? void 0 : _this__renderedHover.showAtPosition) {
            const widgetHeight = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this._hover.containerDomNode);
            this._positionPreference = this._findPositionPreference(widgetHeight, this._renderedHover.showAtPosition);
        }
        this._layoutContentWidget();
        this._onContentsChanged.fire();
    }
    focus() {
        this._hover.containerDomNode.focus();
    }
    scrollUp() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const fontInfo = this._editor.getOption(59 /* EditorOption.fontInfo */ );
        this._hover.scrollbar.setScrollPosition({
            scrollTop: scrollTop - fontInfo.lineHeight
        });
    }
    scrollDown() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const fontInfo = this._editor.getOption(59 /* EditorOption.fontInfo */ );
        this._hover.scrollbar.setScrollPosition({
            scrollTop: scrollTop + fontInfo.lineHeight
        });
    }
    scrollLeft() {
        const scrollLeft = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: scrollLeft - HORIZONTAL_SCROLLING_BY
        });
    }
    scrollRight() {
        const scrollLeft = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: scrollLeft + HORIZONTAL_SCROLLING_BY
        });
    }
    pageUp() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const scrollHeight = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: scrollTop - scrollHeight
        });
    }
    pageDown() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const scrollHeight = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: scrollTop + scrollHeight
        });
    }
    goToTop() {
        this._hover.scrollbar.setScrollPosition({
            scrollTop: 0
        });
    }
    goToBottom() {
        this._hover.scrollbar.setScrollPosition({
            scrollTop: this._hover.scrollbar.getScrollDimensions().scrollHeight
        });
    }
    constructor(editor, contextKeyService, _configurationService, _accessibilityService, _keybindingService){
        const minimumHeight = editor.getOption(75 /* EditorOption.lineHeight */ ) + 8;
        const minimumWidth = 150;
        const minimumSize = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](minimumWidth, minimumHeight);
        super(editor, minimumSize);
        this._configurationService = _configurationService;
        this._accessibilityService = _accessibilityService;
        this._keybindingService = _keybindingService;
        this._hover = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverWidget"](true));
        this._onDidResize = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidResize = this._onDidResize.event;
        this._onDidScroll = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidScroll = this._onDidScroll.event;
        this._onContentsChanged = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onContentsChanged = this._onContentsChanged.event;
        this._minimumSize = minimumSize;
        this._hoverVisibleKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverVisible.bindTo(contextKeyService);
        this._hoverFocusedKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused.bindTo(contextKeyService);
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this._resizableNode.domNode, this._hover.containerDomNode);
        this._resizableNode.domNode.style.zIndex = '50';
        this._resizableNode.domNode.className = 'monaco-resizable-hover';
        this._register(this._editor.onDidLayoutChange(()=>{
            if (this.isVisible) {
                this._updateMaxDimensions();
            }
        }));
        this._register(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(59 /* EditorOption.fontInfo */ )) {
                this._updateFont();
            }
        }));
        const focusTracker = this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFocus"](this._resizableNode.domNode));
        this._register(focusTracker.onDidFocus(()=>{
            this._hoverFocusedKey.set(true);
        }));
        this._register(focusTracker.onDidBlur(()=>{
            this._hoverFocusedKey.set(false);
        }));
        this._register(this._hover.scrollbar.onScroll((e)=>{
            this._onDidScroll.fire(e);
        }));
        this._setRenderedHover(undefined);
        this._editor.addContentWidget(this);
    }
}, ContentHoverWidget_1 = _ContentHoverWidget, _ContentHoverWidget.ID = 'editor.contrib.resizableContentHoverWidget', _ContentHoverWidget._lastDimensions = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](0, 0), _ContentHoverWidget);
ContentHoverWidget = ContentHoverWidget_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IAccessibilityService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], ContentHoverWidget);
;
function computeDistanceFromPointToRectangle(pointX, pointY, left, top, width, height) {
    const x = left + width / 2; // x center of rectangle
    const y = top + height / 2; // y center of rectangle
    const dx = Math.max(Math.abs(pointX - x) - width / 2, 0);
    const dy = Math.max(Math.abs(pointY - y) - height / 2, 0);
    return Math.sqrt(dx * dx + dy * dy);
} //# sourceMappingURL=contentHoverWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverComputer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContentHoverComputer",
    ()=>ContentHoverComputer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
;
;
class ContentHoverComputer {
    static _getLineDecorations(editor, anchor) {
        if (anchor.type !== 1 /* HoverAnchorType.Range */  && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        if (lineNumber > model.getLineCount()) {
            // invalid line
            return [];
        }
        const maxColumn = model.getLineMaxColumn(lineNumber);
        return editor.getLineDecorations(lineNumber).filter((d)=>{
            if (d.options.isWholeLine) {
                return true;
            }
            const startColumn = d.range.startLineNumber === lineNumber ? d.range.startColumn : 1;
            const endColumn = d.range.endLineNumber === lineNumber ? d.range.endColumn : maxColumn;
            if (d.options.showIfCollapsed) {
                // Relax check around `showIfCollapsed` decorations to also include +/- 1 character
                if (startColumn > anchor.range.startColumn + 1 || anchor.range.endColumn - 1 > endColumn) {
                    return false;
                }
            } else {
                if (startColumn > anchor.range.startColumn || anchor.range.endColumn > endColumn) {
                    return false;
                }
            }
            return true;
        });
    }
    computeAsync(options, token) {
        const anchor = options.anchor;
        if (!this._editor.hasModel() || !anchor) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].EMPTY;
        }
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, anchor);
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].merge(this._participants.map((participant)=>{
            if (!participant.computeAsync) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].EMPTY;
            }
            return participant.computeAsync(anchor, lineDecorations, options.source, token);
        }));
    }
    computeSync(options) {
        if (!this._editor.hasModel()) {
            return [];
        }
        const anchor = options.anchor;
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, anchor);
        let result = [];
        for (const participant of this._participants){
            result = result.concat(participant.computeSync(anchor, lineDecorations, options.source));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coalesce"])(result);
    }
    constructor(_editor, _participants){
        this._editor = _editor;
        this._participants = _participants;
    }
} //# sourceMappingURL=contentHoverComputer.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContentHoverResult",
    ()=>ContentHoverResult,
    "FilteredContentHoverResult",
    ()=>FilteredContentHoverResult
]);
class ContentHoverResult {
    filter(anchor) {
        const filteredHoverParts = this.hoverParts.filter((m)=>m.isValidForHoverAnchor(anchor));
        if (filteredHoverParts.length === this.hoverParts.length) {
            return this;
        }
        return new FilteredContentHoverResult(this, filteredHoverParts, this.isComplete, this.options);
    }
    constructor(hoverParts, isComplete, options){
        this.hoverParts = hoverParts;
        this.isComplete = isComplete;
        this.options = options;
    }
}
class FilteredContentHoverResult extends ContentHoverResult {
    filter(anchor) {
        return this.original.filter(anchor);
    }
    constructor(original, messages, isComplete, options){
        super(messages, isComplete, options);
        this.original = original;
    }
} //# sourceMappingURL=contentHoverTypes.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverStatusBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorHoverStatusBar",
    ()=>EditorHoverStatusBar
]);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
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
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
let EditorHoverStatusBar = class EditorHoverStatusBar extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get hasContent() {
        return this._hasContent;
    }
    addAction(actionOptions) {
        const keybinding = this._keybindingService.lookupKeybinding(actionOptions.commandId);
        const keybindingLabel = keybinding ? keybinding.getLabel() : null;
        this._hasContent = true;
        const action = this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverAction"].render(this.actionsElement, actionOptions, keybindingLabel));
        this._register(this._hoverService.setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'), action.actionContainer, action.actionRenderedLabel));
        this.actions.push(action);
        return action;
    }
    append(element) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.actionsElement, element);
        this._hasContent = true;
        return result;
    }
    constructor(_keybindingService, _hoverService){
        super();
        this._keybindingService = _keybindingService;
        this._hoverService = _hoverService;
        this.actions = [];
        this._hasContent = false;
        this.hoverElement = $('div.hover-row.status-bar');
        this.hoverElement.tabIndex = 0;
        this.actionsElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.hoverElement, $('div.actions'));
    }
};
EditorHoverStatusBar = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"])
], EditorHoverStatusBar);
;
 //# sourceMappingURL=contentHoverStatusBar.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/getHover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "HoverProviderResult",
    ()=>HoverProviderResult,
    "getHoverProviderResultsAsAsyncIterable",
    ()=>getHoverProviderResultsAsAsyncIterable,
    "getHoversPromise",
    ()=>getHoversPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
;
;
;
;
;
class HoverProviderResult {
    constructor(provider, hover, ordinal){
        this.provider = provider;
        this.hover = hover;
        this.ordinal = ordinal;
    }
}
/**
 * Does not throw or return a rejected promise (returns undefined instead).
 */ async function executeProvider(provider, ordinal, model, position, token) {
    const result = await Promise.resolve(provider.provideHover(model, position, token)).catch(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"]);
    if (!result || !isValid(result)) {
        return undefined;
    }
    return new HoverProviderResult(provider, result, ordinal);
}
function getHoverProviderResultsAsAsyncIterable(registry, model, position, token) {
    let recursive = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const providers = registry.ordered(model, recursive);
    const promises = providers.map((provider, index)=>executeProvider(provider, index, model, position, token));
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].fromPromisesResolveOrder(promises).coalesce();
}
async function getHoversPromise(registry, model, position, token) {
    let recursive = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const out = [];
    for await (const item of getHoverProviderResultsAsAsyncIterable(registry, model, position, token, recursive)){
        out.push(item.hover);
    }
    return out;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeHoverProvider', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    return getHoversPromise(languageFeaturesService.hoverProvider, model, position, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeHoverProvider_recursive', (accessor, model, position)=>{
    const languageFeaturesService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    return getHoversPromise(languageFeaturesService.hoverProvider, model, position, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None, true);
});
function isValid(result) {
    const hasRange = typeof result.range !== 'undefined';
    const hasHtmlContent = typeof result.contents !== 'undefined' && result.contents && result.contents.length > 0;
    return hasRange && hasHtmlContent;
} //# sourceMappingURL=getHover.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MarkdownHover",
    ()=>MarkdownHover,
    "MarkdownHoverParticipant",
    ()=>MarkdownHoverParticipant,
    "labelForHoverVerbosityAction",
    ()=>labelForHoverVerbosityAction,
    "renderMarkdownHovers",
    ()=>renderMarkdownHovers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActionIds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$getHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/getHover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
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
;
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
const increaseHoverVerbosityIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerIcon"])('hover-increase-verbosity', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].add, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1123, 'Icon for increaseing hover verbosity.'));
const decreaseHoverVerbosityIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$iconRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerIcon"])('hover-decrease-verbosity', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].remove, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1124, 'Icon for decreasing hover verbosity.'));
class MarkdownHover {
    isValidForHoverAnchor(anchor) {
        return anchor.type === 1 /* HoverAnchorType.Range */  && this.range.startColumn <= anchor.range.startColumn && this.range.endColumn >= anchor.range.endColumn;
    }
    constructor(owner, range, contents, isBeforeContent, ordinal, source = undefined){
        this.owner = owner;
        this.range = range;
        this.contents = contents;
        this.isBeforeContent = isBeforeContent;
        this.ordinal = ordinal;
        this.source = source;
    }
}
class HoverSource {
    supportsVerbosityAction(hoverVerbosityAction) {
        switch(hoverVerbosityAction){
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase:
                var _this_hover_canIncreaseVerbosity;
                return (_this_hover_canIncreaseVerbosity = this.hover.canIncreaseVerbosity) !== null && _this_hover_canIncreaseVerbosity !== void 0 ? _this_hover_canIncreaseVerbosity : false;
            case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Decrease:
                var _this_hover_canDecreaseVerbosity;
                return (_this_hover_canDecreaseVerbosity = this.hover.canDecreaseVerbosity) !== null && _this_hover_canDecreaseVerbosity !== void 0 ? _this_hover_canDecreaseVerbosity : false;
        }
    }
    constructor(hover, hoverProvider, hoverPosition){
        this.hover = hover;
        this.hoverProvider = hoverProvider;
        this.hoverPosition = hoverPosition;
    }
}
let MarkdownHoverParticipant = class MarkdownHoverParticipant {
    createLoadingMessage(anchor) {
        return new MarkdownHover(this, anchor.range, [
            new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1125, "Loading..."))
        ], false, 2000);
    }
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */ ) {
            return [];
        }
        const model = this._editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        let index = 1000;
        const lineLength = model.getLineLength(lineNumber);
        const languageId = model.getLanguageIdAtPosition(anchor.range.startLineNumber, anchor.range.startColumn);
        const stopRenderingLineAfter = this._editor.getOption(133 /* EditorOption.stopRenderingLineAfter */ );
        const maxTokenizationLineLength = this._configurationService.getValue('editor.maxTokenizationLineLength', {
            overrideIdentifier: languageId
        });
        let stopRenderingMessage = false;
        if (stopRenderingLineAfter >= 0 && lineLength > stopRenderingLineAfter && anchor.range.startColumn >= stopRenderingLineAfter) {
            stopRenderingMessage = true;
            result.push(new MarkdownHover(this, anchor.range, [
                {
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1126, "Rendering paused for long line for performance reasons. This can be configured via `editor.stopRenderingLineAfter`.")
                }
            ], false, index++));
        }
        if (!stopRenderingMessage && typeof maxTokenizationLineLength === 'number' && lineLength >= maxTokenizationLineLength) {
            result.push(new MarkdownHover(this, anchor.range, [
                {
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1127, "Tokenization is skipped for long lines for performance reasons. This can be configured via `editor.maxTokenizationLineLength`.")
                }
            ], false, index++));
        }
        let isBeforeContent = false;
        for (const d of lineDecorations){
            const startColumn = d.range.startLineNumber === lineNumber ? d.range.startColumn : 1;
            const endColumn = d.range.endLineNumber === lineNumber ? d.range.endColumn : maxColumn;
            const hoverMessage = d.options.hoverMessage;
            if (!hoverMessage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyMarkdownString"])(hoverMessage)) {
                continue;
            }
            if (d.options.beforeContentClassName) {
                isBeforeContent = true;
            }
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkdownHover(this, range, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asArray"])(hoverMessage), isBeforeContent, index++));
        }
        return result;
    }
    computeAsync(anchor, lineDecorations, source, token) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */ ) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].EMPTY;
        }
        const model = this._editor.getModel();
        const hoverProviderRegistry = this._languageFeaturesService.hoverProvider;
        if (!hoverProviderRegistry.has(model)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncIterableProducer"].EMPTY;
        }
        return this._getMarkdownHovers(hoverProviderRegistry, model, anchor, token);
    }
    async *_getMarkdownHovers(hoverProviderRegistry, model, anchor, token) {
        const position = anchor.range.getStartPosition();
        const hoverProviderResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$getHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoverProviderResultsAsAsyncIterable"])(hoverProviderRegistry, model, position, token);
        for await (const item of hoverProviderResults){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyMarkdownString"])(item.hover.contents)) {
                const range = item.hover.range ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].lift(item.hover.range) : anchor.range;
                const hoverSource = new HoverSource(item.hover, item.provider, position);
                yield new MarkdownHover(this, range, item.hover.contents, false, item.ordinal, hoverSource);
            }
        }
    }
    renderHoverParts(context, hoverParts) {
        this._renderedHoverParts = new MarkdownRenderedHoverParts(hoverParts, context.fragment, this, this._editor, this._languageService, this._openerService, this._commandService, this._keybindingService, this._hoverService, this._configurationService, context.onContentsChanged);
        return this._renderedHoverParts;
    }
    handleScroll(e) {
        var _this__renderedHoverParts;
        (_this__renderedHoverParts = this._renderedHoverParts) === null || _this__renderedHoverParts === void 0 ? void 0 : _this__renderedHoverParts.handleScroll(e);
    }
    updateMarkdownHoverVerbosityLevel(action, index) {
        var _this__renderedHoverParts;
        return Promise.resolve((_this__renderedHoverParts = this._renderedHoverParts) === null || _this__renderedHoverParts === void 0 ? void 0 : _this__renderedHoverParts.updateMarkdownHoverPartVerbosityLevel(action, index));
    }
    constructor(_editor, _languageService, _openerService, _configurationService, _languageFeaturesService, _keybindingService, _hoverService, _commandService){
        this._editor = _editor;
        this._languageService = _languageService;
        this._openerService = _openerService;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._keybindingService = _keybindingService;
        this._hoverService = _hoverService;
        this._commandService = _commandService;
        this.hoverOrdinal = 3;
    }
};
MarkdownHoverParticipant = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOpenerService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"])
], MarkdownHoverParticipant);
;
class RenderedMarkdownHoverPart {
    dispose() {
        this.disposables.dispose();
    }
    constructor(hoverPart, hoverElement, disposables, actionsContainer){
        this.hoverPart = hoverPart;
        this.hoverElement = hoverElement;
        this.disposables = disposables;
        this.actionsContainer = actionsContainer;
    }
}
class MarkdownRenderedHoverParts {
    _renderHoverParts(hoverParts, hoverPartsContainer, onFinishedRendering) {
        hoverParts.sort((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareBy"])((hover)=>hover.ordinal, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberComparator"]));
        return hoverParts.map((hoverPart)=>{
            const renderedHoverPart = this._renderHoverPart(hoverPart, onFinishedRendering);
            hoverPartsContainer.appendChild(renderedHoverPart.hoverElement);
            return renderedHoverPart;
        });
    }
    _renderHoverPart(hoverPart, onFinishedRendering) {
        const renderedMarkdownPart = this._renderMarkdownHover(hoverPart, onFinishedRendering);
        const renderedMarkdownElement = renderedMarkdownPart.hoverElement;
        const hoverSource = hoverPart.source;
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        disposables.add(renderedMarkdownPart);
        if (!hoverSource) {
            return new RenderedMarkdownHoverPart(hoverPart, renderedMarkdownElement, disposables);
        }
        const canIncreaseVerbosity = hoverSource.supportsVerbosityAction(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase);
        const canDecreaseVerbosity = hoverSource.supportsVerbosityAction(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Decrease);
        if (!canIncreaseVerbosity && !canDecreaseVerbosity) {
            return new RenderedMarkdownHoverPart(hoverPart, renderedMarkdownElement, disposables);
        }
        const actionsContainer = $('div.verbosity-actions');
        renderedMarkdownElement.prepend(actionsContainer);
        const actionsContainerInner = $('div.verbosity-actions-inner');
        actionsContainer.append(actionsContainerInner);
        disposables.add(this._renderHoverExpansionAction(actionsContainerInner, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase, canIncreaseVerbosity));
        disposables.add(this._renderHoverExpansionAction(actionsContainerInner, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Decrease, canDecreaseVerbosity));
        return new RenderedMarkdownHoverPart(hoverPart, renderedMarkdownElement, disposables, actionsContainerInner);
    }
    _renderMarkdownHover(markdownHover, onFinishedRendering) {
        const renderedMarkdownHover = renderMarkdown(this._editor, markdownHover, this._languageService, this._openerService, onFinishedRendering);
        return renderedMarkdownHover;
    }
    _renderHoverExpansionAction(container, action, actionEnabled) {
        const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const isActionIncrease = action === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase;
        const actionElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asCSSSelector(isActionIncrease ? increaseHoverVerbosityIcon : decreaseHoverVerbosityIcon)));
        actionElement.tabIndex = 0;
        const hoverDelegate = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkbenchHoverDelegate"]('mouse', undefined, {
            target: container,
            position: {
                hoverPosition: 0 /* HoverPosition.LEFT */ 
            }
        }, this._configurationService, this._hoverService);
        store.add(this._hoverService.setupManagedHover(hoverDelegate, actionElement, labelForHoverVerbosityAction(this._keybindingService, action)));
        if (!actionEnabled) {
            actionElement.classList.add('disabled');
            return store;
        }
        actionElement.classList.add('enabled');
        const actionFunction = ()=>this._commandService.executeCommand(action === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCREASE_HOVER_VERBOSITY_ACTION_ID"] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECREASE_HOVER_VERBOSITY_ACTION_ID"], {
                focus: true
            });
        store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClickAction"](actionElement, actionFunction));
        store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyDownAction"](actionElement, actionFunction, [
            3 /* KeyCode.Enter */ ,
            10 /* KeyCode.Space */ 
        ]));
        return store;
    }
    handleScroll(e) {
        this.renderedHoverParts.forEach((renderedHoverPart)=>{
            const actionsContainerInner = renderedHoverPart.actionsContainer;
            if (!actionsContainerInner) {
                return;
            }
            const hoverElement = renderedHoverPart.hoverElement;
            const topOfHoverScrollPosition = e.scrollTop;
            const bottomOfHoverScrollPosition = topOfHoverScrollPosition + e.height;
            const topOfRenderedPart = hoverElement.offsetTop;
            const hoverElementHeight = hoverElement.clientHeight;
            const bottomOfRenderedPart = topOfRenderedPart + hoverElementHeight;
            const iconsHeight = 22;
            let top;
            if (bottomOfRenderedPart <= bottomOfHoverScrollPosition || topOfRenderedPart >= bottomOfHoverScrollPosition) {
                top = hoverElementHeight - iconsHeight;
            } else {
                top = bottomOfHoverScrollPosition - topOfRenderedPart - iconsHeight;
            }
            actionsContainerInner.style.top = "".concat(top, "px");
        });
    }
    async updateMarkdownHoverPartVerbosityLevel(action, index) {
        const model = this._editor.getModel();
        if (!model) {
            return undefined;
        }
        const hoverRenderedPart = this._getRenderedHoverPartAtIndex(index);
        const hoverSource = hoverRenderedPart === null || hoverRenderedPart === void 0 ? void 0 : hoverRenderedPart.hoverPart.source;
        if (!hoverRenderedPart || !(hoverSource === null || hoverSource === void 0 ? void 0 : hoverSource.supportsVerbosityAction(action))) {
            return undefined;
        }
        const newHover = await this._fetchHover(hoverSource, model, action);
        if (!newHover) {
            return undefined;
        }
        const newHoverSource = new HoverSource(newHover, hoverSource.hoverProvider, hoverSource.hoverPosition);
        const initialHoverPart = hoverRenderedPart.hoverPart;
        const newHoverPart = new MarkdownHover(this._hoverParticipant, initialHoverPart.range, newHover.contents, initialHoverPart.isBeforeContent, initialHoverPart.ordinal, newHoverSource);
        const newHoverRenderedPart = this._updateRenderedHoverPart(index, newHoverPart);
        if (!newHoverRenderedPart) {
            return undefined;
        }
        return {
            hoverPart: newHoverPart,
            hoverElement: newHoverRenderedPart.hoverElement
        };
    }
    async _fetchHover(hoverSource, model, action) {
        let verbosityDelta = action === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase ? 1 : -1;
        const provider = hoverSource.hoverProvider;
        const ongoingHoverOperation = this._ongoingHoverOperations.get(provider);
        if (ongoingHoverOperation) {
            ongoingHoverOperation.tokenSource.cancel();
            verbosityDelta += ongoingHoverOperation.verbosityDelta;
        }
        const tokenSource = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        this._ongoingHoverOperations.set(provider, {
            verbosityDelta,
            tokenSource
        });
        const context = {
            verbosityRequest: {
                verbosityDelta,
                previousHover: hoverSource.hover
            }
        };
        let hover;
        try {
            hover = await Promise.resolve(provider.provideHover(model, hoverSource.hoverPosition, tokenSource.token, context));
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(e);
        }
        tokenSource.dispose();
        this._ongoingHoverOperations.delete(provider);
        return hover;
    }
    _updateRenderedHoverPart(index, hoverPart) {
        if (index >= this.renderedHoverParts.length || index < 0) {
            return undefined;
        }
        const renderedHoverPart = this._renderHoverPart(hoverPart, this._onFinishedRendering);
        const currentRenderedHoverPart = this.renderedHoverParts[index];
        const currentRenderedMarkdown = currentRenderedHoverPart.hoverElement;
        const renderedMarkdown = renderedHoverPart.hoverElement;
        const renderedChildrenElements = Array.from(renderedMarkdown.children);
        currentRenderedMarkdown.replaceChildren(...renderedChildrenElements);
        const newRenderedHoverPart = new RenderedMarkdownHoverPart(hoverPart, currentRenderedMarkdown, renderedHoverPart.disposables, renderedHoverPart.actionsContainer);
        currentRenderedHoverPart.dispose();
        this.renderedHoverParts[index] = newRenderedHoverPart;
        return newRenderedHoverPart;
    }
    _getRenderedHoverPartAtIndex(index) {
        return this.renderedHoverParts[index];
    }
    dispose() {
        this._disposables.dispose();
    }
    constructor(hoverParts, hoverPartsContainer, _hoverParticipant, _editor, _languageService, _openerService, _commandService, _keybindingService, _hoverService, _configurationService, _onFinishedRendering){
        this._hoverParticipant = _hoverParticipant;
        this._editor = _editor;
        this._languageService = _languageService;
        this._openerService = _openerService;
        this._commandService = _commandService;
        this._keybindingService = _keybindingService;
        this._hoverService = _hoverService;
        this._configurationService = _configurationService;
        this._onFinishedRendering = _onFinishedRendering;
        this._ongoingHoverOperations = new Map();
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.renderedHoverParts = this._renderHoverParts(hoverParts, hoverPartsContainer, this._onFinishedRendering);
        this._disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            this.renderedHoverParts.forEach((renderedHoverPart)=>{
                renderedHoverPart.dispose();
            });
            this._ongoingHoverOperations.forEach((operation)=>{
                operation.tokenSource.dispose(true);
            });
        }));
    }
}
function renderMarkdownHovers(context, markdownHovers, editor, languageService, openerService) {
    // Sort hover parts to keep them stable since they might come in async, out-of-order
    markdownHovers.sort((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareBy"])((hover)=>hover.ordinal, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberComparator"]));
    const renderedHoverParts = [];
    for (const markdownHover of markdownHovers){
        const renderedHoverPart = renderMarkdown(editor, markdownHover, languageService, openerService, context.onContentsChanged);
        context.fragment.appendChild(renderedHoverPart.hoverElement);
        renderedHoverParts.push(renderedHoverPart);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderedHoverParts"](renderedHoverParts);
}
function renderMarkdown(editor, markdownHover, languageService, openerService, onFinishedRendering) {
    const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const renderedMarkdown = $('div.hover-row');
    const renderedMarkdownContents = $('div.hover-row-contents');
    renderedMarkdown.appendChild(renderedMarkdownContents);
    const markdownStrings = markdownHover.contents;
    for (const markdownString of markdownStrings){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyMarkdownString"])(markdownString)) {
            continue;
        }
        const markdownHoverElement = $('div.markdown-hover');
        const hoverContentsElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markdownHoverElement, $('div.hover-contents'));
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRenderer"]({
            editor
        }, languageService, openerService);
        const renderedContents = disposables.add(renderer.render(markdownString, {
            asyncRenderCallback: ()=>{
                hoverContentsElement.className = 'hover-contents code-hover-contents';
                onFinishedRendering();
            }
        }));
        hoverContentsElement.appendChild(renderedContents.element);
        renderedMarkdownContents.appendChild(markdownHoverElement);
    }
    const renderedHoverPart = {
        hoverPart: markdownHover,
        hoverElement: renderedMarkdown,
        dispose () {
            disposables.dispose();
        }
    };
    return renderedHoverPart;
}
function labelForHoverVerbosityAction(keybindingService, action) {
    switch(action){
        case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase:
            {
                const kb = keybindingService.lookupKeybinding(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCREASE_HOVER_VERBOSITY_ACTION_ID"]);
                return kb ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1128, "Increase Hover Verbosity ({0})", kb.getLabel()) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1129, "Increase Hover Verbosity");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Decrease:
            {
                const kb = keybindingService.lookupKeybinding(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECREASE_HOVER_VERBOSITY_ACTION_ID"]);
                return kb ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1130, "Decrease Hover Verbosity ({0})", kb.getLabel()) : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1131, "Decrease Hover Verbosity");
            }
    }
} //# sourceMappingURL=markdownHoverParticipant.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverRendered.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "RenderedContentHover",
    ()=>RenderedContentHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverStatusBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverStatusBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$colorPicker$2f$browser$2f$hoverColorPicker$2f$hoverColorPickerParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/hoverColorPicker/hoverColorPickerParticipant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)");
var _RenderedContentHoverParts;
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
var RenderedContentHover_1, RenderedContentHoverParts_1;
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
let RenderedContentHover = RenderedContentHover_1 = class RenderedContentHover extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get domNode() {
        return this._renderedHoverParts.domNode;
    }
    get domNodeHasChildren() {
        return this._renderedHoverParts.domNodeHasChildren;
    }
    get focusedHoverPartIndex() {
        return this._renderedHoverParts.focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedHoverParts.hoverPartsCount;
    }
    focusHoverPartWithIndex(index) {
        this._renderedHoverParts.focusHoverPartWithIndex(index);
    }
    async updateHoverVerbosityLevel(action, index, focus) {
        this._renderedHoverParts.updateHoverVerbosityLevel(action, index, focus);
    }
    isColorPickerVisible() {
        return this._renderedHoverParts.isColorPickerVisible();
    }
    static computeHoverPositions(editor, anchorRange, hoverParts) {
        let startColumnBoundary = 1;
        if (editor.hasModel()) {
            // Ensure the range is on the current view line
            const viewModel = editor._getViewModel();
            const coordinatesConverter = viewModel.coordinatesConverter;
            const anchorViewRange = coordinatesConverter.convertModelRangeToViewRange(anchorRange);
            const anchorViewMinColumn = viewModel.getLineMinColumn(anchorViewRange.startLineNumber);
            const anchorViewRangeStart = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](anchorViewRange.startLineNumber, anchorViewMinColumn);
            startColumnBoundary = coordinatesConverter.convertViewPositionToModelPosition(anchorViewRangeStart).column;
        }
        // The anchor range is always on a single line
        const anchorStartLineNumber = anchorRange.startLineNumber;
        let secondaryPositionColumn = anchorRange.startColumn;
        let forceShowAtRange;
        for (const hoverPart of hoverParts){
            const hoverPartRange = hoverPart.range;
            const hoverPartRangeOnAnchorStartLine = hoverPartRange.startLineNumber === anchorStartLineNumber;
            const hoverPartRangeOnAnchorEndLine = hoverPartRange.endLineNumber === anchorStartLineNumber;
            const hoverPartRangeIsOnAnchorLine = hoverPartRangeOnAnchorStartLine && hoverPartRangeOnAnchorEndLine;
            if (hoverPartRangeIsOnAnchorLine) {
                // this message has a range that is completely sitting on the line of the anchor
                const hoverPartStartColumn = hoverPartRange.startColumn;
                const minSecondaryPositionColumn = Math.min(secondaryPositionColumn, hoverPartStartColumn);
                secondaryPositionColumn = Math.max(minSecondaryPositionColumn, startColumnBoundary);
            }
            if (hoverPart.forceShowAtRange) {
                forceShowAtRange = hoverPartRange;
            }
        }
        let showAtPosition;
        let showAtSecondaryPosition;
        if (forceShowAtRange) {
            const forceShowAtPosition = forceShowAtRange.getStartPosition();
            showAtPosition = forceShowAtPosition;
            showAtSecondaryPosition = forceShowAtPosition;
        } else {
            showAtPosition = anchorRange.getStartPosition();
            showAtSecondaryPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](anchorStartLineNumber, secondaryPositionColumn);
        }
        return {
            showAtPosition,
            showAtSecondaryPosition
        };
    }
    constructor(editor, hoverResult, participants, context, keybindingService, hoverService){
        super();
        const parts = hoverResult.hoverParts;
        this._renderedHoverParts = this._register(new RenderedContentHoverParts(editor, participants, parts, context, keybindingService, hoverService));
        const contentHoverComputerOptions = hoverResult.options;
        const anchor = contentHoverComputerOptions.anchor;
        const { showAtPosition, showAtSecondaryPosition } = RenderedContentHover_1.computeHoverPositions(editor, anchor.range, parts);
        this.shouldAppearBeforeContent = parts.some((m)=>m.isBeforeContent);
        this.showAtPosition = showAtPosition;
        this.showAtSecondaryPosition = showAtSecondaryPosition;
        this.initialMousePosX = anchor.initialMousePosX;
        this.initialMousePosY = anchor.initialMousePosY;
        this.shouldFocus = contentHoverComputerOptions.shouldFocus;
        this.source = contentHoverComputerOptions.source;
    }
};
RenderedContentHover = RenderedContentHover_1 = __decorate([
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"])
], RenderedContentHover);
;
class RenderedStatusBar {
    get hoverElement() {
        return this._statusBar.hoverElement;
    }
    get actions() {
        return this._statusBar.actions;
    }
    dispose() {
        this._statusBar.dispose();
    }
    constructor(fragment, _statusBar){
        this._statusBar = _statusBar;
        fragment.appendChild(this._statusBar.hoverElement);
    }
}
let RenderedContentHoverParts = (_RenderedContentHoverParts = class RenderedContentHoverParts extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    _createEditorDecorations(editor, hoverParts) {
        if (hoverParts.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        }
        let highlightRange = hoverParts[0].range;
        for (const hoverPart of hoverParts){
            const hoverPartRange = hoverPart.range;
            highlightRange = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].plusRange(highlightRange, hoverPartRange);
        }
        const highlightDecoration = editor.createDecorationsCollection();
        highlightDecoration.set([
            {
                range: highlightRange,
                options: RenderedContentHoverParts_1._DECORATION_OPTIONS
            }
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            highlightDecoration.clear();
        });
    }
    _renderParts(participants, hoverParts, hoverContext, keybindingService, hoverService) {
        const statusBar = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverStatusBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorHoverStatusBar"](keybindingService, hoverService);
        const hoverRenderingContext = {
            fragment: this._fragment,
            statusBar,
            ...hoverContext
        };
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        disposables.add(statusBar);
        for (const participant of participants){
            const renderedHoverParts = this._renderHoverPartsForParticipant(hoverParts, participant, hoverRenderingContext);
            disposables.add(renderedHoverParts);
            for (const renderedHoverPart of renderedHoverParts.renderedHoverParts){
                this._renderedParts.push({
                    type: 'hoverPart',
                    participant,
                    hoverPart: renderedHoverPart.hoverPart,
                    hoverElement: renderedHoverPart.hoverElement
                });
            }
        }
        const renderedStatusBar = this._renderStatusBar(this._fragment, statusBar);
        if (renderedStatusBar) {
            disposables.add(renderedStatusBar);
            this._renderedParts.push({
                type: 'statusBar',
                hoverElement: renderedStatusBar.hoverElement,
                actions: renderedStatusBar.actions
            });
        }
        return disposables;
    }
    _renderHoverPartsForParticipant(hoverParts, participant, hoverRenderingContext) {
        const hoverPartsForParticipant = hoverParts.filter((hoverPart)=>hoverPart.owner === participant);
        const hasHoverPartsForParticipant = hoverPartsForParticipant.length > 0;
        if (!hasHoverPartsForParticipant) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderedHoverParts"]([]);
        }
        return participant.renderHoverParts(hoverRenderingContext, hoverPartsForParticipant);
    }
    _renderStatusBar(fragment, statusBar) {
        if (!statusBar.hasContent) {
            return undefined;
        }
        return new RenderedStatusBar(fragment, statusBar);
    }
    _registerListenersOnRenderedParts() {
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._renderedParts.forEach((renderedPart, index)=>{
            const element = renderedPart.hoverElement;
            element.tabIndex = 0;
            disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](element, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS_IN, (event)=>{
                event.stopPropagation();
                this._focusedHoverPartIndex = index;
            }));
            disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](element, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS_OUT, (event)=>{
                event.stopPropagation();
                this._focusedHoverPartIndex = -1;
            }));
        });
        return disposables;
    }
    _updateMarkdownAndColorParticipantInfo(participants) {
        const markdownHoverParticipant = participants.find((p)=>{
            return p instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownHoverParticipant"] && !(p instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlayHintsHover"]);
        });
        if (markdownHoverParticipant) {
            this._markdownHoverParticipant = markdownHoverParticipant;
        }
        this._colorHoverParticipant = participants.find((p)=>p instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$colorPicker$2f$browser$2f$hoverColorPicker$2f$hoverColorPickerParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverColorPickerParticipant"]);
    }
    focusHoverPartWithIndex(index) {
        if (index < 0 || index >= this._renderedParts.length) {
            return;
        }
        this._renderedParts[index].hoverElement.focus();
    }
    async updateHoverVerbosityLevel(action, index, focus) {
        if (!this._markdownHoverParticipant) {
            return;
        }
        let rangeOfIndicesToUpdate;
        if (index >= 0) {
            rangeOfIndicesToUpdate = {
                start: index,
                endExclusive: index + 1
            };
        } else {
            rangeOfIndicesToUpdate = this._findRangeOfMarkdownHoverParts(this._markdownHoverParticipant);
        }
        for(let i = rangeOfIndicesToUpdate.start; i < rangeOfIndicesToUpdate.endExclusive; i++){
            const normalizedMarkdownHoverIndex = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, i);
            if (normalizedMarkdownHoverIndex === undefined) {
                continue;
            }
            const renderedPart = await this._markdownHoverParticipant.updateMarkdownHoverVerbosityLevel(action, normalizedMarkdownHoverIndex);
            if (!renderedPart) {
                continue;
            }
            this._renderedParts[i] = {
                type: 'hoverPart',
                participant: this._markdownHoverParticipant,
                hoverPart: renderedPart.hoverPart,
                hoverElement: renderedPart.hoverElement
            };
        }
        if (focus) {
            if (index >= 0) {
                this.focusHoverPartWithIndex(index);
            } else {
                this._context.focus();
            }
        }
        this._context.onContentsChanged();
    }
    isColorPickerVisible() {
        var _this__colorHoverParticipant;
        var _this__colorHoverParticipant_isColorPickerVisible;
        return (_this__colorHoverParticipant_isColorPickerVisible = (_this__colorHoverParticipant = this._colorHoverParticipant) === null || _this__colorHoverParticipant === void 0 ? void 0 : _this__colorHoverParticipant.isColorPickerVisible()) !== null && _this__colorHoverParticipant_isColorPickerVisible !== void 0 ? _this__colorHoverParticipant_isColorPickerVisible : false;
    }
    _normalizedIndexToMarkdownHoverIndexRange(markdownHoverParticipant, index) {
        const renderedPart = this._renderedParts[index];
        if (!renderedPart || renderedPart.type !== 'hoverPart') {
            return undefined;
        }
        const isHoverPartMarkdownHover = renderedPart.participant === markdownHoverParticipant;
        if (!isHoverPartMarkdownHover) {
            return undefined;
        }
        const firstIndexOfMarkdownHovers = this._renderedParts.findIndex((renderedPart)=>renderedPart.type === 'hoverPart' && renderedPart.participant === markdownHoverParticipant);
        if (firstIndexOfMarkdownHovers === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]();
        }
        return index - firstIndexOfMarkdownHovers;
    }
    _findRangeOfMarkdownHoverParts(markdownHoverParticipant) {
        const copiedRenderedParts = this._renderedParts.slice();
        const firstIndexOfMarkdownHovers = copiedRenderedParts.findIndex((renderedPart)=>renderedPart.type === 'hoverPart' && renderedPart.participant === markdownHoverParticipant);
        const inversedLastIndexOfMarkdownHovers = copiedRenderedParts.reverse().findIndex((renderedPart)=>renderedPart.type === 'hoverPart' && renderedPart.participant === markdownHoverParticipant);
        const lastIndexOfMarkdownHovers = inversedLastIndexOfMarkdownHovers >= 0 ? copiedRenderedParts.length - inversedLastIndexOfMarkdownHovers : inversedLastIndexOfMarkdownHovers;
        return {
            start: firstIndexOfMarkdownHovers,
            endExclusive: lastIndexOfMarkdownHovers + 1
        };
    }
    get domNode() {
        return this._fragment;
    }
    get domNodeHasChildren() {
        return this._fragment.hasChildNodes();
    }
    get focusedHoverPartIndex() {
        return this._focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedParts.length;
    }
    constructor(editor, participants, hoverParts, context, keybindingService, hoverService){
        super();
        this._renderedParts = [];
        this._focusedHoverPartIndex = -1;
        this._context = context;
        this._fragment = document.createDocumentFragment();
        this._register(this._renderParts(participants, hoverParts, context, keybindingService, hoverService));
        this._register(this._registerListenersOnRenderedParts());
        this._register(this._createEditorDecorations(editor, hoverParts));
        this._updateMarkdownAndColorParticipantInfo(participants);
    }
}, RenderedContentHoverParts_1 = _RenderedContentHoverParts, _RenderedContentHoverParts._DECORATION_OPTIONS = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelDecorationOptions"].register({
    description: 'content-hover-highlight',
    className: 'hoverHighlight'
}), _RenderedContentHoverParts);
RenderedContentHoverParts = RenderedContentHoverParts_1 = __decorate([
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"])
], RenderedContentHoverParts); //# sourceMappingURL=contentHoverRendered.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverWidgetWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContentHoverWidgetWrapper",
    ()=>ContentHoverWidgetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverOperation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverComputer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverRendered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverRendered.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverUtils.js [app-client] (ecmascript)");
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
;
;
;
;
let ContentHoverWidgetWrapper = class ContentHoverWidgetWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    _initializeHoverParticipants() {
        const participants = [];
        for (const participant of __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverParticipantRegistry"].getAll()){
            const participantInstance = this._instantiationService.createInstance(participant, this._editor);
            participants.push(participantInstance);
        }
        participants.sort((p1, p2)=>p1.hoverOrdinal - p2.hoverOrdinal);
        this._register(this._contentHoverWidget.onDidResize(()=>{
            this._participants.forEach((participant)=>{
                var _participant_handleResize;
                return (_participant_handleResize = participant.handleResize) === null || _participant_handleResize === void 0 ? void 0 : _participant_handleResize.call(participant);
            });
        }));
        this._register(this._contentHoverWidget.onDidScroll((e)=>{
            this._participants.forEach((participant)=>{
                var _participant_handleScroll;
                return (_participant_handleScroll = participant.handleScroll) === null || _participant_handleScroll === void 0 ? void 0 : _participant_handleScroll.call(participant, e);
            });
        }));
        this._register(this._contentHoverWidget.onContentsChanged(()=>{
            this._participants.forEach((participant)=>{
                var _participant_handleContentsChanged;
                return (_participant_handleContentsChanged = participant.handleContentsChanged) === null || _participant_handleContentsChanged === void 0 ? void 0 : _participant_handleContentsChanged.call(participant);
            });
        }));
        return participants;
    }
    _registerListeners() {
        this._register(this._hoverOperation.onResult((result)=>{
            const messages = result.hasLoadingMessage ? this._addLoadingMessage(result) : result.value;
            this._withResult(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverResult"](messages, result.isComplete, result.options));
        }));
        const contentHoverWidgetNode = this._contentHoverWidget.getDomNode();
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](contentHoverWidgetNode, 'keydown', (e)=>{
            if (e.equals(9 /* KeyCode.Escape */ )) {
                this.hide();
            }
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](contentHoverWidgetNode, 'mouseleave', (e)=>{
            this._onMouseLeave(e);
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenizationRegistry"].onDidChange(()=>{
            if (this._contentHoverWidget.position && this._currentResult) {
                this._setCurrentResult(this._currentResult); // render again
            }
        }));
        this._register(this._contentHoverWidget.onContentsChanged(()=>{
            this._onContentsChanged.fire();
        }));
    }
    /**
     * Returns true if the hover shows now or will show.
     */ _startShowingOrUpdateHover(anchor, mode, source, focus, mouseEvent) {
        const contentHoverIsVisible = this._contentHoverWidget.position && this._currentResult;
        if (!contentHoverIsVisible) {
            if (anchor) {
                this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
                return true;
            }
            return false;
        }
        const isHoverSticky = this._editor.getOption(69 /* EditorOption.hover */ ).sticky;
        const isMouseGettingCloser = mouseEvent && this._contentHoverWidget.isMouseGettingCloser(mouseEvent.event.posx, mouseEvent.event.posy);
        const isHoverStickyAndIsMouseGettingCloser = isHoverSticky && isMouseGettingCloser;
        // The mouse is getting closer to the hover, so we will keep the hover untouched
        // But we will kick off a hover update at the new anchor, insisting on keeping the hover visible.
        if (isHoverStickyAndIsMouseGettingCloser) {
            if (anchor) {
                this._startHoverOperationIfNecessary(anchor, mode, source, focus, true);
            }
            return true;
        }
        // If mouse is not getting closer and anchor not defined, hide the hover
        if (!anchor) {
            this._setCurrentResult(null);
            return false;
        }
        // If mouse if not getting closer and anchor is defined, and the new anchor is the same as the previous anchor
        const currentAnchorEqualsPreviousAnchor = this._currentResult && this._currentResult.options.anchor.equals(anchor);
        if (currentAnchorEqualsPreviousAnchor) {
            return true;
        }
        // If mouse if not getting closer and anchor is defined, and the new anchor is not compatible with the previous anchor
        const currentAnchorCompatibleWithPreviousAnchor = this._currentResult && anchor.canAdoptVisibleHover(this._currentResult.options.anchor, this._contentHoverWidget.position);
        if (!currentAnchorCompatibleWithPreviousAnchor) {
            this._setCurrentResult(null);
            this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
            return true;
        }
        // We aren't getting any closer to the hover, so we will filter existing results
        // and keep those which also apply to the new anchor.
        if (this._currentResult) {
            this._setCurrentResult(this._currentResult.filter(anchor));
        }
        this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
        return true;
    }
    _startHoverOperationIfNecessary(anchor, mode, source, shouldFocus, insistOnKeepingHoverVisible) {
        const currentAnchorEqualToPreviousHover = this._hoverOperation.options && this._hoverOperation.options.anchor.equals(anchor);
        if (currentAnchorEqualToPreviousHover) {
            return;
        }
        this._hoverOperation.cancel();
        const contentHoverComputerOptions = {
            anchor,
            source,
            shouldFocus,
            insistOnKeepingHoverVisible
        };
        this._hoverOperation.start(mode, contentHoverComputerOptions);
    }
    _setCurrentResult(hoverResult) {
        let currentHoverResult = hoverResult;
        const currentResultEqualToPreviousResult = this._currentResult === currentHoverResult;
        if (currentResultEqualToPreviousResult) {
            return;
        }
        const currentHoverResultIsEmpty = currentHoverResult && currentHoverResult.hoverParts.length === 0;
        if (currentHoverResultIsEmpty) {
            currentHoverResult = null;
        }
        this._currentResult = currentHoverResult;
        if (this._currentResult) {
            this._showHover(this._currentResult);
        } else {
            this._hideHover();
        }
    }
    _addLoadingMessage(hoverResult) {
        for (const participant of this._participants){
            if (!participant.createLoadingMessage) {
                continue;
            }
            const loadingMessage = participant.createLoadingMessage(hoverResult.options.anchor);
            if (!loadingMessage) {
                continue;
            }
            return hoverResult.value.slice(0).concat([
                loadingMessage
            ]);
        }
        return hoverResult.value;
    }
    _withResult(hoverResult) {
        const previousHoverIsVisibleWithCompleteResult = this._contentHoverWidget.position && this._currentResult && this._currentResult.isComplete;
        if (!previousHoverIsVisibleWithCompleteResult) {
            this._setCurrentResult(hoverResult);
        }
        // The hover is visible with a previous complete result.
        const isCurrentHoverResultComplete = hoverResult.isComplete;
        if (!isCurrentHoverResultComplete) {
            // Instead of rendering the new partial result, we wait for the result to be complete.
            return;
        }
        const currentHoverResultIsEmpty = hoverResult.hoverParts.length === 0;
        const insistOnKeepingPreviousHoverVisible = hoverResult.options.insistOnKeepingHoverVisible;
        const shouldKeepPreviousHoverVisible = currentHoverResultIsEmpty && insistOnKeepingPreviousHoverVisible;
        if (shouldKeepPreviousHoverVisible) {
            // The hover would now hide normally, so we'll keep the previous messages
            return;
        }
        this._setCurrentResult(hoverResult);
    }
    _showHover(hoverResult) {
        const context = this._getHoverContext();
        this._renderedContentHover.value = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverRendered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderedContentHover"](this._editor, hoverResult, this._participants, context, this._keybindingService, this._hoverService);
        if (this._renderedContentHover.value.domNodeHasChildren) {
            this._contentHoverWidget.show(this._renderedContentHover.value);
        } else {
            this._renderedContentHover.clear();
        }
    }
    _hideHover() {
        this._contentHoverWidget.hide();
        this._participants.forEach((participant)=>{
            var _participant_handleHide;
            return (_participant_handleHide = participant.handleHide) === null || _participant_handleHide === void 0 ? void 0 : _participant_handleHide.call(participant);
        });
    }
    _getHoverContext() {
        const hide = ()=>{
            this.hide();
        };
        const onContentsChanged = ()=>{
            this._contentHoverWidget.handleContentsChanged();
        };
        const setMinimumDimensions = (dimensions)=>{
            this._contentHoverWidget.setMinimumDimensions(dimensions);
        };
        const focus = ()=>this.focus();
        return {
            hide,
            onContentsChanged,
            setMinimumDimensions,
            focus
        };
    }
    showsOrWillShow(mouseEvent) {
        const isContentWidgetResizing = this._contentHoverWidget.isResizing;
        if (isContentWidgetResizing) {
            return true;
        }
        const anchorCandidates = this._findHoverAnchorCandidates(mouseEvent);
        const anchorCandidatesExist = anchorCandidates.length > 0;
        if (!anchorCandidatesExist) {
            return this._startShowingOrUpdateHover(null, 0 /* HoverStartMode.Delayed */ , 0 /* HoverStartSource.Mouse */ , false, mouseEvent);
        }
        const anchor = anchorCandidates[0];
        return this._startShowingOrUpdateHover(anchor, 0 /* HoverStartMode.Delayed */ , 0 /* HoverStartSource.Mouse */ , false, mouseEvent);
    }
    _findHoverAnchorCandidates(mouseEvent) {
        const anchorCandidates = [];
        for (const participant of this._participants){
            if (!participant.suggestHoverAnchor) {
                continue;
            }
            const anchor = participant.suggestHoverAnchor(mouseEvent);
            if (!anchor) {
                continue;
            }
            anchorCandidates.push(anchor);
        }
        const target = mouseEvent.target;
        switch(target.type){
            case 6 /* MouseTargetType.CONTENT_TEXT */ :
                {
                    anchorCandidates.push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverRangeAnchor"](0, target.range, mouseEvent.event.posx, mouseEvent.event.posy));
                    break;
                }
            case 7 /* MouseTargetType.CONTENT_EMPTY */ :
                {
                    const epsilon = this._editor.getOption(59 /* EditorOption.fontInfo */ ).typicalHalfwidthCharacterWidth / 2;
                    // Let hover kick in even when the mouse is technically in the empty area after a line, given the distance is small enough
                    const mouseIsWithinLinesAndCloseToHover = !target.detail.isAfterLines && typeof target.detail.horizontalDistanceToText === 'number' && target.detail.horizontalDistanceToText < epsilon;
                    if (!mouseIsWithinLinesAndCloseToHover) {
                        break;
                    }
                    anchorCandidates.push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverRangeAnchor"](0, target.range, mouseEvent.event.posx, mouseEvent.event.posy));
                    break;
                }
        }
        anchorCandidates.sort((a, b)=>b.priority - a.priority);
        return anchorCandidates;
    }
    _onMouseLeave(e) {
        const editorDomNode = this._editor.getDomNode();
        const isMousePositionOutsideOfEditor = !editorDomNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMousePositionWithinElement"])(editorDomNode, e.x, e.y);
        if (isMousePositionOutsideOfEditor) {
            this.hide();
        }
    }
    startShowingAtRange(range, mode, source, focus) {
        this._startShowingOrUpdateHover(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverRangeAnchor"](0, range, undefined, undefined), mode, source, focus, null);
    }
    async updateHoverVerbosityLevel(action, index, focus) {
        var _this__renderedContentHover_value;
        (_this__renderedContentHover_value = this._renderedContentHover.value) === null || _this__renderedContentHover_value === void 0 ? void 0 : _this__renderedContentHover_value.updateHoverVerbosityLevel(action, index, focus);
    }
    focusedHoverPartIndex() {
        var _this__renderedContentHover_value;
        var _this__renderedContentHover_value_focusedHoverPartIndex;
        return (_this__renderedContentHover_value_focusedHoverPartIndex = (_this__renderedContentHover_value = this._renderedContentHover.value) === null || _this__renderedContentHover_value === void 0 ? void 0 : _this__renderedContentHover_value.focusedHoverPartIndex) !== null && _this__renderedContentHover_value_focusedHoverPartIndex !== void 0 ? _this__renderedContentHover_value_focusedHoverPartIndex : -1;
    }
    containsNode(node) {
        return node ? this._contentHoverWidget.getDomNode().contains(node) : false;
    }
    focus() {
        var _this__renderedContentHover_value;
        const hoverPartsCount = (_this__renderedContentHover_value = this._renderedContentHover.value) === null || _this__renderedContentHover_value === void 0 ? void 0 : _this__renderedContentHover_value.hoverPartsCount;
        if (hoverPartsCount === 1) {
            this.focusHoverPartWithIndex(0);
            return;
        }
        this._contentHoverWidget.focus();
    }
    focusHoverPartWithIndex(index) {
        var _this__renderedContentHover_value;
        (_this__renderedContentHover_value = this._renderedContentHover.value) === null || _this__renderedContentHover_value === void 0 ? void 0 : _this__renderedContentHover_value.focusHoverPartWithIndex(index);
    }
    scrollUp() {
        this._contentHoverWidget.scrollUp();
    }
    scrollDown() {
        this._contentHoverWidget.scrollDown();
    }
    scrollLeft() {
        this._contentHoverWidget.scrollLeft();
    }
    scrollRight() {
        this._contentHoverWidget.scrollRight();
    }
    pageUp() {
        this._contentHoverWidget.pageUp();
    }
    pageDown() {
        this._contentHoverWidget.pageDown();
    }
    goToTop() {
        this._contentHoverWidget.goToTop();
    }
    goToBottom() {
        this._contentHoverWidget.goToBottom();
    }
    hide() {
        this._hoverOperation.cancel();
        this._setCurrentResult(null);
    }
    getDomNode() {
        return this._contentHoverWidget.getDomNode();
    }
    get isColorPickerVisible() {
        var _this__renderedContentHover_value;
        var _this__renderedContentHover_value_isColorPickerVisible;
        return (_this__renderedContentHover_value_isColorPickerVisible = (_this__renderedContentHover_value = this._renderedContentHover.value) === null || _this__renderedContentHover_value === void 0 ? void 0 : _this__renderedContentHover_value.isColorPickerVisible()) !== null && _this__renderedContentHover_value_isColorPickerVisible !== void 0 ? _this__renderedContentHover_value_isColorPickerVisible : false;
    }
    get isVisibleFromKeyboard() {
        return this._contentHoverWidget.isVisibleFromKeyboard;
    }
    get isVisible() {
        return this._contentHoverWidget.isVisible;
    }
    get isFocused() {
        return this._contentHoverWidget.isFocused;
    }
    get isResizing() {
        return this._contentHoverWidget.isResizing;
    }
    get widget() {
        return this._contentHoverWidget;
    }
    constructor(_editor, _instantiationService, _keybindingService, _hoverService){
        super();
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this._keybindingService = _keybindingService;
        this._hoverService = _hoverService;
        this._currentResult = null;
        this._renderedContentHover = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this._onContentsChanged = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onContentsChanged = this._onContentsChanged.event;
        this._contentHoverWidget = this._register(this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverWidget"], this._editor));
        this._participants = this._initializeHoverParticipants();
        this._hoverOperation = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverOperation"](this._editor, new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverComputer"](this._editor, this._participants)));
        this._registerListeners();
    }
};
ContentHoverWidgetWrapper = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"])
], ContentHoverWidgetWrapper);
;
 //# sourceMappingURL=contentHoverWidgetWrapper.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ContentHoverController",
    ()=>ContentHoverController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActionIds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverWidgetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverWidgetWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$colorPicker$2f$browser$2f$hoverColorPicker$2f$hoverColorPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/hoverColorPicker/hoverColorPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var _ContentHoverController;
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
var ContentHoverController_1;
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
// sticky hover widget which doesn't disappear on focus out and such
const _sticky = false;
let ContentHoverController = (_ContentHoverController = class ContentHoverController extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    static get(editor) {
        return editor.getContribution(ContentHoverController_1.ID);
    }
    _hookListeners() {
        const hoverOpts = this._editor.getOption(69 /* EditorOption.hover */ );
        this._hoverSettings = {
            enabled: hoverOpts.enabled,
            sticky: hoverOpts.sticky,
            hidingDelay: hoverOpts.hidingDelay
        };
        if (!hoverOpts.enabled) {
            this._cancelSchedulerAndHide();
        }
        this._listenersStore.add(this._editor.onMouseDown((e)=>this._onEditorMouseDown(e)));
        this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp()));
        this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e)));
        this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e)));
        this._listenersStore.add(this._editor.onMouseLeave((e)=>this._onEditorMouseLeave(e)));
        this._listenersStore.add(this._editor.onDidChangeModel(()=>this._cancelSchedulerAndHide()));
        this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler()));
        this._listenersStore.add(this._editor.onDidScrollChange((e)=>this._onEditorScrollChanged(e)));
    }
    _unhookListeners() {
        this._listenersStore.clear();
    }
    _cancelSchedulerAndHide() {
        this._cancelScheduler();
        this.hideContentHover();
    }
    _cancelScheduler() {
        this._mouseMoveEvent = undefined;
        this._reactToEditorMouseMoveRunner.cancel();
    }
    _onEditorScrollChanged(e) {
        if (this._ignoreMouseEvents) {
            return;
        }
        if (e.scrollTopChanged || e.scrollLeftChanged) {
            this.hideContentHover();
        }
    }
    _onEditorMouseDown(mouseEvent) {
        if (this._ignoreMouseEvents) {
            return;
        }
        this._isMouseDown = true;
        const shouldKeepHoverWidgetVisible = this._shouldKeepHoverWidgetVisible(mouseEvent);
        if (shouldKeepHoverWidgetVisible) {
            return;
        }
        this.hideContentHover();
    }
    _shouldKeepHoverWidgetVisible(mouseEvent) {
        return this._isMouseOnContentHoverWidget(mouseEvent) || this._isContentWidgetResizing() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$colorPicker$2f$browser$2f$hoverColorPicker$2f$hoverColorPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOnColorDecorator"])(mouseEvent);
    }
    _isMouseOnContentHoverWidget(mouseEvent) {
        if (!this._contentWidget) {
            return false;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMousePositionWithinElement"])(this._contentWidget.getDomNode(), mouseEvent.event.posx, mouseEvent.event.posy);
    }
    _onEditorMouseUp() {
        if (this._ignoreMouseEvents) {
            return;
        }
        this._isMouseDown = false;
    }
    _onEditorMouseLeave(mouseEvent) {
        if (this._ignoreMouseEvents) {
            return;
        }
        if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) {
            return;
        }
        this._cancelScheduler();
        const shouldKeepHoverWidgetVisible = this._shouldKeepHoverWidgetVisible(mouseEvent);
        if (shouldKeepHoverWidgetVisible) {
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.hideContentHover();
    }
    _shouldKeepCurrentHover(mouseEvent) {
        const contentWidget = this._contentWidget;
        if (!contentWidget) {
            return false;
        }
        const isHoverSticky = this._hoverSettings.sticky;
        const isMouseOnStickyContentHoverWidget = (mouseEvent, isHoverSticky)=>{
            const isMouseOnContentHoverWidget = this._isMouseOnContentHoverWidget(mouseEvent);
            return isHoverSticky && isMouseOnContentHoverWidget;
        };
        const isMouseOnColorPickerOrChoosingColor = (mouseEvent)=>{
            const isColorPickerVisible = contentWidget.isColorPickerVisible;
            const isMouseOnContentHoverWidget = this._isMouseOnContentHoverWidget(mouseEvent);
            const isMouseOnHoverWithColorPicker = isColorPickerVisible && isMouseOnContentHoverWidget;
            const isMaybeChoosingColor = isColorPickerVisible && this._isMouseDown;
            return isMouseOnHoverWithColorPicker || isMaybeChoosingColor;
        };
        // TODO@aiday-mar verify if the following is necessary code
        const isTextSelectedWithinContentHoverWidget = (mouseEvent, sticky)=>{
            var _view_getSelection;
            const view = mouseEvent.event.browserEvent.view;
            if (!view) {
                return false;
            }
            return sticky && contentWidget.containsNode(view.document.activeElement) && !((_view_getSelection = view.getSelection()) === null || _view_getSelection === void 0 ? void 0 : _view_getSelection.isCollapsed);
        };
        const isFocused = contentWidget.isFocused;
        const isResizing = contentWidget.isResizing;
        const isStickyAndVisibleFromKeyboard = this._hoverSettings.sticky && contentWidget.isVisibleFromKeyboard;
        return this.shouldKeepOpenOnEditorMouseMoveOrLeave || isFocused || isResizing || isStickyAndVisibleFromKeyboard || isMouseOnStickyContentHoverWidget(mouseEvent, isHoverSticky) || isMouseOnColorPickerOrChoosingColor(mouseEvent) || isTextSelectedWithinContentHoverWidget(mouseEvent, isHoverSticky);
    }
    _onEditorMouseMove(mouseEvent) {
        if (this._ignoreMouseEvents) {
            return;
        }
        this._mouseMoveEvent = mouseEvent;
        const shouldKeepCurrentHover = this._shouldKeepCurrentHover(mouseEvent);
        if (shouldKeepCurrentHover) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        const shouldRescheduleHoverComputation = this._shouldRescheduleHoverComputation();
        if (shouldRescheduleHoverComputation) {
            if (!this._reactToEditorMouseMoveRunner.isScheduled()) {
                this._reactToEditorMouseMoveRunner.schedule(this._hoverSettings.hidingDelay);
            }
            return;
        }
        this._reactToEditorMouseMove(mouseEvent);
    }
    _shouldRescheduleHoverComputation() {
        var _this__contentWidget;
        const hidingDelay = this._hoverSettings.hidingDelay;
        var _this__contentWidget_isVisible;
        const isContentHoverWidgetVisible = (_this__contentWidget_isVisible = (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.isVisible) !== null && _this__contentWidget_isVisible !== void 0 ? _this__contentWidget_isVisible : false;
        // If the mouse is not over the widget, and if sticky is on,
        // then give it a grace period before reacting to the mouse event
        return isContentHoverWidgetVisible && this._hoverSettings.sticky && hidingDelay > 0;
    }
    _reactToEditorMouseMove(mouseEvent) {
        if (this._hoverSettings.enabled) {
            const contentWidget = this._getOrCreateContentWidget();
            if (contentWidget.showsOrWillShow(mouseEvent)) {
                return;
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.hideContentHover();
    }
    _onKeyDown(e) {
        if (this._ignoreMouseEvents) {
            return;
        }
        if (!this._contentWidget) {
            return;
        }
        const isPotentialKeyboardShortcut = this._isPotentialKeyboardShortcut(e);
        const isModifierKeyPressed = this._isModifierKeyPressed(e);
        if (isPotentialKeyboardShortcut || isModifierKeyPressed) {
            return;
        }
        if (this._contentWidget.isFocused && e.keyCode === 2 /* KeyCode.Tab */ ) {
            return;
        }
        this.hideContentHover();
    }
    _isPotentialKeyboardShortcut(e) {
        if (!this._editor.hasModel() || !this._contentWidget) {
            return false;
        }
        const resolvedKeyboardEvent = this._keybindingService.softDispatch(e, this._editor.getDomNode());
        const moreChordsAreNeeded = resolvedKeyboardEvent.kind === 1 /* ResultKind.MoreChordsNeeded */ ;
        const isHoverAction = resolvedKeyboardEvent.kind === 2 /* ResultKind.KbFound */  && (resolvedKeyboardEvent.commandId === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOW_OR_FOCUS_HOVER_ACTION_ID"] || resolvedKeyboardEvent.commandId === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCREASE_HOVER_VERBOSITY_ACTION_ID"] || resolvedKeyboardEvent.commandId === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECREASE_HOVER_VERBOSITY_ACTION_ID"]) && this._contentWidget.isVisible;
        return moreChordsAreNeeded || isHoverAction;
    }
    _isModifierKeyPressed(e) {
        return e.keyCode === 5 /* KeyCode.Ctrl */  || e.keyCode === 6 /* KeyCode.Alt */  || e.keyCode === 57 /* KeyCode.Meta */  || e.keyCode === 4 /* KeyCode.Shift */ ;
    }
    hideContentHover() {
        var _this__contentWidget;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$hintsWidget$2f$inlineCompletionsHintsWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineSuggestionHintsContentWidget"].dropDownVisible) {
            return;
        }
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.hide();
    }
    _getOrCreateContentWidget() {
        if (!this._contentWidget) {
            this._contentWidget = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverWidgetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverWidgetWrapper"], this._editor);
            this._listenersStore.add(this._contentWidget.onContentsChanged(()=>this._onHoverContentsChanged.fire()));
        }
        return this._contentWidget;
    }
    showContentHover(range, mode, source, focus) {
        this._getOrCreateContentWidget().startShowingAtRange(range, mode, source, focus);
    }
    _isContentWidgetResizing() {
        var _this__contentWidget;
        return ((_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.widget.isResizing) || false;
    }
    focusedHoverPartIndex() {
        return this._getOrCreateContentWidget().focusedHoverPartIndex();
    }
    updateHoverVerbosityLevel(action, index, focus) {
        this._getOrCreateContentWidget().updateHoverVerbosityLevel(action, index, focus);
    }
    focus() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.focus();
    }
    scrollUp() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.scrollUp();
    }
    scrollDown() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.scrollDown();
    }
    scrollLeft() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.scrollLeft();
    }
    scrollRight() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.scrollRight();
    }
    pageUp() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.pageUp();
    }
    pageDown() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.pageDown();
    }
    goToTop() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.goToTop();
    }
    goToBottom() {
        var _this__contentWidget;
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.goToBottom();
    }
    get isColorPickerVisible() {
        var _this__contentWidget;
        return (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.isColorPickerVisible;
    }
    get isHoverVisible() {
        var _this__contentWidget;
        return (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.isVisible;
    }
    dispose() {
        var _this__contentWidget;
        super.dispose();
        this._unhookListeners();
        this._listenersStore.dispose();
        (_this__contentWidget = this._contentWidget) === null || _this__contentWidget === void 0 ? void 0 : _this__contentWidget.dispose();
    }
    constructor(_editor, _contextMenuService, _instantiationService, _keybindingService){
        super();
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this._keybindingService = _keybindingService;
        this._onHoverContentsChanged = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.shouldKeepOpenOnEditorMouseMoveOrLeave = false;
        this._listenersStore = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._isMouseDown = false;
        this._ignoreMouseEvents = false;
        this._reactToEditorMouseMoveRunner = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            if (this._mouseMoveEvent) {
                this._reactToEditorMouseMove(this._mouseMoveEvent);
            }
        }, 0));
        this._register(_contextMenuService.onDidShowContextMenu(()=>{
            this.hideContentHover();
            this._ignoreMouseEvents = true;
        }));
        this._register(_contextMenuService.onDidHideContextMenu(()=>{
            this._ignoreMouseEvents = false;
        }));
        this._hookListeners();
        this._register(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(69 /* EditorOption.hover */ )) {
                this._unhookListeners();
                this._hookListeners();
            }
        }));
    }
}, ContentHoverController_1 = _ContentHoverController, _ContentHoverController.ID = 'editor.contrib.contentHover', _ContentHoverController);
ContentHoverController = ContentHoverController_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"])
], ContentHoverController);
;
 //# sourceMappingURL=contentHoverController.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DecreaseHoverVerbosityLevel",
    ()=>DecreaseHoverVerbosityLevel,
    "GoToBottomHoverAction",
    ()=>GoToBottomHoverAction,
    "GoToTopHoverAction",
    ()=>GoToTopHoverAction,
    "HideContentHoverAction",
    ()=>HideContentHoverAction,
    "IncreaseHoverVerbosityLevel",
    ()=>IncreaseHoverVerbosityLevel,
    "PageDownHoverAction",
    ()=>PageDownHoverAction,
    "PageUpHoverAction",
    ()=>PageUpHoverAction,
    "ScrollDownHoverAction",
    ()=>ScrollDownHoverAction,
    "ScrollLeftHoverAction",
    ()=>ScrollLeftHoverAction,
    "ScrollRightHoverAction",
    ()=>ScrollRightHoverAction,
    "ScrollUpHoverAction",
    ()=>ScrollUpHoverAction,
    "ShowDefinitionPreviewHoverAction",
    ()=>ShowDefinitionPreviewHoverAction,
    "ShowOrFocusHoverAction",
    ()=>ShowOrFocusHoverAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActionIds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$goToDefinitionAtPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
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
;
var HoverFocusBehavior;
(function(HoverFocusBehavior) {
    HoverFocusBehavior["NoAutoFocus"] = "noAutoFocus";
    HoverFocusBehavior["FocusIfVisible"] = "focusIfVisible";
    HoverFocusBehavior["AutoFocusImmediately"] = "autoFocusImmediately";
})(HoverFocusBehavior || (HoverFocusBehavior = {}));
class ShowOrFocusHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        const focusArgument = args === null || args === void 0 ? void 0 : args.focus;
        let focusOption = HoverFocusBehavior.FocusIfVisible;
        if (Object.values(HoverFocusBehavior).includes(focusArgument)) {
            focusOption = focusArgument;
        } else if (typeof focusArgument === 'boolean' && focusArgument) {
            focusOption = HoverFocusBehavior.AutoFocusImmediately;
        }
        const showContentHover = (focus)=>{
            const position = editor.getPosition();
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, position.column, position.lineNumber, position.column);
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */ , 2 /* HoverStartSource.Keyboard */ , focus);
        };
        const accessibilitySupportEnabled = editor.getOption(2 /* EditorOption.accessibilitySupport */ ) === 2 /* AccessibilitySupport.Enabled */ ;
        if (controller.isHoverVisible) {
            if (focusOption !== HoverFocusBehavior.NoAutoFocus) {
                controller.focus();
            } else {
                showContentHover(accessibilitySupportEnabled);
            }
        } else {
            showContentHover(accessibilitySupportEnabled || focusOption === HoverFocusBehavior.AutoFocusImmediately);
        }
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOW_OR_FOCUS_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1102, "Show or Focus Hover"),
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1103, 'Show or focus the editor hover which shows documentation, references, and other content for a symbol at the current cursor position.'),
                args: [
                    {
                        name: 'args',
                        schema: {
                            type: 'object',
                            properties: {
                                'focus': {
                                    description: 'Controls if and when the hover should take focus upon being triggered by this action.',
                                    enum: [
                                        HoverFocusBehavior.NoAutoFocus,
                                        HoverFocusBehavior.FocusIfVisible,
                                        HoverFocusBehavior.AutoFocusImmediately
                                    ],
                                    enumDescriptions: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1099, 'The hover will not automatically take focus.'),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1100, 'The hover will take focus only if it is already visible.'),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1101, 'The hover will automatically take focus when it appears.')
                                    ],
                                    default: HoverFocusBehavior.FocusIfVisible
                                }
                            }
                        }
                    }
                ]
            },
            precondition: undefined,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 2048 /* KeyMod.CtrlCmd */  | 39 /* KeyCode.KeyI */ ),
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            }
        });
    }
}
class ShowDefinitionPreviewHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        const position = editor.getPosition();
        if (!position) {
            return;
        }
        const range = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, position.column, position.lineNumber, position.column);
        const goto = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$goToDefinitionAtPosition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GotoDefinitionAtPositionEditorContribution"].get(editor);
        if (!goto) {
            return;
        }
        const promise = goto.startFindDefinitionFromCursor(position);
        promise.then(()=>{
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */ , 2 /* HoverStartSource.Keyboard */ , true);
        });
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1104, "Show Definition Preview Hover"),
            precondition: undefined,
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1105, 'Show the definition preview hover in the editor.')
            }
        });
    }
}
class HideContentHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        var _ContentHoverController_get;
        (_ContentHoverController_get = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor)) === null || _ContentHoverController_get === void 0 ? void 0 : _ContentHoverController_get.hideContentHover();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HIDE_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1106, "Hide Hover"),
            alias: 'Hide Content Hover',
            precondition: undefined
        });
    }
}
class ScrollUpHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.scrollUp();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCROLL_UP_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1107, "Scroll Up Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 16 /* KeyCode.UpArrow */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1108, 'Scroll up the editor hover.')
            }
        });
    }
}
class ScrollDownHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.scrollDown();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCROLL_DOWN_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1109, "Scroll Down Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 18 /* KeyCode.DownArrow */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1110, 'Scroll down the editor hover.')
            }
        });
    }
}
class ScrollLeftHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.scrollLeft();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCROLL_LEFT_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1111, "Scroll Left Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 15 /* KeyCode.LeftArrow */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1112, 'Scroll left the editor hover.')
            }
        });
    }
}
class ScrollRightHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.scrollRight();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCROLL_RIGHT_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1113, "Scroll Right Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 17 /* KeyCode.RightArrow */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1114, 'Scroll right the editor hover.')
            }
        });
    }
}
class PageUpHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.pageUp();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE_UP_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1115, "Page Up Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 11 /* KeyCode.PageUp */ ,
                secondary: [
                    512 /* KeyMod.Alt */  | 16 /* KeyCode.UpArrow */ 
                ],
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1116, 'Page up the editor hover.')
            }
        });
    }
}
class PageDownHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.pageDown();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE_DOWN_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1117, "Page Down Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 12 /* KeyCode.PageDown */ ,
                secondary: [
                    512 /* KeyMod.Alt */  | 18 /* KeyCode.DownArrow */ 
                ],
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1118, 'Page down the editor hover.')
            }
        });
    }
}
class GoToTopHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.goToTop();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GO_TO_TOP_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1119, "Go To Top Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 14 /* KeyCode.Home */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 16 /* KeyCode.UpArrow */ 
                ],
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1120, 'Go to the top of the editor hover.')
            }
        });
    }
}
class GoToBottomHoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!controller) {
            return;
        }
        controller.goToBottom();
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GO_TO_BOTTOM_HOVER_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1121, "Go To Bottom Hover"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverFocused,
                primary: 13 /* KeyCode.End */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ 
                ],
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            metadata: {
                description: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"](1122, 'Go to the bottom of the editor hover.')
            }
        });
    }
}
class IncreaseHoverVerbosityLevel extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor, args) {
        const hoverController = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!hoverController) {
            return;
        }
        const index = (args === null || args === void 0 ? void 0 : args.index) !== undefined ? args.index : hoverController.focusedHoverPartIndex();
        hoverController.updateHoverVerbosityLevel(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Increase, index, args === null || args === void 0 ? void 0 : args.focus);
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCREASE_HOVER_VERBOSITY_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCREASE_HOVER_VERBOSITY_ACTION_LABEL"],
            alias: 'Increase Hover Verbosity Level',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverVisible
        });
    }
}
class DecreaseHoverVerbosityLevel extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    run(accessor, editor, args) {
        var _ContentHoverController_get;
        const hoverController = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor);
        if (!hoverController) {
            return;
        }
        const index = (args === null || args === void 0 ? void 0 : args.index) !== undefined ? args.index : hoverController.focusedHoverPartIndex();
        (_ContentHoverController_get = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].get(editor)) === null || _ContentHoverController_get === void 0 ? void 0 : _ContentHoverController_get.updateHoverVerbosityLevel(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverVerbosityAction"].Decrease, index, args === null || args === void 0 ? void 0 : args.focus);
    }
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECREASE_HOVER_VERBOSITY_ACTION_ID"],
            label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActionIds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECREASE_HOVER_VERBOSITY_ACTION_LABEL"],
            alias: 'Decrease Hover Verbosity Level',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hoverVisible
        });
    }
} //# sourceMappingURL=hoverActions.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markerHoverParticipant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MarkerHover",
    ()=>MarkerHover,
    "MarkerHoverParticipant",
    ()=>MarkerHoverParticipant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$markerDecorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeActionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoError$2f$browser$2f$gotoError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
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
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
class MarkerHover {
    isValidForHoverAnchor(anchor) {
        return anchor.type === 1 /* HoverAnchorType.Range */  && this.range.startColumn <= anchor.range.startColumn && this.range.endColumn >= anchor.range.endColumn;
    }
    constructor(owner, range, marker){
        this.owner = owner;
        this.range = range;
        this.marker = marker;
    }
}
const markerCodeActionTrigger = {
    type: 1 /* CodeActionTriggerType.Invoke */ ,
    filter: {
        include: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeActionKind"].QuickFix
    },
    triggerAction: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeActionTriggerSource"].QuickFixHover
};
let MarkerHoverParticipant = class MarkerHoverParticipant {
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */  && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = this._editor.getModel();
        const anchorRange = anchor.range;
        if (!model.isValidRange(anchor.range)) {
            return [];
        }
        const lineNumber = anchorRange.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        for (const d of lineDecorations){
            const startColumn = d.range.startLineNumber === lineNumber ? d.range.startColumn : 1;
            const endColumn = d.range.endLineNumber === lineNumber ? d.range.endColumn : maxColumn;
            const marker = this._markerDecorationsService.getMarker(model.uri, d);
            if (!marker) {
                continue;
            }
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkerHover(this, range, marker));
        }
        return result;
    }
    renderHoverParts(context, hoverParts) {
        if (!hoverParts.length) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderedHoverParts"]([]);
        }
        const renderedHoverParts = [];
        hoverParts.forEach((hoverPart)=>{
            const renderedMarkerHover = this._renderMarkerHover(hoverPart);
            context.fragment.appendChild(renderedMarkerHover.hoverElement);
            renderedHoverParts.push(renderedMarkerHover);
        });
        const markerHoverForStatusbar = hoverParts.length === 1 ? hoverParts[0] : hoverParts.sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].compare(a.marker.severity, b.marker.severity))[0];
        const disposables = this._renderMarkerStatusbar(context, markerHoverForStatusbar);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderedHoverParts"](renderedHoverParts, disposables);
    }
    _renderMarkerHover(markerHover) {
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const hoverElement = $('div.hover-row');
        const markerElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](hoverElement, $('div.marker.hover-contents'));
        const { source, message, code, relatedInformation } = markerHover.marker;
        this._editor.applyFontInfo(markerElement);
        const messageElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markerElement, $('span'));
        messageElement.style.whiteSpace = 'pre-wrap';
        messageElement.innerText = message;
        if (source || code) {
            // Code has link
            if (code && typeof code !== 'string') {
                const sourceAndCodeElement = $('span');
                if (source) {
                    const sourceElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](sourceAndCodeElement, $('span'));
                    sourceElement.innerText = source;
                }
                const codeLink = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](sourceAndCodeElement, $('a.code-link'));
                codeLink.setAttribute('href', code.target.toString(true));
                disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](codeLink, 'click', (e)=>{
                    this._openerService.open(code.target, {
                        allowCommands: true
                    });
                    e.preventDefault();
                    e.stopPropagation();
                }));
                const codeElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](codeLink, $('span'));
                codeElement.innerText = code.value;
                const detailsElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markerElement, sourceAndCodeElement);
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
            } else {
                const detailsElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markerElement, $('span'));
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
                detailsElement.innerText = source && code ? "".concat(source, "(").concat(code, ")") : source ? source : "(".concat(code, ")");
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(relatedInformation)) {
            for (const { message, resource, startLineNumber, startColumn } of relatedInformation){
                const relatedInfoContainer = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markerElement, $('div'));
                relatedInfoContainer.style.marginTop = '8px';
                const a = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](relatedInfoContainer, $('a'));
                a.innerText = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basename"])(resource), "(").concat(startLineNumber, ", ").concat(startColumn, "): ");
                a.style.cursor = 'pointer';
                disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](a, 'click', (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    if (this._openerService) {
                        const editorOptions = {
                            selection: {
                                startLineNumber,
                                startColumn
                            }
                        };
                        this._openerService.open(resource, {
                            fromUserGesture: true,
                            editorOptions
                        }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"]);
                    }
                }));
                const messageElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](relatedInfoContainer, $('span'));
                messageElement.innerText = message;
                this._editor.applyFontInfo(messageElement);
            }
        }
        const renderedHoverPart = {
            hoverPart: markerHover,
            hoverElement,
            dispose: ()=>disposables.dispose()
        };
        return renderedHoverPart;
    }
    _renderMarkerStatusbar(context, markerHover) {
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        if (markerHover.marker.severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Error || markerHover.marker.severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Warning || markerHover.marker.severity === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerSeverity"].Info) {
            const markerController = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoError$2f$browser$2f$gotoError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerController"].get(this._editor);
            if (markerController) {
                context.statusBar.addAction({
                    label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1132, "View Problem"),
                    commandId: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoError$2f$browser$2f$gotoError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextMarkerAction"].ID,
                    run: ()=>{
                        context.hide();
                        markerController.showAtMarker(markerHover.marker);
                        this._editor.focus();
                    }
                });
            }
        }
        if (!this._editor.getOption(104 /* EditorOption.readOnly */ )) {
            const quickfixPlaceholderElement = context.statusBar.append($('div'));
            if (this.recentMarkerCodeActionsInfo) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMarkerData"].makeKey(this.recentMarkerCodeActionsInfo.marker) === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$markers$2f$common$2f$markers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMarkerData"].makeKey(markerHover.marker)) {
                    if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                        quickfixPlaceholderElement.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1133, "No quick fixes available");
                    }
                } else {
                    this.recentMarkerCodeActionsInfo = undefined;
                }
            }
            const updatePlaceholderDisposable = this.recentMarkerCodeActionsInfo && !this.recentMarkerCodeActionsInfo.hasCodeActions ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposableTimeout"])(()=>quickfixPlaceholderElement.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1134, "Checking for quick fixes..."), 200, disposables);
            if (!quickfixPlaceholderElement.textContent) {
                // Have some content in here to avoid flickering
                quickfixPlaceholderElement.textContent = String.fromCharCode(0xA0); // &nbsp;
            }
            const codeActionsPromise = this.getCodeActions(markerHover.marker);
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>codeActionsPromise.cancel()));
            codeActionsPromise.then((actions)=>{
                updatePlaceholderDisposable.dispose();
                this.recentMarkerCodeActionsInfo = {
                    marker: markerHover.marker,
                    hasCodeActions: actions.validActions.length > 0
                };
                if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                    actions.dispose();
                    quickfixPlaceholderElement.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1135, "No quick fixes available");
                    return;
                }
                quickfixPlaceholderElement.style.display = 'none';
                let showing = false;
                disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                    if (!showing) {
                        actions.dispose();
                    }
                }));
                context.statusBar.addAction({
                    label: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"](1136, "Quick Fix..."),
                    commandId: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quickFixCommandId"],
                    run: (target)=>{
                        showing = true;
                        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeActionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeActionController"].get(this._editor);
                        const elementPosition = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](target);
                        // Hide the hover pre-emptively, otherwise the editor can close the code actions
                        // context menu as well when using keyboard navigation
                        context.hide();
                        controller === null || controller === void 0 ? void 0 : controller.showCodeActions(markerCodeActionTrigger, actions, {
                            x: elementPosition.left,
                            y: elementPosition.top,
                            width: elementPosition.width,
                            height: elementPosition.height
                        });
                    }
                });
                const aiCodeAction = actions.validActions.find((action)=>action.action.isAI);
                if (aiCodeAction) {
                    var _aiCodeAction_action_command;
                    var _aiCodeAction_action_command_id;
                    context.statusBar.addAction({
                        label: aiCodeAction.action.title,
                        commandId: (_aiCodeAction_action_command_id = (_aiCodeAction_action_command = aiCodeAction.action.command) === null || _aiCodeAction_action_command === void 0 ? void 0 : _aiCodeAction_action_command.id) !== null && _aiCodeAction_action_command_id !== void 0 ? _aiCodeAction_action_command_id : '',
                        iconClass: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].sparkle),
                        run: ()=>{
                            const controller = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeActionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeActionController"].get(this._editor);
                            controller === null || controller === void 0 ? void 0 : controller.applyCodeAction(aiCodeAction, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplyCodeActionReason"].FromProblemsHover);
                        }
                    });
                }
                // Notify that the contents have changed given we added
                // actions to the hover
                // https://github.com/microsoft/vscode/issues/250424
                context.onContentsChanged();
            }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"]);
        }
        return disposables;
    }
    getCodeActions(marker) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCancelablePromise"])((cancellationToken)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$codeAction$2f$browser$2f$codeAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCodeActions"])(this._languageFeaturesService.codeActionProvider, this._editor.getModel(), new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn), markerCodeActionTrigger, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"].None, cancellationToken);
        });
    }
    constructor(_editor, _markerDecorationsService, _openerService, _languageFeaturesService){
        this._editor = _editor;
        this._markerDecorationsService = _markerDecorationsService;
        this._openerService = _openerService;
        this._languageFeaturesService = _languageFeaturesService;
        this.hoverOrdinal = 1;
        this.recentMarkerCodeActionsInfo = undefined;
    }
};
MarkerHoverParticipant = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$markerDecorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMarkerDecorationsService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOpenerService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"])
], MarkerHoverParticipant);
;
 //# sourceMappingURL=markerHoverParticipant.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverComputer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "GlyphHoverComputer",
    ()=>GlyphHoverComputer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/model.js [app-client] (ecmascript)");
;
;
;
class GlyphHoverComputer {
    computeSync(opts) {
        const toHoverMessage = (contents)=>{
            return {
                value: contents
            };
        };
        const lineDecorations = this._editor.getLineDecorations(opts.lineNumber);
        const result = [];
        const isLineHover = opts.laneOrLine === 'lineNo';
        if (!lineDecorations) {
            return result;
        }
        for (const d of lineDecorations){
            var _d_options_glyphMargin;
            var _d_options_glyphMargin_position;
            const lane = (_d_options_glyphMargin_position = (_d_options_glyphMargin = d.options.glyphMargin) === null || _d_options_glyphMargin === void 0 ? void 0 : _d_options_glyphMargin.position) !== null && _d_options_glyphMargin_position !== void 0 ? _d_options_glyphMargin_position : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlyphMarginLane"].Center;
            if (!isLineHover && lane !== opts.laneOrLine) {
                continue;
            }
            const hoverMessage = isLineHover ? d.options.lineNumberHoverMessage : d.options.glyphMarginHoverMessage;
            if (!hoverMessage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyMarkdownString"])(hoverMessage)) {
                continue;
            }
            result.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asArray"])(hoverMessage).map(toHoverMessage));
        }
        return result;
    }
    constructor(_editor){
        this._editor = _editor;
    }
} //# sourceMappingURL=glyphHoverComputer.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "GlyphHoverWidget",
    ()=>GlyphHoverWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverOperation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverComputer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverUtils.js [app-client] (ecmascript)");
var _GlyphHoverWidget;
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
var GlyphHoverWidget_1;
;
;
;
;
;
;
;
;
;
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
let GlyphHoverWidget = (_GlyphHoverWidget = class GlyphHoverWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    dispose() {
        this._hoverComputerOptions = undefined;
        this._editor.removeOverlayWidget(this);
        super.dispose();
    }
    getId() {
        return GlyphHoverWidget_1.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        return null;
    }
    _updateFont() {
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach((node)=>this._editor.applyFontInfo(node));
    }
    _onModelDecorationsChanged() {
        if (this._isVisible && this._hoverComputerOptions) {
            // The decorations have changed and the hover is visible,
            // we need to recompute the displayed text
            this._hoverOperation.cancel();
            this._hoverOperation.start(0 /* HoverStartMode.Delayed */ , this._hoverComputerOptions);
        }
    }
    showsOrWillShow(mouseEvent) {
        const target = mouseEvent.target;
        if (target.type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */  && target.detail.glyphMarginLane) {
            this._startShowingAt(target.position.lineNumber, target.detail.glyphMarginLane);
            return true;
        }
        if (target.type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */ ) {
            this._startShowingAt(target.position.lineNumber, 'lineNo');
            return true;
        }
        return false;
    }
    _startShowingAt(lineNumber, laneOrLine) {
        if (this._hoverComputerOptions && this._hoverComputerOptions.lineNumber === lineNumber && this._hoverComputerOptions.laneOrLine === laneOrLine) {
            // We have to show the widget at the exact same line number as before, so no work is needed
            return;
        }
        this._hoverOperation.cancel();
        this.hide();
        this._hoverComputerOptions = {
            lineNumber,
            laneOrLine
        };
        this._hoverOperation.start(0 /* HoverStartMode.Delayed */ , this._hoverComputerOptions);
    }
    hide() {
        this._hoverComputerOptions = undefined;
        this._hoverOperation.cancel();
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
    }
    _withResult(result) {
        this._messages = result.value;
        if (this._messages.length > 0) {
            this._renderMessages(result.options.lineNumber, result.options.laneOrLine, this._messages);
        } else {
            this.hide();
        }
    }
    _renderMessages(lineNumber, laneOrLine, messages) {
        this._renderDisposeables.clear();
        const fragment = document.createDocumentFragment();
        for (const msg of messages){
            const markdownHoverElement = $('div.hover-row.markdown-hover');
            const hoverContentsElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](markdownHoverElement, $('div.hover-contents'));
            const renderedContents = this._renderDisposeables.add(this._markdownRenderer.render(msg.value));
            hoverContentsElement.appendChild(renderedContents.element);
            fragment.appendChild(markdownHoverElement);
        }
        this._updateContents(fragment);
        this._showAt(lineNumber, laneOrLine);
    }
    _updateContents(node) {
        this._hover.contentsDomNode.textContent = '';
        this._hover.contentsDomNode.appendChild(node);
        this._updateFont();
    }
    _showAt(lineNumber, laneOrLine) {
        if (!this._isVisible) {
            this._isVisible = true;
            this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        }
        const editorLayout = this._editor.getLayoutInfo();
        const topForLineNumber = this._editor.getTopForLineNumber(lineNumber);
        const editorScrollTop = this._editor.getScrollTop();
        const lineHeight = this._editor.getOption(75 /* EditorOption.lineHeight */ );
        const nodeHeight = this._hover.containerDomNode.clientHeight;
        const top = topForLineNumber - editorScrollTop - (nodeHeight - lineHeight) / 2;
        const left = editorLayout.glyphMarginLeft + editorLayout.glyphMarginWidth + (laneOrLine === 'lineNo' ? editorLayout.lineNumbersWidth : 0);
        this._hover.containerDomNode.style.left = "".concat(left, "px");
        this._hover.containerDomNode.style.top = "".concat(Math.max(Math.round(top), 0), "px");
        this._hover.containerDomNode.style.zIndex = '11'; // 1 more than the zone widget at 10 (#233819)
    }
    _onMouseLeave(e) {
        const editorDomNode = this._editor.getDomNode();
        const isMousePositionOutsideOfEditor = !editorDomNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMousePositionWithinElement"])(editorDomNode, e.x, e.y);
        if (isMousePositionOutsideOfEditor) {
            this.hide();
        }
    }
    constructor(editor, languageService, openerService){
        super();
        this._renderDisposeables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this._editor = editor;
        this._isVisible = false;
        this._messages = [];
        this._hover = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverWidget"](true));
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        this._markdownRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRenderer"]({
            editor: this._editor
        }, languageService, openerService);
        this._hoverOperation = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverOperation"](this._editor, new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlyphHoverComputer"](this._editor)));
        this._register(this._hoverOperation.onResult((result)=>this._withResult(result)));
        this._register(this._editor.onDidChangeModelDecorations(()=>this._onModelDecorationsChanged()));
        this._register(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(59 /* EditorOption.fontInfo */ )) {
                this._updateFont();
            }
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this._hover.containerDomNode, 'mouseleave', (e)=>{
            this._onMouseLeave(e);
        }));
        this._editor.addOverlayWidget(this);
    }
}, GlyphHoverWidget_1 = _GlyphHoverWidget, _GlyphHoverWidget.ID = 'editor.contrib.modesGlyphHoverWidget', _GlyphHoverWidget);
GlyphHoverWidget = GlyphHoverWidget_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOpenerService"])
], GlyphHoverWidget);
;
 //# sourceMappingURL=glyphHoverWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "GlyphHoverController",
    ()=>GlyphHoverController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverWidget.js [app-client] (ecmascript)");
var _GlyphHoverController;
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
// sticky hover widget which doesn't disappear on focus out and such
const _sticky = false;
let GlyphHoverController = (_GlyphHoverController = class GlyphHoverController extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    _hookListeners() {
        const hoverOpts = this._editor.getOption(69 /* EditorOption.hover */ );
        this._hoverSettings = {
            enabled: hoverOpts.enabled,
            sticky: hoverOpts.sticky,
            hidingDelay: hoverOpts.hidingDelay
        };
        if (hoverOpts.enabled) {
            this._listenersStore.add(this._editor.onMouseDown((e)=>this._onEditorMouseDown(e)));
            this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp()));
            this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e)));
            this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e)));
        } else {
            this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e)));
            this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e)));
        }
        this._listenersStore.add(this._editor.onMouseLeave((e)=>this._onEditorMouseLeave(e)));
        this._listenersStore.add(this._editor.onDidChangeModel(()=>{
            this._cancelScheduler();
            this.hideGlyphHover();
        }));
        this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler()));
        this._listenersStore.add(this._editor.onDidScrollChange((e)=>this._onEditorScrollChanged(e)));
    }
    _unhookListeners() {
        this._listenersStore.clear();
    }
    _cancelScheduler() {
        this._mouseMoveEvent = undefined;
        this._reactToEditorMouseMoveRunner.cancel();
    }
    _onEditorScrollChanged(e) {
        if (e.scrollTopChanged || e.scrollLeftChanged) {
            this.hideGlyphHover();
        }
    }
    _onEditorMouseDown(mouseEvent) {
        this._hoverState.mouseDown = true;
        const shouldNotHideCurrentHoverWidget = this._isMouseOnGlyphHoverWidget(mouseEvent);
        if (shouldNotHideCurrentHoverWidget) {
            return;
        }
        this.hideGlyphHover();
    }
    _isMouseOnGlyphHoverWidget(mouseEvent) {
        var _this__glyphWidget;
        const glyphHoverWidgetNode = (_this__glyphWidget = this._glyphWidget) === null || _this__glyphWidget === void 0 ? void 0 : _this__glyphWidget.getDomNode();
        if (glyphHoverWidgetNode) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMousePositionWithinElement"])(glyphHoverWidgetNode, mouseEvent.event.posx, mouseEvent.event.posy);
        }
        return false;
    }
    _onEditorMouseUp() {
        this._hoverState.mouseDown = false;
    }
    _onEditorMouseLeave(mouseEvent) {
        if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) {
            return;
        }
        this._cancelScheduler();
        const shouldNotHideCurrentHoverWidget = this._isMouseOnGlyphHoverWidget(mouseEvent);
        if (shouldNotHideCurrentHoverWidget) {
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.hideGlyphHover();
    }
    _shouldNotRecomputeCurrentHoverWidget(mouseEvent) {
        const isHoverSticky = this._hoverSettings.sticky;
        const isMouseOnGlyphHoverWidget = this._isMouseOnGlyphHoverWidget(mouseEvent);
        return isHoverSticky && isMouseOnGlyphHoverWidget;
    }
    _onEditorMouseMove(mouseEvent) {
        if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) {
            return;
        }
        this._mouseMoveEvent = mouseEvent;
        const shouldNotRecomputeCurrentHoverWidget = this._shouldNotRecomputeCurrentHoverWidget(mouseEvent);
        if (shouldNotRecomputeCurrentHoverWidget) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        this._reactToEditorMouseMove(mouseEvent);
    }
    _reactToEditorMouseMove(mouseEvent) {
        if (!mouseEvent) {
            return;
        }
        const glyphWidgetShowsOrWillShow = this._tryShowHoverWidget(mouseEvent);
        if (glyphWidgetShowsOrWillShow) {
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.hideGlyphHover();
    }
    _tryShowHoverWidget(mouseEvent) {
        const glyphWidget = this._getOrCreateGlyphWidget();
        return glyphWidget.showsOrWillShow(mouseEvent);
    }
    _onKeyDown(e) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (e.keyCode === 5 /* KeyCode.Ctrl */  || e.keyCode === 6 /* KeyCode.Alt */  || e.keyCode === 57 /* KeyCode.Meta */  || e.keyCode === 4 /* KeyCode.Shift */ ) {
            // Do not hide hover when a modifier key is pressed
            return;
        }
        this.hideGlyphHover();
    }
    hideGlyphHover() {
        var _this__glyphWidget;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        (_this__glyphWidget = this._glyphWidget) === null || _this__glyphWidget === void 0 ? void 0 : _this__glyphWidget.hide();
    }
    _getOrCreateGlyphWidget() {
        if (!this._glyphWidget) {
            this._glyphWidget = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlyphHoverWidget"], this._editor);
        }
        return this._glyphWidget;
    }
    dispose() {
        var _this__glyphWidget;
        super.dispose();
        this._unhookListeners();
        this._listenersStore.dispose();
        (_this__glyphWidget = this._glyphWidget) === null || _this__glyphWidget === void 0 ? void 0 : _this__glyphWidget.dispose();
    }
    constructor(_editor, _instantiationService){
        super();
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this.shouldKeepOpenOnEditorMouseMoveOrLeave = false;
        this._listenersStore = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._hoverState = {
            mouseDown: false
        };
        this._reactToEditorMouseMoveRunner = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>this._reactToEditorMouseMove(this._mouseMoveEvent), 0));
        this._hookListeners();
        this._register(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(69 /* EditorOption.hover */ )) {
                this._unhookListeners();
                this._hookListeners();
            }
        }));
    }
}, _GlyphHoverController.ID = 'editor.contrib.marginHover', _GlyphHoverController);
GlyphHoverController = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], GlyphHoverController);
;
 //# sourceMappingURL=glyphHoverController.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverAccessibleViews.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExtHoverAccessibleView",
    ()=>ExtHoverAccessibleView,
    "HoverAccessibilityHelp",
    ()=>HoverAccessibilityHelp,
    "HoverAccessibleView",
    ()=>HoverAccessibleView
]);
class HoverAccessibleView {
}
class HoverAccessibilityHelp {
}
class ExtHoverAccessibleView {
} //# sourceMappingURL=hoverAccessibleViews.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverContribution.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/editorColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markerHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markerHoverParticipant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHoverController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/glyphHoverController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/browser/accessibleViewRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverAccessibleViews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverAccessibleViews.js [app-client] (ecmascript)");
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorContribution"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"].ID, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$contentHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentHoverController"], 2 /* EditorContributionInstantiation.BeforeFirstInteraction */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorContribution"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlyphHoverController"].ID, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$glyphHoverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlyphHoverController"], 2 /* EditorContributionInstantiation.BeforeFirstInteraction */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowOrFocusHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowDefinitionPreviewHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HideContentHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollLeftHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollRightHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageUpHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageDownHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoToTopHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoToBottomHoverAction"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncreaseHoverVerbosityLevel"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecreaseHoverVerbosityLevel"]);
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverParticipantRegistry"].register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownHoverParticipant"]);
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverParticipantRegistry"].register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markerHoverParticipant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerHoverParticipant"]);
// theming
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerThemingParticipant"])((theme, collector)=>{
    const hoverBorder = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editorHoverBorder"]);
    if (hoverBorder) {
        collector.addRule(".monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ".concat(hoverBorder.transparent(0.5), "; }"));
        collector.addRule(".monaco-editor .monaco-hover hr { border-top: 1px solid ".concat(hoverBorder.transparent(0.5), "; }"));
        collector.addRule(".monaco-editor .monaco-hover hr { border-bottom: 0px solid ".concat(hoverBorder.transparent(0.5), "; }"));
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessibleViewRegistry"].register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverAccessibleViews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverAccessibleView"]());
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessibleViewRegistry"].register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverAccessibleViews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverAccessibilityHelp"]());
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$browser$2f$accessibleViewRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessibleViewRegistry"].register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverAccessibleViews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtHoverAccessibleView"]()); //# sourceMappingURL=hoverContribution.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_editor_contrib_hover_browser_f2ae7149._.js.map