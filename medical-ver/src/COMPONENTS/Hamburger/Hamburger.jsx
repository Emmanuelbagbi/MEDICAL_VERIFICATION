import './Hamburger.css';
import { useState } from 'react';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu state:', isOpen);
  };

  return (
    <>
      <div className="hamburger-menu">
        <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Content */}
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Hamburger;
