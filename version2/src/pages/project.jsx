import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const Project = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        height: "500px",
        width: "100%",
        bgcolor: "green",
        padding: "12px",
        paddingX: "48px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          color: "white",
          textAlign: "start",
        }}
      >
        PROJECTS
      </Typography>
    </Box>
  );
});

export default Project;
