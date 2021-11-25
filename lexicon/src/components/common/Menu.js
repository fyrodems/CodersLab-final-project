import * as React from 'react';
// import Button from '@mui/material/Button';
//import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import logo from '../../images/logo-white.png'
import logoImg from "../../images/logo-icon(x1).png"

export default function BasicMenu() {

    return (
<>
    <header className="header__container">
        <div className="container">
            <MenuItem  style={{"display": "inline-block"}}>
                <Link className="logo" to="/">
                    <img src={logoImg} alt="Logo"/>
                    <img src={logo} alt="Logo" />
                </Link>
            </MenuItem>

            <nav className="header__nav">
                <ul className="nav__list">
                    <MenuItem className="list__element"><Link to="/about">About</Link> </MenuItem>
                    <MenuItem className="list__element"><Link to="/something">something</Link> </MenuItem>
                    <MenuItem className="list__element"><Link to="/contact">Contact</Link> </MenuItem>
                    {/*<MenuItem style={{"display": "inline-block"}}><Link to="/kontakt" onClick={handleClose}>Kontakt</Link> </MenuItem>*/}
                </ul>
            </nav>
        </div>
    </header>

    </>
    );
}