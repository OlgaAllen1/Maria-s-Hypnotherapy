import React, { Component } from 'react'
import './container.css'
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateUser extends Component {
  render() {
    return (

      <Form className="CreateUser">
        <div>
          <h1>Create your profile page</h1>
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

                <option>Student</option>
                <option>Parent</option>
                <option>Teacher</option>

              </Input>
            </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Choose your birth year</Label>
            <Col sm={10}>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>

                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>other</option>

              </Input>
            </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Choose your birth month</Label>
            <Col sm={10}>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>

                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>

              </Input>
            </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Choose your birth day</Label>
            <Col sm={10}>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>

                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>

              </Input>
            </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="summary" sm={2}>Write something interesting about yourself</Label>
            <Col sm={10}>
              <Input type="text" name="text" id="exampleText" />
            </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="summary" sm={2}>What are your hobbies?</Label>
            <Col sm={10}>
              <Input type="text" name="text" id="exampleText" />
            </Col>
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Add your picture</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This picture will be on your profile.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Tell us about your hobbies</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Do you dance?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Do you play an instrument?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Do you play chess?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Do you play sports?
            </Label>
          </FormGroup>
          {/*<FormGroup check disabled>*/}
            {/*<Label check>*/}
              {/*<Input type="radio" name="radio1" disabled />{' '}*/}
              {/*Option three is disabled*/}
            {/*</Label>*/}
          {/*</FormGroup>*/}
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Do you have a pet?
          </Label>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

// export default CreateUser
