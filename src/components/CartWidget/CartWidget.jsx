import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext'
import { useContext } from "react";

const CartWidget = () => {
    const {totalProducts} = useContext(CartContext);
    return (
    <div>
        <BsFillCartFill />
        <span>{totalProducts() || ' '}</span>
    </div>
    )
};


export default CartWidget;