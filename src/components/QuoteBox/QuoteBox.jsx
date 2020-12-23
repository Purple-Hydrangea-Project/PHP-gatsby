import React from 'react'
import './QuoteBox.scss'

import Quote from '../../../static/QuoteBox.svg'

const QuoteBox = () => (
        <div className="quote">
            <img src={Quote} alt="quote" />
        </div>
)
export default QuoteBox