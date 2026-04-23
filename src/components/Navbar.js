import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const LINKS = [
  { to: "/",         label: "🏠 Početna" },
  { to: "/o-gradu",  label: "🏙️ O gradu" },
  { to: "/kontakt",  label: "📞 Kontakt" },
];

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo — NavLink na "/" vraća na početnu stranicu */}
      <NavLink to="/" className="navbar__logo">
        <span className="navbar__logo-icon">🗺️</span>
        <span className="navbar__logo-text">My City Planner</span>
      </NavLink>

      {/* Navigacijski linkovi */}
      <ul className="navbar__links">
        {LINKS.map((link) => (
          <li key={link.to}>
            {/*
              NavLink automatski dodaje className "active" kad je
              korisnik na toj ruti. Mi tu klasu koristimo u CSS-u
              kao .navbar__link.active
            */}
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
}