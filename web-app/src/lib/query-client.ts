// Query keys factory
export const queryKeys = {
  problems: {
    all: ['problems'] as const,
    lists: () => [...queryKeys.problems.all, 'list'] as const,
    list: (filters: any) => [...queryKeys.problems.lists(), filters] as const,
    details: () => [...queryKeys.problems.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.problems.details(), slug] as const,
    tags: () => [...queryKeys.problems.all, 'tags'] as const,
  },
  submissions: {
    all: ['submissions'] as const,
    lists: () => [...queryKeys.submissions.all, 'list'] as const,
    list: (problemId?: string) => [...queryKeys.submissions.lists(), { problemId }] as const,
    details: () => [...queryKeys.submissions.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.submissions.details(), id] as const,
  },
  user: {
    all: ['user'] as const,
    profile: () => [...queryKeys.user.all, 'profile'] as const,
  },
} as const;
