import React from 'react'
import { Button, ButtonToolbar } from 'rsuite';
import logo from '../../img/logo (1).png';
import '../../styles/homeheader.css';


function HomeHeader() {
    return (
        <div className="homeheader-container">
            <div className="logo-div">
                <img src={logo} alt="app-logo"/>
            </div>
            <div className="homeheader-nav">
                <h3>ENTRIES</h3>
                <Button appearance="primary" color="red" loading>SIGN INN</Button>
            </div>
            <ButtonToolbar>
      <Button color="red">Red</Button>
      <Button color="orange">Orange</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="green">Green</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="blue">Blue</Button>
      <Button color="violet">Violet</Button>
    </ButtonToolbar>
        </div>
    )
}

export default HomeHeader
