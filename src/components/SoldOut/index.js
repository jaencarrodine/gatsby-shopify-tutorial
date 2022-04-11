


import React from 'react'
import {useState} from 'react'

import Backdrop from '@mui/material/Backdrop'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

import './SoldOut.css'
const products = require('../../../lib/products')
const axios = require('axios')


export default function SoldOut(props) {
  const [emailAddress, setEmailAddress] = useState('')
  const [emailCollected, setEmailCollected] = useState(false)

  const close = () => {
    props.setSoldOutActive(false)
  }
  const handleChange = e => {
    e.preventDefault()
    setEmailAddress(e.target.value)
  }
  const onSubmitEmail = async () => {
    axios
      .post('https://letrolytes-backend.herokuapp.com/sendgrid/add-contact', {
        email: emailAddress,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    setEmailCollected(true)
    const cartContents = await JSON.parse(localStorage.getItem('cartContents'))
    const productType = 'A'
    const price = await localStorage.getItem('price')

    let flavors = getFlavors(cartContents)

    try {
      typeof window !== 'undefined' &&
        window.gtag('event', 'email_collection', {
          price: price,
          productType: productType,
          flavors: flavors,
        })
    } catch (e) {
      console.log(e)
    }
  }

  const getFlavors = cartContents => {
    let flavors = []
    Object.keys(cartContents).forEach(product => {
      let pid = product.replace('item_', '')
      let productObj = products.productList[pid]
      flavors.push(productObj.flavor)
    })
    console.log(flavors)
    return flavors
  }

  return (
    <div>
      {props.open && (
        <Backdrop open={props.open} className="SO-card">
          <Card className="SO-card">
            <div className="SO">
              <div className="SO-button">
                <IconButton
                  aria-label="delete"
                  className="SO-close"
                  alignSelf="right"
                >
                  <CloseIcon onClick={close} />
                </IconButton>
              </div>
              {emailCollected ? (
                <div className="SO-collected">
                  {' '}
                  Thanks! We will be in touch soon!{' '}
                </div>
              ) : (
                <div className="SO-collect">
                  <div className="SO-header">
                    Whoops! Looks like we're sold out.
                  </div>
                  <div className="SO-subheader">
                    Enter your email address below and we'll let you know when
                    we're back in stock.
                  </div>
                  <div className="SO-email">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={handleChange}
                      mr="5px"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onSubmitEmail}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Backdrop>
      )}
    </div>
  )
}
