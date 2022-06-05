import Item from "./Item"

const ItemList = ({ cymbals }) => {

    return (
        <ul>
            {cymbals.map(cymbal => <Item key={cymbal.id} {...cymbal}/>)}
        </ul>
    )
}

export default ItemList