import React, { useState } from 'react'
import './App.css';
import Cart from './Cart';
import Product from './Product'


const App = () => {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('products')

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }


  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="cart-icon">
          <div className="go_product"> <button className="view_product" onClick={() => navigateTo('products')}>View Product</button>
            <button className="view_cart" onClick={() => navigateTo('cart')}>Go to  Cart({getCartTotal()})</button></div>
        </div>
      </div>
      {page === 'products' && <Product cart={cart} setCart={setCart} />}
        {page === 'cart' && <Cart setCart={setCart} cart={cart} />}

    </div>
  );
}

export default App;