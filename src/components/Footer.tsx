import * as React from 'react';
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import { Twitter, LinkedIn, Instagram, YouTube, Google, Apple, CreditCard} from '@mui/icons-material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <Container  sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CopyrightIcon className="customIcon" fontSize="large" />
          <Box sx={{ ml: 1, fontWeight: 'bold', fontSize: '1.25rem', color: 'darkGoldenRod' }}>coca</Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Stay Up To Date With The Latest Legal Developments And Practical Advice From Qatar's Leading Lawyers By Subscribing To The Newsletter.
        </Typography>
        <Box mt={2}>
        <IconButton href="#" color="inherit"><Twitter sx={{ color: '#1DA1F2' }} /></IconButton> 
        <IconButton href="#" color="inherit"><LinkedIn sx={{ color: '#0077B5' }} /></IconButton> 
        <IconButton href="#" color="inherit"><Instagram sx={{ color: '#E1306C' }} /></IconButton> 
        <IconButton href="#" color="inherit"><YouTube sx={{ color: '#FF0000' }} /></IconButton>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>About Us</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Blog</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Lawyers</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Services</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Community</Link>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Support
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Contact us</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Online Chat</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Whatsapp</Link>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Legal Links
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>privacy policy</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Terms and Conditions</Link>
          <Link href="#" variant="body2" color="text.secondary" display="block" gutterBottom>Cookie policy</Link>
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="text.secondary">
          All Rights Reserved @ XXXXXXXX 2022
        </Typography>
        <Box>
          <IconButton href="#" color="inherit"><Google /></IconButton>
          <IconButton href="#" color="inherit"><Apple /></IconButton>
          <IconButton href="#" color="inherit"><CreditCard /></IconButton>
        </Box>
      </Box>
    </Container>
  );
}
