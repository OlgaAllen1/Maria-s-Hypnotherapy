import React, { Component } from 'react'
import './component.css'
import store from '../../../store'
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'

console.log (store)

export class NavBar extends Component {
  render () {
    return (
      <Navbar dark className="bg-dark">
        <NavbarBrand id="NavTitle" className="NavTitle">I am here to help you become the Master of yourself</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink href="/">What is a hypnotherapy?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/marie">About Marie Whale </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create">Create New Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/appointment">Schedule an appointment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="store">Store</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="account">My account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="login">Log in</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
