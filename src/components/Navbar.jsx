import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation Items
  const navItems = [
    { link: 'Beranda', path: 'home' },
    { link: 'Tentang Kami', path: 'tentang' },
    { link: 'Bantuan', path: 'service' },
    { link: 'Media', path: 'media' },
    { link: 'Kontak', path: 'kontak' },
  ];

  return (
    <header
      className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 `}>
      <nav
        className={
          'py-4 lg:px-14 px-4 ${isSticky? "sticky top-0 left-0 right-0 border bg-white duration:300":""}'
        }>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="">
            <img src={logo} alt="" />
          </a>
          {/* Navigation items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">
                {link}
              </a>
            ))}
          </ul>
          {/* Button For Large Device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-8 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
