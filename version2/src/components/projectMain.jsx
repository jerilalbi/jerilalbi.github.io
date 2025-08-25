import { Box } from "@mui/material";
import React, { useContext } from "react";
import ProjectCard from "./projectCard";
import { ProjectContext } from "../providers/ProjectProvider";
import { useTheme } from "@emotion/react";

function ProjectMain() {
  const projectFormation = [4, 1, 3];
  const theme = useTheme();

  const { activeBox, setActiveBox, boxes, setBoxes, setOpenProject } =
    useContext(ProjectContext);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedBoxIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    const draggedBoxIndex = e.dataTransfer?.getData("draggedBoxIndex");
    if (draggedBoxIndex !== index) {
      swapBoxes(draggedBoxIndex, index);
    }
  };

  const swapBoxes = (draggedBoxIndex, index) => {
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
          onClick={() => {
            setActiveBox(0);
            if (window.innerWidth < theme.breakpoints.values.md) {
              setOpenProject(true);
            }
          }}
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
            isSelected={index + 1 === activeBox}
            onClick={() => {
              setActiveBox(index + 1);
              if (window.innerWidth < theme.breakpoints.values.md) {
                setOpenProject(true);
              }
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          top: { md: "190px", sm: "175px", xs: "190px" },
        }}
      >
        {boxes.slice(5, 5 + projectFormation[1]).map((box, index) => (
          <ProjectCard
            bgImg={box.bgImg}
            img={box.projectImg}
            text={box.text}
            draggable
            onDragStart={(e) => handleDragStart(e, index + 5)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index + 5)}
            isSelected={index + 5 === activeBox}
            onClick={() => {
              setActiveBox(index + 5);
              if (window.innerWidth < theme.breakpoints.values.md) {
                setOpenProject(true);
              }
            }}
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
        {boxes.slice(6, 6 + projectFormation[2]).map((box, index) => (
          <ProjectCard
            bgImg={box.bgImg}
            img={box.projectImg}
            text={box.text}
            draggable
            onDragStart={(e) => handleDragStart(e, index + 6)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index + 6)}
            isSelected={index + 6 === activeBox}
            onClick={() => {
              setActiveBox(index + 6);
              if (window.innerWidth < theme.breakpoints.values.md) {
                setOpenProject(true);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProjectMain;

const projectMainBx = {
  position: "relative",
  bgcolor: "blue",
  width: "825px",
  backgroundImage: "url('./images/project_bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
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
