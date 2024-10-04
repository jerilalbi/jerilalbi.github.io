import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectCard(props) {
  return (
    <Box
      sx={{
        height: "142px",
        width: "110px",
        background: `url(${props.bgImg})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          height: "75px",
          width: "75%",
          bgcolor: "red",
          marginTop: "20px",
          background: `url(${props.img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Typography
        sx={{
          color: "white",
          fontSize: "13px",
          fontWeight: "750",
          width: "75%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginTop: "5px",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
}

export default ProjectCard;
