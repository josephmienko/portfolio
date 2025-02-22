import React from "react";
import { Link } from "react-router-dom";
import { SiteSearch } from "./SiteSearch";
import { ThemeSwitch } from "./ThemeSwitch";
import useScrollDirection from "../../hooks/hookScrollDirection";
import { useConfig } from "../../hooks/useConfig";
import.meta.env && console.log("Loaded ENV Variables:", import.meta.env);
import "./_navbar.scss";

export function Navbar() {
  const scrollDirection = useScrollDirection();
  const { brandName, logoPath, navLinks } = useConfig(); // Load from env variables

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary border-bottom ${scrollDirection === "down" ? "hide-navbar" : ""}`}>
      <div className="container-fluid">
        {/* Dynamic Logo and Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logoPath} alt="Logo" className="navbar-logo me-2" />
          {brandName}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link className="nav-link" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Site Search and Theme Toggle */}
          <SiteSearch />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
