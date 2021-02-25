import React from 'react'
import { Button } from 'rsuite';
import {Link} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function SignInHeader() {
    return (
        <div className="homeheader-container">
            <div className="logo-div">
                <img src={logo} alt="app-logo"/>
            </div>
            <div className="homeheader-nav">
                <Button className="primary-btn">CREATE</Button>
            </div>
        </div>
    )
}

export default SignInHeader;