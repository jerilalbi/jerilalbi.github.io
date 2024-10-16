import { Box, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React, { useContext, useEffect, useState } from "react";
import { BoxContext } from "../providers/boxProvider";

function ProjectSideDetails() {
  const { boxes, activeBox, setOpenProject } = useContext(BoxContext);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(false);
    const timeOut = setTimeout(() => {
      setAnimation(true);
    }, 500);

    // const handleClickOutside = (event) => {
    //   if (growBoxRef.current && !growBoxRef.current.contains(event.target)) {
    //     setReadmore(false);
    //   }
    // };

    return () => clearTimeout(timeOut);
  }, [activeBox]);

  return (
    <Box
      sx={{
        flexGrow: "1",
        display: "flex",
        height: "500px",
        bgcolor: "primary.main",
        marginLeft: "20px",
        marginY: "auto",
        borderRadius: "10px",
        boxSizing: "border-box",
        padding: "8px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          component={"img"}
          src={boxes[activeBox].projectImg}
          sx={{
            height: "80px",
            width: "80px",
            borderRadius: "80px",
            bgcolor: "white",
            objectFit: "contain",
            transition: "opacity .5s ease",
            opacity: animation ? 1 : 0,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              color: "white",
              fontWeight: "750",
              fontSize: "25px",
              lineHeight: "25px",
              transition: "transform 0.5s ease-in, opacity 0.5s",
              opacity: animation ? 1 : 0,
              transform: animation ? "translateX(0px)" : "translateX(20px)",
            }}
          >
            {boxes[activeBox].text}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                color: "white",
                fontWeight: "750",
                fontSize: "17px",
              }}
            >
              GitHub
            </Typography>
            <LinkIcon sx={{ color: "white", marginLeft: "3px" }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          flex: "1",
          marginTop: "10px",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            gridRow: "span 7",
            borderRadius: "15px",
            background: `url(https://cdn.prod.website-files.com/63894f0e251e567f6e443bfa/63aa9998860562a8243c1f02_Spotify-1.jpeg)`,
            backgroundSize: "cover",
            transition: "transform 0.3s linear",
            transform: animation ? "translateX(0px)" : "translateX(20px)",
          }}
        />
        <Box
          sx={{
            gridRow: "span 3",
            borderRadius: "15px",
            background: `url(https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5ce12e157e30fb091a1ca23a_01_trips_appstore_screenshots.png)`,
            backgroundSize: "cover",
            transition: "transform 0.4s linear",
            transform: animation ? "translateX(0px)" : "translateX(20px)",
          }}
        />
        <Box
          sx={{
            gridRow: "span 3",
            borderRadius: "15px",
            background: `url(https://cdn.prod.website-files.com/5b0c471ddb589cf22d4477a4/5ce12e157e30fb091a1ca23a_01_trips_appstore_screenshots.png)`,
            backgroundSize: "cover",
            transition: "transform 0.5s linear",
            transform: animation ? "translateX(0px)" : "translateX(20px)",
          }}
        />
        <Box
          sx={{
            borderRadius: "15px",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Lato, sans-serif",
            fontWeight: "750",
            fontSize: "15px",
            cursor: "pointer",
            transition: "transform 0.5s linear",
            transform: animation ? "translateY(0px)" : "translateY(-20px)",
          }}
          onClick={() => setOpenProject(true)}
        >
          Read More
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectSideDetails;
