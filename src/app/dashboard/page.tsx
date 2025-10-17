'use client';

import { useState } from 'react';
import { BarChart3, Clock, CheckCircle, XCircle, Trophy, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d');

  // Mock data - in a real app, this would come from the API
  const stats = {
    totalProblems: 156,
    solvedProblems: 23,
    submissions: 45,
    accuracy: 78.5,
    streak: 7,
    rank: 1247,
    points: 1250,
  };

  const recentSubmissions = [
    {
      id: '1',
      problem: 'Two Sum',
      difficulty: 'easy',
      status: 'accepted',
      language: 'JavaScript',
      time: '2 hours ago',
      runtime: '45ms',
    },
    {
      id: '2',
      problem: 'Add Two Numbers',
      difficulty: 'medium',
      status: 'wrong-answer',
      language: 'Python',
      time: '1 day ago',
      runtime: '120ms',
    },
    {
      id: '3',
      problem: 'Longest Substring',
      difficulty: 'medium',
      status: 'accepted',
      language: 'Java',
      time: '2 days ago',
      runtime: '89ms',
    },
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Problem Solved',
      description: 'Solved your first coding problem',
      icon: Target,
      earned: true,
      date: '2024-01-15',
    },
    {
      id: '2',
      title: 'Streak Master',
      description: 'Solved problems for 7 consecutive days',
      icon: Trophy,
      earned: true,
      date: '2024-01-20',
    },
    {
      id: '3',
      title: 'Speed Demon',
      description: 'Solved 5 problems in under 30 minutes each',
      icon: TrendingUp,
      earned: false,
      date: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-green-600 bg-green-50';
      case 'wrong-answer':
        return 'text-red-600 bg-red-50';
      case 'time-limit-exceeded':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your progress and coding journey</p>
        </div>

        {/* Time Range Selector */}
        <div className="mb-8">
          <div className="flex gap-2">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Problems Solved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.solvedProblems}/{stats.totalProblems}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">{stats.accuracy}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">{stats.streak} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Points</p>
                <p className="text-2xl font-bold text-gray-900">{stats.points}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Submissions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Submissions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div key={submission.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Link
                          href={`/problems/${submission.problem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="font-medium text-gray-900 hover:text-blue-600"
                        >
                          {submission.problem}
                        </Link>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(submission.difficulty)}`}
                        >
                          {submission.difficulty}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {submission.language} • {submission.time} • {submission.runtime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {submission.status === 'accepted' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(submission.status)}`}
                      >
                        {submission.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/submissions">
                  <Button variant="outline" className="w-full">
                    View All Submissions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Achievements</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center p-3 rounded-lg ${
                      achievement.earned ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                    >
                      <achievement.icon
                        className={`w-5 h-5 ${
                          achievement.earned ? 'text-green-600' : 'text-gray-400'
                        }`}
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3
                        className={`font-medium ${
                          achievement.earned ? 'text-green-900' : 'text-gray-500'
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          achievement.earned ? 'text-green-700' : 'text-gray-400'
                        }`}
                      >
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-green-600 mt-1">
                          Earned on {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    {achievement.earned && (
                      <div className="text-green-500">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/problems">
              <Button className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Browse Problems
              </Button>
            </Link>
            <Link href="/problems?difficulty=easy">
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="w-4 h-4 mr-2" />
                Practice Easy Problems
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
