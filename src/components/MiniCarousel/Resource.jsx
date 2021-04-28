import React, { useState } from "react"
import "./MiniCarousel.scss"

const Resource = (props) => {
    const mycap = props.cap;
    const myimg = props.backimg;
    const mylink = props.mylink;
    return (
        <div className="resource" style={{backgroundImage: `url(${myimg})`}}>
            <a href={mylink} target="_blank"><p class="caption">{mycap}</p></a>
        </div>

    )
}
export default Resource

