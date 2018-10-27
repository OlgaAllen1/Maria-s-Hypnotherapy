import React from 'react'

import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap'


export default ({ product, onAddToCart }) => (
  <Card>
    <img src={product.picture} alt=""/>
    <CardHeader>{product.productName}</CardHeader>
    <CardBody>{product.description}</CardBody>
    <CardBody>{product.price}</CardBody>
    <CardFooter>
      <Button color="success" onClick={() => onAddToCart(product)}>Add To Cart</Button>
    </CardFooter>
  </Card>

)