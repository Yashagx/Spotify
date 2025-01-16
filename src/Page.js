import React from 'react'
import './css/Page.css'
import './css/Resp.css'
import Pagesongs from './Pagesongs'
import pgheart from './spotify icons/pgheart.png'
import greenplay from './spotify icons/greenplay.png'
import counting from './music thhb/counting on you.png'
import msdhoni from './music thhb/ms dhoni.png'
import whydontwe from './music thhb/why dont we.png'
import xxx from './music thhb/xxx.png'
import Fakeleftbar from './Fakeleftbar'
import {
    Link
} from "react-router-dom";
import Header from './Header'

export default function Page() {
    return (
        <div className="pageparentparent">
            <div className="pagechildchild">
                <div className="containerofpage">
                    <Fakeleftbar />
                </div>
                <div className="pageinsidecont">
                    <div className="childofpage">
                        <Header search="hidden"></Header>
                        <div className="greet">
                            <h3>Hello!</h3>
                        </div>
                        <div className="indexformusic">
                            <Link to="/liked" className="ipbox bgcolorpg">
                                <div className="ipimg">
                                    <img src={pgheart} alt="" />
                                </div>
                                <div className="boxtext">
                                    <p>Liked Songs</p>
                                </div>
                                <div className="greenplay">
                                    <img src={greenplay} alt="" />
                                </div>
                            </Link>
                            <Link to="/prev1" className="ipbox bgcolorpg">
                                <div className="ipimg">
                                    <img src={counting} alt="" />
                                </div>
                                <div className="boxtext">
                                    <p>Counting On You</p>
                                </div>
                                <div className="greenplay">
                                    <img src={greenplay} alt="" />
                                </div>
                            </Link>
                            <Link to="/prev2" className="ipbox bgcolorpg ">
                                <div className="ipimg">
                                    <img src={msdhoni} alt="" />
                                </div>
                                <div className="boxtext">
                                    <p>MS Dhoni</p>
                                </div>
                                <div className="greenplay">
                                    <img src={greenplay} alt="" />
                                </div>
                            </Link>
                            <Link to="/prev3" className="ipbox bgcolorpg">
                                <div className="ipimg">
                                    <img src={xxx} alt="" />
                                </div>
                                <div className="boxtext">
                                    <p>XXXTENTACION</p>
                                </div>
                                <div className="greenplay">
                                    <img src={greenplay} alt="" />
                                </div>
                            </Link>
                            <Link to="prev4" className="ipbox bgcolorpg">
                                <div className="ipimg">
                                    <img src={whydontwe} alt="" />
                                </div>
                                <div className="boxtext">
                                    <p>Why Don't We</p>
                                </div>
                                <div className="greenplay">
                                    <img src={greenplay} alt="" />
                                </div>
                            </Link>
                        </div>
                        <Pagesongs></Pagesongs>
                        <Pagesongs></Pagesongs>
                        <Pagesongs></Pagesongs>
                    </div>
                </div>
            </div>
            {/* <Playbar /> */}
        </div>
    )
}
