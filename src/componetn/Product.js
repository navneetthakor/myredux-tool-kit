import React from 'react';
import { useState, useEffect } from 'react';

export default function Product() {
    const [product, getProduct]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProduct(result))
    })
  return (
    <>
    <h1>
        All the PRODUCTS
        {JSON.stringify(product)}
    </h1>
    </>
  )
}
