import React from "react"

import "./TextCard.scss"

export default class TextCard extends React.Component {
    render() {
    const {alignment, text, img, heading, ...props} = this.props
    if(alignment == "left"){
        return(
            <div class="TextCard">
                <div class="textcard">
                <div class="lefttext text">
                <h1>{heading}</h1>
                <p>{text}</p>
                </div>
                
                <img src={img}/>
              </div>
            </div>
            
          )
    }
    else{
        return(
            <div class="TextCard">
                <div class="textcard">
                
                <img src={img}/>
                <div class="righttext text">
                <h1>{heading}</h1>
                <p>{text}</p>
                </div>
              </div>
            </div>
            
          )
    }
    
  }
}