import React from 'react';
import NavHeader from './NavHeader';
import Browse from './Browse';
import RegisterForm from './RegisterForm';
import Error404 from './Error404';
import SignIn from './SignIn';
import Admin from './Admin';
import NewItemForm from './NewItemForm';
import UserAccounts from './UserAccounts';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <NavHeader/>
        <div className="container">
          <Switch>
            <Route exact path='/' />
            <Route path='/browse' component={Browse} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/admin' component={Admin} />
            <Route path='/new-item' component={NewItemForm} />
            <Route path='/user-accounts' component={UserAccounts} />
            <Route component={Error404} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
