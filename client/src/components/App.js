import React, { Component } from "react";
import NoMatch from "./NoMatch";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Flash from "./Flash";
import Home from "./Home/Index";
import Mission from "./Mission/Index";
import ProtectedRoute from "./ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./FetchUser";
import Partnerships from "./Partnerships/Index";
import Team from "./Team/Index";
import GardenMap from "./GardenMap/Index";
import Submit from "./Submit/Index";
import Resources from "./Resources/Index";
import Events from "./Events/Index";
import { Admin } from "./Admin/Index";
import AuthRoute from "./AuthRoute";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mission' component={Mission} />
          <Route exact path='/partnerships' component={Partnerships} />
          <Route exact path='/ourteam' component={Team} />
          <Route exact path='/gardenmap' component={GardenMap} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/submitasite' component={Submit} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/admin' component={Admin} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
