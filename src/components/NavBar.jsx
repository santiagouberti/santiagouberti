import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = ({brand}) => {

    return(
    <nav >
        <ul>
            <CartWidget />
            <li><a className="brand" href="#MarcusCymbals">{brand}</a></li>
            <li><a href="#Rides">Rides</a></li>
            <li><a href="#Crashes">Crashes</a></li>
            <li><a href="#Hi Hats">Hi Hats</a></li>
            <li><a href="#Splashes">Splashes</a></li>
            <li><a href="#FX">FX</a></li>
        </ul>
    </nav>
    );
}

export default NavBar