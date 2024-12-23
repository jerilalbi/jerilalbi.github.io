import React from "react";
import Header from "../components/header";
import { Container } from "@mui/material";
import HomeImage from "../components/homeImg";
import HomeIconBox from "../components/homeIconBox";
import HomeNameSec from "../components/homeName";
import HomeBgNum from "../components/homeBgNum";
import HomeSideSec from "../components/homeSideSec";
import { OpacityBox } from "../components/opacityBox";

function Home(props) {
  return (
    <OpacityBox>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          bgcolor: "secondary.main",
          height: "100vh",
        }}
      >
        <Header navBarRef={props.navBarRef} />
        <HomeIconBox />
        <HomeNameSec />
        <HomeBgNum number="1" position="right" />
        <HomeImage />
      </Container>
      <Container
        maxWidth="sm"
        sx={{ position: "relative", bgcolor: "primary.main", height: "100vh" }}
      >
        <HomeBgNum number="2" position="left" />
        <HomeSideSec />
      </Container>
      

    </OpacityBox>
  );
}

export default Home;
