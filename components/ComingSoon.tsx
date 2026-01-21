import { Rocket } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({
  title,
  description = 'This feature is currently under development and will be available soon.',
}: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
            <Rocket className="text-blue-600" size={40} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
