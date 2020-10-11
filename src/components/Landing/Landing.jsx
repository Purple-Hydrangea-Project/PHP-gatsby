import React from "react"
import "./Landing.scss"
import LandingPic from '../../../static/landing.png'
import { Scroller } from '../../components'

const Landing = () => (
    <div className="landing">
        <img src={LandingPic} alt="Purple Hyndrangea Project" className="picture" />
        <Scroller />
    </div>
)
export default Landing