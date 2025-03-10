import { Box, Typography } from '@mui/material'
import React from 'react'

function TimeLineOption({title,isActive,onClick,children}) {
  return (
    <Box sx={{
        width: "150px",
        height: "50px",
        bgcolor: isActive ? "white" : "rgba(100, 100, 100, 0.5)",
        transition: "background-color 1.5s ease-in-out",
        borderRadius: "15px",
        marginTop: "60px",
        marginRight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: "5",
    }}
    onClick={onClick}>
        <Typography sx={{
            fontSize: "14px",
            fontWeight: "800",
            textTransform: "uppercase"
        }}>
            {title}
        </Typography>
        {children}
    </Box>
  )
}

export default TimeLineOption