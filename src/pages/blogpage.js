import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { Footer, BlogPage, Navbar } from '../components';

export default function Blog() {
  return (
  <div className="belowNav">
    <Navbar />
    <BlogPage />
    <Footer />
    
  </div>
  )
}