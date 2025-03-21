import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { ProjectContext } from '../providers/ProjectProvider'

function ImagePopUp() {
    const {openImage, setOpenImage, imgUrl, imgPopSecRef} = useContext(ProjectContext)
  return (
    openImage ?
    <Box
    ref={imgPopSecRef}
    sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
        animation: "fadeIn 1s ease-in",
    }}
    onClick={()=> {setOpenImage(false); console.log(openImage)}}
    >
     <Box
        component="img"
        src={imgUrl}
        sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
            animation: "zoomIn 0.3s ease-in-out",
        }}
    />
    </Box> : <></>
  )
}

export default ImagePopUp