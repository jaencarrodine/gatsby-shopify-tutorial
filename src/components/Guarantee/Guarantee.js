import React from 'react'
import { motion } from 'framer-motion'
//images
import moneyBackGuarantee from '../../images/money-back-guarantee.png'

//css
import './Guarantee.css'
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
export default function Guarantee() {
  return (
    <motion.div variants = {slideUpVariant} className="guarantee-main">
      <div className="guarantee-header">Meet the Hangover-Free Guarantee</div>
      <div className="guarantee-text">
        Let's be honest, most hangover products promise the same thing. But
        rarely do brands actually give you your money back if it doesn't work
        for you. That's our <strong>Hangover Free Guarantee.</strong>
      </div>
      <div className="guarantee-icon-section">
        <div className="guarantee-icon-text">30-Day Guarantee</div>
        <img className="guarantee-icon" src={moneyBackGuarantee} />
      </div>
    </motion.div>
  )
}
