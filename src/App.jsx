
import React, { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import Chat from "./components/Chat";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import CertificatesSection from "./sections/CertificatesSection";
import Contact from "./sections/Contact";
import Background from "./components/Background";
import Character from "./components/Character";

export default function App({ introDone, setIntroDone, refs }) {
  useEffect(() => {
    const alreadyExitedChat = sessionStorage.getItem("exitedChat");
    if (alreadyExitedChat !== "true") return;
    setIntroDone(true);
  }, []);
  useEffect(() => {
    if (!introDone) return;

    const requestedSection = sessionStorage.getItem("requestedSection");
    const refMap = {
      home: refs.homeRef,
      about: refs.aboutRef,
      skills: refs.skillsRef,
      projects: refs.projectsRef,
      achievements: refs.achievementsRef,
      certificates: refs.certificatesRef,
      contact: refs.contactRef,
    };

    const scrollToRequested = () => {
      const targetRef =
        requestedSection && refMap[requestedSection]
          ? refMap[requestedSection]
          : refs.homeRef;

      console.log("👉 Scrolling to:", requestedSection, targetRef?.current);

      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("requestedSection"); // clear after scroll
      } else {
        setTimeout(scrollToRequested, 300);
      }
    };

    setTimeout(scrollToRequested, 600);
  }, [introDone]); 

  const goToHome = () => {
    sessionStorage.setItem("exitedChat", "true");
    sessionStorage.removeItem("requestedSection");
    setIntroDone(true);

    setTimeout(() => {
      refs.homeRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="scroll-smooth relative">
      <AnimatePresence mode="wait">
        {!introDone ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-screen"
          >
            {/* Floating Home Button */}
            <button
              onClick={goToHome}
              className="fixed top-5 right-6 z-[999] flex items-center gap-2 
                        bg-yellow-400/90 backdrop-blur-md text-black font-semibold 
                        px-5 py-2 rounded-full shadow-lg 
                        hover:bg-yellow-300 hover:shadow-yellow-400/50 
                        transition-all duration-300 hover:scale-105"
            >
              <FiHome size={20} />
              <span>Home</span>
            </button>

            <Background />
            <Character />
            <Chat setIntroDone={setIntroDone} refs={refs} />
          </motion.div>
        ) : (
          <motion.div
            key="sections"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div ref={refs.homeRef}>
              <Home
                goBackToChat={() => {
                  setIntroDone(false);
                  sessionStorage.removeItem("exitedChat");
                }}
              />
            </div>

            <div ref={refs.aboutRef}><About /></div>
            <div ref={refs.skillsRef}><Skills /></div>
            <div ref={refs.projectsRef}><Projects /></div>
            <div ref={refs.achievementsRef}><Achievements /></div>
            <div ref={refs.certificatesRef}><CertificatesSection /></div>
            <div ref={refs.contactRef}><Contact /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
