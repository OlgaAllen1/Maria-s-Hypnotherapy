import React, { Component } from 'react'
import './container.css'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';
import gql from "graphql-tag"
import { client } from '../../../endpoint'



export default class Create extends Component {
        state = {
          username: "",
          email: "",
          password: "",
          repeat: "",
          gender: "",
          birthDate: "",
          date: "",
          summary: "",
          question: true

        }

  render () {

    const addToDataBase = async () => {

      console.log("Insiede of DataBase...")
      console.log( this.state )

      let myBoolian = ( this.state.question === "true" ) ? true : false

      if(this.state.password === this.state.repeat){
        let temp1 = await client.mutate({
          mutation: gql`
              mutation{
                  createUser(
                      data: {
                          username: "${this.state.username}",
                          email: "${this.state.email}",
                          password: "${this.state.password}",
                          gender: "${this.state.gender}",
                          birthdate: "${this.state.birthDate}",
                          date: "${this.state.date}",
                          summary: "${this.state.summary}",
                          question: ${myBoolian}
                      }
                  ){
                      id
                      username
                  }
              }
          `
        }).then((answer) => { return answer.data })

        await console.log("La Data: ", temp1)
        await this.setState({
          username: "",
          email: "",
          password: "",
          repeat: "",
          gender: "",
          birthDate: "",
          date: "",
          summary: "",
          question: true
        })
      }else{
        alert("Password does not match... ")
      }
      // window.location.reload()
    }


//
//       })
// //       let temp1 = await client.mutate({
//         mutation: gql`
//             mutation{
//                 createUser(data: { name: "${this.state.singerName}" }){
//                     id
//                     name
//                 }
//             }
//         `}).then((answer) => { return answer.data.createUser } )
//
//       await console.log("La Data: ", temp1 )
//       await this.setState({ singerName: '' })
//       window.location.reload()
//     }

  // console.log("username: ", this.state.username)
  // console.log("email: ", this.state.email)
  // console.log("password", this. state.password)
  // console.log("repeat", this.state.repeat)
  // console.log("gender", this.state.gender)
  // console.log("birthDate", this.state.birthDate)
  // console.log("date", this.state.date)
  // console.log("summary", this.state.summary)
  // console.log("question", this.state.question)



    return (

      <Form className="main">
        <div>
          <h1>Create your user account</h1>
        </div>

        <FormGroup row>
      
          <Label for="createusername" sm={2}>Username</Label>
          <Col sm={10}>
      
            <Input type="text"
                  name="username"
                   id="createUserName"
                  value={this.state.username}
                  onChange={ (e) => { this.setState({ username: e.target.value }) } }
                  placeholder="your username" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input  type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={ (e) => {this.setState({email: e.target.value })}}
                    placeholder="joe@gmail.com" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={2}>Create a password</Label>
          <Col sm={10}>
            <Input type="password"
                   name="password"
                   id="examplePassword"
                   value={this.state.password}
                   onChange={ (e) => {this.setState({password: e.target.value })}}
                   placeholder="password placeholder" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="example2Password" sm={2}>
               Re-enter your new password
          </Label>
      
          <Col sm={10}>
            <Input type="password"
                   name="password"
                   id="re-examplePassword"
                   value={this.state.repeat}
                   onChange={ (e) => {this.setState({repeat: e.target.value})}}
                   placeholder="password placeholder" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Please select</Label>
          <Col sm={10}>
            <Input type="select"
                   name="select"
                   id="exampleSelect"
                   value={this.state.gender}
                   onChange={ (e) => {this.setState({gender: e.target.value})}}>
                          <option>Male</option>
                          <option>Female</option>
            </Input>
          </Col>
        </FormGroup>


        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Choose your birth date</Label>
          <Col sm={10}>
           <input type="date"
                  value={this.state.birthDate}
                  onChange={ (e) => {this.setState({birthDate: e.target.value})}}/>
          </Col>
        </FormGroup>



        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date"
                 name="date"
                 id="exampleDate"
                 placeholder="date placeholder"
                 value={this.state.date}
                 onChange={ (e) => {this.setState({date:e.target.value})}}/>
        </FormGroup>





        <FormGroup row>
          <Label for="summary" sm={2}>Write something interesting about yourself</Label>
          <Col sm={10}>
            <Input type="text"
                   name="text"
                   id="exampleText"
                   value={this.state.summary}
                   onChange={ (e) => {this.setState({summary:e.target.value})}}/>
          </Col>
        </FormGroup>


        <FormGroup
          // tag="question"
        >
          <legend>Tell me about yourself</legend>

              <FormGroup check>

                <Label check>
                  <Input type="radio"
                         name="radio1"
                         value={this.state.question}
                         onChange={ (e) => {this.setState({question:e.target.value})}}/>{' '}
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
