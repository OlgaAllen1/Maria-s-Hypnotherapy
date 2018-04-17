import React, { Component } from 'react'
import './container.css'
import NavBar from './NavBar/component'
import Footer from './Footer/component'
import Routing from './Routing/component'
import imgUrl from '../../HeartandHope.jpg'
// // import React, { Component } from 'react'
// import { Table, Row, Col } from 'reactstrap'
// import { connect } from 'react-redux'
// import {removeFromCart} from '../cart/actions'
// import CartRow from '../cart/cart-row/component'



export class Layout extends Component {
  render(){
    return (
      <div>

        <img src = {imgUrl} />
        <NavBar/>
        <Routing/>
        <Footer/>

      </div>
    )
  }

}

export default Layout

// import React, { Component } from 'react'
// import { Table, Row, Col } from 'reactstrap'
// import { connect } from 'react-redux'
// import {removeFromCart} from './actions'
// import CartRow from './cart-row/component'
//
// export class Layout extends Component {
//   handleRemoveCart =(product) => {
//     this.props.dispatch(removeFromCart(product))
//   }
//
//   render () {
//     const products = this.props.products.map((product, idx) => <CartRow key={idx} onRemoveCart={this.handleRemoveCart} product={product}/>)
//
//     return (
//
//       <div className="products-container">
//         <Row>
//           <Table bordered={true} striped={true}>
//             <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Remove</th>
//             </tr>
//             </thead>
//             <tbody>
//             {products}
//             </tbody>
//           </Table>
//         </Row>
//       </div>
//
//     )
//   }
// }
//
// const mapStateToProps = (state) => ({
//   products: state.cart.products
// })
//
// export default connect(mapStateToProps)(Layout)