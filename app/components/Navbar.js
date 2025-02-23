"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <nav>
      <div className="navbar-logo">Spurthi Buchireddy</div>
      
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link>
        <Link href="/research" style={{ color: 'white', textDecoration: 'none' }}>Research</Link>
        <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
      </div>
    </nav>
  );
};

export default Navbar;
