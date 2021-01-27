import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, Landing, Button, Card, BlogPage, BlogCard, Counter, TextCard, Feature, Accordion, Navbar, QuoteBox, VineBlurb, Countdown, BubbleButtons } from '../components';
import Logo from '../../static/circle_logo.png';
import Vine from '../../static/vineblurb.png';


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
      <div className="section row">
        <Countdown />
      </div>
      
      <Counter values={counterValues} duration={2000} />
      <VineBlurb img={Vine} text="This is a blurb" />
      <Footer />

    </div>
  );
}