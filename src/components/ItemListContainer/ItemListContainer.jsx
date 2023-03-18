import styles from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
    return (
      <div className={styles.saludo}>
        {greeting}
      </div>
    );
  };
  
  export default ItemListContainer;