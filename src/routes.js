import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Example01 from './pages/Example01';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/example01" component={Example01} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
