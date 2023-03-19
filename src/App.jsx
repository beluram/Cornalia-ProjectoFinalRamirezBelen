import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] =useState ([]);

  useEffect (()=>{
    fetch("../JSON/products.json")
    .then ((res) => res.json())
    .then ((data) => setProducts(data));
  }, [])

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ="/home" element={<h1>Bienvenidos!</h1>}></Route>
        <Route path = "/cart" element={<h1>Finaliza tu compra:</h1>}></Route>
        <Route path='/products' element={<ItemListContainer products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App
