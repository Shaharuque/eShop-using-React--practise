import React, { useEffect } from 'react';
import Reactmodal from '../reactModal/Reactmodal';
import './Product.css'
//aos animation use korar jnno
import AOS from 'aos'
import "aos/dist/aos.css";

const Product = (props) => {
    console.log(props)
    const {image,price,category,description,title}=props.product

    //aos animation use korar jnno ai useEffect part tuku
    useEffect(()=>{
        AOS.init({
            // initialise with other settings
            duration : 2000
          });
    },[])

    return (   
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="col ">
        <div className="card p-4 rounded">
            <img className='img-sizeing container mx-auto' src={image} alt="" />
                <div className="card-body">
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Category: {category}</p>
                </div>
            <div className='Display-buttons'>
                <button onClick={props.addItem} className=' btn buttonStyle '>ADD TO CART</button>
                <button onClick={props.deleteItem} className='btn buttonStyle2 mx-2'>DELETE</button>
                {/*ReactModal component call*/ }
                <Reactmodal description={description} title={title}></Reactmodal>
            </div>
        </div>      
    </div>
    );
};

export default Product;