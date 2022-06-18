import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        // <img src="Logo-M5.png" alt="Marcus" width="60" height="50" class="d-inline-block align-text-top" />
        <NavLink to='/cart' className={( {isActive} )=> isActive ? "btn btn-warning active" : "btn btn-warning"}>Cart: {totalQuantity}</NavLink>
        )
}

export default CartWidget