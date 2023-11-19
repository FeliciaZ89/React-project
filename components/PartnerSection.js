import React from 'react'
import paperzlogo from'../assets/images/paperz.svg'
import dorfuslogo from '../assets/images/dorfus.svg'
import martinologo from '../assets/images/martino.svg'
import squarelogo from '../assets/images/square.svg'
import gobonalogo from '../assets/images/gobona.svg'

const PartnerSection = () => {
  return (
    <section className="partners-section">
    <div className="container">
            <div className="partners-logo">
            <img src={paperzlogo} alt="paperz logo"/>
            <img src={dorfuslogo} alt="dorfus logo"/>
            <img src={martinologo} alt="martino logo"/>
            <img src={squarelogo} alt="square logo"/>
            <img src={gobonalogo} alt="gobona logo"/>
            </div>
            <div className="hidden">
            <img src={paperzlogo} alt="paperz logo"/>
            <img src={gobonalogo} alt="gobona logo"/>
            </div>
    </div>
 </section>
  )
}

export default PartnerSection