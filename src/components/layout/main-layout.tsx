'use client';

import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { ExecutionToggle } from '@/components/dev/execution-toggle';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

      {/* Development Toggle */}
      <ExecutionToggle />
    </div>
  );
}