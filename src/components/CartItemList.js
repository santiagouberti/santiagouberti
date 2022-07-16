import CartItem from "./CartItem"

const CartItemList = ({ productsAdded }) => {
    return (
        <div className='container'>
            <ul className='list-group container'>
                {productsAdded.map(cym => <CartItem key={cym.id} {...cym} />)}
            </ul>
        </div>
    )
}

export default CartItemList