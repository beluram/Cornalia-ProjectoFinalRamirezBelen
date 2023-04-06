import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddItemButton({product}) {
    function handleAddItemClick() {
        if (product.quantity) {
            product.quantity += 1
        }else {
            product.quantity = 1
        }
        
        console.log("Me clickeaste: " + product.nombre + " Cantidad: " + product.quantity)
    }

    return (
        <IconButton aria-label="add" color="primary" onClick={handleAddItemClick}>

            <AddIcon/>
        </IconButton>

    );
}