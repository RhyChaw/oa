'use client';

import { useState, useEffect } from 'react';
import { Code, Database } from 'lucide-react';

export function ExecutionToggle() {
  const [useRealExecution, setUseRealExecution] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check current execution mode
    const currentMode = localStorage.getItem('useRealExecution') === 'true';
    setUseRealExecution(currentMode);
  }, []);

  const handleToggle = async () => {
    setIsLoading(true);
    
    try {
      const newMode = !useRealExecution;
      
      // Update localStorage
      localStorage.setItem('useRealExecution', newMode.toString());
      
      // Update environment variable (for next page load)
      if (typeof window !== 'undefined') {
        // This will take effect on next page load
        setUseRealExecution(newMode);
      }
      
      // Show success message
      alert(`Switched to ${newMode ? 'real' : 'mock'} code execution. Refresh the page to apply changes.`);
    } catch (error) {
      console.error('Failed to toggle execution mode:', error);
      alert('Failed to toggle execution mode');
    } finally {
      setIsLoading(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleToggle}
        disabled={isLoading}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all
          ${useRealExecution 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-gray-500 hover:bg-gray-600 text-white'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        title={`Currently using ${useRealExecution ? 'real' : 'mock'} code execution`}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : useRealExecution ? (
          <Database className="w-4 h-4" />
        ) : (
          <Code className="w-4 h-4" />
        )}
        <span className="text-sm font-medium">
          {useRealExecution ? 'Real Execution' : 'Mock Execution'}
        </span>
      </button>
    </div>
  );
}
