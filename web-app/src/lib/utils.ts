import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRuntime(milliseconds: number): string {
  if (milliseconds < 1000) {
    return `${milliseconds}ms`;
  }
  return `${(milliseconds / 1000).toFixed(2)}s`;
}

export function formatMemory(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes}B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)}KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'hard':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
}

export function getDifficultyLabel(difficulty: string): string {
  switch (difficulty) {
    case 'easy':
      return 'Easy';
    case 'medium':
      return 'Medium';
    case 'hard':
      return 'Hard';
    default:
      return 'Unknown';
  }
}

export function sanitizeCodeForAI(code: string): string {
  // Remove comments, extra whitespace, and potentially sensitive patterns
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

export function detectCodeViolation(content: string): {
  hasViolation: boolean;
  reason?: string;
  maskedContent?: string;
} {
  // Heuristics to detect full code solutions
  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
  
  // Check for long contiguous code blocks
  for (const block of codeBlocks) {
    const blockLines = block.split('\n').length;
    if (blockLines > 20) {
      return {
        hasViolation: true,
        reason: 'Long code block detected',
        maskedContent: content.replace(block, '```\n[Full solution withheld by policy]\n```')
      };
    }
  }
  
  // Check for multiple function/class definitions
  const functionCount = (content.match(/function\s+\w+|class\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length;
  if (functionCount > 3) {
    return {
      hasViolation: true,
      reason: 'Multiple function definitions detected',
      maskedContent: content.replace(/```[\s\S]*?```/g, '```\n[Full solution withheld by policy]\n```')
    };
  }
  
  // Check for complete solution patterns
  const hasMainFunction = /int\s+main\s*\(|def\s+main\s*\(|function\s+main\s*\(/.test(content);
  const hasReturnStatement = /return\s+/.test(content);
  const hasPrintOutput = /console\.log|print\s*\(|System\.out\.print/.test(content);
  
  if (hasMainFunction && hasReturnStatement && hasPrintOutput) {
    return {
      hasViolation: true,
      reason: 'Complete solution pattern detected',
      maskedContent: content.replace(/```[\s\S]*?```/g, '```\n[Full solution withheld by policy]\n```')
    };
  }
  
  return { hasViolation: false };
}

export function generateProblemSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
