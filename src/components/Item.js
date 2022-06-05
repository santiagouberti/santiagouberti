const Item = ( {id, name, price, category, img, stock, description} ) => {

    return (
        <div class="card" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt="cymbal" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
            </div>
            <div class="card-footer bg-transparent border-success">{price}</div>
        </div>
    )
}

export default Item