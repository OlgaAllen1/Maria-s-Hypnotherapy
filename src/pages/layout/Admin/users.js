import React, { Component } from 'react'
import'./users.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';
import gql from "graphql-tag"
import { client } from '../../../endpoint'

export default class MyUsers extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    gender: '',
    birthDate: '',
    date: '',
    summary: '',
    question: ''
  }

  async componentWillMount(){
    console.log('Hello from Will Mount!')

      let temp2 = await client.query({
        query: gql`
            query {
                users {
                    userName
                    email
                    password
                    gender
                    birthDate
                    date
                    summary
                    question
                }
            }
        `}).then((result) => { return result.data.products } )

    await console.log("La Data: ", temp2 )
    await this.setState({ users: temp2 })

  }

  render () {

    const addNewUser = async () => {

      console.log("Add a user ..")

        let temp2 = await client.mutate({
          mutation: gql`
            mutation {
                createUser(data: {
                    userName: "${this.state.userName}",
                    email: ,
                    password: '',
                    gender: '',
                    birthDate: '',
                    date: '',
                    summary: '',
                    question: ''
                })
            }

              
          `
        }).then((answer) => { return answer.data })

        await console.log("La Data: ", temp2)
        await this.setState({
          userName: '',
          email: '',
          password: '',
          gender: '',
          birthDate: '',
          date: '',
          summary: '',
          question: ''
        })
      //
      //
      //
      //
      //
      //
      }



      return (
        <MuiThemeProvider>
          <div className='myUsers'>
            <form>
              <div>
                <br/>
                <h1>
                  Admin Page For Users
                </h1>
              </div>
            </form>

            <br/>
            <form>
              <Paper className='add' zDepth={5} rounded={true}>
                <br/>
                <FormGroup row>

                </FormGroup>

                <FormGroup row>

                </FormGroup>

                <FormGroup row>

                </FormGroup>

                <FormGroup row>

                </FormGroup>

                <Button className='button' color="success"
                        onClick={addNewUser}
                >
                  Add a User
                </Button>


                {/*<Button className='button' color="success"*/}
                  {/*onClick={() => onUsers(user)}*/}
                {/*>*/}
                  {/*Edit a User*/}
                {/*</Button>*/}

                {/*<Button className='button' color="success"*/}
                  {/*onClick={() => onUsers(user)}*/}
                {/*>*/}
                  {/*Delete a User*/}
                {/*</Button>*/}

              </Paper>
            </form>
          </div>
        </MuiThemeProvider>

      )
    }
  }
