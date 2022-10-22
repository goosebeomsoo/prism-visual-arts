import React from 'react';
import { Link } from 'react-router-dom';

import assets from '../db/assets.json';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={`.${assets.icon[1].logoMono}`} alt="logo" />
            </Link>
          </div>
          <div className="info">
            <ul className="info-list">
              <li className="copy-body-small">prismvisualarts@gmail.com</li>
              <li className="copy-body-small">Seoul, sinsa</li>
            </ul>
          </div>
          <div className="copyright">
            <p className="copy-body-small">
              @PRISM VISUAL ARTS 2022.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
