import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from '../store/CartSlice';

export default function Cart() {
  const product = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // function to remove product from the card 
  const removeToCart = (prod) =>{
    //dispatch a remove funciton
    dispatch(remove(prod));
  }

  // to display all the cards 
  const cards = product.map((prod) => {
    return(
    <div className="container" >
      <Card style={{ width: "300Px", height:"300px" }}>
        <Card.Img variant="top" src={prod.image} style={{width: "80px", height: "100px"}}/>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            INR : {prod.price}
          </Card.Text>
          <Button variant="primary" onClick={() => removeToCart(prod)}>remove to card</Button>
        </Card.Body>
      </Card>
    </div>
    )
  });

  return (
    <>
    <div className="container">
      <h1 className="justify-content">
        Cart
      </h1>
        <div className="row">
        {cards}
        </div>
      </div>
      </>
  )
}
