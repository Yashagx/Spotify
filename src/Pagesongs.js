import React from 'react'
import './css/resplib.css'
import './css/library.css'
import mythpat from './music thhb/mythpat.png'
import ranveer from './music thhb/ranveer alh.png'
import bose from './music thhb/bose.png'
import virus from './music thhb/virus.png'
import horror from './music thhb/horror.png'
import chanakya from './music thhb/chanakya.png'
export default function Pagesongs() {
    return (
        <>
            
            <a href="/" className="greetliketext">
                    <h3>Spotify orignal & exclusive shows</h3>
                </a>
                <div className="exclusives">
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={mythpat} alt="" />
                            <div className="authorex">
                                The Mythpat Podcast
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={ranveer} alt="" />
                            <div className="authorex">
                                The Ranveer Show
                            </div>
                            <div className="channelex">
                                Beer Biceps
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={bose} alt="" />
                            <div className="authorex">
                                Bhaskar Bose
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={virus} alt="" />
                            <div className="authorex">
                                Virus 2062
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={chanakya} alt="" />
                            <div className="authorex">
                                Chanakya Niti
                            </div>
                            <div className="channelex">
                                Kiran Chadva
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={horror} alt="" />
                            <div className="authorex">
                                Horror Time
                            </div>
                            <div className="channelex">
                                Sarthak Mishra
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
