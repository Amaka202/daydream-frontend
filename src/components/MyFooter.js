import React from 'react'
import {Icon, IconButton, ButtonToolbar } from 'rsuite';
import {NavLink} from 'react-router-dom';
import '../styles/myfooter.css'


function MyFooter() {
    return (
        <div className="my-footer">
            <div className="flexed">
            <div className="flex-item footer-nav">
                <NavLink to="/entries" style={{color: '#252223', marginRight: '1rem'}}>ENTRIES</NavLink>
                <NavLink to="/reminders" style={{color: '#252223'}}>REMINDERS</NavLink>
            </div>
            <div className="flex-item social-links">
                <ButtonToolbar>
                    <a href="https://github.com/Amaka202" target="_blank" rel="noreferrer">
                        <IconButton icon={<Icon icon="github" />} color="gray" circle />
                    </a>
                    <a  href = "mailto:kutegalaxy404@gmail.com?subject = Feedback&body = Message" target="_blank" rel="noreferrer">
                        <IconButton icon={<Icon icon="google" />} color="red" circle />
                    </a>
                    <a href="https://twitter.com/techgirlamaka" target="_blank" rel="noreferrer">
                        <IconButton icon={<Icon icon="twitter" />} color="cyan" circle />
                    </a>
                    <a href="https://www.linkedin.com/in/chiamakaumeh/" target="_blank" rel="noreferrer">
                        <IconButton icon={<Icon icon="linkedin" />} color="blue" circle />
                    </a>
                </ButtonToolbar>
            </div>
            </div>
            <p>All rights reserved &copy; 2021</p>
        </div>
    )
}

export default MyFooter;
