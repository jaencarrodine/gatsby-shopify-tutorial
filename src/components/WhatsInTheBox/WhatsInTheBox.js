import React from 'react'

import './WhatsInTheBox.css'

import backgroundImage from '../../images/bg/op-gradient.jpeg'
export default function WhatsInTheBox({packetImages}) {
  return (
    <div
      className="witb-main"
      style={{backgroundImage: `linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)`}}
    >
      <div className="witb-header">What's in the box?</div>

      <div className="witb-body">
        <div className="witb-row">
          <div className="witb-row-text">7</div>
          <div className="witb-row-text">x</div>
          <div className="witb-row-img-div">
            <img className="witb-row-img" src={packetImages[0]}></img>
          </div>
          <div className="witb-row-text-2">For before you drink</div>
        </div>

        <div className="witb-row">
          <div className="witb-row-text">7</div>
          <div className="witb-row-text">x</div>
          <div className="witb-row-img-div">
            <img className="witb-row-img" src={packetImages[1]}></img>
          </div>
          <div className="witb-row-text-2">For after you drink</div>
        </div>

        <div className="witb-row">
          <div className="witb-row-text">7</div>
          <div className="witb-row-text">x</div>
          <div className="witb-row-img-div">
            <img className="witb-row-img" src={packetImages[2]}></img>
          </div>
          <div className="witb-row-text-2">For the morning after</div>
        </div>
      </div>
    </div>
  )
}
