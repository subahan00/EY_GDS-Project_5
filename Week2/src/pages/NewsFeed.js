import React, { useEffect, useState } from 'react';
import '../styles.css'; 

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;


    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="spinner">Loading...</div>; // Optional loading spinner
  }

  return (
    <div className="news-container">
      <h1>Top News</h1>
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage || './src/assets/Logo.jpg'} alt={article.title} className="news-image" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
