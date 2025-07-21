import React from 'react';
import { Box, Typography, Chip, useTheme, Avatar } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', icon: '/skills/javascript.png' },
      { name: 'Java', icon: '/skills/java.png' },
      { name: 'Python', icon: '/skills/python.png' },
      
      
      { name: 'SQL', icon: '/skills/sql.png' },
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'Tailwind CSS', icon: '/skills/tailwind.png' },
      { name: 'HTML5', icon: '/skills/html.jpg' },
      { name: 'CSS3', icon: '/skills/css.svg' },
     { name: 'Redux', icon: '/skills/redux.png' },
      
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/skills/node.png' },
      { name: 'Express', icon: '/skills/express.png' },
      { name: 'SpringBoot', icon: '/skills/springboot.png' },
      { name: 'REST API', icon: '/skills/rest.png' },
    ]
  },
  {
    name: 'DevOps ',
    skills: [
      { name: 'Docker', icon: '/skills/docker.png' },
      
      { name: 'AWS', icon: '/skills/aws.png' },
     
    ]
  },
  {
    name: 'Databases',
    skills: [
      
      { name: 'MongoDB', icon: '/skills/mongodb.png' },
      { name: 'MySQL', icon: '/skills/mysql.png' },
      
      { name: 'Firebase', icon: '/skills/firebase.png' },
    ]
  },
  {
    name: 'Tools & Other',
    skills: [
      { name: 'Git & Github', icon: '/skills/github.png' },
    
    
      
      { name: 'Postman', icon: '/skills/postman.png' },
      { name: 'Linux', icon: '/skills/linux.png' },
     
    ]
  }
];

const Skills = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10,
        px: 4,
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #d1d8e0 0%, #f5f7fa 50%, #e4e8f0 100%)',
      }}
    >
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 30% 50%, rgba(46, 79, 126, 0.2) 0%, transparent 70%)'
          : 'radial-gradient(circle at 30% 50%, rgba(207, 222, 243, 0.3) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 6,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              color: theme.palette.text.primary,
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: theme.palette.primary.main,
                borderRadius: '2px',
              }
            }}
          >
            My Skills
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ 
                duration: 0.5,
                delay: 0.1 + (catIndex * 0.1),
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    '&:before, &:after': {
                      content: '""',
                      flex: 1,
                      height: '1px',
                      background: theme.palette.divider,
                      mr: 2,
                      ml: 2,
                    }
                  }}
                >
                  {category.name}
                </Typography>
                
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={controls}
                      variants={{
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.2 + (catIndex * 0.1) + (skillIndex * 0.03),
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <Chip
                        avatar={<Avatar 
                          src={skill.icon} 
                          alt={skill.name} 
                          sx={{ 
                            width: 32,  // Increased from 28
                            height: 32, // Increased from 28
                            backgroundColor: 'transparent',
                            img: {
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%'
                            }
                          }} 
                        />}
                        label={skill.name}
                        sx={{
                          px: 2,  // Increased from 1.5
                          py: 2,  // Increased from 1.8
                          borderRadius: '12px',
                          fontSize: '1rem', // Increased font size
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.08)'
                            : 'rgba(0, 0, 0, 0.03)',
                          border: theme.palette.mode === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.12)'
                            : '1px solid rgba(0, 0, 0, 0.08)',
                          '&:hover': {
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.15)'
                              : 'rgba(0, 0, 0, 0.08)',
                            boxShadow: theme.shadows[2]
                          },
                          '& .MuiChip-label': {
                            paddingLeft: '8px',
                            fontSize: '1.05rem' // Increased from 0.95rem
                          }
                        }}
                        component={motion.div}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Visual showcase of key skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '4rem' }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ 
              mb: 4,
              fontWeight: 500,
              color: theme.palette.text.secondary
            }}
          >
            Core Technologies I Work With
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 4,
              px: { xs: 2, md: 4 }
            }}
          >
            {[
              '/skills/react-large.png',
              '/skills/typescript-large.png',
              '/skills/nodejs-large.png',
              '/skills/python-large.png',
              '/skills/postgresql-large.png',
              '/skills/docker-large.png'
            ].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Box
                  component="img"
                  src={icon}
                  alt="Technology logo"
                  sx={{
                    height: { xs: '48px', sm: '56px', md: '64px' },
                    width: 'auto',
                    filter: theme.palette.mode === 'dark' 
                      ? 'brightness(0) invert(0.9)' 
                      : 'none',
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      filter: theme.palette.mode === 'dark' 
                        ? 'brightness(0) invert(1)' 
                        : 'brightness(1.05)'
                    }
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skills;