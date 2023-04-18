import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { auth, googleAuthProvider } from './Firebase';
import {logoutAuth } from './store/slices/auth/thunks';
import { registerAuth } from '../store/slices/Thunks';

export const Registro = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(email, password));
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      dispatch(register({ email: user.email }));
    });
  }, []);

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(logoutAuth());
  };

  const user = useSelector((state) => state.auth.user);
  const isUserAuthenticated = useMemo(() => {
    return !!user;
  }, [user]);

  return (
    <>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          onChange={onInputChange}
          value={email}
        />
        <input
          name='password'
          type='password'
          onChange={onInputChange}
          value={password}
        />

        <button type='submit' disabled={isUserAuthenticated}>
          Registro
        </button>
        <button onClick={handleGoogleLogin} disabled={isUserAuthenticated}>
          Login with Google
        </button>
        {isUserAuthenticated && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </form>
    </>
  );
};
