import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Card from '../Card/Card'

export default function Cart() {
    const {updateItem, getItems} = useContext(CartContext)

  return (
        <div>
          {getItems().map((product) => (<Card key={product.id} product={product}/>))}
        </div>
  )
}
