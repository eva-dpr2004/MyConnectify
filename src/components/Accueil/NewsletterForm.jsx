import React from 'react'
import videoSource from '../../assets/video.mp4'; 

function NewsletterForm() {
  return (
      <div className="newsletter-container">
          <video className="static-video">
          <source src={videoSource} type="video/mp4" />
          </video>
          <div className="overlay-newsletter">
              <h2>Newsletter</h2>
              <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
              <form>
                  <input type="email" id="email" placeholder="Entrez votre email..." required />
                  <button type="submit">Valider</button>
              </form>
          </div>
      </div>
  );
}

export default NewsletterForm;
