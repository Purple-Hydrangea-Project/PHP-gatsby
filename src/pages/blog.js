import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../components/main.scss"
import "../components/pages.scss"
import { Footer, BlogCard, Navbar, Feature } from "../components"

export default function Blog() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: datePublished, order: DESC }) {
          edges {
            node {
              author
              datePublished(formatString: "MMMM Do, YYYY")
              title
              slug
              excerpt {
                excerpt
              }
              photo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="blogListPage">
      <Navbar />
      <div>
        <Link to="/blog/change-through-will-within">
          <Feature
            image="https://waypointrecoverycenter.com/wp-content/uploads/2019/06/The-Pink-Clouds-Dark-Side.jpg"
            title="Change through Will Within"
            author="Olivia Guerra"
            date="April 23, 2020"
            likes="10"
          />
        </Link>
      </div>
      <div className="blogCardList">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <>
              <div className="f">
                <Link className="blogCardLink" to={`/blog/${edge.node.slug}/`}>
                  <BlogCard
                    className="blogCardCard"
                    image={edge.node.photo.file.url}
                    title={edge.node.title}
                    author={edge.node.author}
                    date={edge.node.datePublished}
                    likes="50"
                    excerpt={edge.node.excerpt.excerpt}
                  />
                </Link>
              </div>
            </>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}