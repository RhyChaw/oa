// Judge0 API integration for real code execution
// Free tier: 1000 requests/day, 100 requests/minute

interface Judge0Submission {
  language_id: number;
  source_code: string;
  stdin?: string;
  expected_output?: string;
}

interface Judge0Result {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  time: string;
  memory: number;
  status: {
    id: number;
    description: string;
  };
}

interface Judge0Response {
  token: string;
}

// Language mapping to Judge0 language IDs
export const JUDGE0_LANGUAGES = {
  javascript: 63,    // Node.js
  typescript: 74,    // TypeScript
  python: 71,        // Python 3
  java: 62,          // Java
  cpp: 54,           // C++ 17
  c: 50,             // C
  csharp: 51,        // C#
  go: 60,            // Go
  rust: 73,          // Rust
  php: 68,           // PHP
  ruby: 72,          // Ruby
  swift: 83,         // Swift
  kotlin: 78,        // Kotlin
} as const;

export class Judge0API {
  private baseUrl: string;
  private apiKey: string | null;

  constructor() {
    // Using Judge0 RapidAPI (more reliable than free tier)
    this.baseUrl = 'https://judge0-ce.p.rapidapi.com';
    this.apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY || null;
  }

  async submitCode(
    code: string,
    language: string,
    testCases: Array<{ input: string; expectedOutput: string }>
  ): Promise<{
    success: boolean;
    results: Array<{
      passed: boolean;
      input: string;
      expectedOutput: string;
      actualOutput: string;
      error?: string;
      runtime?: number;
      memory?: number;
    }>;
    error?: string;
  }> {
    try {
      const languageId = JUDGE0_LANGUAGES[language as keyof typeof JUDGE0_LANGUAGES];
      if (!languageId) {
        throw new Error(`Unsupported language: ${language}`);
      }

      const results = [];
      let allPassed = true;

      // Execute each test case
      for (const testCase of testCases) {
        try {
          const result = await this.executeTestCase(code, languageId, testCase.input);
          
          const passed = result.stdout?.trim() === testCase.expectedOutput.trim();
          if (!passed) allPassed = false;

          results.push({
            passed,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: result.stdout || '',
            error: result.stderr || result.compile_output || result.message,
            runtime: parseFloat(result.time) * 1000, // Convert to milliseconds
            memory: result.memory,
          });
        } catch (error) {
          allPassed = false;
          results.push({
            passed: false,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: '',
            error: error instanceof Error ? error.message : 'Unknown error',
          });
        }
      }

      return {
        success: allPassed,
        results,
      };
    } catch (error) {
      return {
        success: false,
        results: [],
        error: error instanceof Error ? error.message : 'Code execution failed',
      };
    }
  }

  private async executeTestCase(
    code: string,
    languageId: number,
    input: string
  ): Promise<Judge0Result> {
    // Submit code for execution
    const submission: Judge0Submission = {
      language_id: languageId,
      source_code: code,
      stdin: input,
    };

    const submitResponse = await fetch(`${this.baseUrl}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': this.apiKey || '',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      body: JSON.stringify(submission),
    });

    if (!submitResponse.ok) {
      throw new Error(`Submission failed: ${submitResponse.statusText}`);
    }

    const { token }: Judge0Response = await submitResponse.json();

    // Poll for result
    return await this.pollResult(token);
  }

  private async pollResult(token: string, maxAttempts = 30): Promise<Judge0Result> {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

      const response = await fetch(`${this.baseUrl}/submissions/${token}`, {
        headers: {
          'X-RapidAPI-Key': this.apiKey || '',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get result: ${response.statusText}`);
      }

      const result: Judge0Result = await response.json();

      // Check if execution is complete
      if (result.status.id <= 2) {
        // Still processing (1: In Queue, 2: Processing)
        continue;
      }

      return result;
    }

    throw new Error('Code execution timeout');
  }

  // Get supported languages
  async getLanguages(): Promise<Array<{ id: number; name: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/languages`, {
        headers: {
          'X-RapidAPI-Key': this.apiKey || '',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get languages: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to fetch languages:', error);
      return [];
    }
  }
}

export const judge0API = new Judge0API();
