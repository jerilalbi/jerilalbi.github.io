import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import ProjectSideSec from "../components/projectSideSec";
import ProjectMain from "../components/projectMain";
import ProjectSideDetails from "../components/projectSideDetails";
import { BoxProvider } from "../providers/boxProvider";
import ProjectDetails from "../components/projectDetails";

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
        paddingX: "72px",
        boxSizing: "border-box",
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
        <BoxProvider>
          <ProjectSideSec />
          <ProjectMain />
          <ProjectSideDetails />
          <ProjectDetails />
        </BoxProvider>
      </Box>
    </Box>
  );
});

export default Project;
