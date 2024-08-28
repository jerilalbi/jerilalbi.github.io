import { Box, Typography } from "@mui/material";
import React from "react";

function HomeBgNum(props) {
  const textStyle = {
    color: "white",
    fontSize: "450px",
    fontWeight: "750",
    opacity: ".04",
    lineHeight: "1",
    fontFamily: "Lato, sans-serif",
  };
  const numRightPos = props.position === "right" ? "50px" : "auto";
  const numleftPos = props.position === "left" ? "5px" : "auto";
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10px",
        right: numRightPos,
        left: numleftPos,
        overflow: "hidden",
      }}
    >
      <Typography sx={textStyle}>{props.number}</Typography>
    </Box>
  );
}

export default HomeBgNum;
