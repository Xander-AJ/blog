import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar or Header Component */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={BlogDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
