/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GithubAuthProvider
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider()

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true)

  const profileUpdate= (name, photo)=>{
    setLoading(true)
   return updateProfile(auth.currentUser, {
      displayName: name , photoURL: photo
    })
  }

  const crateNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const signInGithub = () =>{
    setLoading(true)
    return signInWithPopup(auth,GithubAuthProvider)
  }

  const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
  };
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const authInfo = {
    signInGoogle,
    signInGithub,
    signInUser,
    crateNewUser,
    logOut,
    user,
    loading,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
