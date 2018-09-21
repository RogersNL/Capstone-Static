import React from 'react';
import NavHeader from './NavHeader';
import Home from './Home';
import RegisterForm from './RegisterForm';
import Error404 from './Error404';
import SignIn from './SignIn';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <NavHeader/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/admin' component={Admin} />
            <Route component={Error404} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
