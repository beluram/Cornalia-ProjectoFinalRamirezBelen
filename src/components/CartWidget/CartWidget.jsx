import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {setQuantity} = useContext (CartContext)

    const quantity = setQuantity()
    return (
    <div>
        <BsFillCartFill />
        <span>{quantity}</span>
    </div>
    )
};


export default CartWidget;