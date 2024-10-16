import { Box } from "@mui/material";
import { useContext } from "react";
import { ScrollContext } from "../providers/scrollProvider";

function ParallaxSec({ children }) {
  const { scrollPos } = useContext(ScrollContext);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "secondary.main",
        position: "absolute",
        top: "100vh",
        transform: `translateY(-${Math.min(scrollPos, 0)}px)`,
        zIndex: "1000",
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </Box>
  );
}

export default ParallaxSec;
