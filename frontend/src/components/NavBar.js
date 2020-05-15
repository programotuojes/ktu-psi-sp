import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/actions/sidebar';
import { isSidebarOpen } from '../store/selectors/sidebar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
  appBar: {
    zIndex: 3000,
  },
  grow: {
    flexGrow: 1,
  },
  spacingBetween: {
    flexGrow: 0.15,
  },
  spacingLogo: {
    flexGrow: 0.7,
  },
  icon: {
    marginLeft: '6px',
    padding: '0px',
  },
  nav: {
    'font-size': '1.2rem',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderBottom: '1px ridge',
    fontFamily: 'Open Sans',
    color: 'white',
  },
  icons: {
    color: 'white',
  },
});

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const open = useSelector(isSidebarOpen);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const sidebarButton = () => {
    if (showSidebar) {
      return (
        <IconButton
          aria-label="open sidebar"
          onClick={() => dispatch(toggleSidebar(!open))}
          edge="start"
          className={classes.icons}
        >
          <MenuIcon />
        </IconButton>
      );
    }
  };

  const shoppingCartButton = () => {
    if (showCart) {
      return (
        <IconButton className={classes.icon} href="/shop/cart" aria-label="Shopping cart">
          <ShoppingBasketIcon width={'100px'} height={'100px'} className={classes.icons} />
        </IconButton>
      );
    }
  };

  useEffect(() => {
    setShowSidebar(/\/shop$/.test(location.pathname));
    setShowCart(/\/shop/.test(location.pathname));
  }, [location]);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {sidebarButton()}

          <Button className={classes.icon} href="/" aria-label="home">
            <img src={logo} alt="logo" width={'200px'} height={'50px'} />
          </Button>

          <div className={classes.spacingLogo} />

          <Button className={classes.nav} href="/blog">
            BLOGAS
          </Button>

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/shop">
            PARDUOTUVĖ
          </Button>

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/about">
            APIE MUS
          </Button>
          <div className={classes.grow} />
          {shoppingCartButton()}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
