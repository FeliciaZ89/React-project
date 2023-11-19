import React from 'react'

const ContactBox = ({icon,title, description, descriptionextra}) => {
  return (
    <div className="box1">
                <i>{icon}</i>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{descriptionextra}</p>
            </div>
  )
}

export default ContactBox