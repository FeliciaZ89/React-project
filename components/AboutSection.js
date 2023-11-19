import React from 'react'
import SectionTitle from './generics/SectionTitle'
import aboutimg from '../assets/images/aboutus.png'
import quoteimg from '../assets/images/Quotes.png'
import linesimg from '../assets/images/EWlement.svg'
import Button from './generics/Button'

const AboutSection = () => {
  return (
    <section className="about">
    <div className="about-company">
        <div className="container">
            <div className="image">
                <img src={aboutimg}  alt="woman walking with a folder in her hands"/>
                <img  className="quote" src={quoteimg} alt="quote text:Lorem ipsum dolor sit amet consectetur adipisicing elit.Samantha Brown, Founder"/>
                <img className="lines" src={linesimg} alt=""/>
            </div>
            <div className="right-text">
              <div className="section-title">
            <SectionTitle title="About us" description="We Are Business Consulting & Credit Repair Experts"/>
              </div>
              <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
              </div>
              <div className="button">
              < Button type="dark" url="more.html" title="Learn more "/>
              <div className="round">
              <a className="transparent-button" href="more.html"><i className="fa-sharp fa-solid fa-play"></i></a>  
              <p className="intro">Intro video</p>
              </div>
              </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default AboutSection