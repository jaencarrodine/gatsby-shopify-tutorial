import React from 'react'
import {Container} from 'semantic-ui-react'
import tubeImg from '../../images/strawbarrycunt.png'
import pregame from '../../images/pregame.png'
import postgame from '../../images/post-game.png'
import planb from '../../images/plan-b.png'
import './LandingPageBlock.css'

function LandingPageBlock(props) {
  function getImg(img) {
    switch (img) {
      case 'pregame':
        return pregame
      case 'postgame':
        return postgame
      case 'planb':
        return planb
      default:
        return pregame
    }
  }

  return (
    <div className={'LPB ' + props.blockNumber}>
      <img className="LPB-image" src={getImg(props.img)} />

      <div className="LPB-text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}
//
export default LandingPageBlock
