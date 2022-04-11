import React from 'react'

export default function CartItem({itemImage}) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={'https://i.imgur.com/QQfJ5wY.png'} />
      </div>

      <div className="cart-item-info-name"></div>

      <div className="cart-item-info-price">
        <div className="cart-item-info-price-text">$0.00</div>
        <div className="cart-item-info-price-remove">Delete</div>
      </div>
    </div>
  )
}
