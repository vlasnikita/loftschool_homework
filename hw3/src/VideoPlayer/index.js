import React, {Component} from 'react'
import video from './Video.mp4'
import './VideoPlayer.css'

export default class VideoPlayer extends Component {
    render() {
        return (
            <div className="video-player">
                <video 
                    ref={v => this.video = v}
                    className="video-player__source"
                >
                    <source src={video} />
                </video>
                <div>
                    <button onClick={() => this.video.play()}>Play</button>
                    <button onClick={() => this.video.pause()}>Stop</button>
                </div>
            </div>
        )
    }
}
