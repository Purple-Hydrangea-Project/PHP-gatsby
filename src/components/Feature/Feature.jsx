import React from "react"

import "./Feature.scss"

export default class Feature extends React.Component {
    render() {
      const {image, title, author, date, likes, ...props} = this.props;
  
        return(
            <div style={{ backgroundImage: `url(${image})`, height: "30rem" }} class="Feature">
                <div class="text">
                  <h1 class="title">{title} <b class="num"><img class="likes" src="heart-thin.svg" /> </b></h1>
                  <h2 class="author">{author}</h2>
                  <h3 class="date">{date}</h3>
                </div>
                
            </div>
            
          )
    
    
    
  }
}