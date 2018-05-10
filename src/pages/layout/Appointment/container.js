import React, { Component } from 'react'
import './container.css'
import calUrl from './calendar.jpg'

class Appointment extends Component {
  render () {
    return (
      <div>
        <img className='cal' src = {calUrl} />
      </div>
    )
  }
}

export default Appointment
