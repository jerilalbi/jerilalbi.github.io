import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const projectCards = {
  card1: "/images/cards/card1.png",
  card2: "/images/cards/card2.png",
  card3: "/images/cards/card3.png",
};

function ProjectMain() {
  return (
    <Box sx={projectMainBx}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "50px",
        }}
      >
        <ProjectCard
          bgImg={projectCards.card1}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "200px",
        }}
      >
        <ProjectCard
          bgImg={projectCards.card2}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
        <ProjectCard
          bgImg={projectCards.card3}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
        <ProjectCard
          bgImg={projectCards.card1}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          top: "150px",
        }}
      >
        <ProjectCard
          bgImg={projectCards.card1}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          top: "50px",
        }}
      >
        <ProjectCard
          bgImg={projectCards.card2}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
        <ProjectCard
          bgImg={projectCards.card3}
          img="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          text="ScanCart"
        />
      </Box>
    </Box>
  );
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
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
};
