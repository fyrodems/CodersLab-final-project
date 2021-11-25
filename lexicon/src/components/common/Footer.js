import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import logoImg from "../../images/logo-icon(x1).png";
import logo from "../../images/logo-white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";

const Footer = () => {
    return (
        <footer className="footer__container">
                <div className="container">

                    <MenuItem  style={{"display": "inline-block"}}>
                        <Link className="logo" to="/">
                            <img src={logoImg} alt="Logo"/>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </MenuItem>

                    <small className="footer__copyright">@ 2021 Lexicon, All rights reserved</small>

                    <div className="footer__data">
                        <div className="footer__social">
                            <div>
                                <a href="https://github.com/fyrodems">
                                    <FontAwesomeIcon className="footer__icon" icon={faGithub}/>
                                    <span className="footer__link" style={{"display": "inline-block"}}>Check out my GitHub!</span>
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.gg/9rtFkjSXkq">
                                    <FontAwesomeIcon className="footer__icon" icon={faDiscord} />
                                    <span className="footer__link" style={{"display": "inline-block"}}>Or visit my Discord Server!</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
        </footer>
    );
};

export default Footer;