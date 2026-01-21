'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoPlayerProps {
  thumbnail?: string;
  title?: string;
}

export default function VideoPlayer({
  thumbnail = '/banner.png',
  title = 'Course Video'
}: VideoPlayerProps) {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video group cursor-pointer">
      {/* Thumbnail */}
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="text-blue-600 ml-1" size={28} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
