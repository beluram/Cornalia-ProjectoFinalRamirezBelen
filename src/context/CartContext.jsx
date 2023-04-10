import {createContext, useState} from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [pruebaContex, setPruebaContext] = useState(['pepe'])
    return (
        <CartContext.Provider value={{pruebaContex, setPruebaContext}}>{children}</CartContext.Provider>
    )
    
}

export default CartContextProvider

    /*const [cart,
        setCart] = useState([])
    console.log(cart)
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([
                ...cart,
                productToAdd
            ])
        } else {
            const cartUp = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const productUp = {
                        ...prod,
                        quantity: productToAdd.quantity,
                        total: productToAdd.quantity*productToAdd.price
                    }
                    return productUp
                } else {
                    return prod
                }
            })
            setCart(cartUp)
        }

        const getQuantity = () => {
            let accu = 0

            cart.forEach(prod => {
                accu += prod.quantity
            })

            return accu
        }
        const isInCart = (id) => {
            return cart.some(prod => prod.id === id)
        }
        const getProductQuantity = (id) => {
            const product = cart.find(prod => prod.id === id)
    
            return product?.quantity
        }
        const total = cart.reduce((acc, sum) => {
            return acc + sum.total
        }, 0)
    
        return (
            <CartContext.Provider
                value={{
                cart,
                addItem,
                getQuantity,getProductQuantity, isInCart,
            }}>{children}</CartContext.Provider>
        )
    }*/