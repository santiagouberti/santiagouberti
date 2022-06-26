import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

import CartItemList from './CartItemList'

const Cart = () => {
    const { cart, getTotalPrice, totalQuantity } = useContext(CartContext)

    const precioTotal = getTotalPrice()

    if(totalQuantity === 0){
        return (
            <>
                <h3>No hay ningun producto en el carrito, aún ;D ...</h3>
                <Link to='/' className='btn btn-primary btn-warning'>Volver</Link>
            </>
        )
    }

    return (
        <>
            <CartItemList className='container-xl' productsAdded={cart} />
            <h5>Total: U${precioTotal}</h5>
        </>

    )
}

export default Cart

