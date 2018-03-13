import React, { Component } from 'react'
import './component.css'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';

export default class Create extends Component {
  render() {
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
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
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
        <Button>Submit</Button>
      </Form>
    );
  }
}

