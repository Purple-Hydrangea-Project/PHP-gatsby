import React from 'react';
import '../components/templates.scss';
import { Navbar, MiniCarousel, ResourceItem, Footer } from '../components/index';
import Img1 from "../../static/resource1.svg"
import Img2 from "../../static/resource2.svg"
import Img3 from "../../static/resource3.svg"

export default function Resources() {
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
  const resourceImages = [Img1, Img2, Img3]
  const resourceText = ['Suicide hotline:  1-800-273-TALK (8255)', 'Crisis Text Line: Text HOME to 741741 (US), 686868 (Canada), 85258 (UK)', 'Kaiser Permanente Mental Health and Wellness Line (available 24/7): 1-800-900-3277']
  const resourceItems = resourceImages.map((image, index) => {
    const text = resourceText[index];
    return (
      <ResourceItem image={image} text={text} />
    );
  });
  
  return (
    <div className="resources">
      <Navbar />
      <h1>resources</h1>
      <MiniCarousel events={resource} />
      {resourceItems}
      {resourceItems}
      {resourceItems}
      <div className="warning">
        <p>
          Visit a therapist and/or psychologist for a professional diagnosis and prescription of proper treatment.
        </p>
        <br /><br />
        <p>
          If you or someone you know is in danger of harming themselves or others, we strongly encourage you to call 911 for immediate emergencies or to reach out to one of the many resources available.
        </p>
      </div>
      <Footer />
    </div>
  )
}