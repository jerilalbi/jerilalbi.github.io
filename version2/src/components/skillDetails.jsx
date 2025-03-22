import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import SkillTile from './skillTile'
import fontStyles from '../theme/fontSize'

function SkillDetails() {
  const skillData = [
    {
      title: "Flutter",
      value: "88",
      img: "/images/skills/flutter.png",
    },
    {
      title: "HTML",
      value: "90",
      img: "/images/skills/html.png"
    },
    {
      title: "PHP",
      value: "75",
      img: "/images/skills/php.png",
    },
    {
      title: ".Net",
      value: "71",
      img: "/images/skills/dotnet.png",
    },
    {
      title: "Node JS",
      value: "82",
      img: "/images/skills/nodejs.png",
    },
    {
      title: "React JS",
      value: "85",
      img: "/images/skills/reactjs.png",
    },
    {
      title: "SQL",
      value: "87",
      img: "/images/skills/sql.png",
    },
  ]
  return (
    <Box sx={{
        height: {lg: "400px", md: "350px",sm: "380px"},
        width: {lg: "600px", md: "450px", sm: "87%", xs: "90%"},
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(95, 95, 95, 0.8)",
        marginLeft: "10px",
        padding: "8px",
        boxSizing: "border-box",
    }}>
      <Box sx={{
        height: {lg: "150px", md: "130px"},
        width: "100%",
        display: "flex",
        color: "white",
      }}>
        <Box 
        component={"img"}
        src="/images/my_img.png"
        alt="img Jeril"
        sx={{
          height: {sm: "100%", xs: "80%"},
          width: {sm: "115px", xs: "100px"},
          objectFit: "contain",
          objectPosition: "top",
          alignSelf: "flex-end",
        }}/>
        <Box sx={{
          marginLeft: {sm: "10px", xs: "5px"},
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}>
          <Typography sx={{
            fontSize: {md: fontStyles.fontHeadingLg, sm: "25px", xs: "30px"},
            fontWeight: "750",
            fontFamily: "Lato, sans-serif",
          }}>Jeril</Typography>
          <Typography sx={{
            fontSize: {md: fontStyles.fontHeadingLg, sm: "25px", xs: "30px"},
            fontWeight: "750",
            lineHeight: ".6",
            fontFamily: "Lato, sans-serif",
          }}>Albi</Typography>

          <Box sx={{flex: 1, alignContent: "flex-end"}}>
          <Typography sx={{
            fontSize: {md: "19px", sm: "15px", xs: "18px"},
            fontWeight: "450",
            marginBottom: "7px"
          }}>Age</Typography>

          <Box sx={{display: "flex"}}>
            <Typography sx={{
              fontSize: fontStyles.fontHeadingLg,
              fontWeight: "750",
              lineHeight: ".6",
            }}>21</Typography>
            <Box sx={{
              marginLeft: "10px",
              height: {md: "15px", sm: "12px", xs: "10px"},
              width: {md: "15px", sm: "12px", xs: "10px"},
              borderRadius: {md: "15px", sm: "12px", xs: "10px"},
              bgcolor: "rgba(0, 149, 255, 0.8)",
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: "white"}}/>
            <Tooltip title="Software Engineer">
                <Typography sx={{
                  fontSize: fontStyles.fontHeadingLg,
                  fontWeight: "750",
                  marginLeft: "10px",
                  lineHeight: ".6",
                  cursor: "pointer",
                }}>SE</Typography>
            </Tooltip>
          </Box>
          </Box>
        </Box>
        <Box sx={{
          flexGrow: "1",
          height: "100%",
          marginLeft: {md: "50px", sm: "0"},
          display: "flex",
          flexDirection: "column",
          textAlign: "end",
          }}>
            <Box sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: {sm: "row-reverse", xs: "column-reverse"},
              alignItems: {sm: "normal",xs: "end"}
            }}>
              <Box
              sx={{
                height: {sm: "70%", xs: "40px"},
                width: {sm: "70px", xs: "40px"},
                marginTop: {sm: "0", xs: "5px"},
                backgroundImage: "url(https://www.svgviewer.dev/static-svgs/34708/upwork.svg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              />

              <Box sx={{
                height: "100%",
                width: "50%",
                paddingX: "10px",
                display: "flex",
                flexDirection: "Column",
                alignItems: "flex-end",
              }}>
                <Typography sx={{
                  fontWeight: "750",
                  fontSize: fontStyles.fontHeadingMed,
                }}>
                  FREELANCE
                </Typography>
                <Box sx={{
                  height: {sm: "30px", xs: "20px"},
                  width: {sm: "40px", xs: "30px"},
                  backgroundImage: "url(./images/India.webp)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}/>
              </Box>
            </Box>
            <Typography 
            sx={{
              display: {xs: "none", sm: "block"},
              fontWeight: "550",
              fontSize: fontStyles.fontBodyMed,
              marginTop: "auto",
            }}
            >Typing Speed: <Typography component={"span"} fontWeight={"750"} fontSize={fontStyles.fontBodyLg}>32 WPM</Typography> </Typography>
            <Typography sx={{
              display: {xs: "none", sm: "block"},
              fontWeight: "550",
              fontSize: fontStyles.fontBodyMed,
            }}
            >Languages: 
            <Tooltip title = "English ( conversational )"><Typography component={"span"} fontWeight={"750"} fontSize={fontStyles.fontBodyLg}> EN</Typography></Tooltip>,
            <Tooltip title = "Malayalam ( native )"><Typography component={"span"} fontWeight={"750"} fontSize={fontStyles.fontBodyLg}> MAL</Typography></Tooltip>
            </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        flexGrow: "1",
        marginTop: {lg: "30px", md: "17px", sm: "20px", xs: "25px"},
        color: "white",
        overflowY: "auto",
        scrollbarWidth: "none", 
        "&::-webkit-scrollbar": { display: "none" } 
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "100%",
          paddingRight: "15px",
          borderRight: "1px solid rgba(255, 255, 255, 0.7)",
          alignItems: "start"
        }}>
          <Typography sx={{
          fontWeight: "750",
          fontSize: fontStyles.fontHeadingLg,
        }}>
          Report
        </Typography>
        <Box sx={{
          width: "100%",
          height: "90px",
          paddingY: "10px",
          boxSizing: "border-box",
          display: "flex",
          marginBottom: "2.5px"
        }}>
          <Box sx={{
            height: "70px",
            width: "70px",
          }}> 
          <Typography sx={{
            fontWeight: "750",
          }}>
            OVR
          </Typography>
          <Typography sx={{
            fontWeight: "750",
            fontSize: {lg: "40px", md: "30px", sm: "32px", xs: "35px"},
            lineHeight: ".7",
            color: "#08ff42"
          }}>
            83
          </Typography>
          </Box>
          <Box sx={{
            height: "70px",
            flexGrow: "1",
            marginLeft: {lg: "55px", md: "15px"},
            paddingX: "10px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap"
          }}>
            {
              skillData.map( img => (
                <Box component={"img"} src={img.img} alt='img' sx={smSkillLogo} ></Box>
              ))
            }
          </Box>
        </Box>
        <SkillTile title="Experience" value="1 Yr *" message = "non professional experience"/>
        <SkillTile title="CTC" value="---"/>
        <SkillTile title="Notice Period" value=" --- "/>
        </Box>
        <Box sx={{
          height: "100%",
          flexGrow: "1",
          padding: "2px 2px 2px 20px",
          boxSizing: "border-box",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
        }}>
        <Typography sx={{
          fontWeight: "750",
          fontSize: fontStyles.fontHeadingLg,
        }}>
          Summary
        </Typography>
        <Box sx={{
          width: "100%",
          flex: "1",
          overflowY: "auto",
          scrollbarWidth: "none", 
          "&::-webkit-scrollbar": { display: "none" } 
        }}>
          {
            skillData.map( data => (
              <SkillTile title={data.title} value={data.value} isSkill = {true}/>
            ))
          }
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SkillDetails

const smSkillLogo = {
  height: "20px",
  width: "20px",
  marginX: "7px",
}