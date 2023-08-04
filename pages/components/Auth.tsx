import React, { useState } from 'react';

import type { NextPage } from 'next';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { auth, googleProvider } from '../../firebase-config';

const Auth: NextPage = () => {
  const { handleSubmit, register, reset } = useForm();
  const [userLogedIn, setUserLogedIn] = useState(false);

  const authUser = getAuth();

  onAuthStateChanged(authUser, (user) => {
    setUserLogedIn(user ? true : false);
  });

  const registerUser: SubmitHandler<FieldValues> = async (data) => {
    console.log('🚀 ~ file: Auth.tsx:27  ~ data:', data.email.lenght);
    // if (data.email.length && data.password.length) {
    //   setEmptyInputFiels(false);

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert('User registered');
      reset();
    } catch (error) {
      alert(`User unable to be created ${error}`);
      console.error(error);
    }
    // } else {
    //   setEmptyInputFiels(true);
    // }
  };

  const regularSignIn: SubmitHandler<FieldValues> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      reset();
    } catch (error) {
      alert(`User not sign in because ${error}`);
      console.error('EVO ga Erroric ERRRORIC');
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('User is loged in');
    } catch (error) {
      alert(`User unable to be created ${error}`);
      console.error(error);
    }
  };

  const logOut = async () => {
    alert('User is loged out');
    await signOut(auth);
  };

  return (
    <>
      <form className="register-container">
        <h3>Register user</h3>
        <p> {userLogedIn ? 'User is loged IN' : 'User is NOT loged in'} </p>
        <div className="register-inputs">
          {userLogedIn && (
            <label className="register-label">
              Can not enter email if already Loged in{' '}
            </label>
          )}
          <input
            {...register('email')}
            type="email"
            placeholder="Email..."
            className="register-single-input"
            disabled={userLogedIn}
          />
          {userLogedIn && (
            <label className="register-label">
              Can not enter password if already Loged in{' '}
            </label>
          )}
          <input
            {...register('password')}
            type="password"
            placeholder="Password..."
            className="register-single-input"
            disabled={userLogedIn}
          />
        </div>
      </form>
      <button className="register-buttons" onClick={handleSubmit(registerUser)}>
        Register user with email and password
      </button>
      <button
        className="register-buttons"
        onClick={handleSubmit(regularSignIn)}
      >
        Sign in user wit email and password
      </button>
      <button className="register-buttons" onClick={signInWithGoogle}>
        Sign in user with Google
      </button>
      <button className="register-buttons" onClick={logOut}>
        Logout
      </button>
    </>
  );
};

export default Auth;
