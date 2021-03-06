import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Drawer } from 'antd';
import { Button, IconButton, Icon, Nav } from 'rsuite';
import {NavLink, useHistory, Link} from 'react-router-dom';
import logo from '../../img/logo (1).png';
import '../../styles/signedInHeader.css'
import currentWindowWidth from '../helpers/getCurrentWidth.js';
import {resetAuthState, resetEntriesState,  resetRemindersState} from '../../store/actions/resetStateAction';
import { deleteToken } from '../helpers/saveToken';


function SignedInHeader({resetEntriesState, resetAuthState, resetRemindersState}) {
    const history = useHistory();
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

    const redirectToLogin = () => {
        deleteToken()
        resetAuthState()
        resetEntriesState()
        resetRemindersState()
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
                        <NavLink to="/reminders" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Reminders</NavLink>         
                        <Button className="primary-btn navlinks-item" onClick={redirectToLogin}>LOGOUT</Button>
                    </div>         
                </nav>
                :
                <div>
                    <nav className="myNav">
                        <Link to='/'>
                            <div className="logo-div">
                                <img src={logo} alt="app-logo"/>
                            </div>
                        </Link>
                        <Nav pullRight  className="nav-div">
                            <IconButton className="burger-icon" onClick={() => setOpenMobileDrawer(true)} icon={<Icon icon="bars" />}/> 
                        </Nav>
                                
                    </nav>
                    <Drawer
                    size={'xs'}
                    placement={'right'}
                    visible={openMobileDrawer}
                    className="drawer"
                    onClose={() => setOpenMobileDrawer(false)}>
                        <div className="navlinks">
                            <NavLink to="/entries" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Entries</NavLink>         
                            <NavLink to="/reminders" activeClassName='active' style={{color: '#252223', textDecoration: 'none'}} className="navlinks-item">Reminders</NavLink>         
                            <Button className="primary-btn navlinks-item" onClick={redirectToLogin}>LOGOUT</Button>
                        </div>
                    </Drawer>
                </div>

            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetRemindersState: () => dispatch(resetRemindersState()),
        resetAuthState: () => dispatch(resetAuthState()),
        resetEntriesState: () => dispatch(resetEntriesState())

    }
}

export default connect(null, mapDispatchToProps)(SignedInHeader);

