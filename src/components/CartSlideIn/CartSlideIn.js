import React from 'react'
import CartItem from './CartItem'

export default function CartSlideIn() {
  return (
    <div className="cart-slide-in-main">
      <div className="cart-slide-in-header-row">
        <div className="cart-slide-in-header-text"></div>
        <div className="cart-slide-in-header-close"></div>
      </div>

      <div className="cart-slide-in-products">
        {cartItems.map(cartItem => (
          <CartItem itemImage={cartItem.itemImage} />
        ))}
      </div>

      <div className="cart-slide-in-footer">
        <div className="cart-slide-in-footer-subtotal"></div>
      </div>
    </div>
  )
}
