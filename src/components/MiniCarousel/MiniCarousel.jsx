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
var initial = true;
window.addEventListener('resize', changeCarousel);

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

    changeCarousel();
}


function changeCarousel(){
    var resourcenum = 5;
    console.log(initial);
    if (initial){
        initial = false;
    }
    else{

    
    var myresource;


   
    console.log(window.innerWidth);
    console.log("test");

    if(window.innerWidth <= 400){
        console.log("yeehaw");
        
        for (var i = 0; i < resourcenum; i++){
            myresource = document.getElementById("resource" + i);
            var currentposition = parseInt(getComputedStyle(myresource).order);
            console.log(currentposition);

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
        console.log("bigg");
        for (var j = 0; j < resourcenum; j++){
            myresource = document.getElementById("resource" + j);
            myresource.style.display = "block";
           // document.getElementsByClassName("resource")[j].style.width = "10vw";
            //document.getElementsByClassName("resource")[j].style.height = "10vw";
        }
    }
}
    
}