import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../components/main.scss";
import { Footer, Card, Accordion, Navbar, Carousel } from '../components';

const events = [
    {
      img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
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

export default function Events() {
  return (
  <div>
    <Navbar />
    <h1 className="purple">upcoming events</h1>
    <Accordion events={events} />
    <Carousel events={slide} />
    <h1>past events</h1>
    <div className="section row">
        {events.map(event => {
        return (
            <Card img={event.img} title={event.name} text={event.description} />
            )
        })}
    </div>
    <Footer />
  </div>
  )
}