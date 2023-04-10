

/*import { useContext, useState } from "react"
import CartContextProvider from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"


const ItemDetail = ({id, nombre, valor, data, image}) => {

    const{id} = useParams()
    const {addItem, getProductQuantity} = useContext(CartContextProvider)
    const [quantityAdd, setQuantityAdd] = useState(0)

    useEffect (()=>{
      fetch("../JSON/products.json")
      .then ((res) => res.json())
      .then ((data) => setProduct(data.find((item)=> item.id === parseInt(id))));
    }, [id])

    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)

        const productToAdd = {
           id:prodId, nombre, valor, quantity:Number(quantity), total: (valor*quantity)
        }
    

    const productQuantity= getProductQuantity(id)

        return (
            <div>
            {quantityAdd <=0 ? <ItemCount stock={stock} initial={productQuantity} onAdd={handleOnAdd}/>:(<div>
                        <Link className='button' to='/Cart'>Go to Cart</Link>
                    </div>)}    
            </div>
        )
        
    }
}*/

export default ItemDetail