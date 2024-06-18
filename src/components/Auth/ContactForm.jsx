import React, { Component } from 'react';
import ContactImage from '../../assets/mecquiauncasque.jpeg';
import '../../styles/Basics/Forms.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="image-container">
          <img src={ContactImage} alt="Contact Visual" />
        </div>
        <div className="form-container">
          <h1>Nous Contacter</h1>
          <form>
            <div className="form-input">
              <label>Email :</label>
              <input type="email" placeholder="Entrez votre email..." />
            </div>
            <div className="form-input">
              <label>Sujet :</label>
              <input type="text" placeholder="Sujet de votre message..." />
            </div>
            <div className="form-input">
              <label>Message :</label>
              <textarea placeholder="Écrivez votre message..."></textarea>
            </div>
            <button type="button">Valider</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
