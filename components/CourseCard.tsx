'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  categoryColor?: 'gray' | 'purple' | 'orange';
}

const categoryStyles = {
  gray: 'bg-gray-100 text-gray-700',
  purple: 'bg-purple-100 text-purple-700',
  orange: 'bg-orange-100 text-orange-700',
};

export default function CourseCard({
  id = '1',
  title,
  description,
  category,
  image,
  categoryColor = 'gray',
}: CourseCardProps) {
  return (
    <Link href={`/courses/applicants`} className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Image */}
      <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Category badge */}
        <span
          className={`inline-block px-3 py-1.5 rounded-md text-xs font-medium ${categoryStyles[categoryColor]}`}
        >
          {category}
        </span>
      </div>
    </Link>
  );
}
