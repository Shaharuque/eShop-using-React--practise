import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Allproducts.css'

const Allproducts = (props) => {
    const {addItem,deleteItem}=props

    const [products,setProducts]=useState([])
    //fetch data from api inside useEffect()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    //console.log(products)
    return (
        <div>
           <h1>Top products</h1> 
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
            products.map(product=><Product key={product.id} addItem={addItem} deleteItem={deleteItem} product={product}></Product>)
            }
          </div>
        </div>
    );
};

export default Allproducts;