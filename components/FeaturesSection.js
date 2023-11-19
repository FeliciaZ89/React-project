import React from 'react'
import Button from './generics/Button'
import SectionTitle from './generics/SectionTitle'
import FeaturesBoxes from './FeaturesBoxes'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaRegHandshake} from 'react-icons/fa6'
import { TbChartInfographic } from "react-icons/tb";
import { GoGear } from "react-icons/go";


const FeaturesSection = () => {

const featuresTable=[
        { icon: <FaRegHandshake/>, title: "Business advice", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit" },
        { icon:<HiOutlineLightBulb/>, title: "Startup bussines", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
        { icon:<TbChartInfographic/>, title: "Financial advice", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
        { icon:<GoGear/>, title: "Risk management", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit"}
    
    ]   
    
  return (
    <section className="features">
    <div className="container">

        <div className="section-title">
        <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies "/>
         <Button type="yellow" url="/moreinfo.html" title="Learn more"/>
           </div> 
        <div className="features-table">  
            {
                featuresTable.map(( feature, index) => (
                    <FeaturesBoxes key={index}  icon ={feature.icon} title={feature.title} description={feature.description} />
                ))
            }
        </div>
    </div>
 </section>
  )
}

export default FeaturesSection