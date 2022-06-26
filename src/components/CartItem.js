import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({ id, name, price, quantity, stock }) => {

    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        console.log(`se removió el producto ${name}`)
        removeItem(id)
    }

    return (
        <li className='list-group-item'>
            <h5>Producto: {name}</h5>
            Precio: U${price} Cantidad:{quantity}
            <br></br>
            <span>
                <button type="button" className="btn btn-warning" onClick={handleRemove}>Remover Item</button>
            </span>
        </li>
    )
}

export default CartItem