import { Container } from "@mui/material";
import React from "react";

function HomeImage() {
  return (
    <Container
      sx={{
        position: "absolute",
        right: "-22%",
        bottom: "0",
        width: "460px",
        zIndex: "100",
      }}
    >
      <img
        src="/images/home_img.png"
        alt="home_img"
        style={{ maxWidth: "100%", height: "auto", display: "block" }}
      ></img>
    </Container>
  );
}

export default HomeImage;
