import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Template = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: datePublished, order: DESC }) {
          edges {
            node {
              title
              slug
              datePublished(formatString: "Do MMMM, YYYY")
            }
          }
        }
      }
    `
  )
  return (
    <>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
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
      </ul>
    </>
  )
}

export default Template