import styles from './ItemListContainer.module.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../db/firebase-config" ;
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems ] = useState([]);
  const itemsRef = collection(db, "items");
   const {id} = useParams() 
  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}));
    setItems(items);
  };

const getItemsCategory = async () =>{ 
      const q = query(collection(db,"items"),where('category','==',id))
      const itemsCollection = await getDocs(q)
      const itemsFiltrados = itemsCollection.docs.map((doc) => doc = { ...doc.data(),id:doc.id})
      setItems(itemsFiltrados) 
  }   

  useEffect(() =>{
    if(id){
      getItemsCategory()
    }else{
      getItems();
    }
  }, [id]);

      return (
        <div className={styles.container}>
          {items.map((item) => (<Card key={item.id} item={item}/>))}
        </div>
      );
  };
  
  export default ItemListContainer;