import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../providers/ProjectProvider";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from '@mui/icons-material/GitHub';

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
          // paddingX: {md: "30px",sm: "20px", xs: "15px"},
          paddingX: "10px",
          boxSizing: "border-box",
          zIndex: "150",
          transition: "transform .3s linear",
          transform: openProject ? "translateX(0)" : "translateX(150%)",
        }}
      >
        <Box sx={{
          display: 'inline', 
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
            Cafe management sytem
          </Typography>
          <GitHubIcon sx={{height: '30px', width: "30px", marginLeft: '10px',cursor: 'pointer'}}/>
        </Box>
        <Typography
        sx={{
          fontWeight: "750",
          whiteSpace: "pre",
          marginTop: '15px'
        }}
        >
          {`FLUTTER | FIREBASE | BLOC`}
        </Typography>
        <Box sx={{
          flex: 1,
          overflowY: "auto",
          marginTop: '15px',
        }}>
        <Typography
        sx={{
          fontWeight: "500",
          textAlign: 'justify',
        }}>
          Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown writer took a handful of words and scrambled them to make a type specimen book. Not only has it survived five centuries, but it has also made it into electronic typesetting (note, almost unchanged). It was popularised in the 1960s with the release of "Letraset", which contained passages of Lorem Ipsum, as did desktop software like "Aldus PageMaker", also using Lorem Ipsum.
          Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown writer took a handful of words and scrambled them to make a type specimen book. Not only has it survived five centuries, but it has also made it into electronic typesetting (note, almost unchanged). It was popularised in the 1960s with the release of "Letraset", which contained passages of Lorem Ipsum, as did desktop software like "Aldus PageMaker", also using Lorem Ipsum.
          Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown writer took a handful of words and scrambled them to make a type specimen book. Not only has it survived five centuries, but it has also made it into electronic typesetting (note, almost unchanged). It was popularised in the 1960s with the release of "Letraset", which contained passages of Lorem Ipsum, as did desktop software like "Aldus PageMaker", also using Lorem Ipsum.
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
