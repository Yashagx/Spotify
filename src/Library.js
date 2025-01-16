import React from 'react'
import Header from './Header'
import './css/library.css'
import './css/resplib.css'
import Pagesongs from './Pagesongs'
import {
    Link
} from "react-router-dom";
// import createplay from './spotify icons/createplay.png'
import Fakeleftbar from './Fakeleftbar';
export default function Library() {
    return (
        <>
            <div className="library-container">
                <div className="fakecontainerinlib">
                    <Fakeleftbar></Fakeleftbar>
                </div>
                <div className="library-moveright">
                    <Header search="hidden"></Header>
                    <div className="playlistpagecontent">
                        <div className="playlistpageheader">
                            <h3>Playlists</h3>
                        </div>
                        <div className="somelibrbarycls">
                            <Link to="/liked" className="plsylistboxblur-cont" >
                                <div className="plsylistboxblur">
                                    <div className="sometempc">

                                    </div>
                                    <div className="h3wherelike">
                                        <h3>Liked Songs</h3>
                                        <p>12 Liked Songs</p>
                                    </div>

                                </div>
                            </Link>
                            {/* <div className="playrightbox">
                                <Link to="/liked" className="exclusive-gris">
                                    <div className="exboxes exbg">
                                        <img src={createplay} alt="" />
                                        <div className="authorex">
                                            My Playlist #6
                                        </div>
                                        <div className="channelex">
                                            By Nisab Mohd
                                        </div>
                                    </div>
                                </Link>
                            </div> */}
                        </div>

                        <div className="exclusivespg">
                            <Pagesongs></Pagesongs>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Playbar /> */}
        </>
    )
}
