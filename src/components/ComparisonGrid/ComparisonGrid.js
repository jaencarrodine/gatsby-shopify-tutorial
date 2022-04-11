import React from 'react'

//css
import './ComparisonGrid.css'

//images
import bgImg from '../../images/bg/bp.jpeg'
import checked from '../../images/checked.png'
import exed from '../../images/xd.png'

export default function ComparisonGrid() {
  return (
    <div className="CG-main" >
      <div className="CG-header">What makes Bender so special?</div>
      <div className="table-headers">
        <div className="table-head-spacer" />
        <div className="table-head">550mg+ Electrolytes per serving</div>
        <div className="table-head">Supports REM sleep</div>
        <div className="table-head">Prevents nausea</div>
        <div className="table-head">Supports Alcohol metabolism</div>
      </div>
      <div className="table-container">
        <div className="table-body">
          <div className="table-row highlight">
            <div className="table-cell-main">Bender</div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell-main">Liquid IV</div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell-main">Pedialyte</div>
            <div className="table-cell">
              <img className="table-icon" src={checked} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell-main">Gatorade</div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
            <div className="table-cell">
              <img className="table-icon" src={exed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
