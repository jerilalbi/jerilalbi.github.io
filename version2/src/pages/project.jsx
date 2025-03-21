import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectSideSec from "../components/projectSideSec";
import ProjectMain from "../components/projectMain";
import ProjectSideDetails from "../components/projectSideDetails";
import { ProjectProvider } from "../providers/ProjectProvider";
import ProjectDetailsImg from "../components/projectDetailsImg";
import ProjectDetailsText from "../components/projectDetailsText";
import ImagePopUp from "../components/imagePop";

function Project () {
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "700px",
        width: "100%",
        padding: {sm: "12px", xs: "0px"},
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
          <Box sx={{
            position: "absolute",
            display: "flex",
            flexDirection: {md: "row", xs: "column-reverse"},
            width: {md: "100%", sm: "84%", xs: "92%"},
            height: {md: "650px", xs: "650px"},
            marginTop: "15px",
            }}>
              <ProjectDetailsImg />
              <ProjectDetailsText />
          </Box>
          <ImagePopUp />
        </ProjectProvider>
      </Box>
    </Box>
  );
};

export default Project;
