import React from 'react';
import '../styles.css';

const NewsFeed = ({ articles }) => {
  return (
    <div className="news-container">
      <h1>Top News</h1>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <img
              src={article.urlToImage || '/fallback-image.jpg'} // Use a valid fallback image
              alt={article.title}
              className="news-image"
            />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
