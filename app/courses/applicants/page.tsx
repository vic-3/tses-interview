'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CourseHeader from '@/components/CourseHeader';
import ApplicantsStats from '@/components/ApplicantsStats';
import LearnersTable, { Learner } from '@/components/LearnersTable';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

// Mock learners data
const allLearners: Learner[] = [
  { id: '1', name: 'Nithya Menon', city: 'New York', email: 'nithya.menon@email.com', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Meera Gonzalez', city: 'Toronto', email: 'meera.gonzalez@email.com', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Monica Patel', city: 'Paris', email: 'monica.patel@email.com', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Dinesh Kumar', city: 'Tokyo', email: 'dinesh.kumar@email.com', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Karthik Subramanian', city: 'London', email: 'karthik.subramanian@email.com', avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: '6', name: 'Monica Patel', city: 'Paris', email: 'jagathesh.narayanan@email.com', avatar: 'https://i.pravatar.cc/150?img=7' },
  { id: '7', name: 'Jagathesh Narayanan', city: 'Berlin', email: 'jagathesh.narayanan@email.com', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: '8', name: 'Monica Patel', city: 'Paris', email: 'monica.patel@email.com', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '9', name: 'Nithya Menon', city: 'New York', email: 'nithya.menon@email.com', avatar: 'https://i.pravatar.cc/150?img=10' },
  { id: '10', name: 'Jagathesh Narayanan', city: 'Tokyo', email: 'dinesh.kumar@email.com', avatar: 'https://i.pravatar.cc/150?img=11' },
  // Add more learners for pagination
  { id: '11', name: 'Sarah Johnson', city: 'Sydney', email: 'sarah.johnson@email.com', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '12', name: 'David Lee', city: 'Singapore', email: 'david.lee@email.com', avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: '13', name: 'Emma Wilson', city: 'Dublin', email: 'emma.wilson@email.com', avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: '14', name: 'Raj Sharma', city: 'Mumbai', email: 'raj.sharma@email.com', avatar: 'https://i.pravatar.cc/150?img=15' },
  { id: '15', name: 'Lisa Chen', city: 'Beijing', email: 'lisa.chen@email.com', avatar: 'https://i.pravatar.cc/150?img=16' },
  { id: '16', name: 'Ahmed Hassan', city: 'Dubai', email: 'ahmed.hassan@email.com', avatar: 'https://i.pravatar.cc/150?img=17' },
  { id: '17', name: 'Sofia Martinez', city: 'Madrid', email: 'sofia.martinez@email.com', avatar: 'https://i.pravatar.cc/150?img=18' },
  { id: '18', name: 'James Anderson', city: 'Seattle', email: 'james.anderson@email.com', avatar: 'https://i.pravatar.cc/150?img=19' },
  { id: '19', name: 'Yuki Tanaka', city: 'Osaka', email: 'yuki.tanaka@email.com', avatar: 'https://i.pravatar.cc/150?img=20' },
  { id: '20', name: 'Maria Garcia', city: 'Barcelona', email: 'maria.garcia@email.com', avatar: 'https://i.pravatar.cc/150?img=21' },
];

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const learnersPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(allLearners.length / learnersPerPage);
  const startIndex = (currentPage - 1) * learnersPerPage;
  const endIndex = startIndex + learnersPerPage;
  const currentLearners = allLearners.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Course Header */}
        <CourseHeader
          title="Effective Workplace Communication"
          category="Soft Skill"
          categoryColor="blue"
          buttonText="Start Learning"
          buttonHref="/courses/1"
        />

        {/* Hero Image */}
        <div className="mb-6 rounded-xl overflow-hidden">
          <Image
            src="/banner.png"
            alt="Effective Workplace Communication"
            width={1200}
            height={300}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* Stats */}
        <ApplicantsStats totalApplicants={1223} activeLearners={13} />

        {/* Learners Table */}
        <LearnersTable learners={currentLearners} />

        {/* Pagination */}
        <div className="mt-6">
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
