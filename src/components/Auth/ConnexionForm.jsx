import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; 
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MaterielSonImg from '../../assets/materielson.jpeg'; 
import '../../styles/Basics/Forms.css'

const ConnexionForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: 'LOGIN', payload: userCredential.user });
      navigate('/profil');
    } catch (error) {
      alert("Erreur de connexion : " + error.message);
    }
  };

  return (
    <div className="connexion-container">
      <div className="image-container">
        <img src={MaterielSonImg} alt="Boombox" />
      </div>
      <div className="form-container">
        <h1>Connexion</h1>
        <div className="form-inside">
          <form onSubmit={handleLogin}>
            <div className="form-input">
              <label>Email :</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-input">
              <label>Mot de passe :</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Se Connecter</button>
            <p className="switch-form">Pas de compte ? <span onClick={() => navigate('/inscription')}>Inscrivez-vous</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnexionForm;
