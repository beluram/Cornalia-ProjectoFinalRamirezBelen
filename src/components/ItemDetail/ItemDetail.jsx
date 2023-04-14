import {Link} from "react-router-dom";
import  ItemCount  from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext'

function ItemDetail({item}) {
    const [goToCart, setGoToCart] = useState (false)
    const {addProduct} = useContext(CartContext);

    const onAdd = (quantity) =>{
        setGoToCart (true);
        addProduct(item, quantity)
    }
    return (
        <div>
            <img src={item.image} alt={item.name}/>
            <div>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                <p>{item.data}</p>
            </div>
            <div>
                {
                    goToCart
                    ?  <Link to={"/cart"}>Ir al carrito</Link>
                    : <ItemCount item={item} onAdd={onAdd}/>
                    }
            </div>
        </div>
    );
}

export default ItemDetail