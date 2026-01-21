'use client';

import { Users, UserCheck } from 'lucide-react';

interface ApplicantsStatsProps {
  totalApplicants: number;
  activeLearners: number;
}

export default function ApplicantsStats({
  totalApplicants,
  activeLearners,
}: ApplicantsStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <Users className="text-green-600" size={24} strokeWidth={2} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Applicants</p>
            <p className="text-3xl font-semibold text-gray-900">{totalApplicants}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-50 p-3 rounded-lg">
            <UserCheck className="text-cyan-600" size={24} strokeWidth={2} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Active Learners</p>
            <p className="text-3xl font-semibold text-gray-900">{activeLearners}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
