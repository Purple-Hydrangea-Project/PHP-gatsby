import React, { useEffect, useState } from 'react';
import "./Countdown.scss"
import OneCell from './OneCell'

const DigitGroup = (props) => {

    return (
        <div className="digit-group">
            <div className="my-container cell-container">
                {props.digits.split().map((digit) => {
                    return (<OneCell digit={digit} />)
                })}
            </div>
            <p className="subtitle">{props.subheading}</p>
        </div>
    );
};
export default DigitGroup;