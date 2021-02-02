import React, { useState } from "react"
import "./Carousel.scss"
import Carousel from './Carousel'

const Circles = (props) => {
    const event = props.eventObj;

    return (
        <div className="circle" id={"circle" + event.num.toString()} onClick={() => props.functions(event.num)}>            
        </div>
    )
}
export default Circles

