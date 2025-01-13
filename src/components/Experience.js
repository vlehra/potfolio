import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, IconButton, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Work, Business, CalendarToday } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#112240',
  border: '1px solid #233554',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    '&::before': {
      transform: 'translateX(0)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '2px',
    height: '100%',
    background: '#64ffda',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out'
  }
}));

const StyledChip = styled(Chip)({
  color: '#64ffda',
  border: '1px solid #64ffda',
  background: 'transparent',
  padding: '8px 4px',
  height: '32px',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease-in-out'
});

function Experience() {
  const experiences = [
    {
      title: "SDE - II",
      company: "Tyroo",
      location: "Gurugram",
      period: "February 2023 – Present",
      responsibilities: [
        "Spearheaded backend development initiatives, focusing on optimizing database architecture and enhancing API performance",
        "Led the end-to-end design and development of complex projects, ensuring high-quality delivery",
        "Provided technical leadership to junior developers, offering guidance on best practices",
        "Implemented DevOps practices using Kubernetes, Docker, and NGINX",
        "Designed high-level architecture with auto-scaling groups for optimal performance"
      ],
      technologies: ["Python", "Django", "Docker", "Kubernetes", "AWS", "PostgreSQL"]
    },
    {
      title: "SDE - I",
      company: "MyClassroom Learning Pvt. Ltd.",
      location: "Noida",
      period: "July 2020 – December 2022",
      responsibilities: [
        "Designed and developed end-to-end solutions using Django Rest Framework",
        "Built and led development team of junior developers",
        "Optimized database for live classes and test series",
        "Implemented CI/CD pipelines and managed containerized applications",
        "Scaled platform architecture to handle increasing user load"
      ],
      technologies: ["Django", "React.js", "Docker", "AWS", "MongoDB", "Redis"]
    },
    {
      title: "Backend Developer",
      company: "Mechanical Adda Pvt. Ltd.",
      location: "Freelancing",
      period: "August 2019 – June 2020",
      responsibilities: [
        "Designed comprehensive database architecture for user engagement",
        "Developed RESTful APIs for educational modules",
        "Implemented performance analytics systems",
        "Optimized backend services for scalability"
      ],
      technologies: ["Python", "Flask", "MySQL", "AWS", "Redis"]
    }
  ];

  return (
    <Box 
      id="experience" 
      sx={{ 
        py: { xs: 10, md: 15 },
        background: '#0a192f',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component={motion.h4}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ 
            color: '#ccd6f6',
            mb: { xs: 8, md: 10 },
            display: 'flex',
            alignItems: 'center',
            '&::after': {
              content: '""',
              flex: 1,
              height: '1px',
              background: 'linear-gradient(to right, #233554 50%, transparent 100%)',
              ml: 2
            }
          }}
        >
          Professional Experience
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Stack spacing={6}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ExperienceCard>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            background: 'rgba(100, 255, 218, 0.1)',
                            borderRadius: '50%',
                            p: 1,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Work sx={{ color: '#64ffda' }} />
                        </Box>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: '#ccd6f6',
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontWeight: 600
                          }}
                        >
                          {exp.title}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        color: '#8892b0',
                        pl: '52px'
                      }}>
                        <Business sx={{ fontSize: '1.1rem', mr: 1 }} />
                        <Typography 
                          variant="subtitle1"
                          sx={{ 
                            fontSize: '1.1rem',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {exp.company} • {exp.location}
                        </Typography>
                      </Box>

                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 4,
                        color: '#64ffda',
                        pl: '52px'
                      }}>
                        <CalendarToday sx={{ fontSize: '1rem', mr: 1 }} />
                        <Typography 
                          variant="subtitle2"
                          sx={{ 
                            fontSize: '0.95rem',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>

                      <Box 
                        component="ul" 
                        sx={{ 
                          color: '#8892b0', 
                          pl: '52px',
                          mb: 4,
                          '& li': {
                            mb: 2,
                            position: 'relative',
                            '&::marker': { 
                              color: '#64ffda',
                              fontSize: '1.2em'
                            },
                            '&:last-child': {
                              mb: 0
                            }
                          }
                        }}
                      >
                        {exp.responsibilities.map((resp, idx) => (
                          <Box 
                            component="li" 
                            key={idx}
                          >
                            {resp}
                          </Box>
                        ))}
                      </Box>

                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1.5,
                        pl: '52px'
                      }}>
                        {exp.technologies.map((tech, idx) => (
                          <StyledChip
                            key={idx}
                            label={tech}
                            size="medium"
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </ExperienceCard>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience; 