import { useState, useEffect, useContext } from 'react'
import CartContext from '../context/CartContext'
import Counter from './Counter'

const ItemDetail = ({ id, name, img, description, category, price, stock }) => {

        const { addItem, clearCart, removeItem } = useContext(CartContext)

        const handleOnAdd = (quantity) => {
            console.log(`se agregaron ${quantity} ${name}`)
            addItem({ id, name, price, quantity })
        }

        const handleRemove = () => {
            console.log(`se removió el producto ${name}`)
            removeItem(id)
        }

        const handleClear = () => {
            console.log('se vació el carrito')
            clearCart()
        }

    return (
        <>  
             <div class="card mb-3">
                <img src={img} className="rounded mx-auto d-block" alt="{name}" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">{price} - Stock: {stock}</small></p>
                    <Counter onAdd={handleOnAdd} stock={stock}/>
                    <button onClick={handleClear}>Vaciar Carrito</button>
                    <button onClick={handleRemove}>Remover Item</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
