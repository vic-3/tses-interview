import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <ComingSoon
          title="Dashboard"
          description="Get insights into your learning progress, track your achievements, and see your course statistics at a glance."
        />
      </div>
    </DashboardLayout>
  );
}
