import React from "react"
import "./BlogCard.scss"
import clickedHeart from '../../../static/heart-black.svg'
import blankHeart from '../../../static/heart-thin.svg'
var clicked = false;

export default class BlogCard extends React.Component {
    render() {
    const {image, title, author, date, likes, excerpt, ...props} = this.props;
    
    return (
        <div class="blogCard">

            <img src={image} class="img" />
            <div class="info">
            <h2 class="title">{title} <b class="num" ><img class="likes" id={title} onClick={() => heartClick(title, likes)} src='heart-thin.svg'  /><b class="like" id={title + "likes"}>{likes}</b></b></h2>
            <h3 class="author">{author}</h3>
            <p class="date">{date}</p>
            <p class="excerpt">{excerpt}</p>
            </div>
        
      </div>
    );

    function heartClick(mytitle, likenum){
        var myHeart = document.getElementById(mytitle);
        if(myHeart.src.slice(myHeart.src.length - 14, myHeart.src.length) === 'heart-thin.svg'){
            myHeart.src =  'heart-black.svg';
            likenum++;
        }
        else{
            myHeart.src = 'heart-thin.svg';
        }
        
        document.getElementById(mytitle + "likes").innerHTML = likenum;
    }

    }
}

