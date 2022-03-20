import React from 'react';
import './Menubar.css'

const Menubar = (props/*{name}*/) => {
    //console.log(props)
    //const {name}=props
    const {count}=props
    
    return (
        <div>
            <nav className='nav-style fixed-top'>
                <h4>logo</h4>
                <div>
                    <a href="Home">Home</a>
                    <a href="Sections">Sections</a>
                    <a href="Cart">Cart<sup>{count}</sup></a>
                    <a href="About">About</a>                
                </div>
            </nav>
        </div>
    );
};

export default Menubar;