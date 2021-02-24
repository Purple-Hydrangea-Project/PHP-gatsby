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
      <h1>Get Involved</h1>
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
        <BubbleButtons icon={TechDev} text="Tech Development" />
        <BubbleButtons icon={Creative} text="Creative" />
        <BubbleButtons icon={Outreach} text="Outreach" />
        </div>
      </div>
      <Footer />
    </div>
  );
}