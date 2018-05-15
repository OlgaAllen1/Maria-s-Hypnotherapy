import React, { Component } from 'react'
import './main.css'
import { Button } from 'reactstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import {Link} from 'react-router-dom'
import roseUrl from './rose.jpg'



class Admin extends Component {
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
            <Paper className='admin1'zdepth={5} rounded={true}>

              <Button className='button' color="success"
                      // onClick={() => onProducts(product)}
              >
                Go to my products
              </Button>



              {/*<Link to="/add-product">*/}
                    <Button className='button'color="success"
                            // onClick={() => onProducts(product)}
                    >
                      Add a Product
                    </Button>
              {/*</Link>*/}



              <Button className='button'color="success"
                      // onClick={() => onProducts(product)}
              >
                Edit a Product
              </Button>

              {/*<img className='rose' src = {roseUrl} alt=""/>*/}

            </Paper>
          </form>

          <br/>

          <form>
            <Paper className='admin2'zdepth={5} rounded={true}>
              {/*<img className='' src = {picUrl} alt=""/>*/}
              <Button className='button'color="success"
                      // onClick={() => onProducts(product)}
              >
                Go to my Users
              </Button>

              <Button className='button'color="success"
                // onClick={() => onProducts(product)}
              >
                Add a User
              </Button>



              <Button className='button'color="success"
                // onClick={() => onProducts(product)}
              >
                Edit a User
              </Button>

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

              <Button className='button'color="success"
                // onClick={() => onProducts(product)}
              >
                Add a Testimonial
              </Button>



              <Button className='button'color="success"
                // onClick={() => onProducts(product)}
              >
                Edit a Testimonial
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