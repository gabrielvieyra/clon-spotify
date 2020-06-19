import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft, faChevronCircleRight, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header-flechas">
                <FontAwesomeIcon className="flecha" icon={faChevronCircleLeft} />
                <FontAwesomeIcon className="flecha" icon={faChevronCircleRight} />
            </div>
            <div className="desplegable">
                <button className="desplegable-user">
                    <FontAwesomeIcon className="user-icon" icon={faUser} />
                    <span className="user-name">gabriel.vieyra</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </button>
            </div>
        </div>
    )
}

export default Header;


