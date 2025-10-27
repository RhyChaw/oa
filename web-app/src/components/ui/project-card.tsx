import Link from 'next/link';
import { Clock, Brain, Code2, Zap, Check, X } from 'lucide-react';
import { cn, getDifficultyColor, getDifficultyLabel } from '../../lib/utils';
import type { Problem } from '../../types';
import { Button } from './button';

interface ProjectCardProps {
  project: Problem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const difficultyColor = getDifficultyColor(project.difficulty);
  const difficultyLabel = getDifficultyLabel(project.difficulty);
  
  const getDurationLabel = (hours?: number) => {
    if (!hours) return 'N/A';
    if (hours < 2) return 'Short (< 2 hrs)';
    if (hours < 4) return 'Medium (2-4 hrs)';
    return 'Long (4+ hrs)';
  };

  return (
    <Link
      href={`/problems/${project.slug}`}
      className={cn(
        "block p-6 bg-white dark:bg-[#1C1F2E] border border-[#1C1F2E] dark:border-[#1C1F2E] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#00FFFF]/50",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-[#E5E7EB] line-clamp-2 mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={cn("px-2 py-1 text-xs font-medium rounded-full border", difficultyColor)}>
              {difficultyLabel}
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-[#9CA3AF]">
              {project.points} pts
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-700 dark:text-[#9CA3AF] text-sm mb-4 line-clamp-2">
        {project.description.replace(/<[^>]*>/g, '').substring(0, 120)}...
      </p>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Duration */}
        {project.estimatedDuration && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00FFFF]" />
            <span className="text-xs text-slate-600 dark:text-[#9CA3AF]">
              {getDurationLabel(project.estimatedDuration)}
            </span>
          </div>
        )}

        {/* AI Status */}
        <div className="flex items-center gap-2">
          <Brain className={cn("w-4 h-4", project.aiAllowed ? 'text-[#00FFFF]' : 'text-[#9CA3AF]')} />
          <span className="text-xs text-slate-600 dark:text-[#9CA3AF] flex items-center gap-1">
            {project.aiAllowed ? (
              <>
                <Check className="w-3 h-3 text-green-500" />
                AI Allowed
              </>
            ) : (
              <>
                <X className="w-3 h-3 text-red-500" />
                No AI
              </>
            )}
          </span>
        </div>
      </div>

      {/* Skills */}
      {project.skills && project.skills.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-[#00FFFF]/10 text-[#00FFFF] dark:bg-[#00FFFF]/20 dark:text-[#00FFFF] rounded-md border border-[#00FFFF]/20"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 4 && (
              <span className="px-2 py-1 text-xs text-slate-600 dark:text-[#9CA3AF]">
                +{project.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-slate-100 dark:bg-[#0A0A0A] text-slate-700 dark:text-[#9CA3AF] rounded-md"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 text-xs text-slate-600 dark:text-[#9CA3AF]">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* CTA Button */}
      <Button 
        className="w-full bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] font-semibold"
        onClick={(e) => e.preventDefault()}
      >
        View Challenge
        <Zap className="ml-2 w-4 h-4" />
      </Button>
    </Link>
  );
}

