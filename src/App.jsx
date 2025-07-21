// import React, { useState, useEffect } from 'react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import { lightTheme, darkTheme } from './theme';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check user's preferred color scheme
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     setDarkMode(prefersDark);
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <CssBaseline />
//       <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box 
        sx={{
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: darkMode ? '#1a1a2e' : '#f5f7fa',
          },
          '&::-webkit-scrollbar-thumb': {
            background: darkMode ? darkTheme.palette.primary.main : lightTheme.palette.primary.main,
            borderRadius: '4px',
          },
        }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;