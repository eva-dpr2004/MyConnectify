import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { db, storage } from '../../firebase'; // Assurez-vous que db et storage sont correctement importés depuis votre fichier firebase.js
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';

function ProfilInfo() {
  const { currentUser } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null); // État local pour stocker les informations du profil utilisateur
  const [imageUrl, setImageUrl] = useState(null); // État local pour stocker l'URL de l'image de profil

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Récupère les données de l'utilisateur depuis Firestore
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserProfile(userData);

          // Récupère l'URL de l'image de profil depuis Storage
          if (userData.img) {
            const imageRef = ref(storage, userData.img);
            const imageUrl = await getDownloadURL(imageRef);
            setImageUrl(imageUrl);
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (currentUser) {
      fetchUserProfile();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>Aucun utilisateur connecté.</div>;
  }

  return (
    <div>
      <h2>Profil Information</h2>
      <p>Email: {currentUser.email}</p>
      {userProfile && ( // Vérifie si userProfile est défini avant d'accéder à ses propriétés
        <>
          <p>Username: {userProfile.displayName}</p>
          {imageUrl && ( // Vérifie si imageUrl est défini avant d'afficher l'image
            <img src={imageUrl} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          )}
        </>
      )}
    </div>
  );
}

export default ProfilInfo;
