import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const MenuItem = ({title, icon}) => {
    return (
        <div className="menu-item">
            <a href="#!"><FontAwesomeIcon icon={icon} /><span className="menu-item-text">{title}</span></a>
        </div> 
    )
}

export default MenuItem;


