//import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    // <div className="App">
    //   <NavBar brand="Marcus Cymbals"/>
    //   <ItemListContainer greeting="Bienvenidos a mi tienda de Platillos Artesanales" />
    //   <ItemDetailContainer/>
    // </div>
    <BrowserRouter>
      <NavBar brand="Marcus Cymbals"/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
