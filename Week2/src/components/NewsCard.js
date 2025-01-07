import React from 'react';

const NewsCard = ({ title, description, url, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsCard;
