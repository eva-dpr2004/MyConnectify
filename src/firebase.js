import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'connectify-d6944.firebaseapp.com',
  projectId: 'connectify-d6944',
  storageBucket: 'connectify-d6944.appspot.com',
  messagingSenderId: '1049689379668',
  appId: '1:1049689379668:web:d6508d95c93f4d5f796ec1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
