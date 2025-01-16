import React from 'react'
import { useState } from 'react'
import './css/Bottom.css'
import './css/bottomresp.css'
import heart from './spotify icons/fav.png'
import news from './spotify icons/news.png'
import shuffle from './spotify icons/shuffle.png'
import prevm from './spotify icons/prevm.png'
import nextm from './spotify icons/nextm.png'
import repeat from './spotify icons/repeat.png'
import playic from './spotify icons/resumed.png'

import fullvol from './spotify icons/fullvol.png'
import mic from './spotify icons/mic.png'
import pcimg from './spotify icons/pcimg.png'
import rico from './spotify icons/rico.png'
import pauseic from './spotify icons/pauseico.png'

import t1 from './music thhb/call youu mine.jpg'
import t2 from './music thhb/counting on you.png'
import t3 from './music thhb/ms dhoni.png'
import t4 from './music thhb/xxx.png'
import t5 from './music thhb/why dont we.png'
import song1 from './Music/Call You Mine.mp3'
import song2 from './Music/Counting on You.mp3'
import song3 from './Music/Besabriyaan.mp3'
import song4 from './Music/Hope.mp3'
import song5 from './Music/Why Dont We.mp3'



export default function Playbar() {

    const [index, setindex] = useState(0)
    function prevsong() {
        let barrange = document.getElementById('barrange')
        if (index > 0) {
            setindex(index - 1)
            barrange.value = 0
            setMode('pause')
            func()
        }
        
    }
    function nextsong() {
        let barrange = document.getElementById('barrange')
        if (index < 5) {
            setindex(index + 1)
            barrange.value = 0
            setMode('pause')
            func()
        }
        if (index >= 4) {
            setindex(0)
            barrange.value = 0
            setMode('pause')
            setImg1(pauseic)
            func()
        }
    }

    const arrayofsongs = [
        {
            songplay: song1,
            thumb: t1,
            name: 'Call You Mine',
            authorname: 'The Chainsmokers, Bebe Rexha'

        },
        {
            songplay: song2,
            thumb: t2,
            name: 'Counting on You',
            authorname: 'Taylor Cash'

        },
        {
            songplay: song3,
            thumb: t3,
            name: 'Besabriyaan',
            authorname: 'Arman Malik'

        },
        {
            songplay: song4,
            thumb: t4,
            name: 'Hope',
            authorname: 'XXXTENTACION'

        },
        {
            songplay: song5,
            thumb: t5,
            name: 'Love Back',
            authorname: 'Why Dont We'

        }
    ]
    const [Img1, setImg1] = useState(pauseic);
    const [mode, setMode] = useState('pause')
    function func() {
        let barrange = document.getElementById('barrange')
        barrange.value = 0
        let song = document.getElementById('songsbar')
        if (mode === 'pause') {
            setMode('play')
            setImg1(playic)
            song.play();
            document.title = arrayofsongs[index].name
            song.addEventListener('timeupdate', () => {
                barrange.value = parseInt((song.currentTime / song.duration) * 100);
                if (song.currentTime === song.duration) {
                    nextsong()
                }
            })


        }
        if (mode === 'play') {
            setMode('pause')
            document.title = 'Spotify - Web player'
            setImg1(pauseic)
            song.pause();
        }
    }






    function bvolume() {
        let bvol = document.getElementById('bvol').value;
        bvol = bvol / 100;
        document.getElementById('songsbar').volume = bvol

    }
    function seek() {
        let barrange = document.getElementById('barrange')
        let song = document.getElementById('songsbar')
        song.currentTime = (barrange.value * song.duration) / 100;
    }

    return (
        <div>
            <div className="bottom">
                <div className="left">
                    <div className="thumbnail">
                        <img className="tb" src={arrayofsongs[index].thumb} alt="" />
                    </div>
                    <div className="songName">
                        <p className="sname">{arrayofsongs[index].name}</p>
                        <p className="desc">
                            {arrayofsongs[index].authorname}
                        </p>
                    </div>
                    <div className="btnsforthis">
                        <button className="heartp"><img src={heart} alt="" /></button>
                        <button className="heartp"><img id="pnews" src={news} alt="" /></button>
                    </div>
                </div>
                <div className="middle">
                    <div className="pbuttons">
                        <div className="pchildb">
                            <img src={shuffle} alt="" />
                            <img src={prevm} alt="" id="prevsongbtn" onClick={prevsong} />
                            <div className="playpause">
                                <img src={Img1} alt="" id="play" onClick={func} />
                            </div>
                            <img src={nextm} alt="" id="nextsongbtn" onClick={nextsong} />
                            <img src={repeat} alt="" />
                        </div>
                    </div>
                    <div className="movebar">
                        <input type="range" id="barrange" onChange={seek} min="0" max="100" value="0" />
                    </div>
                </div>
                <div className="right">
                    <div className="ricons">
                        <div className="rbuttons">
                            <img src={mic} alt="" className="rbtns" />
                            <img src={rico} alt="" className="rbtns" />
                            <img src={pcimg} alt="" className="rbtns" />
                            <img src={fullvol} alt="" className="rbtns" />
                        </div>
                        <input type="range" id="bvol" onChange={bvolume} />
                    </div>
                </div>
            </div>
            <div className="audionow">
                <audio id="songsbar" src={arrayofsongs[index].songplay} controls></audio>
            </div>
        </div>
    )
}
