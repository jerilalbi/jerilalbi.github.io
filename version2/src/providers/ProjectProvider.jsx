import React, { createContext, useRef, useState } from "react";
import {
  card1,
  card2,
  card3,
  dotNetLogo,
  flutterLogo,
  htmlLogo,
  nodeLogo,
  reactLogo,
} from "../components/image_helper";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projectImgSecRef = useRef(null);
  const projectTextSecRef = useRef(null);
  const [activeBox, setActiveBox] = useState(0);
  const [openProject, setOpenProject] = useState(false);
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "WalPer",
    },
    {
      id: 2,
      bgImg: card2,
      projectImg: htmlLogo,
      text: "Voyage",
    },
    {
      id: 3,
      bgImg: card3,
      projectImg: dotNetLogo,
      text: "Cafe",
    },
    {
      id: 4,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "QuizMe",
    },
    {
      id: 5,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "ScanCart",
    },
    {
      id: 6,
      bgImg: card2,
      projectImg: nodeLogo,
      text: "Stock Bot",
    },
    {
      id: 7,
      bgImg: card3,
      projectImg: reactLogo,
      text: "Portfolio",
    },
  ]);

  return (
    <ProjectContext.Provider
      value={{
        activeBox,
        setActiveBox,
        boxes,
        setBoxes,
        openProject,
        setOpenProject,
        projectImgSecRef,
        projectTextSecRef,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
