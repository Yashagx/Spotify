import React from 'react'
import './css/Leftbar.css'
import logo from './logo.png'
import home from './spotify icons/home.png'
import search from './spotify icons/search.png'
import lib from './spotify icons/library.png'
import heart from './spotify icons/fav.png'
import plus from './spotify icons/plus.png'

import {
    Link
} from "react-router-dom";
export default function leftbar() {
    return (
        <>
            <div className="leftbar">
                <div className="main">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="tags">
                        <Link to="/Spotify" className="tag-container">
                            <img src={home} alt="home" />
                            <p className="tags">Home</p>
                        </Link>
                        <Link to="/search" className="tag-container">
                            <img src={search} alt="home" />
                            <p className="tags">Search</p>
                        </Link>
                        <Link to="/library" className="tag-container">
                            <img src={lib} alt="home" />
                            <p className="tags">Your Library</p>
                        </Link>
                        <div className="tag2container">
                            <Link to="/playlist" className="tag-container2">
                                <div className="plus-container">
                                    <img src={plus} alt="plus" className="plus" />
                                </div>
                                <p className="tags">Create Playlist</p>
                            </Link>
                            <Link to="/liked" className="tag-container2 hr" >
                                <div className="heart-container">
                                    <img src={heart} alt="home" className="heart" />
                                </div>
                                <p className="tags">Liked Songs</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
