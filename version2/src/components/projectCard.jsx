import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectCard({ bgImg, img, text, onDragStart, onDrop, draggable }) {
  return (
    <Box
      sx={{
        height: "142px",
        width: "110px",
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderLeft: "4px solid #03346E",
          borderTop: "4px solid #03346E",
          boxSizing: "border-box",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "10px",
          height: "10px",
          borderRight: "4px solid #03346E",
          borderBottom: "4px solid #03346E",
          boxSizing: "border-box",
        },
      }}
      draggable={draggable}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={onDragStart}
      onDrop={onDrop}
    >
      <Box
        sx={{
          height: "75px",
          width: "75%",
          bgcolor: "red",
          marginTop: "20px",
          background: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Typography
        sx={{
          display: "inline-block",
          color: "white",
          fontSize: "13px",
          fontWeight: "750",
          width: "75%",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginTop: "5px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default ProjectCard;
