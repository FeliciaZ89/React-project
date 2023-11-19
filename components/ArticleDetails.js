import React, { useEffect } from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { useParams } from 'react-router-dom'
import ArticleNews from './ArticleNews'






const ArticleDetails = () => {
    const {article, getArticle, clearArticle }= useArticles()
    const{id} = useParams()

    useEffect(() =>{
        getArticle(id)

        return() => clearArticle()
    }, [])
    
  return (
    <div>
    <section className="articledetails">
        <div className="container">
                <div className="left">
                <div className="articl">
                 {article && article.title ? (
              
                    <div classsName="details">
                         <h3> {article.title}</h3>
                         <p>{article.published} <i className="fa-solid fa-circle"></i> {article.category} <i className="fa-solid fa-circle"></i> {article.author}</p>
                         <img src={article.imageUrl} />
                        <p>{article.description}</p>
                 

                    </div>
               
                  ) : (
                    <div>Laddar...</div>
                     )}
                     </div>

                    < div className="long-text">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>

                    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>

                    <p> Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>    
                        < div className="citat-section">
                        <div className="icon">
                        <i class="fa-sharp fa-solid fa-quote-right"></i>
                        </div>
                        <div className="citat"><p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        </div>
                        </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        
                    </div>

                    <div className="specialbutton">
                        <button className="btn">Digitalization</button>
                        <button className="btn" >School</button>
                        <button className="btn" >IT</button>
                        <button className="btn" >Design</button>
                        <button className="btn">Work</button>
                        <button className="btn">Tech</button>
                    </div>
                </div>

                <div className="right">
                    <form>
                        <input type="text"  placeholder="🔍 Type to search..."  />
                      
                   </form>

                    <div className="recentposts">
                        <h4>Recent posts</h4>
    
                        <h5>How To Blow Through Capital At An Incredible Rate</h5>
                        <p>Jan 14, 2020</p>
                        <hr/>
                        <h5>Design Studios That Everyone Should Know About?</h5>
                        <p>Jan 14, 2020</p>
                        <hr/>
                        <h5>How did we get 1M+ visitors in 30 days without anything!</h5>
                        <p>Jan 14, 2020</p>
                        <hr/>
                         <h5>Figma On Figma: How We Build Our Website Design System</h5>
                         <p>Jan 14, 2020</p>
                    </div>
                    <div className="categories"> 
                        <h4>Categories</h4>
                        <div className="Flex">
                            <div className="subtitles">
                             <h5>Technology</h5>
                             <h5>Freelancig</h5>
                             <h5>Writting</h5>
                             <h5>Marketing</h5>
                             <h5>Bussines</h5>
                             <h5>Education</h5>
                            </div>
                            <div className='paragraph'>
                                <h5>- 20 Posts</h5>
                                <h5>- 07 Posts</h5>
                                <h5>- 16 Posts</h5>
                                <h5>- 11 Posts</h5>
                                <h5>- 35 Posts</h5>
                                <h5>- 14 Posts</h5>
                            </div>
                        </div>
                    </div> 
                </div> 
               
       
        </div>
            

       
    </section>
     <ArticleNews />
     </div>
  )
}

export default ArticleDetails