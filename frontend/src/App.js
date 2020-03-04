import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop'} component={Shop} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
