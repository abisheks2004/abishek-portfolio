import React from 'react';
import Lottie from 'lottie-react';
import viewerAnimation from '../assets/view-character.json';

export default function RightCharacter() {
  return (
    <div className="absolute bottom-[60px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[80px] right-0 sm:right-4 md:right-16 lg:right-24 z-10 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] flex flex-col items-center">
      <Lottie animationData={viewerAnimation} loop autoplay />
    </div>
  );
}
