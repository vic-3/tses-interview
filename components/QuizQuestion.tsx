'use client';

import { useState } from 'react';

interface Option {
  id: string;
  text: string;
}

interface QuizQuestionProps {
  questionNumber: number;
  question: string;
  type: 'multiple-choice' | 'short-answer';
  points: number;
  options?: Option[];
}

export default function QuizQuestion({
  questionNumber,
  question,
  type,
  points,
  options = [],
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [shortAnswer, setShortAnswer] = useState<string>('');

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
      {/* Question Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
          {questionNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-2">{question}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="capitalize">{type.replace('-', ' ')}</span>
            <span>•</span>
            <span>{points} points</span>
          </div>
        </div>
      </div>

      {/* Options */}
      {type === 'multiple-choice' && (
        <div className="ml-12 space-y-3">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{option.text}</span>
            </label>
          ))}
        </div>
      )}

      {/* Short Answer */}
      {type === 'short-answer' && (
        <div className="ml-12">
          <textarea
            value={shortAnswer}
            onChange={(e) => setShortAnswer(e.target.value)}
            placeholder="Enter answer here"
            className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
      )}
    </div>
  );
}
