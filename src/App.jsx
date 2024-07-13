import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Hero/Projects/Projects';
import Sidebar from './common/Sidebar';
import Skills from './sections/Hero/Skills/Skills';

function App() {
  return <>
    <Sidebar/>
    <Hero/>
    <Projects/>
    <Skills/>
    </>
}

// this is the HOMEPAGE

export default App;