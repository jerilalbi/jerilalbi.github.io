import { Box } from '@mui/material'
import React from 'react'

function TimelineFootball(props) {
  return (
    <Box sx={{
        width: "40px",
        height: "40px",
        marginTop: "60px",
        // marginTop: "10px",
        bgcolor: "white",
        backgroundImage: "url('./images/football.png')",
        backgroundSize: "cover",
        borderRadius: "50%",
        position: "absolute",
        zIndex: "10",
        opacity: "0",
        animation: props.activeSec === "Experience" ? 
          "moveFootball_Backward 1.5s ease, footballOpacity 1.5s ease" :
          "moveFootball_Forward 1.5s ease, footballOpacity 1.5s ease",
        "@keyframes moveFootball_Forward": {
            from: { transform: "translateX(0px) rotate(0deg)" },
            to: { transform: "translateX(330px) rotate(360deg)" },
        },
        "@keyframes moveFootball_Backward": {
            from: { transform: "translateX(330px) rotate(0deg)" },
            to: { transform: "translateX(0px) rotate(360deg)" },
        },
        "@keyframes footballOpacity": {
            from: { opacity: "1" },
            to: { opacity: "0" },
        },
    }}>

    </Box>
  )
}

export default TimelineFootball