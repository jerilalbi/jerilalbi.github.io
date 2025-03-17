import React from "react";
import Header from "../components/header";
import { Box } from "@mui/material";
import HomeImage from "../components/homeImg";
import HomeIconBox from "../components/homeIconBox";
import HomeNameSec from "../components/homeName";
import HomeBgNum from "../components/homeBgNum";
import HomeSideSec from "../components/homeSideSec";
import { OpacityBox } from "../components/opacityBox";

function Home(props) {
  return (
    <OpacityBox>
      <Box
        id="home"
        sx={{
          position: "relative",
          bgcolor: "secondary.main",
          height: "100vh",
          width: {lg: "1200px", md: "900px", xs: "100%"}
        }}
      >
        <Header navBarRef={props.navBarRef} />
        <HomeIconBox />
        <HomeNameSec />
        <HomeBgNum number="1" position="right" />
        <HomeImage />
      </Box>
      <Box
        sx={{ 
          position: {md: "relative", sm: "absolute"},
          bgcolor: {md: "primary.main", sm: "transparent"},
          height: {md: "100vh", sm: "20vh"},
          bottom: {sm: "0"},
          width: {lg: "800px", md: "500px", sm: "100%"}
        }}
      >
        <HomeBgNum number="2" position="left" />
        <HomeSideSec />
      </Box>
      

    </OpacityBox>
  );
}

export default Home;
