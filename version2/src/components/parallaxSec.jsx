import { Box } from "@mui/material";

function ParallaxSec({ children, scroll }) {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "secondary.main",
        position: "absolute",
        top: "100vh",
        transform: `translateY(-${Math.min(scroll, 0)}px)`,
        zIndex: "1000",
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </Box>
  );
}

export default ParallaxSec;
