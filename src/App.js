import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireGuest from './context/RequireGuest';  
import RequireAuth from './context/RequireAuth';

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
          <Route path="/inscription" element={
            <RequireGuest>
              <Inscription />
            </RequireGuest>
          } />
          <Route path="/connexion" element={
            <RequireGuest>
              <Connexion />
            </RequireGuest>
          } />
            <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
            <Route path="/profil" element={<RequireAuth><Profil /></RequireAuth>} />
            <Route path="/profil/wall" element={<RequireAuth><Wall /></RequireAuth>} />
            <Route path="/profil/gallery" element={<RequireAuth><Gallery /></RequireAuth>} />
            <Route path="/profil/music" element={<RequireAuth><Music /></RequireAuth>} />
            <Route path="/profil/video" element={<RequireAuth><Video /></RequireAuth>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
