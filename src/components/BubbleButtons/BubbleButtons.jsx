import React from 'react'
import './BubbleButtons.scss'

export default class BubbleButtons extends React.Component {
    render() {
        const {img1, img2, img3, img4, img5} = this.props
        return (
            <div class="container">
                <div>
                    <div className="row">
                        <div className="button-item">
                            <button className="round-button">
                                <img src={img1} alt="sm marketing"/><br/>
                                <p class="text-blurb">social media marketing</p>
                            </button>
                        </div>

                        <div className="button-item">
                            <button className="round-button">
                                <img src={img2} alt="finance"/><br/>
                                <p class="text-blurb">finance</p>
                            </button>
                        </div>

                        <div className="button-item">
                            <button className="round-button">
                                <img src={img3} alt="tech dev"/><br/>
                                <p class="text-blurb">tech development</p>
                            </button>
                        </div>

                    </div><br />
                    <div className="row">

                        <div className="button-item">
                            <button className="round-button">
                                <img src={img4} alt="creative"/><br/>
                                <p class="text-blurb">creative</p>
                            </button>
                        </div>

                        <div className="button-item">
                            <button className="round-button">
                                <img src={img5} alt="outreach"/><br/>
                                <p class="text-blurb">outreach</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}