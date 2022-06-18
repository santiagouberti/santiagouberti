import { useState } from 'react'

const ItemCount = ({ onAdd, removeItem, stock, initial = 0 }) => {
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
                <div className='btn-group'>
                    <button type='button' className='btn btn-outline-warning' onClick={decrement}>-</button>
                    <button type= 'button' className='btn btn-outline-dark' disabled> {count} </button>
                    <button type='button' className='btn btn-outline-warning' onClick={increment}>+</button>
                </div>
                <p>
                    <button className='btn btn-warning' onClick={() => onAdd(count)}>Agregar al Carrito</button>
                </p>
            </>
        )
    }

export default ItemCount
