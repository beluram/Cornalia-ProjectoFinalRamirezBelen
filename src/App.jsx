import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
        <Route path = "/cart" element={<h1>Finaliza tu compra:</h1>}/>
        <Route path='/home' element={<ItemListContainer products={products}/>}/>
        <Route path='/products/:category/:id' element={<ItemListContainer products={products}/>}/>
        <Route path="/home/:id" element={<ItemDetailContainer products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App
