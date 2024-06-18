import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidenav, SidenavItem } from '../../styles/Profil/SidenavStyle';
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
      <div onClick={toggleMenu} style={{ cursor: 'pointer', color: isOpen ? 'white' : 'black', position: 'fixed', top: '10px', left: '5px', fontSize: '2rem', zIndex: '1001' }}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      {isOpen && (
        <Sidenav>
          <SidenavItem onClick={() => navigate('/profil')}>All</SidenavItem>
          <SidenavItem onClick={() => navigate('/profil/wall')}>Walls</SidenavItem>
          <SidenavItem onClick={() => navigate('/profil/gallery')}>Gallery</SidenavItem>
          <SidenavItem onClick={() => navigate('/profil/video')}>Video</SidenavItem>
          <SidenavItem onClick={() => navigate('/profil/music')}>Music</SidenavItem>
        </Sidenav>
      )}
    </div>
  );
}

export default SideNav;
