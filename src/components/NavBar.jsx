import CartWidget from "./CartWidget"

const NavBar = ({brand}) => {

    return(
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#Marcus Cymbals">Marcus Cymbals</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#Rides">Rides</a>
                <a class="nav-link" href="#Crashes">Crashes</a>
                <a class="nav-link" href="#Hi Hats">Hi Hats</a>
                <a class="nav-link" href="#Splashes">Splashes</a>
                <a class="nav-link" href="#FX">FX</a>
                <CartWidget />
            </div>
            </div>
        </div>
        </nav>
    );
}

export default NavBar   