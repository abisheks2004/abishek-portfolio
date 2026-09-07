import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LeftCharacter() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/dev-character.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);
  if (!animationData) return null; 

  return (
    <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-2 sm:left-6 md:left-12 lg:left-20 z-10 w-[110px] sm:w-[160px] md:w-[230px] lg:w-[280px] drop-shadow-xl pointer-events-none select-none transition-all duration-300">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
