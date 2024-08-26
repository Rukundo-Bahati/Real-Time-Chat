import React, { useContext } from "react";
import Home from "../../img/home.png";
import Sun1 from "../../img/sun.png";
import Sun2 from "../../img/darksun.png";
import { UilSetting, UilEnvelope } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeProvider";

const NavIcons = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const iconStyle = {
    color: theme === "light" ? "black" : "white", // Adjust color for light and dark mode
  };

  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" title="Home" />
      </Link>
      <UilSetting style={iconStyle} />
      <Link to="../chat">
        <UilEnvelope style={iconStyle} />
      </Link>
      <img
        src={theme === "light" ? Sun2 : Sun1}
        alt="Toggle Theme"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default NavIcons;
