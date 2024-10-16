import React, { useCallback, useContext, useEffect } from "react";
import Header from "../components/header";
import { Box, Container } from "@mui/material";
import HomeImage from "../components/homeImg";
import HomeIconBox from "../components/homeIconBox";
import HomeNameSec from "../components/homeName";
import HomeBgNum from "../components/homeBgNum";
import HomeSideSec from "../components/homeSideSec";
import { ScrollContext } from "../providers/scrollProvider";

function Home(props) {
  const { scrollPos, setScrollPos } = useContext(ScrollContext);

  const opacity = Math.max(0, scrollPos / 8 / 100);

  const handleScroll = useCallback(
    (e) => {
      setScrollPos(window.scrollY);
    },
    [setScrollPos]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        width: "100%",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(2, 21, 38, ${opacity})`,
          zIndex: 150,
          pointerEvents: "none",
        },
      }}
    >
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
    </Box>
  );
}

export default Home;
