import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiChevronDown } from "react-icons/fi";
import avatar from "../assets/img1.png";

const Home = ({ goBackToChat }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-24 py-20 text-center">
      
      {/* Avatar with Soft Glow */}
      <motion.div
        className="relative flex justify-center items-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Soft pulsing glow */}
        <motion.div
          className="absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-yellow-400 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src={avatar}
          alt="Abishek"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-yellow-400 shadow-lg object-cover relative z-10"
        />
      </motion.div>

      {/* Heading & Typewriter */}
      <motion.div className="z-20 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          Welcome to My Portfolio
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
          <Typewriter
            words={[
              "Full-Stack Developer 💻",
              "React | Node.js | Express | MongoDB ⚙️",
              "Let's build amazing things together! 🚀",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        {/* Back Button */}
        <motion.button
          onClick={goBackToChat}
          whileHover={{ scale: 1.08 }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Back to chat 🚀
        </motion.button>
      </motion.div>

    
      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-6 text-gray-400 text-sm"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll Down ↓
      </motion.div>
    </section>
  );
};

export default Home;
