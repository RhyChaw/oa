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

// Test Runner API
export const runnerAPI = {
  async runTests(data: {
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
