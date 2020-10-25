import React, { useEffect, useState } from "react";
import app from "./base.js";
import firebase, { auth } from 'firebase/app';

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth().signInWithRedirect(googleProvider);
}

export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const signInWithTwitter = async() => {
  try{
    await auth().signInWithRedirect(twitterProvider);
  } catch(e) {
    alert(e);
  }
}

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = async() => {
  try{
    await auth().signInWithRedirect(facebookProvider);
  } catch(e) {
    alert(e);
  }
}

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
