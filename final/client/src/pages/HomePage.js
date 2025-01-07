import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsFeed from './NewsFeed';
import '../styles.css';

const HomePage = ({ category, searchTerm }) => {
  const [articles, setArticles] = useState([]);
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
            q: searchTerm || null, // Use searchTerm to filter articles
            page: currentPage,
            pageSize: 9,
            apiKey: process.env.REACT_APP_NEWS_API_KEY, // Use environment variable
          },
        });
        if (response.data.articles.length === 0) {
          setError('No articles found.');
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
  }, [category, searchTerm, currentPage]); // Re-fetch articles when searchTerm changes

  return (
    <div className="homepage">
      {/* Loading Spinner */}
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <span className="loading-text">Loading...</span>
        </div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          {/* News Feed */}
          <NewsFeed articles={articles} />

          {/* Pagination */}
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </button>
            )}
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;