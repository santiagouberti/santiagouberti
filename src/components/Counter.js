import { useState } from 'react'

const Counter = ({ onAdd, removeItem, stock, initial = 0 }) => {
        const [ count, setCount ] = useState(initial)
        
        const increment = () => {
            // agregar un item al contador, max = stock
            if(count < stock){
                setCount(count + 1)
            }
        }
    
        const decrement = () => {
            //restar item del contador, hasta 0
            if(count > 0) {
                setCount(count - 1)
            }
        }
    
        return (
            <>
                <p>{count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </>
        )
    }

export default Counter
