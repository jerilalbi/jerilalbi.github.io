import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RadarGraph from './radarGraph'
import { useTheme } from '@emotion/react'

function SkillGraphSec() {

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));

  const [chartSize, setChartSize] = useState({size: "300", logo: "35"});
  const [key, setKey] = useState(0);

  useEffect(() => {
    let newSize;
    let newLogoSize;
    if (isLg){ newSize = "300"; newLogoSize = "35";}
    else if (isMd){ newSize = "250"; newLogoSize = "30";}
    else if (isSm){ newSize = "200"; newLogoSize = "25";}

    setChartSize({size: newSize, logo:newLogoSize});
    setKey((prevKey) => prevKey + 1);
  },[isLg, isMd, isSm, isXs]);


  return (
    <Box sx={{
        display: {md: "block", xs: "none"},
        height: {lg: "400px", md: "350px"},
        width: {lg: "500px", md: "400px"},
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
        <RadarGraph key={key}  id = "skills" height =  {chartSize.size} width = {chartSize.size} logoSize = {chartSize.logo}/>
    </Box>
  )
}

export default SkillGraphSec