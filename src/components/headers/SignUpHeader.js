import React from 'react'
import { Button } from 'rsuite';
import {useHistory} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function HomeHeader() {
    const history = useHistory();

    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="homeheader-container">
            <div className="logo-div">
                <img src={logo} alt="app-logo"/>
            </div>
            <div className="homeheader-nav">
                <Button className="primary-btn" onClick={redirectToLogin}>LOGIN</Button>
            </div>
        </div>
    )
}

export default HomeHeader;