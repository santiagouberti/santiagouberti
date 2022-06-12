const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
    return (
        <>  
             <div class="card mb-3">
                <img src={img} className="rounded mx-auto d-block" alt="{name}" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">{price} - Stock: {stock}</small></p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
