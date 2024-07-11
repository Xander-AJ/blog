import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

function ArticleDetail() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint for fetching article details by ID
    const apiEndpoint = `https://api.example.com/articles/${articleId}`;

    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [articleId]);

  if (loading) return <p>Loading article details...</p>;
  if (error) return <p>Error loading article details: {error.message}</p>;

  return (
    <div className="article-detail-container">
      <h1>{article.name}</h1>
      <p>ID: {article.id}</p>
      <p>Description: {article.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ArticleDetail;
