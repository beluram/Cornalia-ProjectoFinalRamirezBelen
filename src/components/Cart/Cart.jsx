import React, {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";
import Item from "../Item/Item";

const Cart = () => {
    const {cart, totalProducts, totalPrice} = useContext(CartContext);

    if (cart.size === 0) {
        return (
            <div>
                <h1>Su carrito esta vacio</h1>
                <Link to="/">
                    Comprar
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div>
            {(cart.size==0 ? [] : Array.from(cart.values())).map((value,key) => 
              <Item key={key} item={value} />)}
            </div>
            <div>
                <p>TOTAL PRODUCTOS {totalProducts()}</p>
                <p>TOTAL PRECIO {totalPrice()}</p>
            </div>
            <div>
            <Link to='/Checkout'>
                    Finalizar compra
            </Link>
            </div>
        </div>
    );
};

export default Cart