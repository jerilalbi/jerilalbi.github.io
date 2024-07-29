import { Container } from '@mui/material'
import React from 'react'
import { imgContainer } from './homeImgStyles'

function HomeImage() {
  return (
    <Container sx={imgContainer}>
        <img src='/images/home_img.png' alt='home_img' style={{maxWidth: '100%', height: 'auto',display: 'block'}}></img>
    </Container>
  )
}

export default HomeImage