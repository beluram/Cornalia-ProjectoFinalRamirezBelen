import styles from './ItemListContainer.module.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"
import db from "../../../db/firebase-config" ;
//import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems ] = useState([]);
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id, id: doc.category}));
    setItems(items);
  };

  console.log(items)

  useEffect(() =>{
    getItems();
  }, []);

      return (
        <div className={styles.container}>
          {items.map((item) => (<Card key={item.id} item={item}/>))}
        </div>
      );
  };
  
  export default ItemListContainer;