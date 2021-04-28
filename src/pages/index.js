import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, Landing, Button, Card, BlogPage, BlogCard, Counter, TextCard, Feature, Accordion, Navbar, QuoteBox, VineBlurb, Countdown, BubbleButtons, MiniCarousel, Carousel, RecentPosts } from '../components';
import Logo from '../../static/circle_logo.png';
import Vine from '../../static/vineblurb.png';
import Finance from "../../static/icon-finance.png"
import Marketing from "../../static/icon-marketing.png"
import TechDev from "../../static/icon-tech.png"
import Outreach from "../../static/icon-outreach.png"
import Creative from "../../static/icon-creative.png"


export default function Home() {

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulTeamMember {
          edges {
            node {
              blurb {
                blurb
              }
              name
              title
              image {
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

  const counterValues = [
    {
      number: 1000,
      label: 'people reached'
    },
    {
      number: 50,
      label: 'events hosted'
    },
    {
      number: 6000,
      label: 'dollars raised in funding'
    }
  ]

  const events = [
    {
      name: 'Lecture: Gender and Pay Gap',
      date: 19,
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum eget quam lectus morbi euismod pellentesque neque, orci magna. Ultrices netus orci facilisis aliquet pulvinar morbi diam.'
    },
    {
      name: 'Lecture: Gender and Pay Gap',
      date: 19,
      location: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum eget quam lectus morbi euismod pellentesque neque, orci magna. Ultrices netus orci facilisis aliquet pulvinar morbi diam.'
    },
  ]

  const resource = [
    {
      num: 0,
      name: 'apps',
      link: 'google',
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
    },
    {
      num: 1,
      name: 'hotlines',
      link: 'gsdfdsfoogle',
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
    },
    {
      num: 2,
      name: 'blogs',
      link: 'gsdfdsfoogle',
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
    },
    {
      num: 3,
      name: 'orgs',
      link: 'gsdfdsfoogle',
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
    },
    {
      num: 4,
      name: 'books',
      link: 'gsdfdsfoogle',
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
    }
  ]


  const slide = [
    {
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
      num:0,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum mi ante. Suspendisse vel sem et quam sagittis efficitur non quis tortor. Praesent luctus lorem at leo commodo interdum. Cras non turpis nec enim rutrum vehicula. Praesent malesuada nibh nec hendrerit tempus. Vestibulum at urna finibus, blandit purus quis, consequat tellus. Nullam tincidunt bibendum lectus. Suspendisse arcu nunc, rutrum a mauris eget, mollis sagittis justo."
    },
    {
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
      num:1,
      text:"Phasellus ipsum metus, porttitor quis nunc eu, posuere suscipit enim. Nam mollis lorem dolor. In hac habitasse platea dictumst. Maecenas at pretium ante. Mauris hendrerit sollicitudin mauris eget imperdiet. Vestibulum sit amet magna vitae arcu sodales consectetur. Proin tellus magna, condimentum eget egestas eu, interdum in justo. Nullam accumsan, sem eu suscipit dictum, odio massa vehicula est, a finibus mi nisi vitae massa. Integer lobortis eu lorem quis lobortis."
    }
  ]

  const blogs = [
    {
      num: 0,
      image: {Logo},
      title: "title0",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 1,
      image: {Logo},
      title: "title1",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 2,
      image: {Logo},
      title: "title2",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 3,
      image: {Logo},
      title: "title3",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 4,
      image: {Logo},
      title: "title4",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 5,
      image: {Logo},
      title: "title5",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 6,
      image: {Logo},
      title: "title6",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 7,
      image: {Logo},
      title: "title7",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    },
    {
      num: 8,
      image: {Logo},
      title: "title8",
      author: "author",
      date: "date",
      likes: 50,
      excerpt: "excerpt"
    }
    
  ]

  const images = ['https://source.unsplash.com/random', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', 'https://outwardhound.com/furtropolis/wp-content/uploads/2020/03/Doggo-Lingo-Post.jpg', 'https://doggo.com/wp-content/uploads/2017/12/dog-cheeks-585x300.png']
  const captions = ['something', 'catto', 'doggo']



  return (
    <div>
      <Navbar />
      <Landing />
      {/* <MiniCarousel events={resource} /> */}
      <Carousel backgroundImages={images} captions={captions} />
      <div className="section row">
        <Countdown />
      </div>
      <Accordion events={events} />
      <Button text="hello" link="/blogpage" size="default" />
      <div className="section row">
        {data.allContentfulTeamMember.edges.map(edge => {
          return (
            <Card img={edge.node.image.file.url} title={edge.node.name} text={edge.node.blurb.blurb} />
          )
        })}
      </div>
      <Counter values={counterValues} duration={2000} />
      <TextCard alignment="left" text="The Purple Hydrangea Project is a student-run 501(c)3 nonprofit organization dedicated to advocating for mental health awareness in children and teens. In our fight to eliminate the stigma around mental health, we hope to move the community towards an environment of understanding in which everyone can feel safe in reaching out for help and speaking about their mental health struggles without fear of being judged, ignored, or shunned. " heading="our mission" img={Logo} />
      <TextCard alignment="right" text="We plan to fulfill our mission by coordinating and presenting mental health awareness assemblies in elementary, middle, and high schools, making care packages for youth in psychiatric wards, holding holiday toy drives for children that have been diagnosed as emotionally disturbed, publishing a crowd-sourced book of stories of recovery from people all over the country, facilitating a pen pal program for youth all around the world to establish personal connections with one another, enacting a mural in honor of suicide victims, running a website on which we share resources, knowledge, and professional and personal advice on dealing with mental health struggles, and more. " heading="what we do" img={Logo} />
      <QuoteBox text="I think that the strength that one gains from trauma and struggle doesn't come from the experience alone; the strength is gained by using the pain one went through and transforming it into healing. I knew that it was a shot in the dark to take on such a huge project about something that is still so controversial, but who has ever made a difference in the world that played it safe?" credit="Madeleine Salem, the PHP President and Founder"/>
      <VineBlurb img={Vine} text="This is a blurb" />
      <Footer />
      <BubbleButtons icon={Marketing} text="Marketing" />
      <BubbleButtons icon={Finance} text="Finance" />
      <BubbleButtons icon={TechDev} text="Tech Development" />
      <BubbleButtons icon={Creative} text="Creative" />
      <BubbleButtons icon={Outreach} text="Outreach" />
      <div class="blogcards">
        <BlogCard image="{Logo}" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
        <BlogCard image="{Logo}" title="title2" author="author" date="date" likes="50" excerpt="excerpt" />
      </div>
      <Feature image="https://iarp.org/wp-content/uploads/2015/04/purple-1.jpg" title="my blog" author="me" date="today" likes="500" />

      <RecentPosts events={blogs}/>
    </div>
  );
}