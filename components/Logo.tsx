"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Box
        sx={{
          border: "2px solid",
          borderColor: theme.palette.text.primary,
          borderRadius: "5rem",
          width: '50px',
          height: '50px',
          padding: '1rem',
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
        }}
      >
        <LocalBarOutlinedIcon sx={{ fontSize: '1.7rem' }} />
      </Box>
      <Typography variant="h4" component="p" sx={{display: {xs: 'none', md: 'block'}}}>
        Rich Cocktail
      </Typography>
    </Box>
  );
};

export default Logo;
