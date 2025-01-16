import React from 'react'
import './css/background.css'
import Preview from './Preview'
import './css/playlistpagecss.css'
export default function Playlist() {
    return (
        <div className="playlistpagecont">
            <Preview singer="By Nisab Mohd" name="My Playlist #6" img="playlist" />
        </div>
    )
}
