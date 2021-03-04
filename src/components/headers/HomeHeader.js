import React from 'react'
import { Button } from 'rsuite';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function HomeHeader() {
    const history = useHistory();

    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="homeheader-container">
            <Link to='/'>
                <div className="logo-div">
                    <img src={logo} alt="app-logo"/>
                </div>
            </Link>
            <div className="homeheader-nav">
                <Link to="/entries" style={{color: '#252223', textDecoration: 'none', marginTop: '0.8rem'}}>ENTRIES</Link>
                <Button className="primary-btn" onClick={redirectToLogin}>LOGIN</Button>
            </div>
        </div>
    )
}

export default HomeHeader;
