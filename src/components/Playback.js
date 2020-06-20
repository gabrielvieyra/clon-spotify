import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faWindowMaximize} from '@fortawesome/free-solid-svg-icons';

const Playback = () => {
    return (
        <div className="playback">
            <div className="playback-left">
                <img className="cancion-img" src="img/top-arg.jpg" alt="" width="56px"></img>
                <div className="cancion">
                    <a href="#!" className="cancion-title">Song</a>
                    <a href="#!" className="cancion-subtitle">Artist</a>
                </div>
                <div className="cancion-icon">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
                </div>
            </div>

            <div className="playback-center">

            </div>

            <div className="playback-right">

            </div>
        </div>
    )
}

export default Playback;


