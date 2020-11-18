import React from "react"
// import { composeClassName } from "../ComposeClassName/composeClassName.js"
import "./Button.scss"

export default class Button extends React.Component {
  render() {
    const composeClassName = classes => {
      const theClasses = classes.filter(className => {
        return !!className
      })
      return theClasses.join(" ").trim()
    }
    const {text, link, size, ...props} = this.props
    const buttonSize = size ? size : "default" // default or donate
    const composed = composeClassName([`button ${buttonSize}`])
    return(
      <div className={composed} link={link} {...props}>
        <a href={link}>
          {text}
        </a>
      </div>
    )
  }
}
