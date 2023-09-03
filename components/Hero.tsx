"use client";
import React from "react";
import Image from "next/image";
import BannerImage from "../assets/banner.jpg";
import { Box, styled } from "@mui/material";

const ImageStyle = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "500px",
  objectFit: "cover",
}));

const Hero = () => {
  return (
    <Box>
      <ImageStyle
        width={1920}
        height={1280}
        src={BannerImage}
        alt="Rich Cocktail - Best-selling cocktail ever in the city"
      />
    </Box>
  );
};

export default Hero;
