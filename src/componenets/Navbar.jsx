import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <img src="path-to-your-logo.png" alt="Logo" style={{ height: '40px' }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Venture Consulatancy Services
        </Typography>

        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'between'  }}>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">SERVICES</Button>
          <Button color="inherit">CARRIER</Button>
          <Button color="inherit">CONTACT</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">PRIVACY POLICY</Button>
        </Box>
        {/* <Button variant="contained" style={{ backgroundColor: '#e91e63' }}>
          START YOUR PROJECT
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
