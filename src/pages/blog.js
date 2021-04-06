import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import '../components/pages.scss';
import { Footer, BlogCard, Navbar } from '../components';

export default function Home() {

    const data = useStaticQuery(
        graphql`
      query {
        allContentfulBlogPost(sort: {fields: datePublished, order: DESC}) {
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
              <div className="blogCardList">
                <Link className="blogCardLink" to={`/blog/${edge.node.slug}/`}><BlogCard className="blogCardCard" image={edge.node.photo.file.url} title={edge.node.title} author={edge.node.author} date={edge.node.datePublished} likes="50" excerpt={edge.node.excerpt.excerpt} /></Link>
              </div>
            </>
          )
        })}
            
            <Footer />
        </div>
    );
}