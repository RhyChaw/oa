'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, ChevronLeft, ChevronRight, Code2, Rocket, Brain, Filter } from 'lucide-react';
import { ProblemCard } from '../../components/ui/problem-card';
import { ProjectCard } from '../../components/ui/project-card';
import { Button } from '../../components/ui/button';
import { problemsAPI } from '../../lib/api';
import { queryKeys } from '../../lib/query-client';
import type { ProblemFilters, Problem } from '../../types';

const difficulties = ['all', 'easy', 'medium', 'hard'] as const;
const categories = ['all', 'coding', 'fullstack', 'frontend', 'backend', 'data'] as const;
const durations = ['all', 'short', 'medium', 'long'] as const;

type TabType = 'algorithmic' | 'project';

export default function ProblemsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('algorithmic');
  const [filters, setFilters] = useState<ProblemFilters>({
    page: 1,
    limit: 12,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [aiAllowed, setAiAllowed] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  const { data: problemsData, isLoading, error } = useQuery({
    queryKey: queryKeys.problems.list(filters),
    queryFn: () => problemsAPI.getProblems(filters),
  });

  const { data: availableTags } = useQuery({
    queryKey: queryKeys.problems.tags(),
    queryFn: () => problemsAPI.getProblemTags(),
  });

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setFilters(prev => ({
      ...prev,
      type: tab === 'project' ? 'project' : 'algorithmic',
      page: 1,
    }));
  };

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilters(prev => ({
      ...prev,
      category: category === 'all' ? undefined : category,
      page: 1,
    }));
  };

  const handleAiAllowedChange = (aiAllowed: string) => {
    setAiAllowed(aiAllowed);
    setFilters(prev => ({
      ...prev,
      aiAllowed: aiAllowed === 'all' ? undefined : aiAllowed === 'allowed',
      page: 1,
    }));
  };

  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
    setFilters(prev => ({
      ...prev,
      duration: duration === 'all' ? undefined : duration as 'short' | 'medium' | 'long',
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

  // Separate algorithmic and project problems
  const algorithmicProblems = problemsData?.data?.filter(p => !p.type || p.type === 'algorithmic') || [];
  const projectProblems = problemsData?.data?.filter(p => p.type === 'project') || [];

  const currentProblems = activeTab === 'project' ? projectProblems : algorithmicProblems;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#E5E7EB] mb-2">Error Loading Assessments</h2>
          <p className="text-[#9CA3AF] mb-4">There was an error loading the assessments. Please try again.</p>
          <Button onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#E5E7EB] mb-2">Assessments</h1>
          <p className="text-[#9CA3AF] text-lg">
            From algorithmic challenges to AI-assisted project builds — test real engineering skills.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-2 border-b border-[#1C1F2E]">
            <button
              onClick={() => handleTabChange('algorithmic')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'algorithmic'
                  ? 'border-[#00FFFF] text-[#00FFFF]'
                  : 'border-transparent text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Algorithmic Problems
            </button>
            <button
              onClick={() => handleTabChange('project')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'project'
                  ? 'border-[#6C63FF] text-[#6C63FF]'
                  : 'border-transparent text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              <Rocket className="w-4 h-4" />
              Project Tasks
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search by title..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] placeholder-[#6B7280] bg-[#0A0A0A] hover:border-[#00FFFF]/50 transition-colors"
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => handleDifficultyChange(e.target.value)}
                className="w-full px-3 py-2 border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] bg-[#0A0A0A]"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === 'all' ? 'All Difficulties' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Type/Category Filter (for projects) */}
            {activeTab === 'project' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    Type
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-3 py-2 border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] bg-[#0A0A0A]"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Types' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    AI Assistance
                  </label>
                  <select
                    value={aiAllowed}
                    onChange={(e) => handleAiAllowedChange(e.target.value)}
                    className="w-full px-3 py-2 border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] bg-[#0A0A0A]"
                  >
                    <option value="all">All</option>
                    <option value="allowed">AI Allowed</option>
                    <option value="not-allowed">No AI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => handleDurationChange(e.target.value)}
                    className="w-full px-3 py-2 border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] bg-[#0A0A0A]"
                  >
                    {durations.map((dur) => (
                      <option key={dur} value={dur}>
                        {dur === 'all' ? 'All Durations' : dur.charAt(0).toUpperCase() + dur.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Spacer when not on project tab */}
            {activeTab === 'algorithmic' && (
              <>
                <div />
              </>
            )}
          </div>

          {/* Tags Filter */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-[#E5E7EB] mb-3">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags?.data?.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-[#00FFFF] text-[#0A0A0A] border-[#00FFFF]'
                      : 'bg-[#0A0A0A] text-[#9CA3AF] border-[#1C1F2E] hover:border-[#00FFFF]/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 animate-pulse">
                <div className="h-4 bg-[#0A0A0A] rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-[#0A0A0A] rounded w-1/2 mb-4"></div>
                <div className="h-3 bg-[#0A0A0A] rounded w-full mb-2"></div>
                <div className="h-3 bg-[#0A0A0A] rounded w-2/3 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-[#0A0A0A] rounded w-16"></div>
                  <div className="h-6 bg-[#0A0A0A] rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {currentProblems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="mb-6">
                  <Brain className="w-24 h-24 text-[#9CA3AF] opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">
                  No assessments found
                </h3>
                <p className="text-[#9CA3AF] text-center max-w-md">
                  No {activeTab === 'project' ? 'project tasks' : 'algorithmic problems'} found matching your filters. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className={`grid grid-cols-1 ${activeTab === 'project' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 mb-8`}>
                {currentProblems.map((problem) => (
                  activeTab === 'project' ? (
                    <ProjectCard key={problem.id} project={problem} />
                  ) : (
                    <ProblemCard key={problem.id} problem={problem} />
                  )
                ))}
              </div>
            )}

            {/* Pagination */}
            {problemsData?.pagination && problemsData.pagination.totalPages > 1 && (
              <div className="flex items-center justify-between bg-[#1C1F2E] px-4 py-3 border border-[#1C1F2E] rounded-lg">
                <div className="flex items-center text-sm text-[#9CA3AF]">
                  Showing{' '}
                  <span className="font-medium text-[#E5E7EB]">
                    {(problemsData.pagination.page - 1) * problemsData.pagination.limit + 1}
                  </span>{' '}
                  to{' '}
                  <span className="font-medium text-[#E5E7EB]">
                    {Math.min(
                      problemsData.pagination.page * problemsData.pagination.limit,
                      problemsData.pagination.total
                    )}
                  </span>{' '}
                  of{' '}
                  <span className="font-medium text-[#E5E7EB]">{problemsData.pagination.total}</span>{' '}
                  results
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(problemsData.pagination.page - 1)}
                    disabled={problemsData.pagination.page === 1}
                    className="border-[#1C1F2E] text-[#E5E7EB] hover:bg-[#0A0A0A]"
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
                              ? 'bg-[#00FFFF] text-[#0A0A0A]'
                              : 'text-[#9CA3AF] hover:bg-[#0A0A0A] hover:text-[#E5E7EB]'
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
                    className="border-[#1C1F2E] text-[#E5E7EB] hover:bg-[#0A0A0A]"
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
