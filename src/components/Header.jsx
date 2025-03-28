import { useState, useRef } from "react";
import "./Header.scss";
import CanycoLogo from "../assets/3.png";
import CanycoText from "../assets/4.png";
import CanycoPattern from "../assets/8.png";

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

  const closeMenu = () => {
    setIsActive(false);
    if (navRef.current) {
      navRef.current.classList.remove("is_active");
    }
  };

  return (
    <header className="header">
      <div className="header_wrap">
        <div className="header_background">
          <img src={CanycoPattern} alt="" />
        </div>
        <div className="header_logo">
          <img className="header_logo-image" src={CanycoLogo} alt="Canyco" />
          <img className="header_logo-text" src={CanycoText} alt="Sorin educador canino" />
        </div>
        <div
          className={`header_hamburger js-hamburger ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="header_hamburger-line top"></div>
          <div className="header_hamburger-line mid"></div>
          <div className="header_hamburger-line bottom"></div>
        </div>
      </div>
      <nav className="header_nav" ref={navRef}>
        <ul className="header_nav_list">
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#home">Nosotros</a>
          </li>
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#services">Servicios</a>
          </li>
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#activities">Actividades</a>
          </li>
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#faqs">Faqs</a>
          </li>
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#socialMedia">Redes sociales</a>
          </li>
          <li className="header_nav_list-title" onClick={closeMenu}>
            <a href="./index.html#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
