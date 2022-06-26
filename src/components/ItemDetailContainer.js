import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [ cymbal, setCymbal ] = useState()
    
    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'cymbals', productId )
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setCymbal(productFormatted)
        }).catch(error => {
            console.log(error)
        })
    })

    return(
        <>
            <ItemDetail {...cymbal}/>
        </>
    )
}

export default ItemDetailContainer