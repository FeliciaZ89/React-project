import React from 'react'
import SectionTitle from './generics/SectionTitle'
import icon1img from '../assets/images/icon1.svg'
import icon2img from '../assets/images/icon2.svg'
import icon3img from '../assets/images/icon3.svg'
import icon4img from '../assets/images/icon4.svg'
import picture from '../assets/images/position img.png'
import ChooseusBox from './ChooseusBox'

const ChooseUs = () => {

    const usTable=[
        { image:icon1img, title: "Process Excellence", description:"Lorem, ipsum dolor sit amet consectetur." },
        { image:icon2img, title: "Strategic Planning", description:"Lorem, ipsum dolor sit amet consectetur."},
        { image:icon3img,  title: "Experience Design", description:"Lorem, ipsum dolor sit amet consectetur."},
        { image:icon4img,  title: "Artificial Inteligence", description:"Lorem, ipsum dolor sit amet consectetur."}
    
    ]   



  return (
<section className="choose-us">
    <div className="container">
        <div className="left-side">
            <div className="section-title">
                <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
            </div>

           <div className="columnus">
            {
                usTable.map(( us, index) => (
                    <ChooseusBox key={index}  image={us.image}  title={us.title} description={us.description} />
                ))
            }
           </div>
        </div>
        <div className="right-side"></div>
        <img className="position-picture" src={picture} alt="two women talking at a desk"/>      
         
    </div>
</section>
  )
}

export default ChooseUs