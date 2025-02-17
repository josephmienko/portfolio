import React from 'react';
import { Link } from 'react-router';
import { SiteSearch } from './SiteSearch';
import { ThemeSwitch } from './ThemeSwitch';
import useScrollDirection from '../../hooks/hookScrollDirection';
import './_navbar.scss';


export function Navbar() {
  const scrollDirection = useScrollDirection();
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${scrollDirection === 'down' ? 'hide-navbar' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo me-2" />
          My Blog
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
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>

          {/* Site Search and Theme Toggle */}
          <SiteSearch />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
