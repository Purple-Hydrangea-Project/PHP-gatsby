import React, { useState } from "react";
import "./Carousel.scss";
import Slide from './Slide'
import Circles from './Circles'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';

export default function Carousel(backgroundImages, captions) {
    const bgImages = backgroundImages.backgroundImages;
    const caption = backgroundImages.captions;
    const length = backgroundImages.backgroundImages.length;
    const myCircles = []

    const [indexShown, setShown] = useState(0);
    function increment(indexShown) {
        indexShown < (length - 1) ? setShown(indexShown + 1) : setShown(0);
    }
    function decrement(indexShown) {
        indexShown > 0 ? setShown(indexShown - 1) : setShown(length-1);
    }
    function changeSlide(circles){
        setShown(circles);
    }

    for (var i = 0; i < length; i++) {
        let x = i;
        if (i == indexShown){
            myCircles.push(<div className="circle selectedCircle" id={i} onClick={() => changeSlide(x)}></div>)
        }
        else{
            myCircles.push(<div className="circle" id={i} onClick={() => changeSlide(x)}></div>)
        }
    }

    return (
        <div className="carousel" style={{backgroundImage: `url(${bgImages[indexShown]})`}}>
        
            <img className="arrowLeft arrow" onClick={() => decrement(indexShown)} src={Left} />

            <div className="" > 
                {/* <img src={bgImages[indexShown]} /> */}
                {caption[indexShown] ? <p className="caption">{caption[indexShown]}</p> : <p className="caption"></p>}
                {/* <div className="circles">
                    {circles}
                </div> */}
            </div>
            
            <img className="arrowRight arrow" onClick={() => increment(indexShown)} src={Right} />

        
        <div></div>
        <div className="carousel-circles">
                 {myCircles}
             </div>
        </div>
    );
}