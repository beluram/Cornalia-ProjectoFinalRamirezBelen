import {createContext, useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,
        setCart] = useState(new Map([]))

    const addProduct = (item) => {
        setCart(cart.set(item.id , item))
    }

    const totalPrice = () => {
        let accum = 0
        cart.forEach((item) => accum += item.quantity * item.price)
        return accum;
    };

    const totalProducts = () => {
        let accum = 0
        cart.forEach((item) => accum += item.quantity)
        return accum
    };

    const clearCart = () => setCart(Map([]));

    const isInCart = (id) => cart.has(id)
        ? true
        : false;

    const removeProduct = (id) => 
    {
        cart.delete(id)
        setCart(cart);
    }

    return (
        <CartContext.Provider
            value={{
            cart,
            addProduct,
            totalPrice,
            totalProducts,
            clearCart,
            isInCart,
            removeProduct,
        }}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContext, CartProvider};
