import Link from "next/link";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="nav">
        {/* Brand / Logo */}
        <div className="nav-logo">Daniel Wang Photography</div>
  
        <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        >
        {/* You can use a hamburger character or an icon */}
        ☰
        </button>
  
        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/">Overview</Link>
          </li>
          <li>
            <Link href="/galleries">Galleries</Link>
          </li>
          <li>
            <Link href="/vlogs">Life Vlogs</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar;