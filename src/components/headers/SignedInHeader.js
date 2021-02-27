import React, {useState} from 'react'
import { Button, Drawer, IconButton, Icon, Nav } from 'rsuite';
import {NavLink, useHistory} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/signedInHeader.css'
import currentWindowWidth from '../getCurrentWidth.js';

function SignedInHeader() {
    const history = useHistory();
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

    const redirectToLogin = () => {
        history.push('/login')
    }
    return (
        <div className='signin-container'>
            {currentWindowWidth()[0] > 700
                ?
                <nav className="myNav">
                    <div className="logo-div">
                        <img src={logo} alt="app-logo"/>
                    </div>
                    <div className="navlinks">
                        <NavLink to="/entries" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Entries</NavLink>         
                        <NavLink to="/entry" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Create Entry</NavLink>         
                        <NavLink to="/reminders" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Reminders</NavLink>         
                        <NavLink to="/reminder" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Create Reminder</NavLink>
                        <Button className="primary-btn navlinks-item" onClick={redirectToLogin}>LOGOUT</Button>
                    </div>         
                </nav>
                :
                <div>
                    <nav className="myNav">
                        <div className="logo-div">
                            <img src={logo} alt="app-logo"/>
                        </div>
                        <Nav pullRight  className="nav-div">
                            <IconButton className="burger-icon" onClick={() => setOpenMobileDrawer(true)} icon={<Icon icon="bars" />}/> 
                        </Nav>
                                
                    </nav>
                    <Drawer
                    size={'xs'}
                    placement={'right'}
                    show={openMobileDrawer}
                    className="drawer"
                    onHide={() => setOpenMobileDrawer(false)}>
                        <div className="navlinks">
                            <NavLink to="/entries" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Entries</NavLink>         
                            <NavLink to="/entry" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Create Entry</NavLink>         
                            <NavLink to="/reminders" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Reminders</NavLink>         
                            <NavLink to="/reminder" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Create Reminder</NavLink>
                            <Button className="primary-btn navlinks-item" onClick={redirectToLogin}>LOGOUT</Button>
                        </div>
                    </Drawer>
                </div>

            }
        </div>
    )
}

export default SignedInHeader
