import React from "react"
import "./Counter.scss"
import OneNumber from './OneNumber'

const Counter = (props) => {
    return (
        <div className="counter my-container">
            {props.values.map((numberLabelObj) => {
                return (
                    <div className="number-container">
                        <OneNumber duration={props.duration} number={numberLabelObj.number} label={numberLabelObj.label} />
                        <p className="label">{numberLabelObj.label}</p>
                    </div>
                )
            })}
        </div>
    );
};
export default Counter;