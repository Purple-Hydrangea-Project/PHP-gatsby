import React from 'react'
import './VineBlurb.scss'

export default class VineBlurb extends React.Component {
    render() {
        const {img, text} = this.props
        return (
            <div className="VineBlurb">
                <img src={img} alt="vines" class="vine"/>
                <div className="blurb">
                    <h1 class="text">{text}</h1>
                </div>
            </div>
        )
    }
}