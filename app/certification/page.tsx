import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function CertificationPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <ComingSoon
          title="My Certification"
          description="View and download your earned certificates, and track your certification progress."
        />
      </div>
    </DashboardLayout>
  );
}
