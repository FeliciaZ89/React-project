import React from 'react'
import { NavLink } from 'react-router-dom'
import backgrlines from '../../assets/images/background-lines.svg'





const MainTitle = ({menu1,menu2,title,}) => {
  return (
    <section className="connect">
    <img className="background-lines" src={backgrlines} alt="background white lines"/>
    <div className="container">
        <div className="main-menu">
            <nav>
              <NavLink to ="/">{menu1}</NavLink>
              <NavLink type="">{menu2}</NavLink> 
            </nav> 
        </div>  
        <div className="section-title">   
            <h2>{title}</h2>
            </div>
    </div>
</section>
  )
}

export default MainTitle



