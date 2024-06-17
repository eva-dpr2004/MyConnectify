import React from 'react'
import MusiqueVideo from '../../assets/Never.mp4'; 

function MyVideo() {
  return (
    <div className="video-container">
      <div className="background-video-profil">Video</div>
      <video controls muted={false}>
        <source src={MusiqueVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default MyVideo;