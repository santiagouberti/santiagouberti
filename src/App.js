import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar brand="Marcus Cymbals"/>
      <ItemListContainer greeting="Bienvenidos a mi tienda de Platillos Artesanales" />
    </div>
  );
}

export default App;
