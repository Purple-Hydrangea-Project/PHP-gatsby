import React from 'react'
import './BubbleButtons.scss'

export default function BubbleButton({ icon, text }) {
    return (
        <div className="button-item">
            <button className="round-button">
                <img src={icon} alt={text} /><br />
                <p class="text-blurb">{text}</p>
            </button>
        </div>
    );
}