import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, Landing, Button, Card, BlogPage, BlogCard, Counter, TextCard, Feature, Accordion, Navbar } from '../components';
import Logo from '../../static/circle_logo.png';

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

  return (
    <div>
      <Navbar />
      <Landing />
      <Accordion events={events} />
      <Button text="hello" link="/blogpage" size="default" />
      {/* <BlogPage /> */}
      <div className="section row">
      {data.allContentfulTeamMember.edges.map(edge => {
          return (
            <Card img={edge.node.image.file.url} title={edge.node.name} text={edge.node.blurb.blurb} />
          )
        })}
        <Card img={Logo} title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
      </div>
      <Counter values={counterValues} duration={2000} />
      <TextCard alignment="left" text="The Purple Hydrangea Project is a student-run 501(c)3 nonprofit organization dedicated to advocating for mental health awareness in children and teens. In our fight to eliminate the stigma around mental health, we hope to move the community towards an environment of understanding in which everyone can feel safe in reaching out for help and speaking about their mental health struggles without fear of being judged, ignored, or shunned. " heading="our mission" img={Logo} />
      <TextCard alignment="right" text="We plan to fulfill our mission by coordinating and presenting mental health awareness assemblies in elementary, middle, and high schools, making care packages for youth in psychiatric wards, holding holiday toy drives for children that have been diagnosed as emotionally disturbed, publishing a crowd-sourced book of stories of recovery from people all over the country, facilitating a pen pal program for youth all around the world to establish personal connections with one another, enacting a mural in honor of suicide victims, running a website on which we share resources, knowledge, and professional and personal advice on dealing with mental health struggles, and more. " heading="what we do" img={Logo} />
      <Footer />

      <div class="blogcards">
        <BlogCard image="{Logo}" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
        <BlogCard image="{Logo}" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
      </div>

      <Feature image="https://iarp.org/wp-content/uploads/2015/04/purple-1.jpg" title="my blog" author="me" date="today" likes="500"/>
    </div>
  );
}