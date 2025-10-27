(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "detectCodeViolation",
    ()=>detectCodeViolation,
    "formatDate",
    ()=>formatDate,
    "formatMemory",
    ()=>formatMemory,
    "formatRuntime",
    ()=>formatRuntime,
    "generateProblemSlug",
    ()=>generateProblemSlug,
    "getDifficultyColor",
    ()=>getDifficultyColor,
    "getDifficultyLabel",
    ()=>getDifficultyLabel,
    "sanitizeCodeForAI",
    ()=>sanitizeCodeForAI,
    "throttle",
    ()=>throttle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatRuntime(milliseconds) {
    if (milliseconds < 1000) {
        return "".concat(milliseconds, "ms");
    }
    return "".concat((milliseconds / 1000).toFixed(2), "s");
}
function formatMemory(bytes) {
    if (bytes < 1024) {
        return "".concat(bytes, "B");
    }
    if (bytes < 1024 * 1024) {
        return "".concat((bytes / 1024).toFixed(1), "KB");
    }
    return "".concat((bytes / (1024 * 1024)).toFixed(1), "MB");
}
function getDifficultyColor(difficulty) {
    switch(difficulty){
        case 'easy':
            return 'text-green-600 bg-green-50 border-green-200';
        case 'medium':
            return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        case 'hard':
            return 'text-red-600 bg-red-50 border-red-200';
        default:
            return 'text-gray-600 bg-gray-50 border-gray-200';
    }
}
function getDifficultyLabel(difficulty) {
    switch(difficulty){
        case 'easy':
            return 'Easy';
        case 'medium':
            return 'Medium';
        case 'hard':
            return 'Hard';
        default:
            return 'Unknown';
    }
}
function sanitizeCodeForAI(code) {
    // Remove comments, extra whitespace, and potentially sensitive patterns
    return code.replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}
function detectCodeViolation(content) {
    // Heuristics to detect full code solutions
    const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
    // Check for long contiguous code blocks
    for (const block of codeBlocks){
        const blockLines = block.split('\n').length;
        if (blockLines > 20) {
            return {
                hasViolation: true,
                reason: 'Long code block detected',
                maskedContent: content.replace(block, '```\n[Full solution withheld by policy]\n```')
            };
        }
    }
    // Check for multiple function/class definitions
    const functionCount = (content.match(/function\s+\w+|class\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length;
    if (functionCount > 3) {
        return {
            hasViolation: true,
            reason: 'Multiple function definitions detected',
            maskedContent: content.replace(/```[\s\S]*?```/g, '```\n[Full solution withheld by policy]\n```')
        };
    }
    // Check for complete solution patterns
    const hasMainFunction = /int\s+main\s*\(|def\s+main\s*\(|function\s+main\s*\(/.test(content);
    const hasReturnStatement = /return\s+/.test(content);
    const hasPrintOutput = /console\.log|print\s*\(|System\.out\.print/.test(content);
    if (hasMainFunction && hasReturnStatement && hasPrintOutput) {
        return {
            hasViolation: true,
            reason: 'Complete solution pattern detected',
            maskedContent: content.replace(/```[\s\S]*?```/g, '```\n[Full solution withheld by policy]\n```')
        };
    }
    return {
        hasViolation: false
    };
}
function generateProblemSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function debounce(func, wait) {
    let timeout;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/components/editor/editor-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorWrapper",
    ()=>EditorWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/store.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/oa/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/oa/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500",
                children: "Loading editor..."
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MonacoEditor;
const languageMap = {
    javascript: 'javascript',
    typescript: 'typescript',
    python: 'python',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
    csharp: 'csharp',
    go: 'go',
    rust: 'rust',
    php: 'php',
    ruby: 'ruby',
    swift: 'swift',
    kotlin: 'kotlin'
};
function EditorWrapper(param) {
    let { initialCode = '', language = 'javascript', onChange, onRun, onSave, className, readOnly = false, problemId } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCode);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastRunResult, setLastRunResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(language);
    const [editorHeight, setEditorHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('100%');
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [editorConfig, setEditorConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        language: languageMap[language] || 'javascript',
        theme: theme === 'dark' ? 'vs-dark' : 'vs-light',
        fontSize: 14,
        tabSize: 2,
        wordWrap: 'on',
        minimap: {
            enabled: false
        }
    });
    // Update theme when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorWrapper.useEffect": ()=>{
            setEditorConfig({
                "EditorWrapper.useEffect": (prev)=>({
                        ...prev,
                        theme: theme === 'dark' ? 'vs-dark' : 'vs-light'
                    })
            }["EditorWrapper.useEffect"]);
        }
    }["EditorWrapper.useEffect"], [
        theme
    ]);
    // Update language when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorWrapper.useEffect": ()=>{
            setCurrentLanguage(language);
            setEditorConfig({
                "EditorWrapper.useEffect": (prev)=>({
                        ...prev,
                        language: languageMap[language] || 'javascript'
                    })
            }["EditorWrapper.useEffect"]);
            // Update the editor language if it's mounted (client-side only)
            if ("object" !== 'undefined' && editorRef.current && editorRef.current.getModel()) {
                __turbopack_context__.A("[project]/oa/node_modules/monaco-editor/esm/vs/editor/editor.main.js [app-client] (ecmascript, async loader)").then({
                    "EditorWrapper.useEffect": (monaco)=>{
                        monaco.editor.setModelLanguage(editorRef.current.getModel(), languageMap[language] || 'javascript');
                    }
                }["EditorWrapper.useEffect"]);
            }
        }
    }["EditorWrapper.useEffect"], [
        language
    ]);
    // Auto-save functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorWrapper.useEffect": ()=>{
            if (!problemId || readOnly) return;
            const autoSave = {
                "EditorWrapper.useEffect.autoSave": ()=>{
                    if (onSave && code !== initialCode) {
                        onSave(code);
                    }
                }
            }["EditorWrapper.useEffect.autoSave"];
            const timeoutId = setTimeout(autoSave, 2000); // Auto-save after 2 seconds of inactivity
            return ({
                "EditorWrapper.useEffect": ()=>clearTimeout(timeoutId)
            })["EditorWrapper.useEffect"];
        }
    }["EditorWrapper.useEffect"], [
        code,
        problemId,
        onSave,
        initialCode,
        readOnly
    ]);
    // Load saved code from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorWrapper.useEffect": ()=>{
            if (!problemId || readOnly) return;
            const savedCode = localStorage.getItem("editor-".concat(problemId));
            if (savedCode && savedCode !== initialCode) {
                setCode(savedCode);
            }
        }
    }["EditorWrapper.useEffect"], [
        problemId,
        initialCode,
        readOnly
    ]);
    // Calculate initial height based on code content
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorWrapper.useEffect": ()=>{
            const lineCount = code.split('\n').length;
            const lineHeight = 21; // Approximate line height
            const padding = 16; // Top and bottom padding
            const calculatedHeight = Math.min(lineCount * lineHeight + padding, 800);
            setEditorHeight("".concat(calculatedHeight, "px"));
        }
    }["EditorWrapper.useEffect"], [
        code
    ]);
    const handleEditorChange = (value)=>{
        const newCode = value || '';
        setCode(newCode);
        onChange === null || onChange === void 0 ? void 0 : onChange(newCode);
        // Calculate optimal height based on content
        if (editorRef.current) {
            const lineCount = newCode.split('\n').length;
            const lineHeight = 21; // Approximate line height
            const padding = 16; // Top and bottom padding
            const calculatedHeight = Math.min(lineCount * lineHeight + padding, 800);
            setEditorHeight("".concat(calculatedHeight, "px"));
        }
    };
    const handleRun = async ()=>{
        if (!onRun || isRunning) return;
        setIsRunning(true);
        try {
            const result = await onRun(code, language);
            setLastRunResult(result);
        } catch (error) {
            console.error('Run failed:', error);
            setLastRunResult({
                success: false,
                output: '',
                error: error instanceof Error ? error.message : 'Unknown error',
                testResults: []
            });
        } finally{
            setIsRunning(false);
        }
    };
    const handleSave = ()=>{
        if (onSave) {
            onSave(code);
        }
    };
    const handleEditorDidMount = (editor)=>{
        editorRef.current = editor;
        // Prevent auto-scroll to bottom
        editor.setScrollTop(0);
        editor.setPosition({
            lineNumber: 1,
            column: 1
        });
        // Add keyboard shortcuts - use numeric constants to avoid import issues
        editor.addCommand(1 | 3, ()=>{
            handleRun();
        });
        editor.addCommand(1 | 49, (e)=>{
            e.preventDefault();
            handleSave();
        });
    // Ensure Enter key creates new lines and doesn't submit forms
    // Monaco Editor handles Enter key by default for new lines
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col h-full bg-white dark:bg-slate-800", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currentLanguage,
                                onChange: (e)=>{
                                    const newLanguage = e.target.value;
                                    setCurrentLanguage(newLanguage);
                                    setEditorConfig((prev)=>({
                                            ...prev,
                                            language: languageMap[newLanguage] || 'javascript'
                                        }));
                                    // Update the editor language if it's mounted (client-side only)
                                    if ("object" !== 'undefined' && editorRef.current && editorRef.current.getModel()) {
                                        __turbopack_context__.A("[project]/oa/node_modules/monaco-editor/esm/vs/editor/editor.main.js [app-client] (ecmascript, async loader)").then((monaco)=>{
                                            monaco.editor.setModelLanguage(editorRef.current.getModel(), languageMap[newLanguage] || 'javascript');
                                        });
                                    }
                                },
                                className: "px-2 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",
                                disabled: readOnly,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "javascript",
                                        children: "JavaScript"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "typescript",
                                        children: "TypeScript"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "python",
                                        children: "Python"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "java",
                                        children: "Java"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "cpp",
                                        children: "C++"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "c",
                                        children: "C"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "csharp",
                                        children: "C#"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "go",
                                        children: "Go"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "rust",
                                        children: "Rust"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "php",
                                        children: "PHP"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ruby",
                                        children: "Ruby"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "swift",
                                        children: "Swift"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "kotlin",
                                        children: "Kotlin"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRun,
                            disabled: isRunning,
                            className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",
                            children: isRunning ? 'Running...' : 'Run Tests'
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 max-h-[800px] overflow-y-auto",
                tabIndex: -1,
                onKeyDown: (e)=>{
                    // Prevent form submission on Enter key
                    if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
                        e.stopPropagation();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonacoEditor, {
                    height: editorHeight,
                    language: editorConfig.language,
                    theme: editorConfig.theme,
                    value: code,
                    onChange: handleEditorChange,
                    onMount: handleEditorDidMount,
                    options: {
                        fontSize: editorConfig.fontSize,
                        tabSize: editorConfig.tabSize,
                        wordWrap: editorConfig.wordWrap,
                        minimap: editorConfig.minimap,
                        readOnly,
                        lineNumbers: 'on',
                        roundedSelection: false,
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        padding: {
                            top: 8,
                            bottom: 8
                        },
                        // Fix Enter key behavior - ensure it creates new lines
                        acceptSuggestionOnEnter: 'on',
                        quickSuggestions: true,
                        suggestOnTriggerCharacters: true,
                        // Ensure proper keyboard handling
                        multiCursorModifier: 'ctrlCmd',
                        // Configure scrolling behavior
                        scrollbar: {
                            vertical: 'auto',
                            horizontal: 'auto',
                            verticalScrollbarSize: 8,
                            horizontalScrollbarSize: 8,
                            useShadows: false,
                            verticalHasArrows: false,
                            horizontalHasArrows: false
                        },
                        // Prevent focus issues
                        domReadOnly: false,
                        // Ensure proper keyboard handling
                        contextmenu: true,
                        mouseWheelZoom: false,
                        // Enable smooth scrolling
                        smoothScrolling: true,
                        // Configure line height for better scrolling
                        lineHeight: 1.5
                    }
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            lastRunResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-4 max-h-48 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", lastRunResult.success ? "bg-green-500" : "bg-red-500")
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-900 dark:text-slate-100",
                                children: lastRunResult.success ? 'Tests Passed' : 'Tests Failed'
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    lastRunResult.output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",
                                children: "Output:"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 328,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-xs bg-white dark:bg-slate-800 p-2 rounded border border-gray-200 dark:border-slate-600 overflow-x-auto text-slate-900 dark:text-slate-100",
                                children: lastRunResult.output
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 327,
                        columnNumber: 13
                    }, this),
                    lastRunResult.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-red-700 dark:text-red-400 mb-1",
                                children: "Error:"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-xs bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 overflow-x-auto",
                                children: lastRunResult.error
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 336,
                        columnNumber: 13
                    }, this),
                    lastRunResult.testResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",
                                children: "Test Results:"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: lastRunResult.testResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs p-2 rounded", result.passed ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"),
                                        children: [
                                            "Test ",
                                            index + 1,
                                            ": ",
                                            result.passed ? 'PASSED' : 'FAILED',
                                            result.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-red-600",
                                                children: result.errorMessage
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                                lineNumber: 360,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                        lineNumber: 349,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                        lineNumber: 345,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/editor/editor-wrapper.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(EditorWrapper, "DCdZUf16S1TBE/IaKN1dyxHWb10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c1 = EditorWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "MonacoEditor");
__turbopack_context__.k.register(_c1, "EditorWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/lib/judge0-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Judge0 API integration for real code execution
// Free tier: 1000 requests/day, 100 requests/minute
__turbopack_context__.s([
    "JUDGE0_LANGUAGES",
    ()=>JUDGE0_LANGUAGES,
    "Judge0API",
    ()=>Judge0API,
    "judge0API",
    ()=>judge0API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/oa/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
const JUDGE0_LANGUAGES = {
    javascript: 63,
    typescript: 74,
    python: 71,
    java: 62,
    cpp: 54,
    c: 50,
    csharp: 51,
    go: 60,
    rust: 73,
    php: 68,
    ruby: 72,
    swift: 83,
    kotlin: 78
};
class Judge0API {
    async submitCode(code, language, testCases) {
        try {
            const languageId = JUDGE0_LANGUAGES[language];
            if (!languageId) {
                throw new Error("Unsupported language: ".concat(language));
            }
            const results = [];
            let allPassed = true;
            // Execute each test case
            for (const testCase of testCases){
                try {
                    var _result_stdout;
                    const result = await this.executeTestCase(code, languageId, testCase.input);
                    const passed = ((_result_stdout = result.stdout) === null || _result_stdout === void 0 ? void 0 : _result_stdout.trim()) === testCase.expectedOutput.trim();
                    if (!passed) allPassed = false;
                    results.push({
                        passed,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: result.stdout || '',
                        error: result.stderr || result.compile_output || result.message,
                        runtime: parseFloat(result.time) * 1000,
                        memory: result.memory
                    });
                } catch (error) {
                    allPassed = false;
                    results.push({
                        passed: false,
                        input: testCase.input,
                        expectedOutput: testCase.expectedOutput,
                        actualOutput: '',
                        error: error instanceof Error ? error.message : 'Unknown error'
                    });
                }
            }
            return {
                success: allPassed,
                results
            };
        } catch (error) {
            return {
                success: false,
                results: [],
                error: error instanceof Error ? error.message : 'Code execution failed'
            };
        }
    }
    async executeTestCase(code, languageId, input) {
        // Submit code for execution
        const submission = {
            language_id: languageId,
            source_code: code,
            stdin: input
        };
        const submitResponse = await fetch("".concat(this.baseUrl, "/submissions"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': this.apiKey || '',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            body: JSON.stringify(submission)
        });
        if (!submitResponse.ok) {
            throw new Error("Submission failed: ".concat(submitResponse.statusText));
        }
        const { token } = await submitResponse.json();
        // Poll for result
        return await this.pollResult(token);
    }
    async pollResult(token) {
        let maxAttempts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30;
        for(let attempt = 0; attempt < maxAttempts; attempt++){
            await new Promise((resolve)=>setTimeout(resolve, 1000)); // Wait 1 second
            const response = await fetch("".concat(this.baseUrl, "/submissions/").concat(token), {
                headers: {
                    'X-RapidAPI-Key': this.apiKey || '',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                }
            });
            if (!response.ok) {
                throw new Error("Failed to get result: ".concat(response.statusText));
            }
            const result = await response.json();
            // Check if execution is complete
            if (result.status.id <= 2) {
                continue;
            }
            return result;
        }
        throw new Error('Code execution timeout');
    }
    // Get supported languages
    async getLanguages() {
        try {
            const response = await fetch("".concat(this.baseUrl, "/languages"), {
                headers: {
                    'X-RapidAPI-Key': this.apiKey || '',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                }
            });
            if (!response.ok) {
                throw new Error("Failed to get languages: ".concat(response.statusText));
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch languages:', error);
            return [];
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseUrl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        // Using Judge0 RapidAPI (more reliable than free tier)
        this.baseUrl = 'https://judge0-ce.p.rapidapi.com';
        this.apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RAPIDAPI_KEY || null;
    }
}
const judge0API = new Judge0API();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "aiAPI",
    ()=>aiAPI,
    "authAPI",
    ()=>authAPI,
    "problemsAPI",
    ()=>problemsAPI,
    "runnerAPI",
    ()=>runnerAPI,
    "submissionsAPI",
    ()=>submissionsAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/oa/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$judge0$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/judge0-api.ts [app-client] (ecmascript)");
;
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || '/api';
class APIError extends Error {
    constructor(message, status, code){
        super(message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "status", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0), this.status = status, this.code = code;
        this.name = 'APIError';
    }
}
async function handleResponse(response) {
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new APIError(errorData.message || "HTTP ".concat(response.status), response.status, errorData.code);
    }
    return response.json();
}
const problemsAPI = {
    async getProblems () {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _filters_tags;
        const params = new URLSearchParams();
        if (filters.difficulty) params.append('difficulty', filters.difficulty);
        if ((_filters_tags = filters.tags) === null || _filters_tags === void 0 ? void 0 : _filters_tags.length) params.append('tags', filters.tags.join(','));
        if (filters.search) params.append('search', filters.search);
        if (filters.type) params.append('type', filters.type);
        if (filters.category) params.append('category', filters.category);
        if (filters.aiAllowed !== undefined) params.append('aiAllowed', filters.aiAllowed.toString());
        if (filters.duration) params.append('duration', filters.duration);
        if (filters.page) params.append('page', filters.page.toString());
        if (filters.limit) params.append('limit', filters.limit.toString());
        const response = await fetch("".concat(API_BASE_URL, "/problems?").concat(params));
        return handleResponse(response);
    },
    async getProblem (slug) {
        const response = await fetch("".concat(API_BASE_URL, "/problems/").concat(slug));
        return handleResponse(response);
    },
    async getProblemTags () {
        const response = await fetch("".concat(API_BASE_URL, "/problems/tags"));
        return handleResponse(response);
    }
};
const submissionsAPI = {
    async getSubmissions (problemId) {
        const params = problemId ? "?problemId=".concat(problemId) : '';
        const response = await fetch("".concat(API_BASE_URL, "/submissions").concat(params));
        return handleResponse(response);
    },
    async createSubmission (data) {
        const response = await fetch("".concat(API_BASE_URL, "/submissions"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    },
    async getSubmission (id) {
        const response = await fetch("".concat(API_BASE_URL, "/submissions/").concat(id));
        return handleResponse(response);
    }
};
const runnerAPI = {
    async runTests (data) {
        // Check if we should use real code execution
        const useRealExecution = __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_REAL_EXECUTION === 'true';
        if (useRealExecution) {
            try {
                var _result_results_find;
                // Get problem details to extract test cases
                const problemResponse = await problemsAPI.getProblem(data.problemId);
                if (!problemResponse.success || !problemResponse.data) {
                    throw new APIError('Failed to load problem details', 404);
                }
                const problem = problemResponse.data;
                const testCases = problem.canonicalTestCases.map((tc)=>({
                        input: tc.input,
                        expectedOutput: tc.expectedOutput
                    }));
                // Execute code using Judge0
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$judge0$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["judge0API"].submitCode(data.code, data.language, testCases);
                if (!result.success) {
                    throw new APIError(result.error || 'Code execution failed', 500);
                }
                // Convert Judge0 results to our format
                const runResult = {
                    success: result.results.every((r)=>r.passed),
                    output: result.results.map((r)=>"Input: ".concat(r.input, "\nExpected: ").concat(r.expectedOutput, "\nActual: ").concat(r.actualOutput).concat(r.error ? "\nError: ".concat(r.error) : '')).join('\n\n'),
                    error: result.results.some((r)=>r.error) ? (_result_results_find = result.results.find((r)=>r.error)) === null || _result_results_find === void 0 ? void 0 : _result_results_find.error : undefined,
                    testResults: result.results.map((r, index)=>({
                            testCaseId: "test-".concat(index + 1),
                            testCase: index + 1,
                            passed: r.passed,
                            input: r.input,
                            expectedOutput: r.expectedOutput,
                            actualOutput: r.actualOutput,
                            error: r.error
                        })),
                    runtime: result.results.reduce((sum, r)=>sum + (r.runtime || 0), 0),
                    memory: Math.max(...result.results.map((r)=>r.memory || 0))
                };
                return {
                    success: true,
                    data: runResult
                };
            } catch (error) {
                console.error('Real code execution failed, falling back to mock:', error);
                // Fall back to mock execution
                return this.mockRunTests(data);
            }
        } else {
            // Use mock execution for development
            return this.mockRunTests(data);
        }
    },
    // Mock execution for development
    async mockRunTests (data) {
        const response = await fetch("".concat(API_BASE_URL, "/run"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    }
};
const aiAPI = {
    async askQuestion (request) {
        const response = await fetch("".concat(API_BASE_URL, "/ai/ask"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        return handleResponse(response);
    },
    async escalateRequest (problemId, credits) {
        const response = await fetch("".concat(API_BASE_URL, "/ai/escalate"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                problemId,
                credits
            })
        });
        return handleResponse(response);
    }
};
const authAPI = {
    async getCurrentUser () {
        const response = await fetch("".concat(API_BASE_URL, "/auth/me"));
        return handleResponse(response);
    },
    async login (credentials) {
        const response = await fetch("".concat(API_BASE_URL, "/auth/login"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        return handleResponse(response);
    },
    async logout () {
        const response = await fetch("".concat(API_BASE_URL, "/auth/logout"), {
            method: 'POST'
        });
        return handleResponse(response);
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIHelperPanel",
    ()=>AIHelperPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const assistanceLevels = [
    {
        value: 'hint',
        label: 'Hint',
        description: 'Conceptual hints, algorithm outline, key edge cases'
    },
    {
        value: 'guided',
        label: 'Guided',
        description: 'Detailed walkthrough, structured pseudocode, short snippets'
    },
    {
        value: 'walkthrough',
        label: 'Walkthrough',
        description: 'Detailed plan, decomposition, targeted snippets'
    }
];
function AIHelperPanel(param) {
    let { problemId, onClose } = param;
    var _assistanceLevels_find;
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversation, setConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { aiHelper, setAILoading, addAIInteraction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const { currentLevel } = aiHelper;
    const scrollToBottom = ()=>{
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIHelperPanel.useEffect": ()=>{
            scrollToBottom();
        }
    }["AIHelperPanel.useEffect"], [
        conversation
    ]);
    const handleAskQuestion = async ()=>{
        if (!question.trim() || isLoading) return;
        const userQuestion = question.trim();
        setQuestion('');
        setIsLoading(true);
        setAILoading(true);
        try {
            const request = {
                problemId,
                question: userQuestion,
                assistanceLevel: currentLevel
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiAPI"].askQuestion(request);
            if (response.success) {
                const interaction = {
                    id: Date.now().toString(),
                    problemId,
                    userId: 'current-user',
                    assistanceLevel: currentLevel,
                    question: userQuestion,
                    aiResponse: response.data.response,
                    confidenceEstimate: response.data.confidenceEstimate,
                    complianceBadge: response.data.complianceBadge,
                    timestamp: new Date().toISOString()
                };
                setConversation((prev)=>[
                        ...prev,
                        interaction
                    ]);
                addAIInteraction(interaction);
            }
        } catch (error) {
            console.error('AI request failed:', error);
        // Handle error - maybe show a toast
        } finally{
            setIsLoading(false);
            setAILoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAskQuestion();
        }
    };
    const getComplianceIcon = (badge)=>{
        switch(badge){
            case 'compliant':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-4 h-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                    lineNumber: 104,
                    columnNumber: 16
                }, this);
            case 'partial':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-4 h-4 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                    lineNumber: 106,
                    columnNumber: 16
                }, this);
            case 'violation':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-4 h-4 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                    lineNumber: 108,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    const getComplianceText = (badge)=>{
        switch(badge){
            case 'compliant':
                return 'Compliant — no full code';
            case 'partial':
                return 'Partial — no full code';
            case 'violation':
                return 'Content filtered';
            default:
                return '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-[25%] bg-white dark:bg-slate-800 border-l border-gray-200 dark:border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-900 dark:text-slate-100",
                                children: "AI Helper"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600 dark:text-slate-400",
                                children: (_assistanceLevels_find = assistanceLevels.find((level)=>level.value === currentLevel)) === null || _assistanceLevels_find === void 0 ? void 0 : _assistanceLevels_find.description
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-200 dark:border-slate-700 bg-yellow-50 dark:bg-yellow-900/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                        children: "Assistance Level"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: assistanceLevels.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().setAIAssistanceLevel(level.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-full border transition-colors", currentLevel === level.value ? "bg-blue-500 text-white border-blue-500" : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600"),
                                children: level.label
                            }, level.value, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-red-600 dark:text-red-400 font-medium",
                        children: "⚠️ AI WILL NOT PROVIDE FULL CODE"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2 space-y-4",
                children: [
                    conversation.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-slate-500 dark:text-slate-400 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: "Ask a focused question about the problem."
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-1",
                                children: "Reminder: full solutions are withheld."
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this) : conversation.map((interaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-blue-900 dark:text-blue-300 mb-1",
                                            children: "You asked:"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-blue-800 dark:text-blue-200",
                                            children: interaction.question
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-slate-700 p-3 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-slate-900 dark:text-slate-100",
                                                    children: "AI Response:"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                getComplianceIcon(interaction.complianceBadge),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-600 dark:text-slate-400",
                                                    children: getComplianceText(interaction.complianceBadge)
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap",
                                            children: interaction.aiResponse
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-2 text-xs text-slate-500 dark:text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Confidence: ",
                                                        interaction.confidenceEstimate,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: new Date(interaction.timestamp).toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, interaction.id, true, {
                            fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "AI is thinking..."
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: question,
                                onChange: (e)=>setQuestion(e.target.value),
                                onKeyPress: handleKeyPress,
                                placeholder: "Ask a focused question about the problem...",
                                className: "flex-1 p-2 text-sm border border-gray-300 dark:border-slate-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400",
                                rows: 2,
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAskQuestion,
                                disabled: !question.trim() || isLoading,
                                className: "px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-slate-500 dark:text-slate-400",
                        children: "Press Enter to send, Shift+Enter for new line"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(AIHelperPanel, "YlZ0Ec3F0s4cTPb5yLDtdojn+Eo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = AIHelperPanel;
var _c;
__turbopack_context__.k.register(_c, "AIHelperPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/components/problem/test-cases.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestCases",
    ()=>TestCases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TestCases(param) {
    let { testCases, className } = param;
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    if (!testCases || testCases.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-[#E5E7EB]",
                        children: "Test Cases"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors",
                        children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                            lineNumber: 27,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    testCases.slice(0, 3).map((testCase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-[#E5E7EB] mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-6 h-6 rounded-full bg-[#00FFFF]/20 text-[#00FFFF] flex items-center justify-center text-xs",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        testCase.visibility === 'private' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[#9CA3AF]",
                                            children: "(Hidden)"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-[#9CA3AF] mb-1",
                                                    children: "Input:"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "bg-[#1C1F2E] p-3 rounded text-xs overflow-x-auto text-[#E5E7EB] border border-[#1C1F2E] font-mono",
                                                    children: testCase.input
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-[#9CA3AF] mb-1",
                                                    children: "Expected Output:"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "bg-[#1C1F2E] p-3 rounded text-xs overflow-x-auto text-[#00FFFF] border border-[#1C1F2E] font-mono",
                                                    children: testCase.expectedOutput
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, testCase.id || index, true, {
                            fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)),
                    testCases.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[#9CA3AF] text-center py-2",
                        children: [
                            "+",
                            testCases.length - 3,
                            " more test cases"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/problem/test-cases.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(TestCases, "MzqrZ0LJxgqPa6EOF1Vxw0pgYA4=");
_c = TestCases;
var _c;
__turbopack_context__.k.register(_c, "TestCases");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/components/problem/run-results.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunResults",
    ()=>RunResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function RunResults(param) {
    let { result, isRunning, className } = param;
    if (isRunning) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#1C1F2E] border border-[#1C1F2E] rounded-lg p-6 ".concat(className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-5 w-5 border-2 border-[#00FFFF] border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#E5E7EB] font-medium",
                        children: "Running tests..."
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    if (!result) return null;
    const passedTests = result.testResults.filter((t)=>t.passed);
    const failedTests = result.testResults.filter((t)=>!t.passed);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1C1F2E] border ".concat(result.success ? 'border-green-500/30' : 'border-red-500/30', " rounded-lg overflow-hidden ").concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 ".concat(result.success ? 'bg-green-500/10' : 'bg-red-500/10'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        result.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-6 h-6 text-green-500"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "w-6 h-6 text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-[#E5E7EB]",
                                    children: result.success ? 'All Tests Passed!' : 'Tests Failed'
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#9CA3AF]",
                                    children: [
                                        passedTests.length,
                                        " passed, ",
                                        failedTests.length,
                                        " failed out of ",
                                        result.testResults.length,
                                        " tests"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-[#1C1F2E] flex items-center gap-6 text-sm text-[#9CA3AF]",
                children: [
                    result.runtime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-4 h-4 text-[#00FFFF]"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#00FFFF] font-semibold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRuntime"])(result.runtime)
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    result.memory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 text-[#6C63FF]"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#6C63FF] font-semibold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMemory"])(result.memory)
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            result.testResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2 max-h-64 overflow-y-auto",
                children: result.testResults.map((test, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg border ".concat(test.passed ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[#E5E7EB]",
                                        children: [
                                            "Test ",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            test.passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-4 h-4 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-4 h-4 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold ".concat(test.passed ? 'text-green-500' : 'text-red-500'),
                                                children: test.passed ? 'PASSED' : 'FAILED'
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            test.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-xs text-red-400 font-mono bg-[#0A0A0A] p-2 rounded",
                                children: test.errorMessage
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-[#1C1F2E] bg-red-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-red-500 mb-1",
                        children: "Error:"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "text-xs text-red-400 font-mono bg-[#0A0A0A] p-3 rounded overflow-x-auto",
                        children: result.error
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/problem/run-results.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = RunResults;
var _c;
__turbopack_context__.k.register(_c, "RunResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant = "default", size = "default", loading, children, disabled, ...props } = param;
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
    };
    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variants[variant], sizes[size], className),
        ref: ref,
        disabled: disabled || loading,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "mr-2 h-4 w-4 animate-spin",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ui/button.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ui/button.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ui/button.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/ui/button.tsx",
        lineNumber: 32,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/lib/query-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Query keys factory
__turbopack_context__.s([
    "queryKeys",
    ()=>queryKeys
]);
const queryKeys = {
    problems: {
        all: [
            'problems'
        ],
        lists: ()=>[
                ...queryKeys.problems.all,
                'list'
            ],
        list: (filters)=>[
                ...queryKeys.problems.lists(),
                filters
            ],
        details: ()=>[
                ...queryKeys.problems.all,
                'detail'
            ],
        detail: (slug)=>[
                ...queryKeys.problems.details(),
                slug
            ],
        tags: ()=>[
                ...queryKeys.problems.all,
                'tags'
            ]
    },
    submissions: {
        all: [
            'submissions'
        ],
        lists: ()=>[
                ...queryKeys.submissions.all,
                'list'
            ],
        list: (problemId)=>[
                ...queryKeys.submissions.lists(),
                {
                    problemId
                }
            ],
        details: ()=>[
                ...queryKeys.submissions.all,
                'detail'
            ],
        detail: (id)=>[
                ...queryKeys.submissions.details(),
                id
            ]
    },
    user: {
        all: [
            'user'
        ],
        profile: ()=>[
                ...queryKeys.user.all,
                'profile'
            ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/hooks/use-problem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProblem",
    ()=>useProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/query-client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useProblem(slug) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].problems.detail(slug),
        queryFn: {
            "useProblem.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["problemsAPI"].getProblem(slug)
        }["useProblem.useQuery"],
        enabled: !!slug,
        staleTime: 5 * 60 * 1000
    });
}
_s(useProblem, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/hooks/use-editor-state.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEditorState",
    ()=>useEditorState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useEditorState(problemId) {
    _s();
    const { setEditorState, getEditorState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('javascript');
    const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load saved state on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorState.useEffect": ()=>{
            const savedState = getEditorState(problemId);
            if (savedState) {
                setCode(savedState.code || '');
                setLanguage(savedState.language || 'javascript');
                setIsDirty(savedState.isDirty || false);
            }
        }
    }["useEditorState.useEffect"], [
        problemId,
        getEditorState
    ]);
    // Auto-save every 10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorState.useEffect": ()=>{
            if (!isDirty || !code) return;
            const autoSaveTimer = setInterval({
                "useEditorState.useEffect.autoSaveTimer": ()=>{
                    setEditorState(problemId, {
                        code,
                        language,
                        isDirty: false,
                        lastSaved: new Date().toISOString()
                    });
                    setIsDirty(false);
                }
            }["useEditorState.useEffect.autoSaveTimer"], 10000); // 10 seconds
            return ({
                "useEditorState.useEffect": ()=>clearInterval(autoSaveTimer)
            })["useEditorState.useEffect"];
        }
    }["useEditorState.useEffect"], [
        problemId,
        code,
        language,
        isDirty,
        setEditorState
    ]);
    const handleCodeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEditorState.useCallback[handleCodeChange]": (newCode)=>{
            setCode(newCode);
            setIsDirty(true);
            setEditorState(problemId, {
                code: newCode,
                language,
                isDirty: true
            });
        }
    }["useEditorState.useCallback[handleCodeChange]"], [
        problemId,
        language,
        setEditorState
    ]);
    const handleLanguageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEditorState.useCallback[handleLanguageChange]": (newLanguage)=>{
            setLanguage(newLanguage);
            setIsDirty(true);
            setEditorState(problemId, {
                code,
                language: newLanguage,
                isDirty: true
            });
        }
    }["useEditorState.useCallback[handleLanguageChange]"], [
        problemId,
        code,
        setEditorState
    ]);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEditorState.useCallback[handleSave]": ()=>{
            setEditorState(problemId, {
                code,
                language,
                isDirty: false,
                lastSaved: new Date().toISOString()
            });
            setIsDirty(false);
        }
    }["useEditorState.useCallback[handleSave]"], [
        problemId,
        code,
        language,
        setEditorState
    ]);
    const getCodeHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEditorState.useCallback[getCodeHistory]": ()=>{
            const history = localStorage.getItem("code-history-".concat(problemId));
            return history ? JSON.parse(history) : [];
        }
    }["useEditorState.useCallback[getCodeHistory]"], [
        problemId
    ]);
    const saveToHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEditorState.useCallback[saveToHistory]": (codeSnippet)=>{
            const history = getCodeHistory();
            const newEntry = {
                code: codeSnippet,
                timestamp: new Date().toISOString()
            };
            const updatedHistory = [
                newEntry,
                ...history
            ].slice(0, 10); // Keep last 10 entries
            localStorage.setItem("code-history-".concat(problemId), JSON.stringify(updatedHistory));
        }
    }["useEditorState.useCallback[saveToHistory]"], [
        problemId,
        getCodeHistory
    ]);
    return {
        code,
        language,
        isDirty,
        setCode: handleCodeChange,
        setLanguage: handleLanguageChange,
        save: handleSave,
        getCodeHistory,
        saveToHistory
    };
}
_s(useEditorState, "Bf3FS8r/b8nNxy1VUEBHpAasumE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/hooks/use-runner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRunner",
    ()=>useRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useRunner() {
    _s();
    const [runResult, setRunResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const runTests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRunner.useCallback[runTests]": async (problemId, code, language)=>{
            if (!code.trim()) {
                setError('Code cannot be empty');
                return null;
            }
            setIsRunning(true);
            setError(null);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runnerAPI"].runTests({
                    problemId,
                    code,
                    language
                });
                if (response.success) {
                    setRunResult(response.data);
                    return response.data;
                } else {
                    setError(response.message || 'Run failed');
                    return null;
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                setError(errorMessage);
                setRunResult({
                    success: false,
                    output: '',
                    error: errorMessage,
                    testResults: []
                });
                return null;
            } finally{
                setIsRunning(false);
            }
        }
    }["useRunner.useCallback[runTests]"], []);
    const clearResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRunner.useCallback[clearResults]": ()=>{
            setRunResult(null);
            setError(null);
        }
    }["useRunner.useCallback[clearResults]"], []);
    return {
        runResult,
        isRunning,
        error,
        runTests,
        clearResults
    };
}
_s(useRunner, "srJTTdxDqDjbwUp5hjh6yyEN330=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oa/web-app/src/app/problems/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$editor$2f$editor$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/editor/editor-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ai$2f$ai$2d$helper$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/ai/ai-helper-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$problem$2f$test$2d$cases$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/problem/test-cases.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$problem$2f$run$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/problem/run-results.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$problem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/hooks/use-problem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$editor$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/hooks/use-editor-state.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$runner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/hooks/use-runner.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function ProblemPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const slug = params.slug;
    const [showAIPanel, setShowAIPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTestCases, setShowTestCases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: problemData, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$problem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblem"])(slug);
    const problem = problemData === null || problemData === void 0 ? void 0 : problemData.data;
    // Get problem ID with fallback
    const problemId = (problem === null || problem === void 0 ? void 0 : problem.id) || slug;
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$editor$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorState"])(problemId);
    const { runResult, isRunning, runTests, clearResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$runner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRunner"])();
    const handleRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemPage.useCallback[handleRun]": async ()=>{
            if (!problem || !editor.code.trim()) return;
            clearResults();
            await runTests(problemId, editor.code, editor.language);
        }
    }["ProblemPage.useCallback[handleRun]"], [
        problem,
        editor.code,
        editor.language,
        problemId,
        runTests,
        clearResults
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemPage.useCallback[handleSubmit]": async ()=>{
            if (!problem || !editor.code.trim()) return;
            // First run tests
            await handleRun();
            if (!(runResult === null || runResult === void 0 ? void 0 : runResult.success)) {
                console.warn('Please fix all test cases before submitting.');
                return;
            }
            // TODO: Implement actual submission
            console.log('Submitting solution:', {
                problemId,
                code: editor.code,
                language: editor.language
            });
            alert('Submission successful! (This is a demo)');
        }
    }["ProblemPage.useCallback[handleSubmit]"], [
        problem,
        editor.code,
        editor.language,
        problemId,
        handleRun,
        runResult
    ]);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemPage.useEffect": ()=>{
            const handleKeyDown = {
                "ProblemPage.useEffect.handleKeyDown": (e)=>{
                    // Ctrl/Cmd + Enter to run tests
                    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                        e.preventDefault();
                        if (problem && editor.code.trim()) {
                            runTests(problemId, editor.code, editor.language);
                        }
                    }
                    // Ctrl/Cmd + S to save
                    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                        e.preventDefault();
                        editor.save();
                    }
                    // Ctrl/Cmd + Shift + Enter to submit
                    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmit();
                    }
                }
            }["ProblemPage.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ProblemPage.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ProblemPage.useEffect"];
        }
    }["ProblemPage.useEffect"], [
        problem,
        editor,
        problemId,
        runTests,
        handleSubmit
    ]);
    // Load saved editor state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemPage.useEffect": ()=>{
            if (problem && problem.canonicalTestCases) {
                const savedState = localStorage.getItem("editor-".concat(problemId));
                if (savedState) {
                    try {
                        const parsed = JSON.parse(savedState);
                        editor.setCode(parsed.code || '');
                        editor.setLanguage(parsed.language || 'javascript');
                    } catch (e) {
                        console.error('Failed to load saved state:', e);
                    }
                }
            }
        }
    }["ProblemPage.useEffect"], [
        problem,
        problemId,
        editor
    ]);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemPage.useCallback[handleSave]": ()=>{
            if (!problem) return;
            editor.save();
        }
    }["ProblemPage.useCallback[handleSave]"], [
        problem,
        editor
    ]);
    // Loading skeleton
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#0A0A0A] flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[30%] bg-[#1C1F2E] border-r border-[#1C1F2E] p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 bg-[#0A0A0A] rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-[#0A0A0A] rounded w-3/4 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-[#0A0A0A] rounded animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-[#0A0A0A] rounded w-5/6 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-[#0A0A0A] rounded w-4/6 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-12 bg-[#1C1F2E] rounded animate-pulse mb-4"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-[#1C1F2E] rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[25%] bg-[#1C1F2E] border-l border-[#1C1F2E] p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 bg-[#0A0A0A] rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-[#0A0A0A] rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    // Error state
    if (error || !problem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#0A0A0A]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md p-8 bg-[#1C1F2E] rounded-2xl border border-[#1C1F2E]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#E5E7EB] mb-2",
                        children: "Problem Not Found"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#9CA3AF] mb-6",
                        children: "The problem you're looking for doesn't exist."
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push('/problems'),
                        className: "bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            "Browse Problems"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this);
    }
    // Safely check if test cases exist
    const testCases = problem.canonicalTestCases || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0A0A0A] flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[30%] lg:w-[28%] xl:w-[30%] bg-[#1C1F2E] border-r border-[#1C1F2E] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: "flex items-center gap-2 text-[#9CA3AF] hover:text-[#00FFFF] transition-colors mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-[#E5E7EB] mb-3",
                                    children: problem.title
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 rounded-full text-xs font-semibold ".concat((problem.difficulty === 'easy' && 'bg-green-500/20 text-green-400 border border-green-500/30', problem.difficulty === 'medium' && 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30', problem.difficulty === 'hard' && 'bg-red-500/20 text-red-400 border border-red-500/30')),
                                            children: problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-[#9CA3AF]",
                                            children: [
                                                problem.points,
                                                " pts"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        problem.timeLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-sm text-[#9CA3AF]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                problem.timeLimit,
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                problem.tags && problem.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    children: problem.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-[#0A0A0A] text-[#9CA3AF] text-xs rounded border border-[#1C1F2E] hover:border-[#00FFFF]/30 transition-colors",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm max-w-none prose-slate dark:prose-invert mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#E5E7EB] [&>p]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 [&>pre]:bg-[#0A0A0A] [&>pre]:border [&>pre]:border-[#1C1F2E] [&>pre]:p-3 [&>pre]:rounded [&>pre]:overflow-x-auto [&>code]:text-[#00FFFF]",
                                        dangerouslySetInnerHTML: {
                                            __html: problem.description
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        testCases.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowTestCases(!showTestCases),
                                    className: "flex items-center justify-between w-full text-left p-3 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg hover:border-[#00FFFF]/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-[#E5E7EB]",
                                            children: "Test Cases"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        showTestCases ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "w-4 h-4 text-[#9CA3AF]"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-4 h-4 text-[#9CA3AF]"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 85
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                showTestCases && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$problem$2f$test$2d$cases$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestCases"], {
                                    testCases: testCases
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col bg-[#0A0A0A]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleRun,
                                            disabled: isRunning || !editor.code.trim(),
                                            className: "bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this),
                                                isRunning ? 'Running...' : 'Run Tests'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSave,
                                            className: "border border-[#1C1F2E] hover:bg-[#1C1F2E] text-[#E5E7EB] font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                "Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSubmit,
                                            disabled: isRunning || !editor.code.trim(),
                                            className: "bg-[#6C63FF] hover:bg-[#6C63FF]/90 text-white font-semibold",
                                            children: "Submit Solution"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 text-xs text-[#9CA3AF]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Ctrl+Enter to run"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Ctrl+S to save"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$editor$2f$editor$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorWrapper"], {
                                initialCode: editor.code,
                                language: editor.language,
                                onChange: editor.setCode,
                                onRun: async (code, lang)=>{
                                    if (problem) {
                                        const result = await runTests(problemId, code, lang);
                                        return result || {
                                            success: false,
                                            output: '',
                                            error: 'Run failed',
                                            testResults: []
                                        };
                                    }
                                    return {
                                        success: false,
                                        output: '',
                                        error: 'Problem not loaded',
                                        testResults: []
                                    };
                                },
                                onSave: editor.save,
                                problemId: problemId,
                                className: "h-full"
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        runResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$problem$2f$run$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunResults"], {
                            result: runResult,
                            isRunning: isRunning,
                            className: "mt-4"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[25%] lg:w-[22%] xl:w-[25%] border-l border-[#1C1F2E]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ai$2f$ai$2d$helper$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIHelperPanel"], {
                    problemId: problemId,
                    isOpen: showAIPanel,
                    onClose: ()=>setShowAIPanel(false)
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/app/problems/[slug]/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(ProblemPage, "zQtWqoIwOxg3qG4/7YY00zun04Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$problem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$editor$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$hooks$2f$use$2d$runner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRunner"]
    ];
});
_c = ProblemPage;
var _c;
__turbopack_context__.k.register(_c, "ProblemPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=oa_web-app_src_e2d01a8a._.js.map