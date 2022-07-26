import { HashLink as NavLink } from "react-router-hash-link";
import smoothscroll from "smoothscroll-polyfill";
import "./navBar.scss";

smoothscroll.polyfill();

export default function NavBar() {
  return (
    <nav className="header__navbar">
      <ul>
        <li>
          <NavLink
            smooth
            to="/#about"
            className="navbar__link"
            activeclassname="navbar_active"
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            smooth
            to="/#information"
            className="navbar__link"
            activeclassname="navbar_active"
          >
            Как это работает
          </NavLink>
        </li>
        <li>
          <NavLink
            smooth
            to="/#reviews"
            className="navbar__link"
            activeclassname="navbar_active"
          >
            Отзывы
          </NavLink>
        </li>
        <li>
          <NavLink
            smooth
            to="/#contacts"
            className="navbar__link"
            activeclassname="navbar_active"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
