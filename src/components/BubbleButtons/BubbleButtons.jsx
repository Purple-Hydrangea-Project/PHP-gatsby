import React from 'react'
import './BubbleButtons.scss'

export default class BubbleButtons extends React.Component {
    render() {
        const {Ficon, Micon, Ticon, Oicon, Cicon} = this.props
        return (
            <div class="container">
                <div>
                    <div className="row">
                        <button>
                        <img src={Ficon} alt="finance"/><br/>
                        <p>Finance</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}