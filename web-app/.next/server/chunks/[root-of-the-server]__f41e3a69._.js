module.exports = [
"[project]/oa/web-app/.next-internal/server/app/api/problems/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/oa/web-app/src/app/api/problems/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oa/node_modules/next/server.js [app-route] (ecmascript)");
;
// Mock data - in a real app, this would come from a database
const mockProblems = [
    {
        id: '1',
        slug: 'two-sum',
        title: 'Two Sum',
        description: `
      <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
      
      <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
      
      <p>You can return the answer in any order.</p>
      
      <h3>Example 1:</h3>
      <pre><code>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>
      
      <h3>Example 2:</h3>
      <pre><code>Input: nums = [3,2,4], target = 6
Output: [1,2]</code></pre>
      
      <h3>Example 3:</h3>
      <pre><code>Input: nums = [3,3], target = 6
Output: [0,1]</code></pre>
      
      <h3>Constraints:</h3>
      <ul>
        <li><code>2 <= nums.length <= 10<sup>4</sup></code></li>
        <li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
        <li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
        <li>Only one valid answer exists.</li>
      </ul>
    `,
        difficulty: 'easy',
        tags: [
            'array',
            'hash-table'
        ],
        timeLimit: 2,
        memoryLimit: 50,
        canonicalLanguageHints: [
            'javascript',
            'python',
            'java'
        ],
        canonicalTestCases: [
            {
                id: '1',
                input: '[2,7,11,15]\n9',
                expectedOutput: '[0,1]',
                visibility: 'public',
                weight: 1
            },
            {
                id: '2',
                input: '[3,2,4]\n6',
                expectedOutput: '[1,2]',
                visibility: 'public',
                weight: 1
            },
            {
                id: '3',
                input: '[3,3]\n6',
                expectedOutput: '[0,1]',
                visibility: 'public',
                weight: 1
            }
        ],
        canonicalSolutionHash: 'abc123',
        points: 10,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    {
        id: '2',
        slug: 'add-two-numbers',
        title: 'Add Two Numbers',
        description: `
      <p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
      
      <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>
      
      <h3>Example 1:</h3>
      <pre><code>Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.</code></pre>
      
      <h3>Example 2:</h3>
      <pre><code>Input: l1 = [0], l2 = [0]
Output: [0]</code></pre>
      
      <h3>Example 3:</h3>
      <pre><code>Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]</code></pre>
    `,
        difficulty: 'medium',
        tags: [
            'linked-list',
            'math',
            'recursion'
        ],
        timeLimit: 3,
        memoryLimit: 50,
        canonicalLanguageHints: [
            'javascript',
            'python',
            'java'
        ],
        canonicalTestCases: [
            {
                id: '1',
                input: '[2,4,3]\n[5,6,4]',
                expectedOutput: '[7,0,8]',
                visibility: 'public',
                weight: 1
            },
            {
                id: '2',
                input: '[0]\n[0]',
                expectedOutput: '[0]',
                visibility: 'public',
                weight: 1
            }
        ],
        canonicalSolutionHash: 'def456',
        points: 20,
        createdAt: '2024-01-02T00:00:00Z',
        updatedAt: '2024-01-02T00:00:00Z'
    },
    {
        id: '3',
        slug: 'longest-substring-without-repeating-characters',
        title: 'Longest Substring Without Repeating Characters',
        description: `
      <p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>
      
      <h3>Example 1:</h3>
      <pre><code>Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.</code></pre>
      
      <h3>Example 2:</h3>
      <pre><code>Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.</code></pre>
      
      <h3>Example 3:</h3>
      <pre><code>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</code></pre>
    `,
        difficulty: 'medium',
        tags: [
            'hash-table',
            'string',
            'sliding-window'
        ],
        timeLimit: 3,
        memoryLimit: 50,
        canonicalLanguageHints: [
            'javascript',
            'python',
            'java'
        ],
        canonicalTestCases: [
            {
                id: '1',
                input: '"abcabcbb"',
                expectedOutput: '3',
                visibility: 'public',
                weight: 1
            },
            {
                id: '2',
                input: '"bbbbb"',
                expectedOutput: '1',
                visibility: 'public',
                weight: 1
            },
            {
                id: '3',
                input: '"pwwkew"',
                expectedOutput: '3',
                visibility: 'public',
                weight: 1
            }
        ],
        canonicalSolutionHash: 'ghi789',
        points: 25,
        createdAt: '2024-01-03T00:00:00Z',
        updatedAt: '2024-01-03T00:00:00Z'
    },
    {
        id: '4',
        slug: 'median-of-two-sorted-arrays',
        title: 'Median of Two Sorted Arrays',
        description: `
      <p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>
      
      <p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>
      
      <h3>Example 1:</h3>
      <pre><code>Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.</code></pre>
      
      <h3>Example 2:</h3>
      <pre><code>Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.</code></pre>
    `,
        difficulty: 'hard',
        tags: [
            'array',
            'binary-search',
            'divide-and-conquer'
        ],
        timeLimit: 5,
        memoryLimit: 50,
        canonicalLanguageHints: [
            'javascript',
            'python',
            'java'
        ],
        canonicalTestCases: [
            {
                id: '1',
                input: '[1,3]\n[2]',
                expectedOutput: '2.00000',
                visibility: 'public',
                weight: 1
            },
            {
                id: '2',
                input: '[1,2]\n[3,4]',
                expectedOutput: '2.50000',
                visibility: 'public',
                weight: 1
            }
        ],
        canonicalSolutionHash: 'jkl012',
        points: 50,
        createdAt: '2024-01-04T00:00:00Z',
        updatedAt: '2024-01-04T00:00:00Z'
    }
];
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const difficulty = searchParams.get('difficulty');
    const tags = searchParams.get('tags')?.split(',');
    const search = searchParams.get('search');
    let filteredProblems = [
        ...mockProblems
    ];
    // Filter by difficulty
    if (difficulty && difficulty !== 'all') {
        filteredProblems = filteredProblems.filter((p)=>p.difficulty === difficulty);
    }
    // Filter by tags
    if (tags && tags.length > 0) {
        filteredProblems = filteredProblems.filter((p)=>tags.some((tag)=>p.tags.includes(tag)));
    }
    // Filter by search
    if (search) {
        const searchLower = search.toLowerCase();
        filteredProblems = filteredProblems.filter((p)=>p.title.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower) || p.tags.some((tag)=>tag.toLowerCase().includes(searchLower)));
    }
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProblems = filteredProblems.slice(startIndex, endIndex);
    const response = {
        data: paginatedProblems,
        pagination: {
            page,
            limit,
            total: filteredProblems.length,
            totalPages: Math.ceil(filteredProblems.length / limit)
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$oa$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f41e3a69._.js.map