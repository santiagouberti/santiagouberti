const ItemDetail = ({ id, name, description }) => {
    return (
        <>
            <h2>{name}</h2>
            {/* <img src={img} alt="Foto del platillo" /> */}
            <p>{description}</p>
            
        </>
    )
}

export default ItemDetail
