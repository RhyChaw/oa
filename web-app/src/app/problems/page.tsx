'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProblemCard } from '../../components/ui/problem-card';
import { Button } from '../../components/ui/button';
import { problemsAPI } from '../../lib/api';
import { queryKeys } from '../../lib/query-client';
import type { ProblemFilters } from '../../types';

const difficulties = ['all', 'easy', 'medium', 'hard'] as const;
const tags = ['array', 'string', 'tree', 'graph', 'dynamic-programming', 'greedy', 'sorting', 'searching'];

export default function ProblemsPage() {
  const [filters, setFilters] = useState<ProblemFilters>({
    page: 1,
    limit: 12,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: problemsData, isLoading, error } = useQuery({
    queryKey: queryKeys.problems.list(filters),
    queryFn: () => problemsAPI.getProblems(filters),
  });

  const { data: availableTags } = useQuery({
    queryKey: queryKeys.problems.tags(),
    queryFn: () => problemsAPI.getProblemTags(),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters(prev => ({
      ...prev,
      search: query || undefined,
      page: 1,
    }));
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setFilters(prev => ({
      ...prev,
      difficulty: difficulty === 'all' ? undefined : difficulty,
      page: 1,
    }));
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    setFilters(prev => ({
      ...prev,
      tags: newTags.length > 0 ? newTags : undefined,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Problems</h2>
          <p className="text-gray-600 mb-4">There was an error loading the problems. Please try again.</p>
          <Button onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Coding Problems</h1>
          <p className="text-slate-700 dark:text-slate-300">
            Practice coding with our curated collection of algorithmic problems
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Search Problems
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or description..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 bg-white dark:bg-slate-700"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => handleDifficultyChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === 'all' ? 'All Difficulties' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags?.data?.slice(0, 8).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {problemsData?.data?.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>

            {/* Pagination */}
            {problemsData?.pagination && problemsData.pagination.totalPages > 1 && (
              <div className="flex items-center justify-between bg-white px-4 py-3 border border-gray-200 rounded-lg">
                <div className="flex items-center text-sm text-gray-700">
                  Showing{' '}
                  <span className="font-medium">
                    {(problemsData.pagination.page - 1) * problemsData.pagination.limit + 1}
                  </span>{' '}
                  to{' '}
                  <span className="font-medium">
                    {Math.min(
                      problemsData.pagination.page * problemsData.pagination.limit,
                      problemsData.pagination.total
                    )}
                  </span>{' '}
                  of{' '}
                  <span className="font-medium">{problemsData.pagination.total}</span>{' '}
                  results
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(problemsData.pagination.page - 1)}
                    disabled={problemsData.pagination.page === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, problemsData.pagination.totalPages) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-1 text-sm rounded ${
                            page === problemsData.pagination.page
                              ? 'bg-blue-500 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(problemsData.pagination.page + 1)}
                    disabled={problemsData.pagination.page === problemsData.pagination.totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
