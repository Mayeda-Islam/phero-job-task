import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const MyContext = createContext(auth);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  console.log(user);

  // sign in with email
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  update user
  const updateUser = (updatedUserInfo) => {
    return updateProfile(auth.currentUser, updatedUserInfo);
  };
  //sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google sign in
  const signInWithGoogle = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    signIn,
    user,
    loading,
    logOut,
    signInWithGoogle,
    signUpWithEmail,
    updateUser,
  };

  return (
    <>
      <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
    </>
  );
};

export default AuthProvider;
