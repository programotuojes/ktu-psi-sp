import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '../store/actions/sidebar';
import {isSidebarOpen} from '../store/selectors/sidebar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import grey from '@material-ui/core/colors/grey';

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
});

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const accent = grey[50];

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
  const shoppingCartButton = () => {
    if(window.location.pathname == '/shop') {
      return (
        <IconButton className={classes.icon} href="/shop/cart" aria-label="Shopping cart">
            <ShoppingBasketIcon width={'100px'} height={'100px'} fill={'white'}></ShoppingBasketIcon>
            
          </IconButton>
      );
    }
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {sidebarButton()}

          <Button className={classes.icon} href="/" aria-label="home">
            <img src={logo} alt="logo" width={'200px'} height={'50px'} />
          </Button>

          <div className={classes.grow} />

          <Button className={classes.nav} href="/blog">
            BLOG
          </Button>

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/shop">
            SHOP
          </Button>

          <div className={classes.spacingBetween} />

          <Button className={classes.nav} href="/about">
            ABOUT US
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
