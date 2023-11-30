import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import './style.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className='wrapper'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="'#000000"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
              Uber <span style={{ fontWeight: 'bold' }}>Eats</span>
            </Typography>
            <Button className='btn'
              color="inherit"
              startIcon={<PersonIcon />}
              sx={{
                marginRight: '10px',
                backgroundColor: '#0000FF',
                '&:hover': { backgroundColor: '#0000FF', borderColor: '#FFC0CB' },
                borderRadius: '500px',
              }}
            >
              Login
            </Button>
            <Button className='btns'
              color="inherit"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                '&:hover': { backgroundColor: '#000000' },
                borderRadius: '500px',
              }}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: '300px',
            backgroundColor: 'rgba(240, 240, 240, 0.8)',
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
