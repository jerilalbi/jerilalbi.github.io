import { Box } from '@mui/material'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ScrollContext } from '../providers/scrollProvider';

export const OpacityBox = ({children}) => {
    const { scrollPos, setScrollPos } = useContext(ScrollContext);
      const [ opacity,setOpacity] = useState(0);
    
      const handleScroll = useCallback(() => {
          setOpacity(Math.max(0, scrollPos / 8 / 100))
          setScrollPos(window.scrollY);
        },[scrollPos, setScrollPos]);
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [handleScroll]); 
  return (
    <Box
          sx={{
            display: "flex",
            position: "fixed",
            width: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(2, 21, 38, ${opacity})`,
              zIndex: 150,
              pointerEvents: "none",
            },
          }}
        >
            {children}
        </Box>
  )
}