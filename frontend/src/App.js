import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Payment from './pages/payment/Payment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <Homepage />
          </Route>
          <Route exact path={'/about'}>
            <About />
          </Route>
          <Route exact path={'/blog'}>
            <Blog />
          </Route>
          <Route exact path={'/payment'}>
            <Payment />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
