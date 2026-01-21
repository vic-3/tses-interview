'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StatsCards from '@/components/StatsCards';
import CourseCard from '@/components/CourseCard';
import Pagination from '@/components/Pagination';
import { Search, Calendar, ChevronDown } from 'lucide-react';

// Mock course data - 50 courses for pagination testing
const allCourses = [
  {
    title: 'Effective Workplace Communication',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/sidenav menu.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Mastering Interpersonal Skills',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Compliance & Policy',
    image: '/sidenav menu-2.png',
    categoryColor: 'purple' as const,
  },
  {
    title: 'Strengthening Team Cohesion',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/sidenav menu-3.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Enhancing Team Dialogue',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Digital Skills',
    image: '/sidenav menu-4.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Optimizing Group Dynamics',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Business & Strategy',
    image: '/sidenav menu-5.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Cultivating Open Communication',
    description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Onboarding',
    image: '/sidenav menu-6.png',
    categoryColor: 'orange' as const,
  },
  // Additional courses for pagination
  {
    title: 'Advanced Project Management',
    description: 'Master the art of managing complex projects with proven methodologies and tools...',
    category: 'Business & Strategy',
    image: '/sidenav menu.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Data Analytics Fundamentals',
    description: 'Learn to analyze and interpret data to make informed business decisions...',
    category: 'Digital Skills',
    image: '/sidenav menu-2.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Leadership Excellence',
    description: 'Develop essential leadership skills to inspire and guide your team effectively...',
    category: 'Soft Skill',
    image: '/sidenav menu-3.png',
    categoryColor: 'gray' as const,
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Protect your organization from cyber threats with comprehensive security training...',
    category: 'Compliance & Policy',
    image: '/sidenav menu-4.png',
    categoryColor: 'purple' as const,
  },
];

// Generate more courses to reach 50 total
const generateCourses = () => {
  const courses = [...allCourses];
  while (courses.length < 50) {
    courses.push(...allCourses.map((course, idx) => ({
      ...course,
      title: `${course.title} ${Math.floor(courses.length / 10) + 1}`,
    })));
  }
  return courses.slice(0, 50);
};

const courses = generateCourses();

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const coursesPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Course Management
          </h1>
          <p className="text-sm text-gray-600">
            Create, organize, and assign courses to teams and individuals
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Search Course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-4 pr-11 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 h-11 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <Calendar size={18} />
                <span>Date</span>
              </button>
              <button className="flex items-center gap-2 px-4 h-11 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span>Category</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {currentCourses.map((course, index) => (
              <CourseCard
                key={`${currentPage}-${index}`}
                title={course.title}
                description={course.description}
                category={course.category}
                image={course.image}
                categoryColor={course.categoryColor}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
