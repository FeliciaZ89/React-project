import React from 'react'
import ServiceBox from './ServiceBox';
import backgroundlines from '../assets/images/background-lines-right.svg';
import SectionTitle from './generics/SectionTitle';
import Button from './generics/Button';


const OurServices = () => {
  return (
    <section className="our-services ">
        <div className="overlines">
            <img src={backgroundlines} alt="lines" />
        </div> 
        
    <div className="container">
    <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
            
             <div className="services">
                <ServiceBox title="Bussines advice" description ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/bussinesadvice"/>
                <ServiceBox title="Startup Bussines" description ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbussines"/>
                <ServiceBox title="Financial Advice" description ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvices"/>
                <ServiceBox title="Risk management" description ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement"/>
            </div>
            <div className="center-button">
                <Button type= "" url="ourservices.html" title="Browse services"/>
            </div>
    </div>
 </section>
  )
}

export default OurServices