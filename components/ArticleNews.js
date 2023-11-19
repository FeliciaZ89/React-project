import React, { useState, useEffect } from "react";
import date from '../assets/images/Date.png'
import { Link } from 'react-router-dom'
import Button from '../components/generics/Button'
import SectionTitle from "./generics/SectionTitle";

const ArticleNews = () => {

  const [articlesByCategory, setArticlesByCategory] = useState([]);


  useEffect(() => {
    fetch('https://win23-assignment.azurewebsites.net/api/articles')
      .then(response => response.json())
      .then(data => {
        const articlesByCat = {};
  
        data.forEach(article => {
          if (!articlesByCat[article.category]) {
            articlesByCat[article.category] = article;
          }
        });
  
        setArticlesByCategory(Object.values(articlesByCat).slice(0, 3));
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);
  
  
  return (
<section className="news">
    <div className="container">
      <div className="main-title">
        <SectionTitle title="Article & News" description = "Get every single article & news" />
          <div className="tr-button">
          <Button type="" url ="" title="All reviews"/>
          </div>
      </div> 
      <div className="articles">
        
       {articlesByCategory.map(article => (
        <div className="article" key={article.id}>
        <img src={article.imageUrl} alt="article" />
        <img src={date} className="date" style={{ height: "40px", width: "40px" }} alt="date" />
        <Link to={`/newsdetails/${article.id}`}><h3>{article.title}</h3></Link>
        <p>{article.content}</p>
        </div>
                ))}
       </div>
    </div>
 </section>

    
  );
};

export default ArticleNews;