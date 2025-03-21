import { Box, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import fontStyles  from "../theme/fontSize";
import { Typewriter } from "react-simple-typewriter";

const jobTitles = ["WEB DEVELOPER", "FLUTTER DEVELOPER"];

function HomeNameSec() {
  return (
    <Box sx={homeNameBx}>
      <Typography
        sx={{
          fontSize: fontStyles.titleFont,
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          lineHeight: ".6",
        }}
      >
        Jeril
      </Typography>
      <Typography
        sx={{
          fontSize: fontStyles.subTitleFont,
          fontWeight: "750",
          fontFamily: "Lato, sans-serif",
          lineHeight: "1.2",
          textAlign: "right",
        }}
      >
        Albi
      </Typography>
      <Typography sx={jobTitleText}>
        <Typewriter
          words={jobTitles}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100} 
          delaySpeed={1000}
        />
      </Typography>
      <Box sx={{ height: "30px" }} />
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
  top: "50%",
  left: "20%",
  color: "white",
  textAlign: "start",
  transform: "translateY(-50%)",
};

const jobTitleText = {
  position: "absolute",
  fontSize: "25px",
  fontWeight: "750",
  fontFamily: "Lato, sans-serif",
  lineHeight: "1",
  whiteSpace: "nowrap",
};
