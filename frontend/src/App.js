import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import NavBar from './components/NavBar';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Payment from './pages/payment/Payment';
import ProductPage from './pages/shop/ProductPage';
import PaymentConfirmation from './pages/confirmation/PaymentConfirmation';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/shop'} component={Shop} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/blog'} component={Blog} />
            <Route exact path={'/payment'} component={Payment} />
            <Route exact path={'/shop/product/:id'} component={ProductPage} />
            <Route exact path={'/payment/confirmation'} component={PaymentConfirmation} />
            <Route exact path={'/shop/cart'} component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
