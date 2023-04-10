import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
    return (
        <div>
            <CartContextProvider>
                <Navbar/>
                <Routes>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path='/' element={< ItemListContainer />}/>
                    <Route path='/category/:id' element={< ItemListContainer />}/>
                    <Route path="/item/:id" element={< ItemDetailContainer />}/>
                </Routes>
            </CartContextProvider>
        </div>
    );
}

export default App
