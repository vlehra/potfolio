import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Storage, Cloud, Language, Build, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: '#112240',
  border: '1px solid #233554',
  height: '100%',
  minHeight: '180px',
  maxHeight: '220px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(100, 255, 218, 0.1)',
  color: '#64ffda',
  border: '1px solid #64ffda',
  transition: 'all 0.3s ease-in-out',
  padding: '4px',
  height: '28px',
  fontSize: '0.8rem',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.2)',
    transform: 'translateY(-2px)',
  },
}));

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Language />,
      skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      icon: <Code />,
      skills: ["Django/DRF", "React.js", "Flask", "FastAPI", "Node.js"]
    },
    {
      title: "Databases",
      icon: <Storage />,
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud />,
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "NGINX"]
    },
    {
      title: "Tools & Version Control",
      icon: <Build />,
      skills: ["Git/GitHub", "Jira", "Shell Scripting"]
    },
    {
      title: "Other Technologies",
      icon: <Security />,
      skills: ["CI/CD", "RESTful APIs", "System Design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box 
      id="skills" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: '#0a192f',
      }}
    >
      <Container maxWidth="lg">
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
          Technical Skills
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <SkillCard>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box 
                        sx={{ 
                          color: '#64ffda',
                          mr: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          background: 'rgba(100, 255, 218, 0.1)',
                          p: 0.75,
                          borderRadius: '50%'
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#ccd6f6',
                          fontSize: '1rem',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
                            left: 0,
                            width: '30px',
                            height: '2px',
                            background: '#64ffda'
                          }
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1,
                        minHeight: '100px'
                      }}
                    >
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <StyledChip
                            label={skill}
                            sx={{
                              fontSize: '0.8rem',
                              fontWeight: 500
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Skills; 