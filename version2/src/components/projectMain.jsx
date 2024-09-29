import { Box } from "@mui/material";
import React from "react";

function ProjectMain() {
  return <Box sx={projectMainBx}></Box>;
}

export default ProjectMain;

const projectMainBx = {
  bgcolor: "blue",
  width: "825px",
  backgroundImage: "url('./images/project_bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle, transparent 1%, rgba(2, 21, 38, 1) 100%)`,
    // backgroundImage: `radial-gradient(circle, rgba(2, 21, 38,0) 5%, #218ce9 100%)`,
    zIndex: 1,
  },
};
