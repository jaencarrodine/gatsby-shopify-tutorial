/* eslint-disable camelcase */
import React, {useState, useContext, useEffect} from 'react'
import SEO from '../components/SEO'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
import CartContext from '../components/Context/CartContext'
import SoldOut from '../components/SoldOut'
import Layout from '../components/Layout'
import {Container} from 'semantic-ui-react'
import useStore from '../context/StoreContext'


import './index.css'
import './cart.css'

const Cart = ({location}) => {
  const [soldOutActive, setSoldOutActive] = useState(false)
  const { cart, checkout, loading } = useStore()
  
  useEffect(()=>{

  },[])

  function handleCheckout(){
    window.open(checkout.webUrl, "_self")
  }

  return (
    <>
      <SoldOut open={soldOutActive} setSoldOutActive={setSoldOutActive} />
      <Layout location={location} open={soldOutActive} background={false}>
        <SEO title="Cart" />
        <div className = 'cart-container'>
          <CartItemList
            items={cart}
            loading={loading}
            
            
          
          />
        
          <CartSummary
            checkout = {checkout}
            handleCheckout={handleCheckout}
          />
          
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Layout>
    </>
  )
}

export default Cart
