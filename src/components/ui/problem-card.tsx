import Link from 'next/link';
import { cn, getDifficultyColor, getDifficultyLabel } from '@/lib/utils';
import type { Problem } from '@/types';

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
        "block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
          {problem.title}
        </h3>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm font-medium text-slate-600">
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
      
      <p className="text-slate-700 text-sm mb-4 line-clamp-3">
        {problem.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {problem.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 text-slate-700 rounded-md"
            >
              {tag}
            </span>
          ))}
          {problem.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-slate-600">
              +{problem.tags.length - 3} more
            </span>
          )}
        </div>
        
        {problem.timeLimit && (
          <span className="text-xs text-slate-600">
            {problem.timeLimit}s limit
          </span>
        )}
      </div>
    </Link>
  );
}
