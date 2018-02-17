import React, { Component } from 'react'
import './container.css'
import NavBar from './NavBar/component'
import Routing from './Routing/component'
import imgUrl from '../../HeartandHope.jpg'



export class Layout extends Component {
  render(){
    return (
      <div>
        <img src = {imgUrl} />
        <NavBar/>
        <Routing/>
      </div>
    )
  }

}

export default Layout
