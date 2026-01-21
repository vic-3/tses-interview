'use client';

import { Search, MessageSquare, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-8 fixed top-0 right-0 left-[220px] z-10">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search soludesk"
            className="w-full h-10 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Message icon */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
          <MessageSquare size={20} className="text-gray-600" />
          <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-blue-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center border-2 border-white">
            2
          </span>
        </button>

        {/* Notification icon */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center border-2 border-white">
            5
          </span>
        </button>

        {/* User profile */}
        <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="/profile.png"
              alt="Madison Greg"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">Madison Greg</p>
            <p className="text-xs text-gray-500">Madison.reertr...</p>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
    </header>
  );
}
