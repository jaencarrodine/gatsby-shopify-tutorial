import React from 'react'
import Causes from '../Causes/Causes'

import Stepper from '../Stepper/Stepper'
import HealthIcons from '../HealthIcons/HealthIcons'
import './TheScience.css'

import backgroundImage from '../../images/bg/pb-bg.jpeg'

export default () => {
  return (
    <div className="the-science-main">
      <div className="the-science-header">How it works</div>
      <div className="science-text">
        As you may know.{' '}
        <strong>Hangovers aren't just caused by dehydration.</strong> There are
        several other ways that alcohol directly contributes to hangover
        symptoms:
      </div>
      <br />
      <Causes />
      <br />
      <div className="science-text">
        Bender electrolyte formulas use science-backed supplements to combat
        these contributing factors. There are 3 formulas designed to be taken at
        different times throughout any drinking occasion:
      </div>

      <Stepper />
      <br />
      <div className="science-text">
        All of the formulas can be used individually. But, Bender is the most
        effective when you drink all 3 powders on the same drinking occasion, at
        the appropriate time.
      </div>

     
    </div>
  )
}
