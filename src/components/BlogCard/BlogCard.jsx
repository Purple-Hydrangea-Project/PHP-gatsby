import React from "react"
import "./BlogCard.scss"

export default class BlogCard extends React.Component {
    render() {
    const {image, title, author, date, likes, excerpt, ...props} = this.props;
    
    return (
        <div class="card">

            <img src="{image}" class="img" />
            <div class="info">
            <h2 class="title">{title} <b class="num"><img class="likes" src="heart-thin.svg" />{likes}</b></h2>
            <h3 class="author">{author}</h3>
            <p class="date">{date}</p>
            <p class="excerpt">{excerpt}</p>
            </div>
        
      </div>
    );

    }
}
