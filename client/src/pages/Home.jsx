import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to ProBlog</h1>
        <nav className="navbar">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2>Discover Amazing Content</h2>
          <p>Your daily source of amazing articles, stories, and ideas.</p>
          <button className="cta-button">Get Started</button>
        </section>
        <section className="features">
          <div className="feature-item">
            <h3>High Quality Articles</h3>
            <p>Read articles from top writers in various fields.</p>
          </div>
          <div className="feature-item">
            <h3>Engage with the Community</h3>
            <p>Comment and interact with other readers and authors.</p>
          </div>
          <div className="feature-item">
            <h3>Personalized Experience</h3>
            <p>Follow your favorite topics and authors for a tailored feed.</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 ProBlog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
