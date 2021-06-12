import React from 'react'
import './Header.css'
import logo from '../../assets/img/tomato-5.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Header">
            <div className="wrapper">
                <Link to='/' style={{textDecoration: "none",color: "black"}}>
                    <div className="logo">
                        <img className="Logo" src={logo} alt=""/>
                        <p className="header-title">Tomato Kingdom</p>
                    </div>
                </Link>
                
                <div className="navigation">
                    <Button title="Login" />
                    <Button title="Setting"  path='/setting'/>
                    <Button title="Missions" />
                </div>
            </div>
            
        </div>
    )
}

export default Header
