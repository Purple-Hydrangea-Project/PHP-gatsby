import React from "react"
import "./Accordion.scss"
import Event from './Event'

const Accordion = (props) => {
    return (
        <div className="accordion">
            {props.events.map((event) => {
                return (
                    <div>
                        <Event eventObj={event} />
                        <hr></hr>
                    </div>)
            })}
        </div>
    )
}
export default Accordion