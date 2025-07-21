import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useTheme, Snackbar, Alert } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState({ open: false, message: '', severity: 'success' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xovlvoze", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          open: true,
          message: "Message sent successfully!",
          severity: "success"
        });
        setIsSubmitted(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error"
      });
    }
  };

  const handleCloseSnackbar = () => {
    setStatus(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
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
          ? 'linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #e4e8f0 0%, #d1d8e0 50%, #f5f7fa 100%)',
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
          ? 'radial-gradient(circle at 80% 20%, rgba(67, 67, 67, 0.8) 0%, transparent 50%)'
          : 'radial-gradient(circle at 80% 20%, rgba(235, 237, 238, 0.8) 0%, transparent 50%)',
        zIndex: 0,
      }} />

      <Box sx={{ 
        maxWidth: '800px', // Reduced max width for the centered card
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
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              width: '100%',
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
            Get In Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              p: { xs: 3, md: 5 },
              borderRadius: '16px',
              background: theme.palette.mode === 'dark'
                ? 'rgba(30, 30, 30, 0.7)'
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(8px)',
              boxShadow: theme.shadows[4],
            }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M5 13L9 17L19 7"
                      stroke={theme.palette.primary.main}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </svg>
                </motion.div>
                <Typography variant="h4" component="h3" sx={{ mt: 3, mb: 2 }}>
                  Thank You!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Your message has been sent successfully. I'll get back to you soon.
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setIsSubmitted(false)}
                  sx={{
                    borderRadius: '12px',
                    py: 1,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <Typography variant="h3" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Send Me a Message
                </Typography>

                <TextField
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    }
                  }}
                />

                <TextField
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    }
                  }}
                />

                <TextField
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    }
                  }}
                />

                <TextField
                  name="message"
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={6}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    }
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  endIcon={<Send />}
                  component={motion.button}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 5px 15px ${theme.palette.primary.main}`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    borderRadius: '12px',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    mt: 2,
                  }}
                >
                  Send Message
                </Button>
              </>
            )}
          </Box>
        </motion.div>
      </Box>

      <Snackbar
        open={status.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={status.severity}>
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;