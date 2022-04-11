import React from 'react'
import {useState, useEffect} from 'react'

import defaultImg from '../../images/ultima-electrolyte-powder.jpg'
import {Item, Label} from 'semantic-ui-react'
import GetImage from '../GetImage'
import GetProductImages from '../GetProductImages/GetProductImages'
import {Header, List} from 'semantic-ui-react'
import AddToCart from '../AddToCart'
import useWindowSize from '../useWindowSize/useWindowSize'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

//custom bgs
import p from '../../images/bg/pineapple-gradient.jpeg'
import o from '../../images/bg/download.jpeg'
import s from '../../images/bg/strawberry-lemonade-gradient.jpeg'
import b from '../../images/bg/br.jpeg'
import w from '../../images/bg/watermelon-gradient.jpeg'
import m from '../../images/bg/mango-gradient.jpeg'

//images
import fullStar from '../../images/star.png'
import halfStar from '../../images/half-star.png'
import emptyStar from '../../images/empty-star.png'

//css
import './ProductSummary.css'

export default function ProductSummary({product}) {
 

  const customBackgrounds= {
    'f072d25a-39e6-52b0-99d2-96664069b555':p,
    '1404fd14-5139-5132-8e12-2778fbd54378':b,
    '329a6077-c9cb-505d-b941-39d63cbee7f8':m
  }


    

 

  const [value, setValue] = React.useState('onetime')
  const [subFrequency, setSubFrequency] = React.useState(30)
  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleFrequencyChange = event => {

    setSubFrequency(event.target.value)
  }
  const windowSize = useWindowSize()
  const rating = [1, 1, 1, 1, 0.5]
  return (
    <div className="product-summary">
      <div
        className="product-summary-image"
        style={{backgroundImage: `url(${customBackgrounds[product.id]})`}}
      >
        {windowSize.width <= 600 && (
          <GetProductImages id={product.id} size={'big'} />
        )}

        {windowSize.width > 600 && (
          <GetProductImages id={product.id} size={'big'} />
        )}
      </div>

      <div className="product-summary-info">
        <div className="product-summary-title">
          <div className="pst-header">{product.title}</div>

          <div className="pst-subheader">
            <i>Electrolyte powder</i> formulated to prevent hangovers.
          </div>
          <div className="pst-subheader">
            Backed by our 30-Day Hangover-Free Guarantee.
          </div>
        </div>
        <div className="product-summary-rating">
          {rating.map(star => {
            if (star === 1) {
              return (
                <img className="star-icon-small" src={fullStar} alt="star" />
              )
            } else if (star === 0.5) {
              return (
                <img className="star-icon-small" src={halfStar} alt="star" />
              )
            } else if (star === 0) {
              return (
                <img className="star-icon-small" src={emptyStar} alt="star" />
              )
            }
          })}

          <div className="rev">63 Reviews</div>
        </div>

        <div className="product-summary-purchase-frequency">
          <div className="pspf-cf">
            <div className="pspf-cf-title">Choose from</div>
            <div className="pspf-cf-radio">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="onetime"
                    control={<Radio />}
                    label={`One-time purchase - $${product.priceRangeV2.maxVariantPrice.amount}`}
                  />
                  <FormControlLabel
                    value="subscribe"
                    control={<Radio />}
                    label={`Subscribe & save - $${(parseFloat(product.priceRangeV2.maxVariantPrice.amount) * 0.8).toFixed(
                      2,
                    )} (20%)`}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {value === 'subscribe' && (
              <div className="pspf-cf-frequency-select">
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subFrequency}
                    label="Age"
                    onChange={handleFrequencyChange}
                  >
                    <MenuItem value={30}>
                      <strong>Frequency:</strong> every 30 days
                    </MenuItem>
                    <MenuItem value={60}>
                      <strong>Frequency:</strong> every 60 days
                    </MenuItem>
                    <MenuItem value={90}>
                      <strong>Frequency:</strong> every 90 days
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
        </div>
        <div className="free-shipping">Free Shipping!</div>
        <AddToCart product = {product} purchaseType={value}  />
      </div>
    </div>
  )
}

/*

<Item.Group>
      

      <Item style={{alignItems: 'center'}}>
        
        <Item.Content>
          <Item.Header> {name}</Item.Header>
          <Item.Description>
            <p> {`$${price}`}</p>
          </Item.Description>
          <Item.Description>
            <p style={{color: 'silver'}}>Free Shipping!</p>
          </Item.Description>
          <Item.Extra>
            <AddToCart productId={id} />
          </Item.Extra>

          <div className="sep"></div>
          <Item.Description>
            <p>
              Bender is the world’s first and only fully comprehensive hangover
              solution of its kind.  Through rigorous human testing we have
              developed a system which can make your worst hangover feel like a
              walk in the park.  Our method involves a pre-game, post-game, and
              morning-after beverage to ensure that your body receives the
              hydration and supplementation you need to function like a
              well-oiled machine from your first drink to your last.  With
              proprietary ingredients which address the body’s changing needs
              throughout the night, Bender will help you start your night on
              your A-game, end your night with productive sleep, and wake up
              ready for the next Bender.
            </p>
          </Item.Description>
          <div className="sep"></div>
          <Item.Description>
            <Header as="h2">Whats in the box?</Header>
            <List bulleted>
              <List.Item>7 packets of Bender Pregame</List.Item>
              <List.Item>7 packets of Bender Postgame</List.Item>
              <List.Item>7 packets of Bender Plan B</List.Item>
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

  */
