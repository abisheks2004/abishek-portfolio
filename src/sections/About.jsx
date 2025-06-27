import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/profile1.jpg";

const stats = [
  { label: "Projects", value: 5 },
  { label: "Certifications", value: 3 },
  { label: "Coding Hours", value: 500 },
];

const timeline = [
  { year: "2022", event: "Started B.E. CSE at K.S.R. College of Engineering" },
  { year: "2022", event: "Completed HSC – 81.7%" },
  { year: "2020", event: "Completed SSLC – 92.8%" },

];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 py-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        About Me
      </motion.h2>

      <div className="text-center text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-4xl leading-relaxed">
        <Typewriter
          words={[
            "I'm Abishek — a passionate developer from Tamil Nadu.",
            "I love building full-stack apps with React and Node.",
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

      <motion.div
        className="relative mb-14"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="absolute w-40 h-40 bg-yellow-500 rounded-full blur-2xl opacity-20 -z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src={avatar}
          alt="Abishek"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-yellow-400 text-xl sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>{stat.value}+</div>
            <div className="text-sm sm:text-base text-white">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl w-full space-y-4">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="border-l-4 border-yellow-500 pl-4 py-3 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-300 rounded-sm text-gray-300 shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-yellow-400 font-semibold">{item.year}</div>
            <div>{item.event}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
