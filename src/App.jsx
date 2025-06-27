import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chat from "./components/Chat";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Background from "./components/Background";
import Character from "./components/Character";


export default function App({ introDone, setIntroDone, refs }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "chat";

    if (path !== "chat") {
      setIntroDone(true);

      const refMap = {
        home: refs.homeRef,
        about: refs.aboutRef,
        skills: refs.skillsRef,
        projects: refs.projectsRef,
        contact: refs.contactRef,
      };

      setTimeout(() => {
        refMap[path]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, [location.pathname]);

  return (
    <div className="scroll-smooth">
      {!introDone ? (
        <div id="chat">
          <Background />
          <Character />
          <Chat setIntroDone={setIntroDone} refs={refs} />
        </div>
      ) : (
        <>
          <div ref={refs.homeRef}><Home goBackToChat={() => setIntroDone(false)} /></div>
          <div ref={refs.aboutRef}><About /></div>
          <div ref={refs.skillsRef}><Skills /></div>
          <div ref={refs.projectsRef}><Projects /></div>
          <div ref={refs.contactRef}><Contact /></div>
        </>
      )}
    </div>
  );
}
