// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'App.css'; // Import App specific styles
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar or Header Component */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:id" component={ArticleDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
