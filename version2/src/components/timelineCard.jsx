import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'

function TimelineCard({data,activeSec}) {
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "70%",
        bgcolor: "primary.main",
        color: "white",
        alignItems: "center",
        marginRight: "50px",
        flexShrink: "0",
        borderRadius: "15px",
        animation: activeSec === "Experience" ? "expAnimation 1s ease" : "eduAnimation 1s ease",
        '@keyframes expAnimation': {
            from: { opacity: 0, transform: 'translateX(3000px)' },
            to: { opacity: 1, transform: 'translateX(0)' }
        },
        '@keyframes eduAnimation': {
            from: { opacity: 0, transform: 'translateX(-3000px)' },
            to: { opacity: 1, transform: 'translateX(0)' }
        }
    }}>
        <Box 
        component={"img"}
        src={data.bgImg}
        sx={{
            height: "50%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "15px 15px 0 0",
        }}/>
        <Tooltip title = {data.companyName}>
        <Box 
        component={"img"}
        alt='company logo'
        src={data.companyLogo}
        sx={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            bgcolor: "white",
            position: "absolute",
            top: "45%",
            objectFit: `${data.imgfit}`,
        }}/>
        </Tooltip>
        <Typography sx={{
            fontSize: "14px",
            fontWeight: "800",
            marginTop: "40px",
            whiteSpace: "pre-line"
        }}>
            {data.title}
        </Typography>
        <Typography sx={{
            fontSize: "13px",
            fontWeight: "800",
            marginTop: "10px",
            color: "gray"
        }}>
            {data.duration}
        </Typography>
    </Box>
  )
}

export default TimelineCard