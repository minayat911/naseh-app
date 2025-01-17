// import * as React from 'react';
import { TextField, Button, Typography, Box, Container, createTheme, ThemeProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#003366', // Dark blue color
    },
  },
});

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Container id='contact' sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color='primary'>
            Newsletter
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="body1" color="textSecondary" fontSize="18px" paddingRight='10px' gutterBottom>
            Stay up to date with the latest legal developments and practical advice from Qatar's leading lawyers by subscribing to the newsletter.
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              InputProps={{
                startAdornment: <EmailIcon />,
              }}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={4}>
          <Box display="flex" alignItems="center" mb={2} width={{ xs: '100%', sm: '48%', md: '23%' }}>
            <EmailIcon style={{ color: 'gold' }}/>
            <Box ml={1}>
              <Typography variant="body1" color="textSecondary" >Get in touch</Typography>
              <Typography variant="body2">XXXXXXXX</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={2} width={{ xs: '100%', sm: '48%', md: '23%' }}>
            <PhoneIcon   style={{ color: 'gold' }}/>
            <Box ml={1}>
              <Typography variant="body1" color="textSecondary" >Let's Talk</Typography>
              <Typography variant="body2">XXXXXXXX</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={2} width={{ xs: '100%', sm: '48%', md: '23%' }}>
            <BusinessIcon style={{ color: 'gold' }} />
            <Box ml={1}>
              <Typography variant="body1"color="textSecondary" >CR Number</Typography>
              <Typography variant="body2">XXXXXXXX</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={2} width={{ xs: '100%', sm: '48%', md: '23%' }}>
            <LocationOnIcon style={{ color: 'gold' }} />
            <Box ml={1}>
              <Typography variant="body1"color="textSecondary" >Location</Typography>
              <Typography variant="body2">XXXXXXXX</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
