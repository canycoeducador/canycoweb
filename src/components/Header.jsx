import React, { useState, useRef } from "react";
import "./Header.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (event) => {
    setIsActive(!isActive);
    if (navRef.current) {
      navRef.current.classList.toggle("is_active");
    }
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className={`header_hamburger js-hamburger ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
        <div className="header_hamburger-line top"></div>
        <div className="header_hamburger-line mid"></div>
        <div className="header_hamburger-line bottom"></div>
      </div>
      <nav className="header_nav" ref={navRef}>
        <ul className="header_nav_list">
          <li className="header_nav_list-title">
            <a href="./index.html#home">Nosotros</a>
          </li>
          <li className="header_nav_list-title">
            <a href="./index.html#education">Servicios</a>
          </li>
          <li className="header_nav_list-title">
            <a href="./index.html#profesional">Actividades</a>
          </li>
          <li className="header_nav_list-title">
            <a href="./index.html#experience">Faqs</a>
          </li>
          <li className="header_nav_list-title">
            <a href="./index.html#portfolio">Redes sociales</a>
          </li>
          <li className="header_nav_list-title">
            <a href="./index.html#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
