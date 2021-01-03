import React from 'react'
import './VineBlurb.scss'

export default class VineBlurb extends React.Component {
    render() {
        const {img, text} = this.props
        return (
            <div className="VineBlurb">
                <img src={img} alt="vines" />
                <div className="blurb">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}