import {IconButton} from "@mui/material";
import { AddIcon } from '@mui/icons-material/Add';
import {CardActions} from '@mui/material';
import { RemoveIcon } from '@mui/icons-material/Remove';
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
        console.log("Seleccionaste: " + item.quantity + " de " + item.nombre)
    }

    function handleRemoveItemClick() {
        if (item.quantity) {
            item.quantity -= 1
        } else {
            item.quantity = 0
        }
        setQuantity(item.quantity)
        console.log("Seleccionaste: " + item.quantity + " de " + item.nombre)
    }

    function handleAddToCart() {
        addProduct()
    }

    return (
        <div>
            <CardActions>
                <Button size="small" color="primary" onClick={handleAddToCart}>Agregar al carrito</Button>
            </CardActions>
            <CardActions>
                <IconButton aria-label="remove" color="primary" onClick={handleRemoveItemClick}>
                    <RemoveIcon/>
                </IconButton>
                <p>{quantity}</p>
                <IconButton aria-label="add" color="primary" onClick={handleAddItemClick}>
                    <AddIcon/>
                </IconButton>
            </CardActions>
        </div>
    );

}

export default ItemCount