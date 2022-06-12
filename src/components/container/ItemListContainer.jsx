import { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import { getCymbals, getCymbalsByCategory } from '../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [ cymbals, setCymbals ] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        if(!categoryId){
            getCymbals().then(response => {
                setCymbals(response)
            }).catch(error => {
                console.log(error)
            })
        } else {
            getCymbalsByCategory(categoryId).then(response => {
                setCymbals(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])

    return(
        <>
            <ItemList cymbals={cymbals} />
        </>
    )
}

export default ItemListContainer