import React from 'react'
//components
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
//images
import preGame from '../../images/pregame.png'
import postGame from '../../images/post-game.png'
import planB from '../../images/plan-b.png'

import { motion } from 'framer-motion'

//css
import './Formulas.css'
const items = [
  {
    name: 'Pre-game',
    image: preGame,
    caption:
      'Just like your 9th-grade health teacher used to say - Always use protection. The pre-game formula is your first line of defense against the pain and suffering you have always experienced after a hard night out.',
  },
  {
    name: 'Post-game',
    image: postGame,
    caption:
      'Once the damage has been done, it becomes essential to give your body the fuel it needs to have a restful night and minimize the damages.',
  },
  {
    name: 'Plan-B',
    image: planB,
    caption:
      'After a hard night filled with regret and poor decision-making, you have no option but to resort to Plan-B. No, not that type of plan-B. Our "morning-after" drink will have you feeling 100% in no time, ready to attack the day.',
  },
]



export default function Formulas() {
  return (
    <motion.div className="formulas" >
      <div className="formulas-header">3 Specialized Electrolyte Formulas</div>
      <div className="formulas-subheader">
        Drink one packet when you need it most, or drink Pre-game, Post-Game,
        and Plan-B all on the same night for{' '}
        <strong>maximum hangover protection.</strong>
      </div>
      <Carousel variant="dark" interval={10000}>
        {items.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="formula-content">
                <div className="formula-image-div">
                  <Image
                    className="formula-image"
                    fluid={true}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="formula-caption">{item.caption}</div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </motion.div>
  )
}
