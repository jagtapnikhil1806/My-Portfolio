import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, useTheme, Button, IconButton, Tooltip } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHub, OpenInNew, ArrowForward, ArrowBack } from '@mui/icons-material';

const projects = [
  {
    title: 'Dynamic Course Recommendation App',
    description: 'A personalized learning system that dynamically recommends courses based on user interests, progress, and skill level using intelligent algorithms.',
    image: 'projects/project1.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    demoUrl: 'https://dynamic-course-recommendation-platf.vercel.app/',
    codeUrl: 'https://github.com/jagtapnikhil1806/Personalized-Learning-Platform-Final-Project',
  },
  {
    title: 'Smart Laundry Service Web App',
    description: 'Online laundry management system using the MERN stack, enabling users to schedule pickups, track orders, and make secure payments.',
    image: 'projects/project2.png',
    tags: ['React', 'Node', 'Razorpay', 'RestAPI'],
    demoUrl: 'https://washit-silk.vercel.app/',
    codeUrl: 'https://github.com/jagtapnikhil1806/Washit',
  },
  
  {
    title: 'Real-Time Chat Application',
    description: 'A real-time chat application supporting one-to-one and group messaging with seamless file sharing capabilities.',
    image: 'projects/project3.png',
    tags: ['React', 'Node', 'ChatEngine.io','API'],
    demoUrl: '',
    codeUrl: 'https://github.com/jagtapnikhil1806/Realtime-Chat-Application',
  },
  {
    title: 'Content Management Blog App',
    description: 'A responsive blog platform built with React.js enabling users to create, edit, and manage posts with rich content and media support.',
    image: 'projects/project4.png',
    tags: ['React', 'Redux', 'React-Router','Auth'],
    demoUrl: '',
    codeUrl: 'https://github.com/jagtapnikhil1806/React-Blog-App',
  },{
    title: 'Video Streaming Platform Backend',
    description: 'A scalable and secure backend for a video streaming platform, handling user authentication, video uploads, playback, and analytics using Node.js and MongoDB',
    image: 'projects/project5.png',
    tags: ['Node', 'MongoDB', 'JWT','RestAPI'],
    demoUrl: '',
    codeUrl: 'https://github.com/jagtapnikhil1806/Video-Streaming-Platform',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern developer portfolio with interactive elements and dark mode.',
    image: 'projects/project6.png',
    tags: ['React', 'Vite', 'Framer Motion', 'MUI'],
    demoUrl: '#',
    codeUrl: 'https://github.com/jagtapnikhil1806/My-Portfolio',
  },
];

const Projects = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth * 0.8,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth * 0.8,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 8,
        px: 0,
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 50%, #d1d8e0 100%)',
      }}
    >
      {/* Subtle grid pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px)'
          : 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 0,
      }} />

      <Box sx={{ 
        width: '100%',
        mx: 'auto',
        position: 'relative',
        zIndex: 1,
        px: { xs: 2, md: 4 },
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 6,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 800,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(to right, #fff, #aaa)'
                : 'linear-gradient(to right, #333, #666)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: theme.palette.primary.main,
                borderRadius: '2px',
              }
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        {/* Navigation arrows */}
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          px: { xs: 1, md: 2 }
        }}>
          <Tooltip title="Scroll left" arrow>
            <IconButton
              onClick={scrollLeft}
              sx={{
                pointerEvents: 'auto',
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                boxShadow: theme.shadows[4],
              }}
            >
              <ArrowBack fontSize="medium" />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Scroll right" arrow>
            <IconButton
              onClick={scrollRight}
              sx={{
                pointerEvents: 'auto',
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                boxShadow: theme.shadows[4],
              }}
            >
              <ArrowForward fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Horizontal scroll container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 4,
            py: 4,
            px: { xs: '5%', md: '10%' },
            scrollSnapType: 'x mandatory',
            scrollPadding: '0 10%',
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.primary.main,
              borderRadius: '10px',
            },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={project.title}
              sx={{
                width: { xs: '85%', sm: '60%', md: '35%' },
                minWidth: { xs: '85%', sm: '60%', md: '35%' },
                scrollSnapAlign: 'center',
                flexShrink: 0,
                position: 'relative',
                '&:hover': {
                  '& .card-shadow': {
                    opacity: 1,
                    transform: 'scale(0.98) translateY(16px)',
                  }
                }
              }}
            >
              {/* Floating shadow effect */}
              <Box 
                className="card-shadow"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '5%',
                  right: '5%',
                  height: '100%',
                  borderRadius: '16px',
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0))' 
                    : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0))',
                  filter: 'blur(12px)',
                  opacity: 0,
                  transform: 'scale(0.95) translateY(10px)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: -1,
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3 + (index * 0.15),
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(25, 25, 35, 0.9)'
                      : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.3)' 
                      : 'rgba(0, 0, 0, 0.1)'}`,
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.08)'
                      : '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformStyle: 'preserve-3d',
                    '&:hover': {
                      transform: 'translateY(-8px) rotateX(5deg)',
                      boxShadow: `0 12px 40px ${theme.palette.mode === 'dark' 
                        ? 'rgba(0, 0, 0, 0.5)' 
                        : 'rgba(0, 0, 0, 0.2)'}`,
                    }
                  }}
                  component={motion.div}
                  whileHover={{ 
                    boxShadow: `0 16px 48px ${theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.6)' 
                      : 'rgba(0, 0, 0, 0.25)'}`,
                  }}
                >
                  {/* Card background with subtle 3D effect */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, rgba(40,40,50,0.9), rgba(30,30,40,0.9))'
                      : 'linear-gradient(145deg, rgba(245,245,255,0.9), rgba(235,235,245,0.9))',
                    borderRadius: '16px',
                    zIndex: -1,
                    transform: 'translateZ(-1px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? 'inset 0 0 20px rgba(0,0,0,0.5)'
                      : 'inset 0 0 20px rgba(0,0,0,0.1)',
                  }} />

                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      }
                    }}
                  />
                  
                  {/* Gradient overlay for image */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '240px',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)',
                  }} />

                  <CardContent sx={{ 
                    flexGrow: 1,
                    p: 3,
                    position: 'relative',
                    minHeight: '220px', // Ensures consistent card height
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: 0,
                          width: '40px',
                          height: '3px',
                          background: theme.palette.primary.main,
                          borderRadius: '2px',
                        }
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      paragraph 
                      sx={{ 
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: '72px', // Ensures consistent description height
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 3,
                      minHeight: '32px', // Ensures consistent tags height
                    }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ 
                            fontWeight: 500,
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.08)'
                              : 'rgba(0, 0, 0, 0.05)',
                            border: theme.palette.mode === 'dark'
                              ? '1px solid rgba(255, 255, 255, 0.1)'
                              : '1px solid rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                              background: theme.palette.primary.main,
                              color: '#fff',
                            }
                          }}
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  
                  <Box sx={{ 
                    p: 2,
                    display: 'flex', 
                    justifyContent: 'space-between',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(0, 0, 0, 0.02)',
                    borderTop: `1px solid ${theme.palette.divider}`
                  }}>
                    <Button
                      variant="contained"
                      size="medium"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNew />}
                      component={motion.a}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: `0 4px 16px ${theme.palette.primary.main}`
                      }}
                      sx={{
                        borderRadius: '8px',
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: `0 2px 8px ${theme.palette.primary.main}`
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outlined"
                      size="medium"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<GitHub />}
                      component={motion.a}
                      whileHover={{ 
                        scale: 1.03,
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.05)',
                      }}
                      sx={{
                        borderRadius: '8px',
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        textTransform: 'none',
                        borderWidth: '2px',
                      }}
                    >
                      View Code
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '24px',
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'inline-flex',
              alignItems: 'center',
              color: theme.palette.text.secondary,
              '&:after, &:before': {
                content: '""',
                display: 'inline-block',
                width: '40px',
                height: '1px',
                background: theme.palette.divider,
                mx: 2,
              }
            }}
          >
            Scroll to explore more projects
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Projects;