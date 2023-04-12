import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({item}) {

    return (
        <div>
            <Card sx={{
                maxWidth: 345
            }}>
                <CardActionArea>
                    <CardMedia component="img" image={item.image} alt={item.name}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${item.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.data}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Link to={"/cart"}>Ir al carrito</Link>
                <CardActions>
                    <ItemCount item={item}/>
                </CardActions>
            </Card>
        </div>
    );
}

export default ItemDetail