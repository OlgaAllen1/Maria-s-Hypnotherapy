import React, { Component } from 'react'
import'./products.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import  {Button, Col, Form, FormGroup, Label, Input, FormText}  from 'reactstrap';
import gql from "graphql-tag"
import { client } from '../../../endpoint'

export default class Template extends Component {
  state={
    productName: '',
    description: '',
    picture: '',
    price: '',
    id: ''
  }

  componentDidMount() {
    let productInfo = this.props.info
    this.setState({ productName: productInfo.productName,
                    description: productInfo.description,
                    picture: productInfo.picture,
                    price: productInfo.price,
                    id: productInfo.id
    })
  }

  render () {
      const deleteProduct = async () => {

        console.log('Button')

        let temp1 = await client.mutate({
          mutation: gql`
          mutation {
            deleteProduct(where: { id: "${ this.state.id }" }){
              productName
            }
          }
          `}).then((result) => { return result.data.createUser } )

        await console.log("User Deleted: ", temp1 )
        await this.setState({ singerId: '' })
        window.location.reload()


      }

    const updateProduct = async () => {

      console.log("Update Product..")

      let temp1 = await client.mutate({
        mutation: gql`
            mutation{
                updateProduct( where: { id: "${this.state.id}" }
                    data: {
                        productName: "${this.state.productName}",
                        description: "${this.state.description}",
                        price: ${parseFloat(this.state.price)},
                        picture: "${this.state.picture}"
                    }
                ){
                    productName
                }
            }
        `
      }).then((answer) => { return answer.data })

      await console.log("La Data: ", temp1)

      window.location.reload()
    }



    return (
      <MuiThemeProvider>
            <div className='myProducts'>

              <br/>


                  <Form>
                        <Paper className='add' zDepth={5} rounded={true} >
                          <br/>
                          <div className='c'>
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



                                                  <Button className='button'color="success"
                                                    onClick={updateProduct}
                                                  >
                                                    Edit a Product
                                                  </Button>

                                                  <Button className='button'color="success"
                                                    onClick={ deleteProduct }>
                                                    Delete a Product
                                                  </Button>
                            </div>



                                          <div className='product-picture'>
                                            <img className='picture-product' src={this.state.picture} alt=""/>
                                          </div>

                          </div>

                        </Paper>
                  </Form>
            </div>
      </MuiThemeProvider>

    )
  }
}



