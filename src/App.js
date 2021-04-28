import Header from './components/Layout/Header'
import {useState} from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';
function App() {
  const [cartStatus,setCartStatus]=useState(false);
  const showCartHandler=()=>{
    setCartStatus(true);
  }
  const hideCartHandler=()=>{
    setCartStatus(false);
  }
  return (
    <CartProvider>
   {cartStatus && <Cart onClose={hideCartHandler} />}
   <Header onShowCart={showCartHandler} />
   <main><Meals /></main>
    </CartProvider>
  );
}

export default App;
