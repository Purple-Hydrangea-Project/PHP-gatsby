import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Footer, BlogCard, Navbar, Feature, RecentPosts } from "../components"
import styles from "../components/Blog.module.scss"

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
    <div>
      <Navbar />
      <div>
        <Link to="/blog/change-through-will-within">
          <a className={styles.link}>
            <Feature
              image="https://waypointrecoverycenter.com/wp-content/uploads/2019/06/The-Pink-Clouds-Dark-Side.jpg"
              title="Change through Will Within"
              author="Olivia Guerra"
              date="April 23, 2020"
              likes="10"
            />
          </a>
        </Link>
      </div>

      <div className={styles.blogCardList}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div key={edge.node.title} className={styles.cardItem}>
              <Link to={`/blog/${edge.node.slug}/`}>
                <a className={styles.link}>
                  <BlogCard
                    image={edge.node.photo.file.url}
                    title={edge.node.title}
                    author={edge.node.author}
                    date={edge.node.datePublished}
                    likes=""
                    excerpt={edge.node.excerpt.excerpt}
                  />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
