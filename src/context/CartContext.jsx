import {createContext, useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const updateItem = (product) => {
        setItems([...items, product])
        console.log(items)
    }

    const getItems= () => {
        return items
    }

    return (
        <CartContext.Provider value={{updateItem, getItems}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContext, CartProvider};
