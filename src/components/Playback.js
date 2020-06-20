import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faWindowMaximize, faRandom, faStepBackward, faPlayCircle, faStepForward, faRedoAlt} from '@fortawesome/free-solid-svg-icons';

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
                <div className="playback-icons">
                    <FontAwesomeIcon className="playback-icon" icon={faRandom} />
                    <FontAwesomeIcon className="playback-icon" icon={faStepBackward} />
                    <FontAwesomeIcon className="playback-icon-play" icon={faPlayCircle} />
                    <FontAwesomeIcon className="playback-icon" icon={faStepForward} />
                    <FontAwesomeIcon className="playback-icon" icon={faRedoAlt} />
                </div>
                <div className="playback-duration">
                    <span className="playback-time">1:36</span>
                    <input className="duration" type="range" />
                    <span className="playback-time">3:50</span>
                </div>
            </div>

            <div className="playback-right">
                
            </div>
        </div>
    )
}

export default Playback;


