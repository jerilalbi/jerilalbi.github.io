import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import ProjectSideSec from "../components/projectSideSec";
import ProjectMain from "../components/projectMain";
import ProjectSideDetails from "../components/projectSideDetails";
import { ProjectProvider } from "../providers/ProjectProvider";
import ProjectDetailsImg from "../components/projectDetailsImg";
import ProjectDetailsText from "../components/projectDetailsText";

const Project = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        width: "100%",
        padding: "12px",
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          color: "white",
          textAlign: "start",
          opacity: ".7",
        }}
      >
        PROJECTS
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flex: "1",
        }}
      >
        <ProjectProvider>
          <ProjectSideSec />
          <ProjectMain />
          <ProjectSideDetails />
          <ProjectDetailsImg />
          <ProjectDetailsText />
        </ProjectProvider>
      </Box>
    </Box>
  );
});

export default Project;
