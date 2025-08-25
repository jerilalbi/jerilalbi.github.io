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
  const imgPopSecRef = useRef(null);
  const [activeBox, setActiveBox] = useState(0);
  const [openProject, setOpenProject] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "WalPer",
    },
    {
      id: 2,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "QuizMe",
    },
    {
      id: 3,
      bgImg: card3,
      projectImg: dotNetLogo,
      text: "Cafe",
    },
    {
      id: 4,
      bgImg: card2,
      projectImg: htmlLogo,
      text: "Voyage",
    },
    {
      id: 5,
      bgImg: card1,
      projectImg: flutterLogo,
      text: "ScanCart",
    },
    {
      id: 6,
      bgImg: card3,
      projectImg: nodeLogo,
      text: "Stock Bot",
    },
    {
      id: 7,
      bgImg: card3,
      projectImg: reactLogo,
      text: "Portfolio",
    },
    {
      id: 8,
      bgImg: card2,
      projectImg: reactLogo,
      text: "Movie",
    },
    {
      id: 9,
      bgImg: card3,
      projectImg: reactLogo,
      text: "Job Portal",
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
        imgPopSecRef,
        openImage,
        setOpenImage,
        imgUrl,
        setImgUrl,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
