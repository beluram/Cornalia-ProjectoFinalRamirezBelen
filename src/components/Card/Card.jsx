import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({product}) => {
  return (
    <Link to={`${product.id}`}>
        <div className={styles.container}>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} width="400"/>
            <h3>${product.valor}</h3>
        </div>
    </Link>
  )
}

export default Card