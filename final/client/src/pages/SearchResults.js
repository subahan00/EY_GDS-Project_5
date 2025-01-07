import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/search?q=${searchQuery}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) fetchResults();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result._id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
