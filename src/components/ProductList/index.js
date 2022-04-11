/* eslint-disable camelcase */
import React from 'react'
import {Card, Image, Container} from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import GetImage from '../GetImage'
import Grid from '@mui/material/Grid'

import './ProductList.css'

import Bimg from '../../images/raspberry-main.jpeg'
import Mimg from '../../images/mango-main.jpeg'
import Oimg from '../../images/orange-main.jpeg'
import Pimg from '../../images/pineapple-main.jpeg'
import Simg from '../../images/strawberry-main.jpeg'
import Wimg from '../../images/watermelon-main.jpeg'

//change these to use sku
const images = {
  'f072d25a-39e6-52b0-99d2-96664069b555':Pimg,
  '1404fd14-5139-5132-8e12-2778fbd54378':Bimg,
  '329a6077-c9cb-505d-b941-39d63cbee7f8':Mimg
}
//redeploy
export default function({products, price, nodes}) {
  const [cardGroup, setCardGroup] = useState()

  useEffect(() => {
    mapProductsToItems(products)
  }, [])

  useEffect(() => {
    mapProductsToItems(products)
  }, [price])
  async function mapProductsToItems(products) {
    const price = await localStorage.getItem('price')
    const soldOut = (await JSON.parse(localStorage.getItem('soldOutMode')))
      ? 'Sold Out'
      : ''
    //console.log(price)
    let items = nodes?.map((product,index) => {
      return (
        <Grid item xs={12} md={4} className="img-grid-item" key = {index}>
          <Link to={`/products/${product.handle}`}>
            <img src={images[product.id]} className="product-list-img" />
            <div className="card-br">
            <div style={{color: 'red',padding:'10px'}}>{soldOut}</div>
              <div className="product-card-price" style={{color: 'white'}}>
                ${product.priceRangeV2.maxVariantPrice.amount}
              </div>
              
            </div>
            
          </Link>
        </Grid>
      )
    })

    setCardGroup(items)
  }

  return (
    <Grid className="product-list" container spacing={0}>
      {cardGroup}
    </Grid>
  )
}

/*<div className="card-br">
              <Card.Meta style={{color: 'dimgray'}}>${price}</Card.Meta>
              <Card.Meta style={{color: 'red', marginLeft: 'auto'}}>
                {soldOut}
              </Card.Meta>
          </div>*/
