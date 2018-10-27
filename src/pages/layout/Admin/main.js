import React, { Component } from 'react'
import './main.css'
import { Button } from 'reactstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import {Link, Redirect} from 'react-router-dom'
import roseUrl from './rose.jpg'



class Admin extends Component {
  state = { goToProduct: false }
  state = { goToUsers: false}

  render () {
    return (
      <MuiThemeProvider>
        <div className='Admin'>
          <form>
            <div>
              <h1>
                Administrator Page
              </h1>
            </div>
          </form>

          <br/>

          <form>
            <Paper className='admin1' zdepth={5} rounded={true}>
                  <Button className='button' color="success"
                          onClick={() => { this.setState({ goToProduct: true }) }}>
                    Go to my products
                  </Button>
                     { this.state.goToProduct ? <Redirect push to="/add-product" /> :
                      <div>
                      </div>
                  }
                  <img className='rose' src = {roseUrl} alt=""/>
            </Paper>
          </form>

          <br/>

          <form>
            <Paper className='admin1' zdepth={5} rounded={true}>
              {/*<img className='' src = {picUrl} alt=""/>*/}
                    <Button className='button' color="success"
                            onClick={() => { this.setState({ goToUsers: true }) }}>
                      Go to my Users
                    </Button>
                       { this.state.goToUsers ? <Redirect push to="/add-user" /> :
                <div>
                </div>
              }

            </Paper>
          </form>

          <br/>

          <form>
            <Paper className='admin2'zdepth={5} rounded={true}>
              {/*<img className='' src = {picUrl} alt=""/>*/}
              <Button className='button' color="success"
                      // onClick={() => onProducts(product)}
              >
                Go to Testimonials
              </Button>

              {/*<Button className='button'color="success"*/}
                {/*// onClick={() => onProducts(product)}*/}
              {/*>*/}
                {/*Add a Testimonial*/}
              {/*</Button>*/}

              {/*<Button className='button'color="success"*/}
                {/*// onClick={() => onProducts(product)}*/}
              {/*>*/}
                {/*Edit a Testimonial*/}
              {/*</Button>*/}

            </Paper>
          </form>

          <br/>

          <form>
            <Paper className='admin2'zdepth={5} rounded={true}>
              {/*<img className='' src = {picUrl} alt=""/>*/}
              <Button className='button'color="success"
                      // onClick={() => onProducts(product)}
              >
                Go to my Calendar
              </Button>

            </Paper>
          </form>

          <br/>

          <form>
            <Paper className='admin2'zdepth={5} rounded={true}>
              {/*<img className='' src = {picUrl} alt=""/>*/}
              <Button className='button'color="success"
                      // onClick={() => onProducts(product)}
              >
                Go to my Credit Card Sales
              </Button>

            </Paper>
          </form>

        </div>
      </MuiThemeProvider>

    )
  }
}

export default Admin