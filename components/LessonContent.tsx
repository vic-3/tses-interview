'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { markLessonComplete, markLessonIncomplete } from '@/lib/store/features/lessonsSlice';
import { Check } from 'lucide-react';

interface LessonContentProps {
  lessonId: string;
  lessonNumber: number;
  title: string;
  content: string;
}

export default function LessonContent({
  lessonId,
  lessonNumber,
  title,
  content,
}: LessonContentProps) {
  const dispatch = useAppDispatch();
  const lesson = useAppSelector((state) => state.lessons.lessons[lessonId]);
  const isCompleted = lesson?.isCompleted || false;

  const handleToggleComplete = () => {
    if (isCompleted) {
      dispatch(markLessonIncomplete(lessonId));
    } else {
      dispatch(markLessonComplete(lessonId));
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Lesson {lessonNumber} - {title}
      </h2>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Mark as Complete Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleToggleComplete}
          className={`px-8 py-2.5 rounded-lg transition-colors font-medium text-sm flex items-center gap-2 ${
            isCompleted
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          {isCompleted && <Check size={18} />}
          {isCompleted ? 'Completed' : 'Mark as complete'}
        </button>
      </div>
    </div>
  );
}
