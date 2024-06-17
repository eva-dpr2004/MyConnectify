import React from 'react'
import Girls from '../../assets/trois-meufs.jpeg'; 
import Disques from '../../assets/Disques.jpeg'; 
import Girl from '../../assets/meuf.jpeg'; 
import Groupe from '../../assets/groupe.jpg'; 
import '../../styles/Profil/HeaderProfil.css'

function MyGallery() {
  return (
      <div className="gallery-container">
          <h2 className="gallery-title">Gallery</h2>
          <div className="gallery-grid">
              <div className="gallery-item">
                  <img src={Girls} alt="Gallery item 1" />
              </div>
              <div className="gallery-item">
                  <img src={Disques} alt="Gallery item 2" />
              </div>
              <div className="gallery-item">
                  <img src={Girl} alt="Gallery item 3" />
              </div>
              <div className="gallery-item">
                  <img src={Groupe} alt="Gallery item 4" />
              </div>
          </div>
      </div>
  );
}

export default MyGallery;