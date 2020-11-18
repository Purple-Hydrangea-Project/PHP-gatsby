import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      datePublished(formatString: "Do MMMM, YYYY")
      content {
        json
      }
    }
  }
`

const BlogPost = props => {
  return (
    <>
      <Link to="/template/">Visit the Blog Page</Link>
      <div>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.datePublished}
        </span>
        {/* {documentToReactComponents(props.data.contentfulBlogs.content.json)} */}
      </div>
    </>
  )
}

export default BlogPost