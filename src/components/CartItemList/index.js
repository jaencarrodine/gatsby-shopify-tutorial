/* eslint-disable camelcase */
import React from 'react'
import {useEffect, useState} from 'react'
import {
  Item,
  Button,
  Loader,
  Message,
  Responsive,
  Container,
} from 'semantic-ui-react'
import {Link} from 'gatsby'
import useStore from '../../context/StoreContext'
import Skeleton from '@mui/material/Skeleton';
import CartQuantity from '../CartQuantity/CartQuantitty';
import MediaQuery from 'react-responsive'
import './CartItemList.css'


import Bimg from '../../images/BImgs/rasberry1.png'
import Mimg from '../../images/MImgs/mango1.png'
import Oimg from '../../images/OImgs/orange1.png'
import Pimg from '../../images/PImgs/pineapple1.png'
import Simg from '../../images/SImgs/strawberry1.png'
import Wimg from '../../images/WImgs/watermelon1.png'

const images = [Pimg, Oimg, Simg, Bimg, Wimg, Mimg]

export default function({items, removeFromCart,loading, completed, updated}) {
  const [price, setPrice] = useState()
  const [soldOutMessage, setSoldOutMessage] = useState('')
  const [cartUpdated, setCartUpdated] = useState(0)
  const [purchaseType, setPurchaseType] = useState('onetime')

  const { removeLineItem } = useStore()


  if (loading) return (
    <div className = 'cart-item'>
      <Skeleton variant="rectangular" width={118} height={150} animation = "wave"/>
    </div>
  )

  if (completed)
    return (
      <Message success>
        <Message.Header>Your placed!</Message.Header>
        <p>Congratulations. Your order and payment has been accepted.</p>
      </Message>
    )

  if (items.length === 0)
    return (
      <div className = 'empty-cart'>
        <div className = 'empty-cart-header'>
          Your cart is empty
        </div>
        <Link to = '/products' style = {{textDecoration:'none'}}>
          <div className = 'continue-shopping-button'>
            Continue shopping
          </div>
        </Link>
      </div>
    )

  const mapCartItemsToItems = items => {
    const cartItems = items.map(({product, quantity}) => {
     

      return (
        <>
        <MediaQuery maxWidth={600} >
        <div className="cart-item" key={product.title}>
          <div className="cart-item-image-div">
            <img className="cart-item-image" src={product.images[0].src} />
          </div>
          <div className = 'cart-item-attributes'>
            <div className="cart-item-info-name">
              <div className =  'ciif1'>{product.title}</div>
              <div className = 'ciif2'>${product.priceRangeV2.maxVariantPrice.amount}</div>
            </div>

            

            
          </div>
          <div className="cart-item-info-quantity-div">
              <CartQuantity quantity = {quantity} product = {product}/>

             
            </div>
        </div>
        </MediaQuery>

        <MediaQuery minWidth={601} >
          <div className="cart-item" key={product.title}>
          <div className="cart-item-image-div">
            <img className="cart-item-image" src={product.images[0].src} />
          </div>

          <div className="cart-item-info-name">
            <div className =  'ciif1'>{product.title}</div>
            <div className = 'ciif2'>${product.priceRangeV2.maxVariantPrice.amount}</div>
          </div>

          <div className="cart-item-info-quantity-div">
            <CartQuantity quantity = {quantity} product = {product}/>
          </div>

          <div className="cart-item-info-price">
            <div className="cart-item-info-price-text">
              {`$${(parseFloat(product.priceRangeV2.maxVariantPrice.amount) * quantity).toFixed(2)}`}
            </div>

            <div
              className="cart-item-info-price-remove"
              onClick={() => removeLineItem(product.title)}
            >
              Delete
            </div>
          </div>
        </div>
        </MediaQuery>
        </>
      )
    })
    return cartItems
  }

  if(items.length > 0)return(
    <>
      <div className = 'cart-item-list-header'>
        <div className = 'cart-item-list-header-text'>Your cart</div>
        <Link to = '/products' style = {{textDecoration:'none', color:'black'}} className = 'bts-link'><div className = 'back-to-shopping'>Continue shopping</div></Link>
      </div>
      <div className = 'cart-items-list'>
        {mapCartItemsToItems(items)}
      </div>


      
    </>

  )
}
