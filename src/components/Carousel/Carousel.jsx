import React, { useState } from "react";
import "./Carousel.scss";
import Slide from './Slide'
import Circles from './Circles'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';

// const backgroundImages = ['img1', 'img2', 'img3'];
// const [index, setIndex] = useState(0);
// <img className="arrowLeft" onClick={() => setIndex(index--)} />
// <Slide show={index}
// <Circles><Circle className={</Circles>

export default function Carousel(backgroundImages, captions) {
    console.log(typeof(backgroundImages));
    console.log(backgroundImages);
    const bgImages = backgroundImages;
    const caption = captions;
    const length = backgroundImages.length;

    const [indexShown, setShown] = useState(0);
    function increment(indexShown) {
        indexShown < length ? setShown(indexShown++) : setShown(0);
    }
    function decrement(indexShown) {
        indexShown > 0 ? setShown(indexShown--) : setShown(length);
    }

    // let circles = [];
    // for (var i = 0; i < length; i++) {
    //     circles.push(<button />)
    // }


    return (
        <div className="carousel">
            <img className="arrowLeft" onClick={increment(indexShown)} src={Left} />
            <img src={bgImages[indexShown]} />
            {caption[indexShown] ? <p className="caption">{caption[indexShown]}</p> : null}
            {/* <div className="circles">
                {circles}
            </div> */}
            <img className="arrowRight" onClick={decrement(indexShown)} src={Right} />
        </div>
    );
}


// const Carousel = (props) => {

//     {props.events.map((event) => {
//         backgroundImages.push(event.img);
//     })}
    
//     return (
//         <div className="carousel" id="carousel" style={{backgroundImage: `url(${backgroundImages[0]})`}}>
//             <img id="left" className="arrow" src={Left} onClick={() => move("left", props.events.length, backgroundImages)}/>
            
//             {props.events.map((event) => {
//                 return (
//                         <Slide eventObj={event} />
//                        )
//             })}

//             <img id="right" className="arrow" src={Right} onClick={() => move("right", props.events.length, backgroundImages)}/>
//              <div className="space"></div>  
//             <div className="carousel-circles">
//                 {props.events.map((event) => {
//                     return ( 
//                         <div className="circle" id={"circle" + event.num.toString()} onClick={() => circleClick(event.num)}></div>   
//                         )
//                 })}
//             </div>
//         </div>
//     )

    
// }

// export default Carousel

// var currentPos = 0;
// function move(direction, resourceNum, backgroundImage){
//     if (direction === "left"){
//        currentPos--; 
//        if(currentPos < 0){
//            currentPos = resourceNum - 1;
//        }
//     }
//     else{
//         currentPos++ 
//        if(currentPos >= resourceNum){
//            currentPos = 0;
//        }
//     }

//     document.getElementById("carousel").style.backgroundImage = 'url("' + backgroundImage[currentPos] + '")';

//     for (var i = 0; i < resourceNum; i++){
//             var myCircle = document.getElementById("circle" + i);
//             var myResource = document.getElementById("slide" + i);
            
//             if (currentPos === i){
//                 myResource.style.display = "block";
//                 myCircle.style.backgroundColor = "white";
//             }
//             else{
//                 myResource.style.display = "none";
//                 myCircle.style.backgroundColor = "#D4D4D4";
//             }             
//         }
// }

// function circleClick(circleNum){

//     //current circle and slide are "gone"
//     document.getElementById("circle" + currentPos).style.backgroundColor = "#D4D4D4";
//     document.getElementById("slide" + currentPos).style.display = "none";

//     //shows the one you clicked on
//     currentPos = circleNum;
//     document.getElementById("circle" + currentPos).style.backgroundColor = "#fff";
//     document.getElementById("slide" + currentPos).style.display = "block";

//     document.getElementById("carousel").style.backgroundImage = 'url("' + backgroundImages[currentPos] + '")';

// }