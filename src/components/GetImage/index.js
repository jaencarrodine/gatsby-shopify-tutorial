import React from 'react'
import defaultImage from '../../images/ultima-electrolyte-powder.jpg'
import pineapple from '../../images/pineapple-main.jpeg'
import orange from '../../images/orange-main.jpeg'
import strawberry from '../../images/strawberry-main.jpeg'
import berry from '../../images/raspberry-main.jpeg'
import watermelon from '../../images/watermelon-main.jpeg'
import mango from '../../images/mango-main.jpeg'
import info from '../../images/infographic.png'
import {Image} from 'semantic-ui-react'

const GetImage = props => {
  const images = [pineapple, orange, strawberry, berry, watermelon, mango]

  return (
    <Image
      src={images[props.id]}
      size={props.size}
      style={{background: '#f2f2f2'}}
      centered
    />
  )
}

export default GetImage
