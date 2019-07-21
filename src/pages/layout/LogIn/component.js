import React, {Component} from 'react';
import './component.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class extends Component {
  constructor (props){
    super(props)
    this.state ={
      userName:'',
      password:''
    }
  }
  render () {
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.userName + " : " + this.state.password)
    }

    // const handleTextChange = (event) => {
    //   this.setState({userName: event.target.value})
    // }
    const MyLink = props => <Link to="/open-collective" {...props} />
    return(
      <div className="LogIn">
        <form className="flexBox" onSubmit={handleSubmit}>

          <input type="text" placeholder="Username" onChange={e => this.setState({userName: e.target.value})} />
          <br/>
          <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
          <br/>
          <input type="submit" placeholder="Submit"/>
          <br/>
          <br/>
          <Button variant="contained" color="primary" component={MyLink}>
            New user
          </Button>

          {/*const StyledButton = withStyles({*/}
          {/*root: {*/}
          {/*background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',*/}
          {/*borderRadius: 3,*/}
          {/*border: 0,*/}
          {/*color: 'white',*/}
          {/*height: 48,*/}
          {/*padding: '0 30px',*/}
          {/*boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',*/}
        {/*},*/}
          {/*label: {*/}
          {/*textTransform: 'capitalize',*/}
        {/*},*/}
        {/*})(Button);*/}
        </form>
      </div>
    );
  }
}