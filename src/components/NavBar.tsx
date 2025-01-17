import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.customIcon": {
            color: "#00008B", // Dark blue with 100% opacity
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          color: "#00008B",
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 139, 0.1)',
          },
          '&:focus': { 
            outline: 'none', 
            boxShadow: 'none',
            }, 
          '&:active': { 
            outline: 'none', 
            boxShadow: 'none', 
            },
        },
      },
    },
    MuiMenuItem: { 
        styleOverrides: { 
            root: { 
                color: "#00008B", 
                '&:hover': { 
                    backgroundColor: 'rgba(0, 0, 139, 0.1)', 
                }, 
            }, 
        }, 
    },
  },
  palette: {
    primary: {
      main: '#00008B',
    },
  },
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    backdropFilter: 'blur(24px)',
    padding: '8px 12px',
  });

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          marginTop:0,
          width: '100%',
          color: "#00008B",
          bgcolor: 'white',
          backgroundImage: 'none',
          maxWidth: { xs: '100%', md: '100%' },
        }}
      >
        <Container maxWidth='lg'>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 0, color: 'black' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CopyrightIcon className="customIcon" fontSize="large" />
              <Box sx={{ ml: 1, fontWeight: 'bold', fontSize: '1.25rem', color: 'darkGoldenRod' }}>coca</Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', color: "#00008B" }}>
              <Button href="#home" variant="text" color="primary" size="small">Home</Button>
              <Button href="#about" variant="text" color="primary" size="small">About Us</Button>
              <Button variant="text" color="primary" size="small">Law Firm</Button>
              <Button href='#services' variant="text" color="primary" size="small">Services</Button>
              <Button variant="text" color="primary" size="small">Community</Button>
              <Button href='#contact' variant="text" color="primary" size="small">Contact Us</Button>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button>
                <PersonAddAlt1RoundedIcon sx={{ color: '#00008B' }} />
              </Button>
              <Button>
                AR
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                top: 'var(--template-frame-height, 0px)',
              },
            }}
          >
            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <MenuItem>Home</MenuItem>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Law Firm</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Community</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <Divider sx={{ my: 3 }} />
              <MenuItem>
                <Button color="primary" variant="contained" fullWidth>
                  Sign In
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color="primary" variant="outlined" fullWidth>
                  AR
                </Button>
              </MenuItem>
            </Box>
          </Drawer>
          </StyledToolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
