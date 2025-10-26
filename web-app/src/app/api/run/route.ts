import { NextRequest, NextResponse } from 'next/server';
import type { RunResult, TestResult } from '../../../types';

// Mock test runner - in a real app, this would execute code in a sandbox
export async function POST(request: NextRequest) {
  try {
    const { problemId, code, language } = await request.json();

    if (!problemId || !code || !language) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock test cases based on problem ID
    const mockTestCases = getMockTestCases(problemId);
    
    // Simulate code execution and testing
    const testResults: TestResult[] = [];
    let allPassed = true;
    let output = '';
    let error = '';

    try {
      // Mock execution - in reality, this would run the code in a sandbox
      const result = await executeCode(code, language, mockTestCases);
      
      testResults.push(...result.testResults);
      allPassed = result.allPassed;
      output = result.output;
      error = result.error;
    } catch (execError) {
      allPassed = false;
      error = execError instanceof Error ? execError.message : 'Execution failed';
    }

    const runResult: RunResult = {
      success: allPassed,
      output,
      error: error || undefined,
      testResults,
      runtime: Math.floor(Math.random() * 100) + 10, // Mock runtime
      memory: Math.floor(Math.random() * 10) + 5, // Mock memory usage
    };

    return NextResponse.json({ success: true, data: runResult });
  } catch (error) {
    console.error('Run API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getMockTestCases(problemId: string) {
  const testCases: Record<string, any[]> = {
    '1': [ // Two Sum
      { input: '[2,7,11,15]\n9', expected: '[0,1]' },
      { input: '[3,2,4]\n6', expected: '[1,2]' },
      { input: '[3,3]\n6', expected: '[0,1]' },
    ],
    '2': [ // Add Two Numbers
      { input: '[2,4,3]\n[5,6,4]', expected: '[7,0,8]' },
      { input: '[0]\n[0]', expected: '[0]' },
    ],
    '3': [ // Longest Substring
      { input: '"abcabcbb"', expected: '3' },
      { input: '"bbbbb"', expected: '1' },
      { input: '"pwwkew"', expected: '3' },
    ],
    '4': [ // Median of Two Sorted Arrays
      { input: '[1,3]\n[2]', expected: '2.00000' },
      { input: '[1,2]\n[3,4]', expected: '2.50000' },
    ],
  };

  return testCases[problemId] || [];
}

async function executeCode(code: string, language: string, testCases: any[]) {
  // This is a mock implementation
  // In a real app, you would:
  // 1. Sanitize the code
  // 2. Run it in a sandboxed environment
  // 3. Execute test cases
  // 4. Return results

  const testResults: TestResult[] = [];
  let allPassed = true;
  let output = '';
  let error = '';

  // Mock execution based on code content
  const hasReturn = code.includes('return');
  const hasFunction = code.includes('function') || code.includes('def') || code.includes('public');
  const hasLoop = code.includes('for') || code.includes('while');
  
  // Simulate different outcomes based on code quality
  const codeQuality = (hasReturn ? 1 : 0) + (hasFunction ? 1 : 0) + (hasLoop ? 1 : 0);
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const passed = Math.random() > 0.3 || codeQuality >= 2; // Higher chance of passing with better code
    
    testResults.push({
      testCaseId: (i + 1).toString(),
      passed,
      actualOutput: passed ? testCase.expected : `[${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 10)}]`,
      errorMessage: passed ? undefined : 'Wrong answer',
      runtime: Math.floor(Math.random() * 50) + 5,
      memory: Math.floor(Math.random() * 5) + 1,
    });

    if (!passed) {
      allPassed = false;
    }
  }

  if (allPassed) {
    output = 'All test cases passed!';
  } else {
    error = 'Some test cases failed. Check your logic.';
  }

  return {
    testResults,
    allPassed,
    output,
    error,
  };
}
