import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft, faChevronCircleRight, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import ListadoCards from './ListadoCards';

const MainArea = () => {
    return (
        <div className="main-area">
           <header className="header">
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
            </header>

            <ListadoCards />
            <ListadoCards />
        </div>
    )
}

export default MainArea;


