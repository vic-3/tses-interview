'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CourseHeaderProps {
  title: string;
  category: string;
  categoryColor?: 'blue' | 'purple' | 'gray' | 'orange';
  buttonText?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
}

const categoryStyles = {
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  gray: 'bg-gray-100 text-gray-700',
  orange: 'bg-orange-50 text-orange-600',
};

export default function CourseHeader({
  title,
  category,
  categoryColor = 'blue',
  buttonText = 'Start Learning',
  onButtonClick,
  buttonHref,
}: CourseHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <span
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${categoryStyles[categoryColor]}`}
        >
          {category}
        </span>
      </div>
      {buttonHref ? (
        <Link
          href={buttonHref}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
        >
          {buttonText}
        </Link>
      ) : (
        <button
          onClick={onButtonClick}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
