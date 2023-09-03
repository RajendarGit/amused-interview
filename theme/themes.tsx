'use client';
import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, styled } from "@mui/material";
import "typeface-poppins";
import { grey } from "@mui/material/colors";
interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: '#B85E0E',
    },
    text: {
      primary: '#ffffff'
    },
    secondary: {
      main: "#FF5722",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: '1rem 2rem'
        },
        root: {
          fontSize: 16,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 3,
          borderRadius: 100,
        }
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: grey[900],
        },
        option: {
          color: '#ffffff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#B85E0E',
          },
        }
      }
    }
  },
});

const Main = styled("main")(({ theme }) => ({
  color: theme.palette.text.primary,
  height: '100vh',
}));

const Themes:FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Themes;
