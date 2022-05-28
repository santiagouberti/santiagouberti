import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar brand="Marcus Cymbals"/>
      <ItemListContainer />
    </div>
  );
}

export default App;
