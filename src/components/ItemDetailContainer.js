import { useEffect,useState } from 'react'
import { getCymbalsById } from './asyncmock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [ cymbal, setCymbal ] = useState()
    
    const { productId } = useParams()

    useEffect(() => {
        getCymbalsById(productId).then(response => {
            setCymbal(response)
        })
    }, [])    

    return(
        <>
            <ItemDetail {...cymbal}/>
        </>
    )
}

export default ItemDetailContainer