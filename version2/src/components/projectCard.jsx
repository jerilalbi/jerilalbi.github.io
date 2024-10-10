import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectCard({
  bgImg,
  img,
  text,
  onDragStart,
  onDrop,
  onClick,
  draggable,
  isSelected,
}) {
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
        cursor: "grab",
        position: "relative",
        ...(isSelected && {
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "10px",
            height: "10px",
            borderLeft: "4px solid #1072eb",
            borderTop: "4px solid #1072eb",
            boxSizing: "border-box",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "10px",
            height: "10px",
            borderRight: "4px solid #1072eb",
            borderBottom: "4px solid #1072eb",
            boxSizing: "border-box",
          },
        }),
      }}
      draggable={draggable}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onClick={onClick}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
          ...(isSelected && {
            "&::before": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "10px",
              height: "10px",
              borderBottom: "4px solid #1072eb",
              borderLeft: "4px solid #1072eb",
              boxSizing: "border-box",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: "10px",
              height: "10px",
              borderTop: "4px solid #1072eb",
              borderRight: "4px solid #1072eb",
              boxSizing: "border-box",
            },
          }),
        }}
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
    </Box>
  );
}

export default ProjectCard;
