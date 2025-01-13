import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useScrollTrigger, Drawer, List, ListItem } from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { Link } from 'react-scroll';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={isScrolled ? 4 : 0}
        sx={{
          background: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                color: '#64ffda',
                fontFamily: 'monospace',
                cursor: 'pointer',
              }}
            >
              VL
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    sx={{
                      color: '#ccd6f6',
                      position: 'relative',
                      '&::before': {
                        content: `"0${index + 1}."`,
                        color: '#64ffda',
                        marginRight: '5px',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#64ffda',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '100%',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Button 
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                color: '#64ffda',
              }}
            >
              <MenuIcon />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 240,
            background: '#112240',
            borderLeft: '1px solid #233554',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleDrawerToggle} sx={{ color: '#64ffda' }}>
            <Close />
          </Button>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ width: '100%' }}
                onClick={handleDrawerToggle}
              >
                <Button
                  fullWidth
                  sx={{
                    py: 2,
                    color: '#ccd6f6',
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    },
                  }}
                >
                  <span style={{ color: '#64ffda', marginRight: '8px', fontFamily: 'monospace' }}>
                    0{index + 1}.
                  </span>
                  {item.label}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar; 