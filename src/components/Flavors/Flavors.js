import React from 'react'
//components
import {Link} from 'gatsby'
import Grid from '@mui/material/Grid'
//css
import './Flavors.css'
//images
import Bimg from '../../images/raspberry-main.jpeg'
import Mimg from '../../images/mango-main.jpeg'
import Oimg from '../../images/orange-main.jpeg'
import Pimg from '../../images/pineapple-main.jpeg'
import Simg from '../../images/strawberry-main.jpeg'
import Wimg from '../../images/watermelon-main.jpeg'

export default function Flavors() {
  return (
    <div className="flavors-main">
      <div className="flavors-center-text">
        <div className="fct-1">Available In 3</div>
        <div className="fct-1">Mouthwatering Flavors</div>
        <Link style={{textDecoration: 'none'}} to="/products">
          <div className="buy-button">SHOP NOW</div>
        </Link>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} className="img-grid">
          <img className="flavors-img" src={Bimg} />
        </Grid>

        <Grid item xs={12} lg={4} className="img-grid">
          <img className="flavors-img" src={Mimg} />
        </Grid>
     
        <Grid item xs={12} lg={4} className="img-grid">
          <img className="flavors-img" src={Pimg} />
        </Grid>
      
      </Grid>

      <div className="img-row"></div>
    </div>
  )
}
