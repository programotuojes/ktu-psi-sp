import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/actions/sidebar';
import { isSidebarOpen } from '../store/selectors/sidebar';

const useStyles = makeStyles({
  appBar: {
    zIndex: 3000,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: '6px',
    padding: '0px',
  },
  nav: {
    'font-size': '1.2rem',
    paddingLeft: '24px',
    paddingRight: '24px',
  },
});

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector(isSidebarOpen);

  const sidebarButton = () => {
    if (window.location.pathname === '/shop') {
      return (
        <IconButton
          aria-label="open sidebar"
          onClick={() => dispatch(toggleSidebar(!open))}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      );
    }
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {sidebarButton()}

          <IconButton className={classes.icon} href="/" aria-label="home">
            <img src={logo} alt="logo" width={'50px'} height={'50px'} />
          </IconButton>

          <div className={classes.grow} />

          <Button className={classes.nav} href="/blog">
            Blog
          </Button>

          <div className={classes.grow} />

          <Button className={classes.nav} href="/shop">
            Shop
          </Button>

          <div className={classes.grow} />

          <Button href="/about">About</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
