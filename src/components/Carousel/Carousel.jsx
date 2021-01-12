import React from "react"
import "./Carousel.scss"
import Slide from './Slide'
import Circles from './Circles'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';



const Carousel = (props) => {
    
    return (
        <div className="carousel">
            <img id="left" className="arrow" src={Left} onClick={() => move("left", props.events.length)}/>
            
            
            {props.events.map((event) => {
                return (
                        <Slide eventObj={event} />
                       )
            })}


            <img id="right" className="arrow" src={Right} onClick={() => move("right", props.events.length)}/>
             <div className="space"></div>  
            <div className="carousel-circles">
                {props.events.map((event) => {
                    return (
                            
                        <div className="circle" id={"circle" + event.num.toString()} onClick={() => circleClick(event.num)}></div>   

                        
                        )
                })}
            </div>

            
            
        </div>
    )

    
}

export default Carousel

var currentPos = 0;

function move(direction, resourceNum){
    
    if (direction === "left"){
       currentPos--; 
       if(currentPos < 0){
           currentPos = resourceNum - 1;
       }
    }
    else{
        currentPos++ 
       if(currentPos >= resourceNum){
           currentPos = 0;
       }
    }

        for (var i = 0; i < resourceNum; i++){
            var myCircle = document.getElementById("circle" + i);
            var myResource = document.getElementById("slide" + i);
            
            if (currentPos === i){
                myResource.style.display = "block";
                myCircle.style.backgroundColor = "white";
            }
            else{
                myResource.style.display = "none";
                myCircle.style.backgroundColor = "black";
            }
                       
        }
    

    
}

function circleClick(circleNum){

    document.getElementById("circle" + currentPos).style.backgroundColor = "black";
    document.getElementById("slide" + currentPos).style.display = "none";

    currentPos = circleNum;
    document.getElementById("circle" + currentPos).style.backgroundColor = "#fff";
    document.getElementById("slide" + currentPos).style.display = "block";
}