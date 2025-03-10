import './App.css';
import ParallaxSec from './components/parallaxSec';
import Home from './pages/home';
import Project from './pages/project';
import React, { useRef } from "react";
import { ScrollProvider } from './providers/scrollProvider';
import Skills from './pages/skills';
import TimeLine from './pages/timeline';

function App() {
  const projectSecRef = useRef(null);
  const navBarRefs = { projectSec: projectSecRef };

  return (
    <div className="App">
      <ScrollProvider>
        <Home navBarRef={navBarRefs} />
        <ParallaxSec>
          <Project ref={projectSecRef} />
          <Skills />
          <TimeLine />
        </ParallaxSec>
      </ScrollProvider>
    </div>
  );
}

export default App;
