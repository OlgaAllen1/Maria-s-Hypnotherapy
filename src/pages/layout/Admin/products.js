import React, { Component } from 'react'
import'./products.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';
import gql from "graphql-tag"
import { client } from '../../../endpoint'
import Template from './Template'

export default class MyProducts extends Component {
  state={
    productName: '',
    description: '',
    picture: '',
    price: '',
    products: []

  }

  async componentWillMount(){
    console.log('Hello from Will Mount!')

      let temp1 = await client.query({
        query: gql`
            query {
                products {
                    productName
                    description
                    price
                    id
                    picture
                }
        }
        `}).then((result) => { return result.data.products } )

      await console.log("La Data: ", temp1 )
      await this.setState({ products: temp1 })

  }


  render () {

    const addNewProduct = async () => {

      console.log("Add a product ..")

      let temp1 = await client.mutate({
        mutation: gql`
            mutation {
                createProduct(data: {
                    productName: "${this.state.productName}",
                    description: "${this.state.description}",
                    price: ${parseFloat(this.state.price)},
                    picture: "${this.state.picture}"
                }){
                    id
                    productName
                }
            }
        `
      }).then((answer) => { return answer.data })

      await console.log("La Data: ", temp1)
      await this.setState({
        productName: "",
        description: "",
        picture: "",
        price: ""
      })
      window.location.reload()
    }

    return (
      <MuiThemeProvider>
        <div className='myProducts'>
          <form>
            <div className='title'>
              <br/>
              <h1>
                Admin Page For Products
              </h1>
            </div>
          </form>

          <br/>
          <form>
           <Paper className='add' zDepth={5} rounded={true} >
             <br/>
             <div className='container-of-content' >
               <div>
                 <FormGroup row>
                   <Label for="productName" sm={2}>Product Name</Label>
                   <Col sm={10}>
                     <Input  type="productname"
                             name="productname"
                             id="productname"
                             value={this.state.productName}
                             onChange={ (e) => {this.setState({productName: e.target.value })}}
                             placeholder="Product Name" />
                   </Col>
                 </FormGroup>

                 <FormGroup row>
                   <Label for="description" sm={2}>Description</Label>
                   <Col sm={10}>
                     <Input  type="description"
                             name="description"
                             id="description"
                             value={this.state.description}
                             onChange={ (e) => {this.setState({description: e.target.value })}}
                             placeholder="Description" />
                   </Col>
                 </FormGroup>

                 <FormGroup row>
                   <Label for="examplePrice" sm={2}>Price</Label>
                   <Col sm={10}>
                     <Input  type="price"
                             name="price"
                             id="examplePrice"
                             value={this.state.price}
                             onChange={ (e) => {this.setState({price: e.target.value })}}
                             placeholder="$" />
                   </Col>
                 </FormGroup>

                 <FormGroup row>
                   <Label for="examplePicture" sm={2}>Picture</Label>
                   <Col sm={10}>
                     <Input  type="picture"
                             name="picture"
                             id="examplePicture"
                             value={this.state.picture}
                             onChange={ (e) => {this.setState({picture: e.target.value })}}
                             placeholder="*" />
                   </Col>
                 </FormGroup>

                 <Button className='button' color="success"
                         onClick={addNewProduct}
                 >
                   Add a New Product
                 </Button>

               </div>

             </div>

          </Paper>
        </form>


          <br/>
          <hr/>

          <h1>Existing Products</h1>
          <br/>


          {
            this.state.products.map( (x) => { return <Template key={x.id} info={x} /> } )
          }

        </div>
     </MuiThemeProvider>

   )
  }
 }
