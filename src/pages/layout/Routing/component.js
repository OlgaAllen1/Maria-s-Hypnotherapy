import { BrowserRouter as Router, Route } from 'react-router-dom'

import React, { Component } from 'react';
import Contact from '../Contact/component'
import AboutHypnotherapy from '../AboutHypnotherapy/container'
import Appointment from '../Appointment/container'
import Marie from '../Marie/component'
import Store from '../Store/container'
import MyAccount from '../MyAccount/component'
// import NavBar from '../NavBar/container'

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AboutHypnotherapy}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/appointment" component={Appointment}/>
          <Route path="/store" component={Store}/>
          <Route path="/account" component={MyAccount}/>
          <Route path="/marie" component={Marie}/>
        </div>
      </Router>
    );
  }
}

export default Routing;
