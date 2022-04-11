import React, { createContext, useState, useEffect, useContext } from "react"
import fetch from "isomorphic-fetch"
import Client from "shopify-buy"

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
)

const defaultValues = {
  cart: [],
  loading: false,
  addVariantToCart: () => { },
  removeLineItem: () => { },
  client,
  checkout: {
    id: "",
    lineItems: [],
    webUrl: ""
  },
}

const StoreContext = createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultValues.cart)
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [loading, setLoading] = useState(false)

  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id)
    }

    setCheckout(checkout)
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null
      const storedCart = JSON.parse(localStorage.getItem('cart'))
      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          )
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            
            if(storedCart !== null){
              setCart(storedCart)
            }
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null)
        }
      }
      console.log('creating new checkout')
      
      let newCheckout = await client.checkout.create()
      
      if(storedCart !== null){
        for(const cartItem of storedCart){
          const checkoutID = newCheckout.id
          const variantId = cartItem.product.variants[0]?.shopifyId
          const parsedQuantity = parseInt(cartItem.quantity, 10)

          const lineItemsToUpdate = [
            {
              variantId,
              quantity: parsedQuantity,
            },
          ]
          newCheckout = await client.checkout.addLineItems(checkoutID, lineItemsToUpdate)
        }
        setCart(storedCart)
      }
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addVariantToCart = async (product, quantity) => {
    setLoading(true)

    if (checkout.id === "") {
      console.error("No checkout ID assigned.")
      return
    }

    const checkoutID = checkout.id
    const variantId = product.variants[0]?.shopifyId
    const parsedQuantity = parseInt(quantity, 10)

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parsedQuantity,
      },
    ]

    try {
      const res = await client.checkout.addLineItems(checkoutID, lineItemsToUpdate)
      setCheckout(res)

      let updatedCart = []
      if (cart.length > 0) {
        const itemIsInCart = cart.find((item) => item.product.variants[0]?.shopifyId === variantId)

        if (itemIsInCart) {
          const newProduct = {
            product: { ...itemIsInCart.product },
            quantity: (itemIsInCart.quantity + parsedQuantity)

          }
          const otherItems = cart.filter((item) => item.product.variants[0]?.shopifyId !== variantId)
          updatedCart = [...otherItems, newProduct]
        } else {
          updatedCart = cart.concat([{ product, quantity: parsedQuantity }])
        }
      } else {
        updatedCart = [{ product, quantity: parsedQuantity }]
      }
      setCart(updatedCart)
      localStorage.setItem('cart',JSON.stringify(updatedCart))
      setLoading(false)
      console.log('stopped loading')
    } catch (error) {
      setLoading(false)
      console.error(`Error in addVariantToCart: ${error}`)
    }
  }

  const removeLineItem = async (title) => {
    setLoading(true)
    console.log('loading')
    console.log("removing,", title)
    try {
      if (checkout.lineItems.length < 1) throw new Error("Cart is empty")
      
      let lineItemID = ''
      
      checkout.lineItems?.forEach((item) => {
        console.log(item.title,title)
        if (item.title === title) {
          lineItemID = item.id
        }
      })

      if (!lineItemID) {
        console.log('Product not in cart')
        return
      }

      const res = await client.checkout.removeLineItems(checkout.id, [lineItemID])
      setCheckout(res)

      const updatedCart = cart.filter((item) => item.product.title !== title)
      setCart(updatedCart)
      localStorage.setItem('cart',JSON.stringify(updatedCart))
      setLoading(false)
      console.log('stopped loading')
    } catch (error) {
      setLoading(false)
      console.error(`Error in removeLineItem: ${error}`)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        removeLineItem,
        cart,
        checkout,
        loading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

const useStore = () => {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error("useStore must be used within StoreContext")
  }

  return context
}

export default useStore
