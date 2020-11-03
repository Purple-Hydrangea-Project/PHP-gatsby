import React from "react"
import "./Footer.scss"
import { Socials, Button } from '../../components'
import Logo from '../../../static/circle_logo.png'

const Footer = () => (
    <div className="footer">
        <div className="col first">
            <Button text="donate" size="donate" />
            The Purple Hydrangea Project
is a 501(c)(3) nonprofit organization dedicated to raising mental health awareness in children and teens.
        </div>
        <div className="col second">
            <img src={Logo} alt="The Purple Hydrangea Project" className="logo" />
            <p className="title">The Purple Hydrangea Project</p>
            <p className="connect">Connect with Us</p>
            <Socials />
        </div>
        <div className="col third">
            <p className="title">Contact Us</p>
            <div className="contact">
                <p>Email: purplehydrangeaproject@gmail.com</p>
                <p>Phone: (909)569-4214</p>
                <p>Registered Charity EIN: 83-4419271</p>
            </div>

        </div>
    </div>
)
export default Footer