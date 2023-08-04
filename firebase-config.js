import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBiOoCoQ9j2rkuAwpdzTvtDJ-1u4t0IxKI',
  authDomain: 'next-practice-1-679f2.firebaseapp.com',
  projectId: 'next-practice-1-679f2',
  storageBucket: 'next-practice-1-679f2.appspot.com',
  messagingSenderId: '965317105158',
  appId: '1:965317105158:web:56f49ab6fa5c8af8819587',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
