'use client';
import { Box, Typography, styled, useTheme } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface Props {
  title?: string;
  sub?: string;
  children?: ReactNode;
}

const StyledSection = styled('section')(({theme}) => ({
    paddingBlockStart: '2rem',
    paddingBlockEnd: '2rem',
    [theme.breakpoints.up('lg')]: {
        paddingBlockStart: '4rem',
        paddingBlockEnd: '4rem',
    }
}))

const Section: FC<Props> = ({ title, sub, children }) => {
    const theme = useTheme();
  return (
    <StyledSection>
      <Typography variant="h4" component="h1" mb={1} textTransform='uppercase' letterSpacing={4} sx={{borderLeft: '4px solid', borderColor: theme.palette.primary.main, paddingLeft: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="h6" component="h4" mb={4}>
        {sub}
      </Typography>
      <Box>{children}</Box>
    </StyledSection>
  );
};

export default Section;
