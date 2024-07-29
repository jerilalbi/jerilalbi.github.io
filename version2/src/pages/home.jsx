import React from 'react'
import Header from '../components/header'
import { Box, Button, Container } from '@mui/material'
import HomeImage from '../components/homeImg'

function Home() {
  return (
    <Box display={'flex'}>
      <Container maxWidth='md' sx={{bgcolor:"secondary.main",float:'left',height:'100vh'}}>
        <Header/>
        <HomeImage/>
      </Container>
      <Container maxWidth='sm' sx={{bgcolor: "primary.main", float:'left',height: '100vh'}}>
      </Container>
    </Box>
  )
}

export default Home