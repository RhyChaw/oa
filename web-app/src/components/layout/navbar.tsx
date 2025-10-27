'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Sun, Moon, LayoutDashboard, Settings, Code } from 'lucide-react';
import { useAppStore } from '../../lib/store';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="bg-[#0A0A0A] border-b border-[#1C1F2E] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-[#E5E7EB]">
              <span className="text-gradient">OA Platform</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/problems"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/problems' 
                    ? 'text-[#00FFFF] bg-[#00FFFF]/10' 
                    : 'text-[#9CA3AF] hover:text-[#00FFFF] hover:bg-[#1C1F2E]'
                }`}
              >
                <Code className="w-4 h-4" />
                Problems
              </Link>
              <Link
                href="/dashboard"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/dashboard' 
                    ? 'text-[#00FFFF] bg-[#00FFFF]/10' 
                    : 'text-[#9CA3AF] hover:text-[#00FFFF] hover:bg-[#1C1F2E]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/settings"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/settings' 
                    ? 'text-[#00FFFF] bg-[#00FFFF]/10' 
                    : 'text-[#9CA3AF] hover:text-[#00FFFF] hover:bg-[#1C1F2E]'
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-[#1C1F2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-[#E5E7EB] placeholder-[#6B7280] bg-[#1C1F2E] hover:border-[#00FFFF]/50 transition-colors"
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 text-[#9CA3AF] hover:text-[#00FFFF] hover:bg-[#1C1F2E] rounded-md transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* User menu placeholder */}
            <div className="flex items-center space-x-2">
              <Link
                href="/auth/signin"
                className="px-3 py-2 text-sm text-[#9CA3AF] hover:text-[#00FFFF] hover:bg-[#1C1F2E] rounded-md transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/recruiter"
                className="px-3 py-2 text-sm text-[#9CA3AF] hover:text-[#6C63FF] hover:bg-[#1C1F2E] rounded-md transition-colors"
              >
                Recruiter
              </Link>
              <Link
                href="/auth/signup"
                className="px-3 py-2 text-sm text-[#0A0A0A] bg-[#00FFFF] hover:bg-[#00FFFF]/90 rounded-md font-semibold transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
