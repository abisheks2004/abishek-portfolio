import React from 'react';
import Lottie from 'lottie-react';
import devCharacter from '../assets/dev-character.json';

export default function LeftCharacter() {
  return (
    <div className="absolute bottom-[60px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[20px] left-2 sm:left-6 md:left-16 lg:left-24 z-10 w-[140px] sm:w-[180px] md:w-[260px] lg:w-[300px] drop-shadow-xl">
      <Lottie animationData={devCharacter} loop autoplay />
    </div>
  );
}
