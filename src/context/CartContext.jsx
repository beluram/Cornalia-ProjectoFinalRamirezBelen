import {createContext, useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProduct =(item, newQuantity) =>{
        const {quantity = 0 } = cart.find(prod => prod.item.id === item.id) || {};
        const newCart = cart.filter(prod => prod.item.id !== item.id);
        setCart ([...newCart, {...item, quantity: quantity + newQuantity}]);
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
      };
      
      const totalProducts = () => {
        return cart.reduce(
          (acumulador, productoActual) => acumulador + productoActual.quantity,
          0
        );
      };

    const clearCart = () => setCart ([]); 

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !==id));

    return (
        <CartContext.Provider value={{ addProduct, totalPrice, totalProducts, clearCart, isInCart, removeProduct}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContext, CartProvider};
