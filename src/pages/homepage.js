import React from "react";
import "../components/main.scss";
import { Footer, Landing, Counter, Navbar, VineBlurb, Countdown, Carousel, Partners } from '../components';
import Vine from '../../static/vineblurb.png'


export default function Home() {

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

  return (
    <div className="homepage">
      <Navbar />
      <Landing />
      <div className="section">
        <VineBlurb img={Vine} alt="Vines" blurb="this is the coolest blurb" />
      </div>

      <div className="section">
        <Carousel events={slide} />
      </div>

      <div className="section">
        <Counter values={counterValues} duration={2000} />
      </div>

      <div className="section">
        <h1>upcoming event name</h1>
          <div className="event-row">
              <div className="event-column">
                <Countdown />
              </div>
              <div className="event-column">
                <p>event description goes here alkjdflakjdfalkdsjf</p>
              </div>
          </div>
      </div>
      <div className="partners-section">
        <h1>our partners</h1>
          <div className="row">
            <Partners logo="https://cdn-images-1.medium.com/max/1200/1*3FpOUVGHsnVaFP58UiOjrw.png" alt="Google For Nonprofits" />
            <Partners logo="https://images.squarespace-cdn.com/content/v1/5d2f54133c449e0001b2d230/1568749343346-4C5GKWA0R1GNGOPXNPSD/ke17ZwdGBToddI8pDm48kNsayAhmPBuTgnCITQel9MNZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dss-b_TPjOgQSEDNYV-zheQ5zlhyPMTNFLulshWbomYra4M5E9xGpVFKd7SsLSp_w/Google+Logo+250w.png" alt="Google For Nonprofits" />
            <Partners logo="https://images.squarespace-cdn.com/content/v1/5d2f54133c449e0001b2d230/1568749343346-4C5GKWA0R1GNGOPXNPSD/ke17ZwdGBToddI8pDm48kNsayAhmPBuTgnCITQel9MNZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dss-b_TPjOgQSEDNYV-zheQ5zlhyPMTNFLulshWbomYra4M5E9xGpVFKd7SsLSp_w/Google+Logo+250w.png" alt="Google For Nonprofits" />
            <Partners logo="https://images.squarespace-cdn.com/content/v1/5d2f54133c449e0001b2d230/1568749343346-4C5GKWA0R1GNGOPXNPSD/ke17ZwdGBToddI8pDm48kNsayAhmPBuTgnCITQel9MNZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dss-b_TPjOgQSEDNYV-zheQ5zlhyPMTNFLulshWbomYra4M5E9xGpVFKd7SsLSp_w/Google+Logo+250w.png" alt="Google For Nonprofits" />
          </div>
      </div>
        <Footer />
      </div>
  );
}