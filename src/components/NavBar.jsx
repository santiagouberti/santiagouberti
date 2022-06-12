import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = ({brand}) => {

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand"><h3>Marcus Cymbals</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/category/ride' className="nav-link">Rides</Link>
                <Link to='/category/crash' className="nav-link">Crashes</Link>
                <Link to='/category/hihat' className="nav-link">Hi Hats</Link>
                <Link to='/category/splash' className="nav-link">Splashes</Link>
                <Link to='/category/fx' className="nav-link" href="#FX">FX</Link>
                <CartWidget />
            </div>
            </div>
        </div>
        </nav>
    );
}

export default NavBar   