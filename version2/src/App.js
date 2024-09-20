import './App.css';
import ParallaxSec from './components/parallaxSec';
import Home from './pages/home';
import Project from './pages/project';
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const projectSecRef = useRef(null);
  const navBarRefs = { projectSec: projectSecRef };

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <Home scroll={scrollPos} navBarRef={navBarRefs} />
      <ParallaxSec scroll={scrollPos}>
        <Project ref={projectSecRef} />
      </ParallaxSec>
    </div>
  );
}

export default App;
