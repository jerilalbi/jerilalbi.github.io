import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const jobTitles = ["WEB DEVELOPER", "FLUTTER DEVELOPER"];

function HomeNameSec() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);
  return (
    <Box sx={homeNameBx}>
      <Typography
        sx={{
          fontSize: "150px",
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          lineHeight: ".6",
        }}
      >
        Jeril
      </Typography>
      <Typography
        sx={{
          fontSize: "130px",
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          lineHeight: "1.2",
          textAlign: "right",
        }}
      >
        Albi
      </Typography>
      <Typography sx={jobTitleText}>WEB DEVELOPER</Typography>
      <LocationOnIcon sx={{ height: "17px", width: "17px" }} />{" "}
      <Typography
        sx={{
          display: "inline-block",
          fontSize: "20px",
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
        }}
      >
        INDIA
      </Typography>
    </Box>
  );
}

export default HomeNameSec;

const homeNameBx = {
  position: "absolute",
  left: "13%",
  top: "50%",
  left: "20%",
  color: "white",
  textAlign: "start",
  transform: "translateY(-50%)",
};

const jobTitleText = {
  fontSize: "25px",
  fontWeight: "750",
  fontFamily: "Lato, sans-serif",
  lineHeight: "1",
  whiteSpace: "nowrap",
};
