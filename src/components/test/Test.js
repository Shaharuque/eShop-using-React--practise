import React, { useState } from 'react';

const Test = (props) => {
    //console.log(props)
    //const {count}=props

    const [number,setNumber]=useState(0)
    //console.log(typeof(setNumber))
    let increase=(n)=>{
        setNumber(number+n)
    }
    // let decrease=()=>{
    //     setNumber(number-1)
    // }

   // console.log(number)

    return (
        <div className='mt-3'>
            <h1>count: {number} </h1>
            {/*2 korey barbey*/}
            <button onClick={()=>increase(2)} /*onClick={()=>setNumber(number+1)}*/ className='p-3 mx-3'>+</button>

                                           {/*1 korey kombey*/}
            <button /*onClick={decrease}*/ onClick={()=>setNumber(number-1)} className='p-3 mx-3'>-</button>
        </div>
    );
};

export default Test;