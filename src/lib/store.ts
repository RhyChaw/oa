import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  name: string;
  email: string;
  guest: boolean;
}

export interface Progress {
  solved: string[];
  hintUsage: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export interface AISession {
  chatHistory: Array<{
    id: string;
    type: 'user' | 'ai';
    content: string;
    level: 'easy' | 'medium' | 'hard';
    timestamp: Date;
  }>;
  aiLevel: 'easy' | 'medium' | 'hard';
  quotaRemaining: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export interface EditorState {
  content: string;
  language: string;
  problemSlug?: string;
}

export interface Problem {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'solved' | 'in-progress' | 'ai-helped' | 'not-started';
  hints: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
  starterCode: string;
  testCases: Array<{
    input: string;
    expectedOutput: string;
  }>;
}

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Progress state
  progress: Progress;
  updateProgress: (updates: Partial<Progress>) => void;
  markProblemSolved: (problemId: string) => void;
  useHint: (difficulty: 'easy' | 'medium' | 'hard') => void;
  
  // AI session state
  aiSession: AISession;
  addChatMessage: (message: Omit<AISession['chatHistory'][0], 'id' | 'timestamp'>) => void;
  setAILevel: (level: 'easy' | 'medium' | 'hard') => void;
  
  // Editor state
  editorState: EditorState;
  updateEditorState: (updates: Partial<EditorState>) => void;
  
  // UI state
  isAuthModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  
  // Mock data
  problems: Problem[];
  setProblems: (problems: Problem[]) => void;
}

const initialProgress: Progress = {
  solved: [],
  hintUsage: {
    easy: 0,
    medium: 0,
    hard: 0,
  },
};

const initialAISession: AISession = {
  chatHistory: [],
  aiLevel: 'easy',
  quotaRemaining: {
    easy: 10,
    medium: 5,
    hard: 3,
  },
};

const initialEditorState: EditorState = {
  content: '',
  language: 'javascript',
  problemSlug: undefined,
};

const mockProblems: Problem[] = [
  {
    id: '1',
    slug: 'two-sum',
    title: 'Two Sum Challenge',
    description: 'Given an array of integers and a target sum, find two numbers that add up to the target.',
    difficulty: 'easy',
    status: 'not-started',
    hints: {
      easy: ['Think about using a hash map to store numbers and their indices', 'You can iterate through the array once'],
      medium: ['Use a Map to store value-index pairs', 'For each number, check if target - current exists in map'],
      hard: ['Consider edge cases like duplicate numbers', 'What if no solution exists?']
    },
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    testCases: [
      { input: '[2,7,11,15], 9', expectedOutput: '[0,1]' },
      { input: '[3,2,4], 6', expectedOutput: '[1,2]' },
      { input: '[3,3], 6', expectedOutput: '[0,1]' }
    ]
  },
  {
    id: '2',
    slug: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    difficulty: 'medium',
    status: 'not-started',
    hints: {
      easy: ['Use a stack data structure', 'Push opening brackets, pop when you see closing brackets'],
      medium: ['Check if stack is empty when you encounter closing bracket', 'Make sure the closing bracket matches the most recent opening bracket'],
      hard: ['Handle edge cases like empty string', 'Consider time and space complexity']
    },
    starterCode: `function isValid(s) {
  // Your code here
}`,
    testCases: [
      { input: '"()"', expectedOutput: 'true' },
      { input: '"()[]{}"', expectedOutput: 'true' },
      { input: '"(]"', expectedOutput: 'false' }
    ]
  },
  {
    id: '3',
    slug: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Find the length of the longest substring without repeating characters.',
    difficulty: 'hard',
    status: 'not-started',
    hints: {
      easy: ['Use a sliding window approach', 'Keep track of characters in current window'],
      medium: ['Use two pointers and a Set or Map', 'Expand right pointer, contract left when duplicate found'],
      hard: ['Optimize to O(n) time complexity', 'Consider using character frequency array for better performance']
    },
    starterCode: `function lengthOfLongestSubstring(s) {
  // Your code here
}`,
    testCases: [
      { input: '"abcabcbb"', expectedOutput: '3' },
      { input: '"bbbbb"', expectedOutput: '1' },
      { input: '"pwwkew"', expectedOutput: '3' }
    ]
  }
];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User state
      user: null,
      setUser: (user) => set({ user }),
      
      // Progress state
      progress: initialProgress,
      updateProgress: (updates) => 
        set((state) => ({
          progress: { ...state.progress, ...updates }
        })),
      markProblemSolved: (problemId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            solved: [...state.progress.solved, problemId]
          }
        })),
      useHint: (difficulty) =>
        set((state) => ({
          progress: {
            ...state.progress,
            hintUsage: {
              ...state.progress.hintUsage,
              [difficulty]: state.progress.hintUsage[difficulty] + 1
            }
          },
          aiSession: {
            ...state.aiSession,
            quotaRemaining: {
              ...state.aiSession.quotaRemaining,
              [difficulty]: Math.max(0, state.aiSession.quotaRemaining[difficulty] - 1)
            }
          }
        })),
      
      // AI session state
      aiSession: initialAISession,
      addChatMessage: (message) =>
        set((state) => ({
          aiSession: {
            ...state.aiSession,
            chatHistory: [
              ...state.aiSession.chatHistory,
              {
                ...message,
                id: Math.random().toString(36).substr(2, 9),
                timestamp: new Date()
              }
            ]
          }
        })),
      setAILevel: (level) =>
        set((state) => ({
          aiSession: { ...state.aiSession, aiLevel: level }
        })),
      
      // Editor state
      editorState: initialEditorState,
      updateEditorState: (updates) =>
        set((state) => ({
          editorState: { ...state.editorState, ...updates }
        })),
      
      // UI state
      isAuthModalOpen: false,
      setAuthModalOpen: (open) => set({ isAuthModalOpen: open }),
      
      // Mock data
      problems: mockProblems,
      setProblems: (problems) => set({ problems }),
    }),
    {
      name: 'oa-platform-storage',
      partialize: (state) => ({
        user: state.user,
        progress: state.progress,
        aiSession: state.aiSession,
        editorState: state.editorState,
      }),
    }
  )
);
