import React from 'react'
import { VerticalCardStyle } from './Card.style'

function VerticalCard(props) {
  const { icon, label, count } = props
  return (
    <VerticalCardStyle>

      <figcaption className="user-details">
        <span className="user-image">
          <img src={icon} alt="image" /></span>
        <article>
          <h1 className="heading">{label}</h1>
          <p className="sub-heading">{count}</p>
        </article>
      </figcaption>

    </VerticalCardStyle>
  )
}

export default VerticalCard
