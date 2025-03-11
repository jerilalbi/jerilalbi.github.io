import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "secondary.main",
                color: "white",
                py: 2,
                px: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: { xs: "center", md: "left" }
            }}
        >
            <Box
            component={"img"}
            src="/images/ja-logo.png"
            alt="logo"
            sx={{ height: "30px", width: "50px", objectFit: "contain" }}
          />

            <Stack direction="row" spacing={2}>
                <IconButton
                    component="a"
                    href="https://github.com/jerilalbi"
                    target="_blank"
                    sx={{ color: "#fff" }}
                >
                    <GitHub />
                </IconButton>

                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/jeril-albi/"
                    target="_blank"
                    sx={{ color: "#fff" }}
                >
                    <LinkedIn />
                </IconButton>

                <IconButton
                    component="a"
                    href="https://api.whatsapp.com/send?phone=+918075041750&text=Hi"
                    target="_blank"
                    sx={{ color: "#25D366" }}
                >
                    <WhatsApp />
                </IconButton>
            </Stack>
            <Typography
                variant="body2"
                sx={{ mt: { xs: 2, md: 0 } }}
            >
                © {currentYear}
            </Typography>
        </Box>
    );
}