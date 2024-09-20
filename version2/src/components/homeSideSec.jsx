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
          <RadarGraph />
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
  // bgcolor: "red",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "100vh",
  right: "0",
  padding: "14px",
  boxSizing: "border-box",
};

const contentBox = {
  bgcolor: "rgba(255, 255, 255, 0.04)",
  width: "250px",
  borderRadius: "10px",
  boxSizing: "border-box",
  padding: "8px",
  cursor: "pointer",
};

export default HomeSideSec;
