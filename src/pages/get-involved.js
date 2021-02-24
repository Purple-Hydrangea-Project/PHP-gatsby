import React from 'react';
import { Button, BubbleButtons, Navbar, Footer } from "./../components";
import Finance from "../../static/icon-finance.png"
import Marketing from "../../static/icon-marketing.png"
import TechDev from "../../static/icon-tech.png"
import Outreach from "../../static/icon-Outreach.png"
import Creative from "../../static/icon-creative.png"

export default function GetInvolved() {
  return (
    <div className="getInvolved">
      <Navbar />
      <h1>get involved</h1>
      <div className="row">
        <div className="left">
          <h4>join our staff team</h4>
          <p>We are currently accepting people on a rolling basis of 14 years of age or older who are interested in being a part of our cause!</p>
          {/* <br /><br /> */}
          <p>Interested in taking up this leadership advocacy role? Fill out the short application form below!</p>
          <Button text="apply now!" link="/" />
        </div>
        <div className="right">
        <BubbleButtons icon={Marketing} text="Marketing" />
        <BubbleButtons icon={Finance} text="Finance" />
        <BubbleButtons icon={TechDev} text="Tech Dev" />
        <BubbleButtons icon={Creative} text="Creative" />
        <BubbleButtons icon={Outreach} text="Outreach" />
        </div>
      </div>
      <div className="greenRow">
        <div className="left">
          <h4>volunteer</h4>
          <p>Believe in our cause? Sign up for our volunteer email list! Subscribers will receive updates on all volunteer events and opportunities. No contribution is too small and we could always use a helping hand! </p>
          <Button text="sign up" />
        </div>
        <div className="middle">
          <h4>share your story</h4>
          <p>Submit a piece of artwork, journal entry, song lyrics, etc., that you believe conveys an aspect of your experience with mental health. These submissions will be featured on our website, social medias, and eventually our published book!</p>
          <Button text="share here" />
        </div>
        <div className="right">
          <h4>start a club</h4>
          <p>Help spread our message of mental health awareness for kids and teens to your school! Email us with the subject line "Interest in Starting a PHP Chapter" for more information.</p>
          <Button text="contact us" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}