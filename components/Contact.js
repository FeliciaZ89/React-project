import React from 'react'
import ContactBox from './ContactBox'
import { GrLocation } from "react-icons/gr";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md"

const Contact = () => {
    
    const contactTable=[
        { icon:<MdOutlineLocationOn />, title: "Visit us", description:"Sveavägen 31", descriptionextra:"111 34 STOCKHOLM" },
        { icon:<CiPhone />, title: "Call us", description:"+46 (8) 121 470 50", descriptionextra:"+46 (8) 121 470 50 "},
        { icon:<HiOutlineMail />,  title: "Email us", description:"info@crito.com", descriptionextra:"support@crito.com" },

    
    ] 
  return (
    <section className="contactsection">
    <div className="container">
        <div className="box">
        {
               contactTable.map(( contact, index) => (
                    <ContactBox key={index}  icon={contact.icon} title={contact.title} description={contact.description} descriptionextra={contact.description} />
                ))
            }
        </div>
        <div className="hidden1">
            <div className="box1">
                <h3><i className="fa-solid fa-address-book"></i>Contact</h3>
                <h4>Visit us: Sveavägen 31 - 111 34 STOCKHOLM</h4>
                <h4>Call us: +46 (8) 121 470 50</h4>
                <h4>Email us: info@crito.com</h4>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact