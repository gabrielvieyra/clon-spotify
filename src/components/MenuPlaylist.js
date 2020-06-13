import React from 'react';

const MenuPlaylist = ({src, title, type, playlist}) => {
    return (
        <div className="menu-item">
        { type === 'menu-playlist' ?
            <a href="#!"><img src={src} alt="" /><span className="menu-item-text">{title}</span></a>
        :
            <a href="#!"><span className="playlist">{playlist}</span></a>
        }
        </div> 
    )
}

export default MenuPlaylist;


