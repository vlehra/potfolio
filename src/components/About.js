import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
import { Code, Storage, Cloud } from '@mui/icons-material';

function About() {
  const highlights = [
    {
      icon: <Code />,
      title: "Full Stack Development",
      description: "Building scalable web applications using modern technologies"
    },
    {
      icon: <Storage />,
      title: "Database Architecture",
      description: "Designing efficient database solutions for complex systems"
    },
    {
      icon: <Cloud />,
      title: "DevOps",
      description: "Implementing CI/CD pipelines and cloud infrastructure"
    }
  ];

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 15,
        background: '#0a192f',
        color: '#8892b0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#ccd6f6',
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  '&::after': {
                    content: '""',
                    flex: 1,
                    height: '1px',
                    background: '#233554',
                    ml: 2
                  }
                }}
              >
                About Me
              </Typography>
              
              <Typography paragraph sx={{ color: '#8892b0', mb: 3 }}>
                I am a dedicated Software Engineer with expertise in designing high-quality, 
                scalable solutions. With a strong foundation in both frontend and backend development,
                I specialize in creating efficient systems that solve complex business challenges.
              </Typography>

              <Typography paragraph sx={{ color: '#8892b0', mb: 3 }}>
                Currently working as SDE-II at Tyroo, I lead backend development initiatives
                and provide technical leadership to junior developers. My experience spans
                across various technologies and frameworks, allowing me to build robust
                and scalable applications.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#64ffda',
                    mb: 2 
                  }}
                >
                  Education
                </Typography>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    background: '#112240',
                    border: '1px solid #233554',
                  }}
                >
                  <Typography sx={{ color: '#ccd6f6', fontWeight: 500 }}>
                    B.Tech in Electrical and Electronics Engineering
                  </Typography>
                  <Typography sx={{ color: '#64ffda' }}>
                    Guru Tegh Bahadur Institute of Technology, GGSIPU
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8892b0' }}>
                    Graduated: 2018
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Highlights */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: { xs: 0, md: 8 } }}>
              {highlights.map((highlight, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 3,
                    background: '#112240',
                    border: '1px solid #233554',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      sx={{ 
                        background: 'rgba(100, 255, 218, 0.1)',
                        color: '#64ffda',
                        mr: 2 
                      }}
                    >
                      {highlight.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ color: '#ccd6f6' }}>
                      {highlight.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#8892b0' }}>
                    {highlight.description}
                  </Typography>
                </Paper>
              ))}

              <Box sx={{ mt: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#64ffda',
                    mb: 2 
                  }}
                >
                  Core Competencies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Python', 'JavaScript', 'TypeScript',
                    'React.js', 'Django', 'Node.js',
                    'Docker', 'Kubernetes', 'AWS'
                  ].map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        color: '#64ffda',
                        border: '1px solid #64ffda',
                        background: 'transparent',
                        '&:hover': {
                          background: 'rgba(100, 255, 218, 0.1)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 