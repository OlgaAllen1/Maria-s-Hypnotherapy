import React, { Component } from 'react'
import './component.css'
import store from '../../store'
import {footer} from 'reactstrap'

console.log (store)

export class Footer extends Component {
  render () {
    const contact = { textAlign: "center" }
      return (
        <body>
         <footer class="footer">
           <div style={contact}>
               <br/>
               <h5>Call me or text me if you have any questions or if you would like to schedule an appointment
               </h5>
               <h4>801-390-3520</h4>
               <h4>Marie Whale CHT</h4>
               <br/>
               <br/>
           </div>
         </footer>
        </body>
      )
  }
}

export default Footer


