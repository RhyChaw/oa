'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import type { EditorConfig, RunResult } from '@/types';
import { useAppStore } from '@/lib/store';
// Import Monaco types only, not the runtime
import type * as monaco from 'monaco-editor';

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gray-50">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  ),
});

interface EditorWrapperProps {
  initialCode?: string;
  language?: string;
  onChange?: (code: string) => void;
  onRun?: (code: string, language: string) => Promise<RunResult>;
  onSave?: (code: string) => void;
  className?: string;
  readOnly?: boolean;
  problemId?: string;
}

const languageMap: Record<string, string> = {
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
  kotlin: 'kotlin',
};

export function EditorWrapper({
  initialCode = '',
  language = 'javascript',
  onChange,
  onRun,
  onSave,
  className,
  readOnly = false,
  problemId,
}: EditorWrapperProps) {
  const { theme } = useAppStore();
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [lastRunResult, setLastRunResult] = useState<RunResult | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [editorConfig, setEditorConfig] = useState<EditorConfig>({
    language: languageMap[language] || 'javascript',
    theme: theme === 'dark' ? 'vs-dark' : 'vs-light',
    fontSize: 14,
    tabSize: 2,
    wordWrap: 'on',
    minimap: { enabled: false },
  });

  // Update theme when it changes
  useEffect(() => {
    setEditorConfig(prev => ({
      ...prev,
      theme: theme === 'dark' ? 'vs-dark' : 'vs-light',
    }));
  }, [theme]);

  // Update language when it changes
  useEffect(() => {
    setCurrentLanguage(language);
    setEditorConfig(prev => ({
      ...prev,
      language: languageMap[language] || 'javascript',
    }));
    
    // Update the editor language if it's mounted (client-side only)
    if (typeof window !== 'undefined' && editorRef.current && editorRef.current.getModel()) {
      import('monaco-editor').then((monaco) => {
        monaco.editor.setModelLanguage(editorRef.current!.getModel()!, languageMap[language] || 'javascript');
      });
    }
  }, [language]);

  // Auto-save functionality
  useEffect(() => {
    if (!problemId || readOnly) return;
    
    const autoSave = () => {
      if (onSave && code !== initialCode) {
        onSave(code);
      }
    };
    
    const timeoutId = setTimeout(autoSave, 2000); // Auto-save after 2 seconds of inactivity
    return () => clearTimeout(timeoutId);
  }, [code, problemId, onSave, initialCode, readOnly]);

  // Load saved code from localStorage
  useEffect(() => {
    if (!problemId || readOnly) return;
    
    const savedCode = localStorage.getItem(`editor-${problemId}`);
    if (savedCode && savedCode !== initialCode) {
      setCode(savedCode);
    }
  }, [problemId, initialCode, readOnly]);

  const handleEditorChange = (value: string | undefined) => {
    const newCode = value || '';
    setCode(newCode);
    onChange?.(newCode);
  };

  const handleRun = async () => {
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
        testResults: [],
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(code);
    }
  };

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    
    // Prevent auto-scroll to bottom
    editor.setScrollTop(0);
    editor.setPosition({ lineNumber: 1, column: 1 });
    
    // Add keyboard shortcuts - use numeric constants to avoid import issues
    editor.addCommand(1 | 3, () => { // Ctrl/Cmd + Enter
      handleRun();
    });
    
    editor.addCommand(1 | 49, (e: monaco.IKeyboardEvent) => { // Ctrl/Cmd + S
      e.preventDefault();
      handleSave();
    });
  };

  return (
    <div className={cn("flex flex-col h-full bg-white dark:bg-slate-800", className)}>
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600">
        <div className="flex items-center gap-2">
          <select
            value={currentLanguage}
            onChange={(e) => {
              const newLanguage = e.target.value;
              setCurrentLanguage(newLanguage);
              setEditorConfig(prev => ({
                ...prev,
                language: languageMap[newLanguage] || 'javascript',
              }));
              // Update the editor language if it's mounted (client-side only)
              if (typeof window !== 'undefined' && editorRef.current && editorRef.current.getModel()) {
                import('monaco-editor').then((monaco) => {
                  monaco.editor.setModelLanguage(editorRef.current!.getModel()!, languageMap[newLanguage] || 'javascript');
                });
              }
            }}
            className="px-2 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            disabled={readOnly}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
          </select>
          
          {!readOnly && (
            <button
              onClick={handleSave}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {!readOnly && (
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {isRunning ? 'Running...' : 'Run Tests'}
            </button>
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-0">
        <MonacoEditor
          height="100%"
          language={editorConfig.language}
          theme={editorConfig.theme}
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            fontSize: editorConfig.fontSize,
            tabSize: editorConfig.tabSize,
            wordWrap: editorConfig.wordWrap,
            minimap: editorConfig.minimap,
            readOnly,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 8, bottom: 8 },
            // Fix Enter key behavior
            acceptSuggestionOnEnter: 'on',
            quickSuggestions: true,
            suggestOnTriggerCharacters: true,
            // Prevent auto-scrolling
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            // Prevent focus issues
            domReadOnly: false,
            // Prevent auto-scroll to bottom
            scrollTop: 0,
          }}
        />
      </div>

      {/* Run Results */}
      {lastRunResult && (
        <div className="border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-4 max-h-48 overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className={cn(
              "w-2 h-2 rounded-full",
              lastRunResult.success ? "bg-green-500" : "bg-red-500"
            )} />
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {lastRunResult.success ? 'Tests Passed' : 'Tests Failed'}
            </span>
          </div>
          
          {lastRunResult.output && (
            <div className="mb-2">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Output:</div>
              <pre className="text-xs bg-white dark:bg-slate-800 p-2 rounded border border-gray-200 dark:border-slate-600 overflow-x-auto text-slate-900 dark:text-slate-100">
                {lastRunResult.output}
              </pre>
            </div>
          )}
          
          {lastRunResult.error && (
            <div className="mb-2">
              <div className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">Error:</div>
              <pre className="text-xs bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 overflow-x-auto">
                {lastRunResult.error}
              </pre>
            </div>
          )}
          
          {lastRunResult.testResults.length > 0 && (
            <div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Test Results:</div>
              <div className="space-y-1">
                {lastRunResult.testResults.map((result, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-xs p-2 rounded",
                      result.passed
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    )}
                  >
                    Test {index + 1}: {result.passed ? 'PASSED' : 'FAILED'}
                    {result.errorMessage && (
                      <div className="mt-1 text-red-600">
                        {result.errorMessage}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
