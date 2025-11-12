'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0">
      <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 ring-4 ring-blue-500/20">
        {!imageError ? (
          <Image
            src="/profile.png"
            alt="Joshua Kinywa"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
            JK
          </div>
        )}
      </div>
    </div>
  );
}

