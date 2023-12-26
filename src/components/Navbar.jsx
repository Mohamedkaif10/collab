import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logoFor.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const isUserLoggedIn = !!localStorage.getItem('authToken');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FDFDFD' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', md: 'none', lg: 'block' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <Button
              color="inherit"
              sx={{ color: '#111111' }}
              component={NavLink}
              to="/"
              exact
              activeStyle={{ backgroundColor: 'yellow' }}
            >
              Home
            </Button>
            <NavLink to="jobs">
              <Button
                color="inherit"
                sx={{ color: '#111111', marginLeft: 2, marginRight: 2 }}
                component={NavLink}
                to="jobs"
                activeStyle={{ backgroundColor: 'yellow' }}
              >
                Search Job
              </Button>
            </NavLink>
            <Button
              color="inherit"
              sx={{ color: '#111111' }}
              component={NavLink}
              to="/blogPage"
              activeStyle={{ backgroundColor: 'yellow' }}
            >
              Thoughts
            </Button>
            <Button
              color="inherit"
              sx={{ color: '#111111' }}
              component={NavLink}
              to="/profile"
              activeStyle={{ backgroundColor: 'yellow' }}
            >
              Profile
            </Button>
          </Box>
          <Box sx={{ marginLeft: 'auto' ,display:'flex'}}>
            <Button
              color="inherit"
              sx={{ color: '#111111', marginRight: 2, border: '2px solid #253D90', display: { xs: 'none', sm: 'inherit' }, }}
              component={NavLink}
              to="/job1"
            >
              Post a Job
            </Button>
            {isUserLoggedIn ? (
              <Button
                variant="outlined"
                color="inherit"
                sx={{ color: '#FFFFFF', backgroundColor: '#253D90' }}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                sx={{ color: '#FFFFFF', backgroundColor: '#253D90' }}
                component={NavLink}
                to="/login"
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} 
      >
        <Box
          sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
          role="presentation"
        >
          <List>
            <ListItem button component={NavLink} to="/" exact onClick={handleDrawerToggle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="jobs" onClick={handleDrawerToggle}>
              <ListItemText primary="Search Job" />
            </ListItem>
            <ListItem button component={NavLink} to="/blogPage" onClick={handleDrawerToggle}>
              <ListItemText primary="Thoughts" />
            </ListItem>
            <ListItem button component={NavLink} to="/profile" onClick={handleDrawerToggle}>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <List>
            <ListItem button component={NavLink} to="/job1" onClick={handleDrawerToggle}>
              <ListItemText primary="Post a Job" />
            </ListItem>
            {isUserLoggedIn ? (
              <ListItem button onClick={handleSignOut}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            ) : (
              <ListItem button component={NavLink} to="/second" onClick={handleDrawerToggle}>
                <ListItemText primary="Sign In" />
              </ListItem>
            )}
          </List>
          <IconButton  onClick={handleDrawerToggle} sx={{ mt: 1 ,color:'black'}}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
