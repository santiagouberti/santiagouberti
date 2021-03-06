import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <div className="container-fluid ">
                <Link to='/' className="navbar-brand"><h3>Marcus Cymbals</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/category/ride' className={( {isActive} )=> isActive ? "nav-link active" : "nav-link"}>Rides</NavLink>
                        <NavLink to='/category/crash' className={( {isActive} )=> isActive ? "nav-link active" : "nav-link"}>Crashes</NavLink>
                        <NavLink to='/category/hihat' className={( {isActive} )=> isActive ? "nav-link active" : "nav-link"}>Hi Hats</NavLink>
                        <NavLink to='/category/splash' className={( {isActive} )=> isActive ? "nav-link active" : "nav-link"}>Splashes</NavLink>
                        <NavLink to='/category/fx' className={( {isActive} )=> isActive ? "nav-link active d-flex" : "nav-link d-flex"}>FXs</NavLink>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar   