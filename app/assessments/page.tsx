import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function AssessmentsPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <ComingSoon
          title="Assessments"
          description="Take quizzes and exams to test your knowledge and track your learning progress."
        />
      </div>
    </DashboardLayout>
  );
}
