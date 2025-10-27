(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "Action2",
    ()=>Action2,
    "IMenuService",
    ()=>IMenuService,
    "MenuId",
    ()=>MenuId,
    "MenuItemAction",
    ()=>MenuItemAction,
    "MenuRegistry",
    ()=>MenuRegistry,
    "SubmenuItemAction",
    ()=>SubmenuItemAction,
    "isIMenuItem",
    ()=>isIMenuItem,
    "isISubmenuItem",
    ()=>isISubmenuItem,
    "registerAction2",
    ()=>registerAction2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
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
var MenuItemAction_1;
;
;
;
;
;
;
;
;
;
function isIMenuItem(item) {
    return item.command !== undefined;
}
function isISubmenuItem(item) {
    return item.submenu !== undefined;
}
class MenuId {
    /**
     * Create a new `MenuId` with the unique identifier. Will throw if a menu
     * with the identifier already exists, use `MenuId.for(ident)` or a unique
     * identifier
     */ constructor(identifier){
        if (MenuId._instances.has(identifier)) {
            throw new TypeError("MenuId with identifier '".concat(identifier, "' already exists. Use MenuId.for(ident) or a unique identifier"));
        }
        MenuId._instances.set(identifier, this);
        this.id = identifier;
    }
}
MenuId._instances = new Map();
MenuId.CommandPalette = new MenuId('CommandPalette');
MenuId.DebugBreakpointsContext = new MenuId('DebugBreakpointsContext');
MenuId.DebugCallStackContext = new MenuId('DebugCallStackContext');
MenuId.DebugConsoleContext = new MenuId('DebugConsoleContext');
MenuId.DebugVariablesContext = new MenuId('DebugVariablesContext');
MenuId.NotebookVariablesContext = new MenuId('NotebookVariablesContext');
MenuId.DebugHoverContext = new MenuId('DebugHoverContext');
MenuId.DebugWatchContext = new MenuId('DebugWatchContext');
MenuId.DebugToolBar = new MenuId('DebugToolBar');
MenuId.DebugToolBarStop = new MenuId('DebugToolBarStop');
MenuId.DebugDisassemblyContext = new MenuId('DebugDisassemblyContext');
MenuId.DebugCallStackToolbar = new MenuId('DebugCallStackToolbar');
MenuId.DebugCreateConfiguration = new MenuId('DebugCreateConfiguration');
MenuId.EditorContext = new MenuId('EditorContext');
MenuId.SimpleEditorContext = new MenuId('SimpleEditorContext');
MenuId.EditorContent = new MenuId('EditorContent');
MenuId.EditorLineNumberContext = new MenuId('EditorLineNumberContext');
MenuId.EditorContextCopy = new MenuId('EditorContextCopy');
MenuId.EditorContextPeek = new MenuId('EditorContextPeek');
MenuId.EditorContextShare = new MenuId('EditorContextShare');
MenuId.EditorTitle = new MenuId('EditorTitle');
MenuId.CompactWindowEditorTitle = new MenuId('CompactWindowEditorTitle');
MenuId.EditorTitleRun = new MenuId('EditorTitleRun');
MenuId.EditorTitleContext = new MenuId('EditorTitleContext');
MenuId.EditorTitleContextShare = new MenuId('EditorTitleContextShare');
MenuId.EmptyEditorGroup = new MenuId('EmptyEditorGroup');
MenuId.EmptyEditorGroupContext = new MenuId('EmptyEditorGroupContext');
MenuId.EditorTabsBarContext = new MenuId('EditorTabsBarContext');
MenuId.EditorTabsBarShowTabsSubmenu = new MenuId('EditorTabsBarShowTabsSubmenu');
MenuId.EditorTabsBarShowTabsZenModeSubmenu = new MenuId('EditorTabsBarShowTabsZenModeSubmenu');
MenuId.EditorActionsPositionSubmenu = new MenuId('EditorActionsPositionSubmenu');
MenuId.EditorSplitMoveSubmenu = new MenuId('EditorSplitMoveSubmenu');
MenuId.ExplorerContext = new MenuId('ExplorerContext');
MenuId.ExplorerContextShare = new MenuId('ExplorerContextShare');
MenuId.ExtensionContext = new MenuId('ExtensionContext');
MenuId.ExtensionEditorContextMenu = new MenuId('ExtensionEditorContextMenu');
MenuId.GlobalActivity = new MenuId('GlobalActivity');
MenuId.CommandCenter = new MenuId('CommandCenter');
MenuId.CommandCenterCenter = new MenuId('CommandCenterCenter');
MenuId.LayoutControlMenuSubmenu = new MenuId('LayoutControlMenuSubmenu');
MenuId.LayoutControlMenu = new MenuId('LayoutControlMenu');
MenuId.MenubarMainMenu = new MenuId('MenubarMainMenu');
MenuId.MenubarAppearanceMenu = new MenuId('MenubarAppearanceMenu');
MenuId.MenubarDebugMenu = new MenuId('MenubarDebugMenu');
MenuId.MenubarEditMenu = new MenuId('MenubarEditMenu');
MenuId.MenubarCopy = new MenuId('MenubarCopy');
MenuId.MenubarFileMenu = new MenuId('MenubarFileMenu');
MenuId.MenubarGoMenu = new MenuId('MenubarGoMenu');
MenuId.MenubarHelpMenu = new MenuId('MenubarHelpMenu');
MenuId.MenubarLayoutMenu = new MenuId('MenubarLayoutMenu');
MenuId.MenubarNewBreakpointMenu = new MenuId('MenubarNewBreakpointMenu');
MenuId.PanelAlignmentMenu = new MenuId('PanelAlignmentMenu');
MenuId.PanelPositionMenu = new MenuId('PanelPositionMenu');
MenuId.ActivityBarPositionMenu = new MenuId('ActivityBarPositionMenu');
MenuId.MenubarPreferencesMenu = new MenuId('MenubarPreferencesMenu');
MenuId.MenubarRecentMenu = new MenuId('MenubarRecentMenu');
MenuId.MenubarSelectionMenu = new MenuId('MenubarSelectionMenu');
MenuId.MenubarShare = new MenuId('MenubarShare');
MenuId.MenubarSwitchEditorMenu = new MenuId('MenubarSwitchEditorMenu');
MenuId.MenubarSwitchGroupMenu = new MenuId('MenubarSwitchGroupMenu');
MenuId.MenubarTerminalMenu = new MenuId('MenubarTerminalMenu');
MenuId.MenubarTerminalSuggestStatusMenu = new MenuId('MenubarTerminalSuggestStatusMenu');
MenuId.MenubarViewMenu = new MenuId('MenubarViewMenu');
MenuId.MenubarHomeMenu = new MenuId('MenubarHomeMenu');
MenuId.OpenEditorsContext = new MenuId('OpenEditorsContext');
MenuId.OpenEditorsContextShare = new MenuId('OpenEditorsContextShare');
MenuId.ProblemsPanelContext = new MenuId('ProblemsPanelContext');
MenuId.SCMInputBox = new MenuId('SCMInputBox');
MenuId.SCMChangeContext = new MenuId('SCMChangeContext');
MenuId.SCMResourceContext = new MenuId('SCMResourceContext');
MenuId.SCMResourceContextShare = new MenuId('SCMResourceContextShare');
MenuId.SCMResourceFolderContext = new MenuId('SCMResourceFolderContext');
MenuId.SCMResourceGroupContext = new MenuId('SCMResourceGroupContext');
MenuId.SCMSourceControl = new MenuId('SCMSourceControl');
MenuId.SCMSourceControlInline = new MenuId('SCMSourceControlInline');
MenuId.SCMSourceControlTitle = new MenuId('SCMSourceControlTitle');
MenuId.SCMHistoryTitle = new MenuId('SCMHistoryTitle');
MenuId.SCMHistoryItemContext = new MenuId('SCMHistoryItemContext');
MenuId.SCMHistoryItemChangeContext = new MenuId('SCMHistoryItemChangeContext');
MenuId.SCMHistoryItemHover = new MenuId('SCMHistoryItemHover');
MenuId.SCMHistoryItemRefContext = new MenuId('SCMHistoryItemRefContext');
MenuId.SCMQuickDiffDecorations = new MenuId('SCMQuickDiffDecorations');
MenuId.SCMTitle = new MenuId('SCMTitle');
MenuId.SearchContext = new MenuId('SearchContext');
MenuId.SearchActionMenu = new MenuId('SearchActionContext');
MenuId.StatusBarWindowIndicatorMenu = new MenuId('StatusBarWindowIndicatorMenu');
MenuId.StatusBarRemoteIndicatorMenu = new MenuId('StatusBarRemoteIndicatorMenu');
MenuId.StickyScrollContext = new MenuId('StickyScrollContext');
MenuId.TestItem = new MenuId('TestItem');
MenuId.TestItemGutter = new MenuId('TestItemGutter');
MenuId.TestProfilesContext = new MenuId('TestProfilesContext');
MenuId.TestMessageContext = new MenuId('TestMessageContext');
MenuId.TestMessageContent = new MenuId('TestMessageContent');
MenuId.TestPeekElement = new MenuId('TestPeekElement');
MenuId.TestPeekTitle = new MenuId('TestPeekTitle');
MenuId.TestCallStack = new MenuId('TestCallStack');
MenuId.TestCoverageFilterItem = new MenuId('TestCoverageFilterItem');
MenuId.TouchBarContext = new MenuId('TouchBarContext');
MenuId.TitleBar = new MenuId('TitleBar');
MenuId.TitleBarContext = new MenuId('TitleBarContext');
MenuId.TitleBarTitleContext = new MenuId('TitleBarTitleContext');
MenuId.TunnelContext = new MenuId('TunnelContext');
MenuId.TunnelPrivacy = new MenuId('TunnelPrivacy');
MenuId.TunnelProtocol = new MenuId('TunnelProtocol');
MenuId.TunnelPortInline = new MenuId('TunnelInline');
MenuId.TunnelTitle = new MenuId('TunnelTitle');
MenuId.TunnelLocalAddressInline = new MenuId('TunnelLocalAddressInline');
MenuId.TunnelOriginInline = new MenuId('TunnelOriginInline');
MenuId.ViewItemContext = new MenuId('ViewItemContext');
MenuId.ViewContainerTitle = new MenuId('ViewContainerTitle');
MenuId.ViewContainerTitleContext = new MenuId('ViewContainerTitleContext');
MenuId.ViewTitle = new MenuId('ViewTitle');
MenuId.ViewTitleContext = new MenuId('ViewTitleContext');
MenuId.CommentEditorActions = new MenuId('CommentEditorActions');
MenuId.CommentThreadTitle = new MenuId('CommentThreadTitle');
MenuId.CommentThreadActions = new MenuId('CommentThreadActions');
MenuId.CommentThreadAdditionalActions = new MenuId('CommentThreadAdditionalActions');
MenuId.CommentThreadTitleContext = new MenuId('CommentThreadTitleContext');
MenuId.CommentThreadCommentContext = new MenuId('CommentThreadCommentContext');
MenuId.CommentTitle = new MenuId('CommentTitle');
MenuId.CommentActions = new MenuId('CommentActions');
MenuId.CommentsViewThreadActions = new MenuId('CommentsViewThreadActions');
MenuId.InteractiveToolbar = new MenuId('InteractiveToolbar');
MenuId.InteractiveCellTitle = new MenuId('InteractiveCellTitle');
MenuId.InteractiveCellDelete = new MenuId('InteractiveCellDelete');
MenuId.InteractiveCellExecute = new MenuId('InteractiveCellExecute');
MenuId.InteractiveInputExecute = new MenuId('InteractiveInputExecute');
MenuId.InteractiveInputConfig = new MenuId('InteractiveInputConfig');
MenuId.ReplInputExecute = new MenuId('ReplInputExecute');
MenuId.IssueReporter = new MenuId('IssueReporter');
MenuId.NotebookToolbar = new MenuId('NotebookToolbar');
MenuId.NotebookToolbarContext = new MenuId('NotebookToolbarContext');
MenuId.NotebookStickyScrollContext = new MenuId('NotebookStickyScrollContext');
MenuId.NotebookCellTitle = new MenuId('NotebookCellTitle');
MenuId.NotebookCellDelete = new MenuId('NotebookCellDelete');
MenuId.NotebookCellInsert = new MenuId('NotebookCellInsert');
MenuId.NotebookCellBetween = new MenuId('NotebookCellBetween');
MenuId.NotebookCellListTop = new MenuId('NotebookCellTop');
MenuId.NotebookCellExecute = new MenuId('NotebookCellExecute');
MenuId.NotebookCellExecuteGoTo = new MenuId('NotebookCellExecuteGoTo');
MenuId.NotebookCellExecutePrimary = new MenuId('NotebookCellExecutePrimary');
MenuId.NotebookDiffCellInputTitle = new MenuId('NotebookDiffCellInputTitle');
MenuId.NotebookDiffDocumentMetadata = new MenuId('NotebookDiffDocumentMetadata');
MenuId.NotebookDiffCellMetadataTitle = new MenuId('NotebookDiffCellMetadataTitle');
MenuId.NotebookDiffCellOutputsTitle = new MenuId('NotebookDiffCellOutputsTitle');
MenuId.NotebookOutputToolbar = new MenuId('NotebookOutputToolbar');
MenuId.NotebookOutlineFilter = new MenuId('NotebookOutlineFilter');
MenuId.NotebookOutlineActionMenu = new MenuId('NotebookOutlineActionMenu');
MenuId.NotebookEditorLayoutConfigure = new MenuId('NotebookEditorLayoutConfigure');
MenuId.NotebookKernelSource = new MenuId('NotebookKernelSource');
MenuId.BulkEditTitle = new MenuId('BulkEditTitle');
MenuId.BulkEditContext = new MenuId('BulkEditContext');
MenuId.TimelineItemContext = new MenuId('TimelineItemContext');
MenuId.TimelineTitle = new MenuId('TimelineTitle');
MenuId.TimelineTitleContext = new MenuId('TimelineTitleContext');
MenuId.TimelineFilterSubMenu = new MenuId('TimelineFilterSubMenu');
MenuId.AccountsContext = new MenuId('AccountsContext');
MenuId.SidebarTitle = new MenuId('SidebarTitle');
MenuId.PanelTitle = new MenuId('PanelTitle');
MenuId.AuxiliaryBarTitle = new MenuId('AuxiliaryBarTitle');
MenuId.TerminalInstanceContext = new MenuId('TerminalInstanceContext');
MenuId.TerminalEditorInstanceContext = new MenuId('TerminalEditorInstanceContext');
MenuId.TerminalNewDropdownContext = new MenuId('TerminalNewDropdownContext');
MenuId.TerminalTabContext = new MenuId('TerminalTabContext');
MenuId.TerminalTabEmptyAreaContext = new MenuId('TerminalTabEmptyAreaContext');
MenuId.TerminalStickyScrollContext = new MenuId('TerminalStickyScrollContext');
MenuId.WebviewContext = new MenuId('WebviewContext');
MenuId.InlineCompletionsActions = new MenuId('InlineCompletionsActions');
MenuId.InlineEditsActions = new MenuId('InlineEditsActions');
MenuId.NewFile = new MenuId('NewFile');
MenuId.MergeInput1Toolbar = new MenuId('MergeToolbar1Toolbar');
MenuId.MergeInput2Toolbar = new MenuId('MergeToolbar2Toolbar');
MenuId.MergeBaseToolbar = new MenuId('MergeBaseToolbar');
MenuId.MergeInputResultToolbar = new MenuId('MergeToolbarResultToolbar');
MenuId.InlineSuggestionToolbar = new MenuId('InlineSuggestionToolbar');
MenuId.InlineEditToolbar = new MenuId('InlineEditToolbar');
MenuId.ChatContext = new MenuId('ChatContext');
MenuId.ChatCodeBlock = new MenuId('ChatCodeblock');
MenuId.ChatCompareBlock = new MenuId('ChatCompareBlock');
MenuId.ChatMessageTitle = new MenuId('ChatMessageTitle');
MenuId.ChatHistory = new MenuId('ChatHistory');
MenuId.ChatWelcomeHistoryContext = new MenuId('ChatWelcomeHistoryContext');
MenuId.ChatMessageFooter = new MenuId('ChatMessageFooter');
MenuId.ChatExecute = new MenuId('ChatExecute');
MenuId.ChatExecuteSecondary = new MenuId('ChatExecuteSecondary');
MenuId.ChatInput = new MenuId('ChatInput');
MenuId.ChatInputSide = new MenuId('ChatInputSide');
MenuId.ChatModePicker = new MenuId('ChatModePicker');
MenuId.ChatEditingWidgetToolbar = new MenuId('ChatEditingWidgetToolbar');
MenuId.ChatEditingEditorContent = new MenuId('ChatEditingEditorContent');
MenuId.ChatEditingEditorHunk = new MenuId('ChatEditingEditorHunk');
MenuId.ChatEditingDeletedNotebookCell = new MenuId('ChatEditingDeletedNotebookCell');
MenuId.ChatInputAttachmentToolbar = new MenuId('ChatInputAttachmentToolbar');
MenuId.ChatEditingWidgetModifiedFilesToolbar = new MenuId('ChatEditingWidgetModifiedFilesToolbar');
MenuId.ChatInputResourceAttachmentContext = new MenuId('ChatInputResourceAttachmentContext');
MenuId.ChatInputSymbolAttachmentContext = new MenuId('ChatInputSymbolAttachmentContext');
MenuId.ChatInlineResourceAnchorContext = new MenuId('ChatInlineResourceAnchorContext');
MenuId.ChatInlineSymbolAnchorContext = new MenuId('ChatInlineSymbolAnchorContext');
MenuId.ChatMessageCheckpoint = new MenuId('ChatMessageCheckpoint');
MenuId.ChatMessageRestoreCheckpoint = new MenuId('ChatMessageRestoreCheckpoint');
MenuId.ChatEditingCodeBlockContext = new MenuId('ChatEditingCodeBlockContext');
MenuId.ChatTitleBarMenu = new MenuId('ChatTitleBarMenu');
MenuId.ChatAttachmentsContext = new MenuId('ChatAttachmentsContext');
MenuId.ChatToolOutputResourceToolbar = new MenuId('ChatToolOutputResourceToolbar');
MenuId.ChatTextEditorMenu = new MenuId('ChatTextEditorMenu');
MenuId.ChatToolOutputResourceContext = new MenuId('ChatToolOutputResourceContext');
MenuId.ChatMultiDiffContext = new MenuId('ChatMultiDiffContext');
MenuId.ChatSessionsMenu = new MenuId('ChatSessionsMenu');
MenuId.ChatConfirmationMenu = new MenuId('ChatConfirmationMenu');
MenuId.AccessibleView = new MenuId('AccessibleView');
MenuId.MultiDiffEditorFileToolbar = new MenuId('MultiDiffEditorFileToolbar');
MenuId.DiffEditorHunkToolbar = new MenuId('DiffEditorHunkToolbar');
MenuId.DiffEditorSelectionToolbar = new MenuId('DiffEditorSelectionToolbar');
const IMenuService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('menuService');
class MenuRegistryChangeEvent {
    static for(id) {
        let value = this._all.get(id);
        if (!value) {
            value = new MenuRegistryChangeEvent(id);
            this._all.set(id, value);
        }
        return value;
    }
    static merge(events) {
        const ids = new Set();
        for (const item of events){
            if (item instanceof MenuRegistryChangeEvent) {
                ids.add(item.id);
            }
        }
        return ids;
    }
    constructor(id){
        this.id = id;
        this.has = (candidate)=>candidate === id;
    }
}
MenuRegistryChangeEvent._all = new Map();
const MenuRegistry = new class {
    addCommand(command) {
        this._commands.set(command.id, command);
        this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(MenuId.CommandPalette));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            if (this._commands.delete(command.id)) {
                this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(MenuId.CommandPalette));
            }
        }));
    }
    getCommand(id) {
        return this._commands.get(id);
    }
    getCommands() {
        const map = new Map();
        this._commands.forEach((value, key)=>map.set(key, value));
        return map;
    }
    appendMenuItem(id, item) {
        let list = this._menuItems.get(id);
        if (!list) {
            list = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
            this._menuItems.set(id, list);
        }
        const rm = list.push(item);
        this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(id));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            rm();
            this._onDidChangeMenu.fire(MenuRegistryChangeEvent.for(id));
        }));
    }
    appendMenuItems(items) {
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        for (const { id, item } of items){
            result.add(this.appendMenuItem(id, item));
        }
        return result;
    }
    getMenuItems(id) {
        let result;
        if (this._menuItems.has(id)) {
            result = [
                ...this._menuItems.get(id)
            ];
        } else {
            result = [];
        }
        if (id === MenuId.CommandPalette) {
            // CommandPalette is special because it shows
            // all commands by default
            this._appendImplicitItems(result);
        }
        return result;
    }
    _appendImplicitItems(result) {
        const set = new Set();
        for (const item of result){
            if (isIMenuItem(item)) {
                set.add(item.command.id);
                if (item.alt) {
                    set.add(item.alt.id);
                }
            }
        }
        this._commands.forEach((command, id)=>{
            if (!set.has(id)) {
                result.push({
                    command
                });
            }
        });
    }
    constructor(){
        this._commands = new Map();
        this._menuItems = new Map();
        this._onDidChangeMenu = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrotaskEmitter"]({
            merge: MenuRegistryChangeEvent.merge
        });
        this.onDidChangeMenu = this._onDidChangeMenu.event;
    }
};
class SubmenuItemAction extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuAction"] {
    constructor(item, hideActions, actions){
        super("submenuitem.".concat(item.submenu.id), typeof item.title === 'string' ? item.title : item.title.value, actions, 'submenu');
        this.item = item;
        this.hideActions = hideActions;
    }
}
// implements IAction, does NOT extend Action, so that no one
// subscribes to events of Action or modified properties
let MenuItemAction = MenuItemAction_1 = class MenuItemAction {
    static label(action, options) {
        return (options === null || options === void 0 ? void 0 : options.renderShortTitle) && action.shortTitle ? typeof action.shortTitle === 'string' ? action.shortTitle : action.shortTitle.value : typeof action.title === 'string' ? action.title : action.title.value;
    }
    run() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _this__options, _this__options1;
        let runArgs = [];
        if ((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.arg) {
            runArgs = [
                ...runArgs,
                this._options.arg
            ];
        }
        if ((_this__options1 = this._options) === null || _this__options1 === void 0 ? void 0 : _this__options1.shouldForwardArgs) {
            runArgs = [
                ...runArgs,
                ...args
            ];
        }
        return this._commandService.executeCommand(this.id, ...runArgs);
    }
    constructor(item, alt, options, hideActions, menuKeybinding, contextKeyService, _commandService){
        var _item_tooltip;
        this.hideActions = hideActions;
        this.menuKeybinding = menuKeybinding;
        this._commandService = _commandService;
        this.id = item.id;
        this.label = MenuItemAction_1.label(item, options);
        var _ref;
        this.tooltip = (_ref = typeof item.tooltip === 'string' ? item.tooltip : (_item_tooltip = item.tooltip) === null || _item_tooltip === void 0 ? void 0 : _item_tooltip.value) !== null && _ref !== void 0 ? _ref : '';
        this.enabled = !item.precondition || contextKeyService.contextMatchesRules(item.precondition);
        this.checked = undefined;
        let icon;
        if (item.toggled) {
            const toggled = item.toggled.condition ? item.toggled : {
                condition: item.toggled
            };
            this.checked = contextKeyService.contextMatchesRules(toggled.condition);
            if (this.checked && toggled.tooltip) {
                this.tooltip = typeof toggled.tooltip === 'string' ? toggled.tooltip : toggled.tooltip.value;
            }
            if (this.checked && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].isThemeIcon(toggled.icon)) {
                icon = toggled.icon;
            }
            if (this.checked && toggled.title) {
                this.label = typeof toggled.title === 'string' ? toggled.title : toggled.title.value;
            }
        }
        if (!icon) {
            icon = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].isThemeIcon(item.icon) ? item.icon : undefined;
        }
        this.item = item;
        this.alt = alt ? new MenuItemAction_1(alt, undefined, options, hideActions, undefined, contextKeyService, _commandService) : undefined;
        this._options = options;
        this.class = icon && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(icon);
    }
};
MenuItemAction = MenuItemAction_1 = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"])
], MenuItemAction);
;
class Action2 {
    constructor(desc){
        this.desc = desc;
    }
}
function registerAction2(ctor) {
    const disposables = []; // not using `DisposableStore` to reduce startup perf cost
    const action = new ctor();
    const { f1, menu, keybinding, ...command } = action.desc;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].getCommand(command.id)) {
        throw new Error("Cannot register two commands with the same id: ".concat(command.id));
    }
    var _command_metadata;
    // command
    disposables.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand({
        id: command.id,
        handler: function(accessor) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            return action.run(accessor, ...args);
        },
        metadata: (_command_metadata = command.metadata) !== null && _command_metadata !== void 0 ? _command_metadata : {
            description: action.desc.title
        }
    }));
    // menu
    if (Array.isArray(menu)) {
        for (const item of menu){
            disposables.push(MenuRegistry.appendMenuItem(item.id, {
                command: {
                    ...command,
                    precondition: item.precondition === null ? undefined : command.precondition
                },
                ...item
            }));
        }
    } else if (menu) {
        disposables.push(MenuRegistry.appendMenuItem(menu.id, {
            command: {
                ...command,
                precondition: menu.precondition === null ? undefined : command.precondition
            },
            ...menu
        }));
    }
    if (f1) {
        disposables.push(MenuRegistry.appendMenuItem(MenuId.CommandPalette, {
            command,
            when: command.precondition
        }));
        disposables.push(MenuRegistry.addCommand(command));
    }
    // keybinding
    if (Array.isArray(keybinding)) {
        for (const item of keybinding){
            disposables.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerKeybindingRule({
                ...item,
                id: command.id,
                when: command.precondition ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(command.precondition, item.when) : item.when
            }));
        }
    } else if (keybinding) {
        disposables.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerKeybindingRule({
            ...keybinding,
            id: command.id,
            when: command.precondition ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(command.precondition, keybinding.when) : keybinding.when
        }));
    }
    return {
        dispose () {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(disposables);
        }
    };
} //#endregion
 //# sourceMappingURL=actions.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DropdownWithDefaultActionViewItem",
    ()=>DropdownWithDefaultActionViewItem,
    "MenuEntryActionViewItem",
    ()=>MenuEntryActionViewItem,
    "SubmenuEntryActionViewItem",
    ()=>SubmenuEntryActionViewItem,
    "TextOnlyMenuEntryActionViewItem",
    ()=>TextOnlyMenuEntryActionViewItem,
    "createActionViewItem",
    ()=>createActionViewItem,
    "fillInActionBarActions",
    ()=>fillInActionBarActions,
    "getActionBarActions",
    ()=>getActionBarActions,
    "getFlatActionBarActions",
    ()=>getFlatActionBarActions,
    "getFlatContextMenuActions",
    ()=>getFlatContextMenuActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$cssValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/cssValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdownActionViewItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindingLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$action$2f$common$2f$action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/action/common/action.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/inputColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$window$2f$common$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/window/common/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
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
;
;
;
function getFlatContextMenuActions(groups, primaryGroup) {
    const target = [];
    getContextMenuActionsImpl(groups, target, primaryGroup);
    return target;
}
function getContextMenuActionsImpl(groups, target, primaryGroup) {
    const modifierKeyEmitter = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModifierKeyEmitter"].getInstance();
    const useAlternativeActions = modifierKeyEmitter.keyStatus.altKey || (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"] || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"]) && modifierKeyEmitter.keyStatus.shiftKey;
    fillInActions(groups, target, useAlternativeActions, primaryGroup ? (actionGroup)=>actionGroup === primaryGroup : (actionGroup)=>actionGroup === 'navigation');
}
function getActionBarActions(groups, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const target = {
        primary: [],
        secondary: []
    };
    fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
    return target;
}
function getFlatActionBarActions(groups, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const target = [];
    fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
    return target;
}
function fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const isPrimaryAction = typeof primaryGroup === 'string' ? (actionGroup)=>actionGroup === primaryGroup : primaryGroup;
    // Action bars handle alternative actions on their own so the alternative actions should be ignored
    fillInActions(groups, target, false, isPrimaryAction, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
}
function fillInActions(groups, target, useAlternativeActions) {
    let isPrimaryAction = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (actionGroup)=>actionGroup === 'navigation', shouldInlineSubmenu = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : ()=>false, useSeparatorsInPrimaryActions = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    let primaryBucket;
    let secondaryBucket;
    if (Array.isArray(target)) {
        primaryBucket = target;
        secondaryBucket = target;
    } else {
        primaryBucket = target.primary;
        secondaryBucket = target.secondary;
    }
    const submenuInfo = new Set();
    for (const [group, actions] of groups){
        let target;
        if (isPrimaryAction(group)) {
            target = primaryBucket;
            if (target.length > 0 && useSeparatorsInPrimaryActions) {
                target.push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]());
            }
        } else {
            target = secondaryBucket;
            if (target.length > 0) {
                target.push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]());
            }
        }
        for (let action of actions){
            if (useAlternativeActions) {
                action = action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"] && action.alt ? action.alt : action;
            }
            const newLen = target.push(action);
            // keep submenu info for later inlining
            if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuAction"]) {
                submenuInfo.add({
                    group,
                    action,
                    index: newLen - 1
                });
            }
        }
    }
    // ask the outside if submenu should be inlined or not. only ask when
    // there would be enough space
    for (const { group, action, index } of submenuInfo){
        const target = isPrimaryAction(group) ? primaryBucket : secondaryBucket;
        // inlining submenus with length 0 or 1 is easy,
        // larger submenus need to be checked with the overall limit
        const submenuActions = action.actions;
        if (shouldInlineSubmenu(action, group, target.length)) {
            target.splice(index, 1, ...submenuActions);
        }
    }
}
let MenuEntryActionViewItem = class MenuEntryActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionViewItem"] {
    get _menuItemAction() {
        return this._action;
    }
    get _commandAction() {
        return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
    }
    async onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        try {
            await this.actionRunner.run(this._commandAction, this._context);
        } catch (err) {
            this._notificationService.error(err);
        }
    }
    render(container) {
        super.render(container);
        container.classList.add('menu-entry');
        if (this.options.icon) {
            this._updateItemClass(this._menuItemAction.item);
        }
        if (this._menuItemAction.alt) {
            let isMouseOver = false;
            const updateAltState = ()=>{
                var _this__menuItemAction_alt;
                const wantsAltCommand = !!((_this__menuItemAction_alt = this._menuItemAction.alt) === null || _this__menuItemAction_alt === void 0 ? void 0 : _this__menuItemAction_alt.enabled) && (!this._accessibilityService.isMotionReduced() || isMouseOver) && (this._altKey.keyStatus.altKey || this._altKey.keyStatus.shiftKey && isMouseOver);
                if (wantsAltCommand !== this._wantsAltCommand) {
                    this._wantsAltCommand = wantsAltCommand;
                    this.updateLabel();
                    this.updateTooltip();
                    this.updateClass();
                }
            };
            this._register(this._altKey.event(updateAltState));
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(container, 'mouseleave', (_)=>{
                isMouseOver = false;
                updateAltState();
            }));
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(container, 'mouseenter', (_)=>{
                isMouseOver = true;
                updateAltState();
            }));
            updateAltState();
        }
    }
    updateLabel() {
        if (this.options.label && this.label) {
            this.label.textContent = this._commandAction.label;
        }
    }
    getTooltip() {
        var _this__menuItemAction_alt;
        const keybinding = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService);
        const keybindingLabel = keybinding && keybinding.getLabel();
        const tooltip = this._commandAction.tooltip || this._commandAction.label;
        let title = keybindingLabel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1629, "{0} ({1})", tooltip, keybindingLabel) : tooltip;
        if (!this._wantsAltCommand && ((_this__menuItemAction_alt = this._menuItemAction.alt) === null || _this__menuItemAction_alt === void 0 ? void 0 : _this__menuItemAction_alt.enabled)) {
            const altTooltip = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label;
            const altKeybinding = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService);
            const altKeybindingLabel = altKeybinding && altKeybinding.getLabel();
            const altTitleSection = altKeybindingLabel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1630, "{0} ({1})", altTooltip, altKeybindingLabel) : altTooltip;
            title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1631, "{0}\n[{1}] {2}", title, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UILabelProvider"].modifierLabels[__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OS"]].altKey, altTitleSection);
        }
        return title;
    }
    updateClass() {
        if (this.options.icon) {
            if (this._commandAction !== this._menuItemAction) {
                if (this._menuItemAction.alt) {
                    this._updateItemClass(this._menuItemAction.alt.item);
                }
            } else {
                this._updateItemClass(this._menuItemAction.item);
            }
        }
    }
    _updateItemClass(item) {
        this._itemClassDispose.value = undefined;
        const { element, label } = this;
        if (!element || !label) {
            return;
        }
        const icon = this._commandAction.checked && (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$action$2f$common$2f$action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isICommandActionToggleInfo"])(item.toggled) && item.toggled.icon ? item.toggled.icon : item.icon;
        if (!icon) {
            return;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].isThemeIcon(icon)) {
            // theme icons
            const iconClasses = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray(icon);
            label.classList.add(...iconClasses);
            this._itemClassDispose.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                label.classList.remove(...iconClasses);
            });
        } else {
            // icon path/url
            label.style.backgroundImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDark"])(this._themeService.getColorTheme().type) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$cssValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCSSUrl"])(icon.dark) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$cssValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCSSUrl"])(icon.light);
            label.classList.add('icon');
            this._itemClassDispose.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                label.style.backgroundImage = '';
                label.classList.remove('icon');
            }), this._themeService.onDidColorThemeChange(()=>{
                // refresh when the theme changes in case we go between dark <-> light
                this.updateClass();
            }));
        }
    }
    constructor(action, _options, _keybindingService, _notificationService, _contextKeyService, _themeService, _contextMenuService, _accessibilityService){
        super(undefined, action, {
            icon: !!(action.class || action.item.icon),
            label: !action.class && !action.item.icon,
            draggable: _options === null || _options === void 0 ? void 0 : _options.draggable,
            keybinding: _options === null || _options === void 0 ? void 0 : _options.keybinding,
            hoverDelegate: _options === null || _options === void 0 ? void 0 : _options.hoverDelegate,
            keybindingNotRenderedWithLabel: _options === null || _options === void 0 ? void 0 : _options.keybindingNotRenderedWithLabel
        });
        this._options = _options;
        this._keybindingService = _keybindingService;
        this._notificationService = _notificationService;
        this._contextKeyService = _contextKeyService;
        this._themeService = _themeService;
        this._contextMenuService = _contextMenuService;
        this._accessibilityService = _accessibilityService;
        this._wantsAltCommand = false;
        this._itemClassDispose = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this._altKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModifierKeyEmitter"].getInstance();
    }
};
MenuEntryActionViewItem = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IThemeService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$accessibility$2f$common$2f$accessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IAccessibilityService"])
], MenuEntryActionViewItem);
;
class TextOnlyMenuEntryActionViewItem extends MenuEntryActionViewItem {
    render(container) {
        var _this__options;
        this.options.label = true;
        this.options.icon = false;
        super.render(container);
        container.classList.add('text-only');
        var _this__options_useComma;
        container.classList.toggle('use-comma', (_this__options_useComma = (_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.useComma) !== null && _this__options_useComma !== void 0 ? _this__options_useComma : false);
    }
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            var _this__options;
            const kb2 = TextOnlyMenuEntryActionViewItem._symbolPrintEnter(kb);
            if ((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.conversational) {
                this.label.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1632, '{1} to {0}', this._action.label, kb2);
            } else {
                this.label.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1633, '{0} ({1})', this._action.label, kb2);
            }
        }
    }
    static _symbolPrintEnter(kb) {
        var _kb_getLabel;
        return (_kb_getLabel = kb.getLabel()) === null || _kb_getLabel === void 0 ? void 0 : _kb_getLabel.replace(/\benter\b/gi, '\u23CE').replace(/\bEscape\b/gi, 'Esc');
    }
}
let SubmenuEntryActionViewItem = class SubmenuEntryActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuActionViewItem"] {
    render(container) {
        super.render(container);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this.element);
        container.classList.add('menu-entry');
        const action = this._action;
        const { icon } = action.item;
        if (icon && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].isThemeIcon(icon)) {
            this.element.classList.add('icon');
            const setBackgroundImage = ()=>{
                if (this.element) {
                    this.element.style.backgroundImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDark"])(this._themeService.getColorTheme().type) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$cssValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCSSUrl"])(icon.dark) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$cssValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCSSUrl"])(icon.light);
                }
            };
            setBackgroundImage();
            this._register(this._themeService.onDidColorThemeChange(()=>{
                // refresh when the theme changes in case we go between dark <-> light
                setBackgroundImage();
            }));
        }
    }
    constructor(action, options, _keybindingService, _contextMenuService, _themeService){
        var _options_menuAsChild, _options_classNames, _options_keybindingProvider;
        const dropdownOptions = {
            ...options,
            menuAsChild: (_options_menuAsChild = options === null || options === void 0 ? void 0 : options.menuAsChild) !== null && _options_menuAsChild !== void 0 ? _options_menuAsChild : false,
            classNames: (_options_classNames = options === null || options === void 0 ? void 0 : options.classNames) !== null && _options_classNames !== void 0 ? _options_classNames : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].isThemeIcon(action.item.icon) ? __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassName(action.item.icon) : undefined,
            keybindingProvider: (_options_keybindingProvider = options === null || options === void 0 ? void 0 : options.keybindingProvider) !== null && _options_keybindingProvider !== void 0 ? _options_keybindingProvider : (action)=>_keybindingService.lookupKeybinding(action.id)
        };
        super(action, {
            getActions: ()=>action.actions
        }, _contextMenuService, dropdownOptions);
        this._keybindingService = _keybindingService;
        this._contextMenuService = _contextMenuService;
        this._themeService = _themeService;
    }
};
SubmenuEntryActionViewItem = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IThemeService"])
], SubmenuEntryActionViewItem);
;
let DropdownWithDefaultActionViewItem = class DropdownWithDefaultActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] {
    update(lastAction) {
        var _this__options;
        if ((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.persistLastActionId) {
            this._storageService.store(this._storageKey, lastAction.id, 1 /* StorageScope.WORKSPACE */ , 1 /* StorageTarget.MACHINE */ );
        }
        this._defaultActionDisposables.clear();
        this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(MenuEntryActionViewItem, lastAction, {
            keybinding: this._getDefaultActionKeybindingLabel(lastAction)
        }));
        this._defaultAction.actionRunner = this._defaultActionDisposables.add(new class extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"] {
            async runAction(action, context) {
                await action.run(undefined);
            }
        }());
        if (this._container) {
            this._defaultAction.render((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepend"])(this._container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.action-container')));
        }
    }
    _getDefaultActionKeybindingLabel(defaultAction) {
        var _this__options;
        let defaultActionKeybinding;
        if ((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.renderKeybindingWithDefaultActionLabel) {
            const kb = this._keybindingService.lookupKeybinding(defaultAction.id);
            if (kb) {
                defaultActionKeybinding = "(".concat(kb.getLabel(), ")");
            }
        }
        return defaultActionKeybinding;
    }
    setActionContext(newContext) {
        super.setActionContext(newContext);
        this._defaultAction.setActionContext(newContext);
        this._dropdown.setActionContext(newContext);
    }
    render(container) {
        this._container = container;
        super.render(this._container);
        this._container.classList.add('monaco-dropdown-with-default');
        const primaryContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.action-container');
        this._defaultAction.render((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this._container, primaryContainer));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(primaryContainer, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (event.equals(17 /* KeyCode.RightArrow */ )) {
                this._defaultAction.element.tabIndex = -1;
                this._dropdown.focus();
                event.stopPropagation();
            }
        }));
        const dropdownContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.dropdown-action-container');
        this._dropdown.render((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this._container, dropdownContainer));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(dropdownContainer, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (event.equals(15 /* KeyCode.LeftArrow */ )) {
                var _this__defaultAction_element;
                this._defaultAction.element.tabIndex = 0;
                this._dropdown.setFocusable(false);
                (_this__defaultAction_element = this._defaultAction.element) === null || _this__defaultAction_element === void 0 ? void 0 : _this__defaultAction_element.focus();
                event.stopPropagation();
            }
        }));
    }
    focus(fromRight) {
        if (fromRight) {
            this._dropdown.focus();
        } else {
            this._defaultAction.element.tabIndex = 0;
            this._defaultAction.element.focus();
        }
    }
    blur() {
        this._defaultAction.element.tabIndex = -1;
        this._dropdown.blur();
        this._container.blur();
    }
    setFocusable(focusable) {
        if (focusable) {
            this._defaultAction.element.tabIndex = 0;
        } else {
            this._defaultAction.element.tabIndex = -1;
            this._dropdown.setFocusable(false);
        }
    }
    constructor(submenuAction, options, _keybindingService, _notificationService, _contextMenuService, _menuService, _instaService, _storageService){
        super(null, submenuAction);
        this._keybindingService = _keybindingService;
        this._notificationService = _notificationService;
        this._contextMenuService = _contextMenuService;
        this._menuService = _menuService;
        this._instaService = _instaService;
        this._storageService = _storageService;
        this._defaultActionDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this._container = null;
        this._options = options;
        this._storageKey = "".concat(submenuAction.item.submenu.id, "_lastActionId");
        // determine default action
        let defaultAction;
        const defaultActionId = (options === null || options === void 0 ? void 0 : options.persistLastActionId) ? _storageService.get(this._storageKey, 1 /* StorageScope.WORKSPACE */ ) : undefined;
        if (defaultActionId) {
            defaultAction = submenuAction.actions.find((a)=>defaultActionId === a.id);
        }
        if (!defaultAction) {
            defaultAction = submenuAction.actions[0];
        }
        this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(MenuEntryActionViewItem, defaultAction, {
            keybinding: this._getDefaultActionKeybindingLabel(defaultAction)
        }));
        var _options_menuAsChild, _options_classNames, _options_actionRunner;
        const dropdownOptions = {
            keybindingProvider: (action)=>this._keybindingService.lookupKeybinding(action.id),
            ...options,
            menuAsChild: (_options_menuAsChild = options === null || options === void 0 ? void 0 : options.menuAsChild) !== null && _options_menuAsChild !== void 0 ? _options_menuAsChild : true,
            classNames: (_options_classNames = options === null || options === void 0 ? void 0 : options.classNames) !== null && _options_classNames !== void 0 ? _options_classNames : [
                'codicon',
                'codicon-chevron-down'
            ],
            actionRunner: (_options_actionRunner = options === null || options === void 0 ? void 0 : options.actionRunner) !== null && _options_actionRunner !== void 0 ? _options_actionRunner : this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"]())
        };
        this._dropdown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuActionViewItem"](submenuAction, submenuAction.actions, this._contextMenuService, dropdownOptions));
        this._register(this._dropdown.actionRunner.onDidRun((e)=>{
            if (e.action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
                this.update(e.action);
            }
        }));
    }
};
DropdownWithDefaultActionViewItem = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStorageService"])
], DropdownWithDefaultActionViewItem);
;
let SubmenuEntrySelectActionViewItem = class SubmenuEntrySelectActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectActionViewItem"] {
    render(container) {
        super.render(container);
        container.style.borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssVariable"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectBorder"]);
    }
    runAction(option, index) {
        const action = this.action.actions[index];
        if (action) {
            this.actionRunner.run(action);
        }
    }
    constructor(action, contextViewService, configurationService){
        super(null, action, action.actions.map((a)=>({
                text: a.id === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID ? '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500' : a.label,
                isDisabled: !a.enabled
            })), 0, contextViewService, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSelectBoxStyles"], {
            ariaLabel: action.tooltip,
            optionsAsChildren: true,
            useCustomDrawn: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$window$2f$common$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasNativeContextMenu"])(configurationService)
        });
        this.select(Math.max(0, action.actions.findIndex((a)=>a.checked)));
    }
};
SubmenuEntrySelectActionViewItem = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextViewService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IConfigurationService"])
], SubmenuEntrySelectActionViewItem);
function createActionViewItem(instaService, action, options) {
    if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
        return instaService.createInstance(MenuEntryActionViewItem, action, options);
    } else if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"]) {
        if (action.item.isSelection) {
            return instaService.createInstance(SubmenuEntrySelectActionViewItem, action);
        } else {
            if (action.item.rememberDefaultAction) {
                return instaService.createInstance(DropdownWithDefaultActionViewItem, action, {
                    ...options,
                    persistLastActionId: true
                });
            } else {
                return instaService.createInstance(SubmenuEntryActionViewItem, action, options);
            }
        }
    } else {
        return undefined;
    }
} //# sourceMappingURL=menuEntryActionViewItem.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/menuService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MenuService",
    ()=>MenuService,
    "createConfigureKeybindingAction",
    ()=>createConfigureKeybindingAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var _PersistedMenuHideState;
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
var PersistedMenuHideState_1, MenuInfo_1;
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
let MenuService = class MenuService {
    createMenu(id, contextKeyService, options) {
        return new MenuImpl(id, this._hiddenStates, {
            emitEventsForSubmenuChanges: false,
            eventDebounceDelay: 50,
            ...options
        }, this._commandService, this._keybindingService, contextKeyService);
    }
    getMenuActions(id, contextKeyService, options) {
        const menu = new MenuImpl(id, this._hiddenStates, {
            emitEventsForSubmenuChanges: false,
            eventDebounceDelay: 50,
            ...options
        }, this._commandService, this._keybindingService, contextKeyService);
        const actions = menu.getActions(options);
        menu.dispose();
        return actions;
    }
    resetHiddenStates(ids) {
        this._hiddenStates.reset(ids);
    }
    constructor(_commandService, _keybindingService, storageService){
        this._commandService = _commandService;
        this._keybindingService = _keybindingService;
        this._hiddenStates = new PersistedMenuHideState(storageService);
    }
};
MenuService = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStorageService"])
], MenuService);
;
let PersistedMenuHideState = (_PersistedMenuHideState = class PersistedMenuHideState {
    dispose() {
        this._onDidChange.dispose();
        this._disposables.dispose();
    }
    _isHiddenByDefault(menu, commandId) {
        var _this__hiddenByDefaultCache_get;
        return (_this__hiddenByDefaultCache_get = this._hiddenByDefaultCache.get("".concat(menu.id, "/").concat(commandId))) !== null && _this__hiddenByDefaultCache_get !== void 0 ? _this__hiddenByDefaultCache_get : false;
    }
    setDefaultState(menu, commandId, hidden) {
        this._hiddenByDefaultCache.set("".concat(menu.id, "/").concat(commandId), hidden);
    }
    isHidden(menu, commandId) {
        var _this__data_menu_id;
        const hiddenByDefault = this._isHiddenByDefault(menu, commandId);
        var _this__data_menu_id_includes;
        const state = (_this__data_menu_id_includes = (_this__data_menu_id = this._data[menu.id]) === null || _this__data_menu_id === void 0 ? void 0 : _this__data_menu_id.includes(commandId)) !== null && _this__data_menu_id_includes !== void 0 ? _this__data_menu_id_includes : false;
        return hiddenByDefault ? !state : state;
    }
    updateHidden(menu, commandId, hidden) {
        const hiddenByDefault = this._isHiddenByDefault(menu, commandId);
        if (hiddenByDefault) {
            hidden = !hidden;
        }
        const entries = this._data[menu.id];
        if (!hidden) {
            // remove and cleanup
            if (entries) {
                const idx = entries.indexOf(commandId);
                if (idx >= 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFastWithoutKeepingOrder"])(entries, idx);
                }
                if (entries.length === 0) {
                    delete this._data[menu.id];
                }
            }
        } else {
            // add unless already added
            if (!entries) {
                this._data[menu.id] = [
                    commandId
                ];
            } else {
                const idx = entries.indexOf(commandId);
                if (idx < 0) {
                    entries.push(commandId);
                }
            }
        }
        this._persist();
    }
    reset(menus) {
        if (menus === undefined) {
            // reset all
            this._data = Object.create(null);
            this._persist();
        } else {
            // reset only for a specific menu
            for (const { id } of menus){
                if (this._data[id]) {
                    delete this._data[id];
                }
            }
            this._persist();
        }
    }
    _persist() {
        try {
            this._ignoreChangeEvent = true;
            const raw = JSON.stringify(this._data);
            this._storageService.store(PersistedMenuHideState_1._key, raw, 0 /* StorageScope.PROFILE */ , 0 /* StorageTarget.USER */ );
        } finally{
            this._ignoreChangeEvent = false;
        }
    }
    constructor(_storageService){
        this._storageService = _storageService;
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onDidChange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidChange = this._onDidChange.event;
        this._ignoreChangeEvent = false;
        this._hiddenByDefaultCache = new Map();
        try {
            const raw = _storageService.get(PersistedMenuHideState_1._key, 0 /* StorageScope.PROFILE */ , '{}');
            this._data = JSON.parse(raw);
        } catch (err) {
            this._data = Object.create(null);
        }
        this._disposables.add(_storageService.onDidChangeValue(0 /* StorageScope.PROFILE */ , PersistedMenuHideState_1._key, this._disposables)(()=>{
            if (!this._ignoreChangeEvent) {
                try {
                    const raw = _storageService.get(PersistedMenuHideState_1._key, 0 /* StorageScope.PROFILE */ , '{}');
                    this._data = JSON.parse(raw);
                } catch (err) {
                    console.log('FAILED to read storage after UPDATE', err);
                }
            }
            this._onDidChange.fire();
        }));
    }
}, PersistedMenuHideState_1 = _PersistedMenuHideState, _PersistedMenuHideState._key = 'menu.hiddenCommands', _PersistedMenuHideState);
PersistedMenuHideState = PersistedMenuHideState_1 = __decorate([
    __param(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$storage$2f$common$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStorageService"])
], PersistedMenuHideState);
class MenuInfoSnapshot {
    get allMenuIds() {
        return this._allMenuIds;
    }
    get structureContextKeys() {
        return this._structureContextKeys;
    }
    get preconditionContextKeys() {
        return this._preconditionContextKeys;
    }
    get toggledContextKeys() {
        return this._toggledContextKeys;
    }
    refresh() {
        // reset
        this._menuGroups.length = 0;
        this._allMenuIds.clear();
        this._structureContextKeys.clear();
        this._preconditionContextKeys.clear();
        this._toggledContextKeys.clear();
        const menuItems = this._sort(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuRegistry"].getMenuItems(this._id));
        let group;
        for (const item of menuItems){
            // group by groupId
            const groupName = item.group || '';
            if (!group || group[0] !== groupName) {
                group = [
                    groupName,
                    []
                ];
                this._menuGroups.push(group);
            }
            group[1].push(item);
            // keep keys and submenu ids for eventing
            this._collectContextKeysAndSubmenuIds(item);
        }
        this._allMenuIds.add(this._id);
    }
    _sort(menuItems) {
        // no sorting needed in snapshot
        return menuItems;
    }
    _collectContextKeysAndSubmenuIds(item) {
        MenuInfoSnapshot._fillInKbExprKeys(item.when, this._structureContextKeys);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIMenuItem"])(item)) {
            // keep precondition keys for event if applicable
            if (item.command.precondition) {
                MenuInfoSnapshot._fillInKbExprKeys(item.command.precondition, this._preconditionContextKeys);
            }
            // keep toggled keys for event if applicable
            if (item.command.toggled) {
                const toggledExpression = item.command.toggled.condition || item.command.toggled;
                MenuInfoSnapshot._fillInKbExprKeys(toggledExpression, this._toggledContextKeys);
            }
        } else if (this._collectContextKeysForSubmenus) {
            // recursively collect context keys from submenus so that this
            // menu fires events when context key changes affect submenus
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuRegistry"].getMenuItems(item.submenu).forEach(this._collectContextKeysAndSubmenuIds, this);
            this._allMenuIds.add(item.submenu);
        }
    }
    static _fillInKbExprKeys(exp, set) {
        if (exp) {
            for (const key of exp.keys()){
                set.add(key);
            }
        }
    }
    constructor(_id, _collectContextKeysForSubmenus){
        this._id = _id;
        this._collectContextKeysForSubmenus = _collectContextKeysForSubmenus;
        this._menuGroups = [];
        this._allMenuIds = new Set();
        this._structureContextKeys = new Set();
        this._preconditionContextKeys = new Set();
        this._toggledContextKeys = new Set();
        this.refresh();
    }
}
let MenuInfo = MenuInfo_1 = class MenuInfo extends MenuInfoSnapshot {
    createActionGroups(options) {
        const result = [];
        for (const group of this._menuGroups){
            const [id, items] = group;
            let activeActions;
            for (const item of items){
                if (this._contextKeyService.contextMatchesRules(item.when)) {
                    const isMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIMenuItem"])(item);
                    if (isMenuItem) {
                        this._hiddenStates.setDefaultState(this._id, item.command.id, !!item.isHiddenByDefault);
                    }
                    const menuHide = createMenuHide(this._id, isMenuItem ? item.command : item, this._hiddenStates);
                    if (isMenuItem) {
                        // MenuItemAction
                        const menuKeybinding = createConfigureKeybindingAction(this._commandService, this._keybindingService, item.command.id, item.when);
                        (activeActions !== null && activeActions !== void 0 ? activeActions : activeActions = []).push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"](item.command, item.alt, options, menuHide, menuKeybinding, this._contextKeyService, this._commandService));
                    } else {
                        // SubmenuItemAction
                        const groups = new MenuInfo_1(item.submenu, this._hiddenStates, this._collectContextKeysForSubmenus, this._commandService, this._keybindingService, this._contextKeyService).createActionGroups(options);
                        const submenuActions = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].join(...groups.map((g)=>g[1]));
                        if (submenuActions.length > 0) {
                            (activeActions !== null && activeActions !== void 0 ? activeActions : activeActions = []).push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"](item, menuHide, submenuActions));
                        }
                    }
                }
            }
            if (activeActions && activeActions.length > 0) {
                result.push([
                    id,
                    activeActions
                ]);
            }
        }
        return result;
    }
    _sort(menuItems) {
        return menuItems.sort(MenuInfo_1._compareMenuItems);
    }
    static _compareMenuItems(a, b) {
        const aGroup = a.group;
        const bGroup = b.group;
        if (aGroup !== bGroup) {
            // Falsy groups come last
            if (!aGroup) {
                return 1;
            } else if (!bGroup) {
                return -1;
            }
            // 'navigation' group comes first
            if (aGroup === 'navigation') {
                return -1;
            } else if (bGroup === 'navigation') {
                return 1;
            }
            // lexical sort for groups
            const value = aGroup.localeCompare(bGroup);
            if (value !== 0) {
                return value;
            }
        }
        // sort on priority - default is 0
        const aPrio = a.order || 0;
        const bPrio = b.order || 0;
        if (aPrio < bPrio) {
            return -1;
        } else if (aPrio > bPrio) {
            return 1;
        }
        // sort on titles
        return MenuInfo_1._compareTitles((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIMenuItem"])(a) ? a.command.title : a.title, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIMenuItem"])(b) ? b.command.title : b.title);
    }
    static _compareTitles(a, b) {
        const aStr = typeof a === 'string' ? a : a.original;
        const bStr = typeof b === 'string' ? b : b.original;
        return aStr.localeCompare(bStr);
    }
    constructor(_id, _hiddenStates, _collectContextKeysForSubmenus, _commandService, _keybindingService, _contextKeyService){
        super(_id, _collectContextKeysForSubmenus);
        this._hiddenStates = _hiddenStates;
        this._commandService = _commandService;
        this._keybindingService = _keybindingService;
        this._contextKeyService = _contextKeyService;
        this.refresh();
    }
};
MenuInfo = MenuInfo_1 = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"])
], MenuInfo);
let MenuImpl = class MenuImpl {
    getActions(options) {
        return this._menuInfo.createActionGroups(options);
    }
    dispose() {
        this._disposables.dispose();
        this._onDidChange.dispose();
    }
    constructor(id, hiddenStates, options, commandService, keybindingService, contextKeyService){
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._menuInfo = new MenuInfo(id, hiddenStates, options.emitEventsForSubmenuChanges, commandService, keybindingService, contextKeyService);
        // Rebuild this menu whenever the menu registry reports an event for this MenuId.
        // This usually happen while code and extensions are loaded and affects the over
        // structure of the menu
        const rebuildMenuSoon = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            this._menuInfo.refresh();
            this._onDidChange.fire({
                menu: this,
                isStructuralChange: true,
                isEnablementChange: true,
                isToggleChange: true
            });
        }, options.eventDebounceDelay);
        this._disposables.add(rebuildMenuSoon);
        this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuRegistry"].onDidChangeMenu((e)=>{
            for (const id of this._menuInfo.allMenuIds){
                if (e.has(id)) {
                    rebuildMenuSoon.schedule();
                    break;
                }
            }
        }));
        // When context keys or storage state changes we need to check if the menu also has changed. However,
        // we only do that when someone listens on this menu because (1) these events are
        // firing often and (2) menu are often leaked
        const lazyListener = this._disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        const merge = (events)=>{
            let isStructuralChange = false;
            let isEnablementChange = false;
            let isToggleChange = false;
            for (const item of events){
                isStructuralChange = isStructuralChange || item.isStructuralChange;
                isEnablementChange = isEnablementChange || item.isEnablementChange;
                isToggleChange = isToggleChange || item.isToggleChange;
                if (isStructuralChange && isEnablementChange && isToggleChange) {
                    break;
                }
            }
            return {
                menu: this,
                isStructuralChange,
                isEnablementChange,
                isToggleChange
            };
        };
        const startLazyListener = ()=>{
            lazyListener.add(contextKeyService.onDidChangeContext((e)=>{
                const isStructuralChange = e.affectsSome(this._menuInfo.structureContextKeys);
                const isEnablementChange = e.affectsSome(this._menuInfo.preconditionContextKeys);
                const isToggleChange = e.affectsSome(this._menuInfo.toggledContextKeys);
                if (isStructuralChange || isEnablementChange || isToggleChange) {
                    this._onDidChange.fire({
                        menu: this,
                        isStructuralChange,
                        isEnablementChange,
                        isToggleChange
                    });
                }
            }));
            lazyListener.add(hiddenStates.onDidChange((e)=>{
                this._onDidChange.fire({
                    menu: this,
                    isStructuralChange: true,
                    isEnablementChange: false,
                    isToggleChange: false
                });
            }));
        };
        this._onDidChange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebounceEmitter"]({
            // start/stop context key listener
            onWillAddFirstListener: startLazyListener,
            onDidRemoveLastListener: lazyListener.clear.bind(lazyListener),
            delay: options.eventDebounceDelay,
            merge
        });
        this.onDidChange = this._onDidChange.event;
    }
};
MenuImpl = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"])
], MenuImpl);
function createMenuHide(menu, command, states) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isISubmenuItem"])(command) ? command.submenu.id : command.id;
    const title = typeof command.title === 'string' ? command.title : command.title.value;
    const hide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
        id: "hide/".concat(menu.id, "/").concat(id),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1636, 'Hide \'{0}\'', title),
        run () {
            states.updateHidden(menu, id, true);
        }
    });
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
        id: "toggle/".concat(menu.id, "/").concat(id),
        label: title,
        get checked () {
            return !states.isHidden(menu, id);
        },
        run () {
            states.updateHidden(menu, id, !!this.checked);
        }
    });
    return {
        hide,
        toggle,
        get isHidden () {
            return !toggle.checked;
        }
    };
}
function createConfigureKeybindingAction(commandService, keybindingService, commandId) {
    let when = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : undefined, enabled = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
        id: "configureKeybinding/".concat(commandId),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1637, "Configure Keybinding"),
        enabled,
        run () {
            // Only set the when clause when there is no keybinding
            // It is possible that the action and the keybinding have different when clauses
            const hasKeybinding = !!keybindingService.lookupKeybinding(commandId); // This may only be called inside the `run()` method as it can be expensive on startup. #210529
            const whenValue = !hasKeybinding && when ? when.serialize() : undefined;
            commandService.executeCommand('workbench.action.openGlobalKeybindings', "@command:".concat(commandId) + (whenValue ? " +when:".concat(whenValue) : ''));
        }
    });
} //# sourceMappingURL=menuService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/actionViewItemService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IActionViewItemService",
    ()=>IActionViewItemService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
;
;
;
;
const IActionViewItemService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecorator"])('IActionViewItemService');
class ActionViewItemService {
    dispose() {
        this._onDidChange.dispose();
    }
    lookUp(menu, commandOrMenuId) {
        return this._providers.get(this._makeKey(menu, commandOrMenuId));
    }
    _makeKey(menu, commandOrMenuId) {
        return "".concat(menu.id, "/").concat(commandOrMenuId instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuId"] ? commandOrMenuId.id : commandOrMenuId);
    }
    constructor(){
        this._providers = new Map();
        this._onDidChange = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidChange = this._onDidChange.event;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSingleton"])(IActionViewItemService, ActionViewItemService, 1 /* InstantiationType.Delayed */ ); //# sourceMappingURL=actionViewItemService.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/toolbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "MenuWorkbenchToolBar",
    ()=>MenuWorkbenchToolBar,
    "WorkbenchToolBar",
    ()=>WorkbenchToolBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toolbar$2f$toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/toolbar/toolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/collections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$menuService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/common/menuService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$actionViewItemService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/platform/actions/browser/actionViewItemService.js [app-client] (ecmascript)");
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
 * The `WorkbenchToolBar` does
 * - support hiding of menu items
 * - lookup keybindings for each actions automatically
 * - send `workbenchActionExecuted`-events for each action
 *
 * See {@link MenuWorkbenchToolBar} for a toolbar that is backed by a menu.
 */ let WorkbenchToolBar = class WorkbenchToolBar extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toolbar$2f$toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolBar"] {
    setActions(_primary) {
        let _secondary = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], menuIds = arguments.length > 2 ? arguments[2] : void 0;
        var _this__options, _this__options1;
        this._sessionDisposables.clear();
        const primary = _primary.slice(); // for hiding and overflow we set some items to undefined
        const secondary = _secondary.slice();
        const toggleActions = [];
        let toggleActionsCheckedCount = 0;
        const extraSecondary = [];
        let someAreHidden = false;
        // unless disabled, move all hidden items to secondary group or ignore them
        if (((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.hiddenItemStrategy) !== -1 /* HiddenItemStrategy.NoHide */ ) {
            for(let i = 0; i < primary.length; i++){
                const action = primary[i];
                if (!(action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"]) && !(action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"])) {
                    continue;
                }
                if (!action.hideActions) {
                    continue;
                }
                // collect all toggle actions
                toggleActions.push(action.hideActions.toggle);
                if (action.hideActions.toggle.checked) {
                    toggleActionsCheckedCount++;
                }
                // hidden items move into overflow or ignore
                if (action.hideActions.isHidden) {
                    var _this__options2;
                    someAreHidden = true;
                    primary[i] = undefined;
                    if (((_this__options2 = this._options) === null || _this__options2 === void 0 ? void 0 : _this__options2.hiddenItemStrategy) !== 0 /* HiddenItemStrategy.Ignore */ ) {
                        extraSecondary[i] = action;
                    }
                }
            }
        }
        // count for max
        if (((_this__options1 = this._options) === null || _this__options1 === void 0 ? void 0 : _this__options1.overflowBehavior) !== undefined) {
            const exemptedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$collections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intersection"])(new Set(this._options.overflowBehavior.exempted), __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iterable"].map(primary, (a)=>a === null || a === void 0 ? void 0 : a.id));
            const maxItems = this._options.overflowBehavior.maxItems - exemptedIds.size;
            let count = 0;
            for(let i = 0; i < primary.length; i++){
                const action = primary[i];
                if (!action) {
                    continue;
                }
                count++;
                if (exemptedIds.has(action.id)) {
                    continue;
                }
                if (count >= maxItems) {
                    primary[i] = undefined;
                    extraSecondary[i] = action;
                }
            }
        }
        // coalesce turns Array<IAction|undefined> into IAction[]
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coalesceInPlace"])(primary);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coalesceInPlace"])(extraSecondary);
        super.setActions(primary, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].join(extraSecondary, secondary));
        // add context menu for toggle and configure keybinding actions
        if (toggleActions.length > 0 || primary.length > 0) {
            this._sessionDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.getElement(), 'contextmenu', (e)=>{
                var _this__options, _this__options1, _this__options2, _this__options3;
                const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.getElement()), e);
                const action = this.getItemAction(event.target);
                if (!action) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                const primaryActions = [];
                // -- Configure Keybinding Action --
                if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"] && action.menuKeybinding) {
                    primaryActions.push(action.menuKeybinding);
                } else if (!(action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"] || action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toolbar$2f$toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleMenuAction"])) {
                    // only enable the configure keybinding action for actions that support keybindings
                    const supportsKeybindings = !!this._keybindingService.lookupKeybinding(action.id);
                    primaryActions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$menuService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConfigureKeybindingAction"])(this._commandService, this._keybindingService, action.id, undefined, supportsKeybindings));
                }
                // -- Hide Actions --
                if (toggleActions.length > 0) {
                    var _this__options4;
                    let noHide = false;
                    // last item cannot be hidden when using ignore strategy
                    if (toggleActionsCheckedCount === 1 && ((_this__options4 = this._options) === null || _this__options4 === void 0 ? void 0 : _this__options4.hiddenItemStrategy) === 0 /* HiddenItemStrategy.Ignore */ ) {
                        noHide = true;
                        for(let i = 0; i < toggleActions.length; i++){
                            if (toggleActions[i].checked) {
                                toggleActions[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
                                    id: action.id,
                                    label: action.label,
                                    checked: true,
                                    enabled: false,
                                    run () {}
                                });
                                break; // there is only one
                            }
                        }
                    }
                    // add "hide foo" actions
                    if (!noHide && (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemAction"] || action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"])) {
                        if (!action.hideActions) {
                            // no context menu for MenuItemAction instances that support no hiding
                            // those are fake actions and need to be cleaned up
                            return;
                        }
                        primaryActions.push(action.hideActions.hide);
                    } else {
                        primaryActions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
                            id: 'label',
                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1634, "Hide"),
                            enabled: false,
                            run () {}
                        }));
                    }
                }
                const actions = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].join(primaryActions, toggleActions);
                // add "Reset Menu" action
                if (((_this__options = this._options) === null || _this__options === void 0 ? void 0 : _this__options.resetMenu) && !menuIds) {
                    menuIds = [
                        this._options.resetMenu
                    ];
                }
                if (someAreHidden && menuIds) {
                    actions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]());
                    actions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAction"])({
                        id: 'resetThisMenu',
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])(1635, "Reset Menu"),
                        run: ()=>this._menuService.resetHiddenStates(menuIds)
                    }));
                }
                if (actions.length === 0) {
                    return;
                }
                this._contextMenuService.showContextMenu({
                    getAnchor: ()=>event,
                    getActions: ()=>actions,
                    // add context menu actions (iff appicable)
                    menuId: (_this__options1 = this._options) === null || _this__options1 === void 0 ? void 0 : _this__options1.contextMenu,
                    menuActionOptions: {
                        renderShortTitle: true,
                        ...(_this__options2 = this._options) === null || _this__options2 === void 0 ? void 0 : _this__options2.menuOptions
                    },
                    skipTelemetry: typeof ((_this__options3 = this._options) === null || _this__options3 === void 0 ? void 0 : _this__options3.telemetrySource) === 'string',
                    contextKeyService: this._contextKeyService
                });
            }));
        }
    }
    constructor(container, _options, _menuService, _contextKeyService, _contextMenuService, _keybindingService, _commandService, telemetryService){
        super(container, _contextMenuService, {
            // defaults
            getKeyBinding: (action)=>{
                var _keybindingService_lookupKeybinding;
                return (_keybindingService_lookupKeybinding = _keybindingService.lookupKeybinding(action.id)) !== null && _keybindingService_lookupKeybinding !== void 0 ? _keybindingService_lookupKeybinding : undefined;
            },
            // options (override defaults)
            ..._options,
            // mandatory (overide options)
            allowContextMenu: true,
            skipTelemetry: typeof (_options === null || _options === void 0 ? void 0 : _options.telemetrySource) === 'string'
        });
        this._options = _options;
        this._menuService = _menuService;
        this._contextKeyService = _contextKeyService;
        this._contextMenuService = _contextMenuService;
        this._keybindingService = _keybindingService;
        this._commandService = _commandService;
        this._sessionDisposables = this._store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        // telemetry logic
        const telemetrySource = _options === null || _options === void 0 ? void 0 : _options.telemetrySource;
        if (telemetrySource) {
            this._store.add(this.actionBar.onDidRun((e)=>telemetryService.publicLog2('workbenchActionExecuted', {
                    id: e.action.id,
                    from: telemetrySource
                })));
        }
    }
};
WorkbenchToolBar = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"])
], WorkbenchToolBar);
;
/**
 * A {@link WorkbenchToolBar workbench toolbar} that is purely driven from a {@link MenuId menu}-identifier.
 *
 * *Note* that Manual updates via `setActions` are NOT supported.
 */ let MenuWorkbenchToolBar = class MenuWorkbenchToolBar extends WorkbenchToolBar {
    get onDidChangeMenuItems() {
        return this._onDidChangeMenuItems.event;
    }
    /**
     * @deprecated The WorkbenchToolBar does not support this method because it works with menus.
     */ setActions() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('This toolbar is populated from a menu.');
    }
    constructor(container, menuId, options, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService, actionViewService, instantiationService){
        super(container, {
            resetMenu: menuId,
            ...options,
            actionViewItemProvider: (action, opts)=>{
                let provider = actionViewService.lookUp(menuId, action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuItemAction"] ? action.item.submenu.id : action.id);
                if (!provider) {
                    provider = options === null || options === void 0 ? void 0 : options.actionViewItemProvider;
                }
                const viewItem = provider === null || provider === void 0 ? void 0 : provider(action, opts, instantiationService, (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(container).vscodeWindowId);
                if (viewItem) {
                    return viewItem;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createActionViewItem"])(instantiationService, action, opts);
            }
        }, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService);
        this._onDidChangeMenuItems = this._store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        // update logic
        const menu = this._store.add(menuService.createMenu(menuId, contextKeyService, {
            emitEventsForSubmenuChanges: true,
            eventDebounceDelay: options === null || options === void 0 ? void 0 : options.eventDebounceDelay
        }));
        const updateToolbar = ()=>{
            var _options_toolbarOptions, _options_toolbarOptions1, _options_toolbarOptions2;
            const { primary, secondary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActionBarActions"])(menu.getActions(options === null || options === void 0 ? void 0 : options.menuOptions), options === null || options === void 0 ? void 0 : (_options_toolbarOptions = options.toolbarOptions) === null || _options_toolbarOptions === void 0 ? void 0 : _options_toolbarOptions.primaryGroup, options === null || options === void 0 ? void 0 : (_options_toolbarOptions1 = options.toolbarOptions) === null || _options_toolbarOptions1 === void 0 ? void 0 : _options_toolbarOptions1.shouldInlineSubmenu, options === null || options === void 0 ? void 0 : (_options_toolbarOptions2 = options.toolbarOptions) === null || _options_toolbarOptions2 === void 0 ? void 0 : _options_toolbarOptions2.useSeparatorsInPrimaryActions);
            container.classList.toggle('has-no-actions', primary.length === 0 && secondary.length === 0);
            super.setActions(primary, secondary);
        };
        this._store.add(menu.onDidChange(()=>{
            updateToolbar();
            this._onDidChangeMenuItems.fire(this);
        }));
        this._store.add(actionViewService.onDidChange((e)=>{
            if (e === menuId) {
                updateToolbar();
            }
        }));
        updateToolbar();
    }
};
MenuWorkbenchToolBar = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"]),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$actionViewItemService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IActionViewItemService"]),
    __param(10, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"])
], MenuWorkbenchToolBar);
;
 //# sourceMappingURL=toolbar.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_platform_actions_ca92c5db._.js.map