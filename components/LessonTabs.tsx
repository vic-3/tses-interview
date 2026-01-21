'use client';

import { useState } from 'react';

interface LessonTabsProps {
  children: React.ReactNode;
}

export default function LessonTabs({ children }: LessonTabsProps) {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === 'content'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Course Content
          {activeTab === 'content' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === 'reviews'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Review/Feedbacks
          {activeTab === 'reviews' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'content' ? (
          children
        ) : (
          <div className="text-center py-12 text-gray-500">
            No reviews yet
          </div>
        )}
      </div>
    </div>
  );
}
