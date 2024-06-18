import React, { useState, useEffect } from 'react';
import videoSource from '../../assets/video.mp4';

function Banner() {
    const greetings = [
        "Bienvenue", // Français
        "Welcome", // Anglais
        "Bienvenido", // Espagnol
        "Willkommen", // Allemand
        "Benvenuto", // Italien
        "Bem-vindo", // Portugais
        "Добро пожаловать", // Russe
        "歡迎", // Chinois Traditionnel
        "ようこそ", // Japonais
        "환영합니다" // Coréen
    ];

    const [currentGreeting, setCurrentGreeting] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
        }, 1000);

        return () => clearInterval(timer);
    }, [greetings.length]);

    return (
        <div className="banner-container">
            <h1 className="banner-title">Connectify</h1>
            <video autoPlay muted loop className="background-video">
                <source src={videoSource} type="video/mp4" />
            </video>
            <video autoPlay muted loop className="static-video video-static">
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="overlay-text">
                <h2>{greetings[currentGreeting]}</h2>
                <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
            </div>
        </div>
    );
}

export default Banner;
