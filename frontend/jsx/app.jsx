import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Layout from "./layout/layout.jsx"

const Index = () => {
  return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	)
};

ReactDOM.render(<Index />, document.getElementById("page"));
