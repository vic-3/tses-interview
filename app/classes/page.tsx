import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function ClassesPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <ComingSoon
          title="Classes"
          description="Manage live classes, schedule sessions, and interact with instructors in real-time."
        />
      </div>
    </DashboardLayout>
  );
}
