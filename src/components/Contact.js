import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactButton = styled(Button)(({ theme }) => ({
  color: '#64ffda',
  borderColor: '#64ffda',
  padding: '15px 28px',
  fontSize: '1rem',
  '&:hover': {
    borderColor: '#64ffda',
    background: 'rgba(100, 255, 218, 0.1)',
  },
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#8892b0',
    '& fieldset': {
      borderColor: '#233554',
    },
    '&:hover fieldset': {
      borderColor: '#64ffda',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#64ffda',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8892b0',
    '&.Mui-focused': {
      color: '#64ffda',
    },
  },
});

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Name: ${formData.name}%0AMessage: ${formData.message}`;
    
    // WhatsApp API URL with your number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919999270159&text=${message}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 15 },
        background: '#0a192f',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: '#ccd6f6',
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Get In Touch
              </Typography>

              <Typography
                sx={{
                  color: '#8892b0',
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: { xs: 4, md: 0 }
                }}
              >
                <IconButton
                  href="https://github.com/vlehra"
                  target="_blank"
                  sx={{
                    color: '#64ffda',
                    border: '1px solid #233554',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/vaibhav-lehra/"
                  target="_blank"
                  sx={{
                    color: '#64ffda',
                    border: '1px solid #233554',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://wa.me/+919999270159"
                  target="_blank"
                  sx={{
                    color: '#64ffda',
                    border: '1px solid #233554',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <WhatsApp />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  background: '#112240',
                  p: 4,
                  borderRadius: 2,
                  border: '1px solid #233554',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#ccd6f6',
                    mb: 2,
                    textAlign: 'center'
                  }}
                >
                  Send Me a Message
                </Typography>

                <StyledTextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <StyledTextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                />

                <ContactButton
                  type="submit"
                  variant="outlined"
                  fullWidth
                  startIcon={<WhatsApp />}
                >
                  Send via WhatsApp
                </ContactButton>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact; 