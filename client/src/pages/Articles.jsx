import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const apiEndpoint = 'https://api.example.com/articles';

    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error loading articles: {error.message}</p>;

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <div className="articles-list">
        {articles.map(article => (
          <div key={article.id} className="article-item">
            <h2>{article.name}</h2>
            <p>ID: {article.id}</p>
            <Link to={`/articles/${article.id}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
