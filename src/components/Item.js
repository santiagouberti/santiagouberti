import { Link } from 'react-router-dom'

const Item = ( {id, name, price, category, img, stock, description} ) => {

    return (
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt="cymbal" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">{description}</p> */}
                <div className="card-footer bg-transparent">{price}</div>
                </div>
                <Link to={`/detail/${id}`} className='btn btn-primary btn-warning'>Detalles</Link>
            </div>
    )
}

export default Item