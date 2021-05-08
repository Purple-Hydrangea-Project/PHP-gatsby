import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../components/main.scss"
import "../components/pages.scss"
import { Footer, BlogCard, Navbar, Feature, RecentPosts } from "../components"

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

  return (
    <div className="blogListPage">
      <Navbar />
      <div className="belowNav">
        <Feature
          image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          title="Change through Will Within"
          author="Olivia Guerra"
          date="April 23, 2020"
          likes="10"
        />
      </div>
      <RecentPosts events={blogs}/>
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