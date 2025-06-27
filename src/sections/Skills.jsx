
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

const skills = {
  Frontend: [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ],
};

const cardColors = {
  Frontend: "from-pink-500 to-yellow-500",
  Backend: "from-green-500 to-blue-500",
  "Tools & Platforms": "from-purple-500 to-indigo-500",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-24 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className={`relative bg-gradient-to-br ${cardColors[category]} p-0.5 rounded-3xl hover:scale-105 transition duration-500`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-black rounded-3xl p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-2 h-10 bg-yellow-400 rounded-r-lg mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:bg-yellow-400 hover:text-black transition duration-300 transform hover:-translate-y-1 shadow-inner"
                    whileHover={{ rotateX: 5, rotateY: 5 }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
