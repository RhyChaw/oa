'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Play, Save, Clock, CheckCircle, XCircle } from 'lucide-react';
import { EditorWrapper } from '@/components/editor/editor-wrapper';
import { AIHelperPanel } from '@/components/ai/ai-helper-panel';
import { Button } from '@/components/ui/button';
import { problemsAPI, runnerAPI } from '@/lib/api';
import { queryKeys } from '@/lib/query-client';
import { useAppStore } from '@/lib/store';
import { cn, formatRuntime, formatMemory } from '@/lib/utils';
import type { Problem, RunResult, Submission } from '@/types';

export default function ProblemPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [runResult, setRunResult] = useState<RunResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setEditorState, getEditorState } = useAppStore();

  const { data: problemData, isLoading, error } = useQuery({
    queryKey: queryKeys.problems.detail(slug),
    queryFn: () => problemsAPI.getProblem(slug),
    enabled: !!slug,
  });

  const problem = problemData?.data;

  // Load saved editor state
  useEffect(() => {
    if (problem) {
      const savedState = getEditorState(problem.id);
      if (savedState) {
        setCode(savedState.code);
        setLanguage(savedState.language);
      }
    }
  }, [problem, getEditorState]);

  // Save editor state
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    if (problem) {
      setEditorState(problem.id, {
        code: newCode,
        language,
        isDirty: newCode !== '',
      });
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (problem) {
      setEditorState(problem.id, {
        code,
        language: newLanguage,
        isDirty: true,
      });
    }
  };

  const handleRun = async (codeToRun: string, languageToRun: string): Promise<RunResult> => {
    if (!problem) throw new Error('Problem not loaded');

    setIsRunning(true);
    try {
      const response = await runnerAPI.runTests({
        problemId: problem.id,
        code: codeToRun,
        language: languageToRun,
      });

      if (response.success) {
        setRunResult(response.data);
        return response.data;
      } else {
        throw new Error(response.message || 'Run failed');
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleSave = (codeToSave: string) => {
    if (problem) {
      setEditorState(problem.id, {
        code: codeToSave,
        language,
        isDirty: false,
        lastSaved: new Date().toISOString(),
      });
    }
  };

  const handleSubmit = async () => {
    if (!problem || !code.trim()) return;

    setIsSubmitting(true);
    try {
      // First run tests to make sure they pass
      const result = await handleRun(code, language);
      
      if (!result.success) {
        alert('Please fix all test cases before submitting.');
        return;
      }

      // TODO: Implement actual submission
      console.log('Submitting solution:', { problemId: problem.id, code, language });
      alert('Submission successful! (This is a demo)');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading problem...</p>
        </div>
      </div>
    );
  }

  if (error || !problem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Problem Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">The problem you're looking for doesn't exist.</p>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex">
      {/* Problem Statement - Left Side (30%) */}
      <div className="w-[30%] bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{problem.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  problem.difficulty === 'easy' && "bg-green-100 text-green-800",
                  problem.difficulty === 'medium' && "bg-yellow-100 text-yellow-800",
                  problem.difficulty === 'hard' && "bg-red-100 text-red-800"
                )}>
                  {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                </span>
                <span>{problem.points} points</span>
                {problem.timeLimit && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {problem.timeLimit}s
                  </span>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div 
              className="prose prose-sm max-w-none prose-slate dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: problem.description }}
            />
          </div>

          {/* Test Cases */}
          {problem.canonicalTestCases.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Test Cases</h3>
              <div className="space-y-4">
                {problem.canonicalTestCases.slice(0, 3).map((testCase, index) => (
                  <div key={testCase.id} className="border border-gray-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Test Case {index + 1}
                      {testCase.visibility === 'private' && (
                        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">(Hidden)</span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-slate-600 dark:text-slate-400 mb-1">Input:</div>
                        <pre className="bg-gray-50 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto text-slate-900 dark:text-slate-100">
                          {testCase.input}
                        </pre>
                      </div>
                      <div>
                        <div className="font-medium text-slate-600 dark:text-slate-400 mb-1">Expected Output:</div>
                        <pre className="bg-gray-50 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto text-slate-900 dark:text-slate-100">
                          {testCase.expectedOutput}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
                {problem.canonicalTestCases.length > 3 && (
                  <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
                    +{problem.canonicalTestCases.length - 3} more test cases
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editor - Middle (45%) */}
      <div className="w-[45%] flex flex-col p-6">
        {/* Editor Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handleRun(code, language)}
              disabled={isRunning || !code.trim()}
              loading={isRunning}
              className="flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Run Tests
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !code.trim() || !runResult?.success}
              loading={isSubmitting}
              className="flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Submit Solution
            </Button>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
          <EditorWrapper
            initialCode={code}
            language={language}
            onChange={handleCodeChange}
            onRun={handleRun}
            onSave={handleSave}
            problemId={problem.id}
            className="h-full"
          />
        </div>

        {/* Run Results */}
        {runResult && (
          <div className="mt-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-4">
            <div className="flex items-center gap-2 mb-4">
              {runResult.success ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {runResult.success ? 'All Tests Passed!' : 'Tests Failed'}
              </h3>
            </div>

            {runResult.testResults.length > 0 && (
              <div className="space-y-2 mb-4">
                {runResult.testResults.map((result, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg",
                      result.passed
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    )}
                  >
                    <span className="font-medium">Test {index + 1}</span>
                    <div className="flex items-center gap-2">
                      {result.passed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {result.passed ? 'PASSED' : 'FAILED'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {runResult.runtime && (
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Runtime: {formatRuntime(runResult.runtime)}
                {runResult.memory && ` • Memory: ${formatMemory(runResult.memory)}`}
              </div>
            )}
          </div>
        )}
      </div>

      {/* AI Helper - Always Visible Right Side */}
      <AIHelperPanel
        problemId={problem.id}
        isOpen={true}
        onClose={() => {}}
      />
    </div>
  );
}
