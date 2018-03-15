import React, {Component} from 'react';
import './component.css'

export default class extends Component {
  constructor (props){
    super(props)
    this.state ={
      username:'',
      password:''
    }
  }
  render () {
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.username + " : " + this.state.password)
    }

    // const handleTextChange = (event) => {
    //   this.setState({username: event.target.value})
    // }

    return(
      <div className="LogIn">
        <form className="flexBox" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={e => this.setState({username: e.target.value})} />
          <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
          <input type="submit" placeholder="Submit"/>
        </form>
      </div>
    );
  }
}