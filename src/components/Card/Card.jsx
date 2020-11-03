import React from "react"
import "./Card.scss"

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="img" />

            <h2 className="title">{props.title}</h2>
            <p className="info">{props.text}</p>
        </div>
    );
};
export default Card;