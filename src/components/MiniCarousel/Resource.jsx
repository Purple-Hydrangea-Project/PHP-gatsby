import React, { useState } from "react"
import "./MiniCarousel.scss"

const Resource = (props) => {
    const event = props.eventObj;

    return (
        <div className="resource" id={"resource" + event.num.toString()} style={{backgroundImage: `url(${event.img})`}}>
            <a href={event.link} target="_blank"><p>{event.name}</p></a>
        </div>

    )
}
export default Resource

