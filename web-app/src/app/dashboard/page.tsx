'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, Rocket, Code2, TrendingUp, Trophy, Target, Zap, Flame, 
  CheckCircle, Clock, Award, Activity, BarChart3,
  Gauge, Sparkles, ArrowRight, Check, Filter
} from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d');

  // Comprehensive stats
  const stats = {
    aiUtilization: 42, // % of code generated with AI assistance
    projectsCompleted: 8,
    codeQualityScore: 87,
    problemAccuracy: 78.5,
    streak: 12,
    totalPoints: 3420,
  };

  // Performance chart data (mock)
  const chartData = [
    { day: 'Mon', submissions: 4, aiUsed: 2 },
    { day: 'Tue', submissions: 6, aiUsed: 3 },
    { day: 'Wed', submissions: 3, aiUsed: 1 },
    { day: 'Thu', submissions: 5, aiUsed: 2 },
    { day: 'Fri', submissions: 7, aiUsed: 4 },
    { day: 'Sat', submissions: 2, aiUsed: 1 },
    { day: 'Sun', submissions: 4, aiUsed: 1 },
  ];

  // Combined activity feed (problems + projects)
  const recentActivity = [
    {
      id: '1',
      type: 'project',
      title: 'Build a Chat App',
      status: 'in-progress',
      aiUsed: true,
      language: 'React',
      time: '2 hours ago',
      progress: 65,
      skills: ['React', 'Firebase', 'Socket.io'],
    },
    {
      id: '2',
      type: 'problem',
      title: 'Longest Substring',
      status: 'accepted',
      aiUsed: false,
      language: 'JavaScript',
      difficulty: 'medium',
      time: '3 hours ago',
      runtime: '45ms',
    },
    {
      id: '3',
      type: 'problem',
      title: 'Two Sum',
      status: 'accepted',
      aiUsed: true,
      language: 'Python',
      difficulty: 'easy',
      time: '1 day ago',
      runtime: '120ms',
    },
    {
      id: '4',
      type: 'project',
      title: 'Design an API',
      status: 'completed',
      aiUsed: true,
      language: 'Node.js',
      time: '2 days ago',
      skills: ['Express', 'PostgreSQL', 'JWT'],
    },
  ];

  // Grouped achievements
  const achievements = {
    milestones: [
      { id: '1', title: 'First Problem', description: 'Solved your first problem', earned: true, progress: 100 },
      { id: '2', title: 'Project Master', description: 'Complete 5 projects', earned: true, progress: 100 },
      { id: '3', title: 'Perfect Week', description: 'Solve problems 7 days in a row', earned: false, progress: 12 },
    ],
    aiMastery: [
      { id: '4', title: 'AI Efficient', description: 'Use AI in 50% of submissions', earned: true, progress: 100 },
      { id: '5', title: 'Prompt Master', description: 'Get 10 AI suggestions', earned: false, progress: 70 },
    ],
    performance: [
      { id: '6', title: 'Top 10%', description: 'Reach top 10% accuracy', earned: false, progress: 65 },
      { id: '7', title: 'Speed Demon', description: 'Solve 5 problems in 30min', earned: false, progress: 40 },
    ],
  };

  // Growth insights
  const insights = [
    {
      icon: Brain,
      title: 'AI Efficiency',
      message: 'You write 58% of code manually — consider refining your AI prompts for efficiency.',
      color: 'text-[#00FFFF]',
      bgColor: 'bg-[#00FFFF]/10',
    },
    {
      icon: TrendingUp,
      title: 'Quality Improvement',
      message: 'Your documentation quality improved by 15% this week. Keep commenting your logic!',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-green-500';
      case 'completed':
        return 'text-[#00FFFF]';
      case 'in-progress':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'hard':
        return 'bg-red-500/20 text-red-500 border-red-500/30';
      default:
        return 'bg-[#1C1F2E] text-[#9CA3AF] border-[#1C1F2E]';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-[#E5E7EB]">Developer Dashboard</h1>
            <span className="px-3 py-1 text-xs font-semibold bg-[#00FFFF]/20 text-[#00FFFF] rounded-full border border-[#00FFFF]/30">
              BETA
            </span>
          </div>
          <p className="text-[#9CA3AF] text-lg">Track your growth, projects, and AI coding journey.</p>
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
                className={timeRange === range ? 'bg-[#00FFFF] text-[#0A0A0A]' : 'border-[#1C1F2E] text-[#9CA3AF] hover:bg-[#1C1F2E]'}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* AI Utilization */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 hover:border-[#00FFFF]/50 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#00FFFF]/20 rounded-lg">
                <Brain className="w-6 h-6 text-[#00FFFF]" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-[#9CA3AF]">AI Utilization</p>
              <p className="text-3xl font-bold text-[#E5E7EB]">{stats.aiUtilization}%</p>
            </div>
            <div className="w-full bg-[#0A0A0A] rounded-full h-2">
              <div className="bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] h-2 rounded-full" style={{ width: `${stats.aiUtilization}%` }} />
            </div>
            <p className="text-xs text-[#9CA3AF] mt-2">Code generated with AI</p>
          </div>

          {/* Projects Completed */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 hover:border-[#6C63FF]/50 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#6C63FF]/20 rounded-lg">
                <Rocket className="w-6 h-6 text-[#6C63FF]" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-[#9CA3AF]">Projects Completed</p>
              <p className="text-3xl font-bold text-[#E5E7EB]">{stats.projectsCompleted}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <Zap className="w-3 h-3" />
              <span>2 in progress</span>
            </div>
          </div>

          {/* Code Quality Score */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 hover:border-[#3B82F6]/50 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#3B82F6]/20 rounded-lg">
                <Gauge className="w-6 h-6 text-[#3B82F6]" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-[#9CA3AF]">Code Quality</p>
              <p className="text-3xl font-bold text-[#E5E7EB]">{stats.codeQualityScore}%</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+5% this week</span>
            </div>
          </div>

          {/* Problem Accuracy */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 hover:border-[#00FFFF]/50 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Target className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-[#9CA3AF]">Accuracy</p>
              <p className="text-3xl font-bold text-[#E5E7EB]">{stats.problemAccuracy}%</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>45 correct</span>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6 hover:border-yellow-500/50 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Flame className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-[#9CA3AF]">Streak</p>
              <p className="text-3xl font-bold text-[#E5E7EB]">{stats.streak}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <Clock className="w-3 h-3" />
              <span>days active</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Graph */}
          <div className="lg:col-span-2 bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#E5E7EB]">Performance Activity</h2>
              <div className="flex gap-2">
                <Filter className="w-4 h-4 text-[#9CA3AF]" />
                <select className="bg-[#0A0A0A] border border-[#1C1F2E] text-[#E5E7EB] text-sm rounded px-3 py-1">
                  <option>All Types</option>
                  <option>Problems</option>
                  <option>Projects</option>
                </select>
              </div>
            </div>
            <div className="h-64 flex items-end gap-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col-reverse gap-1">
                    <div
                      className="bg-gradient-to-t from-[#00FFFF] to-[#6C63FF] rounded-t"
                      style={{ height: `${(item.submissions / 7) * 200}px`, width: '100%' }}
                    />
                    <div
                      className="bg-[#6C63FF] rounded-t"
                      style={{ height: `${(item.aiUsed / 7) * 100}px`, width: '100%' }}
                    />
                  </div>
                  <span className="text-xs text-[#9CA3AF]">{item.day}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-t from-[#00FFFF] to-[#6C63FF] rounded" />
                <span className="text-[#9CA3AF]">Submissions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6C63FF] rounded" />
                <span className="text-[#9CA3AF]">AI Used</span>
              </div>
            </div>
          </div>

          {/* Growth Insights */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
            <h2 className="text-lg font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00FFFF]" />
              Growth Insights
            </h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg ${insight.bgColor} border border-opacity-20`}>
                  <div className="flex items-center gap-2 mb-2">
                    <insight.icon className={`w-5 h-5 ${insight.color}`} />
                    <h3 className={`font-semibold text-sm ${insight.color}`}>{insight.title}</h3>
                  </div>
                  <p className="text-sm text-[#9CA3AF]">{insight.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E]">
            <div className="p-6 border-b border-[#1C1F2E]">
              <h2 className="text-lg font-bold text-[#E5E7EB] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#00FFFF]" />
                Recent Activity
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-[#1C1F2E] hover:border-[#00FFFF]/30 transition-all group"
                >
                  <div className={`p-2 rounded-lg ${activity.type === 'project' ? 'bg-[#6C63FF]/20' : 'bg-[#00FFFF]/20'}`}>
                    {activity.type === 'project' ? (
                      <Rocket className={`w-5 h-5 ${activity.type === 'project' ? 'text-[#6C63FF]' : 'text-[#00FFFF]'}`} />
                    ) : (
                      <Code2 className="w-5 h-5 text-[#00FFFF]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={`/problems/${activity.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <h3 className="font-semibold text-[#E5E7EB] hover:text-[#00FFFF] transition-colors">
                          {activity.title}
                        </h3>
                      </Link>
                      <span className="px-2 py-1 text-xs rounded-full border capitalize" style={{
                        backgroundColor: `${getStatusColor(activity.status)}/20`,
                        color: getStatusColor(activity.status),
                        borderColor: `${getStatusColor(activity.status)}/30`,
                      }}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-2">
                      <span>{activity.language}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                      {activity.aiUsed && (
                        <>
                          <span>•</span>
                          <span className="text-[#00FFFF] flex items-center gap-1">
                            <Brain className="w-3 h-3" />
                            AI Used
                          </span>
                        </>
                      )}
                    </div>
                    {activity.type === 'project' && activity.skills && (
                      <div className="flex flex-wrap gap-1">
                        {activity.skills.slice(0, 3).map((skill) => (
                          <span key={skill} className="px-2 py-0.5 text-xs bg-[#00FFFF]/10 text-[#00FFFF] rounded border border-[#00FFFF]/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {activity.difficulty && (
                      <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(activity.difficulty)}`}>
                        {activity.difficulty}
                      </span>
                    )}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#9CA3AF]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E]">
            <div className="p-6 border-b border-[#1C1F2E]">
              <h2 className="text-lg font-bold text-[#E5E7EB] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Achievements
              </h2>
            </div>
            <div className="p-6 space-y-6">
              {Object.entries(achievements).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-[#9CA3AF] mb-3 uppercase tracking-wider">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-3">
                    {items.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border ${
                          achievement.earned
                            ? 'bg-green-500/10 border-green-500/30'
                            : 'bg-[#0A0A0A] border-[#1C1F2E]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${
                            achievement.earned ? 'bg-green-500/20' : 'bg-[#1C1F2E]'
                          }`}>
                            <Award className={`w-5 h-5 ${achievement.earned ? 'text-green-500' : 'text-[#9CA3AF]'}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold ${achievement.earned ? 'text-green-500' : 'text-[#9CA3AF]'}`}>
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-[#9CA3AF] mt-0.5">{achievement.description}</p>
                          </div>
                          {achievement.earned && (
                            <Check className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                        {!achievement.earned && (
                          <div className="mt-2">
                            <div className="w-full bg-[#0A0A0A] rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] h-2 rounded-full"
                                style={{ width: `${achievement.progress}%` }}
                              />
                            </div>
                            <p className="text-xs text-[#9CA3AF] mt-1">{achievement.progress}% complete</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
          <h2 className="text-lg font-bold text-[#E5E7EB] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/problems?type=project">
              <Button className="w-full justify-start bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] font-semibold">
                <Rocket className="w-4 h-4 mr-2" />
                Start New Project
              </Button>
            </Link>
            <Link href="/problems">
              <Button variant="outline" className="w-full justify-start border-[#1C1F2E] text-[#E5E7EB] hover:bg-[#0A0A0A]">
                <Code2 className="w-4 h-4 mr-2" />
                Browse Problems
              </Button>
            </Link>
            <Link href="/dashboard?tab=analytics">
              <Button variant="outline" className="w-full justify-start border-[#1C1F2E] text-[#E5E7EB] hover:bg-[#0A0A0A]">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </Link>
            <Link href="/problems?difficulty=hard">
              <Button variant="outline" className="w-full justify-start border-[#1C1F2E] text-[#E5E7EB] hover:bg-[#0A0A0A]">
                <Zap className="w-4 h-4 mr-2" />
                Advanced Problems
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
