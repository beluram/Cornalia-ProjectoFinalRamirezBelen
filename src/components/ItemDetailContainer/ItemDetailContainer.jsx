import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] =useState({});
    const{id} = useParams()
      useEffect (()=>{
        fetch("../JSON/products.json")
        .then ((res) => res.json())
        .then ((data) => setProduct(data.find((item)=> item.id === parseInt(id))));
      }, [id])
      

    return (
    <div>
        <h1>{product.nombre}</h1>
        <img src={product.imagen} alt={product.nombre} width="400"/>
        <h3>${product.valor}</h3>
        <p>DESCRIPCIÓN: {product.data}</p>
    </div>
  )
}

export default ItemDetailContainer;