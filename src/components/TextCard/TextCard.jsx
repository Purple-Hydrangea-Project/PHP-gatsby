import React from "react"

import "./TextCard.scss"

export default class TextCard extends React.Component {
    render() {
    const {alignment, text, img, heading, ...props} = this.props
    if(alignment == "left"){
        return(
            <div className="TextCard">
                <div className="textcard">
                <div className="lefttext text">
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
            <div className="TextCard">
                <div className="textcard">
                  <img src={img}/>
                  <div className="righttext text">
                  <h1>{heading}</h1>
                  <p>{text}</p>
                </div>
              </div>
            </div>
            
          )
    }
    
  }
}