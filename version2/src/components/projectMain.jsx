import { Box } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import ProjectCard from "./projectCard";
import { BoxContext } from "../providers/boxProvider";

function ProjectMain() {
  const projectFormation = [3, 1, 2];

  const { activeBox, setActiveBox, boxes, setBoxes } = useContext(BoxContext);

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
      if (activeBox === Number(draggedBoxIndex)) {
        setActiveBox(index);
      } else if (activeBox === index) {
        setActiveBox(Number(draggedBoxIndex));
      }
      setBoxes(updatedBoxes);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleArrowKey = useCallback(
    (e) => {
      if (e.key === "ArrowRight" && activeBox < boxes.length - 1) {
        setActiveBox((prevIndex) => prevIndex + 1);
      } else if (e.key === "ArrowLeft" && activeBox > 0) {
        setActiveBox((prevIndex) => prevIndex - 1);
      }
    },
    [activeBox, boxes.length, setActiveBox]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey);
    return () => {
      window.removeEventListener("keydown", handleArrowKey);
    };
  }, [handleArrowKey]);

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
          isSelected={0 === activeBox}
          onClick={() => setActiveBox(0)}
        />
      </Box>
      {console.log("test project main")}
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
            isSelected={index + 1 === activeBox}
            onClick={() => setActiveBox(index + 1)}
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
            isSelected={index + 4 === activeBox}
            onClick={() => setActiveBox(index + 4)}
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
            isSelected={index + 5 === activeBox}
            onClick={() => setActiveBox(index + 5)}
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
