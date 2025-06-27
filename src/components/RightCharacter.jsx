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

  if (!animationData) return null; // Or a loading spinner

  return (
    <div className="absolute bottom-[60px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[80px] right-0 sm:right-4 md:right-16 lg:right-24 z-10 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] flex flex-col items-center">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
