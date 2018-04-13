import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import LabelPage from '../LabelPage';
import TrashPage from '../TrashPage';
import NotFound from '../NotFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/label/:title" component={LabelPage} />
    <Route path="/trash" component={TrashPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
