import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = (props) => {
    const { signInGoogle, signinFacebook } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signinFacebook}>Facebook</button>
            <button onClick={signInGoogle}>Google</button>
            <Link to="/register">new user?</Link>
        </div>
    );
};

export default Login;