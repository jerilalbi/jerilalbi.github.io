import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../providers/ProjectProvider";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from '@mui/icons-material/GitHub';
import projectData from "../data/projectData";

function ProjectDetailsText() {
  const { openProject, setOpenProject, projectImgSecRef, projectTextSecRef, imgPopSecRef, activeBox, boxes } =
    useContext(ProjectContext);
  const [projectContent, setProjectContent] = useState("");

  useEffect(() => {
    projectData[boxes[activeBox].id].description().then((data) => setProjectContent(data));

    const handleClickOutside = (event) => {
      if (
        projectImgSecRef.current?.contains(event.target) ||
        projectTextSecRef.current?.contains(event.target) ||
        imgPopSecRef.current?.contains(event.target)
      ) {
        return;
      }
      setOpenProject(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenProject, projectImgSecRef, projectTextSecRef, imgPopSecRef, activeBox, boxes]);

  const handleBoxClick = (event) => {
    event.stopPropagation();
  };

  return (
      <Box
        onClick={handleBoxClick}
        ref={projectTextSecRef}
        sx={{
          position: "relative",
          display: 'flex',
          flexDirection: 'column',
          flexBasis: {lg: "36%", md: "45%", sm: "50%"},
          height: {md: "auto", sm: "400px", xs: "350px"},
          bgcolor: "primary.main",
          color: "white",
          textAlign: "start",
          borderRadius: {md: "0px 15px 15px 0", xs: "15px 15px 0 0"},
          paddingY: "10px",
          paddingX: "10px",
          boxSizing: "border-box",
          zIndex: "150",
          transition: "transform .3s linear",
          transform: openProject ? "translateX(0)" : "translateX(150%)",
        }}
      >
        <Box sx={{
          display: 'inline-flex', 
          alignItems: 'baseline',
          }}>
          <Typography
          component={'span'}
            sx={{
              fontSize: "30px",
              fontWeight: "750",
              fontFamily: "Lato, sans-serif",
            }}
          >
            {projectData[boxes[activeBox].id].title}
          </Typography>
          <IconButton 
          href={projectData[boxes[activeBox].id].githubUrl}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            cursor: "pointer",
            height: '50px',
            width: '50px',
            marginLeft: "10px"
            }}>
            <GitHubIcon  sx={{fontSize: '30px', color: 'white'}}/>
          </IconButton>
        </Box>
        <Typography
        sx={{
          fontWeight: "750",
          whiteSpace: "pre",
          marginTop: '15px'
        }}
        >
          {projectData[boxes[activeBox].id].skills.join(" | ").toUpperCase()}
        </Typography>
        <Box sx={{
          flex: 1,
          overflowY: "auto",
          marginTop: '15px',
          scrollbarWidth: "none", 
          "&::-webkit-scrollbar": { display: "none" } 
        }}>
        <Typography
        sx={{
          fontWeight: "500",
          textAlign: 'justify',
          whiteSpace: "pre-line",
        }}>
          {projectContent}
        </Typography>
        </Box>
        <Box
        sx={{
          position: "absolute",
          right: "10px",
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
      </Box>
  );
}
export default ProjectDetailsText;
