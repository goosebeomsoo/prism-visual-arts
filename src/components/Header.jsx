import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import assets from '../db/assets.json';

function Header() {
  const [currentTab, setCurrentTab] = useState(0);
  const selectMenuHandler = (index) => { setCurrentTab(index); };

  const menuList = [
    { link: '/', name: 'HOME' },
    { link: '/portfolio', name: 'PORTFOLIO' },
    // { link: '/process', name: 'PROCESS' },
  ];

  const menuLists = menuList.map((list, index) => (
    <Link to={list.link} key={list.name}>
      <li
        className={currentTab === index ? 'tab  tab-selected copy-sub-heading' : 'tab copy-sub-heading'}
        onClick={() => selectMenuHandler(index)}
        role="presentation"
      >
        {list.name}
      </li>
    </Link>
  ));

  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-wrap">
          <Link
            to="/"
            onClick={() => { setCurrentTab(0); }}
          >
            <img src={`.${assets.icon[0].logoColor}`} alt="logo" />
          </Link>
        </div>
        <ul className="menu-list">
          {menuLists}
        </ul>
      </div>
    </header>
  );
}

export default Header;
