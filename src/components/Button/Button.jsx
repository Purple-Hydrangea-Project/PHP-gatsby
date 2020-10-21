import React from "react"
import { composeClassName } from "../../../../archive/caribou/src/Components/utilities"
import "./Button.scss"

export default class Button extends React.Component {
  render() {
    const {text, link, size, ...props} = this.props
    const buttonSize = size ? size : "default"
    const composed = composeClassName([`button ${buttonSize}`])
    return(
      <div className={composed} link={link} {...props}>
        {text}
      </div>
    )
  }
}