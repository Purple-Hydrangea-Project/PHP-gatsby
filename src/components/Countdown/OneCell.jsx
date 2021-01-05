import React, { useEffect, useState } from 'react';
import "./Countdown.scss"

const OneCell = (props) => {
    return (
        <div className="one-cell">
            <p className="digit">{props.digit}</p>
        </div>
    );
};
export default OneCell;