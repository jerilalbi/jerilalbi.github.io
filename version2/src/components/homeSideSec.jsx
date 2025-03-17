import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import RadarGraph from "./radarGraph";

const recentProjects = ["PORTFOLIO \n WEBSITE", "TELEGRAM BOT", "SHOPPING APP"];

function HomeSideSec() {
  return (
    <Box sx={parentBox}>
      <Box sx={contentBox}>
        <Typography sx={{ color: "rgba(0, 204, 0)", fontWeight: "800" }}>
          OPEN TO WORK
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: "13px",
            lineHeight: "30px",
          }}
        >
          PREVIOUS EMPLOYMENT
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "800" }}>
          MOBILE APP ENGINEER INTERNSHIP
        </Typography>
      </Box>
      <Box sx={contentBox}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: "15px",
            lineHeight: "30px",
          }}
        >
          SKILLS
          <RadarGraph id = "home" height = "200" width = "200" logoSize = {15}/>
        </Typography>
      </Box>
      <Box sx={contentBox}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: "15px",
            lineHeight: "30px",
          }}
        >
          RECENT PROJECTS
        </Typography>
        <List sx={{ listStyle: "disc" }}>
          {recentProjects.map((val) => (
            <ListItem
              sx={{
                display: "list-item",
                listStylePosition: "inside",
                color: "white",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              {val}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

const parentBox = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: {xs: "row", md: "column"},
  height: {xs: "auto", md: "100vh"},
  width: {xs: "80%", md: "auto"},
  right: "0",
  bottom: {xs: "0", md: "auto"},
  padding: "14px",
  boxSizing: "border-box",
  overflowY: "auto",
};

const contentBox = {
  bgcolor: "rgba(255, 255, 255, 0.04)",
  width: "250px",
  flexShrink: "0",
  borderRadius: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: {xs: "20px", md: "0"},
  alignItems: "center",
  padding: "8px",
  cursor: "pointer",
};

export default HomeSideSec;
