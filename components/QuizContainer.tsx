'use client';

import { useState } from 'react';

interface QuizContainerProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

export default function QuizContainer({ children, onSubmit }: QuizContainerProps) {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div>
      {/* Quiz Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Quiz</h2>
      </div>

      {/* Questions */}
      <div className="mb-6">{children}</div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-12 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
