import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  IconButton,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Email, ArrowDownward } from "@mui/icons-material";

const Hero = () => {
  const theme = useTheme();
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

  // Typing animation state
  const [displayedRole, setDisplayedRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setDisplayedRole(currentRole.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
        setTypingSpeed(75); // Faster when deleting
      } else {
        setDisplayedRole(currentRole.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
        setTypingSpeed(150); // Normal typing speed
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length); // Move to next role
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentRoleIndex, isDeleting, typingSpeed]);

  // Generate random stars with different properties
  const generateStars = () => {
    return [...Array(20)].map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const distance = 50 + Math.random() * 100;
      
      return {
        key: i,
        size,
        duration,
        delay,
        startX,
        startY,
        distance,
      };
    });
  };

  const stars = generateStars();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        px: 4,
        background:
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at center, #1a1a2e 0%, #16213e 70%, #0f3460 100%)"
            : "radial-gradient(circle at center, #e0f7fa 0%, #b2ebf2 70%, #80deea 100%)",
      }}
    >
      {/* Falling stars background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.key}
            style={{
              position: "absolute",
              background: theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.startX}%`,
              top: `-10px`,
              opacity: 0,
            }}
            animate={{
              y: [`-10px`, `${star.distance}px`],
              x: [`${star.startX}%`, `${star.startX + (Math.random() * 10 - 5)}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatDelay: star.delay,
              ease: "linear",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "700px" },
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name with wave animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                },
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 0.5,
                }}
              >
                Hi, I'm
              </Typography>

              <motion.div
                style={{ display: "inline-block" }}
                animate={{
                  textShadow: [
                    `0 0 0px ${theme.palette.primary.main}`,
                    `0 0 10px ${theme.palette.primary.main}`,
                    `0 0 20px ${theme.palette.primary.main}`,
                    `0 0 10px ${theme.palette.primary.main}`,
                    `0 0 0px ${theme.palette.primary.main}`,
                  ],
                  scale: [1, 1.05, 1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  Jagtap Nikhil
                </Typography>
              </motion.div>
            </motion.div>

            {/* Continuous typing animation for role */}
            <Box
              sx={{
                minHeight: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 3,
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2.25rem" },
                  fontWeight: 400,
                  color: theme.palette.text.secondary,
                  "&::after": {
                    content: '"|"',
                    animation: "blink 1s step-end infinite",
                    color: theme.palette.primary.main,
                    marginLeft: "0.25rem",
                  },
                  "@keyframes blink": {
                    "from, to": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                }}
              >
                {displayedRole}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 4,
                fontSize: "1.15rem",
                lineHeight: 1.7,
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-stack developer building seamless web applications from
                frontend to backend. I craft pixel-perfect UIs with React and
                scalable APIs with Node.js, ensuring optimal performance across
                the stack. Passionate about solving problems through clean code
                and intuitive user experiences.
              </motion.span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                component={motion.a}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 5px 15px ${theme.palette.primary.main}`,
                }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                component={motion.a}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 5px 15px ${theme.palette.secondary.main}`,
                }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  borderWidth: "2px",
                }}
              >
                Contact Me
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[
                {
                  icon: <LinkedIn fontSize="large" />,
                  url: "https://linkedin.com/in/jagtapnikhil1806",
                },
                {
                  icon: <GitHub fontSize="large" />,
                  url: "https://github.com/jagtapnikhil1806",
                },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  component={motion.a}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    color: theme.palette.primary.main,
                  }}
                  sx={{
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Profile Picture - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Avatar
            alt="Profile Photo"
            src="/profile.jpg"
            sx={{
              width: { xs: 280, sm: 350, md: 400 },
              height: { xs: 280, sm: 350, md: 400 },
              border: `5px solid ${theme.palette.primary.main}`,
              boxShadow: `0 15px 40px ${
                theme.palette.mode === "dark"
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(0, 0, 0, 0.3)"
              }`,
            }}
            component={motion.div}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </Box>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: 1.5,
        }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <ArrowDownward />
      </motion.div>
    </Box>
  );
};

export default Hero;