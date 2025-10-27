// Core data types for the Online Assessment platform

export interface Problem {
  id: string;
  slug: string;
  title: string;
  description: string; // HTML/Markdown content
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  timeLimit?: number; // in seconds
  memoryLimit?: number; // in MB
  canonicalLanguageHints?: string[];
  canonicalTestCases: TestCase[];
  canonicalSolutionHash: string; // for server-side comparison
  points: number;
  createdAt: string;
  updatedAt: string;
  // Project-specific fields
  type?: 'algorithmic' | 'project';
  aiAllowed?: boolean;
  estimatedDuration?: number; // in hours
  skills?: string[];
  category?: 'coding' | 'fullstack' | 'frontend' | 'backend' | 'data';
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  visibility: 'public' | 'private';
  weight: number; // for scoring
  description?: string;
}

export interface Submission {
  id: string;
  problemId: string;
  userId: string;
  language: string;
  codeSnippet?: string; // may be omitted for security
  resultSummary: 'passed' | 'failed' | 'error' | 'timeout';
  runtime?: number; // in milliseconds
  memory?: number; // in MB
  createdAt: string;
  testResults: TestResult[];
  feedback?: string;
}

export interface TestResult {
  testCaseId: string;
  passed: boolean;
  actualOutput?: string;
  errorMessage?: string;
  runtime?: number;
  memory?: number;
}

export interface AIInteraction {
  id: string;
  problemId: string;
  userId: string;
  assistanceLevel: AssistanceLevel;
  question: string;
  aiResponse: string; // sanitized/redacted
  confidenceEstimate: number; // 0-100
  complianceBadge: ComplianceBadge;
  timestamp: string;
  flagged?: boolean;
}

export type AssistanceLevel = 'hint' | 'guided' | 'walkthrough';

export type ComplianceBadge = 'compliant' | 'partial' | 'violation';

export interface User {
  id: string;
  displayName: string;
  email: string;
  preferences: UserPreferences;
  credits: number;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface UserPreferences {
  defaultAssistanceLevel: AssistanceLevel;
  theme: 'light' | 'dark' | 'system';
  allowCodeSharing: boolean; // for AI debugging
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  aiInteractions: boolean;
  submissions: boolean;
}

// UI State types
export interface EditorState {
  code: string;
  language: string;
  isDirty: boolean;
  lastSaved?: string;
}

export interface AIHelperState {
  isOpen: boolean;
  currentLevel: AssistanceLevel;
  conversation: AIInteraction[];
  isLoading: boolean;
}

export interface ProblemFilters {
  difficulty?: string;
  tags?: string[];
  search?: string;
  page?: number;
  limit?: number;
  type?: string; // 'algorithmic' | 'project'
  aiAllowed?: boolean;
  duration?: 'short' | 'medium' | 'long';
  category?: string; // 'coding' | 'fullstack' | 'frontend' | 'backend' | 'data'
}

// API Response types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Editor and Runner types
export interface RunResult {
  success: boolean;
  output: string;
  error?: string;
  testResults: TestResult[];
  runtime?: number;
  memory?: number;
}

export interface EditorConfig {
  language: string;
  theme: string;
  fontSize: number;
  tabSize: number;
  wordWrap: 'on' | 'off' | 'wordWrapColumn' | 'bounded';
  minimap: { enabled: boolean };
}

// AI Helper specific types
export interface AIRequest {
  problemId: string;
  question: string;
  assistanceLevel: AssistanceLevel;
  context?: {
    failingTest?: string;
    errorMessage?: string;
    codeSnippet?: string; // sanitized
  };
}

export interface AIResponse {
  response: string;
  assistanceLevel: AssistanceLevel;
  confidenceEstimate: number;
  complianceBadge: ComplianceBadge;
  maskedContent?: string; // if content was masked
  requiresEscalation?: boolean;
}

// Error types
export interface APIError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// Form types
export interface ProblemFormData {
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  timeLimit?: number;
  memoryLimit?: number;
  points: number;
}

export interface SubmissionFormData {
  code: string;
  language: string;
  problemId: string;
}
