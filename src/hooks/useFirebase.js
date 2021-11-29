import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initializeFirebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
            });
    }
    const signinFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user)
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(accessToken)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                setError(error.message);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('from authChange: ', user);
                setUser(user);
            }
        })
    }, [])
    return {
        user, error,
        signInGoogle, signinFacebook, logout

    }

}
export default useFirebase;