import React from 'react'
import { motion } from 'framer-motion'
//components
import {Link} from 'gatsby'

//images
import priceImg from '../../images/MImgs/mango1.png'

//css
import './PriceRow.css'

const slideUpVariant={
  offscreen: {
    opacity: 0,
    y: 75,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
    
  },

  onscreen:{
    opacity: 1,
    y:0,
    transition: {
      duration: .5,
      ease: 'easeInOut',
    }
  }

}

export default function PriceRow() {
  const price = 24.99
  return (
    
    <motion.div  variants = {slideUpVariant} className="price-row-main">
      
      <div className="price-row-image-div">
        <img className="price-row-image" src={priceImg} />
      </div>
      <div className="price-row-pricing">
        <div className="pricing1">
          <div className="numb-packets">21 Packets</div>{' '}
          <div className="box-price">${price}</div>
        </div>
        <div className="pricing2">
          {' '}
          ${parseFloat(price / 21).toFixed(2)} per packet{' '}
        </div>
        <Link style={{textDecoration: 'none'}} to="/products">
          <div className="buy-button" style={{textDecoration: 'none'}}>
            SHOP NOW
          </div>
        </Link>
      </div>
      
    </motion.div>
  
  )
}
