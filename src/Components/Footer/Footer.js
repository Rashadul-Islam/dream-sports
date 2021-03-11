import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
        <div id="footer">
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" className="p-3"><FontAwesomeIcon className="fa-3x" icon={faTwitter} /></a>
            <a href="https://www.facebook.com/rashadul5" target="_blank" rel="noreferrer noopener" className="p-3"><FontAwesomeIcon className="fa-3x" icon={faFacebook} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer noopener" className="p-3"><FontAwesomeIcon className="fa-3x" icon={faYoutube} /></a>
        </div>
    );
};

export default Footer;