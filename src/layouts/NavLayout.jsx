import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classes from './NavLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../asyncActions/asyncActions';
import { userSignupErrorAction } from '../store/reducers/userReducer';

const Navlayout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExit = () => {
    setAnchorEl(null);
    dispatch(userLogout());
    dispatch(userSignupErrorAction(''));
    navigate('./');
  };
  const handleProfileClick = () => {
    setAnchorEl(null);
    navigate('./profile');
    dispatch(userSignupErrorAction(''));
  };
  const handleLogInClick = () => {
    
    navigate('./login');
    dispatch(userSignupErrorAction(''));
  };
  const handleHomeClick = () => {
    navigate('./');
    dispatch(userSignupErrorAction(''));
  };
  const handleSignUpClick = () => {
    
    navigate('./signup');
    dispatch(userSignupErrorAction(''));
    
  };

  return (
    <div>
      <div className={classes.NavLayout}>
        <Button
          id='basic-button'
          aria-controls='basic-menu'
          aria-haspopup='true'
          onClick={handleHomeClick}
        >
          Home
        </Button>
        {!state.isAuth ? (
          <>
            <Button
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              onClick={handleLogInClick}
            >
              Sign In
            </Button>
            <Button
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <Button
            id='basic-button'
            aria-controls='basic-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Profile
          </Button>
        )}

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>

          <MenuItem onClick={handleExit}>Logout</MenuItem>
        </Menu>
      </div>
      <Outlet />
    </div>
  );
};

export default Navlayout;
