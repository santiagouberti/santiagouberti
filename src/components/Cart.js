import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link,NavLink } from 'react-router-dom'
import CartItemList from './CartItemList'

const Cart = () => {
    const { cart, getTotalPrice, totalQuantity, clearCart } = useContext(CartContext)
    const precioTotal = getTotalPrice()

    if(totalQuantity === 0){
        return (
            <div className='container'>
                <h3>No hay ningun producto en tu carrito.</h3>
                <Link to='/' className='btn btn-primary btn-warning'>Volver</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <CartItemList className='container-xl' productsAdded={cart} />
            <h5>Total: U${precioTotal}</h5>
            <button className='btn btn-outline-warning' onClick={()=> clearCart()}>Clear Cart</button>
            <NavLink to='/checkout' className={( {isActive} )=> isActive ? "btn btn-warning active" : "btn btn-warning"}>Checkout</NavLink>
        </div>
    )
}

export default Cart

