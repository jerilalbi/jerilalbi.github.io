import { Box } from "@mui/material";
import { useContext } from "react";
import { ScrollContext } from "../providers/scrollProvider";

function ParallaxSec({ children }) {
  const { scrollPos } = useContext(ScrollContext);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "secondary.main",
        paddingX: "72px",
        boxSizing: "border-box",
        position: "absolute",
        top: "100vh",
        overflowX: "hidden",
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
