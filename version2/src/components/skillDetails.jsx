import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import SkillTile from './skillTile'

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
      value: "82",
      img: "/images/skills/sql.png",
    },
  ]
  return (
    <Box sx={{
        height: "400px",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(95, 95, 95, 0.8)",
        marginLeft: "10px",
        padding: "8px",
        boxSizing: "border-box",
    }}>
      <Box sx={{
        height: "150px",
        width: "100%",
        display: "flex",
        color: "white",
      }}>
        <Box 
        component={"img"}
        src="/images/my_img.png"
        alt="img Jeril"
        sx={{
          height: "100%",
          width: "115px",
          objectFit: "contain",
          objectPosition: "top",
          alignSelf: "flex-end",
        }}/>
        <Box sx={{
          marginLeft: "10px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}>
          <Typography sx={{
            fontSize: "25px",
            fontWeight: "750",
            fontFamily: "Lato, sans-serif",
          }}>Jeril</Typography>
          <Typography sx={{
            fontSize: "25px",
            fontWeight: "750",
            lineHeight: ".6",
            fontFamily: "Lato, sans-serif",
          }}>Albi</Typography>

          <Box sx={{flex: 1, alignContent: "flex-end"}}>
          <Typography sx={{
            fontSize: "19px",
            fontWeight: "450",
            marginBottom: "7px"
          }}>Age</Typography>

          <Box sx={{display: "flex"}}>
            <Typography sx={{
              fontSize: "23px",
              fontWeight: "750",
              lineHeight: ".6",
            }}>21</Typography>
            <Box sx={{
              marginLeft: "10px",
              height: "15px",
              width: "15px",
              borderRadius: "15px",
              bgcolor: "rgba(0, 149, 255, 0.8)",
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: "white"}}/>
            <Tooltip title="Software Engineer">
                <Typography sx={{
                  fontSize: "23px",
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
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start"
          }}>
            <Box sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "row-reverse",
            }}>
              <Box
              sx={{
                height: "70%",
                width: "70px",
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
                  fontSize: "17px",
                }}>
                  FREELANCE
                </Typography>
                <Box sx={{
                  height: "30px",
                  width: "40px",
                  backgroundImage: "url(./images/India.webp)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}/>
              </Box>
            </Box>
            <Typography sx={{
              fontWeight: "550",
              fontSize: "15px",
              marginTop: "auto",
            }}
            >Typing Speed: <Typography component={"span"} fontWeight={"750"}>32 WPM</Typography> </Typography>
            <Typography sx={{
              fontWeight: "550",
              fontSize: "15px",
            }}
            >Languages: 
            <Tooltip title = "English ( conversational )"><Typography component={"span"} fontWeight={"750"}> EN</Typography></Tooltip>,
            <Tooltip title = "Malayalam ( native )"><Typography component={"span"} fontWeight={"750"}> MAL</Typography></Tooltip>
            </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        width: "100%",
        flexGrow: "1",
        marginTop: "30px",
        color: "white",
        overflowY: "auto",
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
          fontSize: "23px",
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
            fontSize: "40px",
            lineHeight: ".7",
            color: "#08ff42"
          }}>
            83
          </Typography>
          </Box>
          <Box sx={{
            height: "70px",
            flexGrow: "1",
            marginLeft: "70px",
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
          fontSize: "23px",
        }}>
          Summary
        </Typography>
        <Box sx={{
          width: "100%",
          flex: "1",
          overflowY: "auto",
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