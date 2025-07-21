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
import { LinkedIn, GitHub, ArrowDownward } from "@mui/icons-material";

const Hero = () => {
  const theme = useTheme();
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

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
        setTypingSpeed(75);
      } else {
        setDisplayedRole(currentRole.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
        setTypingSpeed(150);
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentRoleIndex, isDeleting, typingSpeed]);

  const generateStars = () => {
    return [...Array(20)].map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const distance = 50 + Math.random() * 100;

      return {
        key: i,
        size,
        duration,
        delay,
        startX,
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
        pt: { xs: "80px", md: 0 }, // Added to avoid header overlap
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
      {/* Animated Stars */}
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
            pb: { xs: 6, md: 0 }, // Added bottom padding for mobile
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4.5rem" }, fontWeight: 700 }}>
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
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                Jagtap Nikhil
              </Typography>
            </motion.div>

            {/* Typing Role */}
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

            <Typography variant="body1" sx={{ mb: 4, fontSize: "1.15rem", lineHeight: 1.7 }}>
              Full-stack developer building seamless web applications from
              frontend to backend. I craft pixel-perfect UIs with React and
              scalable APIs with Node.js, ensuring optimal performance across
              the stack.
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
              <Button variant="contained" size="large" href="#projects">
                View My Work
              </Button>
              <Button variant="outlined" size="large" href="#contact">
                Contact Me
              </Button>
            </Box>

            {/* Social Buttons */}
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

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{
            y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
          }}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
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

      {/* Scroll Down - hidden on mobile */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <ArrowDownward />
      </motion.div> */}
      <Box
  sx={{
    display: { xs: "none", md: "flex" },
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Typography variant="caption" sx={{ mb: 1 }}>
      Scroll Down
    </Typography>
    <ArrowDownward />
  </motion.div>
</Box>

    </Box>
  );
};

export default Hero;
