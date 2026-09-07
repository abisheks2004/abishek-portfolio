import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function RightCharacter() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/view-character.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  if (!animationData) return null; 

  return (
    <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-1 sm:right-6 md:right-12 lg:right-20 z-10 w-[120px] sm:w-[170px] md:w-[230px] lg:w-[280px] flex flex-col items-center pointer-events-none select-none transition-all duration-300">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
