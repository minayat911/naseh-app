import * as React from 'react';
import { Box, Container, Button, Typography, MenuItem, Select, FormControl, InputLabel, createTheme, ThemeProvider } from '@mui/material';
import qatarFlag from './qatarFlag.jpg';
import NavBar from './NavBar';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
    palette: {
      primary: {
        main: '#003366', // Dark blue color
      },
      secondary: {
        main: '#ff0000', // Red color for the button
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div className='home-container'>
        <NavBar />
        <div id='home' className='home-banner' style={{ 
          backgroundImage: `url(${qatarFlag})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          width: '100vw', 
          height: '50wh', 
          border: 'blue solid',
          position: 'relative',
          margin: 0, /* Remove margin */
          padding: 0, /* Remove padding */
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 139, 0.5)', // Dark blue with 50% opacity
            zIndex: 1 
          }}></div>
          <Container style={{ position: 'relative', zIndex: 2 , color:'white'}}>
          <Box display="flex" justifyContent="center" alignItems="center" py={2} gap={2}>
              <LocalPhoneRoundedIcon fontSize='large' />
              <Typography variant="h6" color="white" textAlign='center'>
                <strong>
                  Urgent consultation now!
                </strong>
                <Typography variant="subtitle2" color="white" textAlign="center" mt={1}>
                  Book it in 5 minutes, a lawyer will respond to you in few minutes
                </Typography>
              </Typography>
              <Button variant="contained" color="secondary">
                CONSULT NOW
              </Button>
            </Box>
            <Box >
              <Typography variant="h4" align="center" gutterBottom>
                Choose & filter & schedule
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Easy access to your legal advice. Choose, sort, and clearly define the font that best fits your schedule.
              </Typography>
              <Box textAlign="center" mt={4} maxWidth= '100%' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
                  <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={2} mt={4}>
                    <FormControl variant="outlined" style={{ width: '100%', color: 'white' }}>
                      <InputLabel  color='primary'>Consultation date</InputLabel>
                      <Select label="Consultation date" >
                        <MenuItem value="">
                          <em>Select date</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={{ width: '100%', color: 'white' }}>
                      <InputLabel  color='primary'>Consultation time</InputLabel>
                      <Select label="Consultation time" >
                        <MenuItem value="">
                          <em>Select time</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={{ width: '100%', color: 'white' }}>
                      <InputLabel  color='primary'>Consultation language</InputLabel>
                      <Select label="Consultation language">
                        <MenuItem value="">
                          <em>Select language</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={{ width: '100%', color: 'white' }}>
                      <InputLabel color='primary'>Years of experience</InputLabel>
                      <Select label="Years of experience" >
                        <MenuItem value="">
                          <em>Select experience</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button variant="contained" color="primary">
                    Book a consultation
                  </Button>
                </Box>
              </Box>
            </Box>
            
          </Container>
        </div>
      </div>
    </ThemeProvider>

  );
}
