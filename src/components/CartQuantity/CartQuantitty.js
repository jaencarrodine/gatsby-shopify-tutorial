import React from 'react'
import {useState} from 'react'
import deleteIcon from '../../images/delete-icon.png'
import useStore from '../../context/StoreContext'

import './CartQuantity.css'

export default function CartQuantity({ quantity, product }){
    let [cartQuantity, setCartQuantity] = useState(quantity)
    const { checkout, removeLineItem, addVariantToCart } = useStore()

    function incrementUp(){
        console.log('incrementUp')
        addVariantToCart(product, 1)
    }

    function decrementDown(){
        console.log('decrementDown')
        if(cartQuantity > 1){
            addVariantToCart(product, -1)
        }else if(cartQuantity === 1){
            removeLineItem(product.title)
        }
    
    }

    


   
    return (
        <div className = "cq-container">
            <div className = 'cart-quantity'>
                <div className = 'cq-minus' onClick = {decrementDown}>
                    -
                </div>
                <div className = 'cq-current'>{cartQuantity}</div>
                <div className = 'cq-plus' onClick = {incrementUp}>
                    +
                </div>
                

            </div>
                <div className = 'cq-remove' >
                    <img src = {deleteIcon} alt = 'delete' className = 'rm-icon' onClick = {()=> removeLineItem(product.title)}/>
                </div>
        </div>
    )
}