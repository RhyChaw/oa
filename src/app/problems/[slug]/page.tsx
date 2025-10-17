'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  ArrowLeft, 
  Play, 
  Send, 
  RotateCcw, 
  CheckCircle, 
  XCircle,
  Brain,
  ChevronDown,
  ChevronUp,
  User,
  Bot
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import type { Problem } from '@/lib/store';

// Monaco Editor will be loaded dynamically
let MonacoEditor: any = null;

export default function ProblemWorkspace() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const { 
    user, 
    problems, 
    aiSession, 
    editorState, 
    addChatMessage, 
    setAILevel, 
    useHint,
    updateEditorState,
    markProblemSolved
  } = useAppStore();

  const [problem, setProblem] = useState<Problem | null>(null);
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<Array<{
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
  }> | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/');
      return;
    }

    // Find the problem by slug
    const foundProblem = problems.find(p => p.slug === slug);
    if (!foundProblem) {
      router.push('/dashboard');
      return;
    }

    setProblem(foundProblem);
    
    // Load Monaco Editor
    if (typeof window !== 'undefined') {
      import('@monaco-editor/react').then((monaco) => {
        MonacoEditor = monaco.default;
        setIsEditorLoaded(true);
      });
    }

    // Initialize editor state if not already set
    if (!editorState.content || editorState.problemSlug !== slug) {
      updateEditorState({
        content: foundProblem.starterCode,
        language: 'javascript',
        problemSlug: slug
      });
    }
  }, [user, router, slug, problems, editorState, updateEditorState]);

  const handleRunCode = async () => {
    if (!problem) return;
    
    setIsRunning(true);
    
    // Simulate code execution
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock test results
    const results = problem.testCases.map((testCase, index) => {
      // Simulate some tests passing/failing based on content
      const hasReturn = editorState.content.includes('return');
      const hasFunction = editorState.content.includes('function');
      const passed = hasReturn && hasFunction && Math.random() > 0.3;
      
      return {
        input: testCase.input,
        expected: testCase.expectedOutput,
        actual: passed ? testCase.expectedOutput : `[${index + 1}, ${index + 2}]`,
        passed
      };
    });
    
    setTestResults(results);
    setIsRunning(false);
    
    // Check if all tests passed
    const allPassed = results.every(r => r.passed);
    if (allPassed) {
      markProblemSolved(problem.id);
    }
  };

  const handleSubmitCode = async () => {
    if (!problem) return;
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mark as solved
    markProblemSolved(problem.id);
    
    // Show success message
    addChatMessage({
      type: 'ai',
      content: '🎉 Congratulations! You solved this problem correctly. Great job!',
      level: 'easy'
    });
  };

  const handleGetHint = () => {
    if (!problem) return;
    
    const hints = problem.hints[aiSession.aiLevel];
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    
    useHint(aiSession.aiLevel);
    
    addChatMessage({
      type: 'ai',
      content: randomHint,
      level: aiSession.aiLevel
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    addChatMessage({
      type: 'user',
      content: chatInput,
      level: aiSession.aiLevel
    });
    
    setChatInput('');
    
    // Simulate AI response
    setTimeout(() => {
      addChatMessage({
        type: 'ai',
        content: "I understand you're working on this problem. Try breaking it down into smaller steps and think about the data structures that might help.",
        level: aiSession.aiLevel
      });
    }, 1000);
  };

  const getDifficultyColor = (difficulty: Problem['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Problem not found</h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="btn btn-primary"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      {/* Header */}
      <div className="bg-navy-800 border-b border-navy-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="p-2 text-navy-400 hover:text-white hover:bg-navy-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">{problem.title}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
                <span className="text-sm text-navy-400">
                  {problem.difficulty === 'easy' ? '15-30 min' : 
                   problem.difficulty === 'medium' ? '30-60 min' : '60+ min'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="btn btn-secondary flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
            <button
              onClick={handleSubmitCode}
              className="btn btn-primary flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Problem Description */}
        <div className="w-1/3 bg-navy-800 border-r border-navy-700 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Problem Description</h2>
              <p className="text-navy-300 leading-relaxed">{problem.description}</p>
            </div>

            <div>
              <h3 className="text-md font-semibold text-white mb-3">Test Cases</h3>
              <div className="space-y-3">
                {problem.testCases.map((testCase, index) => (
                  <div key={index} className="bg-navy-700 p-3 rounded-lg">
                    <div className="text-sm text-navy-300 mb-1">Input: {testCase.input}</div>
                    <div className="text-sm text-navy-300">Expected: {testCase.expectedOutput}</div>
                  </div>
                ))}
              </div>
            </div>

            {testResults && (
              <div>
                <h3 className="text-md font-semibold text-white mb-3">Test Results</h3>
                <div className="space-y-2">
                  {testResults.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-navy-700 rounded">
                      {result.passed ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400" />
                      )}
                      <span className="text-sm text-navy-300">
                        Test {index + 1}: {result.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6">
            <div className="h-full monaco-editor-container">
              {isEditorLoaded && MonacoEditor ? (
                <MonacoEditor
                  height="100%"
                  language="javascript"
                  theme="vs-dark"
                  value={editorState.content}
                  onChange={(value: string) => updateEditorState({ content: value || '' })}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: 'JetBrains Mono',
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    insertSpaces: true,
                    wordWrap: 'on',
                  }}
                />
              ) : (
                <div className="h-full bg-navy-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-electric-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-navy-300">Loading editor...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Chat Panel */}
        <div className={`w-1/3 bg-navy-800 border-l border-navy-700 flex flex-col transition-all duration-300 ${
          isChatCollapsed ? 'w-12' : ''
        }`}>
          {!isChatCollapsed ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-navy-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-electric-400" />
                    <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
                  </div>
                  <button
                    onClick={() => setIsChatCollapsed(true)}
                    className="p-1 text-navy-400 hover:text-white hover:bg-navy-700 rounded"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex space-x-1">
                    {(['easy', 'medium', 'hard'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setAILevel(level)}
                        className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                          aiSession.aiLevel === level
                            ? getDifficultyColor(level)
                            : 'bg-navy-700 text-navy-300 hover:bg-navy-600'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                  <div className="text-xs text-navy-400">
                    Hints remaining: {aiSession.quotaRemaining[aiSession.aiLevel]}
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <AnimatePresence>
                  {aiSession.chatHistory.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-electric-500' 
                            : 'bg-navy-700'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-3 h-3 text-white" />
                          ) : (
                            <Bot className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-electric-500/20 text-electric-100' 
                            : 'bg-navy-700 text-navy-100'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-navy-400">
                              {message.type === 'ai' ? `Hint lvl ${message.level}` : 'You'}
                            </span>
                            <span className="text-xs text-navy-500">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-navy-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask for help or clarification..."
                    className="flex-1 px-3 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim()}
                    className="p-2 bg-electric-500 text-white rounded-lg hover:bg-electric-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={handleGetHint}
                    disabled={aiSession.quotaRemaining[aiSession.aiLevel] === 0}
                    className="flex-1 btn btn-secondary text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Hint ({aiSession.quotaRemaining[aiSession.aiLevel]} left)
                  </button>
                  <button
                    onClick={() => updateEditorState({ content: problem.starterCode })}
                    className="p-2 text-navy-400 hover:text-white hover:bg-navy-700 rounded-lg transition-colors"
                    title="Reset code"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center py-4 space-y-4">
              <button
                onClick={() => setIsChatCollapsed(false)}
                className="p-2 text-navy-400 hover:text-white hover:bg-navy-700 rounded"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <Brain className="w-5 h-5 text-electric-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
