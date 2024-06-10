// NavIcons.js
import React, { useContext } from 'react';
import Home from "../../img/home.png";
import Sun1 from "../../img/sun.png";
import Sun2 from "../../img/darksun.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../themeProvider';

const NavIcons = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" title="Home" />
      </Link>
      <UilSetting />
      <Link to="../chat">
        <img src={Comment} alt="" title="Chat" />
      </Link>
      <img 
        src={theme === 'light' ? Sun2 : Sun1} 
        alt="Toggle Theme" 
        onClick={toggleTheme} 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
};

export default NavIcons;
