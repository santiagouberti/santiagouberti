import { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import { getCymbalsByCategory,getCymbals } from '../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [ cymbals, setCymbals ] = useState([])

    const { categoryId } = useParams()
    // console.log(categoryId)
    
    useEffect(() => {
        if(!categoryId) {
            getCymbals().then(response => {
                setCymbals(response)
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        } else {
            getCymbalsByCategory(categoryId).then(response => {
                setCymbals(response)
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [ categoryId ])

    return(
        <>
            <ItemList cymbals={cymbals} />
        </>
    )
}

export default ItemListContainer