import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import fontStyles from '../theme/fontSize'

function SkillTile(props) {
  return (
    <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2.5px"
    }}>
        <Typography sx={{
            fontSize: fontStyles.fontBodyMed,
            fontWeight: "600"
        }}>
            {props.title}
        </Typography>
        <Tooltip title = {props.message} >
        <Typography sx={{
            fontWeight: "600",
            fontSize: fontStyles.fontBodyMed,
            cursor: "pointer",
            color: props.isSkill ? setColor(props.value) : "white"
        }}>
            {props.value}
        </Typography>
        </Tooltip>
    </Box>
  )
}

export default SkillTile

const setColor = (value) => {
    const skillVal  = parseInt(value,10)
    if(skillVal > 85) {
        return "#00fbff";
    }else{
        return "#08ff42";
    }
}