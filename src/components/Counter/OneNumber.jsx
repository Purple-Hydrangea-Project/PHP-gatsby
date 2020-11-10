import React, { useEffect, useState } from 'react';
import "./Counter.scss"

const OneNumber = (props) => {

    const easeOutQuad = t => t * (2 - t);
    const frameDuration = 1000 / 60;

    const countTo = props.number;
    const duration = props.duration || 2000;
    const [count, setCount] = useState(0);

    useEffect(() => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(countTo * progress);

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }, []);

    return (
        <p className="number">{Math.floor(count)}</p>
    );
};
export default OneNumber;