import React from 'react'
import E16 from '../../images/1-6v4.png'
import {Image} from 'semantic-ui-react'
import {Link} from 'gatsby'
import instructions from '../../images/instructionsv2.png'
import './MoreInfo.css'
import {height} from '@material-ui/core/node_modules/@material-ui/system'

export default function MoreInfo({price}) {
  //update to access randomly generated price

  return (
    <div className="more-info">
      <div className="pricing">
        <div className="pricing1">
          <div className="numb-packets">21 Packets</div>{' '}
          <div className="box-price">${price}</div>
        </div>
        <div className="pricing2">
          {' '}
          ${parseFloat(price / 7).toFixed(2)} per hangover prevented{' '}
        </div>
        <Link to="/products">
          <div className="buy-button">BUY NOW</div>
        </Link>
      </div>
      <div className="sep"></div>
      <div className="instructions">
        <Image src={instructions} size="small" />
      </div>
      <div className="sep"></div>
      <div className="comparison">
        <Image src={E16} size="medium" />
      </div>
    </div>
  )
}
