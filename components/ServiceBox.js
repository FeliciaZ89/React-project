import React from 'react'

const ServiceBox = ({title, description,url}) => {
  return (
    <div className="selection">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="round-btn">
       <a className="black-button" href={url}><i className="fa-light fa-arrow-right"></i></a>  
    </div>
    </div>
  )
}

export default ServiceBox