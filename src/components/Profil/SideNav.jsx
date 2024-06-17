import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/Profil/SidenavStyle';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="burger-menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      {isOpen && (
        <div className="sidenav">
          <div className="sidenav-item" onClick={() => navigate('/profil')}>ALL</div>
          <div className="sidenav-item" onClick={() => navigate('/profil/wall')}>Walls</div>
          <div className="sidenav-item" onClick={() => navigate('/profil/gallery')}>Gallery</div>
          <div className="sidenav-item" onClick={() => navigate('/profil/video')}>Video</div>
          <div className="sidenav-item" onClick={() => navigate('/profil/music')}>Music</div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
