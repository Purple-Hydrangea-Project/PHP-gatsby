import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { BlogCard, Card } from "../components"
import Logo from '../../static/circle_logo.png';

const Template = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: datePublished, order: DESC }) {
          edges {
            node {
              title
              author
              slug
              datePublished(formatString: "Do MMMM, YYYY")
            }
          }
        }
      }
    `
  )
  return (
    <div className="blog-posts">
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <BlogCard 
            title={edge.node.title} 
            slug={`/blog/${edge.node.slug}/`} 
            author={edge.node.author}
            image={Logo}
            date={edge.node.datePublished} />
        )
      })}
      {/* <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.datePublished}</span>
              </div>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default Template