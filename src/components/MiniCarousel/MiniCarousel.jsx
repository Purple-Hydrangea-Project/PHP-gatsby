import React from "react"
import "./MiniCarousel.scss"
import Resource from './Resource'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';

// export default function MiniCarousel() {
//     const initial = true;
//     const position = 2;
//     move(direction, total) {
//         if (direction === "left") {

//         }
//     }
// }

const MiniCarousel = (props) => {

    var initial = true;

var position = 2;
function move(direction, resourceNum){
    
    if (direction === "left"){
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
    changeCarousel();
}

function changeCarousel(){
    var resourcenum = 5;
    if (initial){
        initial = false;
    }
    else{
        var myresource;
        if(window.innerWidth <= 400){
            
            for (var i = 0; i < resourcenum; i++){
                myresource = document.getElementById("resource" + i);
                var currentposition = parseInt(getComputedStyle(myresource).order);

                if(currentposition === 5 || currentposition === 6)
                {
                    myresource.style.display = "none";
                }
                else{
                    myresource.style.display = "block";
                }
            }
    }
    else{
        for (var j = 0; j < resourcenum; j++){
            myresource = document.getElementById("resource" + j);
            myresource.style.display = "block";
        }
    }
}
} 

    
    return (
        <div className="minicarousel" onLoad={()=> window.addEventListener('resize', changeCarousel)}>
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

