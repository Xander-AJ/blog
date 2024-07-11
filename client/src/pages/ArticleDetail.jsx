import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css'

function ArticleDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Article Detail Page</h1>
      <p>Details for article with ID: {id}</p>
    </div>
  );
}

export default ArticleDetail;
