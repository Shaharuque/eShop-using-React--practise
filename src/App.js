import logo from './logo.svg';
import './App.css';
import Menubar from './components/menubar/Menubar';
import Test from './components/test/Test';
// bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import Allproducts from './components/allProducts/Allproducts';
import { useState } from 'react';


function App() {

  // let count=()=>{
  //   console.log('i am a count function from app.js')
  // }

  const [count,setCount]=useState(0)

  let addItem=()=>{
    setCount(count+1)
  }

  let deleteItem=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <div className="App">
      {/*<Test count={count}></Test>*/}
      <Menubar count={count}></Menubar>
      <h1>Welcome to e-Shop</h1>
      {/*setCartValue() pass to 'Allproducts' component as props key*/}
      <Allproducts addItem={addItem} deleteItem={deleteItem}></Allproducts>
    </div>
  );
}

export default App;
