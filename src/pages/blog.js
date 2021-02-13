import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, Card, BlogPage, BlogCard, TextCard, Navbar, QuoteBox } from '../components';
import Logo from '../../static/circle_logo.png';

export default function Home() {

    const data = useStaticQuery(
        graphql`
      query {
        allContentfulBlogPost {
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
            {data.allContentfulBlogPost.edges.map(edge => {
          return (
              <>
              <BlogCard image={Logo} title={edge.node.title} author={edge.node.author} date={edge.node.datePublished} likes="50" excerpt="excerpt" />
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
              </>
          )
        })}
            <div className="featured-blog">
                <img src="" width="100%" />
                <div className="bottom-left">
                    <h2>hihi</h2>
                    <p>Author</p>
                    <p>Date</p>
                </div>
            </div>
            <div class="blogcards">
                <BlogCard image={Logo} title="title" author="author" date="date" likes="50" excerpt="excerpt" />
                <BlogCard image={Logo} title="title2" author="author" date="date" likes="50" excerpt="excerpt" />
            </div>
        
        

            <Footer />
        </div>
    );
}