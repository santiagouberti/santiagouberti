import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    if(totalQuantity>0){
        return(
            <NavLink to='/cart' className={( {isActive} )=> isActive ? "btn btn-warning active" : "btn btn-warning"}>Cart: {totalQuantity}</NavLink>
        )
    }

    return(
            <></>
        )
}

export default CartWidget