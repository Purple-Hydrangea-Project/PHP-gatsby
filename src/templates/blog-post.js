import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./../components/templates.scss";
import { Navbar, Socials, Footer, RecentPosts } from '../components/index';
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

const blogs = [
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"two here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"three here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:" four here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"five here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"six here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  },
  {
    image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
    title:"seven here's a blog guys",
    excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "4/10/2003",
    likes: 50
  }
]

const BlogPost = props => {
  
  const post = props.data.contentfulBlogPost.content.json
  return (
    <div>
      <Navbar />
      <div><Link to="/blog/">Visit the Blog Page</Link></div>
      <div className="blogpage belowNav">
      
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
        <RecentPosts />
      </div>
      <Footer />
    </div>
  )
}

export default BlogPost