import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Import the pages
import Home from "./pages/home.jsx"
import Second from "./pages/second.jsx"
import Third from "./pages/third.jsx"
import Login from "./pages/login.jsx"

// setup the routes
const Routes = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/second/" component={Second} />
		<Route path="/third/" component={Third} />
		<Route path="/login/" component={Login} />
  </div>
);

export default Routes
