import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="categories">
            <MenuIcon />
          </IconButton>

          <IconButton>
            <img src={logo} alt={'logo'} width={50} height={50} />
          </IconButton>

          <Button>Blog</Button>
          <Button>E-shop</Button>

          <div className={classes.grow} />

          <Button>About</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
