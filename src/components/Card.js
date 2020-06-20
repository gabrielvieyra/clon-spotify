import React from 'react';

const Card = ({img, title, subtitle}) => {
    return (
        <div className="section-body-card">
            <img src={img} alt="" width="100%" className="card-img"></img>
            <p className="card-title">{title}</p>
            <p className="card-subtitle">{subtitle}</p>
        </div>
    )
}

export default Card;


