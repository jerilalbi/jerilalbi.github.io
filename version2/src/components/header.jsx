import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";

function Header(props) {
  const [activeItem, setActiveItem] = useState("HOME");

  const headerItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/",
    },
    {
      name: "SKILLS",
      path: "/",
    },
    {
      name: "EDUCATION",
      path: "/",
    },
  ];

  const handleItemClick = (item) => {
    if (props.navBarRef.projectSec.current) {
      props.navBarRef.projectSec.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(item);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl" sx={{ bgcolor: "secondary.main" }}>
        <Toolbar>
          <Box
            component={"img"}
            src="/images/ja-logo.png"
            alt="logo"
            sx={{ height: "50px", width: "70px", objectFit: "contain" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingX: "10px",
              width: "100%",
            }}
          >
            {headerItems.map((items) => (
              <Button
                sx={{
                  color: "white",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "600",
                  opacity: activeItem === items.name ? 1 : 0.5,
                }}
                onClick={() => handleItemClick(items.name)}
                disableRipple
              >
                {items.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
