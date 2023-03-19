import { useParams } from "react-router-dom"

const ItemDetailContainer = ({products}) => {
    const { id } = useParams();
    const product = products.find((product) => product.id == id);

    return (
    <div>
        <h1>{product.nombre}</h1>
        <img src={product.imagen} alt={product.nombre} width="400"/>
        <h3>${product.valor}</h3>
        <p>DESCRIPCIÓN: {product.data}</p>
    </div>
  )
}

export default ItemDetailContainer