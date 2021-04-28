import React from 'react'
import './QuoteBox.scss'

export default class QuoteBox extends React.Component {
    render() {
        const { text, credit } = this.props
        return (
            <div class="container">
                <div>
                    <div className="col">
                        <img src="https://cloud-drhov6n9m-hack-club-bot.vercel.app/1startquote.png" alt="quotation" className="startquote"/>
                    </div>
                    <div className="quote">
                        <p>{text}</p>
                    </div>
                    <div className="col">
                        <img src="https://cloud-drhov6n9m-hack-club-bot.vercel.app/0endquote.png" alt="quotation" className="endquote"/>
                    </div>
                </div><br/>
                <div className="credit">
                    <p>{credit}</p>
                </div>
            </div>
        )
    }
}