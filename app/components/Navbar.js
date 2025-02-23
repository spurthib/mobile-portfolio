"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: 'white',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>Spurthi Buchireddy</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Hamburger Icon */}
        <div 
          style={{ 
            display: 'none', 
            flexDirection: 'column', 
            cursor: 'pointer',
          }} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
        </div>

        {/* Navigation Links */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '15px',
          }}
        >
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link>
          <Link href="/research" style={{ color: 'white', textDecoration: 'none' }}>Research</Link>
          <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
        </div>
      </div>

      {/* Mobile menu (only visible on small screens) */}
      <div 
        style={{ 
          display: isOpen ? 'flex' : 'none', 
          flexDirection: 'column', 
          position: 'absolute', 
          top: '60px', 
          right: '20px', 
          backgroundColor: '#333', 
          padding: '10px', 
          borderRadius: '5px',
          zIndex: 1000,  // Ensure it stays on top
        }}
      >
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link>
        <Link href="/research" style={{ color: 'white', textDecoration: 'none' }}>Research</Link>
        <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
      </div>
    </nav>
  );
};

export default Navbar;
