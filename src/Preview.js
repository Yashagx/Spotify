import React from 'react'
import Header from './Header';
import './css/songprev.css'
import './css/pewviewresp.css'
import createplay from './spotify icons/createplay.png'
import counting from './music thhb/counting on you.png'
import msdhoni from './music thhb/ms dhoni.png'
import whydontwe from './music thhb/why dont we.png'
import xxx from './music thhb/xxx.png'
import pgheart from './spotify icons/pgheart.png'
import greenplay from './spotify icons/greenplay.png'
import transphrt from './spotify icons/hearttransp.png'
import hordots from './spotify icons/hor_dots.png'
import Fakeleftbar from './Fakeleftbar';
export default function Preview(props) {
    let image;
    if (props.img === "ctng") {
        image = counting
    }
    if (props.img === "loveback") {
        image = whydontwe
    }
    if (props.img === "raaste") {
        image = msdhoni
    }
    if (props.img === "xxxso") {
        image = xxx
    }
    if (props.img === "heart") {
        image = pgheart
    }
    if (props.img === "playlist") {
        image = createplay
    }
    return (
        <div className="like-container">
            <div className="fakebarforprev">
                <Fakeleftbar></Fakeleftbar>
            </div>
            <div className="previewinsinglecony">
                <div className="likeright">
                    <Header search="hidden"></Header>
                    <div className="songprev">
                        <div className="itemofsongpreev">
                            <div className="imgspage">
                                <img src={image} alt="" />
                            </div>
                            <div className="aboutsong">
                                <div className="name">
                                    <h3>
                                        {props.name}
                                    </h3>
                                </div>
                                <div className="singer">
                                    <img src={image} alt="" className="smallimgforsinger" />
                                    <h3>
                                        {props.singer}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="songslists">
                    <div className="main-container">
                        <div className="likeright">
                            <div className="upperlisticons">
                                <div className="greenplaybtnprev">
                                    <img src={greenplay} alt="" />
                                </div>
                                <img src={transphrt} alt="" />
                                <img src={hordots} alt="" />
                            </div>
                            <div className="titleline">
                                <p># TITLE</p>
                            </div>
                            <div className="propsnamelist">
                                <div className="leftlist">
                                    <div className="number">
                                        <p>1</p>
                                    </div>
                                    <div className="nameofsongprop">
                                        <p>{props.name}</p>
                                    </div>
                                </div>
                                <div className="rightlist">
                                    <div className="duration">
                                        <p>. : .</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
