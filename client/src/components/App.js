import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Footer from './Footer'
import Flash from './Flash';
import Home from './Home/Index';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <FetchUser>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </FetchUser>
      </div>
    );
  }
}

export default App;
