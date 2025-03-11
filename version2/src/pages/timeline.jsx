import { Box } from '@mui/material'
import React, { useState } from 'react'
import TimeLineOption from '../components/timelineOption'
import TimelineFootball from '../components/timelineFootball'
import TimelineCard from '../components/timelineCard'
import jsonData from '../data/timeline.json'

function TimeLine() {

    const [activeSec, setActiveSec] = useState("Experience");
    const [activeData, setActiveData] = useState(jsonData.experience);
    const [activeKey, setActiveKey] = useState(0);

    const handleActiveSec = (sec) => {
        setActiveSec(sec);
        setActiveKey(prevKey => prevKey + 1);
        activeSec === "Experience" ? setActiveData(jsonData.education) : setActiveData(jsonData.experience);
    }

    const timelineSec = ["Experience", "Education"]

  return (
    <Box
    sx={skillSec}>
        <Box sx={{
            display: "flex",
        }}>
            {
                timelineSec.map((sec) =>
                ( 
                    <TimeLineOption title = {sec} isActive = {sec === activeSec} onClick={() => handleActiveSec(sec)}/>
                )
                )
            }
            {
                timelineSec.map((sec) =>
                (
                    sec === activeSec && <TimelineFootball activeSec = {activeSec}/>
                )
            )
            }
        </Box>
        <Box 
        key={activeKey}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          scrollbarWidth: "none", 
          "&::-webkit-scrollbar": { display: "none" } 
        }}>
          {
              activeData.map((exp) => (
                <TimelineCard
                activeSec={activeSec}
                data={exp} />
              ))
          }
        </Box>
    </Box>
  )
}

export default TimeLine

const skillSec = {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: '80vh',
    marginY: "20px",
    bgcolor: "blue",
    backgroundImage: "linear-gradient(to top, rgba(2, 21, 38, 0.7), rgba(2, 21, 38, 1)), url('./images/timeline_bg.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    paddingY: "12px",
    paddingX: "75px",
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
    backgroundColor: `rgba(2, 21, 38, 0.7)`,
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 4,
  },
}