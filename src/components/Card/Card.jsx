import {Link} from "react-router-dom";
import styles from "./card.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions} from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";

function CardProduct({item}) {

    return (
        <div className={styles.container}>
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
                    </CardContent>
                </CardActionArea>
                <Link to={`/item/${item.id}`}>Ver más</Link>
                <CardActions>
                    <ItemCount item={item}/>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardProduct;
