import { Box, Typography } from '@mui/material'
import React from 'react'
import RadarGraph from './radarGraph'

function SkillGraphSec() {
  return (
    <Box sx={{
        height: "400px",
        width: "500px",
        bgcolor: "rgba(65, 65, 65, 0.8)",
        padding: "8px",
        boxSizing: "border-box",
    }}>
        <Typography sx={{
            color: "white",
            fontSize: "23px",
            fontWeight: "750",
            fontFamily: "Lato, sans-serif",
            marginBottom: "15px"
        }}>
            SKILLS
        </Typography>
        <RadarGraph id = "skills" height = "300" width = "300" logoSize = {35} />
    </Box>
  )
}

export default SkillGraphSec