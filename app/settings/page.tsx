import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <ComingSoon
          title="Settings"
          description="Manage your account preferences, notifications, privacy settings, and more."
        />
      </div>
    </DashboardLayout>
  );
}
