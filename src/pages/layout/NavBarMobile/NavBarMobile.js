import React, { Component } from 'react'
import './NavBarMobile.css'
//import store from '../../../store'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
//import store from '../../../store'

//export default ({ cartCount }) => (
export default class Example extends React.Component {
  constructor(props) {
    super (props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>

  <Navbar dark className="bg-dark">

    <NavbarBrand id="NavTitle" className="NavTitle">I am here to help you become the Master of yourself</NavbarBrand>
    <Nav className="ml-auto">
      {/*<NavItem>*/}
      {/*<NavLink href="/">Home</NavLink>*/}
      {/*</NavItem>*/}
      <NavItem>
        <NavLink href="/marie">About Marie Whale </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/testimonials">Testimonials</NavLink>
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
        {/*<NavLink href="/store">Store</NavLink>*/}
      </NavItem>
      <NavItem>
        <NavLink href="/account">My account</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/products" className="nav-link">Products</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/cart" className="nav-link">Cart ({cartCount}) </NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/login">Log in</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/admin">Admin</NavLink>
      </NavItem>

    </Nav>

  </Navbar>
)

console.log (store)
