import React from 'react'
import rightarr from './spotify icons/nextarr.png'
import leftarr from './spotify icons/prevarr.png'
import user from './user.jpg'
import sericon from './spotify icons/transsearch.png'
import './css/header.css'
export default function Header(props) {
    function history(){
        window.history.back();
    }
    function forward(){
        window.history.forward();
    }

    return (
        <div>
            <div className="header">
                    <div className="arrows">
                        <button className="arr" id="backhistory" onClick={history}>
                            <img src={leftarr} alt="" className="arrowspeice" />
                        </button>
                        <button className="arr">
                            <img src={rightarr} alt="" onClick={forward} className="arrowspeice" />
                        </button>
                    </div>

                   <div className={props.search}>
                       <img src={sericon} alt="" />
                       <input type="text" placeholder="Artists, song, or podcast"/>
                   </div>

                    <div className="contact-info">
                        <div className="buttons">
                            <div className="ubtn-container">
                                <button className="ubtn">UPGRADE</button>
                            </div>
                            <div className="userbtn-container">
                                <button className="userbtn"><img src={user} alt="" /><p>Nisab</p><p className="unArr">▼</p></button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
