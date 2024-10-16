import { Box } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { BoxContext } from "../providers/boxProvider";
import { projectImgs } from "./image_helper";

function ProjectDetails() {
  const projectBxRef = useRef(null);
  const { openProject, setOpenProject } = useContext(BoxContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectBxRef.current &&
        !projectBxRef.current.contains(event.target)
      ) {
        setOpenProject(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenProject]);

  function randomNo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <Box
      ref={projectBxRef}
      sx={{
        bgcolor: "primary.main",
        position: "absolute",
        display: "flex",
        width: "92%",
        height: "650px",
        zIndex: "200",
        borderRadius: "10px",
        transition: "transform .5s linear",
        transform: openProject ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <Box
        sx={{
          width: "60%",
          bgcolor: "green",
          marginTop: "15px",
          padding: "8px",
          boxSizing: "border-box",
          transition: "transform 1s linear",
          transform: openProject ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            height: "100%",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "5px",
          }}
        >
          {projectImgs.map((img) => (
            <Box
              sx={{
                // gridRow: `span 2`,
                gridRow: `span ${randomNo(1, 3)}`,
                borderRadius: "15px",
                background: `url(${img})`,
                backgroundSize: "cover",
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: "teal" }}></Box>
    </Box>
  );
}

export default ProjectDetails;
