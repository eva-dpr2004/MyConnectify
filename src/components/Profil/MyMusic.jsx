import React from 'react'
import PochetteA from '../../assets/pochette-michael-jackson.jpg'; 
import PochetteB from '../../assets/Come.jpg'; 

import '../../styles/Profil/HeaderProfil.css'
import '../../styles/Profil/ProfilComponents.css'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function MyMusic() {
  return (
    <div className="music-container">
      <h1>Music</h1>
      <div className="music-item">
        <img src={PochetteA} alt="RioGane - Down" className="album-cover" />
        <div className="music-info">
          <p>RioGane - Down</p>
          <div className="audio-controls">
            <PauseIcon className="audio-icon" />
            <div className="audio-bar"></div>
          </div>
        </div>
      </div>
      <div className="music-item">
        <img src={PochetteB} alt="Grange - WAP" className="album-cover" />
        <div className="music-info">
          <p>Grange - WAP</p>
          <div className="audio-controls">
            <PlayArrowIcon className="audio-icon" />
            <div className="audio-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMusic;