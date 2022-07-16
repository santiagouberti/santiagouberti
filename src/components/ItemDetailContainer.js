import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [ cymbal, setCymbal ] = useState()
    const { productId } = useParams()
    const [ loading,setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'cymbals', productId )
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setCymbal(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }

    return(
        <>
            <ItemDetail {...cymbal}/>
        </>
    )
}

export default ItemDetailContainer