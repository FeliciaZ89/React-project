import React from 'react'

const ReviewBox = ({image,title,description}) => {
  return (
    <>
    <div className="photo1">
    <img src={image}  alt={title}/>
</div>
<div className="text">
    <h4>{title}</h4>
    <p>{description}</p>
</div>
</>
  )
}

export default ReviewBox