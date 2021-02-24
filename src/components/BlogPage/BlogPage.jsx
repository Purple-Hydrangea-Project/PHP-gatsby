import React from "react"
import "./BlogPage.scss"

import { Socials, Button } from '../index';
import Heart from '../../../static/heart-thin.svg'

export default class BlogPage extends React.Component {
  render() {
    //const {author, date, blogtext, blogtitle, ...props} = this.props
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
              <div class="socials">
                <Socials />
              </div>
              <div class="likes"><img src={Heart} /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}