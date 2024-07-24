import './App.css';

// Main Elements
import Ripples from './sections/Hero/Ripples/Ripples'; // BACKGROUND
import Hero from './sections/Hero/Hero';
import Projects from './sections/Hero/Projects/Projects';
import Skills from './sections/Hero/Skills/Skills';
import sidebarStyles from './sections/Sidebar/Sidebar.module.css';
import Footer from './sections/Footer/Footer';

// Side Element
import About from './sections/About/About';

// listener
import { useState } from 'react';

function App() {

  // click listener
  const [ Intro, showIntro ] = useState(true);
  const handleClick = () => showIntro((Intro) => !Intro)

  return <>
    <Ripples/>
    <div className={sidebarStyles.sidenav}>
      <button onClick={handleClick}><a href="#main">{Intro ? 'Intro' : 'About'}</a></button>
      <button><a href="#projects">Projects</a></button>
      <button><a href="#skills">Skills</a></button>
    </div>
    {Intro ? <Hero/> : <About/>}
    <Projects/>
    <Skills/>
    <Footer/>
    </>
}

// this is the HOMEPAGE

export default App;