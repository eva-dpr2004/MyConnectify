import React, { useState } from 'react';
import Girls from '../../assets/trois-meufs.jpeg'; 
import Disques from '../../assets/Disques.jpeg'; 
import Girl from '../../assets/meuf.jpeg'; 
import Groupe from '../../assets/groupe.jpg'; 
import '../../styles/Profil/HeaderProfil.css';

function MyGallery() {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
            {[Girls, Disques, Girl, Groupe].map((image, index) => (
                <div className="gallery-item" key={index} onClick={() => handleImageClick(image)}>
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
        {modalImage && (
            <div className="modal" onClick={handleCloseModal}>
                <span className="modal-close">&times;</span>
                <img src={modalImage} alt="Enlarged pic" className="modal-content" />
            </div>
        )}
    </div>
  );
}

export default MyGallery;
