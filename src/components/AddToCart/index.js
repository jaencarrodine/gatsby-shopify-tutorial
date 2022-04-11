import React, {useState, useContext, useEffect} from 'react'
import {Input, Icon, Transition, Button} from 'semantic-ui-react'
import useStore from "../../context/StoreContext"
//snackbar
import MUIButton from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import MuiAlert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress';

import './AddToCart.css'

import {Link} from 'gatsby'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})


const products = require('../../../lib/products')

const AddToCart = ({product, purchaseType, }) => {
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addVariantToCart, loading } = useStore()
  

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }
 

  

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  //use this to add quantity input -> would also need to add form validation back in
  const handleChange = ({target: {value}}) => setQuantity(value)
  //form validation
  const validate = quantity => {
    let error
    const re = /^[0-9\b]+$/

    if (!quantity) error = "Can't be blank"
    if (!re.test(quantity)) error = 'Please enter an integer for the quantity'

    return error
  }

  const handleSubmit = async () => {
    
    let added = await addVariantToCart(product, quantity)
    setOpen(true)

    try {
      typeof window !== 'undefined' &&
        window.gtag('event', 'add_to_cart', {
          price: product.priceRangeV2.maxVariantPrice.amount ,
          flavor: product.title,
          purchaseType: purchaseType,
        })
    } catch (e) {
      console.log(e)
    }
    
  }



  return (
    <>
      <div className="add-to-cart-button" onClick={handleSubmit}>
        {loading ? 
          <CircularProgress />
        :
        <div>
          Add to cart - $
          {purchaseType === 'onetime' ? product.priceRangeV2.maxVariantPrice.amount : ((parseFloat(product.priceRangeV2.maxVariantPrice.amount))* 0.8).toFixed(2)}
        </div>
        }
      </div>

    
      

      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose} >
        <div>
          <Alert onClose={handleClose} severity="success" sx={{width: '100%', backgroundImage:'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)', color:'black'}}>
            
            <Link to="/cart/"  style = {{textDecoration:'none', color:'black'}}>
            Added to cart!
            <div className="go-to-cart-button">Checkout Now</div>
            </Link>
            
          </Alert>
        </div>
      </Snackbar>
    </>
  )
}

export default AddToCart
