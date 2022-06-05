import { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import { getCymbals } from '../asyncmock'

const ItemListContainer = ({greeting}) => {
    const [ cymbals, setCymbals ] = useState([])
    
    useEffect(() => {
        getCymbals().then(response => {
            setCymbals(response)
        })
    }, [])

    return(
        <>
            <ItemList cymbals={cymbals} />
        </>
    )
}

export default ItemListContainer