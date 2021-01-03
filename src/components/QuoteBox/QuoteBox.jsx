import React from 'react'
import './QuoteBox.scss'

export default class QuoteBox extends React.Component {
    render() {
        const {startimg, endimg, text, credit} = this.props
        return (
            <div class="container">
                <div>
                    <div className="col">
                        <img src={startimg} alt="quotation" />
                    </div>
                    <div className="quote">
                        <p>{text}</p>
                    </div>
                    <div className="col">
                        <img src={endimg} alt="quotation" />
                    </div>
                </div>
                <div className="credit">

                    <p>{credit}</p>
                </div>
            </div>
        )
    }
}