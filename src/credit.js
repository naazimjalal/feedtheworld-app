import React from 'react'
import './credit.css';
function credit({name, img, loc}) {
    return (
        <div className="credit-container">
            <img src ={img} />
            <div className="credit-details">
                <div>{name}</div>
                <div>{loc}</div></div>
                
        </div>

    )
}

export default credit
