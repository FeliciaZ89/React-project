import React from 'react'

const FeaturesBoxes = ({icon, title, description}) => {
  return (
    <div className="columns">
    <i>{icon}</i>
    <h3>{title}</h3>
    <p>{description}</p>
</div>
  )
}

export default FeaturesBoxes