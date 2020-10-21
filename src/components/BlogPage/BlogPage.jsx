import React from "react"
import "./BlogPage.scss"

import { Socials, Button } from '../index';
// import { BlogPage } from "..";


// import Heart from '../../../static/heart-thin.svg'


// const BlogPage = () => (
//     <div class="blogpage">
//         <div class="green-box">
//             <div class="post">
//                 <div class="post-content">
//                 <h6>date</h6>
//                 <h1>Blog Title</h1>
//                 <h4>author</h4>
//                 <p>the blog...</p>
//                 </div>
                
//                 <div class="post-footer">
//                 <div class="socials">
                
//                     <a href="#" class="fa fa-facebook icon"></a>
//                     <a href="#" class="fa fa-twitter icon"></a>
//                     <a href="#" class="fa fa-instagram icon"></a>
//                     <a href="#" class="fa fa-link icon"></a>

//                 </div>
                
//                 <div class="likes"><img src={Heart}/></div>

//                 </div>

//             </div>
//             </div>
//     </div>


// );
// export default BlogPage

export default class BlogPage extends React.Component {
    render() {
      // const {author, date, blogtext, blogtitle, slug, headerImage, keywords, readingLength, ...props} = this.props // last two are optional
      return (
        <div class="blogpage">
            <div class="green-box">
                <div class="post">
                    <div class="post-content">
                    <h6>date</h6>
                    <h1>Blog Title</h1>
                    <h4>author</h4>
                    <p>the blog...</p>
                    </div>
                    
                    <div class="post-footer">
                    {/* <div class="socials">
                    
                        <a href="#" class="fa fa-facebook icon"></a>
                        <a href="#" class="fa fa-twitter icon"></a>
                        <a href="#" class="fa fa-instagram icon"></a>
                        <a href="#" class="fa fa-link icon"></a>
 
                    </div> 
                    use the socials component that Anna made, make the link a variable*/} 
                    
                    
                    {/* <div class="likes"><img src={Heart}/></div> */}

                    </div>

                </div>
                </div>
        </div>
      );
    }
  }