import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  useScrollTrigger,
  Slide,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import { 
  Brightness4, 
  Brightness7, 
  Menu,
  Home,
  Person,
  Code,
  Work,
  Mail,
  Download
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home', icon: <Home /> },
  { name: 'About', id: 'about', icon: <Person /> },
  { name: 'Skills', id: 'skills', icon: <Code /> },
  { name: 'Projects', id: 'projects', icon: <Work /> },
  { name: 'Contact', id: 'contact', icon: <Mail /> }
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume download logic
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nikhil-Jagtap-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            color: theme.palette.primary.main
          }}
        >
          Portfolio
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                color: activeSection === item.id 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary,
                fontWeight: activeSection === item.id ? 600 : 400
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<Download />}
          onClick={handleDownloadResume}
          sx={{
            mb: 2,
            borderRadius: '8px',
            fontWeight: 600,
          }}
        >
          Download CV
        </Button>
      </Box>
      <Box sx={{ p: 2 }}>
        <IconButton onClick={toggleDarkMode} sx={{ width: '100%' }}>
          {darkMode ? (
            <Brightness7 sx={{ mr: 1 }} />
          ) : (
            <Brightness4 sx={{ mr: 1 }} />
          )}
          <Typography>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
          }}
        >
          <Toolbar sx={{ 
            maxWidth: '1400px', 
            width: '100%', 
            mx: 'auto',
            px: { xs: 2, sm: 4 },
          }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                cursor: 'pointer',
              }}
              onClick={() => scrollToSection('home')}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: theme.palette.primary.main,
                  display: 'inline-block',
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [-2, 2, -2],
                }}
              >
                Portfolio
              </motion.span>
            </Typography>

            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography
                    variant="body1"
                    component="a"
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    sx={{
                      px: 2,
                      py: 1,
                      textDecoration: 'none',
                      color: activeSection === item.id 
                        ? theme.palette.primary.main 
                        : theme.palette.text.primary,
                      fontWeight: activeSection === item.id ? 600 : 400,
                      position: 'relative',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: activeSection === item.id 
                          ? 'translateX(-50%) scaleX(1)' 
                          : 'translateX(-50%) scaleX(0)',
                        width: '60%',
                        height: '2px',
                        background: theme.palette.primary.main,
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover:after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      }
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      fontSize: 'small',
                      color: activeSection === item.id 
                        ? 'primary' 
                        : 'inherit'
                    })}
                    {item.name}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              ml: 2,
              gap: 2
            }}>
              <Button
                variant="outlined"
                startIcon={<Download />}
                onClick={handleDownloadResume}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  borderRadius: '8px',
                  fontWeight: 600,
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Resume
              </Button>

              <IconButton 
                onClick={toggleDarkMode} 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {darkMode ? (
                  <Brightness7 sx={{ 
                    color: theme.palette.secondary.main,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'rotate(30deg)'
                    }
                  }} />
                ) : (
                  <Brightness4 sx={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'rotate(30deg)'
                    }
                  }} />
                )}
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: theme.palette.text.primary,
                }}
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            borderRight: 'none',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;