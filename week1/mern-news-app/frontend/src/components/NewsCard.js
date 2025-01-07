import React from 'react';
import '../styles.css';

const NewsCard = ({ title, description, url }) => {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;

