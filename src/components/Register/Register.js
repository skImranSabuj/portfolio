import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" name="" id="" placeholder="Email" /><br />
                <input type="password" name="" id="" placeholder="Password" /> <br />
                <input type="submit" value="Register" />
                <Link to="/login">Have an account?</Link>
            </form>
        </div>
    );
};

export default Register;