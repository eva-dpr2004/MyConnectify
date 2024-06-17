import React from 'react';
import cassetteImage from '../../assets/cassette.jpg';
import groupeImage from '../../assets/groupe.jpg';
import headphoneGuyImage from '../../assets/mecquiauncasque.jpeg'; 

function Images() {
  return (
    <div className="image-section">
      <div className="top-row">
        <div className="image-item">
          <img src={cassetteImage} alt="Cassette" />
        </div>
        <div className="content-item actualite">
          <h2 className='YellowTitle'>Actualité</h2>
          <p className='paraWhite'>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.</p>
          <p className='paraWhite'>Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.</p>
          <p className='paraWhite'>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
        </div>
      </div>
      <div className="middle-row">
        <div className="content-item qui-sommes-nous">
          <h2 className='YellowTitle'>Qui sommes nous?</h2>
          <p className='paraWhite'>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.</p>
          <p className='paraWhite'>Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
        </div>
        <div className="image-item">
          <img src={groupeImage} alt="Groupe" />
        </div>
      </div>
      <div className="bottom-row">
        <div className="image-item">
          <img src={headphoneGuyImage} alt="Homme avec casque" />
        </div>
        <div className="content-item contact-form">
          <h2 className='YellowTitle'>Nous Contacter</h2>
          <form>
            <label for="email">Email :</label>
            <input type="email" id="email" placeholder="Entrez votre email" required />

            <label for="subject">Sujet :</label>
            <input type="text" id="subject" placeholder="Entrez le sujet de votre message" required />

            <label for="message">Message :</label>
            <textarea id="message" placeholder="Écrivez votre message" required></textarea>

            <button type="submit">Valider</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Images;