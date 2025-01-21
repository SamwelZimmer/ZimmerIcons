"use client";

import React, { useEffect, useRef, useState } from "react";

const HorizontalScrollWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showStartGradient, setShowStartGradient] = useState(false);
  const [showEndGradient, setShowEndGradient] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowStartGradient(scrollLeft > 0);
      setShowEndGradient(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {showStartGradient && (
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      )}
      {showEndGradient && (
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      )}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center overflow-x-scroll scrollable-but-hidden-scrollbar space-x-1 pr-1"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollWrapper;
