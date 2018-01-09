import { BrowserRouter as Router, Route } from 'react-router-dom'

import React, { Component } from 'react';
import UsersList from '../UsersList/container'
import Home from '../Home/container'
import CreateUser from '../CreateUser/container'
import TeachersBillboard from '../TeachersBillboard/component'
import Library from '../Library/component'
import ProfilePage from '../ProfilePage/component'
// import NavBar from '../NavBar/container'

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/users-list" component={UsersList}/>
          <Route path="/create-user" component={CreateUser}/>
          <Route path="/profile-page" component={ProfilePage}/>
          <Route path="/teachers-billboard" component={TeachersBillboard}/>
          <Route path="/library" component={Library}/>
        </div>
      </Router>
    );
  }
}

export default Routing;
