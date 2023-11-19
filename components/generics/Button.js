import React from 'react'

const Button = ({type, url, title}) => {

  const getButtonClassName= () => {
    switch(type) {
      case 'yellow':
        return 'yellow-button'
      case 'dark':
        return 'black-button'
      default:
        return 'transparent-button'
    }
  }
  return (
    
    <a className={getButtonClassName()} href="{url}">{title}<i className="fa-regular fa-arrow-up-right"></i></a>

  )
}

export default Button