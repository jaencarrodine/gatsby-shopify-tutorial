import React from 'react'

//components
import Review from '../Review/Review'

//css
import './Testimonials.css'

//images
import star from '../../images/star.png'
import halfStar from '../../images/half-star.png'

const reviews = [
  {
    name: 'Stephany A.',
    rating: [1, 1, 1, 1, 1],
    header: 'Total game changer',
    body:
      'This product is extremely effective and a total game changer. It truly works for me time and time again after a long night of one to many cocktails. It tastes pretty good, love the packaging and the process for purchasing/delivery is always seamless. Impressive and highly recommended!',
  },
  {
    name: 'Max K.',
    rating: [1, 1, 1, 1, 1],
    header: 'Works Great!',
    body:
      'I purchased this because we were going out of town for a weekend birthday celebration trip for a friend. I normally get pretty bad hangovers that keep me in bed all day. I took one at the end of the night after drinking all day, when I woke up that Saturday morning it was like I didn’t have a single drink of alcohol.',
  },
  {
    name: 'Kevin B.',
    rating: [1, 1, 1, 1, .5],
    header: 'It really works',
    body: `Haven't had a hangover since I started using Bender. Wake up, no headaches, ready for my day! Plus it tastes great`,
  },
]

export default function Testimonials({version}) {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        {version === 'landing-page' ? 'We Have Fans' : ''}
      </div>
      <div className="testimonials-stars">
        <div className="testimonials-score">4.6</div>
        <div className="testimonials-star-container">
          <img className="star-icon" src={star} alt="star" />
          <img className="star-icon" src={star} alt="star" />
          <img className="star-icon" src={star} alt="star" />
          <img className="star-icon" src={star} alt="star" />
          <img className="star-icon" src={halfStar} alt="star" />
        </div>

        <div className="testimonials-star-text">Average Customer Rating</div>
      </div>
      <div
        className={
          version === 'landing-page'
            ? 'testimonials-reviews'
            : 'pp-testimonials-reviews'
        }
      >
        {reviews.map(review => (
          <Review
            version={version}
            name={review.name}
            rating={review.rating}
            header={review.header}
            body={review.body}
          />
        ))}
      </div>
    </div>
  )
}
