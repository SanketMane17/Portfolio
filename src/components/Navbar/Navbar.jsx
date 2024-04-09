import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { SocialMedia } from "../";
import { images } from '../../constants';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const checkSelectedSection = item => (location.hash === `#${item}` || (item === 'home' && !location.hash));

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text flex !flex-row gap-2" key={`link-${item}`}>
            {checkSelectedSection(item) &&  <span class="w-[5px] h-[5px] bg-black rounded-full"></span>}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <SocialMedia />

      <div className="app__navbar-menu">
        {toggle ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item} className={checkSelectedSection(item) ?'bg-[var(--secondary-color)] px-4 py-1 rounded-full': 'px-3'}>
                  <a href={`#${item}`} className={ checkSelectedSection(item) ? '!text-white' : ''} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <HiMenuAlt4 onClick={
            () => {
              setToggle(true);
            }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;