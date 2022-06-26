import { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
        const [quantityAdded, setQuantityAdded] = useState(0)

        const { addItem, clearCart, removeItem } = useContext(CartContext)

        const handleOnAdd = (quantity) => {
            console.log(`se agregaron ${quantity} ${name}`)
            addItem({ id, name, price, quantity })
            setQuantityAdded(quantity)
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
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-muted">{price} - Stock: {stock}</small></p>
                        { quantityAdded === 0 
                            ? <ItemCount onAdd={handleOnAdd} stock={stock}/>
                            : <Link className='btn btn-success'to='/cart'>Finalizar compra</Link>
                        }
                    <button className='btn btn-outline-dark' onClick={handleRemove}>Remover Item</button>
                    <button className='btn btn-outline-dark' onClick={handleClear}>Vaciar Carrito</button>
                    <Link to='/' className='btn btn-outline-dark'>Volver</Link>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
