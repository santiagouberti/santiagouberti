import { Link } from 'react-router-dom'

const Item = ( {id, name, price, category, img, stock, description} ) => {

    return (
            <div className="col-6">
                {/* style={{width: '18rem'}} */}
                <div className="card">
                    <img src={img} className="card-img-top" alt="cymbal" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    <div className="card-footer bg-transparent">U$ {price}</div>
                    </div>
                    <Link to={`/detail/${id}`} className='btn btn-primary btn-warning'>Detalles</Link>
                </div>
            </div>
    )
}

export default Item