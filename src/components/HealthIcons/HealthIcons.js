import React from 'react'
import nonGMO from '../../images/non-gmo.png'
import vegan from '../../images/vegan.png'
import glutenFree from '../../images/gluten-free.png'
import {Image} from 'semantic-ui-react'
import './HealthIcons.css'


export default function HealthIcons(){
    return (
        <div className = 'health-icons'>
        <div className = 'health-icon'>
            <img src = {nonGMO} alt = 'non-gmo' className = 'health-icon-img'/>
            <div className = 'hi-title'>Non-GMO</div>
        </div>
        <div className = 'health-icon'>
            <img src = {vegan} alt = 'vegan' className = 'health-icon-img'/>
            <div className = 'hi-title'>Vegan</div>
        </div>
        <div className = 'health-icon'>
            <img src = {glutenFree} alt = 'gluten-free' className = 'health-icon-img'/>
            <div className = 'hi-title'>Gluten-Free</div>
        </div>
        </div>

    )
}