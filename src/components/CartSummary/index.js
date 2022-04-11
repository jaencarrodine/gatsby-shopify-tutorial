import React from 'react'
import {Button, Segment, Divider} from 'semantic-ui-react'
import './CartSummary.css'

export default ({handleCheckout, checkout}) => (
  <div>
   
    
    <div className = 'checkout-row'>
      <div className = 'subtotal'>
        <strong>Sub total:     </strong><span style = {{marginLeft:'10px'}}>${checkout.paymentDue}</span>
      </div>

      {checkout.paymentDue === "0.00"? 
        <div className ='checkout-button-disabled'>
         Check Out
       </div>
      :
      <div className ='checkout-button' onClick={handleCheckout}>
        Check Out
      </div>
      }
    </div>
  </div>
)
