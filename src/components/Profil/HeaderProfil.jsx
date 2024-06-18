import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
import defaultProfileImage from '../../assets/profil.png';  
import ProfilBackground from '../../assets/profil-background.png';
import '../../styles/Profil/HeaderProfil.css'

const HeaderProfil = () => {
  const { currentUser } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);
  const [imageUrl, setImageUrl] = useState(defaultProfileImage);  

  useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, 'users', currentUser.uid);
      getDoc(docRef).then(docSnap => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserProfile(userData);
          if (userData.img) {
            getDownloadURL(ref(storage, userData.img)).then(setImageUrl);
          } else {
            setImageUrl(defaultProfileImage);  
          }
        } else {
          console.log('No user profile found');
        }
      }).catch(error => {
        console.error('Error fetching user profile:', error);
      });
    }
  }, [currentUser]);



  return (
    <div className="profile-header" style={{ backgroundImage: `url(${ProfilBackground})` }}>
      <div className="profile-info">
        <img src={imageUrl} alt="Profile" />
        <div className="profil-para">
          <p>{userProfile ? userProfile.name || 'Nom Utilisateur' : 'Chargement...'}</p>
          <p>{currentUser?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfil;
