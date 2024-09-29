import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectSideDetails() {
  return (
    <Box
      sx={{
        flexGrow: "1",
        height: "150px",
        bgcolor: "rgb(3, 52, 110)",
        marginLeft: "20px",
        marginY: "auto",
        borderRadius: "10px",
        boxSizing: "border-box",
        padding: "8px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          component={"img"}
          src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          sx={{
            height: "80px",
            width: "80px",
            borderRadius: "80px",
            bgcolor: "white",
            objectFit: "contain",
          }}
        />
        <Typography>ScanCart</Typography>
      </Box>
    </Box>
  );
}

export default ProjectSideDetails;
