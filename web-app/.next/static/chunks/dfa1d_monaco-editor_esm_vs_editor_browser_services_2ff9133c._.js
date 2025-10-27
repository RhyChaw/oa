(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ICodeEditorService",
    ()=>ICodeEditorService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
;
const ICodeEditorService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('codeEditorService'); //# sourceMappingURL=codeEditorService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/markerDecorations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MarkerDecorationsContribution",
    ()=>MarkerDecorationsContribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$markerDecorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var _MarkerDecorationsContribution;
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
let MarkerDecorationsContribution = (_MarkerDecorationsContribution = class MarkerDecorationsContribution {
    dispose() {}
    constructor(_editor, _markerDecorationsService){
    // Doesn't do anything, just requires `IMarkerDecorationsService` to make sure it gets instantiated
    }
}, _MarkerDecorationsContribution.ID = 'editor.contrib.markerDecorations', _MarkerDecorationsContribution);
MarkerDecorationsContribution = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$markerDecorations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMarkerDecorationsService"])
], MarkerDecorationsContribution);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorContribution"])(MarkerDecorationsContribution.ID, MarkerDecorationsContribution, 0 /* EditorContributionInstantiation.Eager */ ); // eager because it instantiates IMarkerDecorationsService which is responsible for rendering squiggles
 //# sourceMappingURL=markerDecorations.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IBulkEditService",
    ()=>IBulkEditService,
    "ResourceEdit",
    ()=>ResourceEdit,
    "ResourceFileEdit",
    ()=>ResourceFileEdit,
    "ResourceTextEdit",
    ()=>ResourceTextEdit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
;
;
;
const IBulkEditService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('IWorkspaceEditService');
class ResourceEdit {
    static convert(edit) {
        return edit.edits.map((edit)=>{
            if (ResourceTextEdit.is(edit)) {
                return ResourceTextEdit.lift(edit);
            }
            if (ResourceFileEdit.is(edit)) {
                return ResourceFileEdit.lift(edit);
            }
            throw new Error('Unsupported edit');
        });
    }
    constructor(metadata){
        this.metadata = metadata;
    }
}
class ResourceTextEdit extends ResourceEdit {
    static is(candidate) {
        if (candidate instanceof ResourceTextEdit) {
            return true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(candidate) && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(candidate.resource) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(candidate.textEdit);
    }
    static lift(edit) {
        if (edit instanceof ResourceTextEdit) {
            return edit;
        } else {
            return new ResourceTextEdit(edit.resource, edit.textEdit, edit.versionId, edit.metadata);
        }
    }
    constructor(resource, textEdit, versionId = undefined, metadata){
        super(metadata);
        this.resource = resource;
        this.textEdit = textEdit;
        this.versionId = versionId;
    }
}
class ResourceFileEdit extends ResourceEdit {
    static is(candidate) {
        if (candidate instanceof ResourceFileEdit) {
            return true;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(candidate) && (Boolean(candidate.newResource) || Boolean(candidate.oldResource));
        }
    }
    static lift(edit) {
        if (edit instanceof ResourceFileEdit) {
            return edit;
        } else {
            return new ResourceFileEdit(edit.oldResource, edit.newResource, edit.options, edit.metadata);
        }
    }
    constructor(oldResource, newResource, options = {}, metadata){
        super(metadata);
        this.oldResource = oldResource;
        this.newResource = newResource;
        this.options = options;
    }
} //# sourceMappingURL=bulkEditService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/inlineCompletionsService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "CancelSnoozeInlineCompletion",
    ()=>CancelSnoozeInlineCompletion,
    "IInlineCompletionsService",
    ()=>IInlineCompletionsService,
    "InlineCompletionsService",
    ()=>InlineCompletionsService,
    "SnoozeInlineCompletion",
    ()=>SnoozeInlineCompletion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$quickinput$2f$common$2f$quickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/quickinput/common/quickInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)");
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
const IInlineCompletionsService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('IInlineCompletionsService');
const InlineCompletionsSnoozing = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('inlineCompletions.snoozed', false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(76, "Whether inline completions are currently snoozed"));
let InlineCompletionsService = class InlineCompletionsService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get snoozeTimeLeft() {
        if (this._snoozeTimeEnd === undefined) {
            return 0;
        }
        return Math.max(0, this._snoozeTimeEnd - Date.now());
    }
    setSnoozeDuration(durationMs) {
        if (durationMs < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]("Invalid snooze duration: ".concat(durationMs, ". Duration must be non-negative."));
        }
        if (durationMs === 0) {
            this.cancelSnooze();
            return;
        }
        const wasSnoozing = this.isSnoozing();
        const timeLeft = this.snoozeTimeLeft;
        this._snoozeTimeEnd = Date.now() + durationMs;
        if (!wasSnoozing) {
            this._onDidChangeIsSnoozing.fire(true);
        }
        this._timer.cancelAndSet(()=>{
            if (!this.isSnoozing()) {
                this._onDidChangeIsSnoozing.fire(false);
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Snooze timer did not fire as expected');
            }
        }, this.snoozeTimeLeft + 1);
        this._reportSnooze(durationMs - timeLeft, durationMs);
    }
    isSnoozing() {
        return this.snoozeTimeLeft > 0;
    }
    cancelSnooze() {
        if (this.isSnoozing()) {
            this._reportSnooze(-this.snoozeTimeLeft, 0);
            this._snoozeTimeEnd = undefined;
            this._timer.cancel();
            this._onDidChangeIsSnoozing.fire(false);
        }
    }
    reportNewCompletion(requestUuid) {
        this._lastCompletionId = requestUuid;
        this._recentCompletionIds.unshift(requestUuid);
        if (this._recentCompletionIds.length > 5) {
            this._recentCompletionIds.pop();
        }
    }
    _reportSnooze(deltaMs, totalMs) {
        const deltaSeconds = Math.round(deltaMs / 1000);
        const totalSeconds = Math.round(totalMs / 1000);
        this._telemetryService.publicLog2('inlineCompletions.snooze', {
            deltaSeconds,
            totalSeconds,
            lastCompletionId: this._lastCompletionId,
            recentCompletionIds: this._recentCompletionIds
        });
    }
    constructor(_contextKeyService, _telemetryService){
        super();
        this._contextKeyService = _contextKeyService;
        this._telemetryService = _telemetryService;
        this._onDidChangeIsSnoozing = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChangeIsSnoozing = this._onDidChangeIsSnoozing.event; // 5 minutes
        this._snoozeTimeEnd = undefined;
        this._recentCompletionIds = [];
        this._timer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowIntervalTimer"]());
        const inlineCompletionsSnoozing = InlineCompletionsSnoozing.bindTo(this._contextKeyService);
        this._register(this.onDidChangeIsSnoozing(()=>inlineCompletionsSnoozing.set(this.isSnoozing())));
    }
};
InlineCompletionsService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"])
], InlineCompletionsService);
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(IInlineCompletionsService, InlineCompletionsService, 1 /* InstantiationType.Delayed */ );
const snoozeInlineSuggestId = 'editor.action.inlineSuggest.snooze';
const cancelSnoozeInlineSuggestId = 'editor.action.inlineSuggest.cancelSnooze';
const LAST_SNOOZE_DURATION_KEY = 'inlineCompletions.lastSnoozeDuration';
class SnoozeInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    async run(accessor) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        const quickInputService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$quickinput$2f$common$2f$quickInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IQuickInputService"]);
        const inlineCompletionsService = accessor.get(IInlineCompletionsService);
        const storageService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStorageService"]);
        let durationMinutes;
        if (args.length > 0 && typeof args[0] === 'number') {
            durationMinutes = args[0];
        }
        if (!durationMinutes) {
            durationMinutes = await this.getDurationFromUser(quickInputService, storageService);
        }
        if (durationMinutes) {
            inlineCompletionsService.setSnoozeDuration(durationMinutes);
        }
    }
    async getDurationFromUser(quickInputService, storageService) {
        const lastSelectedDuration = storageService.getNumber(LAST_SNOOZE_DURATION_KEY, 0 /* StorageScope.PROFILE */ , 300_000);
        const items = [
            {
                label: '1 minute',
                id: '1',
                value: 60_000
            },
            {
                label: '5 minutes',
                id: '5',
                value: 300_000
            },
            {
                label: '10 minutes',
                id: '10',
                value: 600_000
            },
            {
                label: '15 minutes',
                id: '15',
                value: 900_000
            },
            {
                label: '30 minutes',
                id: '30',
                value: 1_800_000
            },
            {
                label: '60 minutes',
                id: '60',
                value: 3_600_000
            }
        ];
        const picked = await quickInputService.pick(items, {
            placeHolder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(77, "Select snooze duration for Code completions and NES"),
            activeItem: items.find((item)=>item.value === lastSelectedDuration)
        });
        if (picked) {
            storageService.store(LAST_SNOOZE_DURATION_KEY, picked.value, 0 /* StorageScope.PROFILE */ , 0 /* StorageTarget.USER */ );
            return picked.value;
        }
        return undefined;
    }
    constructor(){
        super({
            id: SnoozeInlineCompletion.ID,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(78, "Snooze Inline Suggestions"),
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].true(),
            f1: true
        });
    }
}
SnoozeInlineCompletion.ID = snoozeInlineSuggestId;
class CancelSnoozeInlineCompletion extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    async run(accessor) {
        accessor.get(IInlineCompletionsService).cancelSnooze();
    }
    constructor(){
        super({
            id: CancelSnoozeInlineCompletion.ID,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"])(79, "Cancel Snooze Inline Suggestions"),
            precondition: InlineCompletionsSnoozing,
            f1: true
        });
    }
} //# sourceMappingURL=inlineCompletionsService.js.map
CancelSnoozeInlineCompletion.ID = cancelSnoozeInlineSuggestId;
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/editorWorkerService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "EditorWorkerClient",
    ()=>EditorWorkerClient,
    "EditorWorkerService",
    ()=>EditorWorkerService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$worker$2f$webWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/worker/webWorker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$webWorkerFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/webWorkerFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$editorWebWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/editorWebWorker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textResourceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$stopwatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$linesDiffComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/diff/linesDiffComputer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$rangeMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/diff/rangeMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$ranges$2f$lineRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/core/ranges/lineRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textModelSync$2f$textModelSync$2e$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$editorWorkerHost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js [app-client] (ecmascript)");
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
/**
 * Stop the worker if it was not needed for 5 min.
 */ const STOP_WORKER_DELTA_TIME_MS = 5 * 60 * 1000;
function canSyncModel(modelService, resource) {
    const model = modelService.getModel(resource);
    if (!model) {
        return false;
    }
    if (model.isTooLargeForSyncing()) {
        return false;
    }
    return true;
}
let EditorWorkerService = class EditorWorkerService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    dispose() {
        super.dispose();
    }
    canComputeUnicodeHighlights(uri) {
        return canSyncModel(this._modelService, uri);
    }
    async computedUnicodeHighlights(uri, options, range) {
        const worker = await this._workerWithResources([
            uri
        ]);
        return worker.$computeUnicodeHighlights(uri.toString(), options, range);
    }
    async computeDiff(original, modified, options, algorithm) {
        const worker = await this._workerWithResources([
            original,
            modified
        ], /* forceLargeModels */ true);
        const result = await worker.$computeDiff(original.toString(), modified.toString(), options, algorithm);
        if (!result) {
            return null;
        }
        // Convert from space efficient JSON data to rich objects.
        const diff = {
            identical: result.identical,
            quitEarly: result.quitEarly,
            changes: toLineRangeMappings(result.changes),
            moves: result.moves.map((m)=>new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$linesDiffComputer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovedText"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$rangeMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineRangeMapping"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$ranges$2f$lineRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineRange"](m[0], m[1]), new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$ranges$2f$lineRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineRange"](m[2], m[3])), toLineRangeMappings(m[4])))
        };
        return diff;
        //TURBOPACK unreachable
        ;
        function toLineRangeMappings(changes) {
            return changes.map((c)=>{
                var _c_;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$rangeMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailedLineRangeMapping"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$ranges$2f$lineRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineRange"](c[0], c[1]), new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$ranges$2f$lineRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineRange"](c[2], c[3]), (_c_ = c[4]) === null || _c_ === void 0 ? void 0 : _c_.map((c)=>new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$diff$2f$rangeMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeMapping"](new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](c[0], c[1], c[2], c[3]), new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](c[4], c[5], c[6], c[7]))));
            });
        }
    }
    async computeMoreMinimalEdits(resource, edits) {
        let pretty = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(edits)) {
            if (!canSyncModel(this._modelService, resource)) {
                return Promise.resolve(edits); // File too large
            }
            const sw = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$stopwatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StopWatch"].create();
            const result = this._workerWithResources([
                resource
            ]).then((worker)=>worker.$computeMoreMinimalEdits(resource.toString(), edits, pretty));
            result.finally(()=>this._logService.trace('FORMAT#computeMoreMinimalEdits', resource.toString(true), sw.elapsed()));
            return Promise.race([
                result,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeout"])(1000).then(()=>edits)
            ]);
        } else {
            return Promise.resolve(undefined);
        }
    }
    canNavigateValueSet(resource) {
        return canSyncModel(this._modelService, resource);
    }
    async navigateValueSet(resource, range, up) {
        const model = this._modelService.getModel(resource);
        if (!model) {
            return null;
        }
        const wordDefRegExp = this._languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        const worker = await this._workerWithResources([
            resource
        ]);
        return worker.$navigateValueSet(resource.toString(), range, up, wordDef, wordDefFlags);
    }
    canComputeWordRanges(resource) {
        return canSyncModel(this._modelService, resource);
    }
    async computeWordRanges(resource, range) {
        const model = this._modelService.getModel(resource);
        if (!model) {
            return Promise.resolve(null);
        }
        const wordDefRegExp = this._languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        const worker = await this._workerWithResources([
            resource
        ]);
        return worker.$computeWordRanges(resource.toString(), range, wordDef, wordDefFlags);
    }
    async findSectionHeaders(uri, options) {
        const worker = await this._workerWithResources([
            uri
        ]);
        return worker.$findSectionHeaders(uri.toString(), options);
    }
    async computeDefaultDocumentColors(uri) {
        const worker = await this._workerWithResources([
            uri
        ]);
        return worker.$computeDefaultDocumentColors(uri.toString());
    }
    async _workerWithResources(resources) {
        let forceLargeModels = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const worker = await this._workerManager.withWorker();
        return await worker.workerWithSyncedResources(resources, forceLargeModels);
    }
    constructor(workerDescriptor, modelService, configurationService, logService, _languageConfigurationService, languageFeaturesService){
        super();
        this._languageConfigurationService = _languageConfigurationService;
        this._modelService = modelService;
        this._workerManager = this._register(new WorkerManager(workerDescriptor, this._modelService));
        this._logService = logService;
        // register default link-provider and default completions-provider
        this._register(languageFeaturesService.linkProvider.register({
            language: '*',
            hasAccessToAllModels: true
        }, {
            provideLinks: async (model, token)=>{
                if (!canSyncModel(this._modelService, model.uri)) {
                    return Promise.resolve({
                        links: []
                    }); // File too large
                }
                const worker = await this._workerWithResources([
                    model.uri
                ]);
                const links = await worker.$computeLinks(model.uri.toString());
                return links && {
                    links
                };
            }
        }));
        this._register(languageFeaturesService.completionProvider.register('*', new WordBasedCompletionItemProvider(this._workerManager, configurationService, this._modelService, this._languageConfigurationService, this._logService)));
    }
};
EditorWorkerService = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IModelService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textResourceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITextResourceConfigurationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILogService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$languageConfigurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageConfigurationService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"])
], EditorWorkerService);
;
class WordBasedCompletionItemProvider {
    async provideCompletionItems(model, position) {
        const config = this._configurationService.getValue(model.uri, position, 'editor');
        if (config.wordBasedSuggestions === 'off') {
            return undefined;
        }
        const models = [];
        if (config.wordBasedSuggestions === 'currentDocument') {
            // only current file and only if not too large
            if (canSyncModel(this._modelService, model.uri)) {
                models.push(model.uri);
            }
        } else {
            // either all files or files of same language
            for (const candidate of this._modelService.getModels()){
                if (!canSyncModel(this._modelService, candidate.uri)) {
                    continue;
                }
                if (candidate === model) {
                    models.unshift(candidate.uri);
                } else if (config.wordBasedSuggestions === 'allDocuments' || candidate.getLanguageId() === model.getLanguageId()) {
                    models.push(candidate.uri);
                }
            }
        }
        if (models.length === 0) {
            return undefined; // File too large, no other files
        }
        const wordDefRegExp = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        const word = model.getWordAtPosition(position);
        const replace = !word ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].fromPositions(position) : new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
        const insert = replace.setEndPosition(position.lineNumber, position.column);
        // Trace logging about the word and replace/insert ranges
        this.logService.trace('[WordBasedCompletionItemProvider]', 'word: "'.concat((word === null || word === void 0 ? void 0 : word.word) || '', '", wordDef: "').concat(wordDefRegExp, '", replace: [').concat(replace.toString(), "], insert: [").concat(insert.toString(), "]"));
        const client = await this._workerManager.withWorker();
        const data = await client.textualSuggest(models, word === null || word === void 0 ? void 0 : word.word, wordDefRegExp);
        if (!data) {
            return undefined;
        }
        return {
            duration: data.duration,
            suggestions: data.words.map((word)=>{
                return {
                    kind: 18 /* languages.CompletionItemKind.Text */ ,
                    label: word,
                    insertText: word,
                    range: {
                        insert,
                        replace
                    }
                };
            })
        };
    }
    constructor(workerManager, configurationService, modelService, languageConfigurationService, logService){
        this.languageConfigurationService = languageConfigurationService;
        this.logService = logService;
        this._debugDisplayName = 'wordbasedCompletions';
        this._workerManager = workerManager;
        this._configurationService = configurationService;
        this._modelService = modelService;
    }
}
let WorkerManager = class WorkerManager extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    dispose() {
        if (this._editorWorkerClient) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
        super.dispose();
    }
    /**
     * Check if the model service has no more models and stop the worker if that is the case.
     */ _checkStopEmptyWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const models = this._modelService.getModels();
        if (models.length === 0) {
            // There are no more models => nothing possible for me to do
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    /**
     * Check if the worker has been idle for a while and then stop it.
     */ _checkStopIdleWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const timeSinceLastWorkerUsedTime = new Date().getTime() - this._lastWorkerUsedTime;
        if (timeSinceLastWorkerUsedTime > STOP_WORKER_DELTA_TIME_MS) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    withWorker() {
        this._lastWorkerUsedTime = new Date().getTime();
        if (!this._editorWorkerClient) {
            this._editorWorkerClient = new EditorWorkerClient(this._workerDescriptor, false, this._modelService);
        }
        return Promise.resolve(this._editorWorkerClient);
    }
    constructor(_workerDescriptor, modelService){
        super();
        this._workerDescriptor = _workerDescriptor;
        this._modelService = modelService;
        this._editorWorkerClient = null;
        this._lastWorkerUsedTime = new Date().getTime();
        const stopWorkerInterval = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowIntervalTimer"]());
        stopWorkerInterval.cancelAndSet(()=>this._checkStopIdleWorker(), Math.round(STOP_WORKER_DELTA_TIME_MS / 2), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"]);
        this._register(this._modelService.onModelRemoved((_)=>this._checkStopEmptyWorker()));
    }
};
WorkerManager = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IModelService"])
], WorkerManager);
class SynchronousWorkerClient {
    dispose() {
        this._instance.dispose();
    }
    setChannel(channel, handler) {
        throw new Error("Not supported");
    }
    constructor(instance){
        this._instance = instance;
        this.proxy = this._instance;
    }
}
let EditorWorkerClient = class EditorWorkerClient extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    // foreign host request
    fhr(method, args) {
        throw new Error("Not implemented!");
    }
    _getOrCreateWorker() {
        if (!this._worker) {
            try {
                this._worker = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$webWorkerFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWebWorker"])(this._workerDescriptorOrWorker));
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$editorWorkerHost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorWorkerHost"].setChannel(this._worker, this._createEditorWorkerHost());
            } catch (err) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$worker$2f$webWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logOnceWebWorkerWarning"])(err);
                this._worker = this._createFallbackLocalWorker();
            }
        }
        return this._worker;
    }
    async _getProxy() {
        try {
            const proxy = this._getOrCreateWorker().proxy;
            await proxy.$ping();
            return proxy;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$worker$2f$webWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logOnceWebWorkerWarning"])(err);
            this._worker = this._createFallbackLocalWorker();
            return this._worker.proxy;
        }
    }
    _createFallbackLocalWorker() {
        return new SynchronousWorkerClient(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$editorWebWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorWorker"](null));
    }
    _createEditorWorkerHost() {
        return {
            $fhr: (method, args)=>this.fhr(method, args)
        };
    }
    _getOrCreateModelManager(proxy) {
        if (!this._modelManager) {
            this._modelManager = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textModelSync$2f$textModelSync$2e$impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkerTextModelSyncClient"](proxy, this._modelService, this._keepIdleModels));
        }
        return this._modelManager;
    }
    async workerWithSyncedResources(resources) {
        let forceLargeModels = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this._disposed) {
            return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canceled"])());
        }
        const proxy = await this._getProxy();
        this._getOrCreateModelManager(proxy).ensureSyncedResources(resources, forceLargeModels);
        return proxy;
    }
    async textualSuggest(resources, leadingWord, wordDefRegExp) {
        const proxy = await this.workerWithSyncedResources(resources);
        const wordDef = wordDefRegExp.source;
        const wordDefFlags = wordDefRegExp.flags;
        return proxy.$textualSuggest(resources.map((r)=>r.toString()), leadingWord, wordDef, wordDefFlags);
    }
    dispose() {
        super.dispose();
        this._disposed = true;
    }
    constructor(_workerDescriptorOrWorker, keepIdleModels, modelService){
        super();
        this._workerDescriptorOrWorker = _workerDescriptorOrWorker;
        this._disposed = false;
        this._modelService = modelService;
        this._keepIdleModels = keepIdleModels;
        this._worker = null;
        this._modelManager = null;
    }
};
EditorWorkerClient = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IModelService"])
], EditorWorkerClient);
;
 //# sourceMappingURL=editorWorkerService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/abstractCodeEditorService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractCodeEditorService",
    ()=>AbstractCodeEditorService,
    "GlobalStyleSheet",
    ()=>GlobalStyleSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
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
let AbstractCodeEditorService = class AbstractCodeEditorService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    willCreateCodeEditor() {
        this._onWillCreateCodeEditor.fire();
    }
    addCodeEditor(editor) {
        this._codeEditors[editor.getId()] = editor;
        this._onCodeEditorAdd.fire(editor);
    }
    removeCodeEditor(editor) {
        if (delete this._codeEditors[editor.getId()]) {
            this._onCodeEditorRemove.fire(editor);
        }
    }
    listCodeEditors() {
        return Object.keys(this._codeEditors).map((id)=>this._codeEditors[id]);
    }
    willCreateDiffEditor() {
        this._onWillCreateDiffEditor.fire();
    }
    addDiffEditor(editor) {
        this._diffEditors[editor.getId()] = editor;
        this._onDiffEditorAdd.fire(editor);
    }
    listDiffEditors() {
        return Object.keys(this._diffEditors).map((id)=>this._diffEditors[id]);
    }
    getFocusedCodeEditor() {
        let editorWithWidgetFocus = null;
        const editors = this.listCodeEditors();
        for (const editor of editors){
            if (editor.hasTextFocus()) {
                // bingo!
                return editor;
            }
            if (editor.hasWidgetFocus()) {
                editorWithWidgetFocus = editor;
            }
        }
        return editorWithWidgetFocus;
    }
    removeDecorationType(key) {
        const provider = this._decorationOptionProviders.get(key);
        if (provider) {
            provider.refCount--;
            if (provider.refCount <= 0) {
                this._decorationOptionProviders.delete(key);
                provider.dispose();
                this.listCodeEditors().forEach((ed)=>ed.removeDecorationsByType(key));
            }
        }
    }
    setModelProperty(resource, key, value) {
        const key1 = resource.toString();
        let dest;
        if (this._modelProperties.has(key1)) {
            dest = this._modelProperties.get(key1);
        } else {
            dest = new Map();
            this._modelProperties.set(key1, dest);
        }
        dest.set(key, value);
    }
    getModelProperty(resource, key) {
        const key1 = resource.toString();
        if (this._modelProperties.has(key1)) {
            const innerMap = this._modelProperties.get(key1);
            return innerMap.get(key);
        }
        return undefined;
    }
    async openCodeEditor(input, source, sideBySide) {
        for (const handler of this._codeEditorOpenHandlers){
            const candidate = await handler(input, source, sideBySide);
            if (candidate !== null) {
                return candidate;
            }
        }
        return null;
    }
    registerCodeEditorOpenHandler(handler) {
        const rm = this._codeEditorOpenHandlers.unshift(handler);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(rm);
    }
    constructor(_themeService){
        super();
        this._themeService = _themeService;
        this._onWillCreateCodeEditor = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onCodeEditorAdd = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onCodeEditorAdd = this._onCodeEditorAdd.event;
        this._onCodeEditorRemove = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onCodeEditorRemove = this._onCodeEditorRemove.event;
        this._onWillCreateDiffEditor = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDiffEditorAdd = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDiffEditorAdd = this._onDiffEditorAdd.event;
        this._onDiffEditorRemove = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDiffEditorRemove = this._onDiffEditorRemove.event;
        this._decorationOptionProviders = new Map();
        this._codeEditorOpenHandlers = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this._modelProperties = new Map();
        this._codeEditors = Object.create(null);
        this._diffEditors = Object.create(null);
        this._globalStyleSheet = null;
    }
};
AbstractCodeEditorService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IThemeService"])
], AbstractCodeEditorService);
;
class GlobalStyleSheet {
    constructor(styleSheet){
        this._styleSheet = styleSheet;
    }
} //# sourceMappingURL=abstractCodeEditorService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/hoverService/hoverWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "HoverWidget",
    ()=>HoverWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
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
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
let HoverWidget = class HoverWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    get _targetWindow() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](this._target.targetElements[0]);
    }
    get _targetDocumentElement() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](this._target.targetElements[0]).document.documentElement;
    }
    get isDisposed() {
        return this._isDisposed;
    }
    get isMouseIn() {
        return this._lockMouseTracker.isMouseIn;
    }
    get domNode() {
        return this._hover.containerDomNode;
    }
    get onDispose() {
        return this._onDispose.event;
    }
    get onRequestLayout() {
        return this._onRequestLayout.event;
    }
    get anchor() {
        return this._hoverPosition === 2 /* HoverPosition.BELOW */  ? 0 /* AnchorPosition.BELOW */  : 1 /* AnchorPosition.ABOVE */ ;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    /**
     * Whether the hover is "locked" by holding the alt/option key. When locked, the hover will not
     * hide and can be hovered regardless of whether the `hideOnHover` hover option is set.
     */ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        if (this._isLocked === value) {
            return;
        }
        this._isLocked = value;
        this._hoverContainer.classList.toggle('locked', this._isLocked);
    }
    addFocusTrap() {
        if (!this._enableFocusTraps || this._addedFocusTrap) {
            return;
        }
        this._addedFocusTrap = true;
        // Add a hover tab loop if the hover has at least one element with a valid tabIndex
        const firstContainerFocusElement = this._hover.containerDomNode;
        const lastContainerFocusElement = this.findLastFocusableChild(this._hover.containerDomNode);
        if (lastContainerFocusElement) {
            const beforeContainerFocusElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepend"](this._hoverContainer, $('div'));
            const afterContainerFocusElement = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this._hoverContainer, $('div'));
            beforeContainerFocusElement.tabIndex = 0;
            afterContainerFocusElement.tabIndex = 0;
            this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](afterContainerFocusElement, 'focus', (e)=>{
                firstContainerFocusElement.focus();
                e.preventDefault();
            }));
            this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](beforeContainerFocusElement, 'focus', (e)=>{
                lastContainerFocusElement.focus();
                e.preventDefault();
            }));
        }
    }
    findLastFocusableChild(root) {
        if (root.hasChildNodes()) {
            for(let i = 0; i < root.childNodes.length; i++){
                const node = root.childNodes.item(root.childNodes.length - i - 1);
                if (node.nodeType === node.ELEMENT_NODE) {
                    const parsedNode = node;
                    if (typeof parsedNode.tabIndex === 'number' && parsedNode.tabIndex >= 0) {
                        return parsedNode;
                    }
                }
                const recursivelyFoundElement = this.findLastFocusableChild(node);
                if (recursivelyFoundElement) {
                    return recursivelyFoundElement;
                }
            }
        }
        return undefined;
    }
    render(container) {
        var _this__keybindingService_lookupKeybinding;
        container.appendChild(this._hoverContainer);
        const hoverFocused = this._hoverContainer.contains(this._hoverContainer.ownerDocument.activeElement);
        const accessibleViewHint = hoverFocused && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHoverAccessibleViewHint"])(this._configurationService.getValue('accessibility.verbosity.hover') === true && this._accessibilityService.isScreenReaderOptimized(), (_this__keybindingService_lookupKeybinding = this._keybindingService.lookupKeybinding('editor.action.accessibleView')) === null || _this__keybindingService_lookupKeybinding === void 0 ? void 0 : _this__keybindingService_lookupKeybinding.getAriaLabel());
        if (accessibleViewHint) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"])(accessibleViewHint);
        }
        this.layout();
        this.addFocusTrap();
    }
    layout() {
        this._hover.containerDomNode.classList.remove('right-aligned');
        this._hover.contentsDomNode.style.maxHeight = '';
        const getZoomAccountedBoundingClientRect = (e)=>{
            const zoom = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodeZoomLevel"](e);
            const boundingRect = e.getBoundingClientRect();
            return {
                top: boundingRect.top * zoom,
                bottom: boundingRect.bottom * zoom,
                right: boundingRect.right * zoom,
                left: boundingRect.left * zoom
            };
        };
        const targetBounds = this._target.targetElements.map((e)=>getZoomAccountedBoundingClientRect(e));
        const { top, right, bottom, left } = targetBounds[0];
        const width = right - left;
        const height = bottom - top;
        const targetRect = {
            top,
            right,
            bottom,
            left,
            width,
            height,
            center: {
                x: left + width / 2,
                y: top + height / 2
            }
        };
        // These calls adjust the position depending on spacing.
        this.adjustHorizontalHoverPosition(targetRect);
        this.adjustVerticalHoverPosition(targetRect);
        // This call limits the maximum height of the hover.
        this.adjustHoverMaxHeight(targetRect);
        // Offset the hover position if there is a pointer so it aligns with the target element
        this._hoverContainer.style.padding = '';
        this._hoverContainer.style.margin = '';
        if (this._hoverPointer) {
            switch(this._hoverPosition){
                case 1 /* HoverPosition.RIGHT */ :
                    targetRect.left += 3 /* Constants.PointerSize */ ;
                    targetRect.right += 3 /* Constants.PointerSize */ ;
                    this._hoverContainer.style.paddingLeft = "".concat(3 /* Constants.PointerSize */ , "px");
                    this._hoverContainer.style.marginLeft = "".concat(-3 /* Constants.PointerSize */ , "px");
                    break;
                case 0 /* HoverPosition.LEFT */ :
                    targetRect.left -= 3 /* Constants.PointerSize */ ;
                    targetRect.right -= 3 /* Constants.PointerSize */ ;
                    this._hoverContainer.style.paddingRight = "".concat(3 /* Constants.PointerSize */ , "px");
                    this._hoverContainer.style.marginRight = "".concat(-3 /* Constants.PointerSize */ , "px");
                    break;
                case 2 /* HoverPosition.BELOW */ :
                    targetRect.top += 3 /* Constants.PointerSize */ ;
                    targetRect.bottom += 3 /* Constants.PointerSize */ ;
                    this._hoverContainer.style.paddingTop = "".concat(3 /* Constants.PointerSize */ , "px");
                    this._hoverContainer.style.marginTop = "".concat(-3 /* Constants.PointerSize */ , "px");
                    break;
                case 3 /* HoverPosition.ABOVE */ :
                    targetRect.top -= 3 /* Constants.PointerSize */ ;
                    targetRect.bottom -= 3 /* Constants.PointerSize */ ;
                    this._hoverContainer.style.paddingBottom = "".concat(3 /* Constants.PointerSize */ , "px");
                    this._hoverContainer.style.marginBottom = "".concat(-3 /* Constants.PointerSize */ , "px");
                    break;
            }
            targetRect.center.x = targetRect.left + width / 2;
            targetRect.center.y = targetRect.top + height / 2;
        }
        this.computeXCordinate(targetRect);
        this.computeYCordinate(targetRect);
        if (this._hoverPointer) {
            // reset
            this._hoverPointer.classList.remove('top');
            this._hoverPointer.classList.remove('left');
            this._hoverPointer.classList.remove('right');
            this._hoverPointer.classList.remove('bottom');
            this.setHoverPointerPosition(targetRect);
        }
        this._hover.onContentsChanged();
    }
    computeXCordinate(target) {
        const hoverWidth = this._hover.containerDomNode.clientWidth + 2 /* Constants.HoverBorderWidth */ ;
        if (this._target.x !== undefined) {
            this._x = this._target.x;
        } else if (this._hoverPosition === 1 /* HoverPosition.RIGHT */ ) {
            this._x = target.right;
        } else if (this._hoverPosition === 0 /* HoverPosition.LEFT */ ) {
            this._x = target.left - hoverWidth;
        } else {
            if (this._hoverPointer) {
                this._x = target.center.x - this._hover.containerDomNode.clientWidth / 2;
            } else {
                this._x = target.left;
            }
            // Hover is going beyond window towards right end
            if (this._x + hoverWidth >= this._targetDocumentElement.clientWidth) {
                this._hover.containerDomNode.classList.add('right-aligned');
                this._x = Math.max(this._targetDocumentElement.clientWidth - hoverWidth - 2 /* Constants.HoverWindowEdgeMargin */ , this._targetDocumentElement.clientLeft);
            }
        }
        // Hover is going beyond window towards left end
        if (this._x < this._targetDocumentElement.clientLeft) {
            this._x = target.left + 2 /* Constants.HoverWindowEdgeMargin */ ;
        }
    }
    computeYCordinate(target) {
        if (this._target.y !== undefined) {
            this._y = this._target.y;
        } else if (this._hoverPosition === 3 /* HoverPosition.ABOVE */ ) {
            this._y = target.top;
        } else if (this._hoverPosition === 2 /* HoverPosition.BELOW */ ) {
            this._y = target.bottom - 2;
        } else {
            if (this._hoverPointer) {
                this._y = target.center.y + this._hover.containerDomNode.clientHeight / 2;
            } else {
                this._y = target.bottom;
            }
        }
        // Hover on bottom is going beyond window
        if (this._y > this._targetWindow.innerHeight) {
            this._y = target.bottom;
        }
    }
    adjustHorizontalHoverPosition(target) {
        // Do not adjust horizontal hover position if x cordiante is provided
        if (this._target.x !== undefined) {
            return;
        }
        const hoverPointerOffset = this._hoverPointer ? 3 /* Constants.PointerSize */  : 0;
        // When force position is enabled, restrict max width
        if (this._forcePosition) {
            const padding = hoverPointerOffset + 2 /* Constants.HoverBorderWidth */ ;
            if (this._hoverPosition === 1 /* HoverPosition.RIGHT */ ) {
                this._hover.containerDomNode.style.maxWidth = "".concat(this._targetDocumentElement.clientWidth - target.right - padding, "px");
            } else if (this._hoverPosition === 0 /* HoverPosition.LEFT */ ) {
                this._hover.containerDomNode.style.maxWidth = "".concat(target.left - padding, "px");
            }
            return;
        }
        // Position hover on right to target
        if (this._hoverPosition === 1 /* HoverPosition.RIGHT */ ) {
            const roomOnRight = this._targetDocumentElement.clientWidth - target.right;
            // Hover on the right is going beyond window.
            if (roomOnRight < this._hover.containerDomNode.clientWidth + hoverPointerOffset) {
                const roomOnLeft = target.left;
                // There's enough room on the left, flip the hover position
                if (roomOnLeft >= this._hover.containerDomNode.clientWidth + hoverPointerOffset) {
                    this._hoverPosition = 0 /* HoverPosition.LEFT */ ;
                } else {
                    this._hoverPosition = 2 /* HoverPosition.BELOW */ ;
                }
            }
        } else if (this._hoverPosition === 0 /* HoverPosition.LEFT */ ) {
            const roomOnLeft = target.left;
            // Hover on the left is going beyond window.
            if (roomOnLeft < this._hover.containerDomNode.clientWidth + hoverPointerOffset) {
                const roomOnRight = this._targetDocumentElement.clientWidth - target.right;
                // There's enough room on the right, flip the hover position
                if (roomOnRight >= this._hover.containerDomNode.clientWidth + hoverPointerOffset) {
                    this._hoverPosition = 1 /* HoverPosition.RIGHT */ ;
                } else {
                    this._hoverPosition = 2 /* HoverPosition.BELOW */ ;
                }
            }
            // Hover on the left is going beyond window.
            if (target.left - this._hover.containerDomNode.clientWidth - hoverPointerOffset <= this._targetDocumentElement.clientLeft) {
                this._hoverPosition = 1 /* HoverPosition.RIGHT */ ;
            }
        }
    }
    adjustVerticalHoverPosition(target) {
        // Do not adjust vertical hover position if the y coordinate is provided
        // or the position is forced
        if (this._target.y !== undefined || this._forcePosition) {
            return;
        }
        const hoverPointerOffset = this._hoverPointer ? 3 /* Constants.PointerSize */  : 0;
        // Position hover on top of the target
        if (this._hoverPosition === 3 /* HoverPosition.ABOVE */ ) {
            // Hover on top is going beyond window
            if (target.top - this._hover.containerDomNode.clientHeight - hoverPointerOffset < 0) {
                this._hoverPosition = 2 /* HoverPosition.BELOW */ ;
            }
        } else if (this._hoverPosition === 2 /* HoverPosition.BELOW */ ) {
            // Hover on bottom is going beyond window
            if (target.bottom + this._hover.containerDomNode.clientHeight + hoverPointerOffset > this._targetWindow.innerHeight) {
                this._hoverPosition = 3 /* HoverPosition.ABOVE */ ;
            }
        }
    }
    adjustHoverMaxHeight(target) {
        let maxHeight = this._targetWindow.innerHeight * this._maxHeightRatioRelativeToWindow;
        // When force position is enabled, restrict max height
        if (this._forcePosition) {
            const padding = (this._hoverPointer ? 3 /* Constants.PointerSize */  : 0) + 2 /* Constants.HoverBorderWidth */ ;
            if (this._hoverPosition === 3 /* HoverPosition.ABOVE */ ) {
                maxHeight = Math.min(maxHeight, target.top - padding);
            } else if (this._hoverPosition === 2 /* HoverPosition.BELOW */ ) {
                maxHeight = Math.min(maxHeight, this._targetWindow.innerHeight - target.bottom - padding);
            }
        }
        this._hover.containerDomNode.style.maxHeight = "".concat(maxHeight, "px");
        if (this._hover.contentsDomNode.clientHeight < this._hover.contentsDomNode.scrollHeight) {
            // Add padding for a vertical scrollbar
            const extraRightPadding = "".concat(this._hover.scrollbar.options.verticalScrollbarSize, "px");
            if (this._hover.contentsDomNode.style.paddingRight !== extraRightPadding) {
                this._hover.contentsDomNode.style.paddingRight = extraRightPadding;
            }
        }
    }
    setHoverPointerPosition(target) {
        if (!this._hoverPointer) {
            return;
        }
        switch(this._hoverPosition){
            case 0 /* HoverPosition.LEFT */ :
            case 1 /* HoverPosition.RIGHT */ :
                {
                    this._hoverPointer.classList.add(this._hoverPosition === 0 /* HoverPosition.LEFT */  ? 'right' : 'left');
                    const hoverHeight = this._hover.containerDomNode.clientHeight;
                    // If hover is taller than target, then show the pointer at the center of target
                    if (hoverHeight > target.height) {
                        this._hoverPointer.style.top = "".concat(target.center.y - (this._y - hoverHeight) - 3 /* Constants.PointerSize */ , "px");
                    } else {
                        this._hoverPointer.style.top = "".concat(Math.round(hoverHeight / 2) - 3 /* Constants.PointerSize */ , "px");
                    }
                    break;
                }
            case 3 /* HoverPosition.ABOVE */ :
            case 2 /* HoverPosition.BELOW */ :
                {
                    this._hoverPointer.classList.add(this._hoverPosition === 3 /* HoverPosition.ABOVE */  ? 'bottom' : 'top');
                    const hoverWidth = this._hover.containerDomNode.clientWidth;
                    // Position pointer at the center of the hover
                    let pointerLeftPosition = Math.round(hoverWidth / 2) - 3 /* Constants.PointerSize */ ;
                    // If pointer goes beyond target then position it at the center of the target
                    const pointerX = this._x + pointerLeftPosition;
                    if (pointerX < target.left || pointerX > target.right) {
                        pointerLeftPosition = target.center.x - this._x - 3 /* Constants.PointerSize */ ;
                    }
                    this._hoverPointer.style.left = "".concat(pointerLeftPosition, "px");
                    break;
                }
        }
    }
    focus() {
        this._hover.containerDomNode.focus();
    }
    dispose() {
        if (!this._isDisposed) {
            var _this__target_dispose, _this__target;
            this._onDispose.fire();
            (_this__target_dispose = (_this__target = this._target).dispose) === null || _this__target_dispose === void 0 ? void 0 : _this__target_dispose.call(_this__target);
            this._hoverContainer.remove();
            this._messageListeners.dispose();
            super.dispose();
        }
        this._isDisposed = true;
    }
    constructor(options, _keybindingService, _configurationService, _openerService, _instantiationService, _accessibilityService){
        var _options_appearance, _options_appearance1, _options_appearance2, _options_position, _options_appearance3, _options_position1, _options_appearance4;
        super();
        this._keybindingService = _keybindingService;
        this._configurationService = _configurationService;
        this._openerService = _openerService;
        this._instantiationService = _instantiationService;
        this._accessibilityService = _accessibilityService;
        this._messageListeners = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._isDisposed = false;
        this._forcePosition = false;
        this._x = 0;
        this._y = 0;
        this._isLocked = false;
        this._enableFocusTraps = false;
        this._addedFocusTrap = false;
        this._maxHeightRatioRelativeToWindow = 0.5;
        this._onDispose = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onRequestLayout = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._linkHandler = options.linkHandler || ((url)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openLinkFromMarkdown"])(this._openerService, url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(options.content) ? options.content.isTrusted : undefined);
        });
        this._target = 'targetElements' in options.target ? options.target : new ElementHoverTarget(options.target);
        this._hoverPointer = ((_options_appearance = options.appearance) === null || _options_appearance === void 0 ? void 0 : _options_appearance.showPointer) ? $('div.workbench-hover-pointer') : undefined;
        this._hover = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverWidget"](!((_options_appearance1 = options.appearance) === null || _options_appearance1 === void 0 ? void 0 : _options_appearance1.skipFadeInAnimation)));
        this._hover.containerDomNode.classList.add('workbench-hover');
        if ((_options_appearance2 = options.appearance) === null || _options_appearance2 === void 0 ? void 0 : _options_appearance2.compact) {
            this._hover.containerDomNode.classList.add('workbench-hover', 'compact');
        }
        if (options.additionalClasses) {
            this._hover.containerDomNode.classList.add(...options.additionalClasses);
        }
        if ((_options_position = options.position) === null || _options_position === void 0 ? void 0 : _options_position.forcePosition) {
            this._forcePosition = true;
        }
        if (options.trapFocus) {
            this._enableFocusTraps = true;
        }
        const maxHeightRatio = (_options_appearance3 = options.appearance) === null || _options_appearance3 === void 0 ? void 0 : _options_appearance3.maxHeightRatio;
        if (maxHeightRatio !== undefined && maxHeightRatio > 0 && maxHeightRatio <= 1) {
            this._maxHeightRatioRelativeToWindow = maxHeightRatio;
        }
        // Default to position above when the position is unspecified or a mouse event
        this._hoverPosition = ((_options_position1 = options.position) === null || _options_position1 === void 0 ? void 0 : _options_position1.hoverPosition) === undefined ? 3 /* HoverPosition.ABOVE */  : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(options.position.hoverPosition) ? options.position.hoverPosition : 2 /* HoverPosition.BELOW */ ;
        // Don't allow mousedown out of the widget, otherwise preventDefault will call and text will
        // not be selected.
        this.onmousedown(this._hover.containerDomNode, (e)=>e.stopPropagation());
        // Hide hover on escape
        this.onkeydown(this._hover.containerDomNode, (e)=>{
            if (e.equals(9 /* KeyCode.Escape */ )) {
                this.dispose();
            }
        });
        // Hide when the window loses focus
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this._targetWindow, 'blur', ()=>this.dispose()));
        const rowElement = $('div.hover-row.markdown-hover');
        const contentsElement = $('div.hover-contents');
        if (typeof options.content === 'string') {
            contentsElement.textContent = options.content;
            contentsElement.style.whiteSpace = 'pre-wrap';
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](options.content)) {
            contentsElement.appendChild(options.content);
            contentsElement.classList.add('html-hover-contents');
        } else {
            const markdown = options.content;
            const mdRenderer = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$markdownRenderer$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRenderer"], {
                codeBlockFontFamily: this._configurationService.getValue('editor').fontFamily || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_FONT_DEFAULTS"].fontFamily
            });
            const { element, dispose } = mdRenderer.render(markdown, {
                actionHandler: (content)=>this._linkHandler(content),
                asyncRenderCallback: ()=>{
                    contentsElement.classList.add('code-hover-contents');
                    this.layout();
                    // This changes the dimensions of the hover so trigger a layout
                    this._onRequestLayout.fire();
                }
            });
            contentsElement.appendChild(element);
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(dispose));
        }
        rowElement.appendChild(contentsElement);
        this._hover.contentsDomNode.appendChild(rowElement);
        if (options.actions && options.actions.length > 0) {
            const statusBarElement = $('div.hover-row.status-bar');
            const actionsElement = $('div.actions');
            options.actions.forEach((action)=>{
                const keybinding = this._keybindingService.lookupKeybinding(action.commandId);
                const keybindingLabel = keybinding ? keybinding.getLabel() : null;
                this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverAction"].render(actionsElement, {
                    label: action.label,
                    commandId: action.commandId,
                    run: (e)=>{
                        action.run(e);
                        this.dispose();
                    },
                    iconClass: action.iconClass
                }, keybindingLabel));
            });
            statusBarElement.appendChild(actionsElement);
            this._hover.containerDomNode.appendChild(statusBarElement);
        }
        this._hoverContainer = $('div.workbench-hover-container');
        if (this._hoverPointer) {
            this._hoverContainer.appendChild(this._hoverPointer);
        }
        this._hoverContainer.appendChild(this._hover.containerDomNode);
        // Determine whether to hide on hover
        let hideOnHover;
        if (options.actions && options.actions.length > 0) {
            // If there are actions, require hover so they can be accessed
            hideOnHover = false;
        } else {
            var _options_persistence;
            if (((_options_persistence = options.persistence) === null || _options_persistence === void 0 ? void 0 : _options_persistence.hideOnHover) === undefined) {
                // When unset, will default to true when it's a string or when it's markdown that
                // appears to have a link using a naive check for '](' and '</a>'
                hideOnHover = typeof options.content === 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(options.content) && !options.content.value.includes('](') && !options.content.value.includes('</a>');
            } else {
                // It's set explicitly
                hideOnHover = options.persistence.hideOnHover;
            }
        }
        // Show the hover hint if needed
        if ((_options_appearance4 = options.appearance) === null || _options_appearance4 === void 0 ? void 0 : _options_appearance4.showHoverHint) {
            const statusBarElement = $('div.hover-row.status-bar');
            const infoElement = $('div.info');
            infoElement.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(74, 'Hold {0} key to mouse over', __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? 'Option' : 'Alt');
            statusBarElement.appendChild(infoElement);
            this._hover.containerDomNode.appendChild(statusBarElement);
        }
        const mouseTrackerTargets = [
            ...this._target.targetElements
        ];
        if (!hideOnHover) {
            mouseTrackerTargets.push(this._hoverContainer);
        }
        const mouseTracker = this._register(new CompositeMouseTracker(mouseTrackerTargets));
        this._register(mouseTracker.onMouseOut(()=>{
            if (!this._isLocked) {
                this.dispose();
            }
        }));
        // Setup another mouse tracker when hideOnHover is set in order to track the hover as well
        // when it is locked. This ensures the hover will hide on mouseout after alt has been
        // released to unlock the element.
        if (hideOnHover) {
            const mouseTracker2Targets = [
                ...this._target.targetElements,
                this._hoverContainer
            ];
            this._lockMouseTracker = this._register(new CompositeMouseTracker(mouseTracker2Targets));
            this._register(this._lockMouseTracker.onMouseOut(()=>{
                if (!this._isLocked) {
                    this.dispose();
                }
            }));
        } else {
            this._lockMouseTracker = mouseTracker;
        }
    }
};
HoverWidget = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOpenerService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IAccessibilityService"])
], HoverWidget);
;
class CompositeMouseTracker extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    get onMouseOut() {
        return this._onMouseOut.event;
    }
    get isMouseIn() {
        return this._isMouseIn;
    }
    _onTargetMouseOver() {
        this._isMouseIn = true;
        this._mouseTimer.clear();
    }
    _onTargetMouseLeave() {
        this._isMouseIn = false;
        // Evaluate whether the mouse is still outside asynchronously such that other mouse targets
        // have the opportunity to first their mouse in event.
        this._mouseTimer.value = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"](()=>this._fireIfMouseOutside(), this._eventDebounceDelay);
    }
    _fireIfMouseOutside() {
        if (!this._isMouseIn) {
            this._onMouseOut.fire();
        }
    }
    /**
     * @param _elements The target elements to track mouse in/out events on.
     * @param _eventDebounceDelay The delay in ms to debounce the event firing. This is used to
     * allow a short period for the mouse to move into the hover or a nearby target element. For
     * example hovering a scroll bar will not hide the hover immediately.
     */ constructor(_elements, _eventDebounceDelay = 200){
        super();
        this._elements = _elements;
        this._eventDebounceDelay = _eventDebounceDelay;
        this._isMouseIn = true;
        this._mouseTimer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this._onMouseOut = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        for (const element of this._elements){
            this.onmouseover(element, ()=>this._onTargetMouseOver());
            this.onmouseleave(element, ()=>this._onTargetMouseLeave());
        }
    }
}
class ElementHoverTarget {
    dispose() {}
    constructor(_element){
        this._element = _element;
        this.targetElements = [
            this._element
        ];
    }
} //# sourceMappingURL=hoverWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/hoverService/updatableHoverWidget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ManagedHoverWidget",
    ()=>ManagedHoverWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
class ManagedHoverWidget {
    async update(content, focus, options) {
        if (this._cancellationTokenSource) {
            // there's an computation ongoing, cancel it
            this._cancellationTokenSource.dispose(true);
            this._cancellationTokenSource = undefined;
        }
        if (this.isDisposed) {
            return;
        }
        let resolvedContent;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(content) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(content) || content === undefined) {
            resolvedContent = content;
        } else {
            // compute the content, potentially long-running
            this._cancellationTokenSource = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
            const token = this._cancellationTokenSource.token;
            let managedContent;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isManagedHoverTooltipMarkdownString"])(content)) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(content.markdown)) {
                    managedContent = content.markdown(token).then((resolvedContent)=>resolvedContent !== null && resolvedContent !== void 0 ? resolvedContent : content.markdownNotSupportedFallback);
                } else {
                    var _content_markdown;
                    managedContent = (_content_markdown = content.markdown) !== null && _content_markdown !== void 0 ? _content_markdown : content.markdownNotSupportedFallback;
                }
            } else {
                managedContent = content.element(token);
            }
            // compute the content
            if (managedContent instanceof Promise) {
                // show 'Loading' if no hover is up yet
                if (!this._hoverWidget) {
                    this.show((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(75, "Loading..."), focus, options);
                }
                resolvedContent = await managedContent;
            } else {
                resolvedContent = managedContent;
            }
            if (this.isDisposed || token.isCancellationRequested) {
                // either the widget has been closed in the meantime
                // or there has been a new call to `update`
                return;
            }
        }
        this.show(resolvedContent, focus, options);
    }
    show(content, focus, options) {
        const oldHoverWidget = this._hoverWidget;
        if (this.hasContent(content)) {
            var _options_appearance;
            const hoverOptions = {
                content,
                target: this.target,
                actions: options === null || options === void 0 ? void 0 : options.actions,
                linkHandler: options === null || options === void 0 ? void 0 : options.linkHandler,
                trapFocus: options === null || options === void 0 ? void 0 : options.trapFocus,
                appearance: {
                    showPointer: this.hoverDelegate.placement === 'element',
                    skipFadeInAnimation: !this.fadeInAnimation || !!oldHoverWidget,
                    showHoverHint: options === null || options === void 0 ? void 0 : (_options_appearance = options.appearance) === null || _options_appearance === void 0 ? void 0 : _options_appearance.showHoverHint
                },
                position: {
                    hoverPosition: 2 /* HoverPosition.BELOW */ 
                }
            };
            this._hoverWidget = this.hoverDelegate.showHover(hoverOptions, focus);
        }
        oldHoverWidget === null || oldHoverWidget === void 0 ? void 0 : oldHoverWidget.dispose();
    }
    hasContent(content) {
        if (!content) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(content)) {
            return !!content.value;
        }
        return true;
    }
    get isDisposed() {
        var _this__hoverWidget;
        return (_this__hoverWidget = this._hoverWidget) === null || _this__hoverWidget === void 0 ? void 0 : _this__hoverWidget.isDisposed;
    }
    dispose() {
        var _this__hoverWidget, _this__cancellationTokenSource;
        (_this__hoverWidget = this._hoverWidget) === null || _this__hoverWidget === void 0 ? void 0 : _this__hoverWidget.dispose();
        (_this__cancellationTokenSource = this._cancellationTokenSource) === null || _this__cancellationTokenSource === void 0 ? void 0 : _this__cancellationTokenSource.dispose(true);
        this._cancellationTokenSource = undefined;
    }
    constructor(hoverDelegate, target, fadeInAnimation){
        this.hoverDelegate = hoverDelegate;
        this.target = target;
        this.fadeInAnimation = fadeInAnimation;
    }
} //# sourceMappingURL=updatableHoverWidget.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/hoverService/hoverService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "HoverService",
    ()=>HoverService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/editorColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$hoverService$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/hoverService/hoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextViewService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$hoverService$2f$updatableHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/hoverService/updatableHoverWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iconLabels.js [app-client] (ecmascript)");
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
let HoverService = class HoverService extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    showInstantHover(options, focus, skipLastFocusedUpdate, dontShow) {
        const hover = this._createHover(options, skipLastFocusedUpdate);
        if (!hover) {
            return undefined;
        }
        this._showHover(hover, options, focus);
        return hover;
    }
    showDelayedHover(options, lifecycleOptions) {
        // Set `id` to default if it's undefined
        if (options.id === undefined) {
            options.id = getHoverIdFromContent(options.content);
        }
        if (!this._currentDelayedHover || this._currentDelayedHoverWasShown) {
            var _this__currentHover;
            // Current hover is locked, reject
            if ((_this__currentHover = this._currentHover) === null || _this__currentHover === void 0 ? void 0 : _this__currentHover.isLocked) {
                return undefined;
            }
            // Identity is the same, return current hover
            if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
                return this._currentHover;
            }
            // Check group identity, if it's the same skip the delay and show the hover immediately
            if (this._currentHover && !this._currentHover.isDisposed && this._currentDelayedHoverGroupId !== undefined && this._currentDelayedHoverGroupId === (lifecycleOptions === null || lifecycleOptions === void 0 ? void 0 : lifecycleOptions.groupId)) {
                return this.showInstantHover({
                    ...options,
                    appearance: {
                        ...options.appearance,
                        skipFadeInAnimation: true
                    }
                });
            }
        } else if (this._currentDelayedHover && getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
            // If the hover is the same but timeout is not finished yet, return the current hover
            return this._currentDelayedHover;
        }
        const hover = this._createHover(options, undefined);
        if (!hover) {
            this._currentDelayedHover = undefined;
            this._currentDelayedHoverWasShown = false;
            this._currentDelayedHoverGroupId = undefined;
            return undefined;
        }
        this._currentDelayedHover = hover;
        this._currentDelayedHoverWasShown = false;
        this._currentDelayedHoverGroupId = lifecycleOptions === null || lifecycleOptions === void 0 ? void 0 : lifecycleOptions.groupId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeout"])(this._configurationService.getValue('workbench.hover.delay')).then(()=>{
            if (hover && !hover.isDisposed) {
                this._currentDelayedHoverWasShown = true;
                this._showHover(hover, options);
            }
        });
        return hover;
    }
    setupDelayedHover(target, options, lifecycleOptions) {
        const resolveHoverOptions = ()=>({
                ...typeof options === 'function' ? options() : options,
                target
            });
        return this._setupDelayedHover(target, resolveHoverOptions, lifecycleOptions);
    }
    setupDelayedHoverAtMouse(target, options, lifecycleOptions) {
        const resolveHoverOptions = (e)=>({
                ...typeof options === 'function' ? options() : options,
                target: {
                    targetElements: [
                        target
                    ],
                    x: e !== undefined ? e.x + 10 : undefined
                }
            });
        return this._setupDelayedHover(target, resolveHoverOptions, lifecycleOptions);
    }
    _setupDelayedHover(target, resolveHoverOptions, lifecycleOptions) {
        const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>{
            this.showDelayedHover(resolveHoverOptions(e), {
                groupId: lifecycleOptions === null || lifecycleOptions === void 0 ? void 0 : lifecycleOptions.groupId
            });
        }));
        if (lifecycleOptions === null || lifecycleOptions === void 0 ? void 0 : lifecycleOptions.setupKeyboardEvents) {
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const evt = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (evt.equals(10 /* KeyCode.Space */ ) || evt.equals(3 /* KeyCode.Enter */ )) {
                    this.showInstantHover(resolveHoverOptions(), true);
                }
            }));
        }
        this._delayedHovers.set(target, {
            show: (focus)=>{
                this.showInstantHover(resolveHoverOptions(), focus);
            }
        });
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this._delayedHovers.delete(target)));
        return store;
    }
    _createHover(options, skipLastFocusedUpdate) {
        var _this__currentHover, _options_persistence, _options_position, _options_persistence1;
        this._currentDelayedHover = undefined;
        if ((_this__currentHover = this._currentHover) === null || _this__currentHover === void 0 ? void 0 : _this__currentHover.isLocked) {
            return undefined;
        }
        // Set `id` to default if it's undefined
        if (options.id === undefined) {
            options.id = getHoverIdFromContent(options.content);
        }
        if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
            return undefined;
        }
        this._currentHoverOptions = options;
        this._lastHoverOptions = options;
        const trapFocus = options.trapFocus || this._accessibilityService.isScreenReaderOptimized();
        const activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
        // HACK, remove this check when #189076 is fixed
        if (!skipLastFocusedUpdate) {
            if (trapFocus && activeElement) {
                if (!activeElement.classList.contains('monaco-hover')) {
                    this._lastFocusedElementBeforeOpen = activeElement;
                }
            } else {
                this._lastFocusedElementBeforeOpen = undefined;
            }
        }
        const hoverDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const hover = this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$hoverService$2f$hoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverWidget"], options);
        if ((_options_persistence = options.persistence) === null || _options_persistence === void 0 ? void 0 : _options_persistence.sticky) {
            hover.isLocked = true;
        }
        // Adjust target position when a mouse event is provided as the hover position
        if (((_options_position = options.position) === null || _options_position === void 0 ? void 0 : _options_position.hoverPosition) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(options.position.hoverPosition)) {
            options.target = {
                targetElements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(options.target) ? [
                    options.target
                ] : options.target.targetElements,
                x: options.position.hoverPosition.x + 10
            };
        }
        hover.onDispose(()=>{
            var _this__currentHover;
            const hoverWasFocused = ((_this__currentHover = this._currentHover) === null || _this__currentHover === void 0 ? void 0 : _this__currentHover.domNode) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestorOfActiveElement"])(this._currentHover.domNode);
            if (hoverWasFocused) {
                var // Required to handle cases such as closing the hover with the escape key
                _this__lastFocusedElementBeforeOpen;
                (_this__lastFocusedElementBeforeOpen = this._lastFocusedElementBeforeOpen) === null || _this__lastFocusedElementBeforeOpen === void 0 ? void 0 : _this__lastFocusedElementBeforeOpen.focus();
            }
            // Only clear the current options if it's the current hover, the current options help
            // reduce flickering when the same hover is shown multiple times
            if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
                this.doHideHover();
            }
            hoverDisposables.dispose();
        }, undefined, hoverDisposables);
        // Set the container explicitly to enable aux window support
        if (!options.container) {
            const targetElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(options.target) ? options.target : options.target.targetElements[0];
            options.container = this._layoutService.getContainer((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(targetElement));
        }
        hover.onRequestLayout(()=>this._contextViewHandler.layout(), undefined, hoverDisposables);
        if ((_options_persistence1 = options.persistence) === null || _options_persistence1 === void 0 ? void 0 : _options_persistence1.sticky) {
            hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(options.container).document, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])(e.target, hover.domNode)) {
                    this.doHideHover();
                }
            }));
        } else {
            if ('targetElements' in options.target) {
                for (const element of options.target.targetElements){
                    hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, ()=>this.hideHover()));
                }
            } else {
                hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(options.target, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, ()=>this.hideHover()));
            }
            const focusedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
            if (focusedElement) {
                const focusedElementDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(focusedElement).document;
                hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(focusedElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                    var _options_persistence;
                    return this._keyDown(e, hover, !!((_options_persistence = options.persistence) === null || _options_persistence === void 0 ? void 0 : _options_persistence.hideOnKeyDown));
                }));
                hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(focusedElementDocument, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                    var _options_persistence;
                    return this._keyDown(e, hover, !!((_options_persistence = options.persistence) === null || _options_persistence === void 0 ? void 0 : _options_persistence.hideOnKeyDown));
                }));
                hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(focusedElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>this._keyUp(e, hover)));
                hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(focusedElementDocument, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>this._keyUp(e, hover)));
            }
        }
        if ('IntersectionObserver' in __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"]) {
            const observer = new IntersectionObserver((e)=>this._intersectionChange(e, hover), {
                threshold: 0
            });
            const firstTargetElement = 'targetElements' in options.target ? options.target.targetElements[0] : options.target;
            observer.observe(firstTargetElement);
            hoverDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>observer.disconnect()));
        }
        this._currentHover = hover;
        return hover;
    }
    _showHover(hover, options, focus) {
        this._contextViewHandler.showContextView(new HoverContextViewDelegate(hover, focus), options.container);
    }
    hideHover(force) {
        var _this__currentHover;
        if (!force && ((_this__currentHover = this._currentHover) === null || _this__currentHover === void 0 ? void 0 : _this__currentHover.isLocked) || !this._currentHoverOptions) {
            return;
        }
        this.doHideHover();
    }
    doHideHover() {
        this._currentHover = undefined;
        this._currentHoverOptions = undefined;
        this._contextViewHandler.hideContextView();
    }
    _intersectionChange(entries, hover) {
        const entry = entries[entries.length - 1];
        if (!entry.isIntersecting) {
            hover.dispose();
        }
    }
    showAndFocusLastHover() {
        if (!this._lastHoverOptions) {
            return;
        }
        this.showInstantHover(this._lastHoverOptions, true, true);
    }
    _showAndFocusHoverForActiveElement() {
        // TODO: if hover is visible, focus it to avoid flickering
        let activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
        while(activeElement){
            var _this__delayedHovers_get;
            const hover = (_this__delayedHovers_get = this._delayedHovers.get(activeElement)) !== null && _this__delayedHovers_get !== void 0 ? _this__delayedHovers_get : this._managedHovers.get(activeElement);
            if (hover) {
                hover.show(true);
                return;
            }
            activeElement = activeElement.parentElement;
        }
    }
    _keyDown(e, hover, hideOnKeyDown) {
        var _this__currentHoverOptions;
        if (e.key === 'Alt') {
            hover.isLocked = true;
            return;
        }
        const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
        const keybinding = this._keybindingService.resolveKeyboardEvent(event);
        if (keybinding.getSingleModifierDispatchChords().some((value)=>!!value) || this._keybindingService.softDispatch(event, event.target).kind !== 0 /* ResultKind.NoMatchingKb */ ) {
            return;
        }
        if (hideOnKeyDown && (!((_this__currentHoverOptions = this._currentHoverOptions) === null || _this__currentHoverOptions === void 0 ? void 0 : _this__currentHoverOptions.trapFocus) || e.key !== 'Tab')) {
            var _this__lastFocusedElementBeforeOpen;
            this.hideHover();
            (_this__lastFocusedElementBeforeOpen = this._lastFocusedElementBeforeOpen) === null || _this__lastFocusedElementBeforeOpen === void 0 ? void 0 : _this__lastFocusedElementBeforeOpen.focus();
        }
    }
    _keyUp(e, hover) {
        if (e.key === 'Alt') {
            hover.isLocked = false;
            // Hide if alt is released while the mouse is not over hover/target
            if (!hover.isMouseIn) {
                var _this__lastFocusedElementBeforeOpen;
                this.hideHover();
                (_this__lastFocusedElementBeforeOpen = this._lastFocusedElementBeforeOpen) === null || _this__lastFocusedElementBeforeOpen === void 0 ? void 0 : _this__lastFocusedElementBeforeOpen.focus();
            }
        }
    }
    // TODO: Investigate performance of this function. There seems to be a lot of content created
    //       and thrown away on start up
    setupManagedHover(hoverDelegate, targetElement, content, options) {
        if (hoverDelegate.showNativeHover) {
            return setupNativeHover(targetElement, content);
        }
        targetElement.setAttribute('custom-hover', 'true');
        if (targetElement.title !== '') {
            console.warn('HTML element already has a title attribute, which will conflict with the custom hover. Please remove the title attribute.');
            console.trace('Stack trace:', targetElement.title);
            targetElement.title = '';
        }
        let hoverPreparation;
        let hoverWidget;
        const hideHover = (disposeWidget, disposePreparation)=>{
            const hadHover = hoverWidget !== undefined;
            if (disposeWidget) {
                hoverWidget === null || hoverWidget === void 0 ? void 0 : hoverWidget.dispose();
                hoverWidget = undefined;
            }
            if (disposePreparation) {
                hoverPreparation === null || hoverPreparation === void 0 ? void 0 : hoverPreparation.dispose();
                hoverPreparation = undefined;
            }
            if (hadHover) {
                var _hoverDelegate_onDidHideHover;
                (_hoverDelegate_onDidHideHover = hoverDelegate.onDidHideHover) === null || _hoverDelegate_onDidHideHover === void 0 ? void 0 : _hoverDelegate_onDidHideHover.call(hoverDelegate);
                hoverWidget = undefined;
            }
        };
        const triggerShowHover = (delay, focus, target, trapFocus)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"](async ()=>{
                if (!hoverWidget || hoverWidget.isDisposed) {
                    hoverWidget = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$hoverService$2f$updatableHoverWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagedHoverWidget"](hoverDelegate, target || targetElement, delay > 0);
                    await hoverWidget.update(typeof content === 'function' ? content() : content, focus, {
                        ...options,
                        trapFocus
                    });
                }
            }, delay);
        };
        const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        let isMouseDown = false;
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, ()=>{
            isMouseDown = true;
            hideHover(true, true);
        }, true));
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_UP, ()=>{
            isMouseDown = false;
        }, true));
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_LEAVE, (e)=>{
            isMouseDown = false;
            hideHover(false, e.fromElement === targetElement);
        }, true));
        store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>{
            if (hoverPreparation) {
                return;
            }
            const mouseOverStore = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
            const target = {
                targetElements: [
                    targetElement
                ],
                dispose: ()=>{}
            };
            if (hoverDelegate.placement === undefined || hoverDelegate.placement === 'mouse') {
                // track the mouse position
                const onMouseMove = (e)=>{
                    target.x = e.x + 10;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(e.target) && getHoverTargetElement(e.target, targetElement) !== targetElement) {
                        hideHover(true, true);
                    }
                };
                mouseOverStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_MOVE, onMouseMove, true));
            }
            hoverPreparation = mouseOverStore;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(e.target) && getHoverTargetElement(e.target, targetElement) !== targetElement) {
                return; // Do not show hover when the mouse is over another hover target
            }
            mouseOverStore.add(triggerShowHover(typeof hoverDelegate.delay === 'function' ? hoverDelegate.delay(content) : hoverDelegate.delay, false, target));
        }, true));
        const onFocus = ()=>{
            if (isMouseDown || hoverPreparation) {
                return;
            }
            const target = {
                targetElements: [
                    targetElement
                ],
                dispose: ()=>{}
            };
            const toDispose = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
            const onBlur = ()=>hideHover(true, true);
            toDispose.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].BLUR, onBlur, true));
            toDispose.add(triggerShowHover(typeof hoverDelegate.delay === 'function' ? hoverDelegate.delay(content) : hoverDelegate.delay, false, target));
            hoverPreparation = toDispose;
        };
        // Do not show hover when focusing an input or textarea
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEditableElement"])(targetElement)) {
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(targetElement, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS, onFocus, true));
        }
        const hover = {
            show: (focus)=>{
                hideHover(false, true); // terminate a ongoing mouse over preparation
                triggerShowHover(0, focus, undefined, focus); // show hover immediately
            },
            hide: ()=>{
                hideHover(true, true);
            },
            update: async (newContent, hoverOptions)=>{
                content = newContent;
                await (hoverWidget === null || hoverWidget === void 0 ? void 0 : hoverWidget.update(content, undefined, hoverOptions));
            },
            dispose: ()=>{
                this._managedHovers.delete(targetElement);
                store.dispose();
                hideHover(true, true);
            }
        };
        this._managedHovers.set(targetElement, hover);
        return hover;
    }
    showManagedHover(target) {
        const hover = this._managedHovers.get(target);
        if (hover) {
            hover.show(true);
        }
    }
    dispose() {
        this._managedHovers.forEach((hover)=>hover.dispose());
        super.dispose();
    }
    constructor(_instantiationService, _configurationService, contextMenuService, _keybindingService, _layoutService, _accessibilityService){
        super();
        this._instantiationService = _instantiationService;
        this._configurationService = _configurationService;
        this._keybindingService = _keybindingService;
        this._layoutService = _layoutService;
        this._accessibilityService = _accessibilityService;
        this._currentDelayedHoverWasShown = false;
        this._delayedHovers = new Map();
        this._managedHovers = new Map();
        this._register(contextMenuService.onDidShowContextMenu(()=>this.hideHover()));
        this._contextViewHandler = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextViewService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextViewHandler"](this._layoutService));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerCommandAndKeybindingRule({
            id: 'workbench.action.showHover',
            weight: 200 /* KeybindingWeight.WorkbenchContrib */  - 1,
            when: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus.negate(),
            primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyChord"])(2048 /* KeyMod.CtrlCmd */  | 41 /* KeyCode.KeyK */ , 2048 /* KeyMod.CtrlCmd */  | 39 /* KeyCode.KeyI */ ),
            handler: ()=>{
                this._showAndFocusHoverForActiveElement();
            }
        }));
    }
};
HoverService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$layout$2f$browser$2f$layoutService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILayoutService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IAccessibilityService"])
], HoverService);
;
function getHoverOptionsIdentity(options) {
    if (options === undefined) {
        return undefined;
    }
    var _options_id;
    return (_options_id = options === null || options === void 0 ? void 0 : options.id) !== null && _options_id !== void 0 ? _options_id : options;
}
function getHoverIdFromContent(content) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(content)) {
        return undefined;
    }
    if (typeof content === 'string') {
        return content.toString();
    }
    return content.value;
}
function getStringContent(contentOrFactory) {
    const content = typeof contentOrFactory === 'function' ? contentOrFactory() : contentOrFactory;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(content)) {
        // Icons don't render in the native hover so we strip them out
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripIcons"])(content);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isManagedHoverTooltipMarkdownString"])(content)) {
        return content.markdownNotSupportedFallback;
    }
    return undefined;
}
function setupNativeHover(targetElement, content) {
    function updateTitle(title) {
        if (title) {
            targetElement.setAttribute('title', title);
        } else {
            targetElement.removeAttribute('title');
        }
    }
    updateTitle(getStringContent(content));
    return {
        update: (content)=>updateTitle(getStringContent(content)),
        show: ()=>{},
        hide: ()=>{},
        dispose: ()=>updateTitle(undefined)
    };
}
class HoverContextViewDelegate {
    get anchorPosition() {
        return this._hover.anchor;
    }
    render(container) {
        this._hover.render(container);
        if (this._focus) {
            this._hover.focus();
        }
        return this._hover;
    }
    getAnchor() {
        return {
            x: this._hover.x,
            y: this._hover.y
        };
    }
    layout() {
        this._hover.layout();
    }
    constructor(_hover, _focus = false){
        this._hover = _hover;
        this._focus = _focus;
        // Render over all other context views
        this.layer = 1;
    }
}
function getHoverTargetElement(element, stopElement) {
    stopElement = stopElement !== null && stopElement !== void 0 ? stopElement : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element).document.body;
    while(!element.hasAttribute('custom-hover') && element !== stopElement){
        element = element.parentElement;
    }
    return element;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IHoverService"], HoverService, 1 /* InstantiationType.Delayed */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerThemingParticipant"])((theme, collector)=>{
    const hoverBorder = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editorHoverBorder"]);
    if (hoverBorder) {
        collector.addRule(".monaco-workbench .workbench-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ".concat(hoverBorder.transparent(0.5), "; }"));
        collector.addRule(".monaco-workbench .workbench-hover hr { border-top: 1px solid ".concat(hoverBorder.transparent(0.5), "; }"));
    }
}); //# sourceMappingURL=hoverService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/openerService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "OpenerService",
    ()=>OpenerService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marshalling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/marshalling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$editor$2f$common$2f$editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/editor/common/editor.js [app-client] (ecmascript)");
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
let CommandOpener = class CommandOpener {
    async open(target, options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesScheme"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].command)) {
            return false;
        }
        if (!(options === null || options === void 0 ? void 0 : options.allowCommands)) {
            // silently ignore commands when command-links are disabled, also
            // suppress other openers by returning TRUE
            return true;
        }
        if (typeof target === 'string') {
            target = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(target);
        }
        if (Array.isArray(options.allowCommands)) {
            // Only allow specific commands
            if (!options.allowCommands.includes(target.path)) {
                // Suppress other openers by returning TRUE
                return true;
            }
        }
        // execute as command
        let args = [];
        try {
            args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marshalling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(decodeURIComponent(target.query));
        } catch (e) {
            // ignore and retry
            try {
                args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marshalling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(target.query);
            } catch (e) {
            // ignore error
            }
        }
        if (!Array.isArray(args)) {
            args = [
                args
            ];
        }
        await this._commandService.executeCommand(target.path, ...args);
        return true;
    }
    constructor(_commandService){
        this._commandService = _commandService;
    }
};
CommandOpener = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"])
], CommandOpener);
let EditorOpener = class EditorOpener {
    async open(target, options) {
        if (typeof target === 'string') {
            target = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(target);
        }
        const { selection, uri } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSelection"])(target);
        target = uri;
        if (target.scheme === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].file) {
            target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePath"])(target); // workaround for non-normalized paths (https://github.com/microsoft/vscode/issues/12954)
        }
        await this._editorService.openCodeEditor({
            resource: target,
            options: {
                selection,
                source: (options === null || options === void 0 ? void 0 : options.fromUserGesture) ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$editor$2f$common$2f$editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorOpenSource"].USER : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$editor$2f$common$2f$editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorOpenSource"].API,
                ...options === null || options === void 0 ? void 0 : options.editorOptions
            }
        }, this._editorService.getFocusedCodeEditor(), options === null || options === void 0 ? void 0 : options.openToSide);
        return true;
    }
    constructor(_editorService){
        this._editorService = _editorService;
    }
};
EditorOpener = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"])
], EditorOpener);
let OpenerService = class OpenerService {
    registerOpener(opener) {
        const remove = this._openers.unshift(opener);
        return {
            dispose: remove
        };
    }
    async open(target, options) {
        // check with contributed validators
        if (!(options === null || options === void 0 ? void 0 : options.skipValidation)) {
            const targetURI = typeof target === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(target) : target;
            var _this__resolvedUriTargets_get;
            const validationTarget = (_this__resolvedUriTargets_get = this._resolvedUriTargets.get(targetURI)) !== null && _this__resolvedUriTargets_get !== void 0 ? _this__resolvedUriTargets_get : target; // validate against the original URI that this URI resolves to, if one exists
            for (const validator of this._validators){
                if (!await validator.shouldOpen(validationTarget, options)) {
                    return false;
                }
            }
        }
        // check with contributed openers
        for (const opener of this._openers){
            const handled = await opener.open(target, options);
            if (handled) {
                return true;
            }
        }
        return false;
    }
    async resolveExternalUri(resource, options) {
        for (const resolver of this._resolvers){
            try {
                const result = await resolver.resolveExternalUri(resource, options);
                if (result) {
                    if (!this._resolvedUriTargets.has(result.resolved)) {
                        this._resolvedUriTargets.set(result.resolved, resource);
                    }
                    return result;
                }
            } catch (e) {
            // noop
            }
        }
        throw new Error('Could not resolve external URI: ' + resource.toString());
    }
    async _doOpenExternal(resource, options) {
        //todo@jrieken IExternalUriResolver should support `uri: URI | string`
        const uri = typeof resource === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(resource) : resource;
        let externalUri;
        try {
            externalUri = (await this.resolveExternalUri(uri, options)).resolved;
        } catch (e) {
            externalUri = uri;
        }
        let href;
        if (typeof resource === 'string' && uri.toString() === externalUri.toString()) {
            // open the url-string AS IS
            href = resource;
        } else {
            // open URI using the toString(noEncode)+encodeURI-trick
            href = encodeURI(externalUri.toString(true));
        }
        if (options === null || options === void 0 ? void 0 : options.allowContributedOpeners) {
            const preferredOpenerId = typeof (options === null || options === void 0 ? void 0 : options.allowContributedOpeners) === 'string' ? options === null || options === void 0 ? void 0 : options.allowContributedOpeners : undefined;
            for (const opener of this._externalOpeners){
                const didOpen = await opener.openExternal(href, {
                    sourceUri: uri,
                    preferredOpenerId
                }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
                if (didOpen) {
                    return true;
                }
            }
        }
        return this._defaultExternalOpener.openExternal(href, {
            sourceUri: uri
        }, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    }
    dispose() {
        this._validators.clear();
    }
    constructor(editorService, commandService){
        this._openers = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this._validators = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this._resolvers = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this._resolvedUriTargets = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMap"]((uri)=>uri.with({
                path: null,
                fragment: null,
                query: null
            }).toString());
        this._externalOpeners = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        // Default external opener is going through window.open()
        this._defaultExternalOpener = {
            openExternal: async (href)=>{
                // ensure to open HTTP/HTTPS links into new windows
                // to not trigger a navigation. Any other link is
                // safe to be set as HREF to prevent a blank window
                // from opening.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesSomeScheme"])(href, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["windowOpenNoOpener"](href);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].location.href = href;
                }
                return true;
            }
        };
        // Default opener: any external, maito, http(s), command, and catch-all-editors
        this._openers.push({
            open: async (target, options)=>{
                if ((options === null || options === void 0 ? void 0 : options.openExternal) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesSomeScheme"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].mailto, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vsls)) {
                    // open externally
                    await this._doOpenExternal(target, options);
                    return true;
                }
                return false;
            }
        });
        this._openers.push(new CommandOpener(commandService));
        this._openers.push(new EditorOpener(editorService));
    }
};
OpenerService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"])
], OpenerService);
;
 //# sourceMappingURL=openerService.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_editor_browser_services_2ff9133c._.js.map