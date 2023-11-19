import React from 'react'
import image1 from '../assets/images/Image.png'
import image2 from '../assets/images/Image1.png'
import image3 from '../assets/images/Image2.png'
import image4 from '../assets/images/Image3.png'
import Button from './generics/Button'
import SectionTitle from './generics/SectionTitle'
import ProjectCaseBox from './ProjectCaseBox'

const ProjectCaseStudies = () => {
    const projectTable=[
        { image:image1, imagedetails:"hands on a business magazine" ,title: "Grow your business", description:"Read more"},
        { image:image2,imagedetails:"" ,title: "Why your client needs a responsive website", description:"Read more"},
        { image:image3,imagedetails:"", title: "Educate your employees to get better results", description:"Read more"},
        { image:image4,imagedetails:"", title: "Business Insights is a important piece of your business", description:"Read more"}
    
    ]   
  return (
    <section className="project-and-case-studies">
    <div className="container">
        <div className="section-title">
            <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects"/>
        </div>
        <div className="project-and-cases">
        {
                projectTable.map(( project, index) => (
                    <ProjectCaseBox key={index} image={project.image} alt={project.imagedetails} title={project.title} description={project.description} />
                ))
            }
            </div>
        <div className="center-button">
        <Button type="dark" title="All recent projects"/>
        </div>
    </div>
 </section>
  )
}

export default ProjectCaseStudies