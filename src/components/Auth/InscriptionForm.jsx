import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ChillinGuyImage from '../../assets/chillinguy.jpeg';
import '../../styles/Basics/Forms.css';

class InscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        img: null
      },
      per: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.file && this.state.file !== prevState.file) {
      const file = this.state.file;
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({ per: progress });
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.setState(prevState => ({
              data: { ...prevState.data, img: downloadURL }
            }));
          });
        }
      );
    }
  }

  handleInput(e) {
    const { id, value } = e.target;
    this.setState(prevState => ({
      data: { ...prevState.data, [id]: value }
    }));
  }

  async handleAdd(e) {
    e.preventDefault();
    const { data } = this.state;
    if (data.password !== data.passwordConfirm) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    if (!this.validatePassword(data.password)) {
      alert('Le mot de passe doit contenir au minimum 12 caractères, inclure au moins un caractère spécial, une lettre minuscule et une majuscule.');
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'users', res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
      this.props.navigate('/');
    } catch (err) {
      console.error(err);
      alert('Échec de la création du compte');
    }
  }

  validatePassword(password) {
    const hasMinLength = password.length >= 12;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    return hasMinLength && hasSpecialChar && hasLowercase && hasUppercase;
  }

  render() {
    const { data, file, per } = this.state;
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
            <form onSubmit={this.handleAdd}>
              {['name', 'email', 'password', 'passwordConfirm'].map((field) => (
                <div className="form-input" key={field}>
                  <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === 'password' || field === 'passwordConfirm' ? 'password' : 'text'}
                    id={field}
                    value={data[field]}
                    onChange={this.handleInput}
                    required
                  />
                </div>
              ))}
              <div className="form-input">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => this.setState({ file: e.target.files[0] })}
                  hidden
                />
              </div>
              <button type="submit" disabled={per !== null && per < 100}>Valider</button>
              <p className="switch-form">Déjà un compte ? <span onClick={() => this.props.navigate('/connexion')}>Connectez-vous</span></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function WithNavigate(props) {
  const navigate = useNavigate();
  return <InscriptionForm {...props} navigate={navigate} />;
}

export default WithNavigate;
