'use client';

import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import VideoPlayer from '@/components/VideoPlayer';
import LessonTabs from '@/components/LessonTabs';
import LessonContent from '@/components/LessonContent';
import CurriculumSidebar from '@/components/CurriculumSidebar';
import { useAppDispatch } from '@/lib/store/hooks';
import { initializeLessons } from '@/lib/store/features/lessonsSlice';

// Mock curriculum data
const curriculumSections = [
  {
    id: 'intro',
    title: 'Introduction',
    isExpanded: true,
    lessons: [
      { id: '1', title: 'Welcome Message', isActive: true },
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
    id: 'getting-started',
    title: 'Getting Started',
    isExpanded: false,
    lessons: [
      { id: '11', title: 'First Steps', isActive: false },
      { id: '12', title: 'Setting Goals', isActive: false },
    ],
  },
  {
    id: 'assessment',
    title: 'Assessment',
    isExpanded: false,
    lessons: [
      { id: 'quiz', title: 'Quiz', isActive: false, href: '/courses/1/assessment' },
    ],
  },
];

const lessonContent = `
<p>Welcome to "Communicate with Confidence"! In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial. This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.</p>

<h3>Why Communication Matters</h3>

<p>Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount. This course aims to illuminate the significance of communication and provide you with the tools necessary to excel.</p>

<h3>What You'll Learn</h3>

<p>Throughout this course, you will delve into various aspects of communication, each designed to build upon the last, creating a robust foundation for your skills:</p>

<p><strong>1. Clear Articulation:</strong> You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.</p>

<p><strong>2. Active Listening:</strong> Developing the ability to listen actively is crucial. You will practice techniques that enhance your listening skills, enabling you to fully engage with others and respond thoughtfully.</p>

<p><strong>3. Confident Conversations:</strong> Navigating challenging discussions can be daunting. This course will provide you with strategies to approach these conversations with poise and assurance, transforming potential conflicts into constructive dialogues.</p>

<p><strong>4. Non-Verbal Communication:</strong> Communication is not just about words. You will explore the nuances of non-verbal cues, such as body language and facial expressions, and learn how to utilize them to reinforce your message.</p>

<p><strong>5. Persuasive Language:</strong> Crafting compelling arguments is an art. You will learn how to influence others positively through the use of persuasive language, enabling you to advocate for your ideas effectively.</p>

<h3>Building a Collaborative Environment</h3>

<p>Mastering these skills will not only enhance your personal communication but will also contribute to building stronger interpersonal relationships within your team. A collaborative work environment is vital for team success, and effective communication is the key to fostering this atmosphere. You will learn how to create an inclusive environment where ideas can flourish, and everyone feels valued.</p>

<h3>Course Outcomes</h3>

<p>By the end of this transformative course, you will be equipped to:</p>

<ul>
<li>Communicate effectively in any situation, whether in meetings, presentations, or casual conversations.</li>
<li>Navigate complex challenges with confidence, turning potential obstacles into opportunities for growth.</li>
<li>Contribute significantly to your organization's success through improved communication practices, fostering a culture of openness and collaboration.</li>
</ul>

<p>Join us on this journey to transform your communication skills and unlock new heights in your career! Together, we will explore the depths of effective communication, ensuring that you emerge not just as a better communicator, but as a leader in your field.</p>
`;

export default function CourseDescriptionPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Initialize lessons in Redux store
  useEffect(() => {
    const allLessons = curriculumSections.flatMap((section) =>
      section.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        sectionId: section.id,
        isCompleted: false,
      }))
    );
    dispatch(initializeLessons(allLessons));
  }, [dispatch]);

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

          {/* Video Player */}
          <div className="mb-6">
            <VideoPlayer />
          </div>

          {/* Lesson Content Tabs */}
          <LessonTabs>
            <LessonContent
              lessonId="1"
              lessonNumber={1}
              title="Welcome Message"
              content={lessonContent}
            />
          </LessonTabs>
        </div>
      </main>

      {/* Curriculum Sidebar */}
      <CurriculumSidebar
        sections={curriculumSections}
        totalLessons={13}
      />
    </div>
  );
}
