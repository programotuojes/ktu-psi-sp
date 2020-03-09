import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop'} component={Shop} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
