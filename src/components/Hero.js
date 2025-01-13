import React from 'react';
import { Box, Container, Typography, Button, Stack, IconButton, Grid } from '@mui/material';
import { GitHub, LinkedIn, Email, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import profileImage from '../images/vaibhav.jpg';

// Typing animation component
const TypewriterText = () => {
  const text = "Hi,my name is";
  const characters = text.split("");
  
  return (
    <motion.div
      initial={{ borderRight: '2px solid #64ffda' }}
      animate={{ 
        borderRight: ['2px solid #64ffda', '2px solid transparent'],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{ display: 'inline-block' }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'inline-block' }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05, // Faster duration for smoother typing
            delay: index * 0.05, // Reduced delay for quicker typing
            ease: "easeOut"
          }}
        >
          {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for spaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#64ffda',
                    fontFamily: 'monospace',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    height: '2em',
                    fontSize: '1.2rem',
                    letterSpacing: '1px',
                  }}
                >
                  <TypewriterText />
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    color: '#ccd6f6',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    lineHeight: 1.1,
                    mb: 2
                  }}
                >
                  Vaibhav Lehra.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#8892b0',
                    fontSize: { xs: '2rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 3
                  }}
                >
                  I craft scalable software solutions.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: '#8892b0',
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    mb: 4
                  }}
                >
                  I'm a Software Developer specializing in building high-performance distributed systems
                  and scalable applications. From backend architecture to cloud infrastructure,
                  I focus on creating robust solutions that drive business growth.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      href="#experience"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        padding: '12px 28px',
                        '&:hover': {
                          borderColor: '#64ffda',
                          background: 'rgba(100, 255, 218, 0.1)',
                        }
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>

                  {[
                    { icon: <GitHub />, href: 'https://github.com/vlehra', label: 'GitHub' },
                    { icon: <LinkedIn />, href: 'https://linkedin.com/in/vaibhavlehra/', label: 'LinkedIn' },
                    { icon: <Email />, href: 'mailto:vaibhavlehra@gmail.com', label: 'Email' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        sx={{
                          color: '#64ffda',
                          border: '1px solid #64ffda',
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.1)',
                          }
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '280px', md: '340px' },
                  height: { xs: '380px', md: '440px' },
                  margin: '0 auto',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #64ffda',
                    borderRadius: '4px',
                    top: '20px',
                    left: '20px',
                    zIndex: 0,
                    transition: 'all 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    top: '15px',
                    left: '15px',
                  }
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="Vaibhav Lehra"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '4px',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <IconButton
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#64ffda',
            '&:hover': {
              background: 'rgba(100, 255, 218, 0.1)',
            }
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </motion.div>
    </Box>
  );
}

export default Hero; 