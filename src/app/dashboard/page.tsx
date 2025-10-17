'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Code, 
  User, 
  LogOut, 
  Filter, 
  Search, 
  Trophy, 
  Target, 
  Brain,
  Clock,
  CheckCircle,
  Circle,
  AlertCircle
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import type { Problem } from '@/lib/store';

export default function Dashboard() {
  const router = useRouter();
  const { user, progress, problems, setUser } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'solved' | 'in-progress' | 'ai-helped' | 'not-started'>('all');

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  const getStatusIcon = (status: Problem['status']) => {
    switch (status) {
      case 'solved':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-amber-400" />;
      case 'ai-helped':
        return <Brain className="w-4 h-4 text-electric-400" />;
      default:
        return <Circle className="w-4 h-4 text-navy-400" />;
    }
  };

  const getStatusColor = (status: Problem['status']) => {
    switch (status) {
      case 'solved':
        return 'status-solved';
      case 'in-progress':
        return 'status-in-progress';
      case 'ai-helped':
        return 'status-ai-helped';
      default:
        return 'status-not-started';
    }
  };

  const getDifficultyColor = (difficulty: Problem['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
    }
  };

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
    const matchesStatus = statusFilter === 'all' || problem.status === statusFilter;
    
    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  const solvedCount = progress.solved.length;
  const totalProblems = problems.length;
  const progressPercentage = totalProblems > 0 ? (solvedCount / totalProblems) * 100 : 0;

  const difficultyStats = {
    easy: problems.filter(p => p.difficulty === 'easy').length,
    medium: problems.filter(p => p.difficulty === 'medium').length,
    hard: problems.filter(p => p.difficulty === 'hard').length,
  };

  const solvedByDifficulty = {
    easy: problems.filter(p => p.difficulty === 'easy' && progress.solved.includes(p.id)).length,
    medium: problems.filter(p => p.difficulty === 'medium' && progress.solved.includes(p.id)).length,
    hard: problems.filter(p => p.difficulty === 'hard' && progress.solved.includes(p.id)).length,
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <nav className="bg-navy-800 border-b border-navy-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CodeMaster AI</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-navy-300">
              <User className="w-5 h-5" />
              <span>{user.name}</span>
              {user.guest && (
                <span className="text-xs bg-navy-700 px-2 py-1 rounded">Guest</span>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-navy-400 hover:text-white hover:bg-navy-700 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Profile Card */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-electric-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                    <p className="text-sm text-navy-400">{user.email}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-300">Problems Solved</span>
                    <span className="text-sm font-semibold text-white">{solvedCount}/{totalProblems}</span>
                  </div>
                  <div className="w-full bg-navy-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-electric-500 to-electric-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Hint Usage Stats */}
              <div className="card">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Hint Usage
                </h4>
                <div className="space-y-3">
                  {Object.entries(progress.hintUsage).map(([level, count]) => (
                    <div key={level} className="flex items-center justify-between">
                      <span className={`text-sm capitalize ${getDifficultyColor(level as Problem['difficulty'])} px-2 py-1 rounded`}>
                        {level}
                      </span>
                      <span className="text-sm text-navy-300">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difficulty Progress */}
              <div className="card">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Difficulty Progress
                </h4>
                <div className="space-y-3">
                  {Object.entries(difficultyStats).map(([level, total]) => {
                    const solved = solvedByDifficulty[level as keyof typeof solvedByDifficulty];
                    const percentage = total > 0 ? (solved / total) * 100 : 0;
                    return (
                      <div key={level}>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm capitalize ${getDifficultyColor(level as Problem['difficulty'])} px-2 py-1 rounded`}>
                            {level}
                          </span>
                          <span className="text-sm text-navy-300">{solved}/{total}</span>
                        </div>
                        <div className="w-full bg-navy-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              level === 'easy' ? 'bg-emerald-500' :
                              level === 'medium' ? 'bg-amber-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">Problem Dashboard</h1>
                  <p className="text-navy-300">Choose a challenge and start coding with AI guidance</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-navy-300">
                    {solvedCount} problem{solvedCount !== 1 ? 's' : ''} solved
                  </span>
                </div>
              </div>

              {/* Filters */}
              <div className="card">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" size={18} />
                      <input
                        type="text"
                        placeholder="Search problems..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <select
                      value={difficultyFilter}
                      onChange={(e) => setDifficultyFilter(e.target.value as any)}
                      className="px-3 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                    >
                      <option value="all">All Difficulties</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="px-3 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                    >
                      <option value="all">All Status</option>
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="ai-helped">AI Helped</option>
                      <option value="solved">Solved</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Problem List */}
              <div className="grid gap-4">
                {filteredProblems.length === 0 ? (
                  <div className="card text-center py-12">
                    <AlertCircle className="w-12 h-12 text-navy-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No problems found</h3>
                    <p className="text-navy-300">Try adjusting your search or filter criteria</p>
                  </div>
                ) : (
                  filteredProblems.map((problem, index) => (
                    <motion.div
                      key={problem.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => router.push(`/problems/${problem.slug}`)}
                      className="card card-hover cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(problem.status)}
                            <h3 className="text-lg font-semibold text-white group-hover:text-electric-400 transition-colors">
                              {problem.title}
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-navy-300 mb-3">{problem.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-navy-400">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {problem.difficulty === 'easy' ? '15-30 min' : 
                               problem.difficulty === 'medium' ? '30-60 min' : '60+ min'}
                            </span>
                            <span className="flex items-center">
                              <Brain className="w-4 h-4 mr-1" />
                              {problem.hints[problem.difficulty].length} hints available
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(problem.status)}`} />
                          <span className="text-sm text-navy-400 capitalize">
                            {problem.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
