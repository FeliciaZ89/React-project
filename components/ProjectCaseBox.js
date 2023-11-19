import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCaseBox = ({image, imagedetails, title, description,}) => {
  return (
   
    <article>
        <img src={image}  alt={imagedetails}/>
        <h3>{title}</h3>
        <Link to="/more">{description}<i class="fa-regular fa-arrow-up-right"></i></Link>
    </article>

  )
}

export default ProjectCaseBox