import React from 'react'
import './VineBlurb.scss'

const VineBlurb = ({ img, alt, blurb }) => {
    return (
        <div className="vine-section">
            <div className="vineblurb">
                <img src={img} alt={alt} className="vine"/>
                <h2 className="blurb">{blurb}</h2>
            </div> 
        </div>
    )
}

export default VineBlurb