import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import {Image} from 'semantic-ui-react'
import Box from '@mui/material/Box'

import Carousel from 'react-bootstrap/Carousel'

import useWindowSize from '../useWindowSize/useWindowSize'

//pineapple
import p1 from '../../images/PImgs/pineapple1.png'
import p2 from '../../images/PImgs/pineapple2.png'
import p3 from '../../images/PImgs/pineapple3.png'
import p4 from '../../images/PImgs/pineapple4.png'
import p5 from '../../images/PImgs/pineapplesticker1.png'
import p6 from '../../images/PImgs/pineapplesticker2.png'
import p7 from '../../images/PImgs/pineapplesticker3.png'
import p8 from '../../images/PImgs/backpineapplesticker1.png'

//orange

import o1 from '../../images/OImgs/orange1.png'
import o2 from '../../images/OImgs/orange2.png'
import o3 from '../../images/OImgs/orange3.png'
import o4 from '../../images/OImgs/orange4.png'
import o5 from '../../images/OImgs/orangesticker1.png'
import o6 from '../../images/OImgs/orangesticker2.png'
import o7 from '../../images/OImgs/orangesticker3.png'
import o8 from '../../images/OImgs/backorangesticker1.png'

//blue raspberry

import b1 from '../../images/BImgs/rasberry1.png'
import b2 from '../../images/BImgs/rasberry2.png'
import b3 from '../../images/BImgs/rasberry3.png'
import b4 from '../../images/BImgs/rasberry4.png'
import b5 from '../../images/BImgs/blue rasberrysticker1.png'
import b6 from '../../images/BImgs/blue rasberrysticker2.png'
import b7 from '../../images/BImgs/blue rasberrysticker3.png'
import b8 from '../../images/BImgs/backwarasberrysticker1.png'

//mango
import m1 from '../../images/MImgs/mango1.png'
import m2 from '../../images/MImgs/mango2.png'
import m3 from '../../images/MImgs/mango3.png'
import m4 from '../../images/MImgs/mango4.png'
import m5 from '../../images/MImgs/mangosticker1.png'
import m6 from '../../images/MImgs/mangosticker2.png'
import m7 from '../../images/MImgs/mangosticker3.png'
import m8 from '../../images/MImgs/backmangosticker1.png'

//strawberry

import s1 from '../../images/SImgs/strawberry1.png'
import s2 from '../../images/SImgs/strawberry2.png'
import s3 from '../../images/SImgs/strawberry3.png'
import s4 from '../../images/SImgs/strawberry4.png'
import s5 from '../../images/SImgs/strawberrysticker1.png'
import s6 from '../../images/SImgs/strawberrysticker2.png'
import s7 from '../../images/SImgs/strawberrysticker3.png'
import s8 from '../../images/SImgs/backstrawberrysticker1.png'

//Watermelon

import w1 from '../../images/WImgs/watermelon1.png'
import w2 from '../../images/WImgs/watermelon2.png'
import w3 from '../../images/WImgs/watermelon3.png'
import w4 from '../../images/WImgs/watermelon4.png'
import w5 from '../../images/WImgs/watermelonsticker1.png'
import w6 from '../../images/WImgs/watermelonsticker2.png'
import w7 from '../../images/WImgs/watermelonsticker3.png'
import w8 from '../../images/WImgs/backwatermelonsticker1.png'

/*const images = {
  '0': [p1, p2, p3, p4],
  '1': [o1, o2, o3, o4],
  '2': [s1, s2, s3, s4],
  '3': [b1, b2, b3, b4],
  '4': [w1, w2, w3, w4],
  '5': [m1, m2, m3, m4],
}*/

const images = {
  'f072d25a-39e6-52b0-99d2-96664069b555':[p1, p2, p3, p4],
  '1404fd14-5139-5132-8e12-2778fbd54378':[b1, b2, b3, b4],
  '329a6077-c9cb-505d-b941-39d63cbee7f8':[m1, m2, m3, m4]
}

export default function QuiltedImageList({id, size}) {
  const windowSize = useWindowSize()
  const itemData = images[id]

  return (
    <Carousel variant="dark" interval={10000} style={{height: '100%'}}>
      {itemData?.map((item, index) => {
        return (
          <Carousel.Item key={index} className="cslide">
            <div className="carousel-img-wrap">
              <Image
                className="formula-image"
                fluid={true}
                src={item}
                size={size}
              />
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
