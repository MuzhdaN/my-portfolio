
import { useState } from 'react';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Navbar from "./components/Navbar";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode ? "dark bg-neutral-900" : ""}`}>
        <Navbar />
        <section id="home">
          <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </section>
        <section id='projects'>
          <Projects darkMode={darkMode} />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='skills'>
          <Skills darkMode={darkMode}/>
        </section>
        <Footer />
      </div>
    </>
  )
}
