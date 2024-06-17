import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ChillinGuyImage from '../../assets/chillinguy.jpeg';
import '../../styles/Basics/Forms.css'

const InscriptionForm = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) return;
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPerc(progress);
      },
      (error) => console.error(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData(prev => ({ ...prev, img: downloadURL }));
        });
      }
    );
  }, [file]);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'users', res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to create an account');
    }
  };

  return (
    <div className="inscription-container">
      <div className="image-container">
        <img
          src={file ? URL.createObjectURL(file) : ChillinGuyImage}
          alt="Chillin Guy"
        />
      </div>
      <div className="form-container">
        <h1>Inscription</h1>
        <div className="form-inside">
          <form onSubmit={handleAdd}>
            {['name', 'email', 'password', 'passwordConfirm'].map((field) => (
              <div className="form-input" key={field}>
                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === 'password' || field === 'passwordConfirm' ? 'password' : 'text'}
                  id={field}
                  value={data[field]}
                  onChange={handleInput}
                  required
                />
              </div>
            ))}
            <div className="form-input">
              <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon" /></label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
            </div>
            <button type="submit" disabled={per !== null && per < 100}>Valider</button>
            <p className="switch-form">Déjà un compte ? <span onClick={() => navigate('/connexion')}>Connectez-vous</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionForm;
