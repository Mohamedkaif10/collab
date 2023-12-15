import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FDFDFD' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo/Brand
        </Typography>

        {/* Centered Buttons */}
        <Box
          sx={{
            display: 'flex',
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
          <NavLink to ="jobs">
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


        {/* Additional Buttons at the End */}
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit" sx={{ color: '#111111' ,marginRight: 2 ,border:'2px solid #253D90' }} component={NavLink} to="/job1">
            Post a Job
          </Button>
          <Button variant="outlined" color="inherit" sx={{ color: '#FFFFFF',backgroundColor:'#253D90' }} component={NavLink} to="/additional2">
            Sign In 
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
