import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FSLAKWS",
    description:
      "Real-time multilingual keyword spotting system with audio input,  transcription, and keyword detection using Hugging Face.",
    tech: ["Node.js", "HuggingFace", "Express.js", "React"],
    github: "https://github.com/abisheks2004/fslakws",
    live: "https://fslakws.onrender.com",
  },
  {
    title: "Instagram Clone",
    description:
      "Frontend clone with stories, posts, suggestions, and responsive layout using Vite, React, and Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/abisheks2004/instagram-clone",
    live: "https://abisheks2004.github.io/instagram-clone/",
  },
  {
    title: "Target Trio",
    description:
      "A fun, interactive number game with real-time logic and difficulty levels using vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/abisheks2004/Target-Trio",
    live: "https://abisheks2004.github.io/Target-Trio/",
  },
  {
    title: "Digital Solutions Hub",
    description:
      "Landing page for a digital agency highlighting services using smooth design and Tailwind layout.",
    tech: ["HTML", "Tailwind CSS"],
    github: "https://github.com/abisheks2004/Digital_Solutions_Hug",
    live: "https://abisheks2004.github.io/Digital_Solutions_Hug",
  },
  {
    title: "YouTube Frontend Clone",
    description:
      "Static clone of YouTube homepage layout with sidebar, search, and grid cards.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/abisheks2004/youtube-clone",
    live: "https://abisheks2004.github.io/youtube-clone/",
  },
  {
  title: "Personal Portfolio (HTML/CSS/JS)",
  description:
    "Responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase skills, projects, and contact info with a modern layout and smooth UX.",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/abisheks2004/Portfolio",
  live: "https://abisheks2004.github.io/Portfolio/",
},
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-24 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/10 rounded-2xl p-6 shadow-xl hover:shadow-yellow-400/30 transform transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] transition duration-500 z-0" />

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-yellow-300 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
