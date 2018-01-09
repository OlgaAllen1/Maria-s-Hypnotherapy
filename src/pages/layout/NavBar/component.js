import React, { Component } from 'react'
import './component.css'
import store from '../../store'
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'

console.log (store)

export class NavBar extends Component {
  render () {
    return (
      <Navbar dark className="bg-dark">
        <NavbarBrand className="NavTitle">Kid's Social Network</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/library">Library</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users-list">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="create-user">Create a User</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="profile-page">My profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
