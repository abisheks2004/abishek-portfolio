import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/img1.png";

const Home = ({ goBackToChat }) => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-24 py-20 text-center">
      {/* Avatar */}
      <motion.img
        src={avatar}
        alt="Abishek"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-white z-20 mb-6 shadow-lg object-cover"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Text & Button */}
      <motion.div className="z-20 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          Welcome to My Portfolio
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
          <Typewriter
            words={[
            "MERN Stack Developer 💻",
            "React | Node.js | Express | MongoDB ⚙️",
            "Let's build amazing things together! 🚀"
          ]
            }
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        <motion.button
          onClick={goBackToChat}
          whileHover={{ scale: 1.08 }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Back to chat 🚀
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
