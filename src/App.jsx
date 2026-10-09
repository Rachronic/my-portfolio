import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Certificates from "./components/Certificates/Certificates.jsx";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

import Preloader from "./Preloader/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader
            key="preloader"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certificates />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;