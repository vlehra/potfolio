import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ZoomIn, ZoomOut, Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '850px',
  margin: '0 auto',
  background: '#112240',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #233554',
  boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
  '& .react-pdf__Page': {
    marginTop: '20px',
    borderRadius: '4px',
    overflow: 'hidden',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease-in-out',
    '&:hover': {
      filter: 'grayscale(0%)',
    }
  },
  '& .react-pdf__Page__canvas': {
    maxWidth: '100%',
    height: 'auto !important',
    width: '100% !important',
    filter: 'contrast(1.1)',
  }
}));

const ZoomControls = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const DownloadButton = styled(Button)(({ theme }) => ({
  color: '#64ffda',
  borderColor: '#64ffda',
  marginLeft: '15px',
  '&:hover': {
    borderColor: '#64ffda',
    background: 'rgba(100, 255, 218, 0.1)',
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  }
}));

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 2.0));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
  };

  const handleDownload = () => {
    const resumeUrl = '/Vaibhav_Lehra_Resume2025.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vaibhav_Lehra_Resume2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="resume"
      sx={{
        py: { xs: 10, md: 15 },
        background: '#0a192f',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #233554, transparent)',
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#ccd6f6',
              mb: 5,
              textAlign: 'center',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '2px',
                background: '#64ffda'
              }
            }}
          >
            Resume
          </Typography>

          <PDFContainer>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              mb: 3 
            }}>
              <ZoomControls>
                <IconButton 
                  onClick={zoomOut} 
                  sx={{ 
                    color: '#64ffda',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <ZoomOut />
                </IconButton>
                <IconButton 
                  onClick={zoomIn}
                  sx={{ 
                    color: '#64ffda',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <ZoomIn />
                </IconButton>
              </ZoomControls>

              <DownloadButton
                variant="outlined"
                size="small"
                onClick={handleDownload}
                startIcon={<Download />}
              >
                Download PDF
              </DownloadButton>
            </Box>

            <Document
              file="/Vaibhav_Lehra_Resume2025.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <Box sx={{ 
                  textAlign: 'center', 
                  color: '#64ffda',
                  py: 4 
                }}>
                  Loading PDF...
                </Box>
              }
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              ))}
            </Document>
          </PDFContainer>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Resume; 