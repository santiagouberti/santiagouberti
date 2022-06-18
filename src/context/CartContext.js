import { useState, createContext, useEffect } from 'react'

//CartContext es el contexto que voy a importar desde childrens
const CartContext = createContext ()

//componente de alto orden
export const CartProvider = ({children}) => {
    const [ cart,setCart ] = useState([])
    const [ totalQuantity,setTotalQuantity ] = useState(0)

    // console.log(cart)

    useEffect(() => {
        let totalQuantity= 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        setTotalQuantity(totalQuantity)
        console.log(cart)
    }, [cart])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        // console.log(cart)
      }
    }

    const removeItem = (id) => {
        const cartWitoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWitoutProduct)
        // console.log(cart)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
        // console.log(cart)
    }

    return (
        <CartContext.Provider value={{
            cart, addItem, removeItem, isInCart, clearCart, totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext