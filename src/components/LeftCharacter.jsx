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
    <div className="absolute bottom-[60px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[20px] left-2 sm:left-6 md:left-16 lg:left-24 z-10 w-[140px] sm:w-[180px] md:w-[260px] lg:w-[300px] drop-shadow-xl">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
