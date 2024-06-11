import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from './pages/Accueil/Accueil';
import Wall from './pages/Profil/Wall';
import Inscription from './pages/Auth/Inscription';
import Connexion from './pages/Auth/Connexion';
import Profil from './pages/Profil/Profil';
import Contact from './pages/Profil/Contact';
import Gallery from './pages/Profil/Gallery';
import Music from './pages/Profil/Music';
import Video from './pages/Profil/Video';
import PageNotFound from './pages/Error/PageNotFound';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/music" element={<Music />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
