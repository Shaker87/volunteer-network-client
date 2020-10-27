import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=>{
          setLoggedInUser({...loggedInUser, email:result.user.email, name:result.user.displayName, uid:result.user.uid, isSignedIn:true})
            history.replace(from);
        })
        .catch(error=>console.log(error))
      }

    return (
        <div className="container">
            <h1>This is log in</h1>
            <h4>Login with Google</h4>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;





