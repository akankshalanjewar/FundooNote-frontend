import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../../src/pages/dashboard/dashboard';
import SignIn from '../../src/pages/signin/signin';
import SignUp from '../../src/pages/signup/signup';

export default function Router() {
  return (
    <div>
      <BrowserRouter >
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route  path="/signup" component={SignUp}/>
        <Route  path="/dashboard" component={Dashboard}/>
        
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}
