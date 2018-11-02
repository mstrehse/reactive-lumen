import React from 'react'
import Header from "../components/header.jsx"
import Content from "../routes.jsx"
import Footer from "../components/footer.jsx"

const Layout = () =>{
	return (
		<div className="inner">
			<Header />
			<div className="content">
				<Content />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
