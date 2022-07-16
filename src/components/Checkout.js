import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItemList from './CartItemList'
import { addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)
    const precioTotal = getTotalPrice()
    const [ checkout, setCheckout ] = useState(false)
    const [ compraId, setCompraId ] = useState('')   

    useEffect(() => {
    }, [checkout])

    const [ client, setClient ] = useState({
        name: "",
        email: "",
        emailvalidation: "",
        phone: "",
        address: ""
    })
    
    const handleChange = (event) => {
        const value = event.target.value;
        setClient({
        ...client,
        [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(client)
    }

    const handleCreateOrder = () => {
        if (client.email === client.emailvalidation) {
            const objOrder = {
                buyer: client,
                items: cart,
                total: precioTotal
            }
    
            const batch = writeBatch(db)
            const ids = cart.map(prod => prod.id)
            const outOfStock = []
            const collectionRef = collection(db, 'cymbals')
            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc => {
                        const dataDoc = doc.data()
                        
                        const prod = cart.find(prod => prod.id === doc.id)
                        const prodQuantity = prod.quantity
                        
                        if(dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                        } else {
                            outOfStock.push({ id: doc.id, ...dataDoc})
                        }
                    })
                }).then(()=> {
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(db, 'orders')
                        const current = new Date();
                        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                        objOrder.date = date
                        return addDoc(collectionRef, objOrder)
                    } else {
                        return Promise.reject({ type: 'out_of_stock', cymbals: outOfStock})
                    }
                }).then(({ id }) => {
                    batch.commit()
                    clearCart()
                    console.log(`Su orden se ha generado correctamente. El id de su orden es ${id}`)
                    setCheckout(true)
                    setCompraId(id)
                }).catch(error => {
                    if(error.type === 'out_of_stock') {
                        console.log('Hay productos que no tienen stock')
                    } else {
                        console.log(error)
                    }
                })
        } else {
            alert('Por favor valide su email y vuelva a intentarlo. Muchas gracias.')
        }
    }

    if(checkout === false) {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>
    
                        <h3>Ingrese sus datos para completar la compra:</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="form-label">
                                Nombre
                                    <input
                                        class="form-control"
                                        type="text"
                                        name="name"
                                        value={client.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-label">
                                Email
                                    <input
                                        class="form-control"
                                        type="email"
                                        name="email"
                                        value={client.email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-label">
                                Reingresar Email
                                    <input
                                        class="form-control"
                                        type="email"
                                        name="emailvalidation"
                                        value={client.emailvalidation}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-label">
                                    Teléfono
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="phone"
                                            value={client.phone}
                                            onChange={handleChange}
                                        />
                                </label>
                            </div>
                            <div>
                                <label className="form-label">
                                    Dirección
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="address"
                                            value={client.address}
                                            onChange={handleChange}
                                        />
                                </label>
                            </div>
                        <button type="submit" className="btn btn-warning" onClick={handleCreateOrder}>Generar Orden de Compra</button>
                        </form>
                    </div>
                    <div className='col'>
                        <>
                            <h3>Detalles de tu compra:</h3>
                            <CartItemList className='container-xl' productsAdded={cart} />
                            <h5>Total: U${precioTotal}</h5>
                        </>
                    </div>
                </div>
    
            </div>
        )
    } 
    if (checkout === true){
        return(
            <div className='container'>
                <h1>Muchas gracias por tu compra!</h1>
                <p>El id de tu orden de compra es {compraId}</p>
                <p>En breve serás contactado por nuestro equipo para coordinar el pago y la entrega de tus cymbals.</p>
                <Link to="/" className='btn btn-warning'>Volver</Link>
            </div>

        )
    }
}

export default Checkout