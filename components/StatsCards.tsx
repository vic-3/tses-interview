'use client';

import { BookOpen, Users, BarChart3 } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    label: 'Total courses',
    value: '123',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    label: 'Total Enrollments',
    value: '11',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: BarChart3,
    label: 'Avg Completion',
    value: '99%',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    badge: {
      text: '12% up from last month',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={stat.iconColor} size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                {stat.badge && (
                  <div className="mt-2 flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-green-600"
                    >
                      <path
                        d="M6 2L6 10M6 2L3 5M6 2L9 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs text-green-600 font-medium">
                      {stat.badge.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
