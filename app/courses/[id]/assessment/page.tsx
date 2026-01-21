'use client';

import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import LessonTabs from '@/components/LessonTabs';
import QuizContainer from '@/components/QuizContainer';
import QuizQuestion from '@/components/QuizQuestion';
import CurriculumSidebar from '@/components/CurriculumSidebar';
import { useAppDispatch } from '@/lib/store/hooks';
import { initializeLessons } from '@/lib/store/features/lessonsSlice';

// Mock curriculum data with completed sections
const curriculumSections = [
  {
    id: 'intro',
    title: 'Introduction',
    isExpanded: false,
    lessons: [
      { id: '1', title: 'Welcome Message', isActive: false },
      { id: '2', title: 'A Note on Style', isActive: false },
      { id: '3', title: "What You'll Learn", isActive: false },
      { id: '4', title: 'Meet Your Instructor', isActive: false },
    ],
  },
  {
    id: 'setup',
    title: 'Setting Up Your Workspace',
    isExpanded: false,
    lessons: [
      { id: '5', title: 'Environment Setup', isActive: false },
      { id: '6', title: 'Tools Overview', isActive: false },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigating the Course',
    isExpanded: false,
    lessons: [
      { id: '7', title: 'Course Structure', isActive: false },
      { id: '8', title: 'How to Get Help', isActive: false },
    ],
  },
  {
    id: 'resources',
    title: 'Course Resources',
    isExpanded: false,
    lessons: [
      { id: '9', title: 'Downloadable Materials', isActive: false },
      { id: '10', title: 'Additional Reading', isActive: false },
    ],
  },
  {
    id: 'assessment',
    title: 'Assessment',
    isExpanded: true,
    lessons: [
      { id: 'quiz', title: 'Quiz', isActive: true, href: '/courses/1/assessment' },
    ],
  },
];

// Mock quiz questions
const quizQuestions = [
  {
    id: '1',
    question: 'What is the purpose of React Hooks?',
    type: 'multiple-choice' as const,
    points: 4,
    options: [
      { id: 'A', text: 'To use state and other React features in functional components' },
      { id: 'B', text: 'To create class components' },
      { id: 'C', text: 'To style React components' },
      { id: 'D', text: 'To handle routing in React applications' },
    ],
  },
  {
    id: '2',
    question: 'Which hook is used for side effects in React?',
    type: 'multiple-choice' as const,
    points: 4,
    options: [
      { id: 'A', text: 'To use state and other React features in functional components' },
      { id: 'B', text: 'To create class components' },
      { id: 'C', text: 'To style React components' },
      { id: 'D', text: 'To handle routing in React applications' },
    ],
  },
  {
    id: '3',
    question: 'Explain the Virtual DOM and its benefits',
    type: 'short-answer' as const,
    points: 10,
  },
  {
    id: '4',
    question: 'What is the purpose of React Hooks?',
    type: 'multiple-choice' as const,
    points: 4,
    options: [
      { id: 'A', text: 'To use state and other React features in functional components' },
      { id: 'B', text: 'To create class components' },
      { id: 'C', text: 'To style React components' },
      { id: 'D', text: 'To handle routing in React applications' },
    ],
  },
  {
    id: '5',
    question: 'Which hook is used for side effects in React?',
    type: 'multiple-choice' as const,
    points: 4,
    options: [
      { id: 'A', text: 'To use state and other React features in functional components' },
      { id: 'B', text: 'To create class components' },
      { id: 'C', text: 'To style React components' },
      { id: 'D', text: 'To handle routing in React applications' },
    ],
  },
  {
    id: '6',
    question: 'Explain the Virtual DOM and its benefits',
    type: 'short-answer' as const,
    points: 10,
  },
];

export default function AssessmentPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Initialize lessons in Redux store
  useEffect(() => {
    const allLessons = curriculumSections.flatMap((section) =>
      section.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        sectionId: section.id,
        isCompleted: section.id !== 'assessment', // Mark all sections as completed except assessment
      }))
    );
    dispatch(initializeLessons(allLessons));
  }, [dispatch]);

  const handleQuizSubmit = () => {
    console.log('Quiz submitted!');
    // Handle quiz submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="ml-[220px] mr-[280px] pt-[72px]">
        <div className="p-8">
          {/* Back Button & Title */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">
              Effective Workplace Communication
            </h1>
          </div>

          {/* Lesson Content Tabs */}
          <LessonTabs>
            <QuizContainer onSubmit={handleQuizSubmit}>
              {quizQuestions.map((question, index) => (
                <QuizQuestion
                  key={question.id}
                  questionNumber={index + 1}
                  question={question.question}
                  type={question.type}
                  points={question.points}
                  options={question.options}
                />
              ))}
            </QuizContainer>
          </LessonTabs>
        </div>
      </main>

      {/* Curriculum Sidebar */}
      <CurriculumSidebar sections={curriculumSections} totalLessons={12} />
    </div>
  );
}
