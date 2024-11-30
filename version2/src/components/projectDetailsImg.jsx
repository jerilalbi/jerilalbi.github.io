import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ProjectContext } from "../providers/ProjectProvider";
import { projectImgs } from "./image_helper";

function ProjectDetailsImg() {
  const { openProject, projectImgSecRef } = useContext(ProjectContext);

  function randomNo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <Box
      ref={projectImgSecRef}
      sx={{
        width: "60%",
        height: "650px",
        position: "absolute",
        bgcolor: "primary.main",
        borderRadius: "15px 0 0 15px ",
        marginTop: "15px",
        padding: "8px",
        boxSizing: "border-box",
        zIndex: "200",
        transition: "transform .3s linear",
        transform: openProject ? "translateX(0)" : "translateX(-150%)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridAutoRows: "200px",
          overflowY: "auto",
          gap: "5px",
        }}
      >
        {projectImgs.map((img) => (
          <Box
            sx={{
              // gridRow: `span 2`,
              gridRow: `span ${randomNo(1, 3)}`,
              gridColumn: `span ${randomNo(1, 2)}`,
              borderRadius: "15px",
              background: `url(${img})`,
              backgroundSize: "cover",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProjectDetailsImg;
