import React from 'react'

//css
import './Review.css'

//images
import fullStar from '../../images/star.png'
import halfStar from '../../images/half-star.png'
import emptyStar from '../../images/empty-star.png'

export default function Review({name, rating, header, body, version}) {
  const productPageStyle = {
    width: '100%',
    marginTop: '5px',
    marginBottom: '5px',
  }
  return (
    <div
      className="review-container"
      style={version === 'product-page' ? productPageStyle : {}}
    >
      <div className="review-name">{name}</div>
      <div className="review-rating">
        {rating.map(star => {
          if (star === 1) {
            return <img className="star-icon-small" src={fullStar} alt="star" />
          } else if (star === 0.5) {
            return <img className="star-icon-small" src={halfStar} alt="star" />
          } else if (star === 0) {
            return (
              <img className="star-icon-small" src={emptyStar} alt="star" />
            )
          }
        })}
      </div>
      <div className="review-header">{header}</div>
      <div className="review-body">{body}</div>
    </div>
  )
}
