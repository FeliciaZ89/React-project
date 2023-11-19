import React from 'react'
import { Link } from 'react-router-dom'

const ChooseusBox = ({image,title,description}) => {
  return (
   <>
    <div className="left">
        <img src={image} alt="icon"/>
    </div>
    <div className="left-text">
        <Link to="/chooseus" target="_blank"><h3>{title}</h3></Link>
        <p>{description}</p>
    </div>
    </>
  )
}

export default ChooseusBox