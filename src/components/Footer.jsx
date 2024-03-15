import { Link } from 'react-router-dom';

import assets from '../db/assets.json';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + assets.icon[1].logoMono}
                alt="logo"
              />
            </Link>
          </div>
          <div className="info">
            <ul className="info-list">
              <li className="info copy-body">prismvisualarts@gmail.com</li>
              <li className="info copy-body">
                9F, 85, Cheonggyecheon-ro, Jongno-gu, Seoul, Republic of Korea
              </li>
            </ul>
          </div>
          <div className="copyright-wrap">
            <p className="copyright copy-body">
              &#169; PRISM VISUAL ARTS 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
