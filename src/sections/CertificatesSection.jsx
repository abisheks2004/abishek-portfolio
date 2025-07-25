
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  { src: "/certificates/ABISHEK.S_HACKATHON.jpg", title: "Hackathon Participation - Abishek S" },
  { src: "/certificates/EDUSKILLsAIML.jpg", title: "AI & Machine Learning - Eduskills" },
  { src: "/certificates/EDUSKILLSANDROIDDEVELOPER.jpg", title: "Android Developer Certification" },
  { src: "/certificates/EDUSKILLS-PROCESS-MINING.jpg", title: "Process Mining Workshop" },
  { src: "/certificates/EDUSKILLS-web-full-stack.jpg", title: "Full Stack Web Development - Eduskills" },
  { src: "/certificates/nptl-iiot.jpg", title: "NPTEL IIoT Certification" },
  { src: "/certificates/nptl-cloud-computing.jpg", title: "NPTEL Cloud Computing Certification" },
  { src: "/certificates/NPTL-IOT-4.0.jpg", title: "NPTEL IoT 4.0 Certification" },
];

export default function CertificatesSection() {
  const [showGrid, setShowGrid] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="certificates"
      className={`w-full ${
        isMobile ? "min-h-screen" : "h-screen"
      } bg-black text-white flex flex-col justify-center items-center`}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Certificates
      </motion.h2>

      <AnimatePresence mode="wait">
        {showGrid ? (
          // Normal Grid View
          <motion.div
            key="grid"
            className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 p-4 m-15 relative bg-black rounded-xl overflow-hidden border-2 border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-black rounded-xl overflow-hidden border-2 border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-15 h-15 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Accordion View
          <motion.div
            key="accordion"
            className={`w-full ${
              isMobile
                ? "grid grid-cols-2 gap-4 px-4 pb-12"
                : "flex flex-wrap h-[80vh] justify-between gap-4 px-3"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map((item, index) => {
              const isActive = activeIndex === index;
              const flexValue = !isMobile ? (isActive ? 7 : 1) : undefined;

              return (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer bg-black p-2 
                    border-[2px] border-yellow-400 group transition-all duration-500 
                    hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]
                    ${isMobile ? "rounded-md" : "flex-shrink-0 rounded-[2rem]"}
                  `}
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  animate={!isMobile ? { flex: flexValue } : {}}
                  style={{
                    height: isMobile ? "18vh" : "85%",
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover ${
                      isMobile ? "rounded-md" : "rounded-[1.5rem]"
                    }`}
                  />

                  {/* Desktop hover overlay */}
                  {!isMobile && (
                    <>
                      <div className="absolute inset-0 rounded-[2rem] ring-0 group-hover:ring-4 group-hover:ring-yellow-300/70 transition-all duration-500" />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-black/70 text-yellow-300 text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-[1.5rem]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-sm sm:text-base font-semibold">
                          {item.title}
                        </h3>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setShowGrid(!showGrid)}
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition mt-4"
        whileTap={{ scale: 0.95 }}
      >
        {showGrid ? "View Certificates" : "Back"}
      </motion.button>
    </section>
  );
}
