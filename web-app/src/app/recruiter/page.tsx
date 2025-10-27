'use client';

import { useState } from 'react';
import { 
  Home, FileText, Users, Brain, FileBarChart, Settings, 
  TrendingUp, Clock, Award, Search, Plus, Bell, User,
  Filter, Download, Share2, Eye, CheckCircle, XCircle, Clock as ClockIcon
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

type TabType = 'dashboard' | 'assessments' | 'candidates' | 'insights' | 'reports' | 'settings';

export default function RecruiterPage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: Home },
    { id: 'assessments' as TabType, label: 'Assessments', icon: FileText },
    { id: 'candidates' as TabType, label: 'Candidates', icon: Users },
    { id: 'insights' as TabType, label: 'AI Insights', icon: Brain },
    { id: 'reports' as TabType, label: 'Reports', icon: FileBarChart },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
  ];

  const overviewCards = [
    {
      title: 'Active Assessments',
      value: '12',
      icon: FileText,
      color: '#2563EB',
      trend: '+3 this week',
      subtext: '856 total candidates'
    },
    {
      title: 'Pending Reviews',
      value: '23',
      icon: Clock,
      color: '#FBBF24',
      trend: '↓ 12% from last week',
      subtext: 'Average 48h to review'
    },
    {
      title: 'Avg Candidate Score',
      value: '78%',
      icon: Award,
      color: '#10B981',
      trend: '↑ 5% improvement',
      subtext: 'Last 7 days'
    },
    {
      title: 'AI Confidence Index',
      value: '94',
      icon: Brain,
      color: '#8B5CF6',
      trend: 'Consistent grading',
      subtext: 'Platform accuracy'
    },
  ];

  const recentActivity = [
    { type: 'success', message: 'Jane Doe completed "Fullstack Engineer" task', time: '2h ago' },
    { type: 'warning', message: 'AI flagged unusual code pattern in John\'s submission', time: '4h ago' },
    { type: 'success', message: 'Assessment "E-commerce Build" published successfully', time: '6h ago' },
    { type: 'info', message: 'New candidate: Sarah Chen started "Backend API Challenge"', time: '8h ago' },
  ];

  const assessments = [
    { id: '1', name: 'Fullstack Engineer', candidates: 145, avgScore: 84, status: 'active', updated: '2 days ago' },
    { id: '2', name: 'React Developer', candidates: 92, avgScore: 76, status: 'active', updated: '1 week ago' },
    { id: '3', name: 'Backend API Challenge', candidates: 67, avgScore: 89, status: 'active', updated: '3 days ago' },
    { id: '4', name: 'Node.js Engineer', candidates: 43, avgScore: 91, status: 'active', updated: '5 days ago' },
  ];

  const candidates = [
    { id: '1', name: 'John Doe', assessment: 'E-commerce Build', status: 'completed', score: '83%', progress: 'Reviewed', notes: 'AI: Strong architecture, weak comments', submitted: '2h ago' },
    { id: '2', name: 'Jane Smith', assessment: 'React Developer', status: 'completed', score: '91%', progress: 'Approved', notes: 'AI: Excellent documentation', submitted: '5h ago' },
    { id: '3', name: 'Mike Johnson', assessment: 'Backend API', status: 'in-progress', score: '-', progress: 'Waiting', notes: '', submitted: '1d ago' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#E2E8F0] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-2 ${
                  activeTab === tab.id
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#64748B] hover:bg-[#F1F5F9]'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2">
                Welcome back, Sarah 👋
              </h1>
              <p className="text-lg text-[#64748B]">
                Here&apos;s how your assessments and candidates are performing today.
              </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-[${card.color}]/10`} style={{ backgroundColor: `${card.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: card.color }} />
                      </div>
                      <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div className="mb-2">
                      <div className="text-3xl font-extrabold text-[#1E293B]">{card.value}</div>
                      <div className="text-sm text-[#64748B] mt-1">{card.title}</div>
                    </div>
                    <div className="text-xs text-[#64748B]">{card.trend}</div>
                    <div className="text-xs text-[#94A3B8] mt-1">{card.subtext}</div>
                  </div>
                );
              })}
            </div>

            {/* Graph Section */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6">
              <h2 className="text-xl font-bold text-[#1E293B] mb-6">Candidate Performance</h2>
              {/* Placeholder for graph */}
              <div className="h-64 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-[#2563EB] mx-auto mb-2" />
                  <p className="text-[#64748B]">Performance chart will appear here</p>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6">
              <h2 className="text-xl font-bold text-[#1E293B] mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#F8FAFC] rounded-lg hover:bg-[#F1F5F9] transition-colors">
                    <div className={`mt-1 ${activity.type === 'success' ? 'text-[#10B981]' : activity.type === 'warning' ? 'text-[#FBBF24]' : 'text-[#2563EB]'}`}>
                      {activity.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                       activity.type === 'warning' ? <ClockIcon className="w-5 h-5" /> :
                       <Eye className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1E293B] font-medium">{activity.message}</p>
                      <p className="text-xs text-[#64748B] mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Assessments Tab */}
        {activeTab === 'assessments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-[#1E293B]">Assessments</h1>
              <div className="flex items-center gap-3">
                <Filter className="w-4 h-4 text-[#64748B]" />
                <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Assessment
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessments.map((assessment) => (
                <div key={assessment.id} className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1E293B] mb-1">{assessment.name}</h3>
                      <span className="text-xs px-2 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full">
                        {assessment.status}
                      </span>
                    </div>
                    <button className="p-1 hover:bg-[#F1F5F9] rounded">
                      <Share2 className="w-4 h-4 text-[#64748B]" />
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Candidates:</span>
                      <span className="font-semibold text-[#1E293B]">{assessment.candidates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Avg Score:</span>
                      <span className="font-semibold text-[#10B981]">{assessment.avgScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Last Updated:</span>
                      <span className="text-[#1E293B]">{assessment.updated}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Candidates Tab */}
        {activeTab === 'candidates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-[#1E293B]">Candidates</h1>
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">Assessment</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">AI Notes</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-[#64748B] uppercase tracking-wider">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {candidates.map((candidate) => (
                      <tr key={candidate.id} className="hover:bg-[#F8FAFC] transition-colors cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-[#1E293B]">{candidate.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#64748B]">{candidate.assessment}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {candidate.status === 'completed' ? (
                            <span className="px-2 py-1 text-xs bg-[#10B981]/10 text-[#10B981] rounded-full font-medium">
                              Completed
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs bg-[#FBBF24]/10 text-[#FBBF24] rounded-full font-medium">
                              In Progress
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-semibold text-[#10B981]">{candidate.score}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#64748B] max-w-xs truncate">{candidate.notes || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#64748B]">{candidate.submitted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs - placeholder */}
        {activeTab === 'insights' && (
          <div className="max-w-4xl">
            <div className="text-center py-12">
              <Brain className="w-16 h-16 text-[#8B5CF6] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1E293B] mb-2">AI Insights</h2>
              <p className="text-[#64748B]">AI-powered analytics coming soon</p>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="max-w-4xl">
            <div className="text-center py-12">
              <FileBarChart className="w-16 h-16 text-[#2563EB] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1E293B] mb-2">Reports</h2>
              <p className="text-[#64748B]">Generate and export reports</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-4xl">
            <div className="text-center py-12">
              <Settings className="w-16 h-16 text-[#64748B] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1E293B] mb-2">Settings</h2>
              <p className="text-[#64748B]">Manage your organization settings</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
