import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position='static' elevation={0}>
      <Container maxWidth="xl" sx={{bgcolor: 'secondary.main'}}>
        <Toolbar>
          <Box component={'img'} src="/images/ja-logo.png" alt='logo' sx={{height: "50px", width: "70px", objectFit: 'contain'}}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header