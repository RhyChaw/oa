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
"[project]/oa/web-app/src/components/ui/problem-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemCard",
    ()=>ProblemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function ProblemCard(param) {
    let { problem, className } = param;
    const difficultyColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficultyColor"])(problem.difficulty);
    const difficultyLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficultyLabel"])(problem.difficulty);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/problems/".concat(problem.slug),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-900 line-clamp-2",
                        children: problem.title
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-slate-600",
                                children: [
                                    problem.points,
                                    " pts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 text-xs font-medium rounded-full border", difficultyColor),
                                children: difficultyLabel
                            }, void 0, false, {
                                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-700 text-sm mb-4 line-clamp-3",
                children: [
                    problem.description.replace(/<[^>]*>/g, '').substring(0, 150),
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: [
                            problem.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-xs bg-gray-100 text-slate-700 rounded-md",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)),
                            problem.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 text-xs text-slate-600",
                                children: [
                                    "+",
                                    problem.tags.length - 3,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    problem.timeLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-600",
                        children: [
                            problem.timeLimit,
                            "s limit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oa/web-app/src/components/ui/problem-card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ProblemCard;
var _c;
__turbopack_context__.k.register(_c, "ProblemCard");
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
"[project]/oa/web-app/src/app/problems/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/oa/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$problem$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/ui/problem-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/web-app/src/lib/query-client.ts [app-client] (ecmascript)");
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
const difficulties = [
    'all',
    'easy',
    'medium',
    'hard'
];
function ProblemsPage() {
    var _availableTags_data, _problemsData_data;
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        limit: 12
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDifficulty, setSelectedDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: problemsData, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].problems.list(filters),
        queryFn: {
            "ProblemsPage.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["problemsAPI"].getProblems(filters)
        }["ProblemsPage.useQuery"]
    });
    const { data: availableTags } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].problems.tags(),
        queryFn: {
            "ProblemsPage.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["problemsAPI"].getProblemTags()
        }["ProblemsPage.useQuery"]
    });
    const handleSearch = (query)=>{
        setSearchQuery(query);
        setFilters((prev)=>({
                ...prev,
                search: query || undefined,
                page: 1
            }));
    };
    const handleDifficultyChange = (difficulty)=>{
        setSelectedDifficulty(difficulty);
        setFilters((prev)=>({
                ...prev,
                difficulty: difficulty === 'all' ? undefined : difficulty,
                page: 1
            }));
    };
    const handleTagToggle = (tag)=>{
        const newTags = selectedTags.includes(tag) ? selectedTags.filter((t)=>t !== tag) : [
            ...selectedTags,
            tag
        ];
        setSelectedTags(newTags);
        setFilters((prev)=>({
                ...prev,
                tags: newTags.length > 0 ? newTags : undefined,
                page: 1
            }));
    };
    const handlePageChange = (page)=>{
        setFilters((prev)=>({
                ...prev,
                page
            }));
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Error Loading Problems"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "There was an error loading the problems. Please try again."
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>window.location.reload(),
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2",
                            children: "Coding Problems"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-700 dark:text-slate-300",
                            children: "Practice coding with our curated collection of algorithmic problems"
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                        children: "Search Problems"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search by title or description...",
                                                value: searchQuery,
                                                onChange: (e)=>handleSearch(e.target.value),
                                                className: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 bg-white dark:bg-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                        children: "Difficulty"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDifficulty,
                                        onChange: (e)=>handleDifficultyChange(e.target.value),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900",
                                        children: difficulties.map((diff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: diff,
                                                children: diff === 'all' ? 'All Difficulties' : diff.charAt(0).toUpperCase() + diff.slice(1)
                                            }, diff, false, {
                                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                        children: "Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: availableTags === null || availableTags === void 0 ? void 0 : (_availableTags_data = availableTags.data) === null || _availableTags_data === void 0 ? void 0 : _availableTags_data.slice(0, 8).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleTagToggle(tag),
                                                className: "px-3 py-1 text-xs rounded-full border transition-colors ".concat(selectedTags.includes(tag) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'),
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 rounded w-3/4 mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-full mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-2/3 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 bg-gray-200 rounded w-16"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 bg-gray-200 rounded w-20"
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                            children: problemsData === null || problemsData === void 0 ? void 0 : (_problemsData_data = problemsData.data) === null || _problemsData_data === void 0 ? void 0 : _problemsData_data.map((problem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$problem$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemCard"], {
                                    problem: problem
                                }, problem.id, false, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        (problemsData === null || problemsData === void 0 ? void 0 : problemsData.pagination) && problemsData.pagination.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-white px-4 py-3 border border-gray-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [
                                        "Showing",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: (problemsData.pagination.page - 1) * problemsData.pagination.limit + 1
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        ' ',
                                        "to",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: Math.min(problemsData.pagination.page * problemsData.pagination.limit, problemsData.pagination.total)
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this),
                                        ' ',
                                        "of",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: problemsData.pagination.total
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        ' ',
                                        "results"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>handlePageChange(problemsData.pagination.page - 1),
                                            disabled: problemsData.pagination.page === 1,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                "Previous"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-1",
                                            children: Array.from({
                                                length: Math.min(5, problemsData.pagination.totalPages)
                                            }, (_, i)=>{
                                                const page = i + 1;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handlePageChange(page),
                                                    className: "px-3 py-1 text-sm rounded ".concat(page === problemsData.pagination.page ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'),
                                                    children: page
                                                }, page, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$web$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>handlePageChange(problemsData.pagination.page + 1),
                                            disabled: problemsData.pagination.page === problemsData.pagination.totalPages,
                                            children: [
                                                "Next",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-4 h-4 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oa/web-app/src/app/problems/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(ProblemsPage, "j3aMd0Ty0iCUfyDKNljo/HK+aOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = ProblemsPage;
var _c;
__turbopack_context__.k.register(_c, "ProblemsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=oa_web-app_src_5b997c7e._.js.map