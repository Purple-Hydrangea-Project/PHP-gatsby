import React, { useState } from "react"
import "./Carousel.scss"

const Slide = (props) => {
    const event = props.eventObj;

    return (
        <div className="slide" id={"slide" + event.num.toString()}>
            <p>{event.text}</p>
            
        </div>

    )
}
export default Slide

