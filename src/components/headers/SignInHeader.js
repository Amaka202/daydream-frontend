import React from 'react'
import {useHistory} from 'react-router-dom';
import { Button } from 'rsuite';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function SignInHeader() {
    const history = useHistory();

    const redirectToSignUp = () => {
        history.push('/signup')
    }

    return (
        <div className="homeheader-container">
            <div className="logo-div">
                <img src={logo} alt="app-logo"/>
            </div>
            <div className="homeheader-nav">
            <Button className="primary-btn" onClick={redirectToSignUp}>Create Account</Button>
            </div>
        </div>
    )
}

export default SignInHeader;