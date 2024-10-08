import { Box } from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "./projectCard";
import {
  card1,
  card2,
  card3,
  dotNetLogo,
  flutterLogo,
  htmlLogo,
  nodeLogo,
  reactLogo,
} from "./image_helper";

function ProjectMain() {
  const projectCards = {
    card1: card1,
    card2: card2,
    card3: card3,
  };

  const projectFormation = [3, 1, 2];

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      bgImg: projectCards.card1,
      projectImg: flutterLogo,
      text: "WalPer",
    },
    {
      id: 2,
      bgImg: projectCards.card2,
      projectImg: htmlLogo,
      text: "Voyage",
    },
    {
      id: 3,
      bgImg: projectCards.card3,
      projectImg: dotNetLogo,
      text: "Cafe",
    },
    {
      id: 4,
      bgImg: projectCards.card1,
      projectImg: flutterLogo,
      text: "QuizMe",
    },
    {
      id: 5,
      bgImg: projectCards.card1,
      projectImg: flutterLogo,
      text: "ScanCart",
    },
    {
      id: 6,
      bgImg: projectCards.card2,
      projectImg: nodeLogo,
      text: "Stock Bot",
    },
    {
      id: 7,
      bgImg: projectCards.card3,
      projectImg: reactLogo,
      text: "Portfolio",
    },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedBoxIndex", index);
  };

  const handleDrop = (e, index) => {
    const draggedBoxIndex = e.dataTransfer.getData("draggedBoxIndex");
    if (draggedBoxIndex !== index) {
      const updatedBoxes = [...boxes];
      const temp = updatedBoxes[draggedBoxIndex];
      updatedBoxes[draggedBoxIndex] = updatedBoxes[index];
      updatedBoxes[index] = temp;
      setBoxes(updatedBoxes);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={projectMainBx}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "50px",
        }}
      >
        <ProjectCard
          bgImg={boxes[0].bgImg}
          img={boxes[0].projectImg}
          text={boxes[0].text}
          draggable
          onDragStart={(e) => handleDragStart(e, 0)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 0)}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "200px",
        }}
      >
        {boxes.slice(1, 1 + projectFormation[0]).map((box, index) => (
          <ProjectCard
            bgImg={box.bgImg}
            img={box.projectImg}
            text={box.text}
            draggable
            onDragStart={(e) => handleDragStart(e, index + 1)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index + 1)}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          top: "150px",
        }}
      >
        {boxes.slice(4, 4 + projectFormation[1]).map((box, index) => (
          <ProjectCard
            bgImg={box.bgImg}
            img={box.projectImg}
            text={box.text}
            draggable
            onDragStart={(e) => handleDragStart(e, index + 4)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index + 4)}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          top: "50px",
        }}
      >
        {boxes.slice(5, 5 + projectFormation[2]).map((box, index) => (
          <ProjectCard
            bgImg={box.bgImg}
            img={box.projectImg}
            text={box.text}
            draggable
            onDragStart={(e) => handleDragStart(e, index + 5)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index + 5)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProjectMain;

const projectMainBx = {
  bgcolor: "blue",
  width: "825px",
  backgroundImage: "url('./images/project_bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle, transparent 1%, rgba(2, 21, 38, 1) 100%)`,
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
};
