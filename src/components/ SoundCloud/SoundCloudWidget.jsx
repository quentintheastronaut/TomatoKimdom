import React from 'react'
import ReactPlayer from "react-player"
import './SoundCloud.css'

function SoundCloudWidget() {
    return (
        <div className="SoundCloudWidget">   
            <ReactPlayer
                url="https://soundcloud.com/le-hoang-phuc-646298054/vtv-o-nha-1m-ep05-imma-heartbreaker"
                width="400px"
                height="125px"
            />
        </div>
    )
}

export default SoundCloudWidget
