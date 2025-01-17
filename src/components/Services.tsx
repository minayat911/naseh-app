// import * as React from 'react';
import { Container, Card, CardContent, Typography, Button, Link, Box, createTheme, ThemeProvider } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';

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

export default function Services() {
  return (
    <ThemeProvider theme={theme}>
      <Container id='services' style={{paddingTop: '50px'}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color='primary'>
            A wide range of legal services
          </Typography>
          <Link href="#" underline="hover">
            View All Services
          </Link>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1" color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <CalendarMonthRoundedIcon style={{ color: 'green', fontWeight:'bolder' }} /> Scheduled Consultations
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through
                </Typography>
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }} startIcon={<EditCalendarRoundedIcon style={{ color: 'white' }} />}>
                  <strong>Book a consultation</strong>
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1"  color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <CallRoundedIcon style={{ color: 'red' }} /> Urgent Consultation
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through
                </Typography>
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }} startIcon={<ContactPhoneRoundedIcon style={{ color: 'white' }} />}>
                  Consult Now
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1"  color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <BusinessRoundedIcon style={{ color: 'blue' }} /> Corporate Portal
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  The Corporate Portal Service Or An Open Monthly Subscription Can Be Offered With The ..
                </Typography>
                <Button variant="contained" disabled fullWidth style={{ marginTop: '10px' }}>
                  Soon
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1"  color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <StickyNote2RoundedIcon style={{ color: 'gold' }} /> Written Consultation
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through
                </Typography>
                <Button variant="contained" disabled fullWidth style={{ marginTop: '10px' }}>
                  Soon
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1"  color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <ReceiptRoundedIcon style={{ color: 'purple' }} /> Contracts & Agreements
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through
                </Typography>
                <Button variant="contained" disabled fullWidth style={{ marginTop: '10px' }}>
                  Soon
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Box width={{ xs: '100%', sm: '48%', md: '30%' }} mb={3}>
            <Card>
              <CardContent>
                <Typography variant="body1"  color='primary' component="h3" textAlign="center" fontWeight="bold" fontSize="15px">
                  <BusinessCenterRoundedIcon style={{ color: 'orange' }} /> Hire A Lawyer
                </Typography>
                <Typography variant="body2" color="textSecondary" fontSize="12px">
                  Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through
                </Typography>
                <Button variant="contained" disabled fullWidth style={{ marginTop: '10px' }}>
                  Soon
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
