
import styles from './ItemListContainer.module.css';
import Card from '../Card/Card';

const ItemListContainer = ({products}) => {
  return(
    <div className={styles.productos}>
      {products.map((product) => (<Card key={product.id} product={product}/>))}
    </div>
  );
};
  
  export default ItemListContainer;