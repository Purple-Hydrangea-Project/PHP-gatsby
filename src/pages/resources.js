import React from 'react';
import '../components/pages.scss';
import { Navbar, MiniCarousel, ResourceItem, Footer } from '../components/index';
import Img1 from "../../static/resource1.svg"
import Img2 from "../../static/resource2.svg"
import Img3 from "../../static/resource3.svg"

export default function Resources() {
  const miniimages = ['https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', 'https://outwardhound.com/furtropolis/wp-content/uploads/2020/03/Doggo-Lingo-Post.jpg', 'https://doggo.com/wp-content/uploads/2017/12/dog-cheeks-585x300.png', 'https://doggo.com/wp-content/uploads/2017/12/dog-cheeks-585x300.png']
  const minicaptions = ['1something', '2catto', '3doggo', 'four', 'five']
  const minilinks = ['https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', 'https://outwardhound.com/furtropolis/wp-content/uploads/2020/03/Doggo-Lingo-Post.jpg', 'https://doggo.com/wp-content/uploads/2017/12/dog-cheeks-585x300.png', 'https://google.com']
  // const resource = [
    
  //   {
  //     num: 0,
  //     name: 'apps',
  //     link: 'google',
  //     img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
  //   },
  //   {
  //     num: 1,
  //     name: 'hotlines',
  //     link: 'gsdfdsfoogle',
  //     img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
  //   },
  //   {
  //     num: 2,
  //     name: 'blogs',
  //     link: 'gsdfdsfoogle',
  //     img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
  //   },
  //   {
  //     num: 3,
  //     name: 'orgs',
  //     link: 'gsdfdsfoogle',
  //     img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
  //   },
  //   {
  //     num: 4,
  //     name: 'books',
  //     link: 'gsdfdsfoogle',
  //     img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'
  //   }
  // ]

  
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
      <div className="belowNav">
      <h1 className="purple heading">resources</h1>
      </div>
      
      {/* <MiniCarousel backgroundImages={miniimages} captions={minicaptions} links={minilinks}/> */}
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