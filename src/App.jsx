import { useState } from 'react';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode ? "dark bg-neutral-900" : ""}`}>
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode}/>
        <Footer />
      </div>
    </>
  )
}
