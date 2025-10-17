import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AIHelperState, EditorState, UserPreferences } from '@/types';

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // UI state
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
  
  // AI Helper state
  aiHelper: AIHelperState;
  
  // Editor state (per problem)
  editorStates: Record<string, EditorState>;
  
  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  
  // AI Helper actions
  setAIHelperOpen: (open: boolean) => void;
  setAIAssistanceLevel: (level: 'hint' | 'guided' | 'walkthrough') => void;
  addAIInteraction: (interaction: any) => void;
  setAILoading: (loading: boolean) => void;
  
  // Editor actions
  setEditorState: (problemId: string, state: Partial<EditorState>) => void;
  getEditorState: (problemId: string) => EditorState | undefined;
  clearEditorState: (problemId: string) => void;
  
  // Preferences
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

const defaultEditorState: EditorState = {
  code: '',
  language: 'javascript',
  isDirty: false,
};

const defaultAIHelperState: AIHelperState = {
  isOpen: false,
  currentLevel: 'hint',
  conversation: [],
  isLoading: false,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      theme: 'system',
      sidebarOpen: false,
      aiHelper: defaultAIHelperState,
      editorStates: {},
      
      // User actions
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),
      
      // Theme actions
      setTheme: (theme) => set({ theme }),
      
      // Sidebar actions
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      // AI Helper actions
      setAIHelperOpen: (open) => set((state) => ({
        aiHelper: { ...state.aiHelper, isOpen: open }
      })),
      
      setAIAssistanceLevel: (level) => set((state) => ({
        aiHelper: { ...state.aiHelper, currentLevel: level }
      })),
      
      addAIInteraction: (interaction) => set((state) => ({
        aiHelper: {
          ...state.aiHelper,
          conversation: [...state.aiHelper.conversation, interaction]
        }
      })),
      
      setAILoading: (loading) => set((state) => ({
        aiHelper: { ...state.aiHelper, isLoading: loading }
      })),
      
      // Editor actions
      setEditorState: (problemId, state) => set((current) => ({
        editorStates: {
          ...current.editorStates,
          [problemId]: {
            ...defaultEditorState,
            ...current.editorStates[problemId],
            ...state
          }
        }
      })),
      
      getEditorState: (problemId) => {
        const state = get().editorStates[problemId];
        return state || defaultEditorState;
      },
      
      clearEditorState: (problemId) => set((state) => {
        const newStates = { ...state.editorStates };
        delete newStates[problemId];
        return { editorStates: newStates };
      }),
      
      // Preferences
      updatePreferences: (preferences) => set((state) => ({
        user: state.user ? {
          ...state.user,
          preferences: { ...state.user.preferences, ...preferences }
        } : null
      })),
    }),
    {
      name: 'oa-app-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        theme: state.theme,
        editorStates: state.editorStates,
      }),
    }
  )
);

// Selectors for better performance
export const useUser = () => useAppStore((state) => state.user);
export const useIsAuthenticated = () => useAppStore((state) => state.isAuthenticated);
export const useTheme = () => useAppStore((state) => state.theme);
export const useAIHelper = () => useAppStore((state) => state.aiHelper);
export const useEditorState = (problemId: string) => 
  useAppStore((state) => state.getEditorState(problemId));
