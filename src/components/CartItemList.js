import CartItem from "./CartItem"

const CartItemList = ({ productsAdded }) => {
    return (
        <ul className='list-group'>
            {/* {cart.map(cym => <h3>Nombre: {cym.name} precio:{cym.price} q:{cym.quantity}</h3>)} */}
            {productsAdded.map(cym => <CartItem key={cym.id} {...cym} />)}
        </ul>
    )
}

export default CartItemList