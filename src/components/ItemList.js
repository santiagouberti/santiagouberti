import Item from "./Item"

const ItemList = ({ cymbals }) => {

    return (
        <div className='container'>
            {cymbals.map(cymbal => <Item key={cymbal.id} {...cymbal}/>)}
        </div>
    )
}

export default ItemList