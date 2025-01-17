import * as React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export default function About() {
  return (
    <Container id="about">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-around"
        padding="20px"
        gap="20px"
      >
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <VerifiedRoundedIcon sx={{ width: 56, height: 56, color: 'green', marginBottom: '20px' }} />
              <Typography variant="body1" component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                Reliable Legal Services
              </Typography>
              <Typography variant="body2" textAlign="center">
                Naseh platform provides legal advice approved by lawyers registered with the Qatari Ministry of Justice.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <VerifiedRoundedIcon sx={{ width: 56, height: 56, color: 'green', marginBottom: '20px' }} />
              <Typography variant="body1" component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                Diversity of Services
              </Typography>
              <Typography variant="body2" textAlign="center">
                Naseh offers a wide range of legal services that meet the needs of individuals and companies.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <VerifiedRoundedIcon sx={{ width: 56, height: 56, color: 'green', marginBottom: '20px' }} />
              <Typography variant="body1" component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                Security & Confidentiality
              </Typography>
              <Typography variant="body2" textAlign="center">
                Naseh ensures the protection of users' data and legal information through advanced security systems.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, padding: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <VerifiedRoundedIcon sx={{ width: 56, height: 56, color: 'green', marginBottom: '20px' }} />
              <Typography variant="body1" component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                Easy Electronic Payment
              </Typography>
              <Typography variant="body2" textAlign="center">
                Safe and convenient payment options, ensuring transactions are completed easily and comfortably.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
