import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import db from "../../../db/firebase-config" ;
//import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [items, setItems ] = useState([]);
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}));
    setItems(items);
  };

  console.log(items)

  useEffect(() =>{
    getItems();
  }, []);
      

    return (
    <div>
       {items.map((item) =>(
        <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name} width="400"/>
        <h3>${item.price}</h3>
        <p>DESCRIPCIÓN: {item.data}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemDetailContainer;
