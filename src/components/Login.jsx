import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { authfb, provider } from '../firebase';
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () =>{
        signInWithPopup(authfb,provider).then(({user})=> {
            dispatch(login({
                displayName: user.displayName,
                email:user.email,
                photoUrl: user.photoURL,
            }));
        }).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" />
                <Button className="login__button" variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;
