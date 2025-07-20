import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaLaptopCode } from "react-icons/fa";

// Timeline from certificates
const timeline = [
  {
    year: "May 2025",
    title: "EduSkills Web Development",
    desc: "Successfully completed Web Development certification at EduSkills Academy.",
    icon: <FaLaptopCode className="text-yellow-400 text-xl" />,
  },
  {
    year: "Oct 2024",
    title: "Hackathon Participation - KSR College",
    desc: "Participated in 'Enrich Your Knowledge' Hackathon organized by Dept. of CSE, KSR College of Engineering.",
    icon: <FaTrophy className="text-yellow-400 text-xl" />,
  },
  {
    year: "July 2024",
    title: "Internship at Rejola IT Services",
    desc: "Completed Internship program focused on real-time projects at Rejola IT Services.",
    icon: <FaAward className="text-yellow-400 text-xl" />,
  },
  {
    year: "Apr 2024",
    title: "NPTEL IoT Certification",
    desc: "Completed 'Introduction to Internet of Things' course with 85% from IIT Kharagpur via NPTEL.",
    icon: <FaCertificate className="text-yellow-400 text-xl" />,
  },
];

// Counters 
const counters = [
  { label: "Certificates", value: 10 },
  { label: "Hackathons", value: 2 },
  { label: "others", value: 5 },
];

//  Animated
function AnimatedCounter({ value, start }) {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    setCount(0);
    setFinished(false);

    const stepTime = 150;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) {
        clearInterval(interval);
        setFinished(true);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <motion.span
      className="text-4xl font-bold text-yellow-400"
      animate={finished ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}
      {finished && <span className="text-yellow-400">+</span>}
    </motion.span>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 }); 


  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center py-16 px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements 
      </motion.h2>

      {/*  Animated Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-20">
        {counters.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center bg-gray-900 border border-yellow-400/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <AnimatedCounter value={item.value} start={isInView} />
            <p className="text-sm mt-2 text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline with Boxes */}
      <div className="relative max-w-4xl w-full">
        {/* Center Vertical Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-yellow-400 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2 }}
        />

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className={`bg-gray-900 border-2 border-yellow-400/40 rounded-xl p-6 w-80 shadow-xl hover:shadow-yellow-400/30 transition-all relative ${
                  isLeft ? "ml-10" : "mr-10"
                }`}
              >
                {/* Icon */}
                <motion.div
                  className={`absolute top-6 ${
                    isLeft ? "-right-16" : "-left-16"
                  } w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/20 border border-yellow-400 shadow-lg`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Year */}
                <h3 className="text-xl font-bold text-yellow-400">{item.year}</h3>
                {/* Title */}
                <p className="font-semibold text-white">{item.title}</p>
                {/* Description */}
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
