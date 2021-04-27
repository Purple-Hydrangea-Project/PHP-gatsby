import React, { useState } from "react";
import "./MiniCarousel.scss"
import Resource from './Resource'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';

export default function MiniCarousel(props) {
    const bgImages = props.backgroundImages;
    const caption = props.captions;
    const link = props.links;
    const length = bgImages.length;

    const [firstSlide, setShown] = useState(0);
    var mySlides = [];

    const [width, setDimensions] = useState(window.innerWidth);
    console.log("intial " + width);
      React.useEffect(() => {
        function handleResize() {
          setDimensions(window.innerWidth);
          console.log(width);
          showSlides();
        }
    
        window.onResize = handleResize;
      })

    function increment(firstSlide) {
        console.log(width + " width :)");
        firstSlide < (length - 1) ? setShown(firstSlide + 1) : setShown(0);
        showSlides();
    }
    function decrement(firstSlide) {
        console.log(width + " width :)");
        firstSlide > 0 ? setShown(firstSlide - 1) : setShown(length-1);
        showSlides();
    }

    function showSlides(){

        mySlides = [];
        let toDisplay = length;

        if (width < 750){
            toDisplay = 3;
        }

        console.log(toDisplay);

        
        for (var i = 0; i < toDisplay; i++) {

            var currentDisplay = i + firstSlide;
            if (currentDisplay >= length){
                currentDisplay = i + firstSlide - length;
            }
            mySlides.push(<Resource cap={caption[currentDisplay]} backimg = {bgImages[currentDisplay]} mylink={link[currentDisplay]}/>)
            console.log(i + " time");
        }
        
        console.log(mySlides);
    }

    showSlides();

    return (
        <div className="minicarousel">
                       
            <div>
            <img className="arrow" src={Left} onClick={() => increment(firstSlide)}/>
            </div>
             
                {mySlides}
            
            <div>
            <img className="arrow" src={Right} onClick={() => decrement(firstSlide)}/>
            </div>
             
        </div>
    );
}