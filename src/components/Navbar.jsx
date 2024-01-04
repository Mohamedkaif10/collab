import { useState} from 'react';
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
  Tooltip,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logoFor.png';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
const navigate =useNavigate();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate("/")
    setIsUserLoggedIn(false);
    setIsDrawerOpen(false);
  };
  
  const handlePostJob = () => {
    if (isUserLoggedIn) {
      navigate('/post-job');
      console.log('Navigating to /post-ssjob');
     
    } else {
      navigate('/login');
    }
  };
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
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
              sx={{
                color: '#111111',
                '&.active': {
                  borderBottom: '3px solid #FFC20E',
                },
              }}
              component={NavLink}
              to="/"
              exact
            >
              Home
            </Button>
            <NavLink to="jobs">
              <Button
                color="inherit"
                sx={{
                  color: '#111111',
                  marginLeft: 2,
                  marginRight: 2,
                  '&.active': {
                    borderBottom: '3px solid #FFC20E',
                  },
                }}
                component={NavLink}
                to="/jobs"
                activeStyle={{ backgroundColor: 'yellow' }}
              >
                Search Job
              </Button>
            </NavLink>
            <Button
              color="inherit"
              sx={{
                color: '#111111',
                '&.active': {
                  borderBottom: '3px solid #FFC20E',
                },
              }}
              component={NavLink}
              to="/blogPage"
              activeStyle={{ backgroundColor: 'yellow' }}
            >
              Thoughts
            </Button>
          </Box>
          <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
        <Button
          onClick={handlePostJob}
          color="inherit"
          sx={{
            color: '#111111',
            marginRight: 2,
            border: '2px solid #253D90',
            display: { xs: 'none', sm: 'inherit' },
          }}
        >
          Post a Job
        </Button>
        {isUserLoggedIn ? (
          <Tooltip title="Profile" arrow>
           
            <Button
              color="inherit"
              sx={{
                color: '#111111',
                '&.active': { borderBottom: '3px solid #FFC20E' },
              }}
              onClick={handleProfileClick}
            >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
             <ArrowDropDownIcon />
            </Button>
          </Tooltip>
        ) : (
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              color: '#FFFFFF',
              backgroundColor: '#253D90',
              '&:hover': {
                backgroundColor: '#001F5B',
              },
            }}
            component={NavLink}
            to="/login"
          >
            Sign In
          </Button>
        )}
      </Box>
        </Toolbar>
      </AppBar>
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
            <ListItem button component={NavLink} to="/post-job" onClick={handleDrawerToggle}>
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
      {isUserLoggedIn && (
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileClose}
        >
          <MenuItem onClick={handleProfileClose} component={NavLink} to="/profile">
            View Profile
          </MenuItem>
          <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        </Menu>
        )}
    </>
  );
};

export default Navbar;
