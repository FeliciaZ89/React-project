import React from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { Link } from 'react-router-dom'

const NewsandArticles = () => {
  const { articles }=useArticles()
  return (
    <section className="news">
    <div className="container">
        <div className="main-title">
           <div className="section-title">
             <h2>Get every single article & news</h2>
            </div>
            
           
          </div> 
          <div className="articles">
          { articles.map(article =>(
              <article className="article" key={article.id}>
              <img src={article.imageUrl} alt={article.title}/>
              <p>{article.category}</p>
              <Link to = {`/newsdetails/${article.id}`}> <h3>{article.title}</h3></Link>
              <p>{article.decription}</p>
              </article>

            ))

            }

        </div>
    </div>
</section>
  )
}

export default NewsandArticles