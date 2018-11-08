import React, { Component } from 'react'
import './component.css'
import store from '../../../store'
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'
// import {Link} from 'redux-little-router'



//FROM SHPOWER:

// import {Link} from 'redux-little-router'
//
// export default ({ cartCount }) => (
//   <Navbar dark={true} className="bg-dark">
//     {/*<NavbarBrand>Shopping Cart</NavbarBrand>*/}
//
//     <Nav>
//       <Link href="/products" className="nav-link">Products</Link>
//       <Link href="/cart" className="nav-link">Cart ({cartCount}) </Link>
//     </Nav>
//
//   </Navbar>
// )
//
// console.log (store)






export default ({ cartCount }) => (

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
