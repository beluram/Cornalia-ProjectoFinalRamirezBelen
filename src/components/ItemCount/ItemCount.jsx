import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {CardActions} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import {useContext, useState} from "react";
import CartContext from "../../context/CartContext";


export default function ItemCount({product}) {
    const cartContext = useContext(CartContext);

    const [quantity, setQuantity] = useState(product.quantity? 0: product.quantity);

    function handleAddItemClick() {
        if (product.quantity) {
            product.quantity += 1
        } else {
            product.quantity = 1
        }
        setQuantity(product.quantity)
        console.log("Seleccionaste: " + product.quantity + " de " + product.nombre)
    }

    function handleRemoveItemClick() {
        if (product.quantity) {
            product.quantity -= 1
        } else {
            product.quantity = 0
        }
        setQuantity(product.quantity)
        console.log("Seleccionaste: " + product.quantity + " de " + product.nombre)
    }

    function handleAddToCart() {
        console.log(cartContext)
        console.log("Estoy agregando al carrito")
    }

    return (
        <div>
            <CardActions>
                <IconButton aria-label="remove" color="primary" onClick={handleRemoveItemClick}>
                    <RemoveIcon/>
                </IconButton>
                <p>{quantity}</p>
                <IconButton aria-label="add" color="primary" onClick={handleAddItemClick}>
                    <AddIcon/>
                </IconButton>
                <IconButton aria-label="add" color="primary" onClick={handleAddToCart}>
                    <AddIcon/>
                </IconButton>
            </CardActions>
        </div>
    );

}