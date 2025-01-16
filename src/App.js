import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#a5ffea',
      dark: '#14b893',
      contrastText: '#0a192f',
    },
    secondary: {
      main: '#8892b0',
      light: '#b4b8c7',
      dark: '#606a86',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
    divider: '#233554',
    action: {
      hover: 'rgba(100, 255, 218, 0.1)',
      selected: 'rgba(100, 255, 218, 0.2)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#233554 #0a192f",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            background: "#0a192f",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#233554",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#64ffda",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App; 