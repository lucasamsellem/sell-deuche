import NavbarLink from './NavbarLink';
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className='fixed w-full z-[999] top-0 flex py-2 lg:px-12 px-6 bg-amber-800 justify-between items-center'>
      <img
        src='logos/logo-trimmed.jpeg'
        alt='Logo Sell Deuche'
        className='bg-white p-1 rounded-lg lg:w-[8rem] w-[6rem]'
      />
      <nav className='hidden md:flex '>
        <ul className='flex gap-8'>
          <NavbarLink link='gallery'>Galerie</NavbarLink>
          <NavbarLink link='available-upholsteries'>Selleries</NavbarLink>
          <NavbarLink link='about'>A propos</NavbarLink>
          <NavbarLink link='contact'>Contact</NavbarLink>
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white text-2xl'>
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className='absolute top-18 right-0 bg-amber-800 w-full p-4'>
            <ul className='flex items-center justify-center gap-4'>
              <NavbarLink link='gallery' toggleMenu={toggleMenu}>
                Galerie
              </NavbarLink>
              <NavbarLink link='available-upholsteries' toggleMenu={toggleMenu}>
                Selleries
              </NavbarLink>
              <NavbarLink link='about' toggleMenu={toggleMenu}>
                A propos
              </NavbarLink>
              <NavbarLink link='contact' toggleMenu={toggleMenu}>
                Contact
              </NavbarLink>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
