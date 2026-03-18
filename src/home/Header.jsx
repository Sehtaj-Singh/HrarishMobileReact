import { useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">

        <div className="logo">
          <img id="i-1" src="/images/cardLogo2.webp" />
        </div>

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

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </div>

        </div>

      </div>
    </>
  );
}