import React from 'react'
import { Button } from 'rsuite';
import {Link} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function HomeHeader() {
    return (
        <div className="homeheader-container">
            <div className="logo-div">
                <img src={logo} alt="app-logo"/>
            </div>
            <div className="homeheader-nav">
                <Link to="/entries" style={{color: '#252223', textDecoration: 'none', marginTop: '0.8rem'}}>ENTRIES</Link>
                <Button className="primary-btn">LOGIN</Button>
            </div>
        </div>
    )
}

export default HomeHeader;