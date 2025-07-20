import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useInView } from "framer-motion";
import avatar from "../assets/profile1.jpg";

const stats = [
  { label: "Projects", value: 7 },
  { label: "Certifications", value: 10 },
  { label: "Coding Hours", value: 500 },
];

const timeline = [
  { year: "2022", event: "Started B.E. CSE at K.S.R. College of Engineering" },
  { year: "2022", event: "Completed HSC – 81.7%" },
  { year: "2020", event: "Completed SSLC – 92.8%" },
];

// ✅ Animated Counter Component
function ScrollCounter({ value, start }) {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    setCount(0);
    setFinished(false);

    const step = Math.ceil(value / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        setFinished(true);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <motion.span
      animate={finished ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.5 }}
      className="text-yellow-400 text-xl sm:text-2xl font-semibold"
    >
      {count}
      {finished && "+"}
    </motion.span>
  );
}

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 py-20 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Typewriter Intro */}
      <div className="text-center text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-4xl leading-relaxed">
        <Typewriter
          words={[
            "I'm Abishek — a passionate developer from Tamil Nadu.",
            "I love building full-stack apps with React and Node.js.",
            "I enjoy solving real-world problems with smart code.",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </div>

      {/* Avatar with Soft Glow */}
      <motion.div
        className="relative mb-6 flex justify-center items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ Soft pulsing glow */}
        <motion.div
          className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-yellow-400 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Avatar */}
        <img
          src={avatar}
          alt="Abishek"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 shadow-lg object-cover relative z-10"
        />
      </motion.div>

      {/* Role */}
      <p className="text-gray-400 text-center mb-10 text-sm sm:text-base">
        Full-Stack Developer
      </p>

      {/* Stats with Animated Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <ScrollCounter value={stat.value} start={isInView} />
            <div className="text-sm sm:text-base text-white">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Education Timeline */}
      <div className="max-w-3xl w-full space-y-4">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="border-l-4 border-yellow-500 pl-4 py-3 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-300 rounded-sm text-gray-300 shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
          >
            <div className="text-yellow-400 font-semibold flex items-center gap-2">
              <FaGraduationCap /> {item.year}
            </div>
            <div>{item.event}</div>
          </motion.div>
        ))}
      </div>

      {/* Resume View CTA */}
      <motion.a
        href="/ABISHEK.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 View Resume
      </motion.a>
    </section>
  );
};

export default About;
