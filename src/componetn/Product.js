import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useDispatch} from 'react-redux'
import { add } from "../store/CartSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [product, getProduct] = useState([]);

  // to fetch the data from api 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  });

  //function to dispatch 
  const addToCart = (prod) => {
    // dispatch a add aciton 
    dispatch(add(prod));
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
          <Button variant="primary" onClick={() => addToCart(prod)}>Add to card</Button>
        </Card.Body>
      </Card>
    </div>
    )
  });

  // actual funtion 
  return (
    <>
      <div className="container">
      <h1 className="justify-content">
        PRODUCTS
      </h1>
        <div className="row">
        {cards}
        </div>
      </div>
    </>
  );
}
