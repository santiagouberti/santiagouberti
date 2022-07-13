import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({greeting}) => {
    const [ cymbals, setCymbals ] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {

        const collectionRef = categoryId ? (
            query(collection(db, 'cymbals'), where('category', '==', categoryId))
        ) : collection(db, 'cymbals')

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map( doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCymbals(productsFormatted)
            }).catch(error => {
                console.log(error)
            })

    }, [ categoryId ])

    return(
        <>
            <ItemList className="container gondola" cymbals={cymbals} />
        </>
    )
}

export default ItemListContainer