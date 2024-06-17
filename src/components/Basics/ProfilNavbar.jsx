import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import '../../styles/Basics/Navbar.css';

function Navbar() {
    const { currentUser, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return (
        <nav className="profil-navbar">
            <div className="navbar-logo" onClick={() => navigate('/')}>
                Connectify
            </div>
            <div className="navbar-links">
                {currentUser ? (
                    <>
                        <span onClick={() => navigate('/profil')}>Profil</span>
                        <span onClick={() => navigate('/contact')}>Contact</span>
                        <span onClick={handleLogout} className="logout-button">Déconnexion</span>
                    </>
                ) : (
                    <>
                        <span onClick={() => navigate('/')}>Accueil</span>
                        <span onClick={() => navigate('/connexion')}>Connexion</span>
                        <span onClick={() => navigate('/inscription')}>Inscription</span>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
