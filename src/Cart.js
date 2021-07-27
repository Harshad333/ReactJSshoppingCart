import React from 'react'
import './Cart.css';

const Cart = ({ cart, setCart}) => {
  //console.log(cart)
  const getTotalAmount = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  }


  const removeFromCart = (productDelete) => {
    setCart(
      cart.filter((product) => product !== productDelete)
    )
  }

  const clearCart = () => {
    setCart([])
  }


  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.title === product.title).quantity = amount;
    // console.log(product.quantity)
    setCart(newCart);
    //console.log(newCart)
  };


  return (
    <div>
      <h1 className="Cart">Cart</h1>
      {cart.length > 0 && (<button className="Clear_cart" onClick={clearCart}>Clear Cart</button>)}
      <div className="Products">
        {
          cart.map((product) => (
            <div className="Product" key={product.id}>
              <p style={{fontSize:"20px"}}>{product.title}</p>
              <img src={product.image} className="iconImage" alt={product.title}></img>
              <div>
                <input
                  className="add-minus-quantity"
                  value={product.quantity}
                  type='number'
                  onChange={(e) =>
                    setQuantity(product, parseInt(e.target.value)
                    )
                  }
                />
              </div>
              <h4 style={{fontSize:"20px"}}><span>&#8377;</span>{product.price}</h4>
              <i className="Delete" ><button onClick={() => removeFromCart(product)}>remove</button></i>
              <hr></hr>
            </div>
          ))
        }
        <div className="Total">
        <h1>Grand Amount : <span>&#8377;</span>{getTotalAmount()}</h1> 
        <button className="Checkout">CheckOut</button>
       </div>
      </div>
    </div>
  )
}

export default Cart
