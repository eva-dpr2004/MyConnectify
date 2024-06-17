import React from 'react';
import videoSource from '../../assets/video.mp4'; 

function Banner() {
  return (
      <div className="banner-container">
          <h1 className="banner-title">Connectify</h1>
          <video autoPlay muted loop className="background-video">
            <source src={videoSource} type="video/mp4" />
          </video>
          <video className="static-video">
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="overlay-text">
              <h2>Bienvenue</h2>
              <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
          </div>
      </div>
  );
}

export default Banner;
