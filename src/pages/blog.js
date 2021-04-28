import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, BlogCard, Navbar } from '../components';
import Logo from '../../static/circle_logo.png';

export default function Blog() {

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {
          fields: datePublished,
          order: DESC
        }) {
          edges {
            node {
              author
              datePublished(formatString: "MMMM Do, YYYY")
              title
              slug
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <Navbar />
      <div className="featured-blog">
        <img src="https://source.unsplash.com/random/1400x600" width="100%" />
        <div className="bottom-left">
          <Link to="/blog/change-through-will-within"><h2>Change Through Will Within</h2></Link>
          <p>Olivia Guerra</p>
          <p>April 23rd, 2020</p>
        </div>
      </div>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <>
            <div className="blog-card-list">
              <Link to={`/blog/${edge.node.slug}/`}></Link><BlogCard image={Logo} title={edge.node.title} author={edge.node.author} date={edge.node.datePublished} likes="50" excerpt="excerpt" />
            </div>
          </>
        )
      })}
      <Footer />
    </div>
  );
}