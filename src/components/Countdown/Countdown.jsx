import React, { useEffect, useState } from "react"
import "./Countdown.scss"
import DigitGroup from "./DigitGroup";
import moment from 'moment'

const Countdown = (props) => {
    const timeTillDate = "January 13th 2021, 5:12:13 pm";
    const timeFormat = "MMMM Do YYYY, h:mm:ss a";
    const [times, setTimes] = useState({});

    const getTimes = () => {
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('DD');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        return { days, hours, minutes };
    }

    // calculate starting countdown values
    useEffect(() => {
        setTimes(getTimes());
    }, [props])

    // set interval for component to update
    useEffect(() => {
        setInterval(() => {
            setTimes(getTimes());
        }, 60000);
    })

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