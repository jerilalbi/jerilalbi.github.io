import { Box, Divider, Icon, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconBtns = [
{
  "title" : "LinkedIn",
  "icon": <LinkedInIcon sx={{height: '30px', width: '30px',opacity: '.4',':hover':{opacity: '1'}}}/>,
  "action": ""
},
{
  "title" : "GitHub",
  "icon": <GitHubIcon sx={{height: '30px', width: '30px',opacity: '.4',':hover':{opacity: '1'}}}/>,
  "action": ""
},
{
  "title" : "StackOverflow",
  "icon": <Icon sx={{opacity: '.4',':hover':{opacity: '1'}}}> <img alt='stackoverflow logo' height={'26px'} width={'26px'} src='/icons/stack-overflow.svg'></img> </Icon>,
  "action": ""
},
{
  "title" : "Download CV",
  "icon": <ArticleIcon sx={{height: '30px', width: '30px', opacity: '.4',':hover':{opacity: '1'}}}/>,
  "action": ""
},
]

function HomeIconBox() {
  return (
    <Box sx={iconBoxStyle}>
      {
        iconBtns.map((iconBtns) => 
          <Tooltip title= {iconBtns.title} placement='right'>
            <IconButton sx={{display: 'block', color: 'white', paddingY: '8px', paddingX: '0'}}>
            {iconBtns.icon}
            </IconButton>
          </Tooltip>
        )
      }
      <Divider sx={verticalLine} orientation='vertical'/>
      <Typography sx={{color: 'white', fontSize: '10px', transform: 'rotate(-90deg)',fontWeight: 'bold', mt: '30px',opacity: '.4'}}>Follow</Typography>
    </Box>
  )
}

export default HomeIconBox

const iconBoxStyle = {
  position: 'absolute',
  padding: '1px',
  marginX: '48px',
  top: '50%',
  transform: 'translateY(-50%)',
  boxSizing: 'border-box',
}

const verticalLine = {
  borderWidth: '1px',
  height: '50px',
  width: '0',
  marginX: 'auto',
  borderColor: 'white',
  opacity: '.4'
}