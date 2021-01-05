import React from "react"
import "./Countdown.scss"
import DigitGroup from "./DigitGroup";

const Countdown = (props) => {
    const times = {
        'days': [0, 5],
        'hours': [2, 1],
        'minutes': [4, 8],
    }
    const renderCells = () => {
        return Object.keys(times).map((time) => {
            return (<DigitGroup subheading={time} digits={times[time]} />);
        })
    }

    return (
        <div className="countdown my-container">
            <p className="title">countdown</p>
            <div className="my-container countdown-container">
                {renderCells()}
            </div>
        </div>
    );
};
export default Countdown;