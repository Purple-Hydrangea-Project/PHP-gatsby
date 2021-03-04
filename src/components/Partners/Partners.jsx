import React from 'react'
import './Partners.scss'

export default function Partners({ logo, alt }) {
    return (
        <div className="partners-grid">
            <img src={logo} alt={alt} />
        </div>
    );
}