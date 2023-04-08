/*import {createContext, useState} from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
    console.log(cart)
    const addItem = (productToAdd) => {
        setCart([
            ...cart,
            productToAdd
        ])
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity}}>{children}</CartContext.Provider>
    )
}*/