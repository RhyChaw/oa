'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { cn, detectCodeViolation } from '@/lib/utils';
import { useAppStore } from '@/lib/store';
import { aiAPI } from '@/lib/api';
import type { AIInteraction, AssistanceLevel, AIRequest } from '@/types';

interface AIHelperPanelProps {
  problemId: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const assistanceLevels: { value: AssistanceLevel; label: string; description: string }[] = [
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

export function AIHelperPanel({ problemId, isOpen, onClose, className }: AIHelperPanelProps) {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<AIInteraction[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { aiHelper, setAILoading, addAIInteraction } = useAppStore();
  const { currentLevel, isLoading: storeLoading } = aiHelper;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleAskQuestion = async () => {
    if (!question.trim() || isLoading) return;

    const userQuestion = question.trim();
    setQuestion('');
    setIsLoading(true);
    setAILoading(true);

    try {
      const request: AIRequest = {
        problemId,
        question: userQuestion,
        assistanceLevel: currentLevel,
      };

      const response = await aiAPI.askQuestion(request);
      
      if (response.success) {
        const interaction: AIInteraction = {
          id: Date.now().toString(),
          problemId,
          userId: 'current-user', // This would come from auth context
          assistanceLevel: currentLevel,
          question: userQuestion,
          aiResponse: response.data.response,
          confidenceEstimate: response.data.confidenceEstimate,
          complianceBadge: response.data.complianceBadge,
          timestamp: new Date().toISOString(),
        };

        setConversation(prev => [...prev, interaction]);
        addAIInteraction(interaction);
      }
    } catch (error) {
      console.error('AI request failed:', error);
      // Handle error - maybe show a toast
    } finally {
      setIsLoading(false);
      setAILoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const getComplianceIcon = (badge: string) => {
    switch (badge) {
      case 'compliant':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'partial':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'violation':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getComplianceText = (badge: string) => {
    switch (badge) {
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

  return (
    <div className="flex flex-col h-full w-[25%] bg-white dark:bg-slate-800 border-l border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">AI Helper</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {assistanceLevels.find(level => level.value === currentLevel)?.description}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Assistance Level Selector */}
      <div className="p-4 border-b border-gray-200 dark:border-slate-700 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Assistance Level</div>
        <div className="flex gap-2">
          {assistanceLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => useAppStore.getState().setAIAssistanceLevel(level.value)}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-colors",
                currentLevel === level.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600"
              )}
            >
              {level.label}
            </button>
          ))}
        </div>
        <div className="mt-2 text-xs text-red-600 dark:text-red-400 font-medium">
          ⚠️ AI WILL NOT PROVIDE FULL CODE
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        {conversation.length === 0 ? (
          <div className="text-center text-slate-500 dark:text-slate-400 py-8">
            <div className="text-sm">
              Ask a focused question about the problem.
            </div>
            <div className="text-xs mt-1">
              Reminder: full solutions are withheld.
            </div>
          </div>
        ) : (
          conversation.map((interaction) => (
            <div key={interaction.id} className="space-y-3">
              {/* User Question */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-1">You asked:</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">{interaction.question}</div>
              </div>

              {/* AI Response */}
              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100">AI Response:</div>
                  {getComplianceIcon(interaction.complianceBadge)}
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {getComplianceText(interaction.complianceBadge)}
                  </span>
                </div>
                <div className="text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                  {interaction.aiResponse}
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Confidence: {interaction.confidenceEstimate}%</span>
                  <span>{new Date(interaction.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4 animate-spin" />
            <span className="text-sm">AI is thinking...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700">
        <div className="flex gap-2">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a focused question about the problem..."
            className="flex-1 p-2 text-sm border border-gray-300 dark:border-slate-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
            rows={2}
            disabled={isLoading}
          />
          <button
            onClick={handleAskQuestion}
            disabled={!question.trim() || isLoading}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
}
