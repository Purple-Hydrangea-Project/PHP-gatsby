import React from "react"
import "./MiniCarousel.scss"
import Resource from './Resource'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';

const MiniCarousel = (props) => {
    
    return (
        <div className="minicarousel">
            <img id="left" className="arrow" src={Left} onClick={() => move("left", props.events.length)}/>
            
            
            {props.events.map((event) => {
                return (
                        <Resource eventObj={event} />
                       )
            })}


            <img id="right" className="arrow" src={Right} onClick={() => move("right", props.events.length)}/>
        </div>
    )
}
export default MiniCarousel

var position = 2;

function move(direction, resourceNum){
    
    if (direction === "right"){
        
       
        for (var i = 0; i < resourceNum; i++){

            var myResource = document.getElementById("resource" + i);
            var currentPosition = parseInt(getComputedStyle(myResource).order);
            var resourcePos =  currentPosition + 1;
            
            if (resourcePos > 6){
                resourcePos = position;
            }
                       
            myResource.style.order = resourcePos;
        }


    }
    else{

        for (var i = 0; i < resourceNum; i++){

            var myResource = document.getElementById("resource" + i);
            var currentPosition = parseInt(getComputedStyle(myResource).order);
            var resourcePos =  currentPosition - 1;
            
            if (resourcePos < position){
                resourcePos = position + resourceNum - 1;
            }
                       
            myResource.style.order = resourcePos;
        }

    }

    
}