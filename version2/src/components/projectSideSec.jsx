import { Box } from "@mui/material";
import React from "react";

function ProjectSideSec() {
  return (
    <Box
      sx={{
        // bgcolor: "red",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={sideBoxes}
        component={"img"}
        src="/images/my_img.png"
        alt="img Jeril"
      ></Box>
      <Box sx={sideBoxes}>
        <Box
          component={"img"}
          src="/images/ja-logo.png"
          alt="logo"
          sx={{ height: "100%", width: "90%", objectFit: "contain" }}
        ></Box>
      </Box>
      <Box sx={sideBoxes}></Box>
    </Box>
  );
}

export default ProjectSideSec;

const sideBoxes = {
  height: "100px",
  width: "100px",
  bgcolor: "secondary.main",
  borderRadius: "20px",
  boxShadow: "0 0 5px 0px white",
  objectFit: "cover",
  objectPosition: "top",
};
