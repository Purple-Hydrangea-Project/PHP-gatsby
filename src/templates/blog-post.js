import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./../components/templates.scss";
import { Socials } from '../components/index';
import Heart from '../../static/heart-thin.svg';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      title
      datePublished(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  }
`

const BlogPost = props => {
  const post = props.data.contentfulBlogPost.content.json
  return (
    <div>
      <div><Link to="/blog/">Visit the Blog Page</Link></div>
      <div className="blogpage">
      
        <div className="greenBox">
          <div className="post">
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <span className="meta">
              Posted on {props.data.contentfulBlogPost.datePublished} by {props.data.contentfulBlogPost.author}
            </span>
            <div className="postContent">
              {documentToReactComponents(post)}
            </div>
            <div className="postFooter">
              <div className="socials">
                <Socials />
              </div>
              <div className="likes"><img className="icon" src={Heart}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost