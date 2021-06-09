import React from "react"
import "./Landing.scss"
import Logo from "../../..//static/circle_logo.png"
import { Scroller } from "../../components"

const Landing = () => (
  <div className="actual-main-section">
    <div className="main-landing-container">
      <h1 className="big-title">The Purple Hydrangea Project</h1>
      <img src={Logo} alt="PHP Logo" className="php-logo" />
      <h2 className="main-subtitle">
        A purple hydrangea symbolizes the desire for a deeper understanding of
        someone else.
      </h2>
    </div>
    <a href="#blurb">
      <Scroller />
    </a>
  </div>
)
export default Landing
