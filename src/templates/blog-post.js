import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
    <>
      <Link to="/template/">Visit the Blog Page</Link>
      <div>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.datePublished} by {props.data.contentfulBlogPost.author}
        </span>
        <div className="post">
          {documentToReactComponents(post)}
        </div>
      </div>
    </>
  )
}

export default BlogPost