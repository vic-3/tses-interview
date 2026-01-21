'use client';

import Image from 'next/image';
import { MessageSquare } from 'lucide-react';

export interface Learner {
  id: string;
  name: string;
  city: string;
  email: string;
  avatar: string;
}

interface LearnersTableProps {
  learners: Learner[];
}

export default function LearnersTable({ learners }: LearnersTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                City
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Email Address
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {learners.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={learner.avatar}
                        alt={learner.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {learner.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{learner.city}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{learner.email}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MessageSquare size={18} className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
