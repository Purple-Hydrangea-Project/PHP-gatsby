import React from "react"
import "./BlogPage.scss"

import { Socials, Button } from '../index';
import Heart from '../../../static/heart-thin.svg'

export default class BlogPage extends React.Component {
    render() {
      //const {author, date, blogtext, blogtitle, ...props} = this.props
    return(
      <div className="blogpage">
        <div className="green-box">
            <div className="post">
                <div className="post-content">
                    <h6>date</h6>
                    <h1>Blog Title</h1>
                    <h4>author</h4>
                    <p>the blog...</p>
                </div>
                <div className="post-footer">
                <div className="socials">
                    <Socials />
                </div>
                <div className="likes"><img src={Heart}/></div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}