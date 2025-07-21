import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        background: theme.palette.mode === 'dark'
          ? 'rgba(22, 33, 62, 0.7)' // Matches contact page dark gradient
          : 'rgba(225, 232, 240, 0.7)', // Matches contact page light gradient
        backdropFilter: 'blur(8px)',
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        zIndex: 1,
      }}
      component="footer"
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          gap: 1,
          '& .MuiIconButton-root': {
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: theme.palette.primary.main,
              transform: 'translateY(-3px)',
              background: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'rgba(0, 0, 0, 0.05)',
            }
          }
        }}>
          <motion.a
            href="https://linkedin.com/in/jagtapnikhil1806"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <IconButton>
              <LinkedIn fontSize="medium" />
            </IconButton>
          </motion.a>
          <motion.a
            href="https://github.com/jagtapnikhil1806"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <IconButton>
              <GitHub fontSize="medium" />
            </IconButton>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <IconButton>
              <Twitter fontSize="medium" />
            </IconButton>
          </motion.a>
        </Box>
        <Typography 
          variant="body2" 
          sx={{
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            fontSize: '0.875rem',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Nikhil Jagtap. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;