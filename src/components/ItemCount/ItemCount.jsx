import {CardActions} from '@mui/material';
import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import {Button} from '@mui/material';

function ItemCount({item}) {
    const {addProduct} = useContext(CartContext);

    const [quantity,
        setQuantity] = useState(item.quantity
        ? 0
        : item.quantity);

    function handleAddItemClick() {
        if (item.quantity) {
            item.quantity += 1
        } else {
            item.quantity = 1
        }
        setQuantity(item.quantity)
        console.log("Seleccionaste: " + item.quantity + " de " + item.name)
    }

    function handleRemoveItemClick() {
        if (item.quantity) {
            item.quantity -= 1
        } else {
            item.quantity = 0
        }
        setQuantity(item.quantity)
        console.log("Seleccionaste: " + item.quantity + " de " + item.name)
    }

    function handleAddToCart() {
        addProduct(item)
    }

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
            </CardActions>
            <CardActions>
                <Button aria-label="remove" color="primary" onClick={handleRemoveItemClick}>
                    -
                </Button>
                <p>{quantity}</p>
                <Button aria-label="add" color="primary" onClick={handleAddItemClick}>
                    +
                </Button>
            </CardActions>
        </div>
    );

}

export default ItemCount