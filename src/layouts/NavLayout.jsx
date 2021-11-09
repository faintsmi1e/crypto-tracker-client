import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navlayout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogInClick = () => {
    navigate('/login')
  }
  const handleHomeClick = () => {
    navigate('/')
  }
  const handleSignUpClick = () => {
    navigate('/signup')
  }
  return (
    <div>
      <Button id='basic-button' aria-controls='basic-menu' aria-haspopup='true' onClick={handleHomeClick}>
        Home
      </Button>
      <Button id='basic-button' aria-controls='basic-menu' aria-haspopup='true' onClick={handleLogInClick}>
        Log in
      </Button>
      <Button id='basic-button' aria-controls='basic-menu' aria-haspopup='true' onClick={handleSignUpClick}>
        Sign in
      </Button>

      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>

        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Outlet />
    </div>
  );
};

export default Navlayout;
