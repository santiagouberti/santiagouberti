import { createContext } from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//import CartContext from './context/CartContext';
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brand="Marcus Cymbals"/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
