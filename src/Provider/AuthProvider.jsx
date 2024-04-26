import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin with email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signin with google
    const googleLogIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };


    // signin with github
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };

    // logout
    const logOut = () => {
      setUser(null);
      setLoading(true);
      return signOut(auth);
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      googleLogIn,
      githubLogin,
      logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;