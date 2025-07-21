import React from "react";
import { Box, Typography, Button, useTheme, Grid, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Email, LocationOn, School, Person } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Nikhil-Jagtap-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 4,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)"
            : "linear-gradient(135deg, #e4e8f0 0%, #d1d8e0 50%, #f5f7fa 100%)",
      }}
    >
      <Box sx={{ 
        maxWidth: "800px",
        mx: "auto",
        width: "100%",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              mb: 6,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              position: "relative",
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: theme.palette.primary.main,
                borderRadius: "2px",
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* Details Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              p: 3,
              mb: 6,  // Increased bottom margin
              borderRadius: "12px",
              background: theme.palette.mode === "dark" 
                ? "rgba(255, 255, 255, 0.05)" 
                : "rgba(0, 0, 0, 0.03)",
              boxShadow: theme.shadows[1],
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <Grid container spacing={20}>  {/* Increased spacing between columns */}
              {/* Column 1 */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Person color="primary" sx={{ mr: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Name
                    </Typography>
                    <Typography variant="body1">Nikhil Jagtap</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email color="primary" sx={{ mr: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">jagtapnikhil1806@gmail.com</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Column 2 */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <School color="primary" sx={{ mr: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Degree
                    </Typography>
                    <Typography variant="body1">B.E.,Computer Science</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOn color="primary" sx={{ mr: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">Pune, India</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{
              mb: 6,  // Increased bottom margin
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "center",  // Center aligned bio text
            }}
          >
            As a passionate full-stack developer, I've built multiple projects
            using MERN (MongoDB, Express, React, Node.js). Through hands-on experience
            developing responsive web applications with RESTful APIs and
            interactive UIs, I've strengthened my problem-solving skills and
            understanding of the complete development lifecycle.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>  {/* Centered button container */}
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: theme.shadows[4],
                "&:hover": {
                  boxShadow: theme.shadows[8],
                  transform: "translateY(-2px)",
                  backgroundColor: theme.palette.primary.dark,
                },
                transition: "all 0.3s ease",
              }}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;