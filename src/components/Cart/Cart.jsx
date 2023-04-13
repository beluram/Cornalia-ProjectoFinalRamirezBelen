import React, { useContext } from 'react'
//mport { CartContext } from '../../context/CartContext'
import Card from '../Card/Card'

export default function Cart() {
    //const {} = useContext(CartContext)

  return (
        <div>
          {getItems().map((item) => (<Card key={item.id} item={item}/>))}
        </div>
  )
}
