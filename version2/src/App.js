import './App.css';
import ParallaxSec from './components/parallaxSec';
import Home from './pages/home';
import Project from './pages/project';
import React, { useRef } from "react";
import { ScrollProvider } from './providers/scrollProvider';

function App() {
  const projectSecRef = useRef(null);
  const navBarRefs = { projectSec: projectSecRef };

  return (
    <div className="App">
      <ScrollProvider>
        <Home navBarRef={navBarRefs} />
        <ParallaxSec>
          <Project ref={projectSecRef} />
        </ParallaxSec>
      </ScrollProvider>
    </div>
  );
}

export default App;
