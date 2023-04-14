import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'


const Item = ({ item }) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <div>
      <div>
        <img src={item.image} alt={item.title} />
        <div >
          <p>{item.title}</p>
          <p>Precio $ {item.price}</p>
          <p>Subtotal $ {item.quantity * item.price}</p>
          <button onClick={() => removeProduct(item.id)}>
            Eliminar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;