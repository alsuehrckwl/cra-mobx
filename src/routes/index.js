import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import Auth from './auth';
import Header from '../layout/header';

const MainComponent = loadable(() => import('routes/main'));

const Routes = () => {
  return (
    <div className="container">
      <Header />
      <section>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
