import React from 'react'

export default class VineBlurb extends React.Component {
    render() {
        const {img} = this.props
        return (
            <div className="VineBlurb">
                <img src={img} alt="vines" className="vine"/>
            </div>
        )
    }
}