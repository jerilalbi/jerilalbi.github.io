import { Box } from '@mui/material'
import React from 'react'
import SkillGraphSec from '../components/skillGraph'
import SkillDetails from '../components/skillDetails'

function Skills () {
  return (
    <Box
    id="skills"
    sx={skillSec}>
      <SkillGraphSec/>
      <SkillDetails/>
    </Box>
  )
}

export default Skills

const skillSec = {
    display: 'flex',
    flexDirection: {md: 'row', xs: 'column'},
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '80vh',
    marginY: "20px",
    bgcolor: "blue",
    backgroundImage: "linear-gradient(to top, rgba(2, 21, 38, 0.5), rgba(2, 21, 38, 1)), url('./images/Anfield.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "12px",
    boxSizing: "border-box",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "15px",
      backgroundImage: "linear-gradient(to top, rgba(2, 21, 38, 1), transparent)",
      zIndex: 3,
    },
    "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    backgroundColor: `rgba(2, 21, 38, 0.6)`,
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 4,
  },
}