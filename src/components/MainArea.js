import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft, faChevronCircleRight, faUser, faCaretDown} from '@fortawesome/free-solid-svg-icons';

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

            <main>
                <section className="section">
                    <div className="section-header">
                        <h2 className="section-titulo">Escuchados recientemente</h2>
                    </div>

                </section>
            </main>
            
        </div>
    )
}

export default MainArea;


