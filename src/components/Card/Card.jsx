import {Link} from "react-router-dom";
import styles from "./card.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";

function CardProduct({product}) {
    return (
        <div className={styles.container}>
            <Card sx={{
                maxWidth: 345
            }}>
                <CardActionArea>
                    <CardMedia component="img" image={product.imagen} alt={product.nombre}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${product.valor}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Link to={`/item/${product.id}`}>Ver más</Link>
                <CardActions>
                    <Button size="small" color="primary">Agregar al carrito</Button>
                </CardActions>
                <CardActions>
                    <ItemCount product={product}/>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardProduct;
