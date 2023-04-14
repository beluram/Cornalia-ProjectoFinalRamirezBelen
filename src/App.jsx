import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
    return (
        <div>
            <CartProvider>
                <Navbar/>
                <Routes>
                    <Route path="/cart" element={< Cart />}/>
                    <Route path='/' element={< ItemListContainer />}/>
                    <Route path='/category/:id' element={< ItemListContainer />}/>
                    <Route path="/item/:id" element={< ItemDetailContainer />}/>
                    <Route path='/Checkout' element={<Checkout/>}/>
                </Routes>
            </CartProvider>
        </div>
    );
}

export default App
