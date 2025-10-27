import Link from 'next/link';
import { cn, getDifficultyColor, getDifficultyLabel } from '../../lib/utils';
import type { Problem } from '../../types';

interface ProblemCardProps {
  problem: Problem;
  className?: string;
}

export function ProblemCard({ problem, className }: ProblemCardProps) {
  const difficultyColor = getDifficultyColor(problem.difficulty);
  const difficultyLabel = getDifficultyLabel(problem.difficulty);
  
  return (
    <Link
      href={`/problems/${problem.slug}`}
      className={cn(
        "block p-6 bg-white dark:bg-[#1C1F2E] border border-gray-200 dark:border-[#1C1F2E] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#00FFFF]/50",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-[#E5E7EB] line-clamp-2">
          {problem.title}
        </h3>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm font-medium text-slate-600 dark:text-[#9CA3AF]">
            {problem.points} pts
          </span>
          <span
            className={cn(
              "px-2 py-1 text-xs font-medium rounded-full border",
              difficultyColor
            )}
          >
            {difficultyLabel}
          </span>
        </div>
      </div>
      
      <p className="text-slate-700 dark:text-[#9CA3AF] text-sm mb-4 line-clamp-3">
        {problem.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {problem.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-slate-100 dark:bg-[#0A0A0A] text-slate-700 dark:text-[#9CA3AF] rounded-md"
            >
              {tag}
            </span>
          ))}
          {problem.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-slate-600 dark:text-[#9CA3AF]">
              +{problem.tags.length - 3} more
            </span>
          )}
        </div>
        
        {problem.timeLimit && (
          <span className="text-xs text-slate-600 dark:text-[#9CA3AF]">
            {problem.timeLimit}s limit
          </span>
        )}
      </div>
    </Link>
  );
}
