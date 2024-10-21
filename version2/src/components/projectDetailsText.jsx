import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../providers/ProjectProvider";
import CloseIcon from "@mui/icons-material/Close";

function ProjectDetailsText() {
  const { openProject, setOpenProject, projectImgSecRef, projectTextSecRef } =
    useContext(ProjectContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectImgSecRef.current &&
        projectTextSecRef.current &&
        !projectImgSecRef.current.contains(event.target) &&
        !projectTextSecRef.current.contains(event.target)
      ) {
        setOpenProject(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenProject, projectImgSecRef, projectTextSecRef]);

  const handleBoxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Box
      onClick={handleBoxClick}
      sx={{
        width: "33%",
        height: "684px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        zIndex: "150",
        top: "30px",
        right: "48px",
        transition: "transform .3s linear",
        transform: openProject ? "translateX(0)" : "translateX(150%)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "22px",
          textAlign: "end",
        }}
      >
        <CloseIcon
          sx={{
            height: "22px",
            width: "22px",
            stroke: "white",
            strokeWidth: "2",
            cursor: "pointer",
          }}
          onClick={() => setOpenProject(false)}
        />
      </Box>
      <Box
        ref={projectTextSecRef}
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "primary.main",
          borderRadius: "0px 15px 15px 0",
          marginTop: "13px",
          padding: "8px",
          boxSizing: "border-box",
        }}
      ></Box>
    </Box>
  );
}

export default ProjectDetailsText;
