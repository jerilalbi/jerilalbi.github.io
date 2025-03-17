import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";

function Header(props) {
  const [activeItem, setActiveItem] = useState("HOME");

  const headerItems = [
    {
      name: "HOME",
      path: "home",
    },
    {
      name: "PROJECTS",
      path: "projects",
    },
    {
      name: "SKILLS",
      path: "skills",
    },
    {
      name: "TIMELINE",
      path: "timeline",
    },
  ];

  const handleItemClick = (item,path) => {
    const element = document.getElementById(path);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
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
                  fontSize: {xs: "13px",sm: "15px"},
                  fontWeight: "600",
                  opacity: activeItem === items.name ? 1 : 0.5,
                }}
                onClick={() => handleItemClick(items.name, items.path)}
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
