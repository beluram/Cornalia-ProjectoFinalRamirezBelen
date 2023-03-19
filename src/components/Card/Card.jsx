import styles from "./card.module.css";

const Card = ({product}) => {
  return (
    <div className={styles.container} >
        <div>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} width="400"/>
            <h3>${product.valor}</h3>
            <p>{product.data}</p>
        </div>
    </div>
  )
}

export default Card