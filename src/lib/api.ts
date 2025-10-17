import type { 
  APIResponse, 
  PaginatedResponse, 
  Problem, 
  Submission, 
  AIRequest, 
  AIResponse,
  ProblemFilters,
  RunResult 
} from '@/types';
import { judge0API } from './judge0-api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new APIError(
      errorData.message || `HTTP ${response.status}`,
      response.status,
      errorData.code
    );
  }
  
  return response.json();
}

// Problems API
export const problemsAPI = {
  async getProblems(filters: ProblemFilters = {}): Promise<PaginatedResponse<Problem>> {
    const params = new URLSearchParams();
    
    if (filters.difficulty) params.append('difficulty', filters.difficulty);
    if (filters.tags?.length) params.append('tags', filters.tags.join(','));
    if (filters.search) params.append('search', filters.search);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());
    
    const response = await fetch(`${API_BASE_URL}/problems?${params}`);
    return handleResponse<PaginatedResponse<Problem>>(response);
  },
  
  async getProblem(slug: string): Promise<APIResponse<Problem>> {
    const response = await fetch(`${API_BASE_URL}/problems/${slug}`);
    return handleResponse<APIResponse<Problem>>(response);
  },
  
  async getProblemTags(): Promise<APIResponse<string[]>> {
    const response = await fetch(`${API_BASE_URL}/problems/tags`);
    return handleResponse<APIResponse<string[]>>(response);
  },
};

// Submissions API
export const submissionsAPI = {
  async getSubmissions(problemId?: string): Promise<APIResponse<Submission[]>> {
    const params = problemId ? `?problemId=${problemId}` : '';
    const response = await fetch(`${API_BASE_URL}/submissions${params}`);
    return handleResponse<APIResponse<Submission[]>>(response);
  },
  
  async createSubmission(data: {
    problemId: string;
    code: string;
    language: string;
  }): Promise<APIResponse<Submission>> {
    const response = await fetch(`${API_BASE_URL}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse<APIResponse<Submission>>(response);
  },
  
  async getSubmission(id: string): Promise<APIResponse<Submission>> {
    const response = await fetch(`${API_BASE_URL}/submissions/${id}`);
    return handleResponse<APIResponse<Submission>>(response);
  },
};

// Test Runner API with real code execution support
export const runnerAPI = {
  async runTests(data: {
    problemId: string;
    code: string;
    language: string;
  }): Promise<APIResponse<RunResult>> {
    // Check if we should use real code execution
    const useRealExecution = process.env.NEXT_PUBLIC_USE_REAL_EXECUTION === 'true';
    
    if (useRealExecution) {
      try {
        // Get problem details to extract test cases
        const problemResponse = await problemsAPI.getProblem(data.problemId);
        if (!problemResponse.success || !problemResponse.data) {
          throw new APIError('Failed to load problem details', 404);
        }

        const problem: Problem = problemResponse.data;
        const testCases = problem.canonicalTestCases.map(tc => ({
          input: tc.input,
          expectedOutput: tc.expectedOutput,
        }));

        // Execute code using Judge0
        const result = await judge0API.submitCode(
          data.code,
          data.language,
          testCases
        );

        if (!result.success) {
          throw new APIError(result.error || 'Code execution failed', 500);
        }

        // Convert Judge0 results to our format
        const runResult: RunResult = {
          success: result.results.every(r => r.passed),
          output: result.results.map(r => 
            `Input: ${r.input}\nExpected: ${r.expectedOutput}\nActual: ${r.actualOutput}${r.error ? `\nError: ${r.error}` : ''}`
          ).join('\n\n'),
          error: result.results.some(r => r.error) ? 
            result.results.find(r => r.error)?.error : undefined,
          testResults: result.results.map((r, index) => ({
            testCase: index + 1,
            passed: r.passed,
            input: r.input,
            expectedOutput: r.expectedOutput,
            actualOutput: r.actualOutput,
            error: r.error,
          })),
          runtime: result.results.reduce((sum, r) => sum + (r.runtime || 0), 0),
          memory: Math.max(...result.results.map(r => r.memory || 0)),
        };

        return { success: true, data: runResult };
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
  async mockRunTests(data: {
    problemId: string;
    code: string;
    language: string;
  }): Promise<APIResponse<RunResult>> {
    const response = await fetch(`${API_BASE_URL}/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse<APIResponse<RunResult>>(response);
  },
};

// AI Helper API
export const aiAPI = {
  async askQuestion(request: AIRequest): Promise<APIResponse<AIResponse>> {
    const response = await fetch(`${API_BASE_URL}/ai/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    return handleResponse<APIResponse<AIResponse>>(response);
  },
  
  async escalateRequest(problemId: string, credits: number): Promise<APIResponse<{ success: boolean; creditsRemaining: number }>> {
    const response = await fetch(`${API_BASE_URL}/ai/escalate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemId, credits }),
    });
    return handleResponse<APIResponse<{ success: boolean; creditsRemaining: number }>>(response);
  },
};

// Auth API
export const authAPI = {
  async getCurrentUser(): Promise<APIResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/auth/me`);
    return handleResponse<APIResponse<any>>(response);
  },
  
  async login(credentials: { email: string; password: string }): Promise<APIResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse<APIResponse<any>>(response);
  },
  
  async logout(): Promise<APIResponse<void>> {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
    });
    return handleResponse<APIResponse<void>>(response);
  },
};

export { APIError };
