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
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-muted">{price} - Stock: {stock}</small></p>
                    <Counter onAdd={handleOnAdd} stock={stock}/>
                    <button className='btn btn-outline-dark' onClick={handleRemove}>Remover Item</button>
                    <button className='btn btn-outline-dark' onClick={handleClear}>Vaciar Carrito</button>
                </div>
            </div>
            {/* <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ItemDetail
