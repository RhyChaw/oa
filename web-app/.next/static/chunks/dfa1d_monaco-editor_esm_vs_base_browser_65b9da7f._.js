(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "ensureCodeWindow",
    ()=>ensureCodeWindow,
    "mainWindow",
    ()=>mainWindow
]);
function ensureCodeWindow(targetWindow, fallbackWindowId) {
    const codeWindow = targetWindow;
    if (typeof codeWindow.vscodeWindowId !== 'number') {
        Object.defineProperty(codeWindow, 'vscodeWindowId', {
            get: ()=>fallbackWindowId
        });
    }
}
const mainWindow = window; //# sourceMappingURL=window.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "addMatchMediaChangeListener",
    ()=>addMatchMediaChangeListener,
    "getZoomFactor",
    ()=>getZoomFactor,
    "isAndroid",
    ()=>isAndroid,
    "isChrome",
    ()=>isChrome,
    "isElectron",
    ()=>isElectron,
    "isFirefox",
    ()=>isFirefox,
    "isSafari",
    ()=>isSafari,
    "isStandalone",
    ()=>isStandalone,
    "isWebKit",
    ()=>isWebKit,
    "isWebkitWebView",
    ()=>isWebkitWebView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
;
class WindowManager {
    getZoomFactor(targetWindow) {
        var _this_mapWindowIdToZoomFactor_get;
        return (_this_mapWindowIdToZoomFactor_get = this.mapWindowIdToZoomFactor.get(this.getWindowId(targetWindow))) !== null && _this_mapWindowIdToZoomFactor_get !== void 0 ? _this_mapWindowIdToZoomFactor_get : 1;
    }
    getWindowId(targetWindow) {
        return targetWindow.vscodeWindowId;
    }
    constructor(){
        // --- Zoom Factor
        this.mapWindowIdToZoomFactor = new Map();
    }
}
WindowManager.INSTANCE = new WindowManager();
function addMatchMediaChangeListener(targetWindow, query, callback) {
    if (typeof query === 'string') {
        query = targetWindow.matchMedia(query);
    }
    query.addEventListener('change', callback);
}
function getZoomFactor(targetWindow) {
    return WindowManager.INSTANCE.getZoomFactor(targetWindow);
}
const userAgent = navigator.userAgent;
const isFirefox = userAgent.indexOf('Firefox') >= 0;
const isWebKit = userAgent.indexOf('AppleWebKit') >= 0;
const isChrome = userAgent.indexOf('Chrome') >= 0;
const isSafari = !isChrome && userAgent.indexOf('Safari') >= 0;
const isWebkitWebView = !isChrome && !isSafari && isWebKit;
const isElectron = userAgent.indexOf('Electron/') >= 0;
const isAndroid = userAgent.indexOf('Android') >= 0;
let standalone = false;
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].matchMedia === 'function') {
    const standaloneMatchMedia = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].matchMedia('(display-mode: standalone) or (display-mode: window-controls-overlay)');
    const fullScreenMatchMedia = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].matchMedia('(display-mode: fullscreen)');
    standalone = standaloneMatchMedia.matches;
    addMatchMediaChangeListener(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"], standaloneMatchMedia, (param)=>{
        let { matches } = param;
        // entering fullscreen would change standaloneMatchMedia.matches to false
        // if standalone is true (running as PWA) and entering fullscreen, skip this change
        if (standalone && fullScreenMatchMedia.matches) {
            return;
        }
        // otherwise update standalone (browser to PWA or PWA to browser)
        standalone = matches;
    });
}
function isStandalone() {
    return standalone;
} //# sourceMappingURL=browser.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/canIUse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "BrowserFeatures",
    ()=>BrowserFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
const BrowserFeatures = {
    clipboard: {
        writeText: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNative"] || document.queryCommandSupported && document.queryCommandSupported('copy') || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
        readText: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNative"] || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
    },
    keyboard: (()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNative"] || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStandalone"]()) {
            return 0 /* KeyboardSupport.Always */ ;
        }
        if (navigator.keyboard || __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"]) {
            return 1 /* KeyboardSupport.FullScreen */ ;
        }
        return 2 /* KeyboardSupport.None */ ;
    })(),
    // 'ontouchstart' in window always evaluates to true with typescript's modern typings. This causes `window` to be
    // `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
    touch: 'ontouchstart' in __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"] || navigator.maxTouchPoints > 0,
    pointerEvents: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].PointerEvent && ('ontouchstart' in __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"] || navigator.maxTouchPoints > 0)
}; //# sourceMappingURL=canIUse.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "StandardKeyboardEvent",
    ()=>StandardKeyboardEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/keybindings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
;
function extractKeyCode(e) {
    if (e.charCode) {
        // "keypress" events mostly
        const char = String.fromCharCode(e.charCode).toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].fromString(char);
    }
    const keyCode = e.keyCode;
    // browser quirks
    if (keyCode === 3) {
        return 7 /* KeyCode.PauseBreak */ ;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]) {
        switch(keyCode){
            case 59:
                return 85 /* KeyCode.Semicolon */ ;
            case 60:
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"]) {
                    return 97 /* KeyCode.IntlBackslash */ ;
                }
                break;
            case 61:
                return 86 /* KeyCode.Equal */ ;
            // based on: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#numpad_keys
            case 107:
                return 109 /* KeyCode.NumpadAdd */ ;
            case 109:
                return 111 /* KeyCode.NumpadSubtract */ ;
            case 173:
                return 88 /* KeyCode.Minus */ ;
            case 224:
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
                    return 57 /* KeyCode.Meta */ ;
                }
                break;
        }
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"]) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && keyCode === 93) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            return 57 /* KeyCode.Meta */ ;
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && keyCode === 92) {
            return 57 /* KeyCode.Meta */ ;
        }
    }
    // cross browser keycodes:
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_KEY_CODE_MAP"][keyCode] || 0 /* KeyCode.Unknown */ ;
}
const ctrlKeyMod = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? 256 /* KeyMod.WinCtrl */  : 2048 /* KeyMod.CtrlCmd */ ;
const altKeyMod = 512 /* KeyMod.Alt */ ;
const shiftKeyMod = 1024 /* KeyMod.Shift */ ;
const metaKeyMod = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? 2048 /* KeyMod.CtrlCmd */  : 256 /* KeyMod.WinCtrl */ ;
class StandardKeyboardEvent {
    preventDefault() {
        if (this.browserEvent && this.browserEvent.preventDefault) {
            this.browserEvent.preventDefault();
        }
    }
    stopPropagation() {
        if (this.browserEvent && this.browserEvent.stopPropagation) {
            this.browserEvent.stopPropagation();
        }
    }
    toKeyCodeChord() {
        return this._asKeyCodeChord;
    }
    equals(other) {
        return this._asKeybinding === other;
    }
    _computeKeybinding() {
        let key = 0 /* KeyCode.Unknown */ ;
        if (this.keyCode !== 5 /* KeyCode.Ctrl */  && this.keyCode !== 4 /* KeyCode.Shift */  && this.keyCode !== 6 /* KeyCode.Alt */  && this.keyCode !== 57 /* KeyCode.Meta */ ) {
            key = this.keyCode;
        }
        let result = 0;
        if (this.ctrlKey) {
            result |= ctrlKeyMod;
        }
        if (this.altKey) {
            result |= altKeyMod;
        }
        if (this.shiftKey) {
            result |= shiftKeyMod;
        }
        if (this.metaKey) {
            result |= metaKeyMod;
        }
        result |= key;
        return result;
    }
    _computeKeyCodeChord() {
        let key = 0 /* KeyCode.Unknown */ ;
        if (this.keyCode !== 5 /* KeyCode.Ctrl */  && this.keyCode !== 4 /* KeyCode.Shift */  && this.keyCode !== 6 /* KeyCode.Alt */  && this.keyCode !== 57 /* KeyCode.Meta */ ) {
            key = this.keyCode;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeChord"](this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
    }
    constructor(source){
        var _e_getModifierState;
        this._standardKeyboardEventBrand = true;
        const e = source;
        this.browserEvent = e;
        this.target = e.target;
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        this.altGraphKey = (_e_getModifierState = e.getModifierState) === null || _e_getModifierState === void 0 ? void 0 : _e_getModifierState.call(e, 'AltGraph');
        this.keyCode = extractKeyCode(e);
        this.code = e.code;
        // console.info(e.type + ": keyCode: " + e.keyCode + ", which: " + e.which + ", charCode: " + e.charCode + ", detail: " + e.detail + " ====> " + this.keyCode + ' -- ' + KeyCode[this.keyCode]);
        this.ctrlKey = this.ctrlKey || this.keyCode === 5 /* KeyCode.Ctrl */ ;
        this.altKey = this.altKey || this.keyCode === 6 /* KeyCode.Alt */ ;
        this.shiftKey = this.shiftKey || this.keyCode === 4 /* KeyCode.Shift */ ;
        this.metaKey = this.metaKey || this.keyCode === 57 /* KeyCode.Meta */ ;
        this._asKeybinding = this._computeKeybinding();
        this._asKeyCodeChord = this._computeKeyCodeChord();
    // console.log(`code: ${e.code}, keyCode: ${e.keyCode}, key: ${e.key}`);
    }
} //# sourceMappingURL=keyboardEvent.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/iframe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "IframeUtils",
    ()=>IframeUtils
]);
const sameOriginWindowChainCache = new WeakMap();
function getParentWindowIfSameOrigin(w) {
    if (!w.parent || w.parent === w) {
        return null;
    }
    // Cannot really tell if we have access to the parent window unless we try to access something in it
    try {
        const location = w.location;
        const parentLocation = w.parent.location;
        if (location.origin !== 'null' && parentLocation.origin !== 'null' && location.origin !== parentLocation.origin) {
            return null;
        }
    } catch (e) {
        return null;
    }
    return w.parent;
}
class IframeUtils {
    /**
     * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
     * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
     */ static getSameOriginWindowChain(targetWindow) {
        let windowChainCache = sameOriginWindowChainCache.get(targetWindow);
        if (!windowChainCache) {
            windowChainCache = [];
            sameOriginWindowChainCache.set(targetWindow, windowChainCache);
            let w = targetWindow;
            let parent;
            do {
                parent = getParentWindowIfSameOrigin(w);
                if (parent) {
                    windowChainCache.push({
                        window: new WeakRef(w),
                        iframeElement: w.frameElement || null
                    });
                } else {
                    windowChainCache.push({
                        window: new WeakRef(w),
                        iframeElement: null
                    });
                }
                w = parent;
            }while (w)
        }
        return windowChainCache.slice(0);
    }
    /**
     * Returns the position of `childWindow` relative to `ancestorWindow`
     */ static getPositionOfChildWindowRelativeToAncestorWindow(childWindow, ancestorWindow) {
        if (!ancestorWindow || childWindow === ancestorWindow) {
            return {
                top: 0,
                left: 0
            };
        }
        let top = 0, left = 0;
        const windowChain = this.getSameOriginWindowChain(childWindow);
        for (const windowChainEl of windowChain){
            const windowInChain = windowChainEl.window.deref();
            var _windowInChain_scrollY;
            top += (_windowInChain_scrollY = windowInChain === null || windowInChain === void 0 ? void 0 : windowInChain.scrollY) !== null && _windowInChain_scrollY !== void 0 ? _windowInChain_scrollY : 0;
            var _windowInChain_scrollX;
            left += (_windowInChain_scrollX = windowInChain === null || windowInChain === void 0 ? void 0 : windowInChain.scrollX) !== null && _windowInChain_scrollX !== void 0 ? _windowInChain_scrollX : 0;
            if (windowInChain === ancestorWindow) {
                break;
            }
            if (!windowChainEl.iframeElement) {
                break;
            }
            const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
            top += boundingRect.top;
            left += boundingRect.left;
        }
        return {
            top: top,
            left: left
        };
    }
} //# sourceMappingURL=iframe.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "StandardMouseEvent",
    ()=>StandardMouseEvent,
    "StandardWheelEvent",
    ()=>StandardWheelEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$iframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/iframe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
class StandardMouseEvent {
    preventDefault() {
        this.browserEvent.preventDefault();
    }
    stopPropagation() {
        this.browserEvent.stopPropagation();
    }
    constructor(targetWindow, e){
        this.timestamp = Date.now();
        this.browserEvent = e;
        this.leftButton = e.button === 0;
        this.middleButton = e.button === 1;
        this.rightButton = e.button === 2;
        this.buttons = e.buttons;
        this.defaultPrevented = e.defaultPrevented;
        this.target = e.target;
        this.detail = e.detail || 1;
        if (e.type === 'dblclick') {
            this.detail = 2;
        }
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        if (typeof e.pageX === 'number') {
            this.posx = e.pageX;
            this.posy = e.pageY;
        } else {
            // Probably hit by MSGestureEvent
            this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft;
            this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop;
        }
        // Find the position of the iframe this code is executing in relative to the iframe where the event was captured.
        const iframeOffsets = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$iframe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IframeUtils"].getPositionOfChildWindowRelativeToAncestorWindow(targetWindow, e.view);
        this.posx -= iframeOffsets.left;
        this.posy -= iframeOffsets.top;
    }
}
class StandardWheelEvent {
    preventDefault() {
        var _this_browserEvent;
        (_this_browserEvent = this.browserEvent) === null || _this_browserEvent === void 0 ? void 0 : _this_browserEvent.preventDefault();
    }
    stopPropagation() {
        var _this_browserEvent;
        (_this_browserEvent = this.browserEvent) === null || _this_browserEvent === void 0 ? void 0 : _this_browserEvent.stopPropagation();
    }
    constructor(e, deltaX = 0, deltaY = 0){
        this.browserEvent = e || null;
        this.target = e ? e.target || e.targetNode || e.srcElement : null;
        this.deltaY = deltaY;
        this.deltaX = deltaX;
        let shouldFactorDPR = false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChrome"]) {
            // Chrome version >= 123 contains the fix to factor devicePixelRatio into the wheel event.
            // See https://chromium.googlesource.com/chromium/src.git/+/be51b448441ff0c9d1f17e0f25c4bf1ab3f11f61
            const chromeVersionMatch = navigator.userAgent.match(/Chrome\/(\d+)/);
            const chromeMajorVersion = chromeVersionMatch ? parseInt(chromeVersionMatch[1]) : 123;
            shouldFactorDPR = chromeMajorVersion <= 122;
        }
        if (e) {
            var _e_view;
            // Old (deprecated) wheel events
            const e1 = e;
            const e2 = e;
            const devicePixelRatio = ((_e_view = e.view) === null || _e_view === void 0 ? void 0 : _e_view.devicePixelRatio) || 1;
            // vertical delta scroll
            if (typeof e1.wheelDeltaY !== 'undefined') {
                if (shouldFactorDPR) {
                    // Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
                    this.deltaY = e1.wheelDeltaY / (120 * devicePixelRatio);
                } else {
                    this.deltaY = e1.wheelDeltaY / 120;
                }
            } else if (typeof e2.VERTICAL_AXIS !== 'undefined' && e2.axis === e2.VERTICAL_AXIS) {
                this.deltaY = -e2.detail / 3;
            } else if (e.type === 'wheel') {
                // Modern wheel event
                // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
                const ev = e;
                if (ev.deltaMode === ev.DOM_DELTA_LINE) {
                    // the deltas are expressed in lines
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"] && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
                        this.deltaY = -e.deltaY / 3;
                    } else {
                        this.deltaY = -e.deltaY;
                    }
                } else {
                    this.deltaY = -e.deltaY / 40;
                }
            }
            // horizontal delta scroll
            if (typeof e1.wheelDeltaX !== 'undefined') {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"] && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"]) {
                    this.deltaX = -(e1.wheelDeltaX / 120);
                } else if (shouldFactorDPR) {
                    // Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
                    this.deltaX = e1.wheelDeltaX / (120 * devicePixelRatio);
                } else {
                    this.deltaX = e1.wheelDeltaX / 120;
                }
            } else if (typeof e2.HORIZONTAL_AXIS !== 'undefined' && e2.axis === e2.HORIZONTAL_AXIS) {
                this.deltaX = -e.detail / 3;
            } else if (e.type === 'wheel') {
                // Modern wheel event
                // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
                const ev = e;
                if (ev.deltaMode === ev.DOM_DELTA_LINE) {
                    // the deltas are expressed in lines
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"] && !__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
                        this.deltaX = -e.deltaX / 3;
                    } else {
                        this.deltaX = -e.deltaX;
                    }
                } else {
                    this.deltaX = -e.deltaX / 40;
                }
            }
            // Assume a vertical scroll if nothing else worked
            if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
                if (shouldFactorDPR) {
                    // Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
                    this.deltaY = e.wheelDelta / (120 * devicePixelRatio);
                } else {
                    this.deltaY = e.wheelDelta / 120;
                }
            }
        }
    }
} //# sourceMappingURL=mouseEvent.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "$",
    ()=>$,
    "Dimension",
    ()=>Dimension,
    "DragAndDropObserver",
    ()=>DragAndDropObserver,
    "EventHelper",
    ()=>EventHelper,
    "EventType",
    ()=>EventType,
    "LiveElement",
    ()=>LiveElement,
    "ModifierKeyEmitter",
    ()=>ModifierKeyEmitter,
    "Namespace",
    ()=>Namespace,
    "ObserverNode",
    ()=>ObserverNode,
    "ObserverNodeWithElement",
    ()=>ObserverNodeWithElement,
    "WindowIdleValue",
    ()=>WindowIdleValue,
    "WindowIntervalTimer",
    ()=>WindowIntervalTimer,
    "addDisposableGenericMouseDownListener",
    ()=>addDisposableGenericMouseDownListener,
    "addDisposableGenericMouseMoveListener",
    ()=>addDisposableGenericMouseMoveListener,
    "addDisposableGenericMouseUpListener",
    ()=>addDisposableGenericMouseUpListener,
    "addDisposableListener",
    ()=>addDisposableListener,
    "addStandardDisposableGenericMouseDownListener",
    ()=>addStandardDisposableGenericMouseDownListener,
    "addStandardDisposableGenericMouseUpListener",
    ()=>addStandardDisposableGenericMouseUpListener,
    "addStandardDisposableListener",
    ()=>addStandardDisposableListener,
    "after",
    ()=>after,
    "animate",
    ()=>animate,
    "append",
    ()=>append,
    "clearNode",
    ()=>clearNode,
    "computeScreenAwareSize",
    ()=>computeScreenAwareSize,
    "findParentWithClass",
    ()=>findParentWithClass,
    "getActiveDocument",
    ()=>getActiveDocument,
    "getActiveElement",
    ()=>getActiveElement,
    "getActiveWindow",
    ()=>getActiveWindow,
    "getClientArea",
    ()=>getClientArea,
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContentHeight",
    ()=>getContentHeight,
    "getContentWidth",
    ()=>getContentWidth,
    "getDocument",
    ()=>getDocument,
    "getDomNodePagePosition",
    ()=>getDomNodePagePosition,
    "getDomNodeZoomLevel",
    ()=>getDomNodeZoomLevel,
    "getShadowRoot",
    ()=>getShadowRoot,
    "getTopLeftOffset",
    ()=>getTopLeftOffset,
    "getTotalHeight",
    ()=>getTotalHeight,
    "getTotalWidth",
    ()=>getTotalWidth,
    "getWindow",
    ()=>getWindow,
    "getWindowById",
    ()=>getWindowById,
    "getWindowId",
    ()=>getWindowId,
    "getWindows",
    ()=>getWindows,
    "getWindowsCount",
    ()=>getWindowsCount,
    "h",
    ()=>h,
    "hasParentWithClass",
    ()=>hasParentWithClass,
    "hasWindow",
    ()=>hasWindow,
    "hide",
    ()=>hide,
    "isActiveElement",
    ()=>isActiveElement,
    "isAncestor",
    ()=>isAncestor,
    "isAncestorOfActiveElement",
    ()=>isAncestorOfActiveElement,
    "isEditableElement",
    ()=>isEditableElement,
    "isEventLike",
    ()=>isEventLike,
    "isHTMLAnchorElement",
    ()=>isHTMLAnchorElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isInShadowDOM",
    ()=>isInShadowDOM,
    "isKeyboardEvent",
    ()=>isKeyboardEvent,
    "isMouseEvent",
    ()=>isMouseEvent,
    "isSVGElement",
    ()=>isSVGElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "n",
    ()=>n,
    "onDidRegisterWindow",
    ()=>onDidRegisterWindow,
    "onDidUnregisterWindow",
    ()=>onDidUnregisterWindow,
    "onWillUnregisterWindow",
    ()=>onWillUnregisterWindow,
    "prepend",
    ()=>prepend,
    "registerWindow",
    ()=>registerWindow,
    "reset",
    ()=>reset,
    "restoreParentsScrollTop",
    ()=>restoreParentsScrollTop,
    "runAtThisOrScheduleAtNextAnimationFrame",
    ()=>runAtThisOrScheduleAtNextAnimationFrame,
    "runWhenWindowIdle",
    ()=>runWhenWindowIdle,
    "saveParentsScrollTop",
    ()=>saveParentsScrollTop,
    "scheduleAtNextAnimationFrame",
    ()=>scheduleAtNextAnimationFrame,
    "setVisibility",
    ()=>setVisibility,
    "sharedMutationObserver",
    ()=>sharedMutationObserver,
    "show",
    ()=>show,
    "size",
    ()=>size,
    "trackFocus",
    ()=>trackFocus,
    "windowOpenNoOpener",
    ()=>windowOpenNoOpener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/canIUse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)");
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
const { registerWindow, getWindow, getDocument, getWindows, getWindowsCount, getWindowId, getWindowById, hasWindow, onDidRegisterWindow, onWillUnregisterWindow, onDidUnregisterWindow } = function() {
    const windows = new Map();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureCodeWindow"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"], 1);
    const mainWindowRegistration = {
        window: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"],
        disposables: new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]()
    };
    windows.set(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].vscodeWindowId, mainWindowRegistration);
    const onDidRegisterWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
    const onDidUnregisterWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
    const onWillUnregisterWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
    function getWindowById(windowId, fallbackToMain) {
        const window = typeof windowId === 'number' ? windows.get(windowId) : undefined;
        return window !== null && window !== void 0 ? window : fallbackToMain ? mainWindowRegistration : undefined;
    }
    return {
        onDidRegisterWindow: onDidRegisterWindow.event,
        onWillUnregisterWindow: onWillUnregisterWindow.event,
        onDidUnregisterWindow: onDidUnregisterWindow.event,
        registerWindow (window) {
            if (windows.has(window.vscodeWindowId)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
            }
            const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
            const registeredWindow = {
                window,
                disposables: disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]())
            };
            windows.set(window.vscodeWindowId, registeredWindow);
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                windows.delete(window.vscodeWindowId);
                onDidUnregisterWindow.fire(window);
            }));
            disposables.add(addDisposableListener(window, EventType.BEFORE_UNLOAD, ()=>{
                onWillUnregisterWindow.fire(window);
            }));
            onDidRegisterWindow.fire(registeredWindow);
            return disposables;
        },
        getWindows () {
            return windows.values();
        },
        getWindowsCount () {
            return windows.size;
        },
        getWindowId (targetWindow) {
            return targetWindow.vscodeWindowId;
        },
        hasWindow (windowId) {
            return windows.has(windowId);
        },
        getWindowById,
        getWindow (e) {
            var _candidateNode_ownerDocument;
            const candidateNode = e;
            if (candidateNode === null || candidateNode === void 0 ? void 0 : (_candidateNode_ownerDocument = candidateNode.ownerDocument) === null || _candidateNode_ownerDocument === void 0 ? void 0 : _candidateNode_ownerDocument.defaultView) {
                return candidateNode.ownerDocument.defaultView.window;
            }
            const candidateEvent = e;
            if (candidateEvent === null || candidateEvent === void 0 ? void 0 : candidateEvent.view) {
                return candidateEvent.view.window;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"];
        },
        getDocument (e) {
            const candidateNode = e;
            return getWindow(candidateNode).document;
        }
    };
}();
function clearNode(node) {
    while(node.firstChild){
        node.firstChild.remove();
    }
}
class DomListener {
    dispose() {
        if (!this._handler) {
            // Already disposed
            return;
        }
        this._node.removeEventListener(this._type, this._handler, this._options);
        // Prevent leakers from holding on to the dom or handler func
        this._node = null;
        this._handler = null;
    }
    constructor(node, type, handler, options){
        this._node = node;
        this._type = type;
        this._handler = handler;
        this._options = options || false;
        this._node.addEventListener(this._type, this._handler, this._options);
    }
}
function addDisposableListener(node, type, handler, useCaptureOrOptions) {
    return new DomListener(node, type, handler, useCaptureOrOptions);
}
function _wrapAsStandardMouseEvent(targetWindow, handler) {
    return function(e) {
        return handler(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](targetWindow, e));
    };
}
function _wrapAsStandardKeyboardEvent(handler) {
    return function(e) {
        return handler(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e));
    };
}
const addStandardDisposableListener = function addStandardDisposableListener(node, type, handler, useCapture) {
    let wrapHandler = handler;
    if (type === 'click' || type === 'mousedown' || type === 'contextmenu') {
        wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
    } else if (type === 'keydown' || type === 'keypress' || type === 'keyup') {
        wrapHandler = _wrapAsStandardKeyboardEvent(handler);
    }
    return addDisposableListener(node, type, wrapHandler, useCapture);
};
const addStandardDisposableGenericMouseDownListener = function addStandardDisposableListener(node, handler, useCapture) {
    const wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
    return addDisposableGenericMouseDownListener(node, wrapHandler, useCapture);
};
const addStandardDisposableGenericMouseUpListener = function addStandardDisposableListener(node, handler, useCapture) {
    const wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
    return addDisposableGenericMouseUpListener(node, wrapHandler, useCapture);
};
function addDisposableGenericMouseDownListener(node, handler, useCapture) {
    return addDisposableListener(node, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"] && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserFeatures"].pointerEvents ? EventType.POINTER_DOWN : EventType.MOUSE_DOWN, handler, useCapture);
}
function addDisposableGenericMouseMoveListener(node, handler, useCapture) {
    return addDisposableListener(node, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"] && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserFeatures"].pointerEvents ? EventType.POINTER_MOVE : EventType.MOUSE_MOVE, handler, useCapture);
}
function addDisposableGenericMouseUpListener(node, handler, useCapture) {
    return addDisposableListener(node, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"] && __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserFeatures"].pointerEvents ? EventType.POINTER_UP : EventType.MOUSE_UP, handler, useCapture);
}
function runWhenWindowIdle(targetWindow, callback, timeout) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_runWhenIdle"])(targetWindow, callback, timeout);
}
class WindowIdleValue extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractIdleValue"] {
    constructor(targetWindow, executor){
        super(targetWindow, executor);
    }
}
let runAtThisOrScheduleAtNextAnimationFrame;
let scheduleAtNextAnimationFrame;
class WindowIntervalTimer extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntervalTimer"] {
    cancelAndSet(runner, interval, targetWindow) {
        return super.cancelAndSet(runner, interval, targetWindow !== null && targetWindow !== void 0 ? targetWindow : this.defaultTarget);
    }
    /**
     *
     * @param node The optional node from which the target window is determined
     */ constructor(node){
        super();
        this.defaultTarget = node && getWindow(node);
    }
}
class AnimationFrameQueueItem {
    dispose() {
        this._canceled = true;
    }
    execute() {
        if (this._canceled) {
            return;
        }
        try {
            this._runner();
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(e);
        }
    }
    // Sort by priority (largest to lowest)
    static sort(a, b) {
        return b.priority - a.priority;
    }
    constructor(runner, priority = 0){
        this._runner = runner;
        this.priority = priority;
        this._canceled = false;
    }
}
(function() {
    /**
     * The runners scheduled at the next animation frame
     */ const NEXT_QUEUE = new Map();
    /**
     * The runners scheduled at the current animation frame
     */ const CURRENT_QUEUE = new Map();
    /**
     * A flag to keep track if the native requestAnimationFrame was already called
     */ const animFrameRequested = new Map();
    /**
     * A flag to indicate if currently handling a native requestAnimationFrame callback
     */ const inAnimationFrameRunner = new Map();
    const animationFrameRunner = (targetWindowId)=>{
        animFrameRequested.set(targetWindowId, false);
        var _NEXT_QUEUE_get;
        const currentQueue = (_NEXT_QUEUE_get = NEXT_QUEUE.get(targetWindowId)) !== null && _NEXT_QUEUE_get !== void 0 ? _NEXT_QUEUE_get : [];
        CURRENT_QUEUE.set(targetWindowId, currentQueue);
        NEXT_QUEUE.set(targetWindowId, []);
        inAnimationFrameRunner.set(targetWindowId, true);
        while(currentQueue.length > 0){
            currentQueue.sort(AnimationFrameQueueItem.sort);
            const top = currentQueue.shift();
            top.execute();
        }
        inAnimationFrameRunner.set(targetWindowId, false);
    };
    scheduleAtNextAnimationFrame = function(targetWindow, runner) {
        let priority = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        const targetWindowId = getWindowId(targetWindow);
        const item = new AnimationFrameQueueItem(runner, priority);
        let nextQueue = NEXT_QUEUE.get(targetWindowId);
        if (!nextQueue) {
            nextQueue = [];
            NEXT_QUEUE.set(targetWindowId, nextQueue);
        }
        nextQueue.push(item);
        if (!animFrameRequested.get(targetWindowId)) {
            animFrameRequested.set(targetWindowId, true);
            targetWindow.requestAnimationFrame(()=>animationFrameRunner(targetWindowId));
        }
        return item;
    };
    runAtThisOrScheduleAtNextAnimationFrame = (targetWindow, runner, priority)=>{
        const targetWindowId = getWindowId(targetWindow);
        if (inAnimationFrameRunner.get(targetWindowId)) {
            const item = new AnimationFrameQueueItem(runner, priority);
            let currentQueue = CURRENT_QUEUE.get(targetWindowId);
            if (!currentQueue) {
                currentQueue = [];
                CURRENT_QUEUE.set(targetWindowId, currentQueue);
            }
            currentQueue.push(item);
            return item;
        } else {
            return scheduleAtNextAnimationFrame(targetWindow, runner, priority);
        }
    };
})();
function getComputedStyle(el) {
    return getWindow(el).getComputedStyle(el, null);
}
function getClientArea(element, defaultValue, fallbackElement) {
    const elWindow = getWindow(element);
    const elDocument = elWindow.document;
    // Try with DOM clientWidth / clientHeight
    if (element !== elDocument.body) {
        return new Dimension(element.clientWidth, element.clientHeight);
    }
    // If visual view port exits and it's on mobile, it should be used instead of window innerWidth / innerHeight, or document.body.clientWidth / document.body.clientHeight
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"] && (elWindow === null || elWindow === void 0 ? void 0 : elWindow.visualViewport)) {
        return new Dimension(elWindow.visualViewport.width, elWindow.visualViewport.height);
    }
    // Try innerWidth / innerHeight
    if ((elWindow === null || elWindow === void 0 ? void 0 : elWindow.innerWidth) && elWindow.innerHeight) {
        return new Dimension(elWindow.innerWidth, elWindow.innerHeight);
    }
    // Try with document.body.clientWidth / document.body.clientHeight
    if (elDocument.body && elDocument.body.clientWidth && elDocument.body.clientHeight) {
        return new Dimension(elDocument.body.clientWidth, elDocument.body.clientHeight);
    }
    // Try with document.documentElement.clientWidth / document.documentElement.clientHeight
    if (elDocument.documentElement && elDocument.documentElement.clientWidth && elDocument.documentElement.clientHeight) {
        return new Dimension(elDocument.documentElement.clientWidth, elDocument.documentElement.clientHeight);
    }
    if (fallbackElement) {
        return getClientArea(fallbackElement, defaultValue);
    }
    if (defaultValue) {
        return defaultValue;
    }
    throw new Error('Unable to figure out browser width and height');
}
class SizeUtils {
    // Adapted from WinJS
    // Converts a CSS positioning string for the specified element to pixels.
    static convertToPixels(element, value) {
        return parseFloat(value) || 0;
    }
    static getDimension(element, cssPropertyName) {
        const computedStyle = getComputedStyle(element);
        const value = computedStyle ? computedStyle.getPropertyValue(cssPropertyName) : '0';
        return SizeUtils.convertToPixels(element, value);
    }
    static getBorderLeftWidth(element) {
        return SizeUtils.getDimension(element, 'border-left-width');
    }
    static getBorderRightWidth(element) {
        return SizeUtils.getDimension(element, 'border-right-width');
    }
    static getBorderTopWidth(element) {
        return SizeUtils.getDimension(element, 'border-top-width');
    }
    static getBorderBottomWidth(element) {
        return SizeUtils.getDimension(element, 'border-bottom-width');
    }
    static getPaddingLeft(element) {
        return SizeUtils.getDimension(element, 'padding-left');
    }
    static getPaddingRight(element) {
        return SizeUtils.getDimension(element, 'padding-right');
    }
    static getPaddingTop(element) {
        return SizeUtils.getDimension(element, 'padding-top');
    }
    static getPaddingBottom(element) {
        return SizeUtils.getDimension(element, 'padding-bottom');
    }
    static getMarginLeft(element) {
        return SizeUtils.getDimension(element, 'margin-left');
    }
    static getMarginTop(element) {
        return SizeUtils.getDimension(element, 'margin-top');
    }
    static getMarginRight(element) {
        return SizeUtils.getDimension(element, 'margin-right');
    }
    static getMarginBottom(element) {
        return SizeUtils.getDimension(element, 'margin-bottom');
    }
}
class Dimension {
    with() {
        let width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.width, height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.height;
        if (width !== this.width || height !== this.height) {
            return new Dimension(width, height);
        } else {
            return this;
        }
    }
    static is(obj) {
        return typeof obj === 'object' && typeof obj.height === 'number' && typeof obj.width === 'number';
    }
    static lift(obj) {
        if (obj instanceof Dimension) {
            return obj;
        } else {
            return new Dimension(obj.width, obj.height);
        }
    }
    static equals(a, b) {
        if (a === b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.width === b.width && a.height === b.height;
    }
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
Dimension.None = new Dimension(0, 0);
function getTopLeftOffset(element) {
    // Adapted from WinJS.Utilities.getPosition
    // and added borders to the mix
    let offsetParent = element.offsetParent;
    let top = element.offsetTop;
    let left = element.offsetLeft;
    while((element = element.parentNode) !== null && element !== element.ownerDocument.body && element !== element.ownerDocument.documentElement){
        top -= element.scrollTop;
        const c = isShadowRoot(element) ? null : getComputedStyle(element);
        if (c) {
            left -= c.direction !== 'rtl' ? element.scrollLeft : -element.scrollLeft;
        }
        if (element === offsetParent) {
            left += SizeUtils.getBorderLeftWidth(element);
            top += SizeUtils.getBorderTopWidth(element);
            top += element.offsetTop;
            left += element.offsetLeft;
            offsetParent = element.offsetParent;
        }
    }
    return {
        left: left,
        top: top
    };
}
function size(element, width, height) {
    if (typeof width === 'number') {
        element.style.width = "".concat(width, "px");
    }
    if (typeof height === 'number') {
        element.style.height = "".concat(height, "px");
    }
}
function getDomNodePagePosition(domNode) {
    const bb = domNode.getBoundingClientRect();
    const window = getWindow(domNode);
    return {
        left: bb.left + window.scrollX,
        top: bb.top + window.scrollY,
        width: bb.width,
        height: bb.height
    };
}
function getDomNodeZoomLevel(domNode) {
    let testElement = domNode;
    let zoom = 1.0;
    do {
        const elementZoomLevel = getComputedStyle(testElement).zoom;
        if (elementZoomLevel !== null && elementZoomLevel !== undefined && elementZoomLevel !== '1') {
            zoom *= elementZoomLevel;
        }
        testElement = testElement.parentElement;
    }while (testElement !== null && testElement !== testElement.ownerDocument.documentElement)
    return zoom;
}
function getTotalWidth(element) {
    const margin = SizeUtils.getMarginLeft(element) + SizeUtils.getMarginRight(element);
    return element.offsetWidth + margin;
}
function getContentWidth(element) {
    const border = SizeUtils.getBorderLeftWidth(element) + SizeUtils.getBorderRightWidth(element);
    const padding = SizeUtils.getPaddingLeft(element) + SizeUtils.getPaddingRight(element);
    return element.offsetWidth - border - padding;
}
function getContentHeight(element) {
    const border = SizeUtils.getBorderTopWidth(element) + SizeUtils.getBorderBottomWidth(element);
    const padding = SizeUtils.getPaddingTop(element) + SizeUtils.getPaddingBottom(element);
    return element.offsetHeight - border - padding;
}
function getTotalHeight(element) {
    const margin = SizeUtils.getMarginTop(element) + SizeUtils.getMarginBottom(element);
    return element.offsetHeight + margin;
}
function isAncestor(testChild, testAncestor) {
    return Boolean(testAncestor === null || testAncestor === void 0 ? void 0 : testAncestor.contains(testChild));
}
function findParentWithClass(node, clazz, stopAtClazzOrNode) {
    while(node && node.nodeType === node.ELEMENT_NODE){
        if (node.classList.contains(clazz)) {
            return node;
        }
        if (stopAtClazzOrNode) {
            if (typeof stopAtClazzOrNode === 'string') {
                if (node.classList.contains(stopAtClazzOrNode)) {
                    return null;
                }
            } else {
                if (node === stopAtClazzOrNode) {
                    return null;
                }
            }
        }
        node = node.parentNode;
    }
    return null;
}
function hasParentWithClass(node, clazz, stopAtClazzOrNode) {
    return !!findParentWithClass(node, clazz, stopAtClazzOrNode);
}
function isShadowRoot(node) {
    return node && !!node.host && !!node.mode;
}
function isInShadowDOM(domNode) {
    return !!getShadowRoot(domNode);
}
function getShadowRoot(domNode) {
    while(domNode.parentNode){
        var _domNode_ownerDocument;
        if (domNode === ((_domNode_ownerDocument = domNode.ownerDocument) === null || _domNode_ownerDocument === void 0 ? void 0 : _domNode_ownerDocument.body)) {
            // reached the body
            return null;
        }
        domNode = domNode.parentNode;
    }
    return isShadowRoot(domNode) ? domNode : null;
}
function getActiveElement() {
    let result = getActiveDocument().activeElement;
    while(result === null || result === void 0 ? void 0 : result.shadowRoot){
        result = result.shadowRoot.activeElement;
    }
    return result;
}
function isActiveElement(element) {
    return getActiveElement() === element;
}
function isAncestorOfActiveElement(ancestor) {
    return isAncestor(getActiveElement(), ancestor);
}
function getActiveDocument() {
    if (getWindowsCount() <= 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].document;
    }
    const documents = Array.from(getWindows()).map((param)=>{
        let { window } = param;
        return window.document;
    });
    var _documents_find;
    return (_documents_find = documents.find((doc)=>doc.hasFocus())) !== null && _documents_find !== void 0 ? _documents_find : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].document;
}
function getActiveWindow() {
    var _document_defaultView;
    const document1 = getActiveDocument();
    var _document_defaultView_window;
    return (_document_defaultView_window = (_document_defaultView = document1.defaultView) === null || _document_defaultView === void 0 ? void 0 : _document_defaultView.window) !== null && _document_defaultView_window !== void 0 ? _document_defaultView_window : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"];
}
const sharedMutationObserver = new class {
    observe(target, disposables, options) {
        let mutationObserversPerTarget = this.mutationObservers.get(target);
        if (!mutationObserversPerTarget) {
            mutationObserversPerTarget = new Map();
            this.mutationObservers.set(target, mutationObserversPerTarget);
        }
        const optionsHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])(options);
        let mutationObserverPerOptions = mutationObserversPerTarget.get(optionsHash);
        if (!mutationObserverPerOptions) {
            const onDidMutate = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
            const observer = new MutationObserver((mutations)=>onDidMutate.fire(mutations));
            observer.observe(target, options);
            const resolvedMutationObserverPerOptions = mutationObserverPerOptions = {
                users: 1,
                observer,
                onDidMutate: onDidMutate.event
            };
            disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                resolvedMutationObserverPerOptions.users -= 1;
                if (resolvedMutationObserverPerOptions.users === 0) {
                    onDidMutate.dispose();
                    observer.disconnect();
                    mutationObserversPerTarget === null || mutationObserversPerTarget === void 0 ? void 0 : mutationObserversPerTarget.delete(optionsHash);
                    if ((mutationObserversPerTarget === null || mutationObserversPerTarget === void 0 ? void 0 : mutationObserversPerTarget.size) === 0) {
                        this.mutationObservers.delete(target);
                    }
                }
            }));
            mutationObserversPerTarget.set(optionsHash, mutationObserverPerOptions);
        } else {
            mutationObserverPerOptions.users += 1;
        }
        return mutationObserverPerOptions.onDidMutate;
    }
    constructor(){
        this.mutationObservers = new Map();
    }
};
function isHTMLElement(e) {
    // eslint-disable-next-line no-restricted-syntax
    return e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement;
}
function isHTMLAnchorElement(e) {
    // eslint-disable-next-line no-restricted-syntax
    return e instanceof HTMLAnchorElement || e instanceof getWindow(e).HTMLAnchorElement;
}
function isSVGElement(e) {
    // eslint-disable-next-line no-restricted-syntax
    return e instanceof SVGElement || e instanceof getWindow(e).SVGElement;
}
function isMouseEvent(e) {
    // eslint-disable-next-line no-restricted-syntax
    return e instanceof MouseEvent || e instanceof getWindow(e).MouseEvent;
}
function isKeyboardEvent(e) {
    // eslint-disable-next-line no-restricted-syntax
    return e instanceof KeyboardEvent || e instanceof getWindow(e).KeyboardEvent;
}
const EventType = {
    // Mouse
    CLICK: 'click',
    AUXCLICK: 'auxclick',
    DBLCLICK: 'dblclick',
    MOUSE_UP: 'mouseup',
    MOUSE_DOWN: 'mousedown',
    MOUSE_OVER: 'mouseover',
    MOUSE_MOVE: 'mousemove',
    MOUSE_OUT: 'mouseout',
    MOUSE_ENTER: 'mouseenter',
    MOUSE_LEAVE: 'mouseleave',
    MOUSE_WHEEL: 'wheel',
    POINTER_UP: 'pointerup',
    POINTER_DOWN: 'pointerdown',
    POINTER_MOVE: 'pointermove',
    POINTER_LEAVE: 'pointerleave',
    CONTEXT_MENU: 'contextmenu',
    WHEEL: 'wheel',
    // Keyboard
    KEY_DOWN: 'keydown',
    KEY_PRESS: 'keypress',
    KEY_UP: 'keyup',
    // HTML Document
    LOAD: 'load',
    BEFORE_UNLOAD: 'beforeunload',
    UNLOAD: 'unload',
    PAGE_SHOW: 'pageshow',
    PAGE_HIDE: 'pagehide',
    PASTE: 'paste',
    ABORT: 'abort',
    ERROR: 'error',
    RESIZE: 'resize',
    SCROLL: 'scroll',
    FULLSCREEN_CHANGE: 'fullscreenchange',
    WK_FULLSCREEN_CHANGE: 'webkitfullscreenchange',
    // Form
    SELECT: 'select',
    CHANGE: 'change',
    SUBMIT: 'submit',
    RESET: 'reset',
    FOCUS: 'focus',
    FOCUS_IN: 'focusin',
    FOCUS_OUT: 'focusout',
    BLUR: 'blur',
    INPUT: 'input',
    // Local Storage
    STORAGE: 'storage',
    // Drag
    DRAG_START: 'dragstart',
    DRAG: 'drag',
    DRAG_ENTER: 'dragenter',
    DRAG_LEAVE: 'dragleave',
    DRAG_OVER: 'dragover',
    DROP: 'drop',
    DRAG_END: 'dragend',
    // Animation
    ANIMATION_START: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"] ? 'webkitAnimationStart' : 'animationstart',
    ANIMATION_END: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"] ? 'webkitAnimationEnd' : 'animationend',
    ANIMATION_ITERATION: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"] ? 'webkitAnimationIteration' : 'animationiteration'
};
function isEventLike(obj) {
    const candidate = obj;
    return !!(candidate && typeof candidate.preventDefault === 'function' && typeof candidate.stopPropagation === 'function');
}
const EventHelper = {
    stop: (e, cancelBubble)=>{
        e.preventDefault();
        if (cancelBubble) {
            e.stopPropagation();
        }
        return e;
    }
};
function saveParentsScrollTop(node) {
    const r = [];
    for(let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++){
        r[i] = node.scrollTop;
        node = node.parentNode;
    }
    return r;
}
function restoreParentsScrollTop(node, state) {
    for(let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++){
        if (node.scrollTop !== state[i]) {
            node.scrollTop = state[i];
        }
        node = node.parentNode;
    }
}
class FocusTracker extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidFocus() {
        return this._onDidFocus.event;
    }
    get onDidBlur() {
        return this._onDidBlur.event;
    }
    static hasFocusWithin(element) {
        if (isHTMLElement(element)) {
            const shadowRoot = getShadowRoot(element);
            const activeElement = shadowRoot ? shadowRoot.activeElement : element.ownerDocument.activeElement;
            return isAncestor(activeElement, element);
        } else {
            const window = element;
            return isAncestor(window.document.activeElement, window.document);
        }
    }
    constructor(element){
        super();
        this._onDidFocus = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidBlur = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        let hasFocus = FocusTracker.hasFocusWithin(element);
        let loosingFocus = false;
        const onFocus = ()=>{
            loosingFocus = false;
            if (!hasFocus) {
                hasFocus = true;
                this._onDidFocus.fire();
            }
        };
        const onBlur = ()=>{
            if (hasFocus) {
                loosingFocus = true;
                (isHTMLElement(element) ? getWindow(element) : element).setTimeout(()=>{
                    if (loosingFocus) {
                        loosingFocus = false;
                        hasFocus = false;
                        this._onDidBlur.fire();
                    }
                }, 0);
            }
        };
        this._refreshStateHandler = ()=>{
            const currentNodeHasFocus = FocusTracker.hasFocusWithin(element);
            if (currentNodeHasFocus !== hasFocus) {
                if (hasFocus) {
                    onBlur();
                } else {
                    onFocus();
                }
            }
        };
        this._register(addDisposableListener(element, EventType.FOCUS, onFocus, true));
        this._register(addDisposableListener(element, EventType.BLUR, onBlur, true));
        if (isHTMLElement(element)) {
            this._register(addDisposableListener(element, EventType.FOCUS_IN, ()=>this._refreshStateHandler()));
            this._register(addDisposableListener(element, EventType.FOCUS_OUT, ()=>this._refreshStateHandler()));
        }
    }
}
function trackFocus(element) {
    return new FocusTracker(element);
}
function after(sibling, child) {
    sibling.after(child);
    return child;
}
function append(parent) {
    for(var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        children[_key - 1] = arguments[_key];
    }
    parent.append(...children);
    if (children.length === 1 && typeof children[0] !== 'string') {
        return children[0];
    }
}
function prepend(parent, child) {
    parent.insertBefore(child, parent.firstChild);
    return child;
}
function reset(parent) {
    for(var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        children[_key - 1] = arguments[_key];
    }
    parent.textContent = '';
    append(parent, ...children);
}
const SELECTOR_REGEX = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
var Namespace;
(function(Namespace) {
    Namespace["HTML"] = "http://www.w3.org/1999/xhtml";
    Namespace["SVG"] = "http://www.w3.org/2000/svg";
})(Namespace || (Namespace = {}));
function _$(namespace, description, attrs) {
    for(var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        children[_key - 3] = arguments[_key];
    }
    const match = SELECTOR_REGEX.exec(description);
    if (!match) {
        throw new Error('Bad use of emmet');
    }
    const tagName = match[1] || 'div';
    let result;
    if (namespace !== Namespace.HTML) {
        result = document.createElementNS(namespace, tagName);
    } else {
        result = document.createElement(tagName);
    }
    if (match[3]) {
        result.id = match[3];
    }
    if (match[4]) {
        result.className = match[4].replace(/\./g, ' ').trim();
    }
    if (attrs) {
        Object.entries(attrs).forEach((param)=>{
            let [name, value] = param;
            if (typeof value === 'undefined') {
                return;
            }
            if (/^on\w+$/.test(name)) {
                result[name] = value;
            } else if (name === 'selected') {
                if (value) {
                    result.setAttribute(name, 'true');
                }
            } else {
                result.setAttribute(name, value);
            }
        });
    }
    result.append(...children);
    return result;
}
function $(description, attrs) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    return _$(Namespace.HTML, description, attrs, ...children);
}
$.SVG = function(description, attrs) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    return _$(Namespace.SVG, description, attrs, ...children);
};
function setVisibility(visible) {
    for(var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        elements[_key - 1] = arguments[_key];
    }
    if (visible) {
        show(...elements);
    } else {
        hide(...elements);
    }
}
function show() {
    for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
        elements[_key] = arguments[_key];
    }
    for (const element of elements){
        element.style.display = '';
        element.removeAttribute('aria-hidden');
    }
}
function hide() {
    for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
        elements[_key] = arguments[_key];
    }
    for (const element of elements){
        element.style.display = 'none';
        element.setAttribute('aria-hidden', 'true');
    }
}
function computeScreenAwareSize(window, cssPx) {
    const screenPx = window.devicePixelRatio * cssPx;
    return Math.max(1, Math.floor(screenPx)) / window.devicePixelRatio;
}
function windowOpenNoOpener(url) {
    // By using 'noopener' in the `windowFeatures` argument, the newly created window will
    // not be able to use `window.opener` to reach back to the current page.
    // See https://stackoverflow.com/a/46958731
    // See https://developer.mozilla.org/en-US/docs/Web/API/Window/open#noopener
    // However, this also doesn't allow us to realize if the browser blocked
    // the creation of the window.
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].open(url, '_blank', 'noopener');
}
function animate(targetWindow, fn) {
    const step = ()=>{
        fn();
        stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
    };
    let stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>stepDisposable.dispose());
}
__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteAuthorities"].setPreferredWebSchema(/^https:/.test(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].location.href) ? 'https' : 'http');
class ModifierKeyEmitter extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    registerListeners(window, disposables) {
        disposables.add(addDisposableListener(window, 'keydown', (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            // If Alt-key keydown event is repeated, ignore it #112347
            // Only known to be necessary for Alt-Key at the moment #115810
            if (event.keyCode === 6 /* KeyCode.Alt */  && e.repeat) {
                return;
            }
            if (e.altKey && !this._keyStatus.altKey) {
                this._keyStatus.lastKeyPressed = 'alt';
            } else if (e.ctrlKey && !this._keyStatus.ctrlKey) {
                this._keyStatus.lastKeyPressed = 'ctrl';
            } else if (e.metaKey && !this._keyStatus.metaKey) {
                this._keyStatus.lastKeyPressed = 'meta';
            } else if (e.shiftKey && !this._keyStatus.shiftKey) {
                this._keyStatus.lastKeyPressed = 'shift';
            } else if (event.keyCode !== 6 /* KeyCode.Alt */ ) {
                this._keyStatus.lastKeyPressed = undefined;
            } else {
                return;
            }
            this._keyStatus.altKey = e.altKey;
            this._keyStatus.ctrlKey = e.ctrlKey;
            this._keyStatus.metaKey = e.metaKey;
            this._keyStatus.shiftKey = e.shiftKey;
            if (this._keyStatus.lastKeyPressed) {
                this._keyStatus.event = e;
                this.fire(this._keyStatus);
            }
        }, true));
        disposables.add(addDisposableListener(window, 'keyup', (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            if (!e.altKey && this._keyStatus.altKey) {
                this._keyStatus.lastKeyReleased = 'alt';
            } else if (!e.ctrlKey && this._keyStatus.ctrlKey) {
                this._keyStatus.lastKeyReleased = 'ctrl';
            } else if (!e.metaKey && this._keyStatus.metaKey) {
                this._keyStatus.lastKeyReleased = 'meta';
            } else if (!e.shiftKey && this._keyStatus.shiftKey) {
                this._keyStatus.lastKeyReleased = 'shift';
            } else {
                this._keyStatus.lastKeyReleased = undefined;
            }
            if (this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased) {
                this._keyStatus.lastKeyPressed = undefined;
            }
            this._keyStatus.altKey = e.altKey;
            this._keyStatus.ctrlKey = e.ctrlKey;
            this._keyStatus.metaKey = e.metaKey;
            this._keyStatus.shiftKey = e.shiftKey;
            if (this._keyStatus.lastKeyReleased) {
                this._keyStatus.event = e;
                this.fire(this._keyStatus);
            }
        }, true));
        disposables.add(addDisposableListener(window.document.body, 'mousedown', ()=>{
            this._keyStatus.lastKeyPressed = undefined;
        }, true));
        disposables.add(addDisposableListener(window.document.body, 'mouseup', ()=>{
            this._keyStatus.lastKeyPressed = undefined;
        }, true));
        disposables.add(addDisposableListener(window.document.body, 'mousemove', (e)=>{
            if (e.buttons) {
                this._keyStatus.lastKeyPressed = undefined;
            }
        }, true));
        disposables.add(addDisposableListener(window, 'blur', ()=>{
            this.resetKeyStatus();
        }));
    }
    get keyStatus() {
        return this._keyStatus;
    }
    /**
     * Allows to explicitly reset the key status based on more knowledge (#109062)
     */ resetKeyStatus() {
        this.doResetKeyStatus();
        this.fire(this._keyStatus);
    }
    doResetKeyStatus() {
        this._keyStatus = {
            altKey: false,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
        };
    }
    static getInstance() {
        if (!ModifierKeyEmitter.instance) {
            ModifierKeyEmitter.instance = new ModifierKeyEmitter();
        }
        return ModifierKeyEmitter.instance;
    }
    dispose() {
        super.dispose();
        this._subscriptions.dispose();
    }
    constructor(){
        super();
        this._subscriptions = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._keyStatus = {
            altKey: false,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
        };
        this._subscriptions.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].runAndSubscribe(onDidRegisterWindow, (param)=>{
            let { window, disposables } = param;
            return this.registerListeners(window, disposables);
        }, {
            window: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"],
            disposables: this._subscriptions
        }));
    }
}
class DragAndDropObserver extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    registerListeners() {
        if (this.callbacks.onDragStart) {
            this._register(addDisposableListener(this.element, EventType.DRAG_START, (e)=>{
                var _this_callbacks_onDragStart, _this_callbacks;
                (_this_callbacks_onDragStart = (_this_callbacks = this.callbacks).onDragStart) === null || _this_callbacks_onDragStart === void 0 ? void 0 : _this_callbacks_onDragStart.call(_this_callbacks, e);
            }));
        }
        if (this.callbacks.onDrag) {
            this._register(addDisposableListener(this.element, EventType.DRAG, (e)=>{
                var _this_callbacks_onDrag, _this_callbacks;
                (_this_callbacks_onDrag = (_this_callbacks = this.callbacks).onDrag) === null || _this_callbacks_onDrag === void 0 ? void 0 : _this_callbacks_onDrag.call(_this_callbacks, e);
            }));
        }
        this._register(addDisposableListener(this.element, EventType.DRAG_ENTER, (e)=>{
            var _this_callbacks_onDragEnter, _this_callbacks;
            this.counter++;
            this.dragStartTime = e.timeStamp;
            (_this_callbacks_onDragEnter = (_this_callbacks = this.callbacks).onDragEnter) === null || _this_callbacks_onDragEnter === void 0 ? void 0 : _this_callbacks_onDragEnter.call(_this_callbacks, e);
        }));
        this._register(addDisposableListener(this.element, EventType.DRAG_OVER, (e)=>{
            var _this_callbacks_onDragOver, _this_callbacks;
            e.preventDefault(); // needed so that the drop event fires (https://stackoverflow.com/questions/21339924/drop-event-not-firing-in-chrome)
            (_this_callbacks_onDragOver = (_this_callbacks = this.callbacks).onDragOver) === null || _this_callbacks_onDragOver === void 0 ? void 0 : _this_callbacks_onDragOver.call(_this_callbacks, e, e.timeStamp - this.dragStartTime);
        }));
        this._register(addDisposableListener(this.element, EventType.DRAG_LEAVE, (e)=>{
            this.counter--;
            if (this.counter === 0) {
                var _this_callbacks_onDragLeave, _this_callbacks;
                this.dragStartTime = 0;
                (_this_callbacks_onDragLeave = (_this_callbacks = this.callbacks).onDragLeave) === null || _this_callbacks_onDragLeave === void 0 ? void 0 : _this_callbacks_onDragLeave.call(_this_callbacks, e);
            }
        }));
        this._register(addDisposableListener(this.element, EventType.DRAG_END, (e)=>{
            var _this_callbacks_onDragEnd, _this_callbacks;
            this.counter = 0;
            this.dragStartTime = 0;
            (_this_callbacks_onDragEnd = (_this_callbacks = this.callbacks).onDragEnd) === null || _this_callbacks_onDragEnd === void 0 ? void 0 : _this_callbacks_onDragEnd.call(_this_callbacks, e);
        }));
        this._register(addDisposableListener(this.element, EventType.DROP, (e)=>{
            var _this_callbacks_onDrop, _this_callbacks;
            this.counter = 0;
            this.dragStartTime = 0;
            (_this_callbacks_onDrop = (_this_callbacks = this.callbacks).onDrop) === null || _this_callbacks_onDrop === void 0 ? void 0 : _this_callbacks_onDrop.call(_this_callbacks, e);
        }));
    }
    constructor(element, callbacks){
        super();
        this.element = element;
        this.callbacks = callbacks;
        // A helper to fix issues with repeated DRAG_ENTER / DRAG_LEAVE
        // calls see https://github.com/microsoft/vscode/issues/14470
        // when the element has child elements where the events are fired
        // repeadedly.
        this.counter = 0;
        // Allows to measure the duration of the drag operation.
        this.dragStartTime = 0;
        this.registerListeners();
    }
}
const H_REGEX = RegExp("(?<tag>[\\w\\-]+)?(?:#(?<id>[\\w\\-]+))?(?<class>(?:\\.(?:[\\w\\-]+))*)(?:@(?<name>(?:[\\w\\_])+))?");
function h(tag) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    let attributes;
    let children;
    if (Array.isArray(args[0])) {
        attributes = {};
        children = args[0];
    } else {
        attributes = args[0] || {};
        children = args[1];
    }
    const match = H_REGEX.exec(tag);
    if (!match || !match.groups) {
        throw new Error('Bad use of h');
    }
    const tagName = match.groups['tag'] || 'div';
    const el = document.createElement(tagName);
    if (match.groups['id']) {
        el.id = match.groups['id'];
    }
    const classNames = [];
    if (match.groups['class']) {
        for (const className of match.groups['class'].split('.')){
            if (className !== '') {
                classNames.push(className);
            }
        }
    }
    if (attributes.className !== undefined) {
        for (const className of attributes.className.split('.')){
            if (className !== '') {
                classNames.push(className);
            }
        }
    }
    if (classNames.length > 0) {
        el.className = classNames.join(' ');
    }
    const result = {};
    if (match.groups['name']) {
        result[match.groups['name']] = el;
    }
    if (children) {
        for (const c of children){
            if (isHTMLElement(c)) {
                el.appendChild(c);
            } else if (typeof c === 'string') {
                el.append(c);
            } else if ('root' in c) {
                Object.assign(result, c);
                el.appendChild(c.root);
            }
        }
    }
    for (const [key, value] of Object.entries(attributes)){
        if (key === 'className') {
            continue;
        } else if (key === 'style') {
            for (const [cssKey, cssValue] of Object.entries(value)){
                el.style.setProperty(camelCaseToHyphenCase(cssKey), typeof cssValue === 'number' ? cssValue + 'px' : '' + cssValue);
            }
        } else if (key === 'tabIndex') {
            el.tabIndex = value;
        } else {
            el.setAttribute(camelCaseToHyphenCase(key), value.toString());
        }
    }
    result['root'] = el;
    return result;
}
function camelCaseToHyphenCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isEditableElement(element) {
    return element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea' || isHTMLElement(element) && !!element.editContext;
}
var n;
(function(n) {
    function nodeNs() {
        let elementNs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : undefined;
        return (tag, attributes, children)=>{
            const className = attributes.class;
            delete attributes.class;
            const ref = attributes.ref;
            delete attributes.ref;
            const obsRef = attributes.obsRef;
            delete attributes.obsRef;
            return new ObserverNodeWithElement(tag, ref, obsRef, elementNs, className, attributes, children);
        };
    }
    function node(tag) {
        let elementNs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
        const f = nodeNs(elementNs);
        return (attributes, children)=>{
            return f(tag, attributes, children);
        };
    }
    n.div = node('div');
    n.elem = nodeNs(undefined);
    n.svg = node('svg', 'http://www.w3.org/2000/svg');
    n.svgElem = nodeNs('http://www.w3.org/2000/svg');
    function ref() {
        let value = undefined;
        const result = function(val) {
            value = val;
        };
        Object.defineProperty(result, 'element', {
            get () {
                if (!value) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Make sure the ref is set before accessing the element. Maybe wrong initialization order?');
                }
                return value;
            }
        });
        return result;
    }
    n.ref = ref;
})(n || (n = {}));
class ObserverNode {
    readEffect(reader) {
        for (const d of this._deriveds){
            d.read(reader);
        }
    }
    keepUpdated(store) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])((reader)=>{
            /** update */ this.readEffect(reader);
        }).recomputeInitiallyAndOnChange(store);
        return this;
    }
    /**
     * Creates a live element that will keep the element updated as long as the returned object is not disposed.
    */ toDisposableLiveElement() {
        const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.keepUpdated(store);
        return new LiveElement(this._element, store);
    }
    constructor(tag, ref, obsRef, ns, className, attributes, children){
        this._deriveds = [];
        this._element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (ref) {
            ref(this._element);
        }
        if (obsRef) {
            this._deriveds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])((_reader)=>{
                obsRef(this);
                _reader.store.add({
                    dispose: ()=>{
                        obsRef(null);
                    }
                });
            }));
        }
        if (className) {
            if (hasObservable(className)) {
                this._deriveds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
                    /** @description set.class */ setClassName(this._element, getClassName(className, reader));
                }));
            } else {
                setClassName(this._element, getClassName(className, undefined));
            }
        }
        for (const [key, value] of Object.entries(attributes)){
            if (key === 'style') {
                for (const [cssKey, cssValue] of Object.entries(value)){
                    const key = camelCaseToHyphenCase(cssKey);
                    if (isObservable(cssValue)) {
                        this._deriveds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"])({
                            owner: this,
                            debugName: ()=>"set.style.".concat(key)
                        }, (reader)=>{
                            this._element.style.setProperty(key, convertCssValue(cssValue.read(reader)));
                        }));
                    } else {
                        this._element.style.setProperty(key, convertCssValue(cssValue));
                    }
                }
            } else if (key === 'tabIndex') {
                if (isObservable(value)) {
                    this._deriveds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
                        /** @description set.tabIndex */ this._element.tabIndex = value.read(reader);
                    }));
                } else {
                    this._element.tabIndex = value;
                }
            } else if (key.startsWith('on')) {
                this._element[key] = value;
            } else {
                if (isObservable(value)) {
                    this._deriveds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivedOpts"])({
                        owner: this,
                        debugName: ()=>"set.".concat(key)
                    }, (reader)=>{
                        setOrRemoveAttribute(this._element, key, value.read(reader));
                    }));
                } else {
                    setOrRemoveAttribute(this._element, key, value);
                }
            }
        }
        if (children) {
            function getChildren(reader, children) {
                if (isObservable(children)) {
                    return getChildren(reader, children.read(reader));
                }
                if (Array.isArray(children)) {
                    return children.flatMap((c)=>getChildren(reader, c));
                }
                if (children instanceof ObserverNode) {
                    if (reader) {
                        children.readEffect(reader);
                    }
                    return [
                        children._element
                    ];
                }
                if (children) {
                    return [
                        children
                    ];
                }
                return [];
            }
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
                /** @description set.children */ this._element.replaceChildren(...getChildren(reader, children));
            });
            this._deriveds.push(d);
            if (!childrenIsObservable(children)) {
                d.get();
            }
        }
    }
}
function setClassName(domNode, className) {
    if (isSVGElement(domNode)) {
        domNode.setAttribute('class', className);
    } else {
        domNode.className = className;
    }
}
function resolve(value, reader, cb) {
    if (isObservable(value)) {
        cb(value.read(reader));
        return;
    }
    if (Array.isArray(value)) {
        for (const v of value){
            resolve(v, reader, cb);
        }
        return;
    }
    cb(value);
}
function getClassName(className, reader) {
    let result = '';
    resolve(className, reader, (val)=>{
        if (val) {
            if (result.length === 0) {
                result = val;
            } else {
                result += ' ' + val;
            }
        }
    });
    return result;
}
function hasObservable(value) {
    if (isObservable(value)) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.some((v)=>hasObservable(v));
    }
    return false;
}
function convertCssValue(value) {
    if (typeof value === 'number') {
        return value + 'px';
    }
    return value;
}
function childrenIsObservable(children) {
    if (isObservable(children)) {
        return true;
    }
    if (Array.isArray(children)) {
        return children.some((c)=>childrenIsObservable(c));
    }
    return false;
}
class LiveElement {
    dispose() {
        this._disposable.dispose();
    }
    constructor(element, _disposable){
        this.element = element;
        this._disposable = _disposable;
    }
}
class ObserverNodeWithElement extends ObserverNode {
    get element() {
        return this._element;
    }
    get isHovered() {
        if (!this._isHovered) {
            const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableValue"])('hovered', false);
            this._element.addEventListener('mouseenter', (_e)=>hovered.set(true, undefined));
            this._element.addEventListener('mouseleave', (_e)=>hovered.set(false, undefined));
            this._isHovered = hovered;
        }
        return this._isHovered;
    }
    get didMouseMoveDuringHover() {
        if (!this._didMouseMoveDuringHover) {
            let _hovering = false;
            const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observableValue"])('didMouseMoveDuringHover', false);
            this._element.addEventListener('mouseenter', (_e)=>{
                _hovering = true;
            });
            this._element.addEventListener('mousemove', (_e)=>{
                if (_hovering) {
                    hovered.set(true, undefined);
                }
            });
            this._element.addEventListener('mouseleave', (_e)=>{
                _hovering = false;
                hovered.set(false, undefined);
            });
            this._didMouseMoveDuringHover = hovered;
        }
        return this._didMouseMoveDuringHover;
    }
    constructor(){
        super(...arguments);
        this._isHovered = undefined;
        this._didMouseMoveDuringHover = undefined;
    }
}
function setOrRemoveAttribute(element, key, value) {
    if (value === null || value === undefined) {
        element.removeAttribute(camelCaseToHyphenCase(key));
    } else {
        element.setAttribute(camelCaseToHyphenCase(key), String(value));
    }
}
function isObservable(obj) {
    return !!obj && obj.read !== undefined && obj.reportChanges !== undefined;
} //# sourceMappingURL=dom.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "FastDomNode",
    ()=>FastDomNode,
    "createFastDomNode",
    ()=>createFastDomNode
]);
class FastDomNode {
    focus() {
        this.domNode.focus();
    }
    setMaxWidth(_maxWidth) {
        const maxWidth = numberAsPixels(_maxWidth);
        if (this._maxWidth === maxWidth) {
            return;
        }
        this._maxWidth = maxWidth;
        this.domNode.style.maxWidth = this._maxWidth;
    }
    setWidth(_width) {
        const width = numberAsPixels(_width);
        if (this._width === width) {
            return;
        }
        this._width = width;
        this.domNode.style.width = this._width;
    }
    setHeight(_height) {
        const height = numberAsPixels(_height);
        if (this._height === height) {
            return;
        }
        this._height = height;
        this.domNode.style.height = this._height;
    }
    setTop(_top) {
        const top = numberAsPixels(_top);
        if (this._top === top) {
            return;
        }
        this._top = top;
        this.domNode.style.top = this._top;
    }
    setLeft(_left) {
        const left = numberAsPixels(_left);
        if (this._left === left) {
            return;
        }
        this._left = left;
        this.domNode.style.left = this._left;
    }
    setBottom(_bottom) {
        const bottom = numberAsPixels(_bottom);
        if (this._bottom === bottom) {
            return;
        }
        this._bottom = bottom;
        this.domNode.style.bottom = this._bottom;
    }
    setRight(_right) {
        const right = numberAsPixels(_right);
        if (this._right === right) {
            return;
        }
        this._right = right;
        this.domNode.style.right = this._right;
    }
    setPaddingLeft(_paddingLeft) {
        const paddingLeft = numberAsPixels(_paddingLeft);
        if (this._paddingLeft === paddingLeft) {
            return;
        }
        this._paddingLeft = paddingLeft;
        this.domNode.style.paddingLeft = this._paddingLeft;
    }
    setFontFamily(fontFamily) {
        if (this._fontFamily === fontFamily) {
            return;
        }
        this._fontFamily = fontFamily;
        this.domNode.style.fontFamily = this._fontFamily;
    }
    setFontWeight(fontWeight) {
        if (this._fontWeight === fontWeight) {
            return;
        }
        this._fontWeight = fontWeight;
        this.domNode.style.fontWeight = this._fontWeight;
    }
    setFontSize(_fontSize) {
        const fontSize = numberAsPixels(_fontSize);
        if (this._fontSize === fontSize) {
            return;
        }
        this._fontSize = fontSize;
        this.domNode.style.fontSize = this._fontSize;
    }
    setFontStyle(fontStyle) {
        if (this._fontStyle === fontStyle) {
            return;
        }
        this._fontStyle = fontStyle;
        this.domNode.style.fontStyle = this._fontStyle;
    }
    setFontFeatureSettings(fontFeatureSettings) {
        if (this._fontFeatureSettings === fontFeatureSettings) {
            return;
        }
        this._fontFeatureSettings = fontFeatureSettings;
        this.domNode.style.fontFeatureSettings = this._fontFeatureSettings;
    }
    setFontVariationSettings(fontVariationSettings) {
        if (this._fontVariationSettings === fontVariationSettings) {
            return;
        }
        this._fontVariationSettings = fontVariationSettings;
        this.domNode.style.fontVariationSettings = this._fontVariationSettings;
    }
    setTextDecoration(textDecoration) {
        if (this._textDecoration === textDecoration) {
            return;
        }
        this._textDecoration = textDecoration;
        this.domNode.style.textDecoration = this._textDecoration;
    }
    setLineHeight(_lineHeight) {
        const lineHeight = numberAsPixels(_lineHeight);
        if (this._lineHeight === lineHeight) {
            return;
        }
        this._lineHeight = lineHeight;
        this.domNode.style.lineHeight = this._lineHeight;
    }
    setLetterSpacing(_letterSpacing) {
        const letterSpacing = numberAsPixels(_letterSpacing);
        if (this._letterSpacing === letterSpacing) {
            return;
        }
        this._letterSpacing = letterSpacing;
        this.domNode.style.letterSpacing = this._letterSpacing;
    }
    setClassName(className) {
        if (this._className === className) {
            return;
        }
        this._className = className;
        this.domNode.className = this._className;
    }
    toggleClassName(className, shouldHaveIt) {
        this.domNode.classList.toggle(className, shouldHaveIt);
        this._className = this.domNode.className;
    }
    setDisplay(display) {
        if (this._display === display) {
            return;
        }
        this._display = display;
        this.domNode.style.display = this._display;
    }
    setPosition(position) {
        if (this._position === position) {
            return;
        }
        this._position = position;
        this.domNode.style.position = this._position;
    }
    setVisibility(visibility) {
        if (this._visibility === visibility) {
            return;
        }
        this._visibility = visibility;
        this.domNode.style.visibility = this._visibility;
    }
    setColor(color) {
        if (this._color === color) {
            return;
        }
        this._color = color;
        this.domNode.style.color = this._color;
    }
    setBackgroundColor(backgroundColor) {
        if (this._backgroundColor === backgroundColor) {
            return;
        }
        this._backgroundColor = backgroundColor;
        this.domNode.style.backgroundColor = this._backgroundColor;
    }
    setLayerHinting(layerHint) {
        if (this._layerHint === layerHint) {
            return;
        }
        this._layerHint = layerHint;
        this.domNode.style.transform = this._layerHint ? 'translate3d(0px, 0px, 0px)' : '';
    }
    setBoxShadow(boxShadow) {
        if (this._boxShadow === boxShadow) {
            return;
        }
        this._boxShadow = boxShadow;
        this.domNode.style.boxShadow = boxShadow;
    }
    setContain(contain) {
        if (this._contain === contain) {
            return;
        }
        this._contain = contain;
        this.domNode.style.contain = this._contain;
    }
    setAttribute(name, value) {
        this.domNode.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.domNode.removeAttribute(name);
    }
    appendChild(child) {
        this.domNode.appendChild(child.domNode);
    }
    removeChild(child) {
        this.domNode.removeChild(child.domNode);
    }
    constructor(domNode){
        this.domNode = domNode;
        this._maxWidth = '';
        this._width = '';
        this._height = '';
        this._top = '';
        this._left = '';
        this._bottom = '';
        this._right = '';
        this._paddingLeft = '';
        this._fontFamily = '';
        this._fontWeight = '';
        this._fontSize = '';
        this._fontStyle = '';
        this._fontFeatureSettings = '';
        this._fontVariationSettings = '';
        this._textDecoration = '';
        this._lineHeight = '';
        this._letterSpacing = '';
        this._className = '';
        this._display = '';
        this._position = '';
        this._visibility = '';
        this._color = '';
        this._backgroundColor = '';
        this._layerHint = false;
        this._contain = 'none';
        this._boxShadow = '';
    }
}
function numberAsPixels(value) {
    return typeof value === 'number' ? "".concat(value, "px") : value;
}
function createFastDomNode(domNode) {
    return new FastDomNode(domNode);
} //# sourceMappingURL=fastDomNode.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/pixelRatio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "PixelRatio",
    ()=>PixelRatio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes
 */ class DevicePixelRatioMonitor extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    _handleChange(targetWindow, fireEvent) {
        var _this__mediaQueryList;
        (_this__mediaQueryList = this._mediaQueryList) === null || _this__mediaQueryList === void 0 ? void 0 : _this__mediaQueryList.removeEventListener('change', this._listener);
        this._mediaQueryList = targetWindow.matchMedia("(resolution: ".concat(targetWindow.devicePixelRatio, "dppx)"));
        this._mediaQueryList.addEventListener('change', this._listener);
        if (fireEvent) {
            this._onDidChange.fire();
        }
    }
    constructor(targetWindow){
        super();
        this._onDidChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChange = this._onDidChange.event;
        this._listener = ()=>this._handleChange(targetWindow, true);
        this._mediaQueryList = null;
        this._handleChange(targetWindow, false);
    }
}
class PixelRatioMonitorImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get value() {
        return this._value;
    }
    _getPixelRatio(targetWindow) {
        const ctx = document.createElement('canvas').getContext('2d');
        const dpr = targetWindow.devicePixelRatio || 1;
        const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    }
    constructor(targetWindow){
        super();
        this._onDidChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChange = this._onDidChange.event;
        this._value = this._getPixelRatio(targetWindow);
        const dprMonitor = this._register(new DevicePixelRatioMonitor(targetWindow));
        this._register(dprMonitor.onDidChange(()=>{
            this._value = this._getPixelRatio(targetWindow);
            this._onDidChange.fire(this._value);
        }));
    }
}
class PixelRatioMonitorFacade {
    _getOrCreatePixelRatioMonitor(targetWindow) {
        const targetWindowId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowId"])(targetWindow);
        let pixelRatioMonitor = this.mapWindowIdToPixelRatioMonitor.get(targetWindowId);
        if (!pixelRatioMonitor) {
            pixelRatioMonitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])(new PixelRatioMonitorImpl(targetWindow));
            this.mapWindowIdToPixelRatioMonitor.set(targetWindowId, pixelRatioMonitor);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].once(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDidUnregisterWindow"])((param)=>{
                let { vscodeWindowId } = param;
                if (vscodeWindowId === targetWindowId) {
                    pixelRatioMonitor === null || pixelRatioMonitor === void 0 ? void 0 : pixelRatioMonitor.dispose();
                    this.mapWindowIdToPixelRatioMonitor.delete(targetWindowId);
                }
            }));
        }
        return pixelRatioMonitor;
    }
    getInstance(targetWindow) {
        return this._getOrCreatePixelRatioMonitor(targetWindow);
    }
    constructor(){
        this.mapWindowIdToPixelRatioMonitor = new Map();
    }
}
const PixelRatio = new PixelRatioMonitorFacade(); //# sourceMappingURL=pixelRatio.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/performance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "inputLatency",
    ()=>inputLatency
]);
var inputLatency;
(function(inputLatency) {
    const totalKeydownTime = {
        total: 0,
        min: Number.MAX_VALUE,
        max: 0
    };
    const totalInputTime = {
        ...totalKeydownTime
    };
    const totalRenderTime = {
        ...totalKeydownTime
    };
    const totalInputLatencyTime = {
        ...totalKeydownTime
    };
    let measurementsCount = 0;
    const state = {
        keydown: 0 /* EventPhase.Before */ ,
        input: 0 /* EventPhase.Before */ ,
        render: 0 /* EventPhase.Before */ 
    };
    /**
     * Record the start of the keydown event.
     */ function onKeyDown() {
        /** Direct Check C. See explanation in {@link recordIfFinished} */ recordIfFinished();
        performance.mark('inputlatency/start');
        performance.mark('keydown/start');
        state.keydown = 1 /* EventPhase.InProgress */ ;
        queueMicrotask(markKeyDownEnd);
    }
    inputLatency.onKeyDown = onKeyDown;
    /**
     * Mark the end of the keydown event.
     */ function markKeyDownEnd() {
        if (state.keydown === 1 /* EventPhase.InProgress */ ) {
            performance.mark('keydown/end');
            state.keydown = 2 /* EventPhase.Finished */ ;
        }
    }
    /**
     * Record the start of the beforeinput event.
     */ function onBeforeInput() {
        performance.mark('input/start');
        state.input = 1 /* EventPhase.InProgress */ ;
        /** Schedule Task A. See explanation in {@link recordIfFinished} */ scheduleRecordIfFinishedTask();
    }
    inputLatency.onBeforeInput = onBeforeInput;
    /**
     * Record the start of the input event.
     */ function onInput() {
        if (state.input === 0 /* EventPhase.Before */ ) {
            // it looks like we didn't receive a `beforeinput`
            onBeforeInput();
        }
        queueMicrotask(markInputEnd);
    }
    inputLatency.onInput = onInput;
    function markInputEnd() {
        if (state.input === 1 /* EventPhase.InProgress */ ) {
            performance.mark('input/end');
            state.input = 2 /* EventPhase.Finished */ ;
        }
    }
    /**
     * Record the start of the keyup event.
     */ function onKeyUp() {
        /** Direct Check D. See explanation in {@link recordIfFinished} */ recordIfFinished();
    }
    inputLatency.onKeyUp = onKeyUp;
    /**
     * Record the start of the selectionchange event.
     */ function onSelectionChange() {
        /** Direct Check E. See explanation in {@link recordIfFinished} */ recordIfFinished();
    }
    inputLatency.onSelectionChange = onSelectionChange;
    /**
     * Record the start of the animation frame performing the rendering.
     */ function onRenderStart() {
        // Render may be triggered during input, but we only measure the following animation frame
        if (state.keydown === 2 /* EventPhase.Finished */  && state.input === 2 /* EventPhase.Finished */  && state.render === 0 /* EventPhase.Before */ ) {
            // Only measure the first render after keyboard input
            performance.mark('render/start');
            state.render = 1 /* EventPhase.InProgress */ ;
            queueMicrotask(markRenderEnd);
            /** Schedule Task B. See explanation in {@link recordIfFinished} */ scheduleRecordIfFinishedTask();
        }
    }
    inputLatency.onRenderStart = onRenderStart;
    /**
     * Mark the end of the animation frame performing the rendering.
     */ function markRenderEnd() {
        if (state.render === 1 /* EventPhase.InProgress */ ) {
            performance.mark('render/end');
            state.render = 2 /* EventPhase.Finished */ ;
        }
    }
    function scheduleRecordIfFinishedTask() {
        // Here we can safely assume that the `setTimeout` will not be
        // artificially delayed by 4ms because we schedule it from
        // event handlers
        setTimeout(recordIfFinished);
    }
    /**
     * Record the input latency sample if input handling and rendering are finished.
     *
     * The challenge here is that we want to record the latency in such a way that it includes
     * also the layout and painting work the browser does during the animation frame task.
     *
     * Simply scheduling a new task (via `setTimeout`) from the animation frame task would
     * schedule the new task at the end of the task queue (after other code that uses `setTimeout`),
     * so we need to use multiple strategies to make sure our task runs before others:
     *
     * We schedule tasks (A and B):
     *    - we schedule a task A (via a `setTimeout` call) when the input starts in `markInputStart`.
     *      If the animation frame task is scheduled quickly by the browser, then task A has a very good
     *      chance of being the very first task after the animation frame and thus will record the input latency.
     *    - however, if the animation frame task is scheduled a bit later, then task A might execute
     *      before the animation frame task. We therefore schedule another task B from `markRenderStart`.
     *
     * We do direct checks in browser event handlers (C, D, E):
     *    - if the browser has multiple keydown events queued up, they will be scheduled before the `setTimeout` tasks,
     *      so we do a direct check in the keydown event handler (C).
     *    - depending on timing, sometimes the animation frame is scheduled even before the `keyup` event, so we
     *      do a direct check there too (E).
     *    - the browser oftentimes emits a `selectionchange` event after an `input`, so we do a direct check there (D).
     */ function recordIfFinished() {
        if (state.keydown === 2 /* EventPhase.Finished */  && state.input === 2 /* EventPhase.Finished */  && state.render === 2 /* EventPhase.Finished */ ) {
            performance.mark('inputlatency/end');
            performance.measure('keydown', 'keydown/start', 'keydown/end');
            performance.measure('input', 'input/start', 'input/end');
            performance.measure('render', 'render/start', 'render/end');
            performance.measure('inputlatency', 'inputlatency/start', 'inputlatency/end');
            addMeasure('keydown', totalKeydownTime);
            addMeasure('input', totalInputTime);
            addMeasure('render', totalRenderTime);
            addMeasure('inputlatency', totalInputLatencyTime);
            // console.info(
            // 	`input latency=${performance.getEntriesByName('inputlatency')[0].duration.toFixed(1)} [` +
            // 	`keydown=${performance.getEntriesByName('keydown')[0].duration.toFixed(1)}, ` +
            // 	`input=${performance.getEntriesByName('input')[0].duration.toFixed(1)}, ` +
            // 	`render=${performance.getEntriesByName('render')[0].duration.toFixed(1)}` +
            // 	`]`
            // );
            measurementsCount++;
            reset();
        }
    }
    function addMeasure(entryName, cumulativeMeasurement) {
        const duration = performance.getEntriesByName(entryName)[0].duration;
        cumulativeMeasurement.total += duration;
        cumulativeMeasurement.min = Math.min(cumulativeMeasurement.min, duration);
        cumulativeMeasurement.max = Math.max(cumulativeMeasurement.max, duration);
    }
    /**
     * Clear the current sample.
     */ function reset() {
        performance.clearMarks('keydown/start');
        performance.clearMarks('keydown/end');
        performance.clearMarks('input/start');
        performance.clearMarks('input/end');
        performance.clearMarks('render/start');
        performance.clearMarks('render/end');
        performance.clearMarks('inputlatency/start');
        performance.clearMarks('inputlatency/end');
        performance.clearMeasures('keydown');
        performance.clearMeasures('input');
        performance.clearMeasures('render');
        performance.clearMeasures('inputlatency');
        state.keydown = 0 /* EventPhase.Before */ ;
        state.input = 0 /* EventPhase.Before */ ;
        state.render = 0 /* EventPhase.Before */ ;
    }
    /**
     * Gets all input latency samples and clears the internal buffers to start recording a new set
     * of samples.
     */ function getAndClearMeasurements() {
        if (measurementsCount === 0) {
            return undefined;
        }
        // Assemble the result
        const result = {
            keydown: cumulativeToFinalMeasurement(totalKeydownTime),
            input: cumulativeToFinalMeasurement(totalInputTime),
            render: cumulativeToFinalMeasurement(totalRenderTime),
            total: cumulativeToFinalMeasurement(totalInputLatencyTime),
            sampleCount: measurementsCount
        };
        // Clear the cumulative measurements
        clearCumulativeMeasurement(totalKeydownTime);
        clearCumulativeMeasurement(totalInputTime);
        clearCumulativeMeasurement(totalRenderTime);
        clearCumulativeMeasurement(totalInputLatencyTime);
        measurementsCount = 0;
        return result;
    }
    inputLatency.getAndClearMeasurements = getAndClearMeasurements;
    function cumulativeToFinalMeasurement(cumulative) {
        return {
            average: cumulative.total / measurementsCount,
            max: cumulative.max,
            min: cumulative.min
        };
    }
    function clearCumulativeMeasurement(cumulative) {
        cumulative.total = 0;
        cumulative.min = Number.MAX_VALUE;
        cumulative.max = 0;
    }
})(inputLatency || (inputLatency = {})); //# sourceMappingURL=performance.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/domStylesheets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "createCSSRule",
    ()=>createCSSRule,
    "createStyleSheet",
    ()=>createStyleSheet,
    "createStyleSheet2",
    ()=>createStyleSheet2,
    "createStyleSheetFromObservable",
    ()=>createStyleSheetFromObservable,
    "removeCSSRulesContainingSelector",
    ()=>removeCSSRulesContainingSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/observableInternal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
;
;
;
;
;
const globalStylesheets = new Map();
function createStyleSheet2() {
    return new WrappedStyleElement();
}
class WrappedStyleElement {
    setStyle(cssStyle) {
        if (cssStyle === this._currentCssStyle) {
            return;
        }
        this._currentCssStyle = cssStyle;
        if (!this._styleSheet) {
            this._styleSheet = createStyleSheet(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].document.head, (s)=>s.textContent = cssStyle);
        } else {
            this._styleSheet.textContent = cssStyle;
        }
    }
    dispose() {
        if (this._styleSheet) {
            this._styleSheet.remove();
            this._styleSheet = undefined;
        }
    }
    constructor(){
        this._currentCssStyle = '';
        this._styleSheet = undefined;
    }
}
function createStyleSheet() {
    let container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].document.head, beforeAppend = arguments.length > 1 ? arguments[1] : void 0, disposableStore = arguments.length > 2 ? arguments[2] : void 0;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'screen';
    beforeAppend === null || beforeAppend === void 0 ? void 0 : beforeAppend(style);
    container.appendChild(style);
    if (disposableStore) {
        disposableStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>style.remove()));
    }
    // With <head> as container, the stylesheet becomes global and is tracked
    // to support auxiliary windows to clone the stylesheet.
    if (container === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].document.head) {
        const globalStylesheetClones = new Set();
        globalStylesheets.set(style, globalStylesheetClones);
        if (disposableStore) {
            disposableStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>globalStylesheets.delete(style)));
        }
        for (const { window: targetWindow, disposables } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindows"])()){
            if (targetWindow === __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"]) {
                continue; // main window is already tracked
            }
            const cloneDisposable = disposables.add(cloneGlobalStyleSheet(style, globalStylesheetClones, targetWindow));
            disposableStore === null || disposableStore === void 0 ? void 0 : disposableStore.add(cloneDisposable);
        }
    }
    return style;
}
function cloneGlobalStyleSheet(globalStylesheet, globalStylesheetClones, targetWindow) {
    const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const clone = globalStylesheet.cloneNode(true);
    targetWindow.document.head.appendChild(clone);
    disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>clone.remove()));
    for (const rule of getDynamicStyleSheetRules(globalStylesheet)){
        var _clone_sheet, _clone_sheet1;
        (_clone_sheet1 = clone.sheet) === null || _clone_sheet1 === void 0 ? void 0 : _clone_sheet1.insertRule(rule.cssText, (_clone_sheet = clone.sheet) === null || _clone_sheet === void 0 ? void 0 : _clone_sheet.cssRules.length);
    }
    disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sharedMutationObserver"].observe(globalStylesheet, disposables, {
        childList: true,
        subtree: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"],
        characterData: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]
    })(()=>{
        clone.textContent = globalStylesheet.textContent;
    }));
    globalStylesheetClones.add(clone);
    disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>globalStylesheetClones.delete(clone)));
    return disposables;
}
let _sharedStyleSheet = null;
function getSharedStyleSheet() {
    if (!_sharedStyleSheet) {
        _sharedStyleSheet = createStyleSheet();
    }
    return _sharedStyleSheet;
}
function getDynamicStyleSheetRules(style) {
    var _style_sheet, _style_sheet1;
    if (style === null || style === void 0 ? void 0 : (_style_sheet = style.sheet) === null || _style_sheet === void 0 ? void 0 : _style_sheet.rules) {
        // Chrome, IE
        return style.sheet.rules;
    }
    if (style === null || style === void 0 ? void 0 : (_style_sheet1 = style.sheet) === null || _style_sheet1 === void 0 ? void 0 : _style_sheet1.cssRules) {
        // FF
        return style.sheet.cssRules;
    }
    return [];
}
function createCSSRule(selector, cssText) {
    let style = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getSharedStyleSheet();
    var _style_sheet;
    if (!style || !cssText) {
        return;
    }
    (_style_sheet = style.sheet) === null || _style_sheet === void 0 ? void 0 : _style_sheet.insertRule("".concat(selector, " {").concat(cssText, "}"), 0);
    var _globalStylesheets_get;
    // Apply rule also to all cloned global stylesheets
    for (const clonedGlobalStylesheet of (_globalStylesheets_get = globalStylesheets.get(style)) !== null && _globalStylesheets_get !== void 0 ? _globalStylesheets_get : []){
        createCSSRule(selector, cssText, clonedGlobalStylesheet);
    }
}
function removeCSSRulesContainingSelector(ruleName) {
    let style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getSharedStyleSheet();
    if (!style) {
        return;
    }
    const rules = getDynamicStyleSheetRules(style);
    const toDelete = [];
    for(let i = 0; i < rules.length; i++){
        const rule = rules[i];
        if (isCSSStyleRule(rule) && rule.selectorText.indexOf(ruleName) !== -1) {
            toDelete.push(i);
        }
    }
    for(let i = toDelete.length - 1; i >= 0; i--){
        var _style_sheet;
        (_style_sheet = style.sheet) === null || _style_sheet === void 0 ? void 0 : _style_sheet.deleteRule(toDelete[i]);
    }
    var _globalStylesheets_get;
    // Remove rules also from all cloned global stylesheets
    for (const clonedGlobalStylesheet of (_globalStylesheets_get = globalStylesheets.get(style)) !== null && _globalStylesheets_get !== void 0 ? _globalStylesheets_get : []){
        removeCSSRulesContainingSelector(ruleName, clonedGlobalStylesheet);
    }
}
function isCSSStyleRule(rule) {
    return typeof rule.selectorText === 'string';
}
function createStyleSheetFromObservable(css) {
    const store = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    const w = store.add(createStyleSheet2());
    store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
        w.setStyle(css.read(reader));
    }));
    return store;
} //# sourceMappingURL=domStylesheets.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/globalPointerMoveMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "GlobalPointerMoveMonitor",
    ()=>GlobalPointerMoveMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
class GlobalPointerMoveMonitor {
    dispose() {
        this.stopMonitoring(false);
        this._hooks.dispose();
    }
    stopMonitoring(invokeStopCallback, browserEvent) {
        if (!this.isMonitoring()) {
            // Not monitoring
            return;
        }
        // Unhook
        this._hooks.clear();
        this._pointerMoveCallback = null;
        const onStopCallback = this._onStopCallback;
        this._onStopCallback = null;
        if (invokeStopCallback && onStopCallback) {
            onStopCallback(browserEvent);
        }
    }
    isMonitoring() {
        return !!this._pointerMoveCallback;
    }
    startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
        if (this.isMonitoring()) {
            this.stopMonitoring(false);
        }
        this._pointerMoveCallback = pointerMoveCallback;
        this._onStopCallback = onStopCallback;
        let eventSource = initialElement;
        try {
            initialElement.setPointerCapture(pointerId);
            this._hooks.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                try {
                    initialElement.releasePointerCapture(pointerId);
                } catch (err) {
                // See https://github.com/microsoft/vscode/issues/161731
                //
                // `releasePointerCapture` sometimes fails when being invoked with the exception:
                //     DOMException: Failed to execute 'releasePointerCapture' on 'Element':
                //     No active pointer with the given id is found.
                //
                // There's no need to do anything in case of failure
                }
            }));
        } catch (err) {
            // See https://github.com/microsoft/vscode/issues/144584
            // See https://github.com/microsoft/vscode/issues/146947
            // `setPointerCapture` sometimes fails when being invoked
            // from a `mousedown` listener on macOS and Windows
            // and it always fails on Linux with the exception:
            //     DOMException: Failed to execute 'setPointerCapture' on 'Element':
            //     No active pointer with the given id is found.
            // In case of failure, we bind the listeners on the window
            eventSource = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](initialElement);
        }
        this._hooks.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](eventSource, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_MOVE, (e)=>{
            if (e.buttons !== initialButtons) {
                // Buttons state has changed in the meantime
                this.stopMonitoring(true);
                return;
            }
            e.preventDefault();
            this._pointerMoveCallback(e);
        }));
        this._hooks.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](eventSource, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_UP, (e)=>this.stopMonitoring(true)));
    }
    constructor(){
        this._hooks = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._pointerMoveCallback = null;
        this._onStopCallback = null;
    }
} //# sourceMappingURL=globalPointerMoveMonitor.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "EventType",
    ()=>EventType,
    "Gesture",
    ()=>Gesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/linkedList.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
var EventType;
(function(EventType) {
    EventType.Tap = '-monaco-gesturetap';
    EventType.Change = '-monaco-gesturechange';
    EventType.Start = '-monaco-gesturestart';
    EventType.End = '-monaco-gesturesend';
    EventType.Contextmenu = '-monaco-gesturecontextmenu';
})(EventType || (EventType = {}));
class Gesture extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    static addTarget(element) {
        if (!Gesture.isTouchDevice()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        }
        if (!Gesture.INSTANCE) {
            Gesture.INSTANCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])(new Gesture());
        }
        const remove = Gesture.INSTANCE.targets.push(element);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(remove);
    }
    static ignoreTarget(element) {
        if (!Gesture.isTouchDevice()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        }
        if (!Gesture.INSTANCE) {
            Gesture.INSTANCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsSingleton"])(new Gesture());
        }
        const remove = Gesture.INSTANCE.ignoreTargets.push(element);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(remove);
    }
    static isTouchDevice() {
        // `'ontouchstart' in window` always evaluates to true with typescript's modern typings. This causes `window` to be
        // `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
        return 'ontouchstart' in __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"] || navigator.maxTouchPoints > 0;
    }
    dispose() {
        if (this.handle) {
            this.handle.dispose();
            this.handle = null;
        }
        super.dispose();
    }
    onTouchStart(e) {
        const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
        if (this.handle) {
            this.handle.dispose();
            this.handle = null;
        }
        for(let i = 0, len = e.targetTouches.length; i < len; i++){
            const touch = e.targetTouches.item(i);
            this.activeTouches[touch.identifier] = {
                id: touch.identifier,
                initialTarget: touch.target,
                initialTimeStamp: timestamp,
                initialPageX: touch.pageX,
                initialPageY: touch.pageY,
                rollingTimestamps: [
                    timestamp
                ],
                rollingPageX: [
                    touch.pageX
                ],
                rollingPageY: [
                    touch.pageY
                ]
            };
            const evt = this.newGestureEvent(EventType.Start, touch.target);
            evt.pageX = touch.pageX;
            evt.pageY = touch.pageY;
            this.dispatchEvent(evt);
        }
        if (this.dispatched) {
            e.preventDefault();
            e.stopPropagation();
            this.dispatched = false;
        }
    }
    onTouchEnd(targetWindow, e) {
        const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
        const activeTouchCount = Object.keys(this.activeTouches).length;
        for(let i = 0, len = e.changedTouches.length; i < len; i++){
            const touch = e.changedTouches.item(i);
            if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
                console.warn('move of an UNKNOWN touch', touch);
                continue;
            }
            const data = this.activeTouches[touch.identifier], holdTime = Date.now() - data.initialTimeStamp;
            if (holdTime < Gesture.HOLD_DELAY && Math.abs(data.initialPageX - data.rollingPageX.at(-1)) < 30 && Math.abs(data.initialPageY - data.rollingPageY.at(-1)) < 30) {
                const evt = this.newGestureEvent(EventType.Tap, data.initialTarget);
                evt.pageX = data.rollingPageX.at(-1);
                evt.pageY = data.rollingPageY.at(-1);
                this.dispatchEvent(evt);
            } else if (holdTime >= Gesture.HOLD_DELAY && Math.abs(data.initialPageX - data.rollingPageX.at(-1)) < 30 && Math.abs(data.initialPageY - data.rollingPageY.at(-1)) < 30) {
                const evt = this.newGestureEvent(EventType.Contextmenu, data.initialTarget);
                evt.pageX = data.rollingPageX.at(-1);
                evt.pageY = data.rollingPageY.at(-1);
                this.dispatchEvent(evt);
            } else if (activeTouchCount === 1) {
                const finalX = data.rollingPageX.at(-1);
                const finalY = data.rollingPageY.at(-1);
                const deltaT = data.rollingTimestamps.at(-1) - data.rollingTimestamps[0];
                const deltaX = finalX - data.rollingPageX[0];
                const deltaY = finalY - data.rollingPageY[0];
                // We need to get all the dispatch targets on the start of the inertia event
                const dispatchTo = [
                    ...this.targets
                ].filter((t)=>data.initialTarget instanceof Node && t.contains(data.initialTarget));
                this.inertia(targetWindow, dispatchTo, timestamp, Math.abs(deltaX) / deltaT, deltaX > 0 ? 1 : -1, finalX, Math.abs(deltaY) / deltaT, deltaY > 0 ? 1 : -1, finalY // y now
                );
            }
            this.dispatchEvent(this.newGestureEvent(EventType.End, data.initialTarget));
            // forget about this touch
            delete this.activeTouches[touch.identifier];
        }
        if (this.dispatched) {
            e.preventDefault();
            e.stopPropagation();
            this.dispatched = false;
        }
    }
    newGestureEvent(type, initialTarget) {
        const event = document.createEvent('CustomEvent');
        event.initEvent(type, false, true);
        event.initialTarget = initialTarget;
        event.tapCount = 0;
        return event;
    }
    dispatchEvent(event) {
        if (event.type === EventType.Tap) {
            const currentTime = new Date().getTime();
            let setTapCount = 0;
            if (currentTime - this._lastSetTapCountTime > Gesture.CLEAR_TAP_COUNT_TIME) {
                setTapCount = 1;
            } else {
                setTapCount = 2;
            }
            this._lastSetTapCountTime = currentTime;
            event.tapCount = setTapCount;
        } else if (event.type === EventType.Change || event.type === EventType.Contextmenu) {
            // tap is canceled by scrolling or context menu
            this._lastSetTapCountTime = 0;
        }
        if (event.initialTarget instanceof Node) {
            for (const ignoreTarget of this.ignoreTargets){
                if (ignoreTarget.contains(event.initialTarget)) {
                    return;
                }
            }
            const targets = [];
            for (const target of this.targets){
                if (target.contains(event.initialTarget)) {
                    let depth = 0;
                    let now = event.initialTarget;
                    while(now && now !== target){
                        depth++;
                        now = now.parentElement;
                    }
                    targets.push([
                        depth,
                        target
                    ]);
                }
            }
            targets.sort((a, b)=>a[0] - b[0]);
            for (const [_, target] of targets){
                target.dispatchEvent(event);
                this.dispatched = true;
            }
        }
    }
    inertia(targetWindow, dispatchTo, t1, vX, dirX, x, vY, dirY, y) {
        this.handle = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"](targetWindow, ()=>{
            const now = Date.now();
            // velocity: old speed + accel_over_time
            const deltaT = now - t1;
            let delta_pos_x = 0, delta_pos_y = 0;
            let stopped = true;
            vX += Gesture.SCROLL_FRICTION * deltaT;
            vY += Gesture.SCROLL_FRICTION * deltaT;
            if (vX > 0) {
                stopped = false;
                delta_pos_x = dirX * vX * deltaT;
            }
            if (vY > 0) {
                stopped = false;
                delta_pos_y = dirY * vY * deltaT;
            }
            // dispatch translation event
            const evt = this.newGestureEvent(EventType.Change);
            evt.translationX = delta_pos_x;
            evt.translationY = delta_pos_y;
            dispatchTo.forEach((d)=>d.dispatchEvent(evt));
            if (!stopped) {
                this.inertia(targetWindow, dispatchTo, now, vX, dirX, x + delta_pos_x, vY, dirY, y + delta_pos_y);
            }
        });
    }
    onTouchMove(e) {
        const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
        for(let i = 0, len = e.changedTouches.length; i < len; i++){
            const touch = e.changedTouches.item(i);
            if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
                console.warn('end of an UNKNOWN touch', touch);
                continue;
            }
            const data = this.activeTouches[touch.identifier];
            const evt = this.newGestureEvent(EventType.Change, data.initialTarget);
            evt.translationX = touch.pageX - data.rollingPageX.at(-1);
            evt.translationY = touch.pageY - data.rollingPageY.at(-1);
            evt.pageX = touch.pageX;
            evt.pageY = touch.pageY;
            this.dispatchEvent(evt);
            // only keep a few data points, to average the final speed
            if (data.rollingPageX.length > 3) {
                data.rollingPageX.shift();
                data.rollingPageY.shift();
                data.rollingTimestamps.shift();
            }
            data.rollingPageX.push(touch.pageX);
            data.rollingPageY.push(touch.pageY);
            data.rollingTimestamps.push(timestamp);
        }
        if (this.dispatched) {
            e.preventDefault();
            e.stopPropagation();
            this.dispatched = false;
        }
    }
    constructor(){
        super();
        this.dispatched = false;
        this.targets = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this.ignoreTargets = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$linkedList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedList"]();
        this.activeTouches = {};
        this.handle = null;
        this._lastSetTapCountTime = 0;
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].runAndSubscribe(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDidRegisterWindow"], (param)=>{
            let { window, disposables } = param;
            disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](window.document, 'touchstart', (e)=>this.onTouchStart(e), {
                passive: false
            }));
            disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](window.document, 'touchend', (e)=>this.onTouchEnd(window, e)));
            disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](window.document, 'touchmove', (e)=>this.onTouchMove(e), {
                passive: false
            }));
        }, {
            window: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"],
            disposables: this._store
        }));
    }
}
Gesture.SCROLL_FRICTION = -0.005;
Gesture.HOLD_DELAY = 700;
Gesture.CLEAR_TAP_COUNT_TIME = 400;
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], Gesture, "isTouchDevice", null); //# sourceMappingURL=touch.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DomEmitter",
    ()=>DomEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
;
class DomEmitter {
    get event() {
        return this.emitter.event;
    }
    dispose() {
        this.emitter.dispose();
    }
    constructor(element, type, useCapture){
        const fn = (e)=>this.emitter.fire(e);
        this.emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]({
            onWillAddFirstListener: ()=>element.addEventListener(type, fn, useCapture),
            onDidRemoveLastListener: ()=>element.removeEventListener(type, fn, useCapture)
        });
    }
} //# sourceMappingURL=event.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/trustedTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "createTrustedTypesPolicy",
    ()=>createTrustedTypesPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
;
function createTrustedTypesPolicy(policyName, policyOptions) {
    const monacoEnvironment = globalThis.MonacoEnvironment;
    if (monacoEnvironment === null || monacoEnvironment === void 0 ? void 0 : monacoEnvironment.createTrustedTypesPolicy) {
        try {
            return monacoEnvironment.createTrustedTypesPolicy(policyName, policyOptions);
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
            return undefined;
        }
    }
    try {
        var _globalThis_trustedTypes;
        return (_globalThis_trustedTypes = globalThis.trustedTypes) === null || _globalThis_trustedTypes === void 0 ? void 0 : _globalThis_trustedTypes.createPolicy(policyName, policyOptions);
    } catch (err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
        return undefined;
    }
} //# sourceMappingURL=trustedTypes.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/fonts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "DEFAULT_FONT_FAMILY",
    ()=>DEFAULT_FONT_FAMILY,
    "getFontSnippets",
    ()=>getFontSnippets,
    "getFonts",
    ()=>getFonts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/window.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
const DEFAULT_FONT_FAMILY = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"] ? '"Segoe WPC", "Segoe UI", sans-serif' : __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? '-apple-system, BlinkMacSystemFont, sans-serif' : 'system-ui, "Ubuntu", "Droid Sans", sans-serif';
const getFonts = async ()=>{
    try {
        // @ts-ignore
        const fonts = await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainWindow"].queryLocalFonts();
        const fontsArray = [
            ...fonts
        ];
        const families = fontsArray.map((font)=>font.family);
        return families;
    } catch (error) {
        console.error("Failed to query fonts: ".concat(error));
        return [];
    }
};
const getFontSnippets = async ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElectron"]) {
        return [];
    }
    const fonts = await getFonts();
    const snippets = fonts.map((font)=>{
        return {
            body: "".concat(font)
        };
    });
    return snippets;
}; //# sourceMappingURL=fonts.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dnd.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTransfers",
    ()=>DataTransfers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$mime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/mime.js [app-client] (ecmascript)");
;
const DataTransfers = {
    /**
     * Application specific resource transfer type
     */ RESOURCES: 'ResourceURLs',
    /**
     * Browser specific transfer type to download
     */ DOWNLOAD_URL: 'DownloadURL',
    /**
     * Browser specific transfer type for files
     */ FILES: 'Files',
    /**
     * Typically transfer type for copy/paste transfers.
     */ TEXT: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$mime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mimes"].text,
    /**
     * Internal type used to pass around text/uri-list data.
     *
     * This is needed to work around https://bugs.chromium.org/p/chromium/issues/detail?id=239745.
     */ INTERNAL_URI_LIST: 'application/vnd.code.uri-list'
}; //# sourceMappingURL=dnd.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/cssValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Builder",
    ()=>Builder,
    "asCSSUrl",
    ()=>asCSSUrl,
    "asCssValueWithDefault",
    ()=>asCssValueWithDefault,
    "className",
    ()=>className,
    "identValue",
    ()=>identValue,
    "inline",
    ()=>inline,
    "stringValue",
    ()=>stringValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "url('",
        "')"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
function asFragment(raw) {
    return raw;
}
function asCssValueWithDefault(cssPropertyValue, dflt) {
    if (cssPropertyValue !== undefined) {
        const variableMatch = cssPropertyValue.match(/^\s*var\((.+)\)$/);
        if (variableMatch) {
            const varArguments = variableMatch[1].split(',', 2);
            if (varArguments.length === 2) {
                dflt = asCssValueWithDefault(varArguments[1].trim(), dflt);
            }
            return "var(".concat(varArguments[0], ", ").concat(dflt, ")");
        }
        return cssPropertyValue;
    }
    return dflt;
}
function identValue(value) {
    const out = value.replaceAll(/[^_\-a-z0-9]/gi, '');
    if (out !== value) {
        console.warn("CSS ident value ".concat(value, " modified to ").concat(out, " to be safe for CSS"));
    }
    return asFragment(out);
}
function stringValue(value) {
    return asFragment("'".concat(value.replaceAll(/'/g, '\\000027'), "'"));
}
function asCSSUrl(uri) {
    if (!uri) {
        return asFragment("url('')");
    }
    return inline(_templateObject(), asFragment(CSS.escape(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileAccess"].uriToBrowserUri(uri).toString(true))));
}
function className(value) {
    let escapingExpected = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const out = CSS.escape(value);
    if (!escapingExpected && out !== value) {
        console.warn("CSS class name ".concat(value, " modified to ").concat(out, " to be safe for CSS"));
    }
    return asFragment(out);
}
function inline(strings) {
    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        values[_key - 1] = arguments[_key];
    }
    return asFragment(strings.reduce((result, str, i)=>{
        const value = values[i] || '';
        return result + str + value;
    }, ''));
}
class Builder {
    push() {
        for(var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++){
            parts[_key] = arguments[_key];
        }
        this._parts.push(...parts);
    }
    join() {
        let joiner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '\n';
        return asFragment(this._parts.join(joiner));
    }
    constructor(){
        this._parts = [];
    }
} //# sourceMappingURL=cssValue.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dompurify/dompurify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */ __turbopack_context__.s([
    "default",
    ()=>purify
]);
const { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
let { freeze, seal, create } = Object; // eslint-disable-line import/no-mutable-exports
let { apply, construct } = typeof Reflect !== 'undefined' && Reflect;
if (!freeze) {
    freeze = function freeze(x) {
        return x;
    };
}
if (!seal) {
    seal = function seal(x) {
        return x;
    };
}
if (!apply) {
    apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
}
if (!construct) {
    construct = function construct(Func, args) {
        return new Func(...args);
    };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
/**
 * Creates a new function that calls the given function with a specified thisArg and arguments.
 *
 * @param {Function} func - The function to be wrapped and called.
 * @returns {Function} A new function that calls the given function with a specified thisArg and arguments.
 */ function unapply(func) {
    return function(thisArg) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        return apply(func, thisArg, args);
    };
}
/**
 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
 *
 * @param {Function} func - The constructor function to be wrapped and called.
 * @returns {Function} A new function that constructs an instance of the given constructor function with the provided arguments.
 */ function unconstruct(func) {
    return function() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        return construct(func, args);
    };
}
/**
 * Add properties to a lookup table
 *
 * @param {Object} set - The set to which elements will be added.
 * @param {Array} array - The array containing elements to be added to the set.
 * @param {Function} transformCaseFunc - An optional function to transform the case of each element before adding to the set.
 * @returns {Object} The modified set with added elements.
 */ function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
        // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
    }
    let l = array.length;
    while(l--){
        let element = array[l];
        if (typeof element === 'string') {
            const lcElement = transformCaseFunc(element);
            if (lcElement !== element) {
                // Config presets (e.g. tags.js, attrs.js) are immutable.
                if (!isFrozen(array)) {
                    array[l] = lcElement;
                }
                element = lcElement;
            }
        }
        set[element] = true;
    }
    return set;
}
/**
 * Clean up an array to harden against CSPP
 *
 * @param {Array} array - The array to be cleaned.
 * @returns {Array} The cleaned version of the array
 */ function cleanArray(array) {
    for(let index = 0; index < array.length; index++){
        const isPropertyExist = objectHasOwnProperty(array, index);
        if (!isPropertyExist) {
            array[index] = null;
        }
    }
    return array;
}
/**
 * Shallow clone an object
 *
 * @param {Object} object - The object to be cloned.
 * @returns {Object} A new object that copies the original.
 */ function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)){
        const isPropertyExist = objectHasOwnProperty(object, property);
        if (isPropertyExist) {
            if (Array.isArray(value)) {
                newObject[property] = cleanArray(value);
            } else if (value && typeof value === 'object' && value.constructor === Object) {
                newObject[property] = clone(value);
            } else {
                newObject[property] = value;
            }
        }
    }
    return newObject;
}
/**
 * This method automatically checks if the prop is function or getter and behaves accordingly.
 *
 * @param {Object} object - The object to look up the getter function in its prototype chain.
 * @param {String} prop - The property name for which to find the getter function.
 * @returns {Function} The getter function found in the prototype chain or a fallback function.
 */ function lookupGetter(object, prop) {
    while(object !== null){
        const desc = getOwnPropertyDescriptor(object, prop);
        if (desc) {
            if (desc.get) {
                return unapply(desc.get);
            }
            if (typeof desc.value === 'function') {
                return unapply(desc.value);
            }
        }
        object = getPrototypeOf(object);
    }
    function fallbackValue() {
        return null;
    }
    return fallbackValue;
}
const html$1 = freeze([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'section',
    'select',
    'shadow',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
]);
// SVG
const svg$1 = freeze([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'view',
    'vkern'
]);
const svgFilters = freeze([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence'
]);
// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
const svgDisallowed = freeze([
    'animate',
    'color-profile',
    'cursor',
    'discard',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignobject',
    'hatch',
    'hatchpath',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'missing-glyph',
    'script',
    'set',
    'solidcolor',
    'unknown',
    'use'
]);
const mathMl$1 = freeze([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'mprescripts'
]);
// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
const mathMlDisallowed = freeze([
    'maction',
    'maligngroup',
    'malignmark',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'mstack',
    'msline',
    'msrow',
    'semantics',
    'annotation',
    'annotation-xml',
    'mprescripts',
    'none'
]);
const text = freeze([
    '#text'
]);
const html = freeze([
    'accept',
    'action',
    'align',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autopictureinpicture',
    'autoplay',
    'background',
    'bgcolor',
    'border',
    'capture',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'controls',
    'controlslist',
    'coords',
    'crossorigin',
    'datetime',
    'decoding',
    'default',
    'dir',
    'disabled',
    'disablepictureinpicture',
    'disableremoteplayback',
    'download',
    'draggable',
    'enctype',
    'enterkeyhint',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'inputmode',
    'integrity',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loading',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'minlength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'playsinline',
    'popover',
    'popovertarget',
    'popovertargetaction',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'translate',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'wrap',
    'xmlns',
    'slot'
]);
const svg = freeze([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'amplitude',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clippathunits',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'exponent',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'filterunits',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'intercept',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'primitiveunits',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'slope',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'startoffset',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'systemlanguage',
    'tabindex',
    'tablevalues',
    'targetx',
    'targety',
    'transform',
    'transform-origin',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
]);
const mathMl = freeze([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'encoding',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
]);
const xml = freeze([
    'xlink:href',
    'xml:id',
    'xlink:title',
    'xml:space',
    'xmlns:xlink'
]);
// eslint-disable-next-line unicorn/better-regex
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT
});
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
};
const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
 * @return {TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported or creating the policy failed).
 */ const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
        return null;
    }
    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
        suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
        return trustedTypes.createPolicy(policyName, {
            createHTML (html) {
                return html;
            },
            createScriptURL (scriptUrl) {
                return scriptUrl;
            }
        });
    } catch (_) {
        // Policy creation failed (most likely another DOMPurify script has
        // already run). Skip creating the policy, as this will only cause errors
        // if TT are enforced.
        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
        return null;
    }
};
function createDOMPurify() {
    let window1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = (root)=>createDOMPurify(root);
    /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */ DOMPurify.version = '3.1.7';
    /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */ DOMPurify.removed = [];
    if (!window1 || !window1.document || window1.document.nodeType !== NODE_TYPE.document) {
        // Not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }
    let { document } = window1;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window1.NamedNodeMap || window1.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window1;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        const template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
    const { importNode } = originalDocument;
    let hooks = {};
    /**
   * Expose whether this browser supports running the full DOMPurify.
   */ DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
    let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
    /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */ /* allowed element names */ let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [
        ...html$1,
        ...svg$1,
        ...svgFilters,
        ...mathMl$1,
        ...text
    ]);
    /* Allowed attribute names */ let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [
        ...html,
        ...svg,
        ...mathMl,
        ...xml
    ]);
    /*
   * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */ let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
        tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
        }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ let FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */ let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */ let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */ let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
   * Usually removed due to a mXSS issue in jQuery 3.0 */ let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */ let SAFE_FOR_TEMPLATES = false;
    /* Output should be safe even for XML used within HTML and alike.
   * This means, DOMPurify removes comments when containing risky content.
   */ let SAFE_FOR_XML = true;
    /* Decide if document with <html>... should be returned */ let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */ let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */ let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */ let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */ let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */ let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
   */ let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
   *
   * HTML/DOM spec rules that enable DOM Clobbering:
   *   - Named Access on Window (§7.3.3)
   *   - DOM Tree Accessors (§3.1.5)
   *   - Form Element Parent-Child Relations (§4.10.3)
   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
   *   - HTMLCollection (§4.2.10.2)
   *
   * Namespace isolation is implemented by prefixing `id` and `name` attributes
   * with a constant string, i.e., `user-content-`
   */ let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */ let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */ let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */ let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */ let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, [
        'annotation-xml',
        'audio',
        'colgroup',
        'desc',
        'foreignobject',
        'head',
        'iframe',
        'math',
        'mi',
        'mn',
        'mo',
        'ms',
        'mtext',
        'noembed',
        'noframes',
        'noscript',
        'plaintext',
        'script',
        'style',
        'svg',
        'template',
        'thead',
        'title',
        'video',
        'xmp'
    ]);
    /* Tags that are safe for data: URIs */ let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, [
        'audio',
        'video',
        'img',
        'source',
        'image',
        'track'
    ]);
    /* Attributes safe for values like "javascript:" */ let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
        'alt',
        'class',
        'for',
        'id',
        'label',
        'name',
        'pattern',
        'placeholder',
        'role',
        'summary',
        'title',
        'value',
        'style',
        'xmlns'
    ]);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */ let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */ let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
        MATHML_NAMESPACE,
        SVG_NAMESPACE,
        HTML_NAMESPACE
    ], stringToString);
    /* Parsing of strict XHTML documents */ let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = [
        'application/xhtml+xml',
        'text/html'
    ];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;
    /* Keep a reference to config to pass to hooks */ let CONFIG = null;
    /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */ // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (CONFIG && CONFIG === cfg) {
            return;
        }
        /* Shield configuration object from tampering */ if (!cfg || typeof cfg !== 'object') {
            cfg = {};
        }
        /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
        PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
        SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
        // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
        transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
        /* Set configuration parameters */ ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
        ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
        URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
        cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
        transformCaseFunc // eslint-disable-line indent
        ) // eslint-disable-line indent
         : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
        cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
        transformCaseFunc // eslint-disable-line indent
        ) // eslint-disable-line indent
         : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
        FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
        USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
        SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
        RETURN_DOM = cfg.RETURN_DOM || false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
        FORCE_BODY = cfg.FORCE_BODY || false; // Default false
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
        SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
        IN_PLACE = cfg.IN_PLACE || false; // Default false
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
        CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
            CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }
        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }
        /* Parse profile info */ if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, text);
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html$1);
                addToSet(ALLOWED_ATTR, html);
            }
            if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg$1);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl$1);
                addToSet(ALLOWED_ATTR, mathMl);
                addToSet(ALLOWED_ATTR, xml);
            }
        }
        /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
            }
            addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
        }
        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
            }
            addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
        }
        if (cfg.FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
        }
        /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) {
            ALLOWED_TAGS['#text'] = true;
        }
        /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, [
                'html',
                'head',
                'body'
            ]);
        }
        /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, [
                'tbody'
            ]);
            delete FORBID_TAGS.tbody;
        }
        if (cfg.TRUSTED_TYPES_POLICY) {
            if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            }
            if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            }
            // Overwrite existing TrustedTypes policy.
            trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
            // Sign local variables required by `sanitize`.
            emptyHTML = trustedTypesPolicy.createHTML('');
        } else {
            // Uninitialized policy, attempt to initialize the internal dompurify policy.
            if (trustedTypesPolicy === undefined) {
                trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
            }
            // If creating the internal policy succeeded sign internal variables.
            if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
                emptyHTML = trustedTypesPolicy.createHTML('');
            }
        }
        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (freeze) {
            freeze(cfg);
        }
        CONFIG = cfg;
    };
    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext'
    ]);
    const HTML_INTEGRATION_POINTS = addToSet({}, [
        'annotation-xml'
    ]);
    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
        'title',
        'style',
        'font',
        'a',
        'script'
    ]);
    /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */ const ALL_SVG_TAGS = addToSet({}, [
        ...svg$1,
        ...svgFilters,
        ...svgDisallowed
    ]);
    const ALL_MATHML_TAGS = addToSet({}, [
        ...mathMl$1,
        ...mathMlDisallowed
    ]);
    /**
   * @param  {Element} element a DOM element whose namespace is being checked
   * @returns {boolean} Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */ const _checkValidNamespace = function _checkValidNamespace(element) {
        let parent = getParentNode(element);
        // In JSDOM, if we're inside shadow DOM, then parentNode
        // can be null. We just simulate parent in this case.
        if (!parent || !parent.tagName) {
            parent = {
                namespaceURI: NAMESPACE,
                tagName: 'template'
            };
        }
        const tagName = stringToLowerCase(element.tagName);
        const parentTagName = stringToLowerCase(parent.tagName);
        if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
            return false;
        }
        if (element.namespaceURI === SVG_NAMESPACE) {
            // The only way to switch from HTML namespace to SVG
            // is via <svg>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'svg';
            }
            // The only way to switch from MathML to SVG is via`
            // svg if parent is either <annotation-xml> or MathML
            // text integration points.
            if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
            }
            // We only allow elements that are defined in SVG
            // spec. All others are disallowed in SVG namespace.
            return Boolean(ALL_SVG_TAGS[tagName]);
        }
        if (element.namespaceURI === MATHML_NAMESPACE) {
            // The only way to switch from HTML namespace to MathML
            // is via <math>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'math';
            }
            // The only way to switch from SVG to MathML is via
            // <math> and HTML integration points
            if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
            }
            // We only allow elements that are defined in MathML
            // spec. All others are disallowed in MathML namespace.
            return Boolean(ALL_MATHML_TAGS[tagName]);
        }
        if (element.namespaceURI === HTML_NAMESPACE) {
            // The only way to switch from SVG to HTML is via
            // HTML integration points, and from MathML to HTML
            // is via MathML text integration points
            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            // We disallow tags that are specific for MathML
            // or SVG and should never appear in HTML namespace
            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
        }
        // For XHTML and XML documents that support custom namespaces
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
            return true;
        }
        // The code should never reach this place (this means
        // that the element somehow got namespace that is not
        // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
        // Return false just in case.
        return false;
    };
    /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */ const _forceRemove = function _forceRemove(node) {
        arrayPush(DOMPurify.removed, {
            element: node
        });
        try {
            // eslint-disable-next-line unicorn/prefer-dom-node-remove
            getParentNode(node).removeChild(node);
        } catch (_) {
            remove(node);
        }
    };
    /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */ const _removeAttribute = function _removeAttribute(name, node) {
        try {
            arrayPush(DOMPurify.removed, {
                attribute: node.getAttributeNode(name),
                from: node
            });
        } catch (_) {
            arrayPush(DOMPurify.removed, {
                attribute: null,
                from: node
            });
        }
        node.removeAttribute(name);
        // We void attribute values for unremovable "is"" attributes
        if (name === 'is' && !ALLOWED_ATTR[name]) {
            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                    _forceRemove(node);
                } catch (_) {}
            } else {
                try {
                    node.setAttribute(name, '');
                } catch (_) {}
            }
        }
    };
    /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */ const _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */ let doc = null;
        let leadingWhitespace = null;
        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        } else {
            /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ const matches = stringMatch(dirty, /^[\r\n\t ]+/);
            leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
            // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
        }
        const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */ if (NAMESPACE === HTML_NAMESPACE) {
            try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
        }
        /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
            doc = implementation.createDocument(NAMESPACE, 'template', null);
            try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
            } catch (_) {
            // Syntax error if dirtyPayload is invalid xml
            }
        }
        const body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
            body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) {
            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
   * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
   *
   * @param  {Node} root The root element or node to start traversing on.
   * @return {NodeIterator} The created NodeIterator
   */ const _createNodeIterator = function _createNodeIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };
    /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */ const _isClobbered = function _isClobbered(elm) {
        return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
   * Checks whether the given object is a DOM node.
   *
   * @param  {Node} object object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */ const _isNode = function _isNode(object) {
        return typeof Node === 'function' && object instanceof Node;
    };
    /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */ const _executeHook = function _executeHook(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
            return;
        }
        arrayForEach(hooks[entryPoint], (hook)=>{
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };
    /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */ const _sanitizeElements = function _sanitizeElements(currentNode) {
        let content = null;
        /* Execute a hook if present */ _executeHook('beforeSanitizeElements', currentNode, null);
        /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Now let's check the element's type and name */ const tagName = transformCaseFunc(currentNode.nodeName);
        /* Execute a hook if present */ _executeHook('uponSanitizeElement', currentNode, {
            tagName,
            allowedTags: ALLOWED_TAGS
        });
        /* Detect mXSS attempts abusing namespace confusion */ if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any occurrence of processing instructions */ if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any kind of possibly harmful comments */ if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove element if anything forbids its presence */ if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                    return false;
                }
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                    return false;
                }
            }
            /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                    const childCount = childNodes.length;
                    for(let i = childCount - 1; i >= 0; --i){
                        const childClone = cloneNode(childNodes[i], true);
                        childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
                        parentNode.insertBefore(childClone, getNextSibling(currentNode));
                    }
                }
            }
            _forceRemove(currentNode);
            return true;
        }
        /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Make sure that older browsers don't get fallback-tag mXSS */ if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
            /* Get the element's text content */ content = currentNode.textContent;
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                content = stringReplace(content, expr, ' ');
            });
            if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                    element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
            }
        }
        /* Execute a hook if present */ _executeHook('afterSanitizeElements', currentNode, null);
        return false;
    };
    /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */ // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
            return false;
        }
        /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            if (// First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
            else {
                return false;
            }
        /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if (value) {
            return false;
        } else ;
        return true;
    };
    /**
   * _isBasicCustomElement
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   *
   * @param {string} tagName name of the tag of the node to sanitize
   * @returns {boolean} Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
   */ const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
        return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };
    /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */ const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        /* Execute a hook if present */ _executeHook('beforeSanitizeAttributes', currentNode, null);
        const { attributes } = currentNode;
        /* Check if we have attributes; if not we might have a text node */ if (!attributes) {
            return;
        }
        const hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };
        let l = attributes.length;
        /* Go backwards over all attributes; safely remove bad ones */ while(l--){
            const attr = attributes[l];
            const { name, namespaceURI, value: attrValue } = attr;
            const lcName = transformCaseFunc(name);
            let value = name === 'value' ? attrValue : stringTrim(attrValue);
            /* Execute a hook if present */ hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
            value = hookEvent.attrValue;
            /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) {
                continue;
            }
            /* Remove attribute */ _removeAttribute(name, currentNode);
            /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) {
                continue;
            }
            /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                arrayForEach([
                    MUSTACHE_EXPR,
                    ERB_EXPR,
                    TMPLIT_EXPR
                ], (expr)=>{
                    value = stringReplace(value, expr, ' ');
                });
            }
            /* Is `value` valid for this attribute? */ const lcTag = transformCaseFunc(currentNode.nodeName);
            if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
            }
            /* Full DOM Clobbering protection via namespace isolation,
       * Prefix id and name attributes with `user-content-`
       */ if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
                // Remove the attribute with this value
                _removeAttribute(name, currentNode);
                // Prefix the value and later re-create the attribute with the sanitized value
                value = SANITIZE_NAMED_PROPS_PREFIX + value;
            }
            /* Work around a security issue with comments inside attributes */ if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
                if (namespaceURI) ;
                else {
                    switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case 'TrustedHTML':
                            {
                                value = trustedTypesPolicy.createHTML(value);
                                break;
                            }
                        case 'TrustedScriptURL':
                            {
                                value = trustedTypesPolicy.createScriptURL(value);
                                break;
                            }
                    }
                }
            }
            /* Handle invalid data-* attribute set by try-catching it */ try {
                if (namespaceURI) {
                    currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                    /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                }
                if (_isClobbered(currentNode)) {
                    _forceRemove(currentNode);
                } else {
                    arrayPop(DOMPurify.removed);
                }
            } catch (_) {}
        }
        /* Execute a hook if present */ _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */ const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        let shadowNode = null;
        const shadowIterator = _createNodeIterator(fragment);
        /* Execute a hook if present */ _executeHook('beforeSanitizeShadowDOM', fragment, null);
        while(shadowNode = shadowIterator.nextNode()){
            /* Execute a hook if present */ _executeHook('uponSanitizeShadowNode', shadowNode, null);
            /* Sanitize tags and elements */ if (_sanitizeElements(shadowNode)) {
                continue;
            }
            /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }
            /* Check attributes, sanitize if necessary */ _sanitizeAttributes(shadowNode);
        }
        /* Execute a hook if present */ _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} cfg object
   */ // eslint-disable-next-line complexity
    DOMPurify.sanitize = function(dirty) {
        let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let body = null;
        let importedNode = null;
        let currentNode = null;
        let returnNode = null;
        /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
            dirty = '<!-->';
        }
        /* Stringify, in case dirty is an object */ if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString === 'function') {
                dirty = dirty.toString();
                if (typeof dirty !== 'string') {
                    throw typeErrorCreate('dirty is not a string, aborting');
                }
            } else {
                throw typeErrorCreate('toString is not a function');
            }
        }
        /* Return dirty HTML if DOMPurify cannot run */ if (!DOMPurify.isSupported) {
            return dirty;
        }
        /* Assign config vars */ if (!SET_CONFIG) {
            _parseConfig(cfg);
        }
        /* Clean up removed elements */ DOMPurify.removed = [];
        /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === 'string') {
            IN_PLACE = false;
        }
        if (IN_PLACE) {
            /* Do some early pre-sanitization to avoid unsafe root nodes */ if (dirty.nodeName) {
                const tagName = transformCaseFunc(dirty.nodeName);
                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                    throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
                }
            }
        } else if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */ body = _initDocument('<!---->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */ body = importedNode;
            } else if (importedNode.nodeName === 'HTML') {
                body = importedNode;
            } else {
                // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            }
        } else {
            /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
            dirty.indexOf('<') === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
            }
            /* Initialize the document to work on */ body = _initDocument(dirty);
            /* Check we have a DOM node from the data */ if (!body) {
                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
            }
        }
        /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
        }
        /* Get node iterator */ const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
        /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
            /* Sanitize tags and elements */ if (_sanitizeElements(currentNode)) {
                continue;
            }
            /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }
            /* Check attributes, sanitize if necessary */ _sanitizeAttributes(currentNode);
        }
        /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) {
            return dirty;
        }
        /* Return sanitized string or DOM */ if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while(body.firstChild){
                    // eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }
            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
                /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */ returnNode = importNode.call(originalDocument, returnNode, true);
            }
            return returnNode;
        }
        let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
            serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
        }
        /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                serializedHTML = stringReplace(serializedHTML, expr, ' ');
            });
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */ DOMPurify.setConfig = function() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _parseConfig(cfg);
        SET_CONFIG = true;
    };
    /**
   * Public method to remove the configuration
   * clearConfig
   *
   */ DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
    };
    /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {String} tag Tag name of containing element.
   * @param  {String} attr Attribute name.
   * @param  {String} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */ DOMPurify.isValidAttribute = function(tag, attr, value) {
        /* Initialize shared config vars if necessary. */ if (!CONFIG) {
            _parseConfig({});
        }
        const lcTag = transformCaseFunc(tag);
        const lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
    };
    /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */ DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
            return;
        }
        hooks[entryPoint] = hooks[entryPoint] || [];
        arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   * @return {Function} removed(popped) hook
   */ DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            return arrayPop(hooks[entryPoint]);
        }
    };
    /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */ DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };
    /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   */ DOMPurify.removeAllHooks = function() {
        hooks = {};
    };
    return DOMPurify;
}
var purify = createDOMPurify();
;
 //# sourceMappingURL=purify.es.mjs.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/domSanitize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "basicMarkupHtmlTags",
    ()=>basicMarkupHtmlTags,
    "convertTagToPlaintext",
    ()=>convertTagToPlaintext,
    "defaultAllowedAttrs",
    ()=>defaultAllowedAttrs,
    "safeSetInnerHtml",
    ()=>safeSetInnerHtml,
    "sanitizeHtml",
    ()=>sanitizeHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
// eslint-disable-next-line no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dompurify/dompurify.js [app-client] (ecmascript)");
;
;
;
const basicMarkupHtmlTags = Object.freeze([
    'a',
    'abbr',
    'b',
    'bdo',
    'blockquote',
    'br',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'figcaption',
    'figure',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'ins',
    'kbd',
    'label',
    'li',
    'mark',
    'ol',
    'p',
    'pre',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'small',
    'small',
    'source',
    'span',
    'strike',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
]);
const defaultAllowedAttrs = Object.freeze([
    'href',
    'target',
    'src',
    'alt',
    'title',
    'for',
    'name',
    'role',
    'tabindex',
    'x-dispatch',
    'required',
    'checked',
    'placeholder',
    'type',
    'start',
    'width',
    'height',
    'align'
]);
const fakeRelativeUrlProtocol = 'vscode-relative-path';
function validateLink(value, allowedProtocols) {
    if (allowedProtocols.override === '*') {
        return true; // allow all protocols
    }
    try {
        const url = new URL(value, fakeRelativeUrlProtocol + '://');
        if (allowedProtocols.override.includes(url.protocol.replace(/:$/, ''))) {
            return true;
        }
        if (allowedProtocols.allowRelativePaths && url.protocol === fakeRelativeUrlProtocol + ':' && !value.trim().toLowerCase().startsWith(fakeRelativeUrlProtocol)) {
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}
/**
 * Hooks dompurify using `afterSanitizeAttributes` to check that all `href` and `src`
 * attributes are valid.
 */ function hookDomPurifyHrefAndSrcSanitizer(allowedLinkProtocols, allowedMediaProtocols) {
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addHook('afterSanitizeAttributes', (node)=>{
        // check all href/src attributes for validity
        for (const attr of [
            'href',
            'src'
        ]){
            if (node.hasAttribute(attr)) {
                const attrValue = node.getAttribute(attr);
                if (attr === 'href') {
                    if (!attrValue.startsWith('#') && !validateLink(attrValue, allowedLinkProtocols)) {
                        node.removeAttribute(attr);
                    }
                } else {
                    if (!validateLink(attrValue, allowedMediaProtocols)) {
                        node.removeAttribute(attr);
                    }
                }
            }
        }
    });
}
const defaultDomPurifyConfig = Object.freeze({
    ALLOWED_TAGS: [
        ...basicMarkupHtmlTags
    ],
    ALLOWED_ATTR: [
        ...defaultAllowedAttrs
    ],
    // We sanitize the src/href attributes later if needed
    ALLOW_UNKNOWN_PROTOCOLS: true
});
function sanitizeHtml(untrusted, config) {
    return doSanitizeHtml(untrusted, config, 'trusted');
}
function doSanitizeHtml(untrusted, config, outputType) {
    try {
        var _config_allowedLinkProtocols, _config_allowedMediaProtocols;
        const resolvedConfig = {
            ...defaultDomPurifyConfig
        };
        if (config === null || config === void 0 ? void 0 : config.allowedTags) {
            if (config.allowedTags.override) {
                resolvedConfig.ALLOWED_TAGS = [
                    ...config.allowedTags.override
                ];
            }
            if (config.allowedTags.augment) {
                var _resolvedConfig_ALLOWED_TAGS;
                resolvedConfig.ALLOWED_TAGS = [
                    ...(_resolvedConfig_ALLOWED_TAGS = resolvedConfig.ALLOWED_TAGS) !== null && _resolvedConfig_ALLOWED_TAGS !== void 0 ? _resolvedConfig_ALLOWED_TAGS : [],
                    ...config.allowedTags.augment
                ];
            }
        }
        let resolvedAttributes = [
            ...defaultAllowedAttrs
        ];
        if (config === null || config === void 0 ? void 0 : config.allowedAttributes) {
            if (config.allowedAttributes.override) {
                resolvedAttributes = [
                    ...config.allowedAttributes.override
                ];
            }
            if (config.allowedAttributes.augment) {
                resolvedAttributes = [
                    ...resolvedAttributes,
                    ...config.allowedAttributes.augment
                ];
            }
        }
        // All attr names are lower-case in the sanitizer hooks
        resolvedAttributes = resolvedAttributes.map((attr)=>{
            if (typeof attr === 'string') {
                return attr.toLowerCase();
            }
            return {
                attributeName: attr.attributeName.toLowerCase(),
                shouldKeep: attr.shouldKeep
            };
        });
        const allowedAttrNames = new Set(resolvedAttributes.map((attr)=>typeof attr === 'string' ? attr : attr.attributeName));
        const allowedAttrPredicates = new Map();
        for (const attr of resolvedAttributes){
            if (typeof attr === 'string') {
                // New string attribute value clears previously set predicates
                allowedAttrPredicates.delete(attr);
            } else {
                allowedAttrPredicates.set(attr.attributeName, attr);
            }
        }
        resolvedConfig.ALLOWED_ATTR = Array.from(allowedAttrNames);
        var _config_allowedLinkProtocols_override, _config_allowRelativeLinkPaths, _config_allowedMediaProtocols_override, _config_allowRelativeMediaPaths;
        hookDomPurifyHrefAndSrcSanitizer({
            override: (_config_allowedLinkProtocols_override = config === null || config === void 0 ? void 0 : (_config_allowedLinkProtocols = config.allowedLinkProtocols) === null || _config_allowedLinkProtocols === void 0 ? void 0 : _config_allowedLinkProtocols.override) !== null && _config_allowedLinkProtocols_override !== void 0 ? _config_allowedLinkProtocols_override : [
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https
            ],
            allowRelativePaths: (_config_allowRelativeLinkPaths = config === null || config === void 0 ? void 0 : config.allowRelativeLinkPaths) !== null && _config_allowRelativeLinkPaths !== void 0 ? _config_allowRelativeLinkPaths : false
        }, {
            override: (_config_allowedMediaProtocols_override = config === null || config === void 0 ? void 0 : (_config_allowedMediaProtocols = config.allowedMediaProtocols) === null || _config_allowedMediaProtocols === void 0 ? void 0 : _config_allowedMediaProtocols.override) !== null && _config_allowedMediaProtocols_override !== void 0 ? _config_allowedMediaProtocols_override : [
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https
            ],
            allowRelativePaths: (_config_allowRelativeMediaPaths = config === null || config === void 0 ? void 0 : config.allowRelativeMediaPaths) !== null && _config_allowRelativeMediaPaths !== void 0 ? _config_allowRelativeMediaPaths : false
        });
        if (config === null || config === void 0 ? void 0 : config.replaceWithPlaintext) {
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addHook('uponSanitizeElement', replaceWithPlainTextHook);
        }
        if (allowedAttrPredicates.size) {
            __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].addHook('uponSanitizeAttribute', (node, e)=>{
                const predicate = allowedAttrPredicates.get(e.attrName);
                if (predicate) {
                    const result = predicate.shouldKeep(node, e);
                    if (typeof result === 'string') {
                        e.keepAttr = true;
                        e.attrValue = result;
                    } else {
                        e.keepAttr = result;
                    }
                } else {
                    e.keepAttr = allowedAttrNames.has(e.attrName);
                }
            });
        }
        if (outputType === 'dom') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(untrusted, {
                ...resolvedConfig,
                RETURN_DOM_FRAGMENT: true
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(untrusted, {
                ...resolvedConfig,
                RETURN_TRUSTED_TYPE: true
            });
        }
    } finally{
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removeAllHooks();
    }
}
const selfClosingTags = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
function replaceWithPlainTextHook(element, data, _config) {
    if (!data.allowedTags[data.tagName] && data.tagName !== 'body') {
        const replacement = convertTagToPlaintext(element);
        if (element.nodeType === Node.COMMENT_NODE) {
            var // Workaround for https://github.com/cure53/DOMPurify/issues/1005
            // The comment will be deleted in the next phase. However if we try to remove it now, it will cause
            // an exception. Instead we insert the text node before the comment.
            _element_parentElement;
            (_element_parentElement = element.parentElement) === null || _element_parentElement === void 0 ? void 0 : _element_parentElement.insertBefore(replacement, element);
        } else {
            var _element_parentElement1;
            (_element_parentElement1 = element.parentElement) === null || _element_parentElement1 === void 0 ? void 0 : _element_parentElement1.replaceChild(replacement, element);
        }
    }
}
function convertTagToPlaintext(element) {
    let startTagText;
    let endTagText;
    if (element.nodeType === Node.COMMENT_NODE) {
        startTagText = "<!--".concat(element.textContent, "-->");
    } else {
        const tagName = element.tagName.toLowerCase();
        const isSelfClosing = selfClosingTags.includes(tagName);
        const attrString = element.attributes.length ? ' ' + Array.from(element.attributes).map((attr)=>"".concat(attr.name, '="').concat(attr.value, '"')).join(' ') : '';
        startTagText = "<".concat(tagName).concat(attrString, ">");
        if (!isSelfClosing) {
            endTagText = "</".concat(tagName, ">");
        }
    }
    const fragment = document.createDocumentFragment();
    const textNode = element.ownerDocument.createTextNode(startTagText);
    fragment.appendChild(textNode);
    while(element.firstChild){
        fragment.appendChild(element.firstChild);
    }
    const endTagTextNode = endTagText ? element.ownerDocument.createTextNode(endTagText) : undefined;
    if (endTagTextNode) {
        fragment.appendChild(endTagTextNode);
    }
    return fragment;
}
function safeSetInnerHtml(node, untrusted, config) {
    const fragment = doSanitizeHtml(untrusted, config, 'dom');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"])(node, fragment);
} //# sourceMappingURL=domSanitize.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "allowedMarkdownHtmlAttributes",
    ()=>allowedMarkdownHtmlAttributes,
    "allowedMarkdownHtmlTags",
    ()=>allowedMarkdownHtmlTags,
    "fillInIncompleteTokens",
    ()=>fillInIncompleteTokens,
    "renderAsPlaintext",
    ()=>renderAsPlaintext,
    "renderMarkdown",
    ()=>renderMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/iconLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$idGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/idGenerator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lazy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/marked/marked.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marshalling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/marshalling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/resources.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domSanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/domSanitize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js [app-client] (ecmascript)");
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
const defaultMarkedRenderers = Object.freeze({
    image: (param)=>{
        let { href, title, text } = param;
        let dimensions = [];
        let attributes = [];
        if (href) {
            ({ href, dimensions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHrefAndDimensions"])(href));
            attributes.push('src="'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeDoubleQuotes"])(href), '"'));
        }
        if (text) {
            attributes.push('alt="'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeDoubleQuotes"])(text), '"'));
        }
        if (title) {
            attributes.push('title="'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeDoubleQuotes"])(title), '"'));
        }
        if (dimensions.length) {
            attributes = attributes.concat(dimensions);
        }
        return '<img ' + attributes.join(' ') + '>';
    },
    paragraph (param) {
        let { tokens } = param;
        return "<p>".concat(this.parser.parseInline(tokens), "</p>");
    },
    link (param) {
        let { href, title, tokens } = param;
        let text = this.parser.parseInline(tokens);
        if (typeof href !== 'string') {
            return '';
        }
        // Remove markdown escapes. Workaround for https://github.com/chjj/marked/issues/829
        if (href === text) {
            text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMarkdownEscapes"])(text);
        }
        title = typeof title === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeDoubleQuotes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMarkdownEscapes"])(title)) : '';
        href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMarkdownEscapes"])(href);
        // HTML Encode href
        href = href.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return '<a href="'.concat(href, '" title="').concat(title || href, '" draggable="false">').concat(text, "</a>");
    }
});
function renderMarkdown(markdown) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, target = arguments.length > 2 ? arguments[2] : void 0;
    const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    let isDisposed = false;
    var _options_markedExtensions;
    const markedInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marked"](...(_options_markedExtensions = options.markedExtensions) !== null && _options_markedExtensions !== void 0 ? _options_markedExtensions : []);
    const { renderer, codeBlocks, syncCodeBlocks } = createMarkdownRenderer(markedInstance, options, markdown);
    const value = preprocessMarkdownString(markdown);
    let renderedMarkdown;
    if (options.fillInIncompleteTokens) {
        // The defaults are applied by parse but not lexer()/parser(), and they need to be present
        const opts = {
            ...markedInstance.defaults,
            ...options.markedOptions,
            renderer
        };
        const tokens = markedInstance.lexer(value, opts);
        const newTokens = fillInIncompleteTokens(tokens);
        renderedMarkdown = markedInstance.parser(newTokens, opts);
    } else {
        renderedMarkdown = markedInstance.parse(value, {
            ...options === null || options === void 0 ? void 0 : options.markedOptions,
            renderer,
            async: false
        });
    }
    // Rewrite theme icons
    if (markdown.supportThemeIcons) {
        const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderLabelWithIcons"])(renderedMarkdown);
        renderedMarkdown = elements.map((e)=>typeof e === 'string' ? e : e.outerHTML).join('');
    }
    const renderedContent = document.createElement('div');
    var _options_sanitizerConfig;
    const sanitizerConfig = getDomSanitizerConfig(markdown, (_options_sanitizerConfig = options.sanitizerConfig) !== null && _options_sanitizerConfig !== void 0 ? _options_sanitizerConfig : {});
    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domSanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSetInnerHtml"](renderedContent, renderedMarkdown, sanitizerConfig);
    // Rewrite links and images before potentially inserting them into the real dom
    rewriteRenderedLinks(markdown, options, renderedContent);
    let outElement;
    if (target) {
        outElement = target;
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"](target, ...renderedContent.children);
    } else {
        outElement = renderedContent;
    }
    if (codeBlocks.length > 0) {
        Promise.all(codeBlocks).then((tuples)=>{
            var _options_asyncRenderCallback;
            if (isDisposed) {
                return;
            }
            const renderedElements = new Map(tuples);
            const placeholderElements = outElement.querySelectorAll("div[data-code]");
            for (const placeholderElement of placeholderElements){
                var _placeholderElement_dataset_code;
                const renderedElement = renderedElements.get((_placeholderElement_dataset_code = placeholderElement.dataset['code']) !== null && _placeholderElement_dataset_code !== void 0 ? _placeholderElement_dataset_code : '');
                if (renderedElement) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"](placeholderElement, renderedElement);
                }
            }
            (_options_asyncRenderCallback = options.asyncRenderCallback) === null || _options_asyncRenderCallback === void 0 ? void 0 : _options_asyncRenderCallback.call(options);
        });
    } else if (syncCodeBlocks.length > 0) {
        const renderedElements = new Map(syncCodeBlocks);
        const placeholderElements = outElement.querySelectorAll("div[data-code]");
        for (const placeholderElement of placeholderElements){
            var _placeholderElement_dataset_code;
            const renderedElement = renderedElements.get((_placeholderElement_dataset_code = placeholderElement.dataset['code']) !== null && _placeholderElement_dataset_code !== void 0 ? _placeholderElement_dataset_code : '');
            if (renderedElement) {
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"](placeholderElement, renderedElement);
            }
        }
    }
    // Signal size changes for image tags
    if (options.asyncRenderCallback) {
        for (const img of outElement.getElementsByTagName('img')){
            const listener = disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](img, 'load', ()=>{
                listener.dispose();
                options.asyncRenderCallback();
            }));
        }
    }
    // Add event listeners for links
    if (options.actionHandler) {
        const clickCb = (e)=>{
            const mouseEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](outElement), e);
            if (!mouseEvent.leftButton && !mouseEvent.middleButton) {
                return;
            }
            activateLink(markdown, options, mouseEvent);
        };
        disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](outElement, 'click', clickCb));
        disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](outElement, 'auxclick', clickCb));
        disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](outElement, 'keydown', (e)=>{
            const keyboardEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (!keyboardEvent.equals(10 /* KeyCode.Space */ ) && !keyboardEvent.equals(3 /* KeyCode.Enter */ )) {
                return;
            }
            activateLink(markdown, options, keyboardEvent);
        }));
    }
    // Remove/disable inputs
    for (const input of [
        ...outElement.getElementsByTagName('input')
    ]){
        var _input_attributes_getNamedItem;
        if (((_input_attributes_getNamedItem = input.attributes.getNamedItem('type')) === null || _input_attributes_getNamedItem === void 0 ? void 0 : _input_attributes_getNamedItem.value) === 'checkbox') {
            input.setAttribute('disabled', '');
        } else {
            var _options_sanitizerConfig1;
            if ((_options_sanitizerConfig1 = options.sanitizerConfig) === null || _options_sanitizerConfig1 === void 0 ? void 0 : _options_sanitizerConfig1.replaceWithPlaintext) {
                var _input_parentElement;
                const replacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domSanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertTagToPlaintext"])(input);
                (_input_parentElement = input.parentElement) === null || _input_parentElement === void 0 ? void 0 : _input_parentElement.replaceChild(replacement, input);
            } else {
                input.remove();
            }
        }
    }
    return {
        element: outElement,
        dispose: ()=>{
            isDisposed = true;
            disposables.dispose();
        }
    };
}
function rewriteRenderedLinks(markdown, options, root) {
    for (const el of root.querySelectorAll('img, audio, video, source')){
        const src = el.getAttribute('src'); // Get the raw 'src' attribute value as text, not the resolved 'src'
        if (src) {
            var _options_sanitizerConfig;
            let href = src;
            try {
                if (markdown.baseUri) {
                    href = resolveWithBaseUri(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].from(markdown.baseUri), href);
                }
            } catch (err) {}
            el.setAttribute('src', massageHref(markdown, href, true));
            if ((_options_sanitizerConfig = options.sanitizerConfig) === null || _options_sanitizerConfig === void 0 ? void 0 : _options_sanitizerConfig.remoteImageIsAllowed) {
                const uri = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(href);
                if (uri.scheme !== __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].file && uri.scheme !== __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].data && !options.sanitizerConfig.remoteImageIsAllowed(uri)) {
                    el.replaceWith(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('', undefined, el.outerHTML));
                }
            }
        }
    }
    for (const el of root.querySelectorAll('a')){
        const href = el.getAttribute('href'); // Get the raw 'href' attribute value as text, not the resolved 'href'
        el.setAttribute('href', ''); // Clear out href. We use the `data-href` for handling clicks instead
        if (!href || /^data:|javascript:/i.test(href) || /^command:/i.test(href) && !markdown.isTrusted || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(href)) {
            // drop the link
            el.replaceWith(...el.childNodes);
        } else {
            let resolvedHref = massageHref(markdown, href, false);
            if (markdown.baseUri) {
                resolvedHref = resolveWithBaseUri(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].from(markdown.baseUri), href);
            }
            el.dataset.href = resolvedHref;
        }
    }
}
function createMarkdownRenderer(marked, options, markdown) {
    const renderer = new marked.Renderer(options.markedOptions);
    renderer.image = defaultMarkedRenderers.image;
    renderer.link = defaultMarkedRenderers.link;
    renderer.paragraph = defaultMarkedRenderers.paragraph;
    // Will collect [id, renderedElement] tuples
    const codeBlocks = [];
    const syncCodeBlocks = [];
    if (options.codeBlockRendererSync) {
        renderer.code = (param)=>{
            let { text, lang, raw } = param;
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$idGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGenerator"].nextId();
            const value = options.codeBlockRendererSync(postProcessCodeBlockLanguageId(lang), text, raw);
            syncCodeBlocks.push([
                id,
                value
            ]);
            return '<div class="code" data-code="'.concat(id, '">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text), "</div>");
        };
    } else if (options.codeBlockRenderer) {
        renderer.code = (param)=>{
            let { text, lang } = param;
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$idGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGenerator"].nextId();
            const value = options.codeBlockRenderer(postProcessCodeBlockLanguageId(lang), text);
            codeBlocks.push(value.then((element)=>[
                    id,
                    element
                ]));
            return '<div class="code" data-code="'.concat(id, '">').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text), "</div>");
        };
    }
    if (!markdown.supportHtml) {
        // Note: we always pass the output through dompurify after this so that we don't rely on
        // marked for real sanitization.
        renderer.html = (param)=>{
            let { text } = param;
            var _options_sanitizerConfig;
            if ((_options_sanitizerConfig = options.sanitizerConfig) === null || _options_sanitizerConfig === void 0 ? void 0 : _options_sanitizerConfig.replaceWithPlaintext) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text);
            }
            const match = markdown.isTrusted ? text.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : undefined;
            return match ? text : '';
        };
    }
    return {
        renderer,
        codeBlocks,
        syncCodeBlocks
    };
}
function preprocessMarkdownString(markdown) {
    let value = markdown.value;
    // values that are too long will freeze the UI
    if (value.length > 100_000) {
        value = "".concat(value.substr(0, 100_000), "…");
    }
    // escape theme icons
    if (markdown.supportThemeIcons) {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownEscapeEscapedIcons"])(value);
    }
    return value;
}
function activateLink(mdStr, options, event) {
    const target = event.target.closest('a[data-href]');
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](target)) {
        return;
    }
    try {
        let href = target.dataset['href'];
        if (href) {
            var _options_actionHandler;
            if (mdStr.baseUri) {
                href = resolveWithBaseUri(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].from(mdStr.baseUri), href);
            }
            (_options_actionHandler = options.actionHandler) === null || _options_actionHandler === void 0 ? void 0 : _options_actionHandler.call(options, href, mdStr);
        }
    } catch (err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
    } finally{
        event.preventDefault();
    }
}
function uriMassage(markdown, part) {
    let data;
    try {
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marshalling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(decodeURIComponent(part));
    } catch (e) {
    // ignore
    }
    if (!data) {
        return part;
    }
    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneAndChange"])(data, (value)=>{
        if (markdown.uris && markdown.uris[value]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].revive(markdown.uris[value]);
        } else {
            return undefined;
        }
    });
    return encodeURIComponent(JSON.stringify(data));
}
function massageHref(markdown, href, isDomUri) {
    const data = markdown.uris && markdown.uris[href];
    let uri = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].revive(data);
    if (isDomUri) {
        if (href.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].data + ':')) {
            return href;
        }
        if (!uri) {
            uri = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(href);
        }
        // this URI will end up as "src"-attribute of a dom node
        // and because of that special rewriting needs to be done
        // so that the URI uses a protocol that's understood by
        // browsers (like http or https)
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileAccess"].uriToBrowserUri(uri).toString(true);
    }
    if (!uri) {
        return href;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].parse(href).toString() === uri.toString()) {
        return href; // no transformation performed
    }
    if (uri.query) {
        uri = uri.with({
            query: uriMassage(markdown, uri.query)
        });
    }
    return uri.toString();
}
function postProcessCodeBlockLanguageId(lang) {
    if (!lang) {
        return '';
    }
    const parts = lang.split(/[\s+|:|,|\{|\?]/, 1);
    if (parts.length) {
        return parts[0];
    }
    return lang;
}
function resolveWithBaseUri(baseUri, href) {
    const hasScheme = /^\w[\w\d+.-]*:/.test(href);
    if (hasScheme) {
        return href;
    }
    if (baseUri.path.endsWith('/')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])(baseUri, href).toString();
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$resources$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dirname"])(baseUri), href).toString();
    }
}
function sanitizeRenderedMarkdown(renderedMarkdown, originalMdStrConfig) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const sanitizerConfig = getDomSanitizerConfig(originalMdStrConfig, options);
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domSanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeHtml"](renderedMarkdown, sanitizerConfig);
}
const allowedMarkdownHtmlTags = Object.freeze([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$domSanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basicMarkupHtmlTags"],
    'input'
]);
const allowedMarkdownHtmlAttributes = Object.freeze([
    'align',
    'autoplay',
    'alt',
    'colspan',
    'controls',
    'draggable',
    'height',
    'href',
    'loop',
    'muted',
    'playsinline',
    'poster',
    'rowspan',
    'src',
    'target',
    'title',
    'type',
    'width',
    'start',
    // Input (For disabled inputs)
    'checked',
    'disabled',
    'value',
    // Custom markdown attributes
    'data-code',
    'data-href',
    // Only allow very specific styles
    {
        attributeName: 'style',
        shouldKeep: (element, data)=>{
            if (element.tagName === 'SPAN') {
                if (data.attrName === 'style') {
                    return /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(border-radius:[0-9]+px;)?$/.test(data.attrValue);
                }
            }
            return false;
        }
    },
    // Only allow codicons for classes
    {
        attributeName: 'class',
        shouldKeep: (element, data)=>{
            if (element.tagName === 'SPAN') {
                if (data.attrName === 'class') {
                    return /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(data.attrValue);
                }
            }
            return false;
        }
    }
]);
function getDomSanitizerConfig(mdStrConfig, options) {
    var _options_allowedLinkSchemes, _options_allowedTags, _options_allowedAttributes;
    var _mdStrConfig_isTrusted;
    const isTrusted = (_mdStrConfig_isTrusted = mdStrConfig.isTrusted) !== null && _mdStrConfig_isTrusted !== void 0 ? _mdStrConfig_isTrusted : false;
    const allowedLinkSchemes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].mailto,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].file,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeFileResource,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeRemote,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeRemoteResource,
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeNotebookCell
    ];
    if (isTrusted) {
        allowedLinkSchemes.push(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].command);
    }
    if ((_options_allowedLinkSchemes = options.allowedLinkSchemes) === null || _options_allowedLinkSchemes === void 0 ? void 0 : _options_allowedLinkSchemes.augment) {
        allowedLinkSchemes.push(...options.allowedLinkSchemes.augment);
    }
    var _options_allowedTags_override, _options_allowedAttributes_override;
    return {
        // allowedTags should included everything that markdown renders to.
        // Since we have our own sanitize function for marked, it's possible we missed some tag so let dompurify make sure.
        // HTML tags that can result from markdown are from reading https://spec.commonmark.org/0.29/
        // HTML table tags that can result from markdown are from https://github.github.com/gfm/#tables-extension-
        allowedTags: {
            override: (_options_allowedTags_override = (_options_allowedTags = options.allowedTags) === null || _options_allowedTags === void 0 ? void 0 : _options_allowedTags.override) !== null && _options_allowedTags_override !== void 0 ? _options_allowedTags_override : allowedMarkdownHtmlTags
        },
        allowedAttributes: {
            override: (_options_allowedAttributes_override = (_options_allowedAttributes = options.allowedAttributes) === null || _options_allowedAttributes === void 0 ? void 0 : _options_allowedAttributes.override) !== null && _options_allowedAttributes_override !== void 0 ? _options_allowedAttributes_override : allowedMarkdownHtmlAttributes
        },
        allowedLinkProtocols: {
            override: allowedLinkSchemes
        },
        allowRelativeLinkPaths: !!mdStrConfig.baseUri,
        allowedMediaProtocols: {
            override: [
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].http,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].https,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].data,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].file,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeFileResource,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeRemote,
                __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schemas"].vscodeRemoteResource
            ]
        },
        replaceWithPlaintext: options.replaceWithPlaintext
    };
}
function renderAsPlaintext(str, options) {
    if (typeof str === 'string') {
        return str;
    }
    var _str_value;
    // values that are too long will freeze the UI
    let value = (_str_value = str.value) !== null && _str_value !== void 0 ? _str_value : '';
    if (value.length > 100_000) {
        value = "".concat(value.substr(0, 100_000), "…");
    }
    const html = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](value, {
        async: false,
        renderer: (options === null || options === void 0 ? void 0 : options.includeCodeBlocksFences) ? plainTextWithCodeBlocksRenderer.value : plainTextRenderer.value
    });
    return sanitizeRenderedMarkdown(html, {
        isTrusted: false
    }, {}).toString().replace(/&(#\d+|[a-zA-Z]+);/g, (m)=>{
        var _unescapeInfo_get;
        return (_unescapeInfo_get = unescapeInfo.get(m)) !== null && _unescapeInfo_get !== void 0 ? _unescapeInfo_get : m;
    }).trim();
}
const unescapeInfo = new Map([
    [
        '&quot;',
        '"'
    ],
    [
        '&nbsp;',
        ' '
    ],
    [
        '&amp;',
        '&'
    ],
    [
        '&#39;',
        '\''
    ],
    [
        '&lt;',
        '<'
    ],
    [
        '&gt;',
        '>'
    ]
]);
function createPlainTextRenderer() {
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]();
    renderer.code = (param)=>{
        let { text } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text);
    };
    renderer.blockquote = (param)=>{
        let { text } = param;
        return text + '\n';
    };
    renderer.html = (_)=>{
        return '';
    };
    renderer.heading = function(param) {
        let { tokens } = param;
        return this.parser.parseInline(tokens) + '\n';
    };
    renderer.hr = ()=>{
        return '';
    };
    renderer.list = function(param) {
        let { items } = param;
        return items.map((x)=>this.listitem(x)).join('\n') + '\n';
    };
    renderer.listitem = (param)=>{
        let { text } = param;
        return text + '\n';
    };
    renderer.paragraph = function(param) {
        let { tokens } = param;
        return this.parser.parseInline(tokens) + '\n';
    };
    renderer.table = function(param) {
        let { header, rows } = param;
        return header.map((cell)=>this.tablecell(cell)).join(' ') + '\n' + rows.map((cells)=>cells.map((cell)=>this.tablecell(cell)).join(' ')).join('\n') + '\n';
    };
    renderer.tablerow = (param)=>{
        let { text } = param;
        return text;
    };
    renderer.tablecell = function(param) {
        let { tokens } = param;
        return this.parser.parseInline(tokens);
    };
    renderer.strong = (param)=>{
        let { text } = param;
        return text;
    };
    renderer.em = (param)=>{
        let { text } = param;
        return text;
    };
    renderer.codespan = (param)=>{
        let { text } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text);
    };
    renderer.br = (_)=>{
        return '\n';
    };
    renderer.del = (param)=>{
        let { text } = param;
        return text;
    };
    renderer.image = (_)=>{
        return '';
    };
    renderer.text = (param)=>{
        let { text } = param;
        return text;
    };
    renderer.link = (param)=>{
        let { text } = param;
        return text;
    };
    return renderer;
}
const plainTextRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lazy"](createPlainTextRenderer);
const plainTextWithCodeBlocksRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lazy"](()=>{
    const renderer = createPlainTextRenderer();
    renderer.code = (param)=>{
        let { text } = param;
        return "\n```\n".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"])(text), "\n```\n");
    };
    return renderer;
});
function mergeRawTokenText(tokens) {
    let mergedTokenText = '';
    tokens.forEach((token)=>{
        mergedTokenText += token.raw;
    });
    return mergedTokenText;
}
function completeSingleLinePattern(token) {
    if (!token.tokens) {
        return undefined;
    }
    for(let i = token.tokens.length - 1; i >= 0; i--){
        const subtoken = token.tokens[i];
        if (subtoken.type === 'text') {
            const lines = subtoken.raw.split('\n');
            const lastLine = lines[lines.length - 1];
            if (lastLine.includes('`')) {
                return completeCodespan(token);
            } else if (lastLine.includes('**')) {
                return completeDoublestar(token);
            } else if (lastLine.match(/\*\w/)) {
                return completeStar(token);
            } else if (lastLine.match(/(^|\s)__\w/)) {
                return completeDoubleUnderscore(token);
            } else if (lastLine.match(/(^|\s)_\w/)) {
                return completeUnderscore(token);
            } else if (// Text with start of link target
            hasLinkTextAndStartOfLinkTarget(lastLine) || // This token doesn't have the link text, eg if it contains other markdown constructs that are in other subtokens.
            // But some preceding token does have an unbalanced [ at least
            hasStartOfLinkTargetAndNoLinkText(lastLine) && token.tokens.slice(0, i).some((t)=>t.type === 'text' && t.raw.match(/\[[^\]]*$/))) {
                var // If the link was parsed as a link, then look for a link token and a text token with a quote
                _nextTwoSubTokens_, _nextTwoSubTokens_1;
                const nextTwoSubTokens = token.tokens.slice(i + 1);
                // A markdown link can look like
                // [link text](https://microsoft.com "more text")
                // Where "more text" is a title for the link or an argument to a vscode command link
                if (((_nextTwoSubTokens_ = nextTwoSubTokens[0]) === null || _nextTwoSubTokens_ === void 0 ? void 0 : _nextTwoSubTokens_.type) === 'link' && ((_nextTwoSubTokens_1 = nextTwoSubTokens[1]) === null || _nextTwoSubTokens_1 === void 0 ? void 0 : _nextTwoSubTokens_1.type) === 'text' && nextTwoSubTokens[1].raw.match(/^ *"[^"]*$/) || // And if the link was not parsed as a link (eg command link), just look for a single quote in this token
                lastLine.match(/^[^"]* +"[^"]*$/)) {
                    return completeLinkTargetArg(token);
                }
                return completeLinkTarget(token);
            } else if (lastLine.match(/(^|\s)\[\w*[^\]]*$/)) {
                return completeLinkText(token);
            }
        }
    }
    return undefined;
}
function hasLinkTextAndStartOfLinkTarget(str) {
    return !!str.match(/(^|\s)\[.*\]\(\w*/);
}
function hasStartOfLinkTargetAndNoLinkText(str) {
    return !!str.match(/^[^\[]*\]\([^\)]*$/);
}
function completeListItemPattern(list) {
    var _lastListItem_raw_match;
    // Patch up this one list item
    const lastListItem = list.items[list.items.length - 1];
    const lastListSubToken = lastListItem.tokens ? lastListItem.tokens[lastListItem.tokens.length - 1] : undefined;
    /*
    Example list token structures:

    list
        list_item
            text
                text
                codespan
                link
        list_item
            text
            code // Complete indented codeblock
        list_item
            text
            space
            text
                text // Incomplete indented codeblock
        list_item
            text
            list // Nested list
                list_item
                    text
                        text

    Contrast with paragraph:
    paragraph
        text
        codespan
    */ const listEndsInHeading = (list)=>{
        // A list item can be rendered as a heading for some reason when it has a subitem where we haven't rendered the text yet like this:
        // 1. list item
        //    -
        const lastItem = list.items.at(-1);
        const lastToken = lastItem === null || lastItem === void 0 ? void 0 : lastItem.tokens.at(-1);
        return (lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === 'heading' || (lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === 'list' && listEndsInHeading(lastToken);
    };
    let newToken;
    if ((lastListSubToken === null || lastListSubToken === void 0 ? void 0 : lastListSubToken.type) === 'text' && !('inRawBlock' in lastListItem)) {
        newToken = completeSingleLinePattern(lastListSubToken);
    } else if (listEndsInHeading(list)) {
        const newList = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lexer"](list.raw.trim() + ' &nbsp;')[0];
        if (newList.type !== 'list') {
            // Something went wrong
            return;
        }
        return newList;
    }
    if (!newToken || newToken.type !== 'paragraph') {
        // Nothing to fix, or not a pattern we were expecting
        return;
    }
    const previousListItemsText = mergeRawTokenText(list.items.slice(0, -1));
    // Grabbing the `- ` or `1. ` or `* ` off the list item because I can't find a better way to do this
    const lastListItemLead = (_lastListItem_raw_match = lastListItem.raw.match(/^(\s*(-|\d+\.|\*) +)/)) === null || _lastListItem_raw_match === void 0 ? void 0 : _lastListItem_raw_match[0];
    if (!lastListItemLead) {
        // Is badly formatted
        return;
    }
    const newListItemText = lastListItemLead + mergeRawTokenText(lastListItem.tokens.slice(0, -1)) + newToken.raw;
    const newList = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lexer"](previousListItemsText + newListItemText)[0];
    if (newList.type !== 'list') {
        // Something went wrong
        return;
    }
    return newList;
}
function completeHeading(token, fullRawText) {
    if (token.raw.match(/-\s*$/)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lexer"](fullRawText + ' &nbsp;');
    }
}
const maxIncompleteTokensFixRounds = 3;
function fillInIncompleteTokens(tokens) {
    for(let i = 0; i < maxIncompleteTokensFixRounds; i++){
        const newTokens = fillInIncompleteTokensOnce(tokens);
        if (newTokens) {
            tokens = newTokens;
        } else {
            break;
        }
    }
    return tokens;
}
function fillInIncompleteTokensOnce(tokens) {
    let i;
    let newTokens;
    for(i = 0; i < tokens.length; i++){
        const token = tokens[i];
        if (token.type === 'paragraph' && token.raw.match(/(\n|^)\|/)) {
            newTokens = completeTable(tokens.slice(i));
            break;
        }
    }
    const lastToken = tokens.at(-1);
    if (!newTokens && (lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === 'list') {
        const newListToken = completeListItemPattern(lastToken);
        if (newListToken) {
            newTokens = [
                newListToken
            ];
            i = tokens.length - 1;
        }
    }
    if (!newTokens && (lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === 'paragraph') {
        // Only operates on a single token, because any newline that follows this should break these patterns
        const newToken = completeSingleLinePattern(lastToken);
        if (newToken) {
            newTokens = [
                newToken
            ];
            i = tokens.length - 1;
        }
    }
    if (newTokens) {
        const newTokensList = [
            ...tokens.slice(0, i),
            ...newTokens
        ];
        newTokensList.links = tokens.links;
        return newTokensList;
    }
    if ((lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === 'heading') {
        const completeTokens = completeHeading(lastToken, mergeRawTokenText(tokens));
        if (completeTokens) {
            return completeTokens;
        }
    }
    return null;
}
function completeCodespan(token) {
    return completeWithString(token, '`');
}
function completeStar(tokens) {
    return completeWithString(tokens, '*');
}
function completeUnderscore(tokens) {
    return completeWithString(tokens, '_');
}
function completeLinkTarget(tokens) {
    return completeWithString(tokens, ')', false);
}
function completeLinkTargetArg(tokens) {
    return completeWithString(tokens, '")', false);
}
function completeLinkText(tokens) {
    return completeWithString(tokens, '](https://microsoft.com)', false);
}
function completeDoublestar(tokens) {
    return completeWithString(tokens, '**');
}
function completeDoubleUnderscore(tokens) {
    return completeWithString(tokens, '__');
}
function completeWithString(tokens, closingString) {
    let shouldTrim = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const mergedRawText = mergeRawTokenText(Array.isArray(tokens) ? tokens : [
        tokens
    ]);
    // If it was completed correctly, this should be a single token.
    // Expecting either a Paragraph or a List
    const trimmedRawText = shouldTrim ? mergedRawText.trimEnd() : mergedRawText;
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lexer"](trimmedRawText + closingString)[0];
}
function completeTable(tokens) {
    const mergedRawText = mergeRawTokenText(tokens);
    const lines = mergedRawText.split('\n');
    let numCols; // The number of line1 col headers
    let hasSeparatorRow = false;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        if (typeof numCols === 'undefined' && line.match(/^\s*\|/)) {
            const line1Matches = line.match(/(\|[^\|]+)(?=\||$)/g);
            if (line1Matches) {
                numCols = line1Matches.length;
            }
        } else if (typeof numCols === 'number') {
            if (line.match(/^\s*\|/)) {
                if (i !== lines.length - 1) {
                    // We got the line1 header row, and the line2 separator row, but there are more lines, and it wasn't parsed as a table!
                    // That's strange and means that the table is probably malformed in the source, so I won't try to patch it up.
                    return undefined;
                }
                // Got a line2 separator row- partial or complete, doesn't matter, we'll replace it with a correct one
                hasSeparatorRow = true;
            } else {
                // The line after the header row isn't a valid separator row, so the table is malformed, don't fix it up
                return undefined;
            }
        }
    }
    if (typeof numCols === 'number' && numCols > 0) {
        const prefixText = hasSeparatorRow ? lines.slice(0, -1).join('\n') : mergedRawText;
        const line1EndsInPipe = !!prefixText.match(/\|\s*$/);
        const newRawText = prefixText + (line1EndsInPipe ? '' : '|') + "\n|".concat(' --- |'.repeat(numCols));
        return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$marked$2f$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lexer"](newRawText);
    }
    return undefined;
} //# sourceMappingURL=markdownRenderer.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/formattedTextRenderer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "renderFormattedText",
    ()=>renderFormattedText,
    "renderText",
    ()=>renderText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
function renderText(text, _options, target) {
    const element = target !== null && target !== void 0 ? target : document.createElement('div');
    element.textContent = text;
    return element;
}
function renderFormattedText(formattedText, options, target) {
    const element = target !== null && target !== void 0 ? target : document.createElement('div');
    element.textContent = '';
    _renderFormattedText(element, parseFormattedText(formattedText, !!(options === null || options === void 0 ? void 0 : options.renderCodeSegments)), options === null || options === void 0 ? void 0 : options.actionHandler, options === null || options === void 0 ? void 0 : options.renderCodeSegments);
    return element;
}
class StringStream {
    eos() {
        return this.index >= this.source.length;
    }
    next() {
        const next = this.peek();
        this.advance();
        return next;
    }
    peek() {
        return this.source[this.index];
    }
    advance() {
        this.index++;
    }
    constructor(source){
        this.source = source;
        this.index = 0;
    }
}
function _renderFormattedText(element, treeNode, actionHandler, renderCodeSegments) {
    let child;
    if (treeNode.type === 2 /* FormatType.Text */ ) {
        child = document.createTextNode(treeNode.content || '');
    } else if (treeNode.type === 3 /* FormatType.Bold */ ) {
        child = document.createElement('b');
    } else if (treeNode.type === 4 /* FormatType.Italics */ ) {
        child = document.createElement('i');
    } else if (treeNode.type === 7 /* FormatType.Code */  && renderCodeSegments) {
        child = document.createElement('code');
    } else if (treeNode.type === 5 /* FormatType.Action */  && actionHandler) {
        const a = document.createElement('a');
        actionHandler.disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](a, 'click', (event)=>{
            actionHandler.callback(String(treeNode.index), event);
        }));
        child = a;
    } else if (treeNode.type === 8 /* FormatType.NewLine */ ) {
        child = document.createElement('br');
    } else if (treeNode.type === 1 /* FormatType.Root */ ) {
        child = element;
    }
    if (child && element !== child) {
        element.appendChild(child);
    }
    if (child && Array.isArray(treeNode.children)) {
        treeNode.children.forEach((nodeChild)=>{
            _renderFormattedText(child, nodeChild, actionHandler, renderCodeSegments);
        });
    }
}
function parseFormattedText(content, parseCodeSegments) {
    const root = {
        type: 1 /* FormatType.Root */ ,
        children: []
    };
    let actionViewItemIndex = 0;
    let current = root;
    const stack = [];
    const stream = new StringStream(content);
    while(!stream.eos()){
        let next = stream.next();
        const isEscapedFormatType = next === '\\' && formatTagType(stream.peek(), parseCodeSegments) !== 0 /* FormatType.Invalid */ ;
        if (isEscapedFormatType) {
            next = stream.next(); // unread the backslash if it escapes a format tag type
        }
        if (!isEscapedFormatType && isFormatTag(next, parseCodeSegments) && next === stream.peek()) {
            stream.advance();
            if (current.type === 2 /* FormatType.Text */ ) {
                current = stack.pop();
            }
            const type = formatTagType(next, parseCodeSegments);
            if (current.type === type || current.type === 5 /* FormatType.Action */  && type === 6 /* FormatType.ActionClose */ ) {
                current = stack.pop();
            } else {
                const newCurrent = {
                    type: type,
                    children: []
                };
                if (type === 5 /* FormatType.Action */ ) {
                    newCurrent.index = actionViewItemIndex;
                    actionViewItemIndex++;
                }
                current.children.push(newCurrent);
                stack.push(current);
                current = newCurrent;
            }
        } else if (next === '\n') {
            if (current.type === 2 /* FormatType.Text */ ) {
                current = stack.pop();
            }
            current.children.push({
                type: 8 /* FormatType.NewLine */ 
            });
        } else {
            if (current.type !== 2 /* FormatType.Text */ ) {
                const textCurrent = {
                    type: 2 /* FormatType.Text */ ,
                    content: next
                };
                current.children.push(textCurrent);
                stack.push(current);
                current = textCurrent;
            } else {
                current.content += next;
            }
        }
    }
    if (current.type === 2 /* FormatType.Text */ ) {
        current = stack.pop();
    }
    if (stack.length) {
    // incorrectly formatted string literal
    }
    return root;
}
function isFormatTag(char, supportCodeSegments) {
    return formatTagType(char, supportCodeSegments) !== 0 /* FormatType.Invalid */ ;
}
function formatTagType(char, supportCodeSegments) {
    switch(char){
        case '*':
            return 3 /* FormatType.Bold */ ;
        case '_':
            return 4 /* FormatType.Italics */ ;
        case '[':
            return 5 /* FormatType.Action */ ;
        case ']':
            return 6 /* FormatType.ActionClose */ ;
        case '`':
            return supportCodeSegments ? 7 /* FormatType.Code */  : 0 /* FormatType.Invalid */ ;
        default:
            return 0 /* FormatType.Invalid */ ;
    }
} //# sourceMappingURL=formattedTextRenderer.js.map
}),
"[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/webWorkerFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s([
    "WebWorkerDescriptor",
    ()=>WebWorkerDescriptor,
    "createWebWorker",
    ()=>createWebWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$trustedTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/browser/trustedTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$worker$2f$webWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/worker/webWorker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/nls.messages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Reuse the trusted types policy defined from worker bootstrap
// when available.
// Refs https://github.com/microsoft/vscode/issues/222193
let ttPolicy;
if (typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope' && globalThis.workerttPolicy !== undefined) {
    ttPolicy = globalThis.workerttPolicy;
} else {
    ttPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$trustedTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTrustedTypesPolicy"])('defaultWorkerFactory', {
        createScriptURL: (value)=>value
    });
}
function getWorker(descriptor, id) {
    const label = descriptor.label || 'anonymous' + id;
    const monacoEnvironment = globalThis.MonacoEnvironment;
    if (monacoEnvironment) {
        if (typeof monacoEnvironment.getWorker === 'function') {
            return monacoEnvironment.getWorker('workerMain.js', label);
        }
        if (typeof monacoEnvironment.getWorkerUrl === 'function') {
            const workerUrl = monacoEnvironment.getWorkerUrl('workerMain.js', label);
            return new Worker(ttPolicy ? ttPolicy.createScriptURL(workerUrl) : workerUrl, {
                name: label,
                type: 'module'
            });
        }
    }
    const esmWorkerLocation = descriptor.esmModuleLocation;
    if (esmWorkerLocation) {
        const workerUrl = getWorkerBootstrapUrl(label, esmWorkerLocation.toString(true));
        const worker = new Worker(ttPolicy ? ttPolicy.createScriptURL(workerUrl) : workerUrl, {
            name: label,
            type: 'module'
        });
        return whenESMWorkerReady(worker);
    }
    throw new Error("You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker");
}
function getWorkerBootstrapUrl(label, workerScriptUrl) {
    if (/^((http:)|(https:)|(file:))/.test(workerScriptUrl) && workerScriptUrl.substring(0, globalThis.origin.length) !== globalThis.origin) {
    // this is the cross-origin case
    // i.e. the webpage is running at a different origin than where the scripts are loaded from
    } else {
        const start = workerScriptUrl.lastIndexOf('?');
        const end = workerScriptUrl.lastIndexOf('#', start);
        const params = start > 0 ? new URLSearchParams(workerScriptUrl.substring(start + 1, ~end ? end : undefined)) : new URLSearchParams();
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COI"].addSearchParam(params, true, true);
        const search = params.toString();
        if (!search) {
            workerScriptUrl = "".concat(workerScriptUrl, "#").concat(label);
        } else {
            workerScriptUrl = "".concat(workerScriptUrl, "?").concat(params.toString(), "#").concat(label);
        }
    }
    // In below blob code, we are using JSON.stringify to ensure the passed
    // in values are not breaking our script. The values may contain string
    // terminating characters (such as ' or ").
    const blob = new Blob([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coalesce"])([
            "/*".concat(label, "*/"),
            "globalThis._VSCODE_NLS_MESSAGES = ".concat(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNLSMessages"])()), ";"),
            "globalThis._VSCODE_NLS_LANGUAGE = ".concat(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNLSLanguage"])()), ";"),
            "globalThis._VSCODE_FILE_ROOT = ".concat(JSON.stringify(globalThis._VSCODE_FILE_ROOT), ";"),
            "const ttPolicy = globalThis.trustedTypes?.createPolicy('defaultWorkerFactory', { createScriptURL: value => value });",
            "globalThis.workerttPolicy = ttPolicy;",
            "await import(ttPolicy?.createScriptURL(".concat(JSON.stringify(workerScriptUrl), ") ?? ").concat(JSON.stringify(workerScriptUrl), ");"),
            "globalThis.postMessage({ type: 'vscode-worker-ready' });",
            "/*".concat(label, "*/")
        ]).join('')
    ], {
        type: 'application/javascript'
    });
    return URL.createObjectURL(blob);
}
function whenESMWorkerReady(worker) {
    return new Promise((resolve, reject)=>{
        worker.onmessage = function(e) {
            if (e.data.type === 'vscode-worker-ready') {
                worker.onmessage = null;
                resolve(worker);
            }
        };
        worker.onerror = reject;
    });
}
function isPromiseLike(obj) {
    return !!obj && typeof obj.then === 'function';
}
/**
 * A worker that uses HTML5 web workers so that is has
 * its own global scope and its own thread.
 */ class WebWorker extends __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    getId() {
        return this.id;
    }
    postMessage(message, transfer) {
        var _this_worker;
        (_this_worker = this.worker) === null || _this_worker === void 0 ? void 0 : _this_worker.then((w)=>{
            try {
                w.postMessage(message, transfer);
            } catch (err) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"])(new Error("FAILED to post message to worker", {
                    cause: err
                }));
            }
        });
    }
    constructor(descriptorOrWorker){
        super();
        this._onMessage = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onMessage = this._onMessage.event;
        this._onError = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onError = this._onError.event;
        this.id = ++WebWorker.LAST_WORKER_ID;
        const workerOrPromise = descriptorOrWorker instanceof Worker ? descriptorOrWorker : 'then' in descriptorOrWorker ? descriptorOrWorker : getWorker(descriptorOrWorker, this.id);
        if (isPromiseLike(workerOrPromise)) {
            this.worker = workerOrPromise;
        } else {
            this.worker = Promise.resolve(workerOrPromise);
        }
        this.postMessage('-please-ignore-', []); // TODO: Eliminate this extra message
        const errorHandler = (ev)=>{
            this._onError.fire(ev);
        };
        this.worker.then((w)=>{
            w.onmessage = (ev)=>{
                this._onMessage.fire(ev.data);
            };
            w.onmessageerror = (ev)=>{
                this._onError.fire(ev);
            };
            if (typeof w.addEventListener === 'function') {
                w.addEventListener('error', errorHandler);
            }
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            var _this_worker;
            (_this_worker = this.worker) === null || _this_worker === void 0 ? void 0 : _this_worker.then((w)=>{
                w.onmessage = null;
                w.onmessageerror = null;
                w.removeEventListener('error', errorHandler);
                w.terminate();
            });
            this.worker = null;
        }));
    }
}
WebWorker.LAST_WORKER_ID = 0;
class WebWorkerDescriptor {
    constructor(esmModuleLocation, label){
        this.esmModuleLocation = esmModuleLocation;
        this.label = label;
    }
}
function createWebWorker(arg0, arg1) {
    const workerDescriptorOrWorker = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(arg0) ? new WebWorkerDescriptor(arg0, arg1) : arg0;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$worker$2f$webWorker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebWorkerClient"](new WebWorker(workerDescriptorOrWorker));
} //# sourceMappingURL=webWorkerFactory.js.map
}),
]);

//# sourceMappingURL=dfa1d_monaco-editor_esm_vs_base_browser_65b9da7f._.js.map