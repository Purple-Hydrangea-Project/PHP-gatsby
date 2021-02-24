import React from "react"
import "./RecentPosts.scss"
import { BlogCard } from '../../components'
import Right from '../../../static/rightarrow.png';
import Left from '../../../static/leftarrow.png';
import { Button } from "../Button";



const RecentPosts = (props) => {
    
    return (
        <div className="recentPosts">
            <h1>Recent Posts</h1>
            <div className="blogs">

            
            {props.events.map((blog) => {
                return (
                    <div id={"blog" + blog.num} className="recentBlogs">
                    <BlogCard image={blog.image} title={blog.title} author={blog.author} date={blog.date} likes={blog.likes} excerpt={blog.excerpt} />
                    </div>
                       )
            })}

            </div>

            <div className="blogArrows">
                <img id="blogLeft" className="blogArrow" src={Left} onClick={() => moveBlogs("left", props.events.length)}/>
                <Button text="see all" link="/blogpage" size="default"/>
                <img id="blogRight" className="blogArrow" src={Right} onClick={() => moveBlogs("right", props.events.length)}/>
            </div>
            

        </div>
    )
}


var postPos = 0;

function moveBlogs(direction, resourceNum){

    if(direction === "right"){
        postPos++;
    }
    else{
        postPos--;
    }
    
    var currSlide = Math.floor(resourceNum/3);
    
    if (postPos < 0){
        postPos = currSlide-1;
    }
    else if((postPos >= currSlide) && (currSlide % 3 == 0)){
        postPos = 0;
    }

    for(var i = 0; i < resourceNum; i++){
        var myResource = document.getElementById("blog" + i);
        if((i >= (postPos*3)) && (i < (postPos*3+3))){
            myResource.style.display = "block";
        }
        else{
            myResource.style.display = "none";
        }

    }
}



export default RecentPosts
