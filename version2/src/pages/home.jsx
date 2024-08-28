import React from "react";
import Header from "../components/header";
import { Box, Container } from "@mui/material";
import HomeImage from "../components/homeImg";
import HomeIconBox from "../components/homeIconBox";
import HomeNameSec from "../components/homeName";
import HomeBgNum from "../components/homeBgNum";

function Home() {
  return (
    <Box display={"flex"}>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          bgcolor: "secondary.main",
          height: "100vh",
        }}
      >
        <Header />
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
      </Container>
    </Box>
  );
}

export default Home;
