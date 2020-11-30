import React, { useState } from "react"
import "./Accordion.scss"

const Event = (props) => {
    const event = props.eventObj;
    const [isOpen, toggle] = useState(false);

    return (
        <div>
            <div className="event row" onClick={() => toggle(!isOpen)}>
                <div className="date row">
                    <p className="text">{event.date}</p>
                    <div>
                        <p className="mini-text">{event.date}</p>
                        <p className="mini-text">{event.date}</p>
                    </div>
                </div>
                <div className="name">
                    <p className="text">{event.name}</p>
                </div>
            </div>
            {isOpen ? (
                <div className="event row">
                    <div className="date-specifics">
                        <p className="text">{event.date}</p>
                        <p className="text">{event.location}</p>
                    </div>
                    <div class="vl"></div>
                    <div className="description">
                        <p className="description">{event.description}</p>
                    </div>
                </div>) :
                <></>}
        </div>

    )
}
export default Event