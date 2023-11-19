import React from 'react'

import img_backgoundlines from '../assets/images/background-lines.svg'
import img_showcaseman from'../assets/images/showcase-image.svg'
import Button from './generics/Button'

const Showcase = () => {
  return (
    <section className="showcase">
       <img className="background-lines" src={img_backgoundlines} alt="background white lines" />

    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
           <Button type="yellow" url="consulting.html" title="Get consulting"/>
           <Button type="" url="moreinfo.html" title="Learn more"/>
        </div>
            <img src={img_showcaseman} alt="man in a black suit holding a tablet"/>
    </div>
 </section> 
  )
}

export default Showcase