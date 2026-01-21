'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, Circle, Check } from 'lucide-react';
import { useAppSelector } from '@/lib/store/hooks';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Lesson {
  id: string;
  title: string;
  isActive?: boolean;
  href?: string;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
  isExpanded?: boolean;
}

interface CurriculumSidebarProps {
  sections: Section[];
  totalLessons: number;
}

export default function CurriculumSidebar({
  sections,
  totalLessons,
}: CurriculumSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.filter(s => s.isExpanded).map(s => s.id)
  );

  const lessonsState = useAppSelector((state) => state.lessons.lessons);

  // Calculate completed lessons count
  const completedLessons = useMemo(() => {
    return Object.values(lessonsState).filter((lesson) => lesson.isCompleted).length;
  }, [lessonsState]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="w-[280px] bg-white border-l border-gray-200 h-screen overflow-y-auto fixed right-0 top-[72px]">
      <div className="p-4">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-1">
            Lessons ({completedLessons}/{totalLessons})
          </h3>
        </div>

        {/* Sections */}
        <div className="space-y-2">
          {sections.map((section) => {
            const isExpanded = expandedSections.includes(section.id);

            return (
              <div key={section.id} className="border-b border-gray-100 last:border-0">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {section.title}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div className="ml-4 mb-3 space-y-1">
                    {section.lessons.map((lesson) => {
                      const isCompleted = lessonsState[lesson.id]?.isCompleted || false;
                      const LessonComponent = lesson.href ? Link : 'button';
                      const lessonProps = lesson.href ? { href: lesson.href } : {};

                      return (
                        <LessonComponent
                          key={lesson.id}
                          {...lessonProps}
                          className={`w-full flex items-center gap-2 py-2 px-2 text-left rounded-lg text-sm transition-colors ${
                            lesson.isActive
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {isCompleted ? (
                            <Check
                              size={14}
                              className="text-green-600 flex-shrink-0"
                              strokeWidth={3}
                            />
                          ) : (
                            <Circle
                              size={8}
                              className={lesson.isActive ? 'text-blue-600' : 'text-gray-400'}
                              fill={lesson.isActive ? 'currentColor' : 'none'}
                            />
                          )}
                          <span className="flex-1">{lesson.title}</span>
                        </LessonComponent>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
