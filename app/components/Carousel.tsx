'use client';

import { useState, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({ 
  children, 
  itemsPerView = 3,
  autoPlay = false,
  autoPlayInterval = 5000
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveItemsPerView, setResponsiveItemsPerView] = useState(itemsPerView);
  const totalItems = children.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setResponsiveItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setResponsiveItemsPerView(2);
      } else {
        setResponsiveItemsPerView(itemsPerView);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, totalItems - responsiveItemsPerView);

  useEffect(() => {
    if (autoPlay && totalItems > itemsPerView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, maxIndex, totalItems, itemsPerView]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  if (totalItems === 0) return null;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / responsiveItemsPerView)}%)` }}
        >
          {children.map((child, index) => (
            <div
              key={`carousel-item-${index}`}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / responsiveItemsPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {totalItems > responsiveItemsPerView && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-500 group"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-500 group"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalItems > responsiveItemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={`carousel-dot-${index}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

