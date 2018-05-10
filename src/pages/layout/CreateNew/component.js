import React, { Component } from 'react'
import './container.css'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';
import gql from "graphql-tag"
import { client } from '../../../endpoint'



export default class Create extends Component {

  // state = { username: '' }
  // state = { email: '' }
  // state = { password1: '' }
  // state = { password2: '' }
  // state = { gender: '' }
  // state = { birthDate: '' }
  // state = { date: '' }
  // state = { something: '' }
  // state = { tell: '' }





  render() {const addToDataBase = async () => {

    let temp1 = await client.mutate({
      // mutation: gql`
      //
      //     mutation{
      //         createUser(data: { name: "${this.state.username}" }){
      //             id
      //             name
      //         }
      //     }
      // `
    }).then((result) => { return result.data.createUser })

    await console.log("La Data: ", temp1)
    await this.setState({singerName: ''})
    window.location.reload()

  }

    return (

      <Form className="main">
        <div>
          <h1>Create your user account</h1>
        </div>

        <FormGroup row>
          <Label for="createusername" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="username" name="username" id="createusername" placeholder="your username" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="joe@gmail.com" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={2}>Create a password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="example2Password" sm={2}>Re-enter your new password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="re-examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Please select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </Col>
        </FormGroup>


        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Choose your birth date</Label>
          <Col sm={10}>
          <input type="date"/>
          </Col>
        </FormGroup>



        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>





        <FormGroup row>
          <Label for="summary" sm={2}>Write something interesting about yourself</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="exampleText" />
          </Col>
        </FormGroup>


        <FormGroup tag="fieldset">
          <legend>Tell me about yourself</legend>

          <FormGroup check>

            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Do you dance?
            </Label>
          </FormGroup>


          {/*<FormGroup check>*/}
            {/*<Label check>*/}
              {/*<Input type="radio" name="radio1" />{' '}*/}
              {/*Do you play an instrument?*/}
            {/*</Label>*/}
          {/*</FormGroup>*/}
          {/*<FormGroup check>*/}
            {/*<Label check>*/}
              {/*<Input type="radio" name="radio1" />{' '}*/}
              {/*Do you play chess?*/}
            {/*</Label>*/}
          {/*</FormGroup>*/}
          {/*<FormGroup check>*/}
            {/*<Label check>*/}
              {/*<Input type="radio" name="radio1" />{' '}*/}
              {/*Do you play sports?*/}
            {/*</Label>*/}
          {/*</FormGroup>*/}
        </FormGroup>
        <Button className="userButton" onClick={ addToDataBase }>Submit</Button>

      </Form>
    );
  }
}

// import React from 'react'
// import gql from "graphql-tag"
// import { client } from './PrismaEndPoint/EndPoint'
//
//
// export default class extends React.Component{
//   state = { singerName: '' }
//
//   render(){
//
//     const addToDataBase = async () => {
//       let temp1 = await client.mutate({
//         mutation: gql`
//             mutation{
//                 createUser(data: { name: "${this.state.singerName}" }){
//                     id
//                     name
//                 }
//             }
//         `}).then((result) => { return result.data.createUser } )
//
//       await console.log("La Data: ", temp1 )
//       await this.setState({ singerName: '' })
//       window.location.reload()
//     }
//
//     return(
//       <div>
//         <h1>Add Singer</h1>
//
//         <div>
//           <h3>Provide Singer or Group name below</h3>
//           <input className="gralInput" type="text" value={ this.state.singerName } onChange={ (e) => { this.setState({ singerName: e.target.value }) } } />
//           <br/><br/>
//           <button className="gralButton" onClick={ addToDataBase } >Add to DataBase</button>
//         </div>
//       </div>
//     )
//   }
