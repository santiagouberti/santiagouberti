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
            <h1>Titulo de Detalle del Cymbal</h1>
            <ItemDetail {...cymbal}/>
        </>
    )
}

export default ItemDetailContainer