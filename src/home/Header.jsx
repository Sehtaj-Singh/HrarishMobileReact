import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">

        {/* LOGO */}
        <div className="logo">
          <img id="i-1" src="/images/cardLogo2.webp" alt="logo" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#top-seller">Mobiles</a>
          <a href="#repair-title">Repair</a>
          <a
            href="https://wa.me/918572002626"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

      </header>

      {/* MOBILE NAV */}

      <div
        id="mobileNav"
        className={`mobile-nav ${open ? "active" : ""}`}
      >
        <div className="mobile-nav-panel">

          <div className="mobile-nav-top">
            <span>Menu</span>

            <span
              id="closeNav"
              onClick={() => setOpen(false)}
            >
              ×
            </span>
          </div>

          <div className="mobile-nav-links">

            <a href="#" onClick={() => setOpen(false)}>
              Home
            </a>

            <a href="#top-seller" onClick={() => setOpen(false)}>
              Mobiles
            </a>

            <a href="#repair-title" onClick={() => setOpen(false)}>
              Repair
            </a>

            <a
              href="https://wa.me/918572002626"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

          </div>

        </div>
      </div>
    </>
  );
}