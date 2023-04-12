import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore"
import db from "../../../db/firebase-config" ;
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
  
  const [items, setItems ] = useState([]); 
  const {id} = useParams()
  console.log("prodID:",id) 

  const getItems = async() =>{
    const document = doc(db, "items", id)
   const response = await getDoc(document)
   const result = {id: response.id, ...response.data()}  
   setItems(result)
}
 

  useEffect(() =>{
    getItems();
  }, []);
      

    return (
    <div className={styles.container}> 
        <ItemDetail item={items}/>
    </div>
  )
}

export default ItemDetailContainer;
