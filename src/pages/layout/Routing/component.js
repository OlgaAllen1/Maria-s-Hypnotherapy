import { BrowserRouter as Router, Route } from 'react-router-dom'

import React, { Component } from 'react';
import CreateNew from '../CreateNew/component'
import AboutHypnotherapy from '../AboutHypnotherapy/container'
import Appointment from '../Appointment/container'
import Marie from '../Marie/component'
import Store from '../Store/container'
import MyAccount from '../MyAccount/component'
import Blog from '../Blog/container'
import LogIn from '../LogIn/component'
import Cart from '../../../pages/cart/container'
import Products from '../products/container'

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AboutHypnotherapy}/>
          <Route path="/create" component={CreateNew}/>
          <Route path="/appointment" component={Appointment}/>
          <Route path="/store" component={Store}/>
          <Route path="/account" component={MyAccount}/>
          <Route path="/marie" component={Marie}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/products" component={Products}/>
        </div>
      </Router>
    );
  }
}

export default Routing;
