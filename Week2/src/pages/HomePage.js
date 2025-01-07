import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NewsCard from '../components/NewsCard';
import NewsFeed from './NewsFeed';
import '../styles.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            category,
            q: searchTerm || null,
            page: currentPage,
            pageSize: 9,
            apiKey: '15698654ff424362b16e648ec7a0e8db', 
          },
        });
        if (response.data.articles.length === 0) {
          setError('No articles found for your search.');
        } else {
          setArticles(response.data.articles);
        }
      } catch (error) {
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, searchTerm, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1); 
    setSearchTerm(searchTerm.trim());
  };

  return (
    <div>
      
   

      {loading ? (
        <div className="spinner"></div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="news-container">
            {articles.map((article, index) => (
              <NewsFeed
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
              />
            ))}
          </div>
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </button>
            )}
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
