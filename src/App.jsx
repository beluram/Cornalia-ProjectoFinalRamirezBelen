import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/cart" element={<h1>Finaliza tu compra:</h1>}/>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App
