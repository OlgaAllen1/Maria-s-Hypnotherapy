
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import ProductCard from "./product-card/component"
import './container.css'
import { addToCart } from '../../cart/actions'
import gql from "graphql-tag"
import { client } from '../../../endpoint'


export class Layout extends Component {

state = { products: [] }


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



  handleAddToCart = (product) => {
    this.props.dispatch(addToCart(product))
  }

  render () {
    const products = this.state.products.map((product) => (

      <Col key={product.id} xs="3">
       <ProductCard onAddToCart={this.handleAddToCart} product={product}/>
      </Col>
    ))

    return (
      <div className="products-container">
        <Row>

          {products}

        </Row>
      </div>

    )
  }
}

  const mapStateToProps = (state) => ({
    products: state.products.data
  })

  export default connect(mapStateToProps)(Layout)