import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import NavBar from './components/NavBar';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Payment from './pages/payment/Payment';
import ProductPage from "./pages/shop/ProductPage";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <NavBar />
          <BrowserRouter>
            <Switch>
              <Route exact path={'/'} component={Homepage} />
              <Route exact path={'/shop'} component={Shop} />
              <Route exact path={'/about'} component={About} />
              <Route exact path={'/blog'} component={Blog} />
              <Route exact path={'/payment'} component={Payment} />
              <Route exact path={'/shop/ProductPage'} component={ProductPage} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
  );
}

export default App;
