import Item from "./Item"

const ItemList = ({ cymbals }) => {

    return (
        <div className="container">
            <div className='row'>
                {cymbals.map(cymbal => <Item className="col-lg-6" key={cymbal.id} {...cymbal}/>)}
            </div>
        </div>
    )
}

export default ItemList